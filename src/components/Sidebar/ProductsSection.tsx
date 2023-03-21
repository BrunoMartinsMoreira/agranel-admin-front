import { Box, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { RiMenuAddFill, RiListCheck2 } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

export const ProductsSection = () => {
  const { pathname } = useLocation();

  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        PRODUTOS
      </Text>
      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          to='/admin/products/new'
          display='flex'
          alignItems='center'
          color={pathname === '/admin/products/new' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiMenuAddFill} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Adicionar novo
          </Text>
        </Link>

        <Link
          to='/admin/products'
          display='flex'
          alignItems='center'
          color={pathname === '/admin/products' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiListCheck2} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Gerenciar
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};
