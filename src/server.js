const http = require('http');

class Server {
  constructor(emitter) {
    this.server = null;
    this.emitter = emitter;
  }

  #createServer() {
    return http.createServer((req, res) => {
      const emitted = this.emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
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

  registerRouter(router) {
    const endPoint = router.endPoint;
    const pathNames = Object.keys(endPoint);
    pathNames.forEach((path) => {
      const methodsNames = Object.keys(endPoint[path]);
      methodsNames.forEach((method) => {
        this.emitter.on(`[${path}]:[${method}]`, (req, res) => endPoint[path][method](req, res));
      });
    });
  }
}

module.exports = Server;
