import { Button, Grid, Icon, Radio, RadioGroup, Stack } from '@chakra-ui/react';
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
const initialAvailableBookings = [
  {
    time: "10:00",
    available: false,
  },
  {
    time: "10:30",
    available: false,
  },
  {
    time: "11:00",
    available: false,
  },
  ]
interface BookingI {
  time: string;
  slotA: boolean;
  slotB: boolean;
}
interface AvailableBookingI {
  time: string;
  available: boolean;
}

const Schedule: React.FC = ()=> {
  const [bookings, setBookings] = useState<BookingI[]>(initialBookings)
  const [availableBookings, setAvailableBookings] = useState(initialAvailableBookings)
  const [slotSelected, setSlotSelected] = useState()
  const resetState = ()=> setBookings(initialBookings)

const updateAvailableBookings = (booking: AvailableBookingI)=>{
  const newBooking = availableBookings.map(item=> {
    if (item.time === booking.time) {
      return {...item, available: true}
      }
      return item
    })
    setAvailableBookings(newBooking)
}
const deleteBooking = (booking: AvailableBookingI)=>{
  const newBooking = availableBookings.map(item=> {
    if (item.time === booking.time) {
      return {...item, available: false}
      }
      return item
    })
    setAvailableBookings(newBooking)
}

  useEffect(()=>{
    console.log(bookings)
  }, [bookings])

  return(
    <Stack>
      <RadioGroup onChange={setSlotSelected} value={slotSelected}>
        <Stack direction="row">
          <Grid gap={2} templateColumns="repeat(3, 1fr)">
          {availableBookings.map(booking=> <Radio isDisabled={false} value={booking.time}>{booking.time}</Radio>)}
          </Grid>
        </Stack>
      </RadioGroup>
    </Stack>
  )
}

export default Schedule

{/* <Stack>
<Button onClick={resetState}>Reset</Button>
<Stack direction="row">
  <Grid gap={2} templateColumns="repeat(3, 1fr)">
  {availableBookings.map(booking=> <Stack direction="row" key={booking.time}><Button isDisabled={booking.available}  onClick={()=>updateAvailableBookings(booking)}>{booking.time}</Button><Button display={(booking.available) ? "flex" : "none"} onClick={()=>deleteBooking(booking)}>X</Button></Stack>)}
  </Grid>
</Stack>
</Stack> */}