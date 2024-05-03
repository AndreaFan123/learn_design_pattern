import React from "react";

//👇🏽 Pass components as props

// interface productSplitScreenProps {
//   left: React.ComponentType;
//   right: React.ComponentType;
//   leftWeight: number;
//   rightWeight: number;
// }

// export default function ProductSplitScreen({
//   left: LeftScreen,
//   right: RightScreen,
//   leftWeight = 1,
//   rightWeight = 1,
// }: productSplitScreenProps) {
//   return (
//     <div className="flex flex-col lg:flex-row gap-6 ">
//       <div className={`flex-${leftWeight}`}>
//         <LeftScreen />
//       </div>
//       <div className={`flex-${rightWeight}`}>
//         <RightScreen />
//       </div>
//     </div>
//   );
// }

//👇🏽 Pass component as children

interface productSplitScreenProps {
  children: React.ReactNode;
  leftWeight: number;
  rightWeight: number;
}

export default function ProductSplitScreen({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: productSplitScreenProps) {
  const [left, right] = React.Children.toArray(children);

  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <div className={`flex-${leftWeight}`}>{left}</div>
      <div className={`flex-${rightWeight}`}>{right}</div>
    </div>
  );
}
