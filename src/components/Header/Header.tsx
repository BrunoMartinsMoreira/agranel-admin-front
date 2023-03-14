import { Flex, Input, Icon, Box, Avatar, Text } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
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
      px='4'
      py='12'
      position='sticky'
    >
      <Logo />
      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        maxWidth={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.700'
        borderRadius='full'
        mr='auto'
      >
        <Input
          color='gray.50'
          variant='unstyled'
          placeholder='Buscar na plataforma'
          px='1'
          mr='4'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>

      <Flex align='center' ml='20'>
        <Box mr='4' textAlign='right'>
          <Text>Dita Matos</Text>
        </Box>
        <Avatar backgroundColor='gray.700' size='md' name='Dita Matos' />
      </Flex>
    </Flex>
  );
};
