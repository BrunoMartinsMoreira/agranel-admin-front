import { Box, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { RiAddLine, RiStackFill } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

export const OrdersSection = () => {
  const { pathname } = useLocation();

  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        PEDIDOS
      </Text>
      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          to='/orders/new'
          display='flex'
          alignItems='center'
          color={pathname === '/orders/new' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiAddLine} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Gerar pedido
          </Text>
        </Link>
      </Stack>

      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          to='/orders'
          display='flex'
          alignItems='center'
          color={pathname === '/orders' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiStackFill} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Cadastrar pedido
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};
