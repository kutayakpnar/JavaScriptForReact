let obj={name:"mehmet",age:35,city:"Istanbul"}

//obj.city="ANKARA" //ITS WRONG BECAUSE WE CHANGED THE OBJECT.

obj={...obj,city:"Ankara"} //We changed obj 

console.log(obj);


function add(num1,num2,num3){
    return num1+num2+num3;

}
const numbers=[1,2,3];
//console.log(add.apply(numbers))
console.log(add(...numbers));

const numbers2=[1,2,3];
const numbers3=[4,5,6];
//const union=numbers2.concat(numbers3);
const union=[...numbers2,...numbers3];
console.log(union);

const user={name:"Kutay",age:22};
const address={city:"Izmir",country:"Turkiye"};
const unionobj={...user,...address};
console.log(unionobj);

