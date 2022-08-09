const Router = require('./../router');
const constant = require('./../../const');

const { AppRoute } = constant;


const postData = [
  {id: 1, post: 'post'}, {id: 2, post: 'post post'}, {id: 3, post: 'post post post'},
];

const dataRouter = new Router();

dataRouter.setGetEndPoint(AppRoute.POSTS, (req, res) => {
  res.send(postData);
});


module.exports = dataRouter;
