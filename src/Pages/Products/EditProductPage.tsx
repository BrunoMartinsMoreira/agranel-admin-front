import { GridItem, useToast } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { SelectCategory } from '../../components/Form/SelectCategory';
import { ICreateOrEditProduct, productSchema } from './schemas/productSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomNumberInput } from '../../components/Form/CustomNumberInput';
import { useProductsApi } from '../../hooks/useProductsApi';
import { calculateProfitMargin } from '../../utils/calculateProfitMargin';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProduct } from '../../types/Products';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateOrEditProduct } from '../../components/Products/CreateOrEditProduct/CreateOrEditProduct';

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
  } = useForm<ICreateOrEditProduct>({
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
    async (data: ICreateOrEditProduct) => {
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
          title: 'Eita, deu ruim, chama seu mozão que ele resolve ❤!',
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

  const onSubmit: SubmitHandler<ICreateOrEditProduct> = async (data) => {
    editProductMutation.mutate(data);
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
