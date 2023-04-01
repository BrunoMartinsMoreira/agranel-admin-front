import { FindAllBase } from './FindAllBase';

export interface IProduct {
  id: string,
  name: string,
  category: string;
  costPrice: number,
  salePrice: number,
  profitMargin: number,
  stockQuantity: number,
}

export interface IFindAllProducts extends FindAllBase {
  category?: string
}
