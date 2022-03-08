import { Button, Flex } from '@chakra-ui/react';
import React from 'react';


const LoginBar: React.FC = ()=> {

  return(
    <Flex alignItems="center" justifyContent="end" bg="blue.300" w="100vw" h="4vh">
      {`<Loginbar />`}
      <Button size="xs">Iniciar sesion</Button>
    </Flex>
  )
}
export default LoginBar