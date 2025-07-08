function solution(board, moves){
     answer = 0;
     let stack = [];

     moves.array.forEach(element => {
          let answer = 0
          for(let i=0; i<board.length; i++){
               if(board[i][element-1] !== 0){
                    temp = board[i][element-1];
                    board[i][element-1] = 0;
                    if(temp == stack[stack.length -1]){
                         stack.pop()
                         answer ++;
                    }
                    else{
                         
                    }
               }

          }// for
     });// foreach
}
let b = [
     [0,0,0,0,0],
     [0,0,1,0,3],
     [0,2,5,0,1],
     [4,2,4,4,2],
     [3,5,1,3,1]
];
let m = [1, 5, 3, 5, 1, 2, 1, 4] ;
console.log(solution(b, m))