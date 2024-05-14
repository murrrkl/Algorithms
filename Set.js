/* Set */
let my_set = new Set();
my_set.add("Коля");
my_set.add("Коля");
my_set.add("Толя");
my_set.add("Оля");

console.log("Разменрность = ", my_set.size)

if (my_set.has("Толя")) {
  my_set.delete("Толя");
}

for (let name of my_set) {
  console.log(name);
}

console.log(my_set);
let names = new Set(["Паша", "Петя"]);

let unionSet = new Set([...names, ...my_set]);
console.log(unionSet);

let intersectionSet = new Set([...unionSet].filter(x => names.has(x))); // !names.has(для различий)
console.log(intersectionSet);

let flag = ([...names].every(x => unionSet.has(x)));
console.log(flag);