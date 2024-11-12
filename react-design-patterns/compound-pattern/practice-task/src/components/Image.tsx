// Image renders an image and a button that allows user to edit or delete the image
import MoreOptionMenu from "./more-option/MoreOptionMenu";
export default function Image({ source }: { source: string }) {
  return (
    <div className="relative w-[300px]">
      <img src={source} alt="image" className="w-full h-auto rounded-lg mb-5" />
      <MoreOptionMenu />
    </div>
  );
}
