//Promises Async Wait
//Its like base of axios

const getData=new Promise((resolve,reject)=>{
    const data=false;
    if(data){
        console.log("Data is here!!!!!!")
    }else{
        console.log("We didnt get data!!!")
    }
});

getData.then((answer)=>console.log("The answer: ", answer))
.catch((hata)=>console.log("The answer: ",hata ));
