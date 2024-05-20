import React from "react";
import { Product } from "../types/product";

export default function ProductList({
  products,
  error,
  isLoading,
}: {
  products?: Product[];
  error: boolean;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  if (!products) {
    return <div>No products found!</div>;
  }
  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
