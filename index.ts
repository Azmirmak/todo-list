#! /usr/bin/env node 
    
    import inquirer from "inquirer";

    let todo : any = [] ;
    let condition = true;

    console.log("Lets plan your day!");

    let newList = await inquirer.prompt([
        {
            name: "list1",
            message: "Make your list: ",
            type: "input",
        },    
    ]);
    todo = [newList.list1];

    while(condition){
    let questions = await inquirer.prompt([
        {
            name: "operations",
            message: "What changes would you like to do?",
            type: "list",
            choices: ["Add more items", "Remove the items", "View my list", "Exit"],
        },
        
    ]);
    if(questions.operations === "Add more items" ){
        let addItems = await inquirer.prompt([
            {
                name:"list2",
                message:"Add new items",
                type:"input",
            },        
        ]);
        todo.push(addItems.list2);

    }else if(questions.operations === "Remove the items"){
        console.log("Note: It will only remove items from previous list or new list(if made)");
        let removeItems = await inquirer.prompt([{
            name: "itemName",
            message: "Enter the name of the item to be removed: ",
            type: "input",        
        }
        ]);
        let itemName = removeItems.itemName;
        let index = todo.indexOf(itemName);
        if (index !== -1) {
            todo.splice(index, 1);
        }
    }else if (questions.operations === "View my list"){
        console.log("Your list", todo.join(","));
    }else if(questions.operations === "Exit"){
        condition = false;
    }

    condition = questions.operations !== "Exit";
};

