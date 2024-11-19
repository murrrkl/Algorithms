function solution(oldSchema, newSchema) {
  for (let oldEntry of oldSchema) {
    let newEntry = newSchema.find((newEntry) => newEntry.name == oldEntry.name);
    if (newEntry) {
      if (oldEntry.documentation !== newEntry.documentation) {
        return "patch"; // Изменение в документации
      } // Ok

      if (oldEntry.hasOwnProperty("parameters")) {
        // Расширение типа у параметра функции
        if (newEntry.hasOwnProperty("parameters")) {
          for (let param of oldEntry.parameters) {
            let new_param = newEntry.parameters.find((new_) => new_.name == param.name);
            if (new_param) { // есть такой параметр
              if (new_param.type !=  param.type) {
                return "minor";
              }
              if (new_param.documentation !== param.documentation) {
                return "patch";
              } // Ok
            } else {
              return "minor";
            }         
          }
          for (let param of newEntry.parameters) {
            if (!oldEntry.parameters.find((old_) => old_.name == param.name)) {
              return "minor";
            }   
          }
        } else {
          return "major";
        }
      } else if (newEntry.hasOwnProperty("parameters")) {
        return "minor";
      } else {  
        let type_list_new = newEntry.type.split("|");
        let type_list_old = oldEntry.type.split("|");
        if (type_list_new.length > type_list_old.length) {
          return "minor"; // Расширение типа
        } else if (type_list_new.length < type_list_old.length) {
          return "major"// Сужение типа 
        }
      } 
    } else {
        return "major"; // Удаление экспортируемого модуля
    }
  }

  // Добавление новой функциональности
  for (let newEntry of newSchema) {
    if (!oldSchema.find((oldEntry) => newEntry.name == oldEntry.name)) {
      return "minor";
    }
  }
  if (JSON.stringify(oldSchema) === JSON.stringify(newSchema)) {
    return "patch";
  } else {
    return "";
  } 
}

module.exports = solution;

const sol = require('./index.js');

// Пример старой и новой схемы API
const oldSchema = [
  {
    name: "testFn",
    type: "(a: string, b: number) => void",
    parameters: [
      {
        name: "a",
        type: "string",
      },
      {
        name: "b",
        type: "number",
      },
    ],
    returnType: "void",
  },
];


const newSchema = [
  {
    name: "testFn",
    type: "(a: string | number, b?: number) => void",
    parameters: [
      {
        name: "a",
        type: "string | number",
      },
      {
        name: "b",
        type: "number | undefined",
      },
    ],
    returnType: "void",
  },
];


// Проверяем изменения между старой и новой схемой
const result = sol(oldSchema, newSchema);

console.log(result);