import { GridItem, useToast } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { SelectCategory } from '../../components/Form/SelectCategory';
import { ICreateOrEditProduct, productSchema } from './schemas/productSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomNumberInput } from '../../components/Form/CustomNumberInput';
import { useProductsApi } from '../../hooks/useProductsApi';
import { calculateProfitMargin } from '../../utils/calculateProfitMargin';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateOrEditProduct } from '../../components/Products/CreateOrEditProduct/CreateOrEditProduct';

export const AddProductPage = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { createProduct } = useProductsApi();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ICreateOrEditProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      category: '',
      costPrice: undefined,
      salePrice: undefined,
      stockQuantity: undefined,
    },
  });

  const createProductMutation = useMutation(
    async (data: ICreateOrEditProduct) => {
      const { category, name, costPrice, salePrice, stockQuantity } = data;

      const profitMargin = calculateProfitMargin(+salePrice, +costPrice);

      const response = await createProduct(
        { category, name, costPrice, salePrice, stockQuantity },
        profitMargin,
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
      onSuccess: (res) => {
        toast({
          position: 'top',
          title: res.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
        });

        queryClient.invalidateQueries([
          'products-list',
          { category: res.data.category },
        ]);
        reset();
      },
    },
  );

  const onSubmit: SubmitHandler<ICreateOrEditProduct> = async (data) => {
    createProductMutation.mutate(data);
  };

  return (
    <CreateOrEditProduct
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
      headerTitle='Cadastrar produto'
      btnText='SALVAR'
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
    </CreateOrEditProduct>
  );
};
