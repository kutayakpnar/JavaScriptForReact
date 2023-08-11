const products = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
  ];

  console.log(products.filter((product) => product.fiyat>5).map((product)=>`${product.name}`));
  console.log(products.filter((product) => product.name.toLowerCase().includes("gi")));
