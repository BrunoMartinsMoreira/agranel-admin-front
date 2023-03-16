import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={'100vw'}
      h='20'
      mx='auto'
      mt='0'
      align='center'
      justify='space-between'
      px='4'
      py='12'
      position='sticky'
    >
      <Logo />

      <Flex align='center' mr='12'>
        <Box mr='' textAlign='right'>
          <Text>Dita Matos</Text>
        </Box>
        <Avatar backgroundColor='gray.700' size='md' name='Dita Matos' />
      </Flex>
    </Flex>
  );
};
