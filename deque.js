const createNode = (value, prev = null, next = null) => ({
  value,
  prev,
  next,
});

const deque = {
  head: null,
  tail: null,
  size: 0,

  add_front(x) {
    let newNode = createNode(x, null, this.head);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  },

  add_back(value) {
    let newNode = createNode(value, this.tail, null);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  },

  delete_front() {
    if (this.size === 0) {
      return null;
    }

    let removedValue = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return removedValue;
  },

  delete_back() {
    if (this.size === 1) {
      return null;
    }

    let removedValue = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return removedValue;
  },
  show_deque() {
    let cur = this.head;
    while (cur != null) {
      alert(cur.value);
      cur = cur.next;
    }
  }
};

deque.add_back(1);
deque.add_back(2);
deque.add_front(3);

deque.show_deque();
// console.log(deque.delete_front());
// console.log(deque.delete_back());