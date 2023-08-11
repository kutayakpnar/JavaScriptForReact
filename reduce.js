//.reduce()
//generally takes 4 parameters but we use 2 parameters
const products = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
  ];


  const totalAmount=products.reduce((sum,product)=> sum=sum+product.fiyat,0)
console.log({totalAmount});

const productString=products.reduce((initial,product)=>initial=`${initial} ${product.name}`,"")
console.log(productString);
