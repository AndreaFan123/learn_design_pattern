// Basic modal implementation

import ModalBody from "./modals/modal-body";
import ModalOverlay from "./modals/modal-overlay";

interface modalProps {
  children: { title: string; content: string };
  rightButton?: { type: string; text: string };
  leftButton?: { type: string; text: string };
  onRightButton?: () => void;
  onLeftButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Modal({
  children,
  rightButton,
  leftButton,
  onLeftButton,
  onRightButton,
}: modalProps) {
  const renderButtonBg = (type?: string) => {
    switch (type) {
      case "primary":
        return "bg-indigo-800 text-white ";
      case "secondary":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };
  return (
    <>
      <ModalOverlay>
        <ModalBody>
          <div
            className="flex flex-col items-center
          gap-7"
          >
            <h2 className="text-2xl font-semibold text-indigo-900">
              {children.title}
            </h2>
            <p className="">{children.content}</p>
            <div className="flex w-full justify-end gap-5">
              {rightButton?.text && (
                <button
                  onClick={onLeftButton}
                  className={`${renderButtonBg(
                    leftButton?.type
                  )} px-2 py-1 rounded-md`}
                >
                  {leftButton?.text}
                </button>
              )}
              {leftButton?.text && (
                <button
                  onClick={onRightButton}
                  className={`${renderButtonBg(
                    rightButton?.type
                  )} px-2 py-1 rounded-md`}
                >
                  {rightButton?.text}
                </button>
              )}
            </div>
          </div>
        </ModalBody>
      </ModalOverlay>
    </>
  );
}
