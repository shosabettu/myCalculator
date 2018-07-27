let calculator = {};
//Function to return output based on operator and 2 numbers
calculator.getResult = function(operator, num1, num2)
{
	var result = 0;

	//If num1 and num2 are not number, return "Not a valid input" message
	if (isNaN(num1) || isNaN(num2))
		return "Not a valid input";

	//If operator is +, perform addition
	if (operator == "+")
		result = num1 + num2;

	//If operator is -, perform substraction
	else if (operator == "-")
		result = num1 - num2;

	//If operator is*, perform multiplication
	else if (operator == "*")
 		result = num1 * num2;

	//If operator is /, perform division
	else if (operator == "/")
		result = num1 / num2;

	//If operator is not +-*/, return "Not a valid operator" message
	else
		result = "Not a valid operator";
	return result;
}
module.exports = calculator;
