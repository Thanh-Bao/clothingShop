
'use client';


interface PopupProps {
  message: string;
  onClose: () => void;
}
const Popup = ({ message, onClose }:PopupProps) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default Popup;
