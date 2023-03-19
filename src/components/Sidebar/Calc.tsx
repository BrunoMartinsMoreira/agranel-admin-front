import React from 'react';
import { RiMoneyDollarBoxLine, RiPercentFill } from 'react-icons/ri';
import { Box, Stack, Text, Icon, Link } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

export const CalcSection = () => {
  const { pathname } = useLocation();
  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        CALCULADORA
      </Text>
      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          to='/calc/by-price'
          display='flex'
          alignItems='center'
          color={pathname === '/calc/by-price' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiMoneyDollarBoxLine} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Calcular por preço
          </Text>
        </Link>

        <Link
          to='/cal/by-weight'
          display='flex'
          alignItems='center'
          color={pathname === '/calc/by-weight' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiPercentFill} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Calcular por peso
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};
