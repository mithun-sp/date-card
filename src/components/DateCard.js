import React from "react";
import "./DateCard.css";
import SingleDateCard from "./SingleDateCard";


const DateCard = ({ data, handleDateClick, num, currentMonth, days }) => {
  const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  //change the starting day by adjusting this value
  let daysBeforeStart = daysOfWeek.slice(num);

  const getDayHeaders = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="day-header">
        {day}
      </div>
    ));
  };

  return (
    <div className="month-card">
      <div className="day-headers-container">
        <div className="day-headers">{getDayHeaders()}</div>
      </div>
      <div className="date-cards-container">
        {daysBeforeStart.map((item) => {
          return <div className="empty-card" />;
        })}
        {/* {data.map((item, index) => {
          return (
            <SingleDateCard
              handleDateClick={handleDateClick}
              item={item}
              index={index}
            />
          );
        })} */}
        {days.map((day, index) => {
          const value = data.find((item) => item.date === day );
          if (value) {
            return (
              <SingleDateCard
                handleDateClick={handleDateClick}
                day={`${index+1}`}
                value={value}
              />
            );
          } else {
            return <div className="empty-card empty-value date">{index+1}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default DateCard;
