/* eslint-disable react/no-children-prop */
import { Flex, Text, GridItem, Button, Grid } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { SelectCategory } from '../../components/Form/SelectCategory';
import { ICreateProduct, productSchema } from './ProductSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomNumberInput } from '../../components/Form/CustomNumberInput';

export const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ICreateProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      category: '',
      costPrice: '',
      salePrice: '',
      stockQuantity: '',
    },
  });

  const onSubmit: SubmitHandler<ICreateProduct> = (data) => {
    console.log(data);
    // reset();
  };

  return (
    <Flex
      width='100%'
      direction='column'
      gap='8'
      align='center'
      justify='center'
    >
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
          Adicionar novo produto
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
              // {...register('costPrice')}
            />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <CustomNumberInput
              label='Preço de venda'
              prefix='R$'
              error={errors.costPrice}
              // {...register('salePrice')}
            />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <CustomNumberInput
              label='Estoque(kg)'
              prefix='KG'
              error={errors.stockQuantity}
              // {...register('stockQuantity')}
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
