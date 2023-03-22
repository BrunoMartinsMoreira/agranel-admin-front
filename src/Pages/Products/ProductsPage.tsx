import { Box, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ProductsHeader } from '../../components/Products/ProductsHeader';
import { ProductsTable } from '../../components/Products/ProductsTable';
import { useProductsApi } from '../../hooks/useProductsApi';
import { IProduct } from '../../types/Products';

export const ProductsPage = () => {
  const { getProducts } = useProductsApi();
  const toast = useToast();

  const [products, setProducts] = useState<IProduct[]>([]);

  const getAll = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data.rows);
    } catch (error: any) {
      const { message } = error.response.data;
      toast({
        position: 'top',
        title: message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Box
      flex='1'
      borderRadius={8}
      bgGradient='linear(to-r, gray.900, gray.800)'
      px={['2.5', '8']}
      py={['6', '8']}
      mb='5'
    >
      <ProductsHeader />

      <ProductsTable products={products} />
    </Box>
  );
};
