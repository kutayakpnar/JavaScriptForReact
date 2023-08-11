//Array Methods 
// .includes() -> case sensitive;

const name="Kutay";
console.log(name.includes("ay")); //t
console.log(name.includes("kutay")) //false

//we can use toLowerCase for includes

let newName="AhMeT";
newName=newName.toLowerCase();
const control="Ahmet"
console.log(newName);

console.log(newName.includes(control.toLowerCase())) //t 


