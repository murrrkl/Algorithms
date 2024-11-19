// [2,7,4,1,8,1]

function findLatestWeight(weights) {
  let i = weights.length - 1;
  do {
    if (i === 0) return weights[0];

    weights.sort((a, b) => a - b);
    console.log("1:", weights);
    weights[i - 1] = (weights[i] === weights[i - 1]) ? 0 : weights[i] - weights[i - 1];
    weights.length = i;
    console.log("2:", weights);
    i--;
  } while (true);
}

module.exports = findLatestWeight([2, 7, 4, 1, 8, 1]);
console.log(module.exports)

function solution(input) {
  let vars = {};
  let calc_vars = [];
  let flag = true;

  // Функция для вычисления значения по формуле
  const calculateFormula = (formula) => {
    let newFormula = formula;
    for (let key in vars) {
      newFormula = newFormula.replace(new RegExp('\\$' + key, 'g'), (!isNaN(vars[key])) ? vars[key] : key);
    }

    try {
      return eval(newFormula);
    } catch (e) {
      return formula;
    }

  };

  // Заполнение vars данными из ввода
  input.vars.forEach(item => {
    if (item.formula) {
      vars[item.id] = item.formula;
      calc_vars.push(item.id);
    } else {
      vars[item.id] = item.value;
    }
  });

  // console.log(vars); // Переменные

  while (flag == true && calc_vars.length != 0) {
    flag = false;
    for (let key in calc_vars) {
      input.calculations.forEach(calc => {
        if (calc.id == vars[calc_vars[key]]) {
          let new_formula = calculateFormula(calc.formula);
          if (!isNaN(new_formula)) {
            vars[calc_vars[key]] = new_formula;
            flag = true;
            calc_vars.splice(key, 1);
          }
        }
      });
    }
  }

  for (let key in vars) {
    if (isNaN(vars[key])) {
      return "impossible";
    }
  }

  return vars;


}


let input = {
  vars: [
    {
      id: 'a',
      //formula: 'calcA'
      formula: 'calcA'
    },
    {
      id: 'b',
      //value: 2
      formula: 'calcB'
    },
    {
      id: 'c',
      value: 5
      //formula: 'calcC'
    },
    {
      id: 'd',
      value: 5
    },
    {
      id: 'f',
      value: 2
    },
  ],
  calculations: [
    {
      id: 'calcA',
      formula: '$f * ($b + $c)'
    },
    {
      id: 'calcB',
      formula: '$d + 5'
    },
    {
      id: 'calcC',
      formula: '$f + $b'
    },
  ]
};
module.exports = solution(input);
console.log(module.exports)
