import React from "react";

import { useEffect, useState } from "react";
import { ProductListType } from "../types/product";
import ProductList from "./product-list";

export default function ProductsContainer() {
  const [products, setProducts] = useState({
    data: null as ProductListType | null,
    error: false,
    loading: true,
  });

  const fetchProduct = async () => {
    setProducts({ data: null, error: false, loading: true });
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data: ProductListType = await res.json();
      if (data) {
        setProducts({ data, error: false, loading: false });
      }
    } catch (error) {
      setProducts({ data: null, error: true, loading: false });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductList
      products={products.data?.products}
      error={products.error}
      isLoading={products.loading}
    />
  );
}
