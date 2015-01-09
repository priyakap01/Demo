var restful		=	require('node-restful');
var mongoose	=	restful.mongoose;

var projectKpiSchema = new mongoose.Schema({
Cost : String,
Schedule : String,
Quality : String
});

module.exports = restful.model('projectKpi', projectKpiSchema);