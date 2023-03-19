import { Flex, Button, Stack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Form/Input';
import { LoginFormData, loginFormSchema } from './LoginSchema';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Flex
        w='100vw'
        h={['80vh', '100vh']}
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Flex
          as='form'
          flexDirection='column'
          width='100%'
          h={['80%', 'auto']}
          maxWidth={380}
          bg='gray.800'
          p='8'
          pt='4'
          pb={['0', '4']}
          borderRadius={8}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Text as='b' color='gray.100' fontSize='3xl' pt='4' mb='8'>
            LOGIN
          </Text>

          <Stack spacing='4'>
            <Input
              inputName='email'
              type='email'
              label='E-mail'
              placeholder='E-mail'
              error={errors.email}
              {...register('email')}
            />
            <Input
              inputName='password'
              type='password'
              label='Senha'
              placeholder='Senha'
              error={errors.password}
              {...register('password')}
            />
            <Button
              type='submit'
              mt='6'
              colorScheme='pink'
              size='lg'
              isLoading={isSubmitting}
            >
              Entrar
            </Button>
          </Stack>
          <Flex
            p='3'
            pt='8'
            mt={['10', '8']}
            width='100%'
            justify='space-between'
          >
            <Text size='8'>Não possui Conta?</Text>
            <Link to='/register'>
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
                CADASTRAR-SE
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
