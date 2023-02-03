import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//your blindspots, the caring of what others think, the need for responsible selfishenss.

export const NewDate = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);

  return(
    <DatePicker selected={date} onChange={handleChange} />
  )
}