import { Box } from '@chakra-ui/react';
import { ProductsHeader } from '../../components/Products/ProductsHeader';
import { ProductsTable } from '../../components/Products/ProductsTable';

export const ProductsPage = () => {
  return (
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
  );
};
