import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
      w='64'
      fontFamily='mono'
      color='green.600'
      borderRight='4px solid #2F855A'
      px='2'
      py='2'
      textAlign='center'
      mr='10'
    >
      agranel
      <Text as='span' ml='1' color='pink.400' fontFamily='mono'>
        Ita
      </Text>
    </Text>
  );
}
