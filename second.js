module.exports = function calculator() {
  let result = 0;

  const add = (value) => {
      result += value;
  };

  const subtract = (value) => {
      result -= value;
  };

  const multiply = (value) => {
      result *= value;
  };

  const divide = (value) => {
      if (value === 0) {
          throw new Error('Cannot divide by zero.');
      }
      result /= value;
  };

  const magic = (operation) => {
      const applyOperation = (value) => {
        try {
          operation(value);
          return applyOperation;
        } catch (error) {
          return applyOperation;
        }
      };
      return applyOperation;
  };

  const getValue = () => {
      return result;
  };

  return {
      add,
      subtract,
      multiply,
      divide,
      magic,
      getValue
  };
};

// Пример использования
const calculator = require('./index.js');
const calc = calculator(); // Начинаем с 0
calc.add(10); // Добавляем 10
calc.multiply(2); // Умножаем на 2
calc.subtract(5); // Вычитаем 5
calc.divide(3); // Делим на 3
console.log(calc.getValue()); // Текущий результат: 5
calc.magic(calc.add)(2)(3)(4);
calc.magic(calc.divide)(2)(0)(7);
console.log(calc.getValue()); // Вывод финального результата: 14