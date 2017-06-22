/**
 * Created by vik_kod on 20.06.17.
 */
const config = require('../../config/default');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`mysql://${config.db.user}:${config.db.password}@0.0.0.0:3305/${config.db.name}`);
const app = require('http').createServer();
const io = require('socket.io')(app);
const fs = require('fs');
const Chat = sequelize.define('item', {
    Name: {
        type: Sequelize.STRING
    },
    Message: {
        type: Sequelize.STRING
    }
});

app.listen(8081);

let count = 0;

io.on('connection', function (socket) {

    ++count;
    console.log(`New connection, all connection: ${count}`);

    socket.on('disconnect', function(){
        --count;
        console.log(`Disconnect, all connection: ${count}`);
    });

    // Эмитим событие для каждого соединения
    // io.emit('broadcast');

    socket.on('send', (data, id) => {

        // Отправка сообщения в базу
        Chat.create({ Name: 'User', Message: `${data}`}).then(function () {
            // Отправка сообщения клиенту
            Chat.findAll({
                limit: 1,
                order: [[ 'id', 'DESC' ]],
                raw: true
            }).then(function(item){
                io.emit('send', item);
            });
        });
    });
    // Получение сообщений из базы
    // socket.on('connect', () => {
    //     Chat.findAll({raw: true}).then(items => {
    //         socket.emit('getAllBack', items);
    //     });
    // })
});

