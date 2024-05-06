import React from "react";

export default function ModalOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute bg-black/70 top-0 left-0 z-40 w-full h-screen">
      {children}
    </div>
  );
}
