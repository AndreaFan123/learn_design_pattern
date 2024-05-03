interface productSplitScreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
  leftWeight: number;
  rightWeight: number;
}

export default function ProductSplitScreen({
  left: LeftScreen,
  right: RightScreen,
  leftWeight,
  rightWeight,
}: productSplitScreenProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <div className={`flex-${leftWeight}`}>
        <LeftScreen />
      </div>
      <div className={`flex-${rightWeight}`}>
        <RightScreen />
      </div>
    </div>
  );
}
