//your code here
class OutOfRangeError extends Error {
  constructor() {
    super('Expression should only consist of integers and +-/* characters and not <arg>');
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of operators');
    this.name = 'InvalidExprError';
  }
}

function evalString(expression) {
  try {
    if (expression.match(/[^\d\s+\-*/]/g)) {
      throw new OutOfRangeError();
    }

    if (expression.match(/\+\+|--|\+\-|\-\+|\*\+|\/\+/)) {
      throw new InvalidExprError();
    }

    if (expression.startsWith('+') || expression.startsWith('/') || expression.startsWith('*')) {
      throw new SyntaxError('Expression should not start with an invalid operator');
    }

    if (expression.endsWith('+') || expression.endsWith('/') || expression.endsWith('*') || expression.endsWith('-')) {
      throw new SyntaxError('Expression should not end with an invalid operator');
    }

    // Evaluate the expression here (not implemented in this example)
    return eval(expression);
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      console.error(`Error: ${error.message}`);
    } else {
      throw error;
    }
  }
}