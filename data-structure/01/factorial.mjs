// for문을 이용하여 팩토리얼 구하기 - 상향식 계산 방법

function factorial(number){
    let sum = 1;
    for(let i = 1; i<number; i++){
        sum *= i;
    }
    return sum;
}

console.log(`factorial -> ${factorial(5)}`);


//재귀함수 이용한 팩토리얼 - 하향식 계산 방법

const factorial2 = (number) => {
    if(number == 1) return;
    return number* factorial2(number - 1);
}