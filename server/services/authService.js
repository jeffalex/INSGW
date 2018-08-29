const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.JWT_SECRET;

const authService = () => {
    const issue = (payload) =>  {
       return  jwt.sign(payload, secret, { expiresIn: 86400 });
    }

    const verify = (token, cb) => {
        return jwt.verify(token, secret, {}, cb);
    }
 
    return {
        verify,
        issue,
    }
};

module.exports = authService;