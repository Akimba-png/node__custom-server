const http = require('http');
const EventEmitter = require('events');
const constant = require('./const');

const emitter = new EventEmitter();

class Router {
  endPoint = {};

  addEndPoint(method, path, handler) {
    if (!this.endPoint[path]) {
      this.endPoint[path] = {};
    }
    const currentEndPoint = this.endPoint[path];

    if (currentEndPoint[method]) {
      throw new Error(
        `Method ${method} on path ${path} is already implemented'`
      );
    }
    emitter.on(`[${path}]:[${method}]`, (req, res) => handler(req, res));
  }

  setGetEndPoint(path, handler) {
    this.addEndPoint('GET', path, handler);
  }
}

class Server {
  constructor() {
    this.server = null;
  }

  #createServer() {
    return http.createServer((req, res) => {
      const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
      if (!emitted) {
        res.end('404 Page not found');
      }
    });
  }

  init() {
    this.server = this.#createServer();
  }

  listen(port) {
    this.server.listen(port, () =>
      console.log(`Server is listening on port ${port}`)
    );
  }
}

const router = new Router();
router.setGetEndPoint(constant.AppRoute.OFFERS, (req, res) =>
  res.end('this is the end')
);

const server = new Server();
server.init();
server.listen(constant.DEFAULT_PORT);
