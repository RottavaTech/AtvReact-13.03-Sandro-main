export default function Botao({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`btn-custom ${className || ''}`}>
      {children}
    </button>
  );
}