const EventEmitter = require('events');
const Server = require('./src/server');
const dataRouter = require('./src/routers/data-router');
const toJsonMiddleware = require('./src/middlewares/toJson');
const parseUrl = require('./src/middlewares/parseUrl');
const {DEFAULT_PORT, BASE_URL} = require('./const');

const emitter = new EventEmitter();

const server = new Server(emitter);
server.init();
server.listen(DEFAULT_PORT);
server.addMiddleware(toJsonMiddleware);
server.addMiddleware(parseUrl(BASE_URL));
server.registerRouter(dataRouter);
