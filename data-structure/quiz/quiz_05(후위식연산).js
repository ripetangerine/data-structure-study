function solution(s){
     for(let x of s){
          let stack = [];
          if(!isNaN(x)){
               stack.push(Number(x))
          }
          else{
               let rt = stack.pop();
               let lt = stack.pop();
               if(x == '+') stack.push(rt + lt);
               else if(x == '-') stack.push(rt - lt);
               else if(x === '/') stack.push(rt - lt);
               else if(x === '*') stack.push(rt * lt)
          }
     }
}