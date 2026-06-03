let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    display.textContent = expression;
    console.log('Number added:', num, '| Expression:', expression);
}

function appendOperator(op) {
    if (expression && expression[expression.length - 1] !== '.') {
        expression += op;
        display.textContent = expression;
        console.log('Operator added:', op, '| Expression:', expression);
    }
}

function calculate() {
    try {
        let result = eval(expression);
        console.log('Calculation:', expression, '=', result);
        display.textContent = result;
        expression = result.toString();
    } catch (e) {
        console.log('Error:', e.message);
        display.textContent = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    display.textContent = '0';
    console.log('Display cleared');
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.textContent = expression || '0';
    console.log('Last character deleted | Expression:', expression);
}
