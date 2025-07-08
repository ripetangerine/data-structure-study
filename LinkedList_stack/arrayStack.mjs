import { Stack } from "./Stack.mjs";

//배열을 선언할때 사이즈를 잡음 - java, c의 단점
let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.indexOf(2));
console.log(stack);

stack.forEach((ind) => {
    console.log(`value : ${stack[ind]}`)
});
