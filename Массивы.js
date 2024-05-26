 /* Массивы */
console.log();
let arr = Array(5).fill("*");
let mass = [1, 25, 36, 45, 56, 35];

mass.forEach((item, index) => {
  console.log(item, index);
});

arr.push(300);
arr.unshift(100, 400);
let m = arr.pop();

for (let item of arr) {
  console.log(item);
}

console.log("delete", m);
m = arr.shift();
console.log("delete", m);

if ([1, 2, 3] != [1, 2, 3]) {
  console.log("не равны!")
}
let p = mass.splice(2, 3, 100, 400);
console.log(p);
console.log(mass);
p = mass.slice(0, 3);  // Массив не меняеся
console.log(p);
arr = arr.concat(mass);
console.log(arr);

let n = mass.indexOf(35);
console.log(n);
n = mass.lastIndexOf(35);
console.log(n);

let res = mass.find((item) => item % 2 == 0);
console.log(res);
let new_mass = mass.map((item) => item+100);
console.log(new_mass);
new_mass = mass.reverse();
console.log(new_mass);

let sum = mass.reduce((acc, item) => acc + item, 0);
console.log(sum);
new_mass = mass.filter((item) => item % 2 == 0);
console.log(new_mass);

let a = [1, 3, 5];
let b = [1, 3, 5, 7];
let flag = false;

if (a.length == b.length) {
  flag = true;
  a.forEach((item, index) => {
    if (item != b[index]) {
      flag = false;
    }
  }); 
} 

if (flag == true) {
  console.log("Равны!");
} else {
  console.log("Не равны!");
}


if (2 in a) {
  console.log("Есть!")
} else {
  console.log("Нет!")
}