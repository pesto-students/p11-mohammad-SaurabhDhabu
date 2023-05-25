class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }

  cube(num) {
    return num * num * num;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

const scientificCalc = new ScientificCalculator();

// Using "call" method to invoke "add" method from Calculator class
const sum = Calculator.add.call(scientificCalc, 10, 5);
console.log(sum); // Output: 15

// Using "apply" method to invoke "subtract" method from Calculator class
const difference = Calculator.subtract.apply(scientificCalc, [10, 5]);
console.log(difference); // Output: 5

// Using "bind" method to create "multiplyByTwo" method
const multiplyByTwo = scientificCalc.multiply.bind(scientificCalc, 2);
const result = multiplyByTwo(5);
console.log(result); // Output: 10

// Using "bind" method to create "powerOfThree" method
const powerOfThree = scientificCalc.power.bind(scientificCalc, 3);
const powerResult = powerOfThree(2);
console.log(powerResult); // Output: 8

// Summary - all they do is the pass context of "this"
// bind is used to create altogether a new function
// apply is used to pass arguments using list
// call invokes the method with this and arguement one by one
