import {
  Flex,
  Box,
  Avatar,
  Text,
  useBreakpointValue,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';

export const Header = () => {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={'100vw'}
      h='20'
      mx='auto'
      mt='0'
      align='center'
      px={['2', '4']}
      py={['8', '12']}
      position='sticky'
      bgGradient='linear(to-r, gray.900, gray.700)'
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          aria-label='open navigation'
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
        ></IconButton>
      )}
      <Logo />

      <Flex align='center' mr={['0', '10']} ml='auto'>
        {isWideVersion && (
          <Box mr='2' textAlign='right'>
            <Text fontWeight='bold'>Dita Matos</Text>
          </Box>
        )}
        <Avatar backgroundColor='gray.900' size='md' name='Dita Matos' />
      </Flex>
    </Flex>
  );
};
