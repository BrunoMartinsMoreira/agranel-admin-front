import { api } from '../api/baseApi';
import { IApiResponse } from '../types/ApiResponse';
import { Pagination } from '../types/Pagination';
import { IProduct } from '../types/Products';

export const useProductsApi = () => {
  const getProducts = async (): Promise<IApiResponse<Pagination<IProduct>>> => {
    const response = await api.get('/products');
    return response.data;
  };

  return {
    getProducts,
  };
};
