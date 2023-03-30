import { Box, Flex, useToast } from '@chakra-ui/react';
import { ProductsHeader } from '../../components/Products/ProductsHeader';
import { ProductsTable } from '../../components/Products/ProductsTable';
import { useProductsApi } from '../../hooks/useProductsApi';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../../components/Loading/Loading';
import { Pagination } from '../../components/Pagination/Pagination';

export const ProductsPage = () => {
  const { getProducts } = useProductsApi();
  const toast = useToast();

  const getProductsList = async () => {
    const response = await getProducts();
    return {
      rows: response.data.rows,
      count: response.data.count,
    };
  };

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['products-list'],
    queryFn: getProductsList,
    retry: 3,
    staleTime: 3 * 1000 * 60,
  });

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

      {isLoading || isFetching ? (
        <Loading isOpen={isLoading || isFetching} />
      ) : null}

      {error ? (
        <Flex justify='center'>
          {toast({
            position: 'top',
            title: 'Deu ruim amor, calma aí que eu resolvo!',
            status: 'error',
            duration: 4000,
            isClosable: true,
          })}
        </Flex>
      ) : null}

      {data ? <ProductsTable products={data?.rows} /> : null}
      {data?.count ? (
        <Pagination
          total={data?.count}
          itemDescription='produtos encontrados'
        />
      ) : null}
    </Box>
  );
};
