import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header/Header';
import { ProductsHeader } from '../../components/Products/ProductsHeader';
import { ProductsTable } from '../../components/Products/ProductsTable';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const ProductsPage = () => {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px={['2', '6']}>
        <Sidebar />
        <Box
          flex='1'
          borderRadius={8}
          bgGradient='linear(to-r, gray.900, gray.700)'
          px={['2.5', '8']}
          py={['6', '8']}
        >
          <ProductsHeader />

          <ProductsTable />
        </Box>
      </Flex>
    </Box>
  );
};
