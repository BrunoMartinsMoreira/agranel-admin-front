import { Flex, Button, Stack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Form/Input';
import { RegisterFormData, registerFormSchema } from './RegisterSchema';

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Flex
      w='100vw'
      h={['84vh', '100vh']}
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
        pb={['2', '4']}
        borderRadius={8}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text as='b' color='gray.100' fontSize='3xl' pt='4' mb='8'>
          CADASTRAR-SE
        </Text>
        <Stack spacing='4'>
          <Input
            inputName='name'
            type='text'
            label='Nome'
            placeholder='Nome'
            error={errors.name}
            {...register('name')}
          />
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
          <Input
            inputName='confirmpassword'
            type='password'
            label='Repita a senha'
            placeholder='Repita a senha'
            error={errors.confirmpassword}
            {...register('confirmpassword')}
          />
          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            size='lg'
            isLoading={isSubmitting}
          >
            Salvar
          </Button>
        </Stack>
        <Flex p='3' pt='8' width='100%' mt={['0', '8']} justify='space-between'>
          <Text size='8'>Já possui Conta?</Text>
          <Link to='/'>
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
