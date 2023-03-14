import { Box, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { RiAddLine, RiStackFill } from 'react-icons/ri';

export const OrdersSection = () => {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        PEDIDOS
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
          <Icon as={RiAddLine} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Gerar pedido
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
          <Icon as={RiStackFill} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Cadastrar pedido
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};
