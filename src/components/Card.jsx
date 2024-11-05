// components/Card.jsx

import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="bg-whitegreen p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
