import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilRuler2Fill } from 'react-icons/ri';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const ProductsPage = () => {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Produtos
            </Heading>
            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='pink'
              cursor='pointer'
              textTransform='uppercase'
              leftIcon={<Icon as={RiAddLine} fontSize='20' fontWeight='bold' />}
            >
              cadastrar novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th color='gray.300' fontSize='md'>
                  PRODUTO
                </Th>
                <Th color='gray.300' fontSize='md'>
                  CATEGORIA
                </Th>
                <Th color='gray.300' fontSize='md'>
                  PREÇO CUSTO
                </Th>
                <Th color='gray.300' fontSize='md'>
                  PREÇO VENDA
                </Th>
                <Th color='gray.300' fontSize='md'>
                  MARGEM
                </Th>
                <Th color='gray.300' fontSize='md'>
                  ESTOQUE
                </Th>
                <Th width='5'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Castanha do pará</Td>
                <Td>Oleaginosas</Td>
                <Td>R$98,50</Td>
                <Td>R$116,00</Td>
                <Td>18%</Td>
                <Td>2kg</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    cursor='pointer'
                    textTransform='uppercase'
                    leftIcon={<Icon as={RiPencilRuler2Fill} />}
                  >
                    editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Castanha de Caju</Td>
                <Td>Oleaginosas</Td>
                <Td>R$98,50</Td>
                <Td>R$116,00</Td>
                <Td>18%</Td>
                <Td>900g</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    cursor='pointer'
                    textTransform='uppercase'
                    leftIcon={<Icon as={RiPencilRuler2Fill} />}
                  >
                    editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};
