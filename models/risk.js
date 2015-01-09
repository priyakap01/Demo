 var restful		=	require('node-restful');
var mongoose	=	restful.mongoose;

var projectRiskSchema = new mongoose.Schema({
	Risk_Issue: String,
	Mitigation: String,
	Resp:String,
	Dated:String,
	Status : String
	
});

module.exports = mongoose.model('projectRisk', projectRiskSchema);
