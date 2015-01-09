 var restful		=	require('node-restful');
var mongoose	=	restful.mongoose;

var table1Schema = new mongoose.Schema({
	Offering: String,
	Sector: String,
	Industry:String,
	Brands_Involved : String,
	Offering_alignment : String,
	Op_model_alignment : String,
	 GIC_PM : String
});

// var projectStage =  new mongoose.Schema({
// Consulting:String,
// Personalize:String,
// Operation:String
// });

module.exports = mongoose.model('table1', table1Schema);
