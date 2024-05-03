import productImage from "../../../public/assets/apple-watch.jpeg";

export default function ProductImage() {
  return (
    <div className="w-full h-auto">
      <img
        src={productImage}
        alt="apple watch"
        className="max-w-full block object-contain rounded-md"
      />
    </div>
  );
}
