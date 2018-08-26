import Sequelize from 'sequelize';
import db from '../config/database';

const Event = db.define("Event",
    {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'  
        },
        title: {
           type: Sequelize.INTEGER,
           allowNull: false,
           field: 'title',
        },
        description: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'description'
        },
        location: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'location'
        },
        date: {
            type: Sequelize.TIME,
            allowNull: false,
            field: 'date',
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'img-url'
        },
        featured: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            field: 'featured',
        },
    },{
        tableName: 'events',
        timestamps: false
    }

);


export default Event;
