import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <Flex width='100%' direction='column' gap='8'>
      <SimpleGrid
        flex='1'
        gap='4'
        minChildWidth={['320px', '350px']}
        alignItems='flex-start'
      >
        <Box
          bgGradient='linear(to-r, gray.800, gray.700)'
          boxShadow='0px 0px 8px 2px rgba(0, 0, 0, 0.9)'
          borderRadius={8}
          p={['4', '8']}
          pb='4'
        >
          <Text fontSize='lg' mb='4'>
            Vendas do mês
          </Text>

          <Text fontSize='3xl' mb='1' fontWeight='bold' color='blue.400'>
            R$ 3500,00
          </Text>
        </Box>

        <Box
          p={['4', '8']}
          bgGradient='linear(to-r, gray.800, gray.700)'
          boxShadow='0px 0px 8px 2px rgba(0, 0, 0, 0.9)'
          borderRadius={8}
          pb='4'
        >
          <Text fontSize='lg' mb='4'>
            Saidas
          </Text>

          <Text fontSize='3xl' mb='1' fontWeight='bold' color='red.400'>
            R$ 2000,00
          </Text>
        </Box>

        <Box
          p={['4', '8']}
          bgGradient='linear(to-r, gray.800, gray.700)'
          boxShadow='0px 0px 8px 2px rgba(0, 0, 0, 0.9)'
          borderRadius={8}
          pb='4'
        >
          <Text fontSize='lg' mb='4'>
            Lucro do mês
          </Text>

          <Text fontSize='3xl' mb='1' fontWeight='bold' color='green.400'>
            R$ 1500,00
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};
