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

console.log(ex);



console.log(Addition(2,3));

console.log(value("hellooooo"));
DataRep();