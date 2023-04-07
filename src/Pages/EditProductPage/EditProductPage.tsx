import { Flex, GridItem, Button, Grid, useToast } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { SelectCategory } from '../../components/Form/SelectCategory';
import { ICreateProduct, productSchema } from '../AddProductPage/ProductSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomNumberInput } from '../../components/Form/CustomNumberInput';
import { useProductsApi } from '../../hooks/useProductsApi';
import { Loading } from '../../components/Loading/Loading';
import { AddOrEditProductsHeader } from '../../components/Products/AddOrEditProductsHeader';
import { calculateProfitMargin } from '../../utils/calculateProfitMargin';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProduct } from '../../types/Products';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const EditProductPage = () => {
  const toast = useToast();
  const location = useLocation();
  const { editProduct } = useProductsApi();
  const navigate = useNavigate();

  const product = location.state as IProduct;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ICreateProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product.name,
      category: product.category,
      costPrice: product.costPrice.toString(),
      salePrice: product.salePrice.toString(),
      stockQuantity: product.stockQuantity.toString(),
    },
  });

  const editProductMutation = useMutation(
    async (data: ICreateProduct) => {
      const { category, name, costPrice, salePrice, stockQuantity } = data;

      const profitMargin = calculateProfitMargin(+salePrice, +costPrice);

      const response = await editProduct(
        { category, name, costPrice, salePrice, stockQuantity },
        profitMargin,
        product.id,
      );
      return response;
    },
    {
      onError: () => {
        toast({
          position: 'top',
          title: 'Esse produto já está cadastrado linda ❤!',
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      },
      onSuccess: (data) => {
        toast({
          position: 'top',
          title: data.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
        });

        queryClient.invalidateQueries([
          'products-list',
          { category: product.category },
        ]);
        reset();
        navigate('/products');
      },
    },
  );

  const onSubmit: SubmitHandler<ICreateProduct> = async (data) => {
    editProductMutation.mutate(data);
  };

  return (
    <Flex
      width='100%'
      direction='column'
      gap='8'
      align='center'
      justify='center'
    >
      {isSubmitting && <Loading isOpen={isSubmitting} />}
      <Flex
        as='form'
        flexDirection='column'
        maxWidth={['98vw', '70vw']}
        bg='gray.800'
        p='8'
        pt='4'
        pb={['2', '4']}
        borderRadius={8}
        onSubmit={handleSubmit(onSubmit)}
      >
        <AddOrEditProductsHeader title='Editar produto' />
        <Grid
          templateRows={['repeat(5, 1fr)', 'repeat(2, 1fr)']}
          templateColumns={['1fr', 'repeat(3, 1fr)']}
          gap='4'
          alignItems='center'
        >
          <GridItem colSpan={[1, 2]} rowSpan={1}>
            <Input
              inputName='name'
              size='md'
              type='text'
              label='Nome do produto'
              placeholder='Nome do produto'
              error={errors.name}
              {...register('name')}
            />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <SelectCategory error={errors.category} {...register('category')} />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <CustomNumberInput
              label='Preço de custo'
              prefix='R$'
              error={errors.costPrice}
              {...register('costPrice')}
            />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <CustomNumberInput
              label='Preço de venda'
              prefix='R$'
              error={errors.salePrice}
              {...register('salePrice')}
            />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <CustomNumberInput
              label='Estoque(kg)'
              prefix='KG'
              error={errors.stockQuantity}
              {...register('stockQuantity')}
            />
          </GridItem>
        </Grid>
        <Flex justify='flex-end' gap='3'>
          <Button
            type='submit'
            mt='6'
            mb='3'
            colorScheme='green'
            size='lg'
            width='40'
            isLoading={isSubmitting}
          >
            SALVAR
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
