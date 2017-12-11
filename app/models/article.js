// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: { type: String, require: true },
  Password: { type: String, require: true },
  Userid: { type: Number, require: true },
  Email: { type: String },
  Signature: { type: String },
  Sex: { type: Number, require: true },
  Age: { type: Number, require: true },
  IsActive: { type: Number, require: true },
  Photo: { type: String, require: true }

});



mongoose.model('User', UserSchema);
