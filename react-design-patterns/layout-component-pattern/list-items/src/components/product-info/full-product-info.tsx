import { productInfo } from "../../constants/product-info";

export default function FullProductInfo({ product }: { product: productInfo }) {
  const { name, code, color, price, stock } = product;
  return (
    <>
      <li className=" p-2 list-item">
        <div className="flex flex-col">
          <span>Product Name:{name}</span>
          <span>Item Code:{code}</span>
          <span>Color:{color}</span>
          <span>Price:{price}</span>
          <span>Stock:{stock}</span>
        </div>
      </li>
    </>
  );
}
