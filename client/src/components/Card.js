import React from "react";

const Card = ({ Title, SubTitle, children }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <h6 className="card-subtitle mb-4 text-muted">{SubTitle}</h6>
        {children}
      </div>
    </div>
  );
};

export default Card;
