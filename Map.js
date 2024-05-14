/* Map */
let my_map = new Map();
my_map.set("Иванов", 4);
my_map.set("Петров", 3);
my_map.set("Сидоров", 3);

for (let key of my_map.keys()) {
  let cur_mark = my_map.get(key);
  console.log(cur_mark);
  my_map.set(key, 5);
  console.log(key, my_map.get(key));
}

for (let mark of my_map.values()) {
  console.log(mark);
}

console.log("Размерность = ", my_map.size)

if (my_map.has("Сидоров")) {
  my_map.delete("Сидоров");
  my_map.clear();
}

console.log(my_map);
