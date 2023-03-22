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
import { useAuth } from '../../hooks/useAuth';
import { Logo } from './Logo';

export const Header = () => {
  const { onOpen } = useSideBarDrawer();
  const { getUser } = useAuth();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const user = getUser();

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
      bgGradient='linear(to-r, gray.800, gray.700)'
      boxShadow='0px 0px 8px 3px rgba(0, 0, 0, 0.95)'
      position='sticky'
      zIndex='999'
      top='0'
    >
      <IconButton
        icon={<Icon as={RiMenuLine} />}
        aria-label='open navigation'
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
      ></IconButton>
      <Logo />

      <Flex align='center' mr={['0', '10']} ml='auto'>
        {isWideVersion && (
          <Box mr='2' textAlign='right'>
            <Text fontWeight='bold'>{user?.name}</Text>
          </Box>
        )}
        <Avatar backgroundColor='gray.900' size='md' name={`${user?.name}`} />
      </Flex>
    </Flex>
  );
};
