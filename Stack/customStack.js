class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    const itemToBePopped = this.storage[this.count - 1];
    if (this.count > 0) {
      delete this.storage[this.count - 1];
      this.count--;
    }
    return itemToBePopped;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log('size before pop', myStack.size());
console.log('Peek before pop', myStack.peek());
console.log('pop', myStack.pop());
console.log('size after pop', myStack.size());
console.log('Peek after pop', myStack.peek());
