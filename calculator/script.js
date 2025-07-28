const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let expressionArray = [];
let currentInput = '';
let operator = null;
let afterResult = false;


function updateDisplay(value) {
    display.textContent = value;
}


function handleNumber(number) {
     if (afterResult) {
      expressionArray = [number];
      currentInput = number;
       afterResult = false;
    } else if(currentInput === '0'){
        currentInput = number;
        expressionArray.push(number)
      } else {
        currentInput += number;
        expressionArray.push(number);
    }
  updateDisplay(expressionArray.join(""));
}

function handleOperator(op) {
   if(currentInput !== ''){
     expressionArray.push(op);
     currentInput = "";
    }
   afterResult = false;
   updateDisplay(expressionArray.join(""));
}

function calculate() {
  let result;
    try {
        const expressionString = expressionArray.join("");
        result = eval(expressionString);
         if (isNaN(result)) {
             result = 'Error';
         } else {
            result = parseFloat(result.toFixed(10)); //to remove js floating point errors
         }
       } catch (e) {
          result = "Error";
        }

   currentInput = String(result);
   expressionArray = [String(result)]
  updateDisplay(expressionArray.join(""));
   afterResult = true;
}

function handleClear() {
    expressionArray = [];
    currentInput = '';
    operator = null;
    updateDisplay('0');
    afterResult=false;
}
function handlePercentage() {
     if (currentInput !== '') {
        try{
        const percentageValue =  parseFloat(currentInput) / 100;
          const updatedNumber = String(percentageValue);
          const lastIndex = expressionArray.lastIndexOf(currentInput);
           expressionArray[lastIndex] = updatedNumber
          currentInput = updatedNumber;
          updateDisplay(expressionArray.join(""));
         }catch (e) {
          expressionArray = ["Error"]
            currentInput ="";
            updateDisplay(expressionArray.join(""));
       }
    }
    afterResult=false;
}
function handlePlusMinus() {
    if(currentInput !== ''){
        try{
            const negatedNumber = parseFloat(currentInput) * -1;
            const updatedNumber = String(negatedNumber);
            const lastIndex = expressionArray.lastIndexOf(currentInput);
           expressionArray[lastIndex] = updatedNumber
            currentInput = updatedNumber
           updateDisplay(expressionArray.join(""));
           }catch(e){
            expressionArray = ["Error"];
              currentInput = "";
               updateDisplay(expressionArray.join(""));
           }
    }
  afterResult=false;
}
function handleDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        expressionArray.push('.');
        updateDisplay(expressionArray.join(""));
    }
  afterResult = false;
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (!isNaN(value) || value === '.') {
             if (value === '.') {
               handleDecimal();
            }else {
                handleNumber(value);
            }

        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
        } else if (value === '=') {
            calculate();
        } else if (value === 'C') {
            handleClear();
        } else if (value === '%') {
             handlePercentage();
        }else if(value === '+/-'){
            handlePlusMinus();
        }
    });
});