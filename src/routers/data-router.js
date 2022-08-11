const Router = require('./../router');
const constant = require('./../../const');

const { AppRoute } = constant;


const postData = [
  {id: 1, post: 'post'}, {id: 2, post: 'post post'}, {id: 3, post: 'post post post'},
];

const dataRouter = new Router();

dataRouter.setGetEndPoint(AppRoute.POSTS, (req, res) => {
  if (req.pathparam.id) {
    res.send(postData.filter((e) => e.id === Number(req.pathparam.id)))
    return;
  }
  res.send(postData);
});

dataRouter.setPostEndPoint(AppRoute.POSTS, (req, res) => {
  postData.push(JSON.parse(req.body));
  res.send(postData);
})


module.exports = dataRouter;
