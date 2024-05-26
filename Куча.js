// Реализация добавления элемента
function push_heap(heap_list, x) {
  heap_list.push(x);
  let pos = heap_list.length - 1;

  while (pos > 0 && heap_list[pos] < heap_list[Math.trunc((pos - 1) / 2)]) {
    [heap_list[pos], heap_list[Math.trunc((pos - 1) / 2)]] = [heap_list[Math.trunc((pos - 1) / 2)], heap_list[pos]];
    pos = Math.trunc((pos-1) / 2); // идём в предка
  }
}

// Удаление элемента
function pop_heap(heap_list) {
  let ans = heap_list[0];
  heap_list[0] = heap_list.at(-1);
  let pos = 0;
  while (pos * 2 + 2 < heap_list.length) {
    let min_son_index = pos * 2 + 1;
    if (heap_list[pos * 2 + 2] < heap_list[min_son_index]) {
      min_son_index = pos * 2 + 2;
    }
    if (heap_list[pos] > heap_list[min_son_index]) {
      [heap_list[pos], heap_list[min_son_index]] = [heap_list[min_son_index], heap_list[pos]];
    } else {
      break;
    }
  }
  heap_list.pop();
  return ans;
}
