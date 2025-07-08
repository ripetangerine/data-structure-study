import Deque from './Deque.js';

let deque = new Deque();

deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}\n`);

deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
