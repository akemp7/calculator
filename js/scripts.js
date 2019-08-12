var number1 = parseInt(prompt("Enter first Number"));
var number2 = parseInt(prompt("Enter second Number"));


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

var result = divide(number1, number2);

alert(result);
