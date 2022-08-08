const constant = require('./const');
const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case constant.AppRoute.OFFERS:
      res.end(`You have requested route ${req.url}`);
      break;
    case constant.AppRoute.POSTS:
      res.end(`You have requested route ${req.url}`);
      break;
    case constant.AppRoute.LANG:
      res.writeHead(200, { 'content-type': 'text/html; charset=utf8'});
      res.end(
        `Вы запросили страницу /lang
        Чтобы увидеть текст необходимо указать заголовки`
      );
    case constant.AppRoute.MAIN:
      res.end(`You are on the main page`);
      break;
    default:
      res.end(`404 page not found`);
  }
});

server.listen(constant.DEFAULT_PORT, () =>
  console.log(`Server is listening on port ${constant.DEFAULT_PORT}`)
);
