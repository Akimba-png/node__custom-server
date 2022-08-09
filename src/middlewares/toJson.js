const constant = require('./../../const');

const { StatusCode } = constant;

module.exports = (req, res) => {
  res.send = function(data) {
    res.writeHead(StatusCode.SUCCESS, { 'content-type': 'application/json'});
    res.end(JSON.stringify(data));
  }
}

