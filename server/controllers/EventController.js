import Event from '../models/Event';

class EventController {

    constructor(req,res){
            this.req = req;
            this.res = res;
    }

   async create (req, res) {
            const { body } = req;
        try{
            const event = await Event.create({
                title: body.title,
                description: body.description,
                location: body.location,
                date: body.date,
                image: body.image,
                featured: body.featured
            });
            return res.status(200).json({ event });
        }catch(err){
            return res.status(500).json({ msg: 'Internal server error!' });
        }
    }

   async getAll (req, res) {
        try {
            const events = await Event.findAll();
            let response = res.status(200).json({ events });
            return response;
        }catch(err){
            return res.status(500).json({ msg: 'Internal Server error' });
        }
    };

    update (req, res) {
            
    }

    destroy (req,res) {

    }


}

export default EventController;