import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';
import { SideBarNav } from './SideBarNav';

export const Sidebar = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { isOpen, onClose } = useSideBarDrawer();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bgGradient='linear(to-r, gray.900, gray.700)'>
            <DrawerCloseButton
              mt='4'
              color='gray.300'
              fontWeight='bold'
              bg='pink.800'
            />
            <DrawerHeader mt='4'>Menu</DrawerHeader>
            <DrawerBody mt='4'>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      as='aside'
      w='64'
      mr='8'
      bgGradient='linear(to-r, gray.900, gray.700)'
      p='6'
      borderRadius='8px'
    >
      <SideBarNav />
    </Box>
  );
};
