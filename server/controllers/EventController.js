import Event from '../models/Event';

class EventController {

    constructor(req,res){
            this.req = req;
            this.res = res;
    }

    create (req, res) {
         Event.create({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            date: req.body.date,
            image: req.body.image,
            featured: req.body.featured,
         }).then(event => {
            res.send(event);
         });
    };

   async getAll (req, res) {
        try {
            const events = await Event.findAll();
            let response = res.status(200).json({ events });
            return response;
        }catch(err){
            return res.status(500).json({ msg: 'Internal Server error' });
        }
    };


    async findById(req, res){
        
         Event.findById(req.params.id).
            then(event => {
                res.send(event);
            });
        
    }   
    update (req, res) {

        let event = {
           title: req.body.title,
           title: req.body.title,
           description: req.body.description,
           location: req.body.location,
           date: req.body.date,
           image: req.body.image,
           featured: req.body.featured,
        }
        Event.update(event,{
            where: {
                id: req.body.id
            },
        }).then(event => {
            res.send(event);
        }).catch((err) =>{
            res.render('error', err);
        });
    };

    delete (req,res) {
        Event.find({
            where: { id: req.params.id }
        }).then((result) => {
            return Event.destroy({ where: {id:  req.body.id}})
                .then((u) => { return res.send(result) });
        });

    };
}

export default EventController;