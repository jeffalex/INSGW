class EventController {
    constructor(req,res){
            this.req = req;
            this.res = res;
    }

    create (req, res) {
        res.send('created a User');
    }

    getAll (req, res) {
        res.send('hi Bro!');

    }

    update (req, res) {
            
    }

    destroy (req,res) {

    }


}

export default EventController;