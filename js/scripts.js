// var number1 = parseInt(prompt("Enter first Number"));
// var number2 = parseInt(prompt("Enter second Number"));


var add = function (number1, number2) {
  return number1 + number2
};

var subtract = function (number1, number2) {
	return number1 - number2
} ;

var multiply = function (number1, number2) {
	return number1 * number2
} ;

var divide = function (number1, number2) {
	return number1 / number2
} ;



var userMass = parseFloat(prompt("What is your Weight in lbs?"));
var userHeight = parseFloat(prompt("What is your Heght in inches?"));
var metricMass = userMass * 0.453592;
var metricHeight = userHeight * 0.0254;

var bmiResult = (metricMass / (metricHeight * metricHeight));





alert(bmiResult);


// var result = divide(number1, number2);
//
// alert(result);
