const Card = ({ children, active, cardW = false }) => {
  return (
    <div
      className={`card ${active ? "border-theme" : ""} position-relative mb-3 ${
        cardW ? "card-w" : ""
      }`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
