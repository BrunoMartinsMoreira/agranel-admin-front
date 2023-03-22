import * as zod from 'zod';

export const productSchema = zod.object({
  name: zod
    .string({ required_error: 'Informe o nome do produto' })
    .min(1, { message: 'Informe o nome do produto' }),
  category: zod
    .string({ required_error: 'Informe a categoria do produto' })
    .min(1, { message: 'Informe a categoria do produto' }),
  costPrice: zod.number({ required_error: 'Informe o preço de custo' }).min(1),
  salePrice: zod.number({ required_error: 'Informe o preço de venda' }).min(1),
  stockQuantity: zod
    .number({
      required_error: 'Informe a quantidade em estoque',
    })
    .min(1),
});

export type ICreateProduct = zod.infer<typeof productSchema>;
