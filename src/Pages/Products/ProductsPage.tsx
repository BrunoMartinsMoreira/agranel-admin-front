import { Box, useToast } from '@chakra-ui/react';
import { ProductsHeader } from '../../components/Products/ProductsHeader';
import { ProductsTable } from '../../components/Products/ProductsTable';
import { useProductsApi } from '../../hooks/useProductsApi';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../../components/Loading/Loading';
import { Pagination } from '../../components/Pagination/Pagination';
import { useState } from 'react';
import { ProductsTabs } from '../../components/Products/ProductsTabs';

export const ProductsPage = () => {
  const { getProducts } = useProductsApi();
  const toast = useToast();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('temperos');

  const { data, isLoading, isFetching, error } = useQuery(
    ['products-list', { currentPage, category }],
    () => getProducts({ currentPage, category }),
    { retry: 3, staleTime: 1 * 1000 * 60, keepPreviousData: true },
  );

  if (error)
    toast({
      position: 'top',
      title: 'Deu ruim amor, calma aí que eu resolvo!',
      status: 'error',
      duration: 4000,
      isClosable: true,
    });

  const handleChangeCategory = (value: string) => setCategory(value);

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
      <ProductsTabs onClick={handleChangeCategory} />

      {isLoading || isFetching ? (
        <Loading isOpen={isLoading || isFetching} />
      ) : null}

      {data ? <ProductsTable products={data?.data?.rows} /> : null}
      {data?.data?.count ? (
        <Pagination
          total={data?.data?.count}
          currentPage={currentPage}
          itemDescription='produtos encontrados'
          onPageChange={setCurrentPage}
        />
      ) : null}
    </Box>
  );
};
