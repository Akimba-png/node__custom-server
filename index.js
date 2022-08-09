const EventEmitter = require('events');
const Server = require('./src/server');
const dataRouter = require('./src/routers/data-router');
const constant = require('./const');


const emitter = new EventEmitter();

const server = new Server(emitter);
server.init();
server.listen(constant.DEFAULT_PORT);
server.registerRouter(dataRouter);
