import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';


const Header: React.FC = ()=> {

  return(
    <Flex p={10} height="40vh" width="100vw" bg="gray.300" >
      <Heading alignSelf="center" fontSize="2xl" maxW={["80vw","40vw","40vw","30vw"]}>
        Barberia giuseppe. Horario: de Lunes a Sabado de 10:00 a 12:30 y de 16:00 a 20:00
      </Heading>
    </Flex>
  )
}
export default Header