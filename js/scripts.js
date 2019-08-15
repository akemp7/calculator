

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
  $("form#calculator").submit(function(event){

  var number1 = parseFloat($("#input1").val());
  var number2 = parseFloat($("#input2").val());
  var operator = $("input:radio[name=operator]:checked").val();



  if(operator==="add"){
    result = add(number1, number2);
   } else if (operator === "subtract") {
     result = subtract(number1, number2);
   } else if (operator === "multiply") {
     result = multiply(number1, number2);
   } else if (operator === "divide") {
     result = divide(number1, number2);
   }
   $("#output").text(result);

  console.log(result);
    event.preventDefault();

});
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
