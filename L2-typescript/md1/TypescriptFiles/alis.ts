type OperationType = (x: number, y: number) => number;

const calculate = (number1: number, number2: number, operation: OperationType) => {
  return operation(number1, number2);
};

calculate(10, 20, (x, y)=> x+ y)
calculate(10, 20, (x, y)=> x- y)
calculate(10, 20, (x, y)=> x* y)
calculate(10, 20, (x, y)=> x/ y)