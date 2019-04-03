var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/login', (req, res) => {
  req.session.loginStatus = true;
  res.json({
    code: 200,
    data: "登录成功"
  })
})

router.get("/isLogin", (req, res) => {
  if(req.session.loginStatus){
    res.json({
      code: 200,
      data: "登录成功的状态"
    })
  } else {
    res.json({
      code: 200,
      data: "未登录状态"
    })
  }
})

module.exports = router;