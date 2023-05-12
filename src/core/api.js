export const findProduct = (search) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 1300 },
        { id: 4, name: "Product 4", price: 144400 },
      ]);
    }, 1000);
  });
};
