import { LinkedList } from "../linkedList/LinkedList.mjs";

class Stack{
    constructor(){
        this.list = new LinkedList(); //new stack 하는 순간 메서드 생성
        //insert delete getNodeAt
    }
    //자료 추상화
    push(data){
        this.list.insertAt(0, data);
    }
    pop(){
        try{
            return this.list.deleteAt(0);
        }
        catch(e){
            return null;
        }
    }
    peek(){
        this.list.getNodeAt(0);
    }
    isEmpty(){
        return Boolean(this.list.count);
    }
}

export {Stack};