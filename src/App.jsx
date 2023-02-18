import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {formatDistanceToNow, isAfter, isBefore, parse, format, isToday, set} from 'date-fns'

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function UserBirthday() {
  const [startDate, setStartDate] = useState(new Date());
  console.log("startDate before:" + startDate);
  return (
    <div>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
        inline
      // locale="sv-SE"
      />
      {console.log("startDate:" + startDate)}
      {console.log("getDate: " + startDate.getDate())}
      {/* {console.log(startDate.toString())} */}
      {console.log("getMinutes: " + startDate.getMinutes())}
      {console.log("getDate: " + startDate.getDate())}
      {console.log("toJSON: " + startDate.toJSON())}
      {console.log(startDate.toJSON())}
      {console.log(format(new Date(startDate), 'yyyy-MM-dd'))} 


      <p>The selected date is: {startDate.toString()}</p>
    </div>
  );
}





function App() {
  return (
    <div>
      <UserBirthday />
    </div>
  )
}

export default App