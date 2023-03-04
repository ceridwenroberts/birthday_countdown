import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { formatDistanceToNow, isAfter, isBefore, parse, format, isToday, set, parseISO, parseJSON, formatDistance, intervalToDuration, startOfDay } from 'date-fns'
import useInterval from 'use-interval';
import "react-datepicker/dist/react-datepicker.css";

import './App.css'
import Bigstar from './assets/star1.svg'
import Smallstar from './assets/star2.svg'
import Arrow from './assets/Arrow_Horizontal.svg'
import PlayIcon from './assets/PlayIcon.svg'
import GitHubIcon from './assets/GitHubIcon.svg'


// import Globe from './assets/globe.svg'
function PlayBox({ PlayIcon }) {
  return (
    <div className="playBoxContainer">
      <a link href='https://www.youtube.com/watch?v=5qm8PH4xAss&list=RD5qm8PH4xAss&start_radio=1' target="_blank">
        <div className="playBox">
          <img className="playIcon" src={PlayIcon} />
        </div>
      </a>
    </div>
  )
}

// Result container
function Restults({ PlayIcon, startDate, untilBDay, bDayToday }) {
  let monthDiv, dayDiv, hourDiv, minDiv, sekDiv, puff;
  // debugger
  if (startDate) {
    if (bDayToday) {
      monthDiv = null;
      dayDiv = "Happy";
      hourDiv = "birth-";
      minDiv = "day!";
      sekDiv = <PlayBox PlayIcon={PlayIcon} />;
    } else {
      monthDiv = <><span id='months'>{untilBDay.months}</span> months</>
      dayDiv = <><span id='minutes'> {untilBDay.days}</span> days</>
      hourDiv = <><span id='hours' className='stamp'> {untilBDay.hours}</span> h</>
      minDiv = <><span id='minutes'> {untilBDay.minutes}</span> mins</>
      sekDiv = <><span id='seconds'> {untilBDay.seconds}</span> sec</>
    }
  } else {
    monthDiv = <><div id="questionMark"><span>?</span></div></>;
    dayDiv = <><div id="questionMark"><span>?</span></div></>;
    hourDiv = <><div id="questionMark"><span>?</span></div></>;
    minDiv = <><div id="questionMark"><span>?</span></div></>;
    sekDiv = <><div id="questionMark"><span>?</span></div></>;
  }
  //Result container
  return (
    <div className="row rowBottom">
      {bDayToday ? (
        <div className='cakeContainer box' >
          <div class="bdayCake">
            <div class="plate"></div>
            <div class="cream"></div>
            <div class="candle"></div>
            <div class="flame">
              <div class="one">+</div>
              <div class="two">+</div>
              <div class="three">+</div>
            </div>
          </div>
        </div>
      ) : (<div className="puffContainer box">
        <div className="months time box">{monthDiv}</div>
      </div>)}
      <div className="resultContainer box">
        <div className="days time box">{dayDiv}</div>
        <div className="hours time box">{hourDiv}</div>
        <div className="minutes time box">{minDiv}</div>
        <div className="seconds time box" id="playContainer">{sekDiv}</div>
        {bDayToday ? (
          <>
            <img id="bigStarSecond" src={Bigstar} alt="decoration star" />
            <img id="smallStarThird" src={Smallstar} alt="decoration star" />
            <img id="bigStarThird" src={Smallstar} alt="decoration star" />
          </>
        ) : (<></>)}
      </div>

    </div>
  );
}

//? Why doesn't this work? What's the diff?

// function Restults({ startDate, untilBDay, bDayToday }) {
//   let monthDiv, dayDiv, hourDiv, minDiv, sekDiv

//   if (startDate === 0) {
//     monthDiv = '';
//     dayDiv = '';
//     hourDiv = '';
//     minDiv = '';
//     sekDiv = '';
//   } else if (bDayToday) {
//     monthDiv = null;
//     dayDiv = "Happy";
//     hourDiv = "birth-";
//     minDiv = "day";
//     sekDiv = "!";
//   } else {
//     monthDiv = untilBDay.months;
//     dayDiv = untilBDay.days;
//     hourDiv = untilBDay.hours;
//     minDiv = untilBDay.minutes;
//     sekDiv = untilBDay.seconds;
//   }
//   return (
//     < div className='row rowBottom' >
//       <div className='puffContainer box' >
//         <div className='months time box'>{monthDiv}</div>
//       </div>
//       <div className='resultContainer box'>
//         <div className='days time box'> {dayDiv} </div>
//         <div className='hours time box'> {hourDiv} </div>
//         <div className='minutes time box'> {minDiv} </div>
//         <div className='seconds time box'>{sekDiv} </div>
//       </div>
//     </div >
//   )
// }

function App() {
  const [startDate, setStartDate] = useState(0)
  const [untilBDay, setUntilBDay] = useState(getInterval)
  const [count, setCount] = useState(0)

  function getInterval() {
    const interval = intervalToDuration({
      start: new Date(),
      end: startDate ? startOfDay(startDate) : new Date()
    })
    return interval
  }

  useInterval(() => {
    const interval = getInterval()
    setUntilBDay(interval)
    setCount(count + 1);
  }, 1000);

  const bDayToday = isToday(startDate)

  return (
    <>
      <div>
        <div className='App'>
          <div className='pageWrapper'>

            <div className='row rowTop'>
              <nav className='box'><h3>Assignment 3</h3><p>Birthday Counter</p></nav>
              <div className='topRight box'><p>Ceridwen Roberts</p></div>
            </div>
            <div className='row rowMiddle'>
              <div className='calendarContainer box'>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                  inline
                />
              </div>
              <div className='infoWrapper'>
                <div className='headingContainer box'><p><span className='call'> {!bDayToday ? (`Hey Shorty, When's your birthday?!`) : (`Hey Shorty, it's your birthday!`)} </span></p>
                  {bDayToday ? (
                    <>
                      <img id="bigStarFirst" src={Bigstar} alt="decoration star" />
                      <img id="smallStarFirst" src={Smallstar} alt="decoration star" />
                      <img id="smallStarSecond" src={Smallstar} alt="decoration star" />
                    </>
                  ) : (<></>)}
                </div>
                <a link href="https://dribbble.com/shots/19836318-HUMY-Property-Website" target={"_blank"}> 
                <div className='infoContainer box'>Like this design? <br /> <span>Checkout HUMY</span><img id="arrow" src={Arrow} alt="arrow icon" />
                </div>
                </a>
                <a link href="https://dribbble.com/shots/19836318-HUMY-Property-Website" target={"_blank"}> <div className='logoContainer box'>
                  <img src={GitHubIcon} /> </div></a>
                <div className='goBtnContainer'>

                  <a link className='goBtn' href="https://codepen.io/lenasta92579651/pen/VwmGzeL" target={"_blank"}>...and the cake? Click and check it.</a>
                </div>
              </div>
            </div>
            <Restults PlayIcon={PlayIcon} untilBDay={untilBDay} bDayToday={bDayToday} startDate={startDate} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App


