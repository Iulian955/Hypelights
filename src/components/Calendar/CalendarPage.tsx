import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";

// Import the correct type definitions from react-calendar
import { CalendarProps } from "react-calendar";

interface Intervals {
  [date: string]: string[];
}

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedIntervals, setSelectedIntervals] = useState<Intervals>({});
  const [startHour, setStartHour] = useState<string>("");
  const [endHour, setEndHour] = useState<string>("");

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(value);
    }
    setStartHour("");
    setEndHour("");
  };

  const handleAddInterval = () => {
    if (startHour !== "" && endHour !== "" && selectedDate) {
      const dateStr = selectedDate.toDateString();
      const newInterval = `${startHour}:00 - ${endHour}:00`;
      setSelectedIntervals((prevIntervals) => ({
        ...prevIntervals,
        [dateStr]: [...(prevIntervals[dateStr] || []), newInterval]
      }));
      setStartHour("");
      setEndHour("");
    }
  };

  return (
    <div className={styles.calendarContainer}>
      <h1>Selecteaza data si ora : </h1>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      {selectedDate && (
        <div className={styles.hourSelection}>
          <h2>Selecteaza orele pentru {selectedDate.toDateString()}</h2>
          <div className={styles.timeInputs}>
            <input
              type="number"
              value={startHour}
              onChange={(e) => setStartHour(e.target.value)}
              placeholder="Start Hour"
              min="0"
              max="23"
            />
            <input
              type="number"
              value={endHour}
              onChange={(e) => setEndHour(e.target.value)}
              placeholder="End Hour"
              min="0"
              max="23"
            />
          </div>
          <button onClick={handleAddInterval} className={styles.addButton}>
            Adauga interval
          </button>
        </div>
      )}
      <div className={styles.selectedIntervals}>
        <h2> Intervale selectate</h2>
        {Object.entries(selectedIntervals).map(([date, intervals]) => (
          <div key={date} className={styles.intervalList}>
            <h3>{date}</h3>
            <ul>
              {intervals.map((interval, index) => (
                <li key={index}>{interval}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
