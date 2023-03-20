import { Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export function Logo() {
  return (
    <Link
      to='/'
      _hover={{
        borderBottom: 'none',
      }}
      as={NavLink}
    >
      <Text
        fontSize={['4xl', '5xl']}
        fontWeight='500'
        letterSpacing='tight'
        w={['45', '64']}
        fontFamily='Cookie'
        color='green.600'
        px='2'
        py='2'
        textAlign='center'
        mr={['0', '10']}
      >
        Agranel
        <Text as='span' ml='1' color='pink.400' fontFamily='Cookie'>
          Ita
        </Text>
      </Text>
    </Link>
  );
}
