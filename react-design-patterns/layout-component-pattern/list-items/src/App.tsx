import OrderList from "./components/list-container/order-list";
import UnorderList from "./components/list-container/unorder-list";
import FullProductInfo from "./components/product-info/full-product-info";
import MinProductInfo from "./components/product-info/min-product-info";
import { productInfo } from "./constants/product-info";

function App() {
  return (
    <main className="w-full max-w-full px-4 mt-4 lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-3">
        <OrderList
          start={1}
          listStyle="list-decimal"
          items={productInfo}
          sourceName="product"
          itemComponent={MinProductInfo}
        />

        <UnorderList
          listStyle="list-disc"
          items={productInfo}
          sourceName="product"
          itemComponent={FullProductInfo}
        />
      </div>
    </main>
  );
}

export default App;
