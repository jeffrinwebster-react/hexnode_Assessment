import React, { useState } from "react";
import {Col, Row} from 'antd'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import moment from "moment-timezone";
import styled from "styled-components";
import CustomRow from "../Others/CustomRow";

// Global styles for react-datepicker

const DateCard = styled.div`
  border-radius: 20px;
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  gap: 1rem;
`;

const DateHead = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;  */
  margin-top: 25px;
  /* border: 1px solid black; */
  /* background: red; */

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
  }
`;

const ScheduleDetails = styled.div`
  background: #f3f7ff;
  height: auto;
  padding: 20px;
  /* border-radius: 5px; */

  p{
    color: #7F7F7F;
    font-size: 15px;
  }

  .date_details{
    margin-top: 80px;

    .date_data{
      font-size: 18px;
      color: black;
      font-weight: 700;
    }
  }

  .timezone_details{
      color: #7F7F7F;
      font-weight: 700;
      font-size: 18px;

    .timezone_data{
      font-size: 18px;
      font-weight: 700;
      color: black;
    }

  }



`

const ScheduleDate = ({
  timezones, // List of timezones
  onDateChange, // Callback for date selection
  onTimeChange, // Callback for time selection
  onTimezoneChange, // Callback for timezone selection
  minDate = new Date(), // Minimum selectable date
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState(timezones[0]);
  const [selectedTime, setSelectedTime] = useState("");

  // Generate time slots in 12-hour format based on the selected day and timezone
  const generateTimeSlots = () => {
    const slots = [];
    const now = moment.tz(selectedTimezone.value);
    const currentHour = now.hour();
    const currentMinute = now.minute();

    for (let i = 0; i < 24; i++) {
      if (moment(selectedDate).isSame(now, "day") && i < currentHour) continue;

      if (i === currentHour && currentMinute > 30) {
        continue;
      }

      const hour12 = i % 12 || 12; // Adjust 0 -> 12 for AM/PM
      const period = i < 12 ? "AM" : "PM";

      if (i >= currentHour || !moment(selectedDate).isSame(now, "day")) {
        slots.push(`${hour12}:00 ${period}`);
        if (i !== currentHour || currentMinute <= 30) {
          slots.push(`${hour12}:30 ${period}`);
        }
      }
    }
    return slots;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) onDateChange(date);
  };

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone);
    if (onTimezoneChange) onTimezoneChange(timezone);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (onTimeChange) onTimeChange(time);
  };

  return (
    <>
      
      <DateCard>
      {/* <Row>
        <Col span={24} md={24}> */}
        <CustomRow  space={[24,24]}>
          <Col span={24}  md={8}>
          <ScheduleDetails>
<h1>Schedule demo</h1>
<p>Pick a time to talk to one of our experts about your organization’s unique needs and understand Hexnode</p>

<p className="date_details">Date
  <p className="date_data">16, December 2024</p>
</p>

<p className="time_details">
  Time
  <p className="time_data">Please select</p>
</p>

<p className="timezone_details">Time Zone

  <p className="timezone_data">(UTC+05:30) Mumbai, Kolkata, New Delhi</p>
</p>

          </ScheduleDetails>
          </Col>
<Col span={24} md={6} sm={12} >

        <DateHead>
          <div style={{padding:'10px'}}>
          <DatePicker
          
            id="date-picker"
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={minDate}
          />
        {/* </div>
         */}
         </div>
         <div style={{ display: "flex", flexDirection: "column", alignItems: "start",padding:'10px' }}> 
          <Select
            id="timezone"
            options={timezones}
            value={selectedTimezone}
            onChange={handleTimezoneChange}
            styles={{
              container: (provided) => ({ ...provided, minWidth: "100px" }),
            }}
          /> 
         </div> 
         </DateHead>
           
      
        </Col>
        <Col span={24} md={8}>
        <div
            style={{
              marginTop: "1rem",
              // border: "1px solid #ccc",
              borderRadius: "5px",
              // padding: "1rem",
              maxHeight: "300px",
              overflowY: "scroll",
              width: "200px",
              background:'red'
            }}
          >
            {/* <strong>Available Times:</strong> */}
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {generateTimeSlots().map((time) => (
                <li
                  key={time}
                  style={{
                    padding: "0.5rem",
                    cursor: "pointer",
                    background: time === selectedTime ? "#d1e7ff" : "white",
                    margin: "5px 0",
                    border:"1px solid blue",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
          </Col>
     

        {/* </Col>
      </Row> */}
        {/* Date Calendar */}
    


         
        
         </CustomRow>
      </DateCard>

    </>
  );
};

export default ScheduleDate;
