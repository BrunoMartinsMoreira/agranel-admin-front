/* eslint-disable react/no-children-prop */
import { Flex, Text, GridItem, Button, Grid, useToast } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { SelectCategory } from '../../components/Form/SelectCategory';
import { ICreateProduct, productSchema } from './ProductSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomNumberInput } from '../../components/Form/CustomNumberInput';
import { useProductsApi } from '../../hooks/useProductsApi';
import { Loading } from '../../components/Loading/Loading';

const calculateProfiMargin = (salePrice: number, costPrice: number) => {
  const profitMargin = ((salePrice - costPrice) / salePrice) * 100;
  return parseFloat(profitMargin.toFixed(2));
};

export const AddProductPage = () => {
  const { createProduct } = useProductsApi();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, defaultValues },
  } = useForm<ICreateProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      category: '',
      costPrice: undefined,
      salePrice: undefined,
      stockQuantity: undefined,
    },
  });

  const onSubmit: SubmitHandler<ICreateProduct> = async ({
    category,
    name,
    costPrice,
    salePrice,
    stockQuantity,
  }) => {
    try {
      const profitMargin = calculateProfiMargin(salePrice, costPrice);

      const response = await createProduct(
        { category, name, costPrice, salePrice, stockQuantity },
        profitMargin,
      );

      toast({
        position: 'top',
        title: response.message,
        status: 'success',
        duration: 4000,
        isClosable: true,
      });

      reset();
    } catch (error: any) {
      toast({
        position: 'top',
        title: 'Esse produto já está cadastrado linda ❤!',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      width='100%'
      direction='column'
      gap='8'
      align='center'
      justify='center'
    >
      {isSubmitting ? <Loading isOpen={isSubmitting} /> : null}
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
        <Text as='b' color='gray.100' fontSize={['xl', '3xl']} pt='4' mb='8'>
          Cadastrar novo produto
        </Text>
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
              value={defaultValues?.name}
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
              value={defaultValues?.costPrice}
              error={errors.costPrice}
              {...register('costPrice')}
            />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <CustomNumberInput
              label='Preço de venda'
              prefix='R$'
              value={defaultValues?.salePrice}
              error={errors.salePrice}
              {...register('salePrice')}
            />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <CustomNumberInput
              label='Estoque(kg)'
              prefix='KG'
              value={defaultValues?.stockQuantity}
              error={errors.stockQuantity}
              {...register('stockQuantity')}
            />
          </GridItem>
        </Grid>
        <Flex justify={['center', 'flex-end']} gap='3'>
          <Button
            mt='6'
            colorScheme='pink'
            size='lg'
            width={['30', '40']}
            isLoading={isSubmitting}
            disabled
          >
            CANCELAR
          </Button>
          <Button
            type='submit'
            mt='6'
            mb='3'
            colorScheme='green'
            size='lg'
            width={['32', '40']}
            isLoading={isSubmitting}
          >
            SALVAR
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
