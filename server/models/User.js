import Sequelize from "sequelize";
import db from "../config/database";

const User  = db.define("User",
    {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'
        },
        
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'username'
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'password'
        }   
    },{
        tableName: 'users',
        timestamps: true,
    }
);


export default User;