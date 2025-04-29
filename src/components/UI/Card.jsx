const Card = ({ children, active }) => {
  return (
    <div
      className={`card ${active ? "border-theme" : ""} position-relative mb-3`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
