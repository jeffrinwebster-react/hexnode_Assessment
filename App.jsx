import React, { useEffect, useLayoutEffect } from "react";
import ScheduleDate from "./Components/Form/ScheduleDate";
import Intercom from '@intercom/messenger-js-sdk';
import GlobalStyle from "./Modules/theme/GlobalStyle";
import { useLocation } from "react-router-dom";
import RouthPath from "./Modules/Routes/RouthPath";

// List of countries and their timezones
const timezones = [
  { value: "America/New_York", label: "United States (New York, EST)" },
  { value: "Europe/London", label: "United Kingdom (London, GMT)" },
  { value: "Asia/Kolkata", label: "India (Kolkata, IST)" },
  { value: "Australia/Sydney", label: "Australia (Sydney, AEDT)" },
  { value: "Asia/Tokyo", label: "Japan (Tokyo, JST)" },
];

const App = () => {

  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])


  // Moved useEffect inside the component
  useEffect(() => {
    Intercom({
      app_id: 'yd6dnydk',
    });
  }, []);

  // const handleDateChange = (date) => {
  //   console.log("Selected Date:", date);
  // };

  // const handleTimeChange = (time) => {
  //   console.log("Selected Time:", time);
  // };

  // const handleTimezoneChange = (timezone) => {
  //   console.log("Selected Timezone:", timezone);
  // };

  return (
    <div>
      <RouthPath />
      {/* <ScheduleDate
        timezones={timezones}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onTimezoneChange={handleTimezoneChange}
      /> */}
      <GlobalStyle />

    </div>
  );
};

export default App;
