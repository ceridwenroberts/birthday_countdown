import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { formatDistanceToNow, isAfter, isBefore, parse, format, isToday, set, parseISO, parseJSON, formatDistance, intervalToDuration, startOfDay } from 'date-fns'
import useInterval from 'use-interval';
import "react-datepicker/dist/react-datepicker.css";

import './App.css'
import Bigstar from './assets/star1.svg'
import Smallstar from './assets/star2.svg'
import Arrow from './assets/ArrowIcon.svg'
// import Globe from './assets/globe.svg'


function App() {
  const [startDate, setStartDate] = useState(0)
  const [untilBDay, setUntilBDay] = useState(getInterval)
  const [count, setCount] = useState(0)

  function getInterval() {
    const interval = intervalToDuration({
      start: new Date(),
      end: startDate ? startOfDay(startDate) : new Date()
    })
    // console.log(interval)
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
              <nav className='box'><h3>Ceridwen</h3><p>Birthday Counter</p></nav>
              <div className='topRight box'></div>
            </div>
            <div className='row rowMiddle'>
              <div className='calendarContainer box'>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                  inline
                />
                {/* <UserBirthday /> */}
                {/* <div className='calendar box'>the calendar</div> */}
              </div>
              <div className='infoWrapper'>
                <div className='headingContainer box'><p><span className='call'> {!bDayToday ? (`Hey Shorty, When's your birthday?!`) : (`Hey Shorty, it's your birthday!`)} </span></p>
                  <img id="bigStarFirst" src={Bigstar} alt="decoration star" />
                  <img id="smallStarFirst" src={Smallstar} alt="decoration star" />
                  <img id="smallStarSecond" src={Smallstar} alt="decoration star" />
                </div>


                <div className='infoContainer box'>Like this design?</div>
                <div className='logoContainer box'> <h3>Checkout HUMY</h3></div>
                <div className='goBtnContainer'>
                  <img id="arrowCake" src={Arrow} alt="arrow icon" />
                  <a link className='goBtn' href="https://codepen.io/lenasta92579651/pen/VwmGzeL" target={"_blank"}>...and the cake? Click and check it.</a>

                </div>
              </div>
            </div>
            {!bDayToday ? (
              <div className='row rowBottom'>
                <div className='puffContainer box' >
                  <div className='months time box'><span id='months'>{untilBDay.months}</span> months</div>
                </div>
                <div className='resultContainer box'>
                  <div className='days time box'><span id='days'>{untilBDay.days}</span> days</div>
                  <div className='hours time box'><span id='hours' className='stamp'> {untilBDay.hours}</span>h</div>
                  <div className='minutes time box'><span id='minutes'> {untilBDay.minutes}</span>mins</div>
                  <div className='seconds time box'><span id='seconds'> {untilBDay.seconds}</span>sec</div>
                </div>
              </div>
            ) : (
              <div className='row rowBottom'>
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
                </div><div className='resultContainer box'>
                  <div className='days time box'><span id='days'>Happy</span></div>
                  <div className='hours time box'><span id='hours' className='stamp'>birth-</span></div>
                  <div className='minutes time box'><span id='minutes'>day</span></div>
                  <div className='seconds time box'><span id='seconds'>!!!</span></div>
                  <img id="bigStarSecond" src={Bigstar} alt="decoration star" />
                  <img id="bigStarThird" src={Bigstar} alt="decoration star" />
                  <img id="smallStarThird" src={Smallstar} alt="decoration star" />

                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default App