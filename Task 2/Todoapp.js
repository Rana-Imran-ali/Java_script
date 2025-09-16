let todo =[];

let req=prompt("Please enter your request");
console.log(req);

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
if(req=="list"){
    console.log("---------------");
    //for(task of todo){
        //console.log(task);
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);

    }
    console.log("-----------------");
} else if(req=="add"){
    let task=prompt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");


}  else if(req=="delete"){
    let idx=prompt("Please enter the task index");
    todo.splice(idx,1);
    console.log("Task deleted");
    let req=prompt("Please enter your request");


}



//let req=prompt("Please enter your request");

}