import { api } from '../api/baseApi';
import { ICreateProduct } from '../Pages/AddProductPage/ProductSchema';
import { IApiResponse } from '../types/ApiResponse';
import { Pagination } from '../types/Pagination';
import { IProduct } from '../types/Products';

export const useProductsApi = () => {
  const getProducts = async (): Promise<IApiResponse<Pagination<IProduct>>> => {
    const response = await api.get('/products');
    return response.data;
  };

  const createProduct = async (
    { category, name, costPrice, salePrice, stockQuantity }: ICreateProduct,
    profitMargin: number,
  ): Promise<IApiResponse<IProduct>> => {
    const response = await api.post('/products', {
      name,
      category,
      costPrice,
      salePrice,
      profitMargin,
      stockQuantity,
    });
    return response.data;
  };

  return {
    getProducts,
    createProduct,
  };
};
