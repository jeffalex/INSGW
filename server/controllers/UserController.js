import User from '../models/User';
import bcryptService from '../services/bcryptService';
import authService  from '../services/authService';

class UserController{

    create (req, res) {
            
    }

   async getAll  (req, res) {
        try {
          const users = await User.findAll();
    
          return res.status(200).json({ users });
        } catch (err) {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        }
      };
    

    update (req, res) {
            
    }

    destroy (req,res) {

    }

     async login(req, res) {
        const { username, password } = req.body;

        if(username && password){
            try{
                const user = await User
                .findOne({
                    where:{
                        username,
                    },
                });

                if(!username){
                    return res.status(400).json({ msg: 'Bad Request: User not found!'});
                }
                if(bcryptService().comparePassword(password, user.password)){
                    const token = authService().issue({ id: user.id });

                    return res.status(200).json({ token, user });
                }

                return res.status(401).json({ msg: 'Unauthorized' });
            }catch(err){
                console.log(err);
                return res.status(500).json({ msg: 'Internal server error' });
            }
        }
        return res.status(400).json({ msg: 'Bad Request: Username or password is wrong!'});
    };

    validate (req, res) {
        const { token}  = req.body;

        authService().verify(token, (err) => {
             if(err){
                 return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
             }   
             return res.status(200).json({ isvalid: true});
        });
    };
}

export default UserController;