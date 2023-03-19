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

export const ProductsTable = () => {
  return (
    <Box overflow='auto' maxWidth='90vw'>
      <Table colorScheme='whiteAlpha'>
        <Thead>
          <Tr>
            <Th color='gray.300' fontSize='md' px='2'>
              PRODUTO
            </Th>
            <Th color='gray.300' fontSize='md' px='2'>
              CATEGORIA
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
          <Tr>
            <Td px='2'>Castanha do pará</Td>
            <Td px='2'>Oleaginosas</Td>
            <Td px='2'>R$98,50</Td>
            <Td px='2'>R$116,00</Td>
            <Td px='2'>18%</Td>
            <Td px='2'> 2kg</Td>
            <Td px='2'>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='purple'
                cursor='pointer'
                textTransform='uppercase'
                leftIcon={<Icon as={RiPencilFill} />}
              >
                editar
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td px='2'>Castanha de Caju</Td>
            <Td px='2'>Oleaginosas</Td>
            <Td px='2'>R$98,50</Td>
            <Td px='2'>R$116,00</Td>
            <Td px='2'>18%</Td>
            <Td px='2'>900g</Td>
            <Td px='2'>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='purple'
                cursor='pointer'
                textTransform='uppercase'
                leftIcon={<Icon as={RiPencilFill} />}
              >
                editar
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
