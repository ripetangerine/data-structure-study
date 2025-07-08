
//하향식 계산, 지수 계산 방법

let down = 2;
let exponent = 5;

function power(down, up){
    if(up == 0) return 1;

    return power(down, up-1)*down;
}

console.log(`2^5 >> ${power(down, exponent)}`)