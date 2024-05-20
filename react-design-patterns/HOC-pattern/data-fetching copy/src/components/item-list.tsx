import React from "react";
import { Product } from "../types/product";

type ItemProps = {
  data?: Product[];
  error: boolean;
  isLoading: boolean;
};

export default function ItemList({ data, error, isLoading }: ItemProps) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  if (!data) return <div>No data found!</div>;

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}
