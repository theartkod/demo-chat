/**
 * Created by vik_kod on 19.06.17.
 */
import config from '../../config/default'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(`mysql://${config.db.user}:${config.db.password}@0.0.0.0:3305/${config.db.name}`);
const Chat = sequelize.define('item', {
    Name: {
        type: Sequelize.STRING
    },
    Message: {
        type: Sequelize.STRING
    }
});

// // force: true will drop the table if it already exists
// Chat.sync({force: true}).then(() => {
//     // Table created
//     return Chat.create({
//         Name: 'John',
//         Message: 'Message'
//     });
// });


const data = {
    getAll: async () => {
        return await Chat.findAll();
    },
    create: async (data) => {
        Chat.create({ Name: `${data.name}`, Message: `${data.msg}`});
    }

};

export default data;