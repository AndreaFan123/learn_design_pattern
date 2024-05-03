interface ProductDetailsProps {
  title?: string;
  material?: string;
  option?: string;
  price?: string;
  description?: string;
}

export default function ProductDetails({
  title,
  material,
  option,
  price,
  description,
}: ProductDetailsProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div>
          <h3>{material}</h3>
          <span>{option}</span>
        </div>
        <div>
          <span>{price}</span>
        </div>
      </div>
      <div>
        <span>{description}</span>
      </div>
    </div>
  );
}
