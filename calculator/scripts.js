

 function add (number1, number2) {
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


$(document).ready(function(){
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  alert(add(number1, number2));


});


// BMI section
// var userMass = parseFloat(prompt("What is your Weight in lbs?"));
// var userHeight = parseFloat(prompt("What is your Height in inches?"));
// var metricMass = userMass * 0.453592;
// var metricHeight = userHeight * 0.0254;
// var bmiResult = (metricMass / (metricHeight * metricHeight));
// alert(bmiResult);


//Temperature Converter
// var userTemp = parseInt(prompt("Enter Farenheit Temperature"));
// var kelvin = (userTemp - 32 ) * 5 / 9 + 273.15;
// var celcius = (userTemp - 32) * 5 / 9;
//
// var conversion = "Kelvin:" + kelvin + " Celcius:" + celcius;
//
// alert(conversion);
