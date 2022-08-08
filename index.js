const EventEmitter = require('events');
const Router = require('./src/router');
const Server = require('./src/server');
const constant = require('./const');

const emitter = new EventEmitter();

const router = new Router();
router.setGetEndPoint(constant.AppRoute.OFFERS, (req, res) =>
  res.end('You requested /offers')
);
router.setGetEndPoint(constant.AppRoute.POSTS, (req, res) =>
  res.end('You requested /posts')
);

const server = new Server(emitter);
server.init();
server.listen(constant.DEFAULT_PORT);
server.registerRouter(router);
