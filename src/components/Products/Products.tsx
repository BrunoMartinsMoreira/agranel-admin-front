import { ProductsTable } from './ProductsTable';

const products = [
  {
    id: 'ad',
    name: 'Castanha do pará',
    costPrice: 'R$45,19',
    salePrice: 'R$85,00',
    margin: '80%',
    stockQuantity: '2kg',
  },
  {
    id: 'ada',
    name: 'Castanha do pará',
    costPrice: 'R$45,19',
    salePrice: 'R$85,00',
    margin: '80%',
    stockQuantity: '2kg',
  },
];

const headers = [
  'nome',
  'preço de custo',
  'preço de venda',
  'margem',
  'estoque',
];

export const Products = () => {
  return <ProductsTable products={products} headers={headers} />;
};
