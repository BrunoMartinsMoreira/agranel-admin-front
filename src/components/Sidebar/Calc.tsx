import React from 'react';
import { RiMoneyDollarBoxLine, RiPercentFill } from 'react-icons/ri';
import { Box, Stack, Text, Icon, Link } from '@chakra-ui/react';

export const CalcSection = () => {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.300' fontSize='small'>
        CALCULADORA
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
          <Icon as={RiMoneyDollarBoxLine} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Calcular por preço
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
          <Icon as={RiPercentFill} fontSize='20' />
          <Text ml='2' fontWeight='medium'>
            Calcular por peso
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};
