import { Text, Flex, Icon, Button } from '@chakra-ui/react';
import { TiWarningOutline } from 'react-icons/ti';
import { FaSmileWink } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Flex
      direction='column'
      h='100vh'
      align='center'
      justify='center'
      gap='1'
      maxW='100vw'
    >
      <Icon as={TiWarningOutline} fontSize={['3xl', '5xl']} color='red.500' />
      <Text fontSize={['2xl', '5xl']} px='3' color='gray.400'>
        Ops! Página em construção!
      </Text>
      <Flex align='center' mb='2' direction={['column', 'row']} maxWidth='80%'>
        <Text fontSize={['md', 'xl']} px='3' textAlign='center'>
          Enquanto ela fica pronta aproveita as outras, mas não se preocupa,
          jajá ela sai do forno
        </Text>
        <Icon
          as={FaSmileWink}
          fontSize='3xl'
          color='yellow.500'
          mt={['2', '0']}
        />
      </Flex>
      <Button
        size='lg'
        fontSize='md'
        fontWeight='bold'
        w='60'
        colorScheme='pink'
        cursor='pointer'
        textTransform='uppercase'
        onClick={() => navigate(-1)}
      >
        VOLTAR
      </Button>
    </Flex>
  );
};
