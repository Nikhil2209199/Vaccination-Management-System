import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h3>Select a Date:</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}
export default DateSelector