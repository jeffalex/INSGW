const bcrypt = require('bcrypt');

const bcryptService = () => {
    const password = (user) => {
        const salt = bcrypt.genSalt();
        const hash = bcrypt.hash(user.password, salt);
        return hash;
    };

    const comparePassword = (pw, hash)  => {
        return  bcrypt.compare(pw, hash);
    };

    return {
        password,
        comparePassword,
    };
};

module.exports = bcryptService;