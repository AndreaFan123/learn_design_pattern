import ProductDetails from "./components/product-split-screen/product-details";
import ProductImage from "./components/product-split-screen/product-image";
import ProductSplitScreen from "./components/product-split-screen/product-split-screen";

function App() {
  return (
    <main className="w-full max-w-full h-full px-4 md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1440px]">
      <h1 className="text-2xl font-bold pb-2">購買 Apple Watch Series 9</h1>
      <ProductSplitScreen
        left={ProductImage}
        right={ProductDetails}
        leftWeight={2}
        rightWeight={1}
      />
    </main>
  );
}

export default App;
