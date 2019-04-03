var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/simpleRequest', (req, res, next) => {
  res.json({
    text:"简单请求的响应",
    data:"我是server1的接口"
  })
})

// router.options('/noSimple',(res => {
//   res.set({
//     "Access-Control-Allow-Origin":"http://localhost:3002",
//     "Access-Control-Allow-Headers":"Content-Type",
//     "Access-Control-Allow-Method":"POST",
//     "Access-Control-Allow-Credentials":true
//   });
//   res.send()
// }))
router.post('/noSimple',(req, res, next) => {
  // res.set({
  //   "Access-Control-Allow-Origin":"http://localhost:3002",
  //   "Access-Control-Allow-Headers":"Content-Type",
  //   "Access-Control-Allow-Method":"POST",
  //   "Access-Control-Allow-Credentials":true
  // });
  res.json({
    text:"非简单请求的响应",
    data:"我是server1的接口"
  })
})

module.exports = router;
