var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
  topic: String,
  descrip: String,
  catname: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
},{timestamps:true});

mongoose.model('Topic', TopicSchema)