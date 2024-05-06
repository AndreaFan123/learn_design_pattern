export default function ModalBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white mx-auto my-[10%] py-5 px-10 w-[30%] rounded-md">
      {children}
    </div>
  );
}
