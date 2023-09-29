let DataRep= () =>
{
    console.log("Data rep");


}

let value = (myvalue) =>
{
    return myvalue;
}
// let numbers = (myNumbers) =>
// {
//     int one = 1;
//     int two = 3;
//     myNumbers = one + two;
//      return myNumbers;
// }
// console.log(myNumbers);

let Addition = (num1, num2)=>
{
    return num1, num2;//returning 2 numbers from the parameter 

}


const ages = [25, 31, 42, 77];
let ex = ages.map((item)=>{
    if (item < 70){

    
    return item * 2;
    }
    else 
    {
        return item;
    }

})


let mytasks = [];
let addtask = (task) =>
{
    mytasks.push(task);// adding to the veriable
    console.log("item" + task + "has been added to tasks");
    return mytasks.length;

}

let listAllTasks = ()=> 
{
    mytasks.forEach((items)=>{
        console.log(items);

    });
}

let deletetask = (task)=>
{   
    if(index >-1){
    //^^if its more then -1 then go
    
   let index =  mytasks.indexOf(task);
   mytasks.splice(index, 1);// how many items to delete
   console.log("item"+task+ "has been removed");//log to the user
   
    }
    else {
        console.log("item"+ task + "not found")
    }
   return mytasks.length;


}
deletetask("lean JS!");
addtask("learn JS!");
listAllTasks();

console.log(ex);



console.log(Addition(2,3));

console.log(value("hellooooo"));
DataRep();