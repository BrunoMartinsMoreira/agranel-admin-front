import { Box, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { RiCurrencyLine, RiBarChartGroupedLine } from 'react-icons/ri';

export const SalesSection = () => {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        VENDAS
      </Text>
      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          display='flex'
          alignItems='center'
          color='blue.400'
          _active={{
            color: 'pink.400',
          }}
        >
          <Icon as={RiCurrencyLine} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Cadastrar venda
          </Text>
        </Link>
      </Stack>

      <Stack spacing='4' mt='3' ml='2' align='stretch'>
        <Link
          display='flex'
          alignItems='center'
          color='blue.400'
          _active={{
            color: 'pink.400',
          }}
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
