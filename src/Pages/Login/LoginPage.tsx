import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';

export const LoginPage = () => {
  return (
    <>
      <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
        <Flex
          as='form'
          flexDirection='column'
          width='100%'
          maxWidth={500}
          bg='gray.800'
          p='8'
          borderRadius={8}
        >
          <Stack spacing='4'>
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
              colorScheme='green'
              size='lg'
              /* isLoading={formState.isSubmitting}*/
            >
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
