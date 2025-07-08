import {Stack} from "./Stack.mjs"

// 스택은 연결리스트로 구현한다? - X
// 규칙만 지키면 개나소나 가능!


let stack = new Stack();
// new 하는 순간 
// 생성자를 통한 객체 생성이 된다.

console.log("=== first output ===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
// console.log(stack.pop().data);
console.log(stack.pop());

console.log("=== second output ===");
stack.push("일");
stack.push("이");
stack.push("삼");
stack.push("사");
console.log(stack.peek());

stack.pop();
console.log(stack.peek());
console.log(`isEmpty : ${stack.isEmpty()}`);

stack.pop();
stack.pop();
console.log(`isEmpty : ${stack.isEmpty()}`);
stack.pop();
console.log(`isEmpty : ${stack.isEmpty()}`);