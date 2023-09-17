
'use client';
interface PopupProps {
  message: string;
  onClose: () => void;
}
const Popup = ({ message, onClose }:PopupProps) => {
  return (
    <div className="popup z-20">
      <div className="popup-content z-20">
        <p>{message}</p>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default Popup;
