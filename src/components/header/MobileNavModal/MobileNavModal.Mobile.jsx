import { Nav } from '@/components';

const MobileNavModalMobile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-100 flex items-center justify-center transition-opacity duration-300">
      <div
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer pr-[15px]"
        onClick={onClose}
      >
        ✕
      </div>
      <div className="w-4/5 h-3/5 flex" onClick={onClose}>
        <Nav />
      </div>
    </div>
  );
};

export default MobileNavModalMobile;
