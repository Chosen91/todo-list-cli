const prompt = require("prompt-sync")()

console.log("Welcome to the To-do List Manager Application! ")
console.log(" ")
console.log("================================================")

let todos = [];
let complete = [];
let input;


console.log("Your To-Do-List is Currently Empty! ")


while(input !== 3 ){

    console.log(" [1] Create a To-Do Item ")
    console.log(" [2] Complete to-do Item")
    console.log(" [3] Exit a program")
    console.log(" ~Select An Action: ~")
    input = Number(prompt(" > "))

    if(input === 1){
        console.log(" ~Creating a to-do item~ ")
        console.log(" ~What is this to-do item called~ ")
        let todo =prompt(" > ")
        todos.push(todo);
        complete.push("[incomplete]")

        console.log(" ")
        console.log("========================================")
        //display the to-do list before looping again
        for(let i = 0; i <todos.length; i++){
            console.log(`${i+1}. ${complete[i]} ${todos[i]}`)}
    }else if(input === 2){
        console.log(" ~ completing an item ~")
        console.log(" Which item do you want to Complete ? ")
    let completed = Number(prompt(" > "))
    complete[completed -1] ="[completed]"


    console.log(" You have " + todos.length + " todo items")
    for(let i = 0; i <todos.length; i++){
        console.log(`${i+1}. ${complete[i]} ${todos[i]}`)}
    }else if(input === 3){
    console.log("~exiting the program ~")
}
// end of while loop
}

