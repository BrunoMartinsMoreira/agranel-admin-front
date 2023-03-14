import { Box, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { RiMenuAddFill, RiListCheck2 } from 'react-icons/ri';

export const ProductsSection = () => {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        PRODUTOS
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
          <Icon as={RiMenuAddFill} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Adicionar novo
          </Text>
        </Link>

        <Link
          display='flex'
          alignItems='center'
          color='blue.400'
          _active={{
            color: 'pink.400',
          }}
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
