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
    currentEndPoint[method] = handler;
  }

  setGetEndPoint(path, handler) {
    this.addEndPoint('GET', path, handler);
  }
}

module.exports = Router;
