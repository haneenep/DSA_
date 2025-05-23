class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  shift() {
    if (this.isEmpty()) {
      console.log("Nothing to remove");
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Nothing to remove");
    } else {
      let curr = this.head;
      let prev = null;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      if (prev) {
        prev.next = null;
      } else {
        this.head = null;
      }
      this.size--;
    }
  }

  insertAt(index, value) {
    console.log(index, "value", this.size);
    if (index < 0 || index > this.size) return console.log("invalid index");
    if (index === 0) return this.prepend(value);
    if (index === this.size) return this.append(value);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    const newNode = new Node(value);
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return console.log("invalid index");
    if (index === 0) return this.shift();
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
  }

  convertToArray() {
    if (this.isEmpty()) return [];
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  arrayToList(arr) {
    this.head = null;
    this.size = 0;
    for (let value of arr) {
      this.push(value);
    }
    return this;
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
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  }

  set(index, value) {
    if (index < 0 || index >= this.size) return console.log("invalid index");
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    curr.value = value;
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

  hasCycle() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        console.log(true);
        return;
      }
    }
    console.log(false);
  }

  removeDuplicates() {
    if (this.isEmpty()) {
      console.log("list is empty");
    }
    let curr = this.head;
    while (curr) {
      let target = curr.next;
      let prev = curr;
      while (target) {
        if (curr.value === target.value) {
          prev.next = target.next;
          target = prev.next;
          this.size--;
        } else {
          prev = target;
          target = target.next;
        }
      }
      curr = curr.next;
    }
  }

  mergeSortedList(list1, list2) {
    let newList = new SingleLinkedList();
    let l1 = list1.head;
    let l2 = list2.head;
    while (l1 || l2) {
      if (l1.value < l2.value) {
        newList.append(l1.value);
        l1 = l1.next;
      } else if (l1.value > l2.value) {
        newList.append(l2.value);
        l2 = l2.next;
      } else {
        if (!l2) {
          newList.append(l1.value);
          l1 = l1.next;
        } else {
          newList.append(l2.value);
          l2 = l2.next;
        }
      }
    }
    return newList;
  }

  isPalindrome() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let curr = slow;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    let secondHead = prev;
    let firstHead = this.head;
    while (firstHead && secondHead) {
      if (firstHead.value !== secondHead.value) {
        return false;
      }
      firstHead = firstHead.next;
      secondHead = secondHead.next;
    }
    return true;
  }

  sort() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let curr = this.head;
    while (curr) {
      let check = curr.next;
      while (check) {
        if (check.value < curr.value) {
          [curr.value, check.value] = [check.value, curr.value];
        }
        check = check.next;
      }
      curr = curr.next;
    }
  }

  deleteMiddle() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let fast = this.head;
    let slow = this.head;
    let prev = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = slow.next;
  }

  getNthFromEnd(n) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    if (n <= 0 || n > this.size) {
      console.log("Invalid index");
      return;
    }

    let length = this.size - n;
    let curr = this.head;
    for (let i = 0; i < length; i++) {
      curr = curr.next;
    }
    console.log(curr.value);
    return;
  }

  removeAllDuplicates() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    const map = new Map();
    let curr = this.head;
    while (curr) {
      map.set(curr.value, (map.get(curr.value) || 0) + 1);
      curr = curr.next;
    }
    const demo = new Node(0);
    demo.next = this.head;
    curr = demo;
    while (curr.next) {
      if (map.get(curr.next.value) > 1) {
        curr.next = curr.next.next;
        this.size--;
      } else {
        curr = curr.next;
      }
    }
    this.head = demo.next;
  }

  display() {
    if (this.isEmpty()) {
      console.log("List is empty, nothing to show");
      return;
    } else {
      let res = "";
      let curr = this.head;
      while (curr) {
        res += `${curr.value} -> `;
        curr = curr.next;
      }
      console.log(res + "null");
      return;
    }
  }
}

const singleLinkedList = new SingleLinkedList();

singleLinkedList.append(12);
singleLinkedList.append(16);
singleLinkedList.append(19);
singleLinkedList.prepend(39);
singleLinkedList.prepend(49);

singleLinkedList.shift();

singleLinkedList.pop();

singleLinkedList.display();

console.log(
  "================================== Basic Operations ======================================"
);

singleLinkedList.insertAt(0, 10);
singleLinkedList.insertAt(1, 20);
singleLinkedList.insertAt(5, 50);
singleLinkedList.insertAt(2, 30);
singleLinkedList.insertAt(4, 5);
singleLinkedList.insertAt(4, 55);

singleLinkedList.removeAt(5);

singleLinkedList.search(55);

singleLinkedList.display();

console.log(
  "==================================  Intermediate Operations ======================================"
);

singleLinkedList.reverse();

singleLinkedList.set(0, 5);
singleLinkedList.set(2, 25);
singleLinkedList.set(5, 55);

console.log(singleLinkedList.middle());

singleLinkedList.display();

// function createCycle (head) {
//   if(!head) return;
//   let curr = head;
//   while(curr.next) {
//     curr = curr.next;
//   }
//   curr.next = head;
// }

// createCycle(singleLinkedList.head);

// singleLinkedList.hasCycle();

console.log(
  "==================================  Advanced Operations ======================================"
);

singleLinkedList.removeDuplicates();

singleLinkedList.display();

singleLinkedList.sort();

singleLinkedList.display();

singleLinkedList.getNthFromEnd(5);

singleLinkedList.removeAllDuplicates();

singleLinkedList.display();
