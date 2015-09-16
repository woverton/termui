var BarChart = require("./formatters/bar.js");

var App = function(){
	this.init();
}

App.prototype.init = function(){
	this.barChart = new BarChart();
}

App.prototype.bar = function(data){
	return this.barChart.render(data);
}

module.exports = App;