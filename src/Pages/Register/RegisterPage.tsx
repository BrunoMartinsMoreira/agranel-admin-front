import { Flex, Button, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Form/Input';

export const RegisterPage = () => {
  return (
    <Flex
      w='100vw'
      h={['80vh', '100vh']}
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        as='form'
        flexDirection='column'
        width='100%'
        h={['93%', 'auto']}
        maxWidth={380}
        bg='gray.800'
        p='8'
        pt='4'
        pb={['0', '4']}
        borderRadius={8}
      >
        <Text as='b' color='gray.100' fontSize='3xl' pt='4' mb='8'>
          CADASTRAR-SE
        </Text>
        <Stack spacing='4'>
          <Input
            name='name'
            type='text'
            label='Nome'
            placeholder='Nome'
            /* error={errors.email}
        {...register('name')}*/
          />
          <Input
            name='email'
            type='email'
            label='E-mail'
            placeholder='E-mail'
            /* error={errors.email}
        {...register('email')}*/
          />
          <Input
            name='password'
            type='password'
            label='Senha'
            placeholder='Senha'
            /* error={errors.password}
        {...register('password')}*/
          />
          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            size='lg'
            /* isLoading={formState.isSubmitting}*/
          >
            Salvar
          </Button>
        </Stack>
        <Flex
          p='3'
          pt='8'
          width='100%'
          mt={['10', '8']}
          justify='space-between'
        >
          <Text size='8'>Já possui Conta?</Text>
          <Link to='/login'>
            <Text
              as='b'
              color='blue.500'
              border='2px solid transparent'
              borderRadius='5px'
              transition='.3s ease-in-out'
              padding='2'
              _hover={{
                border: '2px solid blue',
              }}
            >
              LOGIN
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
