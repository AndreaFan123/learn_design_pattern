import React from "react";
import HocFetchData from "./components/hoc-fetch-data";
// import ProductList from "./components/product-list";
import ItemList from "./components/item-list";
import UserList from "./components/user-list";

function App() {
  const ProductListWrapped = HocFetchData(
    // ProductList,
    ItemList,
    "https://dummyjson.com/products"
  );

  const UserListWrapped = HocFetchData(UserList, "https://dummyjson.com/users");
  return (
    <div>
      {/* Regular way of fetching data */}
      {/* <ProductsContainer /> */}
      <ProductListWrapped />
      <UserListWrapped />
    </div>
  );
}

export default App;
