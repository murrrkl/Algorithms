let graph = [
  [1, 2, 3, 4],
  [0],
  [0, 3],
  [0, 2],
  [0, 5, 6],
  [4],
  [4, 7],
  [7]
]

let visited = new Set();

// Обход графа в глубину
function dfs(graph, visited, now) {
  visited.add(now);
  for (let neig of graph[now]) {
    if (!visited.has(neig)) {
      alert("Посещаем из " + now + " ", neig);
      dfs(graph, visited, neig);
    }
  }
  return;
}

dfs(graph, visited, 0);
alert(visited);

// Компоненты связности
let comp = 0;
for (let i = 0; i < graph.length; i++) {
  if (!visited.has(i)) {
    dfs(graph, visited, comp);
    comp++;
  }
}

alert("Компонентов связности: ",  comp + 1);

graph = [
  [],
  [2],
  [3, 5],
  [4],
  [],
  [4, 6],
  [1]
];

// 0 - непосещённая, 1 - посещённая, 2 - прошли всех потомков
// НЕ ЗАБЫВАЕМ ПРО ВОЗМОЖНОСТЬ НЕСКОЛЬКОКИХ КОМПОНЕНТАХ СВЯЗНОСТИ
let metka = new Map();
let flag = false;

function find_loop(graph, metka, now) {
  metka.set(now, 1);
  for (let neig of graph[now]) {
    if (!metka.has(neig)) {
      alert("Посещаем из " + now + " ", neig);
      find_loop(graph, metka, neig);
    } else if (metka.get(neig) == 1) {
      alert("Посещаем из " + now + " ", neig);
      flag = true;
      return;
    }
  }
  if (flag == true) {
    return;
  }
  metka.set(now, 2);
}

find_loop(graph, metka, 1);
alert(metka);
alert(flag);

// Раскраска в два цвета
// НЕ ЗАБЫВАЕМ ПРО ВОЗМОЖНОСТЬ НЕСКОЛЬКОКИХ КОМПОНЕНТАХ СВЯЗНОСТИ
graph = [
  [],
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3]
];
let color_map = new Map();
flag = true;

function check_color(graph, color_map, now, color) {
  color_map.set(now, color);
  for (let neig of graph[now]) {
    if (!color_map.has(neig)) {
      check_color(graph, color_map, neig, 3-color);  
    } else if (color_map.get(neig) == color) {
      flag = false;
      return;
    }
  }
  if (flag == false) {
    return;
  }
  metka.set(now, 2);
}

check_color(graph, color_map, 1, 1);
alert(color_map);
alert(flag)

// Топологическая сортировка
graph = [
  [],
  [2],
  [3, 7],
  [4],
  [],
  [2, 5],
  [],
  []
];
visited = new Set();
let res = [];

function topology_sort(graph, visited, now) {
  visited.add(now);
  for (let neig of graph[now]) {
    if (!visited.has(neig)) {
      alert("Посещаем из " + now + " ", neig);
      topology_sort(graph, visited, neig);
    }
  }
  res.push(now);
  return;
}

comp = 1;
for (let i = 1; i < graph.length; i++) {
  if (!visited.has(i)) {
    topology_sort(graph, visited, i);
  }
}

alert(res.reverse());