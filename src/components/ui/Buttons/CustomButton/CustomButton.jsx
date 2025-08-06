import "./CustomButton.css";

export default function CustomButton({ onClick, text }) {
  return (
    <button className="custom-button" onClick={onClick}>
      <span className="button-text">{text}</span>
      <div className="border-draw" />
    </button>
  );
}
