var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var UserModel = require('../model/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
  	UserModel.getUserByEmail(username,function (err,username) {
  		if (err) throw err;
  		if (!username) {
  			return done(null,false,{message : 'Tài khoản này không tồn tại'});
  		}

  		UserModel.comparePass(password,username.password,function (err,isMatch) {
  			if (err) throw err;
  			if (isMatch) {
  				 return done(null, username);
  			} else {
  				return done(null,false,{message : 'Mật khẩu không chính xác'});
  			}
  		});
  	})
  }
));

passport.serializeUser(function(email, done) {
  done(null, email.id);
});

passport.deserializeUser(function(id, done) {
  UserModel.getUserById(id,function (err,email) {
  	done(err,email);
  })
});

function checkAuth (req , res , next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

router.get('/login',function (req, res, next) {
	res.render('login',{errors : null});
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

router.get('/register',function (req, res, next) {
	res.render('register',{errors : null});
});

router.post('/register',function (req, res, next) {
	req.assert('email', 'Đây không phải là Email').isEmail();
	req.assert('password', 'Vui lòng nhập Password').notEmpty();
	req.assert('password_confirmation', 'Hai mật khẩu không trùng nhau').equals(req.body.password);
	req.assert('fullname', 'Vui lòng nhập họ tên').notEmpty();
	req.assert('phone', 'Vui lòng nhập điện thoại').notEmpty();
	req.assert('fax', 'Vui lòng nhập fax').notEmpty();

	var errors = req.validationErrors();
	if (errors) {
	 	res.render('register',{errors : errors});
	} else {
		var newUser = new UserModel({
			email : req.body.email,
			password : req.body.password,
			fullname : req.body.fullname,
			phone : req.body.phone,
			fax : req.body.fax
		});

		UserModel.createUser(newUser);
		req.flash('success_msg','Đăng Ký Thành Viên Thành Công');
		res.redirect('/');
	}
});

router.get('/admin', checkAuth ,function (req , res , next) {
  res.send("Hello " + req.user.fullname + "<br /><a href='/logout'>Logout</a>");
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

module.exports = router;
