import React, { createContext, useState, useContext } from "react";

// Create a context
const MoreOptionContext = createContext({
  isOpen: false,
  toggleOpen: () => {},
});

function ToggleIcon() {
  const { isOpen, toggleOpen } = useContext(MoreOptionContext);
  return (
    <button
      role="button"
      onClick={toggleOpen}
      className="bg-slate-800 w-[30px] h-[30px] rounded-full flex items-center justify-center text-white"
    >
      {isOpen ? "..." : "..."}
    </button>
  );
}

function MoreOptionList({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(MoreOptionContext);
  return (
    <>
      {isOpen && (
        <ul className="absolute top-[40px] right-0 w-[150px] bg-slate-800">
          {children}
        </ul>
      )}
    </>
  );
}

function MoreOptionItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="p-2 list-none transition-all duration-300 cursor-pointer bg-slate-800 text-white">
      {children}
    </li>
  );
}

export default function MoreOption(props: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-[5px] top-[5px]">
      <MoreOptionContext.Provider
        value={{ isOpen, toggleOpen: () => setIsOpen(!isOpen) }}
      >
        {props.children}
      </MoreOptionContext.Provider>
    </div>
  );
}

MoreOption.ToggleIcon = ToggleIcon;
MoreOption.MoreOptionList = MoreOptionList;
MoreOption.MoreOptionItem = MoreOptionItem;
