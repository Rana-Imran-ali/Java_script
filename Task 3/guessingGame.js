// Generating random number and also guess it 

const max=prompt("Enter the maximum number");
//console.log(max);
const random=Math.floor(Math.random()* max) +1;
console.log(random);

// Guess number
let guess=prompt("Guess the number");
while (true){
    if (guess=="quit");{
    console.log("user quit");
    break;
    }
    if(guess== random){
        console.log("you are right");
        break;
    }else if(guess<random){
        guess=prompt("Your guess was to small please try again");
    }else {
        guess=prompt("Your guess is to large please try again");
    }




        //{
        //guess=prompt("your guess was wrong please try again");
    //}
}