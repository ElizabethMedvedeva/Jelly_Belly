export const findProduct = (search) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        [
          { id: 1, name: "Product 1", price: 100 },
          { id: 2, name: "Product 2", price: 200 },
          { id: 3, name: "Product 3", price: 1300 },
          { id: 4, name: "GRA 4", price: 144400 },
        ].filter((element) => {
          return element.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }, 1000);
  });
};
