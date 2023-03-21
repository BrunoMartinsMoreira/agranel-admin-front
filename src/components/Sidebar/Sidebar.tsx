import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';
import { useAuth } from '../../hooks/useAuth';
import { SideBarNav } from './SideBarNav';

export const Sidebar = () => {
  const { isOpen, onClose } = useSideBarDrawer();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bgGradient='linear(to-r, gray.800, gray.700)'>
          <DrawerCloseButton
            mt='4'
            color='gray.50'
            fontWeight='bold'
            bg='red.600'
            transition='.2s'
            _hover={{
              bg: 'red.400',
            }}
          />
          <DrawerHeader mt='4'>Menu</DrawerHeader>
          <DrawerBody
            mt='4'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
          >
            <SideBarNav />

            <Flex mb='4'>
              <Button
                size='lg'
                fontSize='md'
                fontWeight='bold'
                w='60'
                colorScheme='pink'
                cursor='pointer'
                textTransform='uppercase'
                leftIcon={<Icon as={RiLogoutBoxLine} fontWeight='bold' />}
                onClick={handleLogout}
              >
                FAZER LOGOUT
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
