import ProductDetails from "./components/product-split-screen/product-details";
import ProductImage from "./components/product-split-screen/product-image";
import ProductSplitScreen from "./components/product-split-screen/product-split-screen";

// 👇🏽 Pass components as props
// function App() {
//   return (
//     <main className="w-full max-w-full h-full px-4 md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1440px]">
//       <h1 className="text-2xl font-bold pb-2">購買 Apple Watch Series 9</h1>
//       <ProductSplitScreen
//         left={ProductImage}
//         right={ProductDetails}
//         leftWeight={1}
//         rightWeight={3}
//       />
//     </main>
//   );
// }

// 👇🏽 Pass component as children
function App() {
  return (
    <main className="w-full max-w-full h-full px-4 md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1440px]">
      <h1 className="text-2xl font-bold pb-2">購買 Apple Watch Series 9</h1>
      <ProductSplitScreen leftWeight={1} rightWeight={3}>
        <ProductImage />
        <ProductDetails
          title="錶殼。 請從材質和外觀開始選擇。"
          material="鋁金屬"
          option="可選擇 GPS 或 GPS + 行動網路"
          price="NT$13,500 起"
          description="拉絲外觀搭配 Ion-X 強化玻璃顯示器。"
        />
      </ProductSplitScreen>
    </main>
  );
}

export default App;
