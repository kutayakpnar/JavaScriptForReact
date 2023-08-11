//Array Methods 
// .find() .some() .every()

const products = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
  ];

  console.log("Find:",products.find((product) =>  product.fiyat>5));
  console.log("Some:",products.some((product) => product.fiyat<2));
  console.log("Every:",products.every((product) => product.fiyat>1));        //All elements msut be true for t.

   