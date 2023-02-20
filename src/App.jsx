import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { formatDistanceToNow, isAfter, isBefore, parse, format, isToday, set, parseISO, parseJSON, formatDistance, intervalToDuration, startOfDay } from 'date-fns'
import useInterval from 'use-interval';
import "react-datepicker/dist/react-datepicker.css";

import './App.css'
// import Bigstar from './assets/star1.svg'
// import Globe from './assets/globe.svg'


function App() {
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
    <>
    {/* <div>
     
      <h1 className="days">{untilBDay.months} months<br/>
            {untilBDay.days} days<br />
            {untilBDay.hours}:{untilBDay.minutes}:{untilBDay.seconds}</h1>
          <h2 className="time">count: {count}</h2>
       <p>The selected date is: {startDate.toString()}.</p>
    </div> */}
 
    <div>
      <div className='App'>
      <div className='pageWrapper'>
        <div className='row rowTop'>
          <nav className='box'><h3>Hey Shorty!</h3><p>When's Your Birthday?!</p></nav>
          <div className='topRight box'></div>
        </div>
        <div className='row rowMiddle'>
          <div className='calendarContainer box'>
          <DatePicker selected={startDate}  onChange={(date) => setStartDate(date)}
        inline
      />
              {/* <UserBirthday /> */}
            {/* <div className='calendar box'>the calendar</div> */}
          </div>
          <div className='infoWrapper'>
            <div className='headingContainer box'><h1>Hey Shorty, When's your birthday?!</h1></div>
            <div className='infoContainer box'>Infotext</div>
            <div className='logoContainer box'></div>
            <div className='goBtnContainer'>
              <button className='goBtn'></button>
            </div>
          </div>
        </div>
        <div className='row rowBottom'>
        <div className='puffContainer box'></div>
        <div className='resultContainer box'>
          <div className='days time box'><span id='days'>{untilBDay.days}</span> days</div>
          <div className='hours time box'><span id='hours' className='stamp'> {untilBDay.hours}</span>h</div>
          <div className='minutes time box'><span id='minutes'> {untilBDay.minutes}</span>mins</div>
          <div className='seconds time box'><span id='seconds'> {untilBDay.seconds}</span>sec</div>
        </div>
      </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default App