//0325

function myFunction(number){
    if(number > 10)
        return;
    console.log(number);
    myFunction(number+1);
}

function fact(num){
    if(num == 1)
        return;
    else
        fact(num-1) * num;
}

myFunction(1);