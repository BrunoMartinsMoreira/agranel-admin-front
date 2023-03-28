import * as zod from 'zod';

export const productSchema = zod.object({
  name: zod
    .string({ required_error: 'Informe o nome do produto' })
    .min(1, { message: 'Informe o nome do produto' }),

  category: zod
    .string({ required_error: 'Informe a categoria do produto' })
    .min(1, { message: 'Informe a categoria do produto' }),

  costPrice: zod
    .string({ required_error: 'Informe o preço de custo' })
    .min(1, { message: 'Informe o preço de custo' })
    .transform((value) => parseFloat(value)),

  salePrice: zod
    .string({ required_error: 'Informe o preço de venda' })
    .min(1, { message: 'Informe o preço de venda' })
    .transform((value) => parseFloat(value)),

  stockQuantity: zod
    .string({
      required_error: 'Informe a quantidade em estoque',
    })
    .min(1, { message: 'Informe a quantidade em estoque' })
    .transform((value) => parseFloat(value)),
});

export type ICreateProduct = zod.infer<typeof productSchema>;
