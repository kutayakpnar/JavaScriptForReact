//Shorthand Property Names

const name="Mehmet";
const age=30;

const user_object= {name,age};
console.log(user_object)

//If we want to use this in react:
function Sayac({initialValue,step}){
    const [sayac,setSayac]=useCounter({initialValue,step});
    return <button onClick={setSayac}>{sayac}</button>
}


