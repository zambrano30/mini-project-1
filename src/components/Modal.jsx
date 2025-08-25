

export function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start bg-white/50 bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="bg-white w-full h-[400px] md:h-[300px] rounded-b-2xl  p-6 absolute left-0 top-0 "
        onClick={(e) => e.stopPropagation()}
        style={{maxWidth: '100vw'}}
      >
        {children}
      </div>
    </div>
  );
}
