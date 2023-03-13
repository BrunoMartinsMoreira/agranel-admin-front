import { IProduct } from './types';
import {
  Table,
  TableContainer,
  TableData,
  TableHead,
  TableHeadContainer,
} from '../../shared/LayoutComponents/Table/Table';

interface PropTypes {
  products: IProduct[];
  headers: string[];
}

export const ProductsTable = ({ products, headers }: PropTypes) => {
  return (
    <TableContainer>
      <Table>
        <TableHeadContainer>
          <tr>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </tr>
        </TableHeadContainer>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <TableData>{product.name}</TableData>
              <TableData>{product.costPrice}</TableData>
              <TableData>{product.salePrice}</TableData>
              <TableData>{product.margin}</TableData>
              <TableData>{product.stockQuantity}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};
