import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { formatDistanceToNow, isAfter, isBefore, parse, format, isToday, set, parseISO, parseJSON, formatDistance, intervalToDuration, startOfDay } from 'date-fns'
import useInterval from 'use-interval';
import "react-datepicker/dist/react-datepicker.css";

function UserBirthday() {
const [startDate, setStartDate] = useState(new Date())
const [untilBDay, setUntilBDay] = useState(getInterval)
const [count, setCount] = useState(0)

function getInterval () {
  const interval = intervalToDuration( {
    start: new Date(),
    end: startOfDay(startDate)
  })
  return interval
}

useInterval(() => {
  const interval = getInterval()
  setUntilBDay(interval)
  setCount(count + 1);
}, 1000);

  return (
    <div>
      <DatePicker selected={startDate}  onChange={(date) => setStartDate(date)}
        inline
      />
      <h1 className="days">{untilBDay.months} months<br/>
            {untilBDay.days} days<br />
            {untilBDay.hours}:{untilBDay.minutes}:{untilBDay.seconds}</h1>
          <h2 className="time">count: {count}</h2>
      <p>The selected date is: {startDate.toString()}.</p>
    </div>
  );
}


function App() {
  // console.log(birthday);
  return (
    <div>
      
      <UserBirthday />
    </div>
  )
}

export default App