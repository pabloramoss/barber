import { Button, Grid, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const initialBookings = [
{
  time: "10:00",
  slotA: false,
  slotB: false,
},
{
  time: "10:30",
  slotA: false,
  slotB: false,
},
{
  time: "11:00",
  slotA: false,
  slotB: false,
},
]
interface BookingI {
  time: string;
  slotA: boolean;
  slotB: boolean;
}

const ScheduleBackend: React.FC = ()=> {
  const [bookings, setBookings] = useState<BookingI[]>(initialBookings)
  const resetState = ()=> setBookings(initialBookings)

const updateBookings = (booking: BookingI)=>{
  const newBooking = bookings.map(item=> {
  if (item.time === booking.time) {
    if (!item.slotA) {
      return {...item, slotA: true}
    }else {
      return {...item, slotB: true}
    }
  } else {
    return item
  }
  })
  console.log(newBooking)
  setBookings(newBooking)
}

  useEffect(()=>{
    console.log(bookings)
  }, [bookings])

  return(
    <Stack>
      <Button onClick={resetState}>Reset</Button>
      <Stack direction="row">
        <Grid gap={2} templateColumns="repeat(3, 1fr)">
        {bookings.map(booking=> <Button isDisabled={booking.slotB}  onClick={()=>updateBookings(booking)} key={booking.time}>{booking.time}</Button>)}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default ScheduleBackend