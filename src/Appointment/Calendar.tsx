import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Stack } from '@chakra-ui/react';

const Calendar: React.FC = ()=> {
  const [selectedDate, setSelectedDate] = useState(new Date());
	const onChange = (date:any) =>{
		setSelectedDate(date)
	}
	

	useEffect(()=>{
		console.log(selectedDate)
	},[selectedDate])
	
  return (
		<Stack>
			<DatePicker
				selected={selectedDate}
				onChange={onChange}
				inline
			/>
		</Stack>
  );
};
export default Calendar