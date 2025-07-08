// for문을 이용해서 배열의 합을 구하기 - 상향식 계산 방법

function addArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
let cute = [1,2,3,4,5,6,7,8,9,10];
console.log(`addArray : ${addArray(cute)}`);


// for문을 이용해서 배열의 합을 구하기 - 하향식 계산 방법 with 재귀
function addArray2(arr){    
    if(arr.length==1) return arr[0];
    let sum = 0;
    
    //slice - 배열 자르기
    return addArray(arr.slice(0,-1)) + arr[arr.length-1];
}
console.log(`addArray2 : ${addArray2(cute)}`);
