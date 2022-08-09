const Router = require('./../router');
const constant = require('./../../const');

const {StatusCode, AppRoute} = constant;


const postData = [
  {id: 1, post: 'post'}, {id: 2, post: 'post post'}, {id: 3, post: 'post post post'},
];

const dataRouter = new Router();

dataRouter.setGetEndPoint(AppRoute.POSTS, (req, res) => {
  res.writeHead(StatusCode.SUCCESS, {'content-type': 'application/json'});
  res.end(JSON.stringify(postData));
});

dataRouter.setGetEndPoint(AppRoute.OFFERS, (req, res) => {
  res.writeHead(StatusCode.SUCCESS, {'content-type': 'text/html'});
  res.end('<ul><li>Offer 1</li></ul>');
});


module.exports = dataRouter;
