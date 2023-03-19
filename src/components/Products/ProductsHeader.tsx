import { Flex, Heading, Button, Icon } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

export const ProductsHeader = () => {
  return (
    <Flex mb='8' justify='space-between' align='center'>
      <Heading size={['md', 'lg']} fontWeight='normal'>
        Produtos
      </Heading>
      <Button
        as='a'
        size='sm'
        fontSize='sm'
        colorScheme='pink'
        cursor='pointer'
        textTransform='uppercase'
        leftIcon={
          <Icon as={RiAddLine} fontSize={['18', '20']} fontWeight='bold' />
        }
      >
        cadastrar
      </Button>
    </Flex>
  );
};
