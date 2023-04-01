import { api } from '../api/baseApi';
import { ITEMS_PER_PAGE } from '../constants/ItemsPerPage';
import { ICreateProduct } from '../Pages/AddProductPage/ProductSchema';
import { IApiResponse } from '../types/ApiResponse';
import { Pagination } from '../types/Pagination';
import { IFindAllProducts, IProduct } from '../types/Products';

export const useProductsApi = () => {
  const getProducts = async (
    params?: IFindAllProducts,
  ): Promise<IApiResponse<Pagination<IProduct>>> => {
    const { data } = await api.get('/products', {
      params: {
        page: params?.currentPage,
        take: params?.take ?? ITEMS_PER_PAGE,
        category: params?.category,
      },
    });

    return data;
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
