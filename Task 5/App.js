// "this "  is the keyword of java script
// This keyword refers to an object that is  executing the current piece of code.

const student={

    name:"Imran",
    age: 23,
    eng:95,
    math:93,
    phy:97,
    getavg(){
        let avg=(this.eng+this.math+ this.phy)/3;
        console.log(avg);
    }
}
//  Try and catch 
// this is used to to detect error



// Set timeout function

console,log("Hi there");
setTimeout(()=> {
    console.log("Apna college");
},4000);
