// Dependencies
var restful		=	require('node-restful');
var mongoose	=	restful.mongoose;

var projectInfo = require('./table');
var projectStage = require('./proStage');
var projectRisk = require('./risk');


//Schema
var projectSchema = new mongoose.Schema({

	projectInfo:[String],
	projectStage:[projectStage.schema],
	projectRisk:[projectRisk.schema]
	
});

//Return Model
module.exports = restful.model('Project', projectSchema);
