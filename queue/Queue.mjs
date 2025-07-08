import {DoubleLinkedList} from "../linkedList/DoubleLinkedList.mjs"

class Queue{
     constructor(params) {
          this.list = new DoubleLinkedList();
     } // constructor

     enqueue(data){
          this.list.insertAt(0, data) //head가 0으로 가리킴
     }

     dequeue(){
          try{
               return this.list.deleteLast();
          }catch(e){
               null;
          }
     }

     front(){
          this.list.tail; //테일이 가장 먼저 들어갔으니까.
     }

     isEmpty(){
          return (this.list.count === 0);
     }
}

export {Queue}