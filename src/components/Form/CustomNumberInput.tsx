/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { ChangeEvent, forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface CustomNumberInputProps extends ChakraInputProps {
  inputName?: string;
  label?: string;
  placeHolder?: string;
  error?: FieldError;
  prefix: string;
}

const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  const value = target.value;
  const parsedValue = value
    .replace(/[^0-9,]/g, '')
    .replace(',', '.')
    .replace(/(\..*)\./g, '$1');

  return Number.parseFloat(parsedValue);
};

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomNumberInputProps
> = ({ label, inputName, error = null, prefix, ...rest }, ref) => {
  return (
    <FormControl>
      {!label || <FormLabel htmlFor={inputName}>{label}</FormLabel>}
      <InputGroup>
        <InputLeftAddon bg='gray.800' children={prefix} />
        <Input
          placeholder='00,00'
          type='number'
          step='0.01'
          name={inputName}
          id={inputName}
          onChange={onChange}
          focusBorderColor='pink.700'
          _hover={{
            bgColor: 'gray.900',
          }}
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const CustomNumberInput = forwardRef(InputBase);
