function solution(s){
     // let answer;
     let stack = [];
     for(let i=0; i<=s.length; i++){
          if(s[i] === ")"){
               while(true){
                    let poped = stack.pop();
                    if(poped === '(')
                         break;
               }
          }
          else if(s[i] === "("){
               stack.push(s[i])
          }
     }
     return stack;

}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"))