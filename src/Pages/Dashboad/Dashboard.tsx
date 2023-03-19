import { Box, SimpleGrid, Text } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
      <Box
        p={['4', '8']}
        bgGradient='linear(to-r, gray.900, gray.700)'
        borderRadius={8}
        pb='4'
      >
        <Text fontSize='lg' mb='4'>
          Vendas do mês
        </Text>
      </Box>

      <Box
        p={['4', '8']}
        bgGradient='linear(to-r, gray.900, gray.700)'
        borderRadius={8}
        pb='4'
      >
        <Text fontSize='lg' mb='4'>
          Produtos mais vendidos
        </Text>
      </Box>
    </SimpleGrid>
  );
};
