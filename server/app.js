const {json, send} = require('micro');
const  {router,get,put,post, del} = require ('microrouter');
const cors = require('micro-cors')();
const  authService = require ('./services/authService');
const  bcryptService = require ('./services/bcryptService');
const  Event = require ('./models/Event');
const  User = require ('./models/User');

async function createEvent (req, res) {
    
    try {
        let params = await json(req);
        let  {
            title,
            description,
            location,
            date,
            image,
            featured
        } = params;

       const events = await Event.create({
            title: title,
            description: description,
            location: location,
            date: date,
            image: image,
            featured: featured,
         })
       send(res,200,events);
    } catch (err){
            send(res,500,{ err:  'Internal Server error'}); 
    }
};

async function getAllEvents (req, res) {
    try {
        const events = await Event.findAll({ offset: 0, limit: 20});
         send(res,200, events) 
    } catch (err){
         send(res, 404,{ err: 'Internal Server error' });
    }
};

async function findById(req, res){
 try{   
    const event = await Event.findById(req.params.id)
        send(res,200,event);
 } catch (err) {
        send(res,404,{err: 'Internal Server error'});
 }  
}   

async function updateEvent (req, res) {
    try {
        
        let params = await json(req);

        let  {
            id,
            title,
            description,
            location,
            date,
            image,
            featured
        } = params;

        let event = {
            title: title,
            title: title,
            description: description,
            location: location,
            date: date,
            image: image,
            featured: featured,
        }
        const events = await Event.update(event,{
            where: {
                id: id
            },
        })
        send(res,200,events);
    } catch(err){
       send(res,404,{err: 'Internal Server error'})
    }
};

async function deleteEvent (req,res) {
  try {  
        let params = await json(req);
        let { id } = params;
    const event =  await Event.find({ where: { id: id }});
    const result = Event.destroy({ where: event});
        send(res,200,result);
  } catch(err) {
       send(res,404,{err:'Internal Server error'})
    }
}


async function getAllUsers  (req, res) {
    
    try {
            const users = await User.findAll();
            send(res,200,users);
    } catch (err) {
      console.log(err);
       send(res,500,{err: 'Internal server error'});
    }
  };


async function login(req, res) {

    let params = await json(req);
    const { username, password } = params;

    if(username && password){
        try{
            const user = await User
            .findOne({
                where:{
                    username,
                },
            });

            if(!username){
                send(res,404,{ err: 'Bad Request: User not found!'});
            }
            if(bcryptService().comparePassword(password, user.password)){
                const token = authService().issue({ id: user.id });

                send(res,200,{ token, user });
            }

             send(res,404,{err: 'Unauthorized' });
        }catch(err){
            console.log(err);
            send(res,500, {err: 'Internal server error' });
        }
    }
    send(res,404,{err: 'Bad Request: Username or password is wrong!'});
};

function validate(token) {
    let trusted = authService().verify(token);
    let { id } = trusted;
    
     if(id !== null || undefined)    {
         return true;
     }else {
         return false;
     }
};


async function test(req,res){
    
    let params = await json(req);
    let { token } = params;

    try {
        if(validate(token)){
            send(res,200,{test: 'this is a test'});
        }else {
            send(res,404,{err: 'Invalid token'})
        }
    } catch (e) {
        send(res,404,{err: 'err'});
    }
}

module.exports = cors(router(
    post('/test',test),
    post('/event', createEvent),
    post('/login', login),
    get('/users', getAllUsers),
    get('/events', getAllEvents),
    get('/event/:id', findById),
    put('/event/:id', updateEvent),
    del('/event/:id', deleteEvent),
));