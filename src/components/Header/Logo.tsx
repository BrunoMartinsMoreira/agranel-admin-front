import { Link, Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Link
      _hover={{
        borderBottom: 'none',
      }}
      href='/'
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
