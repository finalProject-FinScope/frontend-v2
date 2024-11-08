// components/BaseCard.jsx (neue Basis-Komponente)

const BaseCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-whitegreen p-4 shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default BaseCard;
