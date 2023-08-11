

console.log(add(2,3)); //we can call it before construct add function because we use funtion keyword.If we use arrow function we cant do that.

function add(num1,num2){
    return num1+num2;

}

const sum =(num1,num2)=>{
    return num1+num2;

}
console.log(sum(3,5));
