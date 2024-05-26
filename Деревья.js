// Код менеджера памяти
// maxn - кол-во ячеек
function initMemory(maxn) {
  let memory = [];

  for (let i = 0; i < maxn; i++) {
    // ключ, левый сын, указатель на след. свободный эл-т
    memory.push([0, i + 1, 0]);
  }

  return [memory, 0]; // память, указатель на 1-ый свободный
}

// Создать новый узел (выделение памяти под новый node)
function newnode(memstruct) {
  [memory, firstfree] = memstruct;
  // Заменяем в памяти первый свободный на следующий эл-т
  memstruct[1] = memory[firstfree][1];
  // Вернём номер старого свободного
  return firstfree;
}

// Удаление узла (номер удалеяемого эл-та)
function delnode(memstruct, index) {
  [memory, firstfree] = memstruct;
  memory[index][1] = firstfree;
  memstruct[1] = index;
}

// Реализация поиска
function find(memstruct, root, x) {
  let key = memstruct[0][root][0];
  if (x == key) {
    return root;
  } else if (x < key) {
    // Если искомый элемент < ключа, смотрим левого потомка
    let left = memstruct[0][root][1];
    if (left == -1) { // если его нет - эл-та нет.
      return -1;
    } else {
      return find(memstruct, left, x);
    }
  } else if (x > key) {
    // Если искомый элемент > ключа, смотрим правого потомка
    let right = memstruct[0][root][2];
    if (right == -1) { // если его нет - эл-та нет.
      return -1;
    } else {
      return find(memstruct, right, x);
    }
  }
}

// Реализация добавления (без проверки вхождения)
function create_and_fill_node(memstruct, key) {
  // выделяем память и получаем индекс свободного эл-та
  let index = newnode(memstruct);
  memstruct[0][index][0] = key; // Заносим ключ
  // левого и правого потомка пока нет
  memstruct[0][index][1] = -1;
  memstruct[0][index][2] = -1;

  return index; // Индекс вставки
}

function add(memstruct, root, x) {
  let key = memstruct[0][root][0];

  if (x < key) {
    let left = memstruct[0][root][1];
    if (left == -1) {
      // Заносим индекс родителю его левого сына
      memstruct[0][root][1] = create_and_fill_node(memstruct, x);
    } else {
      // Продолжаем искать место вставки по левому поддереву
      add(memstruct, left, x);
    }
  } else if (x > key) {
    let right = memstruct[0][root][2];
    if (right == -1) {
      // Заносим индекс родителю его правого сына
      memstruct[0][root][2] = create_and_fill_node(memstruct, x);
    } else {
      // Продолжаем искать место вставки по правому поддереву
      add(memstruct, right, x);
    }
  }
}

let memstuct = initMemory(20);
// Создаём корень дерева
root = create_and_fill_node(memstuct, 8);
add(memstuct, root, 10);
add(memstuct, root, 9);
add(memstuct, root, 14);
alert(memstuct);