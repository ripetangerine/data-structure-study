import DoubleLinkedList from '../queue/DoubleLinkedList.js';

class Deque {
     constructor() {
          this.list = new DoubleLinkedList();
     }

     printAll(){
          this.list.printAll();
     }

     isEmpty() {
       return (this.list.count === 0);
     }

     size() {
       return this.list.size();
     }

     addFirst(data) {
       this.list.insertAt(0, data);
     }

     addLast(data) {
       this.list.insertLast(data);
     }

     removeFirst() {
       return this.list.deleteAt(0);
     }

     removeLast() {
       return this.list.deleteLast();
     }
}

export {Deque};