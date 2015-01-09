var restful		=	require('node-restful');
var mongoose	=	restful.mongoose;

var projectStageSchema =  new mongoose.Schema({
Consulting:String,
Personalize:String,
Operation:String
});

module.exports = mongoose.model('projectStage', projectStageSchema);
