var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var Post = new Schema({
  	username 	: String,
  	video 		: { type : String , require : true , trim : true },
  	link 		: { type : String , require : true } ,
  	email 		: String,
  	intro 		: String,
  	status 		: Boolean,
  	time 		: String,
  	created_at : { type: Date, default: Date.now }
}, {collection : 'post'});

module.exports = mongoose.model('Post', Post);