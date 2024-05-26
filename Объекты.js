/* Объекты */
let man = {
  name: "Павел",
  hello() {
    console.log("Привет, я - ", this.name);
  },
  age: 20,
  [Symbol.toPrimitive](hint){
    return (hint === "string") ? `Имя: ${this.name}`: this.age;
  },
  toString() {
    return this.name;
  },
  valueOf() {
    return this.age;
  }
};

//man.name = "Павел";
man["surname"] = "Иванов";
delete man.surname;
alert(man + 3);
alert(String(man));
man.hello();

let getAge = function() {
  console.log("Мой возраст: ", this.age);
}

man.getAge = getAge;
man.getAge();
for (let key in man) {
  if (typeof man[key] !== "function") {
    console.log(man[key]);
  }
}

if (man.hasOwnProperty("age")) {
  console.log(man.age);
}

let user = {
  name: "Кирилл",
  level: 55
}

Object.assign(man, user);