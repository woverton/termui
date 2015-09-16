var BarChart = function() {
	this.barTypes = ["█", "░", "▒", "▓"];
}

BarChart.prototype.render = function(data, title) {
    if (!Array.isArray(data)) {
    	throw "first parameter of render() must be an array not a " + typeof data
    }

    // The sum of all values added together
    var sumValue = 0;

    for (var i = 0; i < data.length; i++) {
    	if(!data[i].value){
    		throw "all data points must have '.value' variable"
    	}

    	if(typeof data[i].value != "number"){
    		throw "all data points value must be a number not a " + typeof data[i].value
    	}

    	sumValue += data[i].value
    };

    var stretchRatio = process.stdout.columns / sumValue;

    // The final output to supply to the user
    var output = "";

    for (var i = 0; i < data.length; i++) {
    	// Create the text for this part of the bar
    	var line = new Array(Math.floor(data[i].value * stretchRatio)).join(this.barTypes[i % this.barTypes.length]);

    	output += line
    };

    return output;
}

module.exports = BarChart;