var express = require('express');
var router = express.Router();
var bookModel = require("../model/book")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/book',(req,res,next) => {
  const {title,author} = req.body;
  bookModel.create({title,author}).then(data => {
    console.log(data);
    res.json({
      code:200,
      data
    })
  })
})
router.get('/book',(req,res,next) => {
  let {pn=1,size=2} = req.query;
  size = Number(size);
  pn = Number(pn);
  bookModel.find().limit(size).skip((pn-1)*size).then(data => {
    res.json({
      code:200,
      data
    })
  })
})
router.patch('/book',(req,res,next) => {
   const {_id,author} = req.body;

   bookModel.updateOne({_id},{$set: {author}}).then(change => {
     res.json({
       code:200,
       change
     })
   })
})
router.delete('/book/:id',(req,res,next) => {
  const {id} = req.params;
  bookModel.deleteOne({_id:id}).then(del => {
    res.json({
      code:200,
      data:del
    })
  })
})

module.exports = router;
