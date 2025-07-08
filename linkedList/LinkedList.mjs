class Node{
    //node
    constructor(data, next=null){
        //property
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data){
        //인덱스 값이 0인 경우, 0이 아닌경우
        // 1) 노드 있는경우 없는 경우 의 처리
        
        if(index > this.count || index < 0){
            throw new Error("index 범위를 벗어났습니다.");
        }
        
        let newNode = new Node(data);

        if(index == 0){
            newNode.next = this.head;  //null 대입 or 기존 값 대입
            this.head = newNode;
        }
        else{
            let currentNode = this.head;
            for(let i=0; i<index-1; i++){
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    };

    printAll(){
        let currentNode = this.head; //그냥 가리키는 역할임
        //currentNode.next의 형태로 접근이 가능한 이유는 주소를 참조하기 때문에 ㄱㄴ한거임

        let text = "[";

        while(currentNode !== null){
            text += currentNode.data;
            currentNode = currentNode.next;
            if(currentNode !== null) text += ", ";
        }
        text += "]";
        console.log(text);
    }//printAll

    clear(){
        //head는 null, count는 0
        this.head = null;
        this.count = 0;
    }

    insertLast(data){
        this.insertAt(this.count, data);  //기능이 비슷하다면 다시 쓰는거 보다 이렇게 호출하는 게 좋을듯
    }

    deleteAt(index){
        if(index>this.count || index <0){
            throw new Error("outofBound; index")
        }
        // 리턴 받기 - delete Node 선언
        let currentNode = this.head;
        
        if(index == 0){
            let deleteNode = this.head
            this.head = this.head.next;
            count--;
            return deleteNode;
        }
        else{
            for(let i=0; i<index-1; i++){
                cuttentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            return deleteNode;
        }
    }

    deleteLast(){
        return this.deleteAt(this.count-1);
    }

    getNodeAt(index){
        if(index > this.count || index < 0){
            throw new Error("index 범위를 벗어났습니다")
        }

        let currentNode = this.head
        for(let i = 0; i<index; i++)
            currentNode = currentNode.next  // 이동
        return currentNode.data
    }
}


export {Node};
export {LinkedList};