// Function arrguments
function printName(name){
    console.log(name);
}
printName("Imran");

function printInfo(name,age){
console.log(`${name} ${age}.`);
}
printInfo("Ali",20);
// sum function
function sum(a,b){
    console.log(a+b);
}
sum(1,2);
// average of three number
function avg(a,b,c){
    let avg=(a+b+c)/3
    console.log (avg)
}
avg(2,5.9);

// multiplicaton table number
function printTable(n){
    for(let i=n;i<=n*10;i+=10){
        console.log(i);
    }
}
printTable(3);

// return function 

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum +=i;

    }
    return sum;
}

// scope determines the accessability of variable 
// function scope variable defined inside the function are not accessible (visible) from outside the function
function calsum(){
    let sum=a+b;
    // inside fuction
    console.log(sum);

}
// block scope {} symbol apply on let and const function
{
    let a=4;
    console.log (a);
}

// lexical scopoe using concept of nested function 
function ourterfun(){     // outer function
    let x=5;
    let y=6;
    function innerfun(){     // inner function
        console.log(x);
    }
    innerfun();

}
 

