
function numberButtonClick(number) {
  const display = document.querySelector('.display');
  display.textContent += number;
};

function operationButtonClick(operation) {
  const display = document.querySelector('.display');
  display.textContent += ` ${operation} `;
};

function allClearClick() {
  const display = document.querySelector('.display');
  display.textContent = '';
};


function solve() {
  const display = document.querySelector('.display');
  const input = display.textContent;

  try {
      const displayString = input.split(' '); //breaking down the input into string - numbers and operaters 
      let result = parseFloat(displayString[0]); //turning the first number inputed into a floating point number which means we convert the string into numbers

      for (let i = 1; i < displayString.length; i += 2) { //going from [1] (operater]) and then isolating every second one from there to isolate operators
          const operator = displayString[i]; //define the operaters from index 1 - assuming that every second input is an operator 
          const operand = parseFloat(displayString[i + 1]); //i+1 would then be numbers 

          if (operator === '+') {
              result += operand;
          } else if (operator === '-') {
              result -= operand;
          } else if (operator === '*') {
              result *= operand;
          } else if (operator === '/') {
              result /= operand;
          }
      }

      display.textContent = result;
  } catch (error) {
      display.textContent = 'Error';
  }
}
