
var App = function(){
	this.init();
}

App.prototype.init = function(){
	console.log("Init");
}

App.prototype.wiffle = function(){
	console.log("wiffle!?");
}

module.exports = App;