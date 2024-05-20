import React from "react";
import { User } from "../types/user";

type ItemProps = {
  data?: User[];
  error: boolean;
  isLoading: boolean;
};

export default function UserList({ data, error, isLoading }: ItemProps) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  if (!data) return <div>No data found!</div>;

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.email}</li>
      ))}
    </ul>
  );
}
