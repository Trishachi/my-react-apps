export class ListNode {
  constructor(subject, amount, forwardNode = null) {
    this.subject = subject;
    this.amount = amount;
    this.forwardNode = forwardNode;
  }

  show() {
    return `Subject: ${this.subject} and Amount: ${this.amount}`;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  //Methods to Implement
  //first
  first = () => {
    this.current = this.head;
    return this.current;
  };

  //last
  last = () => {
    if (this.current.forwardNode === null) return this.current;
    while (this.current.forwardNode !== null) {
      this.current = this.current.forwardNode;
    }
    return this.current;
  };

  //next
  next = () => {
    if (this.current === null) return `List is empty`;
    if (this.current.forwardNode === null) return `Single Item on the List`;
    this.current = this.current.forwardNode;
    return this.current;
  };

  //previous
  previous = () => {
    if (this.current === this.head) return `Single Item on the List`;
    let previousNode = this.head;
    while (
      this.current !== previousNode.forwardNode &&
      this.current !== this.head
    ) {
      previousNode = previousNode.forwardNode;
    }
    this.current = previousNode;
    return this.current;
  };

  //insert
  insert = (subject, amount) => {
    let newNode = new ListNode(subject, amount);
    //if list is empty - insert at begining
    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
    } else {
      newNode.forwardNode = this.current.forwardNode;
      this.current.forwardNode = newNode;
      this.current = newNode;
    }
    return this.current;
  };

  //delete
  delete = () => {
    // if (!this.head) return null; // List is empty
    //If Only one item in the list
    if (this.current === this.head) {
      this.head = this.head.forwardNode;
      this.current = this.head;
      return null;
    } else {
      this.previous();
      this.current.forwardNode = this.current.forwardNode.forwardNode;
    }
  };

  //sumAmounts
  sumAmounts = () => {
    let sum = 0;
    let node = this.head;
    while (node) {
      sum += Number(node.amount);
      node = node.forwardNode;
    }
    return sum;
  };
}
