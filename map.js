//.map() we construct new array according to our call back functions


const products = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
  ];

  const createProduct =(product) =>`${product.name} is ${product.fiyat} TL`
  console.log(products.map(createProduct)); //Notice that we construct new 5 elements array .

