var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/vvl';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db.close();
});

router.get('/', function(req, res, next) {
	var findDocuments = function(db, callback) {
	  var collection = db.collection('post');
	  collection.find({}).toArray(function(err, docs) {
	    assert.equal(err, null);
	    callback(docs);
	  });
	}

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  findDocuments(db, function(data) {
	  	res.render('manage',{data : data});
	    db.close();
	  });
	});
});

router.get('/xoa/:id',function (req, res, next) {
	var id = objectId(req.params.id);
	var deleteDocument = function(db, callback) {
	  var collection = db.collection('post');
	  collection.deleteOne({ _id : id }, function(err, result) {
	    assert.equal(err, null);
	    console.log("Removed Finish");
	  });
	}

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  deleteDocument(db, function() {
	    db.close();
	  });
	});

	res.redirect('/quan-ly');
});


router.get('/sua/:id',function (req, res, next) {
	var id = objectId(req.params.id);

	var findDocuments = function(db, callback) {
	  var collection = db.collection('post');
	  collection.find({_id : id}).toArray(function(err, docs) {
	    assert.equal(err, null);
	    callback(docs);
	  });
	}

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  findDocuments(db, function(data) {
	  	res.render('edit',{data : data[0]});
	    db.close();
	  });
	});

});

router.post('/sua/:id', function(req, res, next) {
	var id = objectId(req.params.id);

	var data = {
		'username' 	: req.body.txtFullName,
		'video'		: req.body.txtVideo,
		'link'		: req.body.txtLink,
		'email'		: req.body.txtEmail,
		'intro'		: req.body.txtIntro,
		'status'	: true,
	};

	var updateDocument = function(db, callback) {
	  var collection = db.collection('post');
	  collection.updateOne({ _id : id }
	    , { $set: data }, function(err, result) {
	    assert.equal(err, null);
	    callback(result);
	  });  
	}

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  updateDocument(db, function() {
	    db.close();
	  });
	});

	res.redirect('/quan-ly');
});

module.exports = router;
