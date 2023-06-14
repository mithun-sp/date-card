import React from "react";

const SingleDateCard = ({ day, handleDateClick, value }) => {
  return (
    <div
      className="date-card"
      onClick={() => handleDateClick(value.price, value.date)}
    >
      <div className="date">{day}</div>
      <div className="price">₹{value.price}</div>
    </div>
  );
};

export default SingleDateCard;
