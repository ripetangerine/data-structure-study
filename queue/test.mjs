import {Queue} from "./queue.mjs"

let queue = new Queue();
console.log(" ===== enqueue ===== ")

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue);
console.log(this.queue.front());

console.log("== dequeue 호출 ==");
queue.dequeue().data;

console.log(`isEmpty : ${queue.isEmpty()}`)



