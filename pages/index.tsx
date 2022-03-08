import React, { useState } from 'react'
import Calendar from '../src/Appointment/Calendar'
import "react-datepicker/dist/react-datepicker.css"
import { Stack, Heading, Radio, RadioGroup, Flex, Container } from '@chakra-ui/react';
import Schedule from '../src/Appointment/Schedule';
import Header from "../src/Header"
import Navbar from '../src/Navbar';
import LoginBar from '../src/LoginBar';

const index: React.FC = () => {
	const [slotsMorning, setSlotsMorning] = useState('1')
  const [slotsAfternoon, setSlotsAfternoon] = useState('1')

  return (
		<Flex direction="column" align="center">
      <Navbar />
      <LoginBar />
      <Header />        
      <Stack justifyContent="center" m={0} gap={0}  maxW="container.lg">
        <Heading>Reserva tu turno</Heading>

      </Stack>

		</Flex>
  );
};

export default index
