class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size) return console.log("invalid index");
    if (index === 0) return this.prepend(value);
    if (index === this.size) return this.append(value);
    const newNode = new Node(value);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next.prev = newNode;
    newNode.next = curr.next;
    curr.next = newNode;
    newNode.prev = curr;
    this.size++;
  }

  shift() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) return console.log("invalid index");
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    curr.prev = null;
    curr.next = null;
    this.size--;
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return -1;
    }
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (value === curr.value) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return -1;
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    } else if (this.size === 1) {
      console.log("only head is there");
      return;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        prev = curr.prev;
        curr.prev = curr.next;
        curr.next = prev;
        curr = curr.prev;
      }
      prev = this.head;
      this.head = this.tail;
      this.tail = prev;
    }
  }

  middle() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }

  isPalindrome() {
    let left = this.head;
    let right = this.tail;
    while (left !== right && left.prev !== right) {
      if (left.value !== right.value) {
        return false;
      }
      left = left.next;
      right = right.prev;
    }
    return true;
  }

  insertAfterAGivenNode(oldNode, value) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let curr = this.head;
    while (curr) {
      if (curr.value === oldNode) {
        let newNode = new Node(value);
        newNode.prev = curr;
        newNode.next = curr.next;
        if (curr.next) {
          curr.next.prev = newNode;
        } else {
          this.tail = newNode;
        }
        curr.next = newNode;
        this.size++;
        return;
      }
      curr = curr.next;
    }
  }

  displayListForward() {
    if (this.isEmpty()) {
      console.log("lists is empty");
      return;
    } else {
      let res = "";
      let curr = this.head;
      while (curr) {
        res += `${curr.value} < -- > `;
        curr = curr.next;
      }
      console.log(res + "null");
    }
  }

  displayListBackward() {
    if (this.isEmpty()) {
      console.log("lists is empyt");
      return;
    } else {
      let res = "";
      let curr = this.tail;
      while (curr) {
        res += ` < -- > ${curr.value}`;
        curr = curr.prev;
      }
      console.log("null" + res);
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();

console.log(
  "========================================== 🔰 Basic Operations =========================================="
);

doublyLinkedList.append(11);
doublyLinkedList.append(22);
doublyLinkedList.append(33);

doublyLinkedList.prepend(1);
doublyLinkedList.prepend(3);
doublyLinkedList.prepend(5);

doublyLinkedList.insertAt(0, 1);
doublyLinkedList.insertAt(7, 51);
doublyLinkedList.insertAt(2, 21);

doublyLinkedList.shift();

doublyLinkedList.pop();

doublyLinkedList.deleteAt(6);
doublyLinkedList.deleteAt(3);

doublyLinkedList.displayListForward();

console.log(
  "========================================== 🧠 Intermediate-Level Questions =========================================="
);

doublyLinkedList.reverse();

console.log(doublyLinkedList.middle());

doublyLinkedList.insertAfterAGivenNode(22, 33);

doublyLinkedList.displayListForward();
