var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var cart = new Schema({
	fullname:  {type: String},
	phone: {type: String},
	giohang : {type:Object},
},{collection : "cart"});

module.exports = mongoose.model('cart',cart);