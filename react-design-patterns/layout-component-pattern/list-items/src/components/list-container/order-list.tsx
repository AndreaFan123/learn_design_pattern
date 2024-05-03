import { ListProps } from "./unorder-list";

export default function OrderList({
  start,
  listStyle,
  items,
  sourceName,
  itemComponent: ItemComponent,
}: ListProps) {
  return (
    <ol start={start} className={listStyle}>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [sourceName]: item }} />
      ))}
    </ol>
  );
}
