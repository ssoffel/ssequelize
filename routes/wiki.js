const express = require('express');
const router = express.Router();
const  addPage = require('../views/addPage')
const  homePage  = require('../views/wikipage')
module.exports = router

router.get('/',(req,res,next)=>{
  res.redirect('/wiki');
});

// router.post('/',(req,res,next)=>{
//   res.send('got to POST /wiki');
// });

router.get('/add', (req,res,next)=>{
  res.send(addPage());
});

router.get('/wiki',(req,res,next)=>{
  res.send(homePage());
});

router.post('/wiki',(req,res,next)=>{
  console.log("body", res.json(req.body));
});
