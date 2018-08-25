import Event from '../models/Event';

class EventController {
    constructor(req,res){
            this.req = req;
            this.res = res;
    }

    create (req, res) {
        res.send('created a User');
    }

   async getAll  (req, res) {
        try {
            const events = await Event.findAll();
            let response = res.status(200).json({ events });
            console.log(response.json());
            return response
        }catch(err){
            console.log(err);
            return res.status(500).json({ msg: 'Internal Server error' });
        }
    };

    update (req, res) {
            
    }

    destroy (req,res) {

    }


}

export default EventController;