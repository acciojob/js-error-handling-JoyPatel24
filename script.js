class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should only consist of integers and +-/* characters';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should not have an invalid combination of expression';
  }
}

function evalString(expression) {
  try {
    if (/[\d\s\+\-\*\/]+/.test(expression)) {
      if (/^\+|\*|\//.test(expression)) {
        throw new SyntaxError('Expression should not start with invalid operator');
      }
      
      if (/[\+\-\*\/]$/.test(expression)) {
        throw new SyntaxError('Expression should not end with invalid operator');
      }
      
      if (/[+\-*/]{2}/.test(expression)) {
        throw new InvalidExprError();
      }
    } else {
      throw new OutOfRangeError();
    }
    
    return eval(expression);
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError || error instanceof SyntaxError) {
      throw error;
    } else {
      throw new Error('An error occurred while evaluating the expression');
    }
  }
}

function evaluateExpression() {
  const expressionInput = document.getElementById('expressionInput');
  const result = document.getElementById('result');
  const error = document.getElementById('error');

  try {
    const expression = expressionInput.value;
    const evaluatedResult = evalString(expression);
    result.textContent = `Result: ${evaluatedResult}`;
    error.textContent = '';
  } catch (error) {
    error.textContent = error.message;
    result.textContent = '';
  }
}
