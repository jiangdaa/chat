const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const url = require('url');
const Member = mongoose.model('Member');

module.exports = (app) => {
  app.use('/login', router);
};

router.get('/login', (req, res, next) => {

  res.render('login/login', {
    title: 'Generator-Express MVC',
    articles: 'chat'
  });

});


router.get('/check', (req, res, next) => {
	let params = url.parse(req.url,true).query;
	Member.find({user:params._user,password:params._password},(err,data)=>{
		if(err) throw err;
		if(data.length!=0){
			req.session.username = params._user;
			res.redirect('/home/main');

		}else{
			res.end('<script>alert("密码错误");window.location.href = "/"</script>');

		}


	});



	/*
		let data = { 
		    "User" : "admin", 
		    "Password" : "admin", 
		    "Userid" : 10001, 
		    "Email" : "jiangdaa@qq.com", 
		    "Signature" : "我是管理员", 
		    "Sex" : 1, 
		    "Age" : 23, 
		    "IsActive" :1, 
		    "Photo" : "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1512975304&di=4795617a3b92ee892f7124a5bb1542eb&src=http://img3.duitang.com/uploads/item/201507/22/20150722075234_LBKyc.jpeg"
	  	}
		new User(data).save((err)=>{
			console.log('err' + err);

		});
	*/
	//new Member({user:'jiangda',password:'jiangda'}).save();
	//Member.f();
	
		


});

router.get('/req', (req, res, next) => {


});
