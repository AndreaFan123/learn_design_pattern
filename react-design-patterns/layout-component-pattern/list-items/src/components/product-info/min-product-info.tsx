import { productInfo } from "../../constants/product-info";

export default function MinProductInfo({ product }: { product: productInfo }) {
  const { name, code } = product;
  return (
    <>
      <li className="flex flex-col gap-1  p-2 list-item">
        <span>Product Name:{name}</span>
        <span>Item Code:{code}</span>
      </li>
    </>
  );
}
