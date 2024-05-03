import { productInfo } from "../../constants/product-info";

export interface ListProps {
  start?: number;
  listStyle?: string;
  items: productInfo[];
  sourceName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemComponent: React.ComponentType<any>;
}

export default function UnorderList({
  items,
  listStyle,
  sourceName,
  itemComponent: ItemComponent,
}: ListProps) {
  return (
    <ul className={listStyle}>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [sourceName]: item }} />
      ))}
    </ul>
  );
}
