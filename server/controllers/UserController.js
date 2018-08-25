class UserController{
    constructor(req, res){
            this.req = req;
            this.res = res;
    }

    create (req, res) {
        res.send('created a User');
    }

    getAll (req, res) {
        res.send('hi Bur!');

    }

    update (req, res) {
            
    }

    destroy (req,res) {

    }

    login  (req, res) {

    }

    validate (req, res) {

    }
}

export default UserController;