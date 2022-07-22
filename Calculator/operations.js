// Display operations

let previous_value = null;
let current_value = null;
let display_value = null;
let current_operation = null;
const numbers = [];

button.addEventListener('click', updateDisplay(this), false);

const updateDisplay = (button) => {
    previous_value = current_value;
    current_value = button.textContent || button.innerText;

    if (typeof(previous_value) != 'number' && typeof(current_value) == 'number')
    {
        display_value = current_value;
    }

    else if (typeof(previous_value) == 'number' && typeof(current_value) == 'number')
    {
        display_value = 10 * display_value + current_value;
    }

    else if (current_value == '+' || current_value == '-' || current_value == 'x' || current_value == '/')
    {
        let temp = display_value;
        
        if (numbers.length == 2)
        {
            let result = 0;
            
            if (current_operation == 'add')
            {
                result = add(numbers[0], numbers.pop());
            }

            if (current_operation == 'subtract')
            {
                result = subtract(numbers[0], numbers.pop());
            }

            if (current_operation == 'multiply')
            {
                result = multiply(numbers[0], numbers.pop());
            }

            if (current_operation == 'divide')
            {
                result = divide(numbers[0], numbers.pop());
            }

            numbers[0] = result;
            display_value = result;
        }

        numbers.push(temp);

        if (current_value == '+')
        {
            current_operation = 'add';
        }

        if (current_value == '-')
        {
            current_operation = 'subtract';
        }

        if (current_value == 'x')
        {
            current_operation = 'multiply';
        }

        if (current_value == '/')
        {
            current_operation = 'divide';
        }

    }

    else if (current_value == '=')
    {
        
        let result = 0;
            
        if (current_operation == 'add')
        {
            result = add(numbers[0], numbers.pop());
        }

        if (current_operation == 'subtract')
        {
            result = subtract(numbers[0], numbers.pop());
        }

        if (current_operation == 'multiply')
        {
            result = multiply(numbers[0], numbers.pop());
        }

        if (current_operation == 'divide')
        {
            result = divide(numbers[0], numbers.pop());
        }
        
        display_value = result;    
        
        // Reset variables
        
        numbers.pop();
        previous_value = null;
        current_value = null;
        display_value = null;
        current_operation = null;   
    }

    document.getElementById('display').innerHTML = display_value;
}

// Basic calculations

const operate = (operator, a, b) => operator(a, b);
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
