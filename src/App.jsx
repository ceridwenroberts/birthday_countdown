import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <div>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
      inline
      // locale="sv-SE"
       />
      <p>The selected date is: {startDate.toString()}</p>
    </div>
  );
};

export default Example

// import React from 'react'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import { DayPicker } from 'react-day-picker';
// import { addMonths, isSameMonth } from 'date-fns';


// import 'react-day-picker/dist/style.css';

// // function Component() {
// //   return <DayPicker defaultMonth={new Date(1979, 8)} />;
// // }

// export default function Example() {
//   const [selected, setSelected] = useState<Date>(new Date);


//   let footer = <p>Please pick a day.</p>;
//   if (selected) {
//     footer = <p>You picked {format(selected, 'PP')}.</p>;
//   }
//   return (
//     <DayPicker
//       mode="single"
//       selected={selected}
//       onSelect={setSelected}
//       footer={footer}
//     />
//   );
// }


// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import './App.css'
// // import DatePicker from 'react-date-picker'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <div className="App">
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src="/vite.svg" className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://reactjs.org" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1 className="text-3xl font-bold underline text-center text-red-500">Hello world!</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </div>
// //   )
// // }

// // export default App


// // import React, { useState } from 'react';
// // import { DayPicker } from 'react-day-picker';

// // import { addMonths, isSameMonth } from 'date-fns';

// // export default function App() {
// //   // const today = new Date();
// //   // const nextMonth = addMonths(new Date(), 1);
// //   // const [month, setMonth] = useState < Date > (nextMonth);

// //   // const footer = (
// //   //   <button
// //   //     disabled={isSameMonth(today, month)}
// //   //     onClick={() => setMonth(today)}
// //   //   >
// //   //     Go to Today
// //   //   </button>
// //   // );

// //   return <DayPicker month={month} onMonthChange={setMonth} footer={footer} />;
// // }

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import './App.css'
// // import DatePicker from 'react-date-picker'

// // function App() {
// //   const [value, onChange] = useState(new Date());

// //   return (
// //     <div>
// //       <DatePicker onChange={onChange} value={value} />
// //     </div>
// //   );


