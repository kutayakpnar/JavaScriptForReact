//Divide object and array and attend these to variables

const obj={name:"mehmet",age:35,address:"Istanbul",country:"Turkey"}

//const {name,age} = obj; // we create 2 const :age and name

//console.log(name);
//console.log(age);

/* const{name,...rest} =obj; //rest operator
console.log(name);
console.log(rest); */

function User({username,userage}){

    return `${username} is username ${userage} is user age.`

}
console.log(obj.name)
console.log(User({username:obj.name,userage:obj.age}));

const numbers=[1,2,3,4,5]
const [bir,iki,uc,dort,bes]=numbers;
console.log(bir);
const[birinci,...rest]=numbers;
console.log(bir);
console.log(rest);
