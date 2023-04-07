import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Icon,
  Box,
} from '@chakra-ui/react';
import { RiPencilFill } from 'react-icons/ri';
import { IProduct } from '../../types/Products';

type PropTypes = {
  products: IProduct[];
  handleEdit(product: IProduct): void;
};

export const ProductsTable = ({ products, handleEdit }: PropTypes) => {
  const numberToString = (item: number) => item.toFixed(2).replace('.', ',');

  return (
    <Box overflow='auto' maxWidth='90vw'>
      <Table colorScheme='whiteAlpha'>
        <Thead>
          <Tr>
            <Th color='gray.300' fontSize='md' px='2'>
              PRODUTO
            </Th>

            <Th color='gray.300' fontSize='md' px='2'>
              PREÇO CUSTO
            </Th>
            <Th color='gray.300' fontSize='md' px='2'>
              PREÇO VENDA
            </Th>
            <Th color='gray.300' fontSize='md' px='2'>
              MARGEM
            </Th>
            <Th color='gray.300' fontSize='md' px='2'>
              ESTOQUE
            </Th>
            <Th width={['2', '5']}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((product) => (
            <Tr key={product.id}>
              <Td px='2'>{product.name} </Td>

              <Td px='2'>R${numberToString(product.costPrice)}</Td>
              <Td px='2'>R${numberToString(product.salePrice)}</Td>
              <Td px='2'>{numberToString(product.profitMargin)}%</Td>
              <Td px='2'> {numberToString(product.stockQuantity)} kg</Td>
              <Td px='2'>
                <Button
                  as='a'
                  size='sm'
                  fontSize='sm'
                  colorScheme='purple'
                  cursor='pointer'
                  textTransform='uppercase'
                  onClick={() => handleEdit(product)}
                  leftIcon={<Icon as={RiPencilFill} />}
                >
                  editar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
