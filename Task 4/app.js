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
