import { useEffect, useState } from "react";
import "./App.css";
import DateCard from "./components/DateCard";
import MonthDays from "./components/MonthDays";

function App() {
  const [data, setData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(0);
  const handleDateClick = (price, date) => {
    alert(`On ${date}, price is ${price}`);
  };

  const days = MonthDays(currentMonth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/file.json");
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const arr = [7, 4, 4, 1, 6, 3, 1, 5, 2, 6, 3, 1];

  return (
    <div className="App">
      <div className="month-card">
        <div className="month-navigation">
          <button
            className="arrow-button"
            disabled={currentMonth === 0 ? true : false}
            onClick={handlePrevMonth}
          >
            &larr;
          </button>
          <div>
            <h2>{days[0].slice(2).toUpperCase()}</h2>
          </div>
          <button
            className="arrow-button"
            disabled={currentMonth === 11 ? true : false}
            onClick={handleNextMonth}
          >
            &rarr;
          </button>
        </div>
        <DateCard
          days={days}
          currentMonth={currentMonth}
          num={arr[currentMonth]}
          data={data.filter((item) =>
            item.date.includes(days[0].split(" ")[1])
          )}
          handleDateClick={handleDateClick}
        />
      </div>
      <MonthDays />
    </div>
  );
}

export default App;
