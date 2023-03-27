import { Box, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { RiCurrencyLine, RiBarChartGroupedLine } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

export const SalesSection = () => {
  const { pathname } = useLocation();

  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        VENDAS
      </Text>
      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          to='/sales/new'
          display='flex'
          alignItems='center'
          color={pathname === '/sales/new' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiCurrencyLine} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Cadastrar venda
          </Text>
        </Link>
      </Stack>

      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          to='/sales/reports'
          display='flex'
          alignItems='center'
          color={pathname === '/sales/new' ? 'pink.400' : 'blue.400'}
          as={NavLink}
        >
          <Icon as={RiBarChartGroupedLine} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Relatorios
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};
