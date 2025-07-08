class Node{
     //node
     constructor(data, next=null, prev=null){
         //property
          this.data = data;
          this.prev = prev;
          this.next = next;
     }
}
 
class DoubleLinkedList{
     constructor(){
          this.head = null;              // 삽입
          this.tail = null;              // 삭제
          this.count = 0;
     }

     // 첫 노드 : head, tail이 다 가르킴
     // 
 
     insertAt(index, data){
         //인덱스 값이 0인 경우, 0이 아닌경우
         // 1) 노드 있는경우 없는 경우 의 처리
         
          if(index > this.count || index < 0){
               throw new Error("index 범위를 벗어났습니다.");
          }
          
          let newNode = new Node(data);
 
          if(index == 0){
               newNode.next = this.head;     //null 대입 or 기존 값 대입
               this.head = newNode;

               if(this.head !== null){            //앞에다가 삽입
                    this.head.prev = null;
               }
          } 
          else if(index === this.count){
               newNode.next = null
               newNode.prev = this.tail
               this.tail.next = newNode
          }
          else{
               let currentNode = this.head;
               for(let i=0; i<index-1; i++){
                    currentNode = currentNode.next;
               }
               newNode.next = currentNode.next;
               newNode.prev = currentNode;  // 주소 참조라서 이렇게 해야함
               currentNode.next.prev = newNode;
               currentNode.next = newNode;
          }

          if(newNode.next === null){
               this.tail = newNode; 
          }

          this.count++;
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
               let deleteNode = this.head //해당 주소를 저장

               if(this.head.next === null){
                    this.head = this.tail = null
               }
               else{  // node가 2개 이상
                    this.head = this.head.next;
                    this.head.prev = null;
                    // 참조를 더 이상 안당하기에 나중에 가비지컬렉터 당함
               }
               count--;
               return deleteNode; 
          }
          else if(index === this.count-1){   // 끝부분
               deleteNode = this.tail
               this.tail.prev.next = null;
               this.tail = this.tail.prev
               this.count --;
               return deleteNode;
          }
          else{               
               for(let i=0; i<index-1; i++){  //전까지 이동
                    cuttentNode = currentNode.next;
          }
               let deleteNode = currentNode.next;

               currentNode.next = currentNode.next.next;
               currentNode.next.prev = currentNode;
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
export {DoubleLinkedList};