export interface productInfo {
  id?: number;
  code?: string;
  name?: string;
  price?: number;
  color?: string;
  stock?: number;
}

const productInfo: productInfo[] = [
  {
    id: 1,
    code: "P1001",
    name: "Basic T-Shirt",
    price: 19.99,
    color: "White",
    stock: 150,
  },
  {
    id: 2,
    code: "P1002",
    name: "Leather Jacket",
    price: 99.99,
    color: "Black",
    stock: 40,
  },
  {
    id: 3,
    code: "P1003",
    name: "Sneakers",
    price: 59.99,
    color: "Red",
    stock: 85,
  },
];

export { productInfo };
