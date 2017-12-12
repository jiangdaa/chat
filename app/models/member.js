const mongoose = require('mongoose');


const MemberSchema = mongoose.Schema({
	user:String,
	password:String
});

MemberSchema.static('f',()=>{

	console.log(this);

});



mongoose.model('Member',MemberSchema);

