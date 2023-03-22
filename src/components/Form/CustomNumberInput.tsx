import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface CustomNumberInputProps extends NumberInputFieldProps {
  inputName?: string;
  label?: string;
  placeHolder?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomNumberInputProps
> = ({ label, inputName, error = null, ...rest }, ref) => {
  return (
    <FormControl>
      {!label || <FormLabel htmlFor={inputName}>{label}</FormLabel>}
      <NumberInput precision={2} size='lg'>
        <NumberInputField
          name={inputName}
          id={inputName}
          focusBorderColor='pink.700'
          _hover={{
            bgColor: 'gray.900',
          }}
          ref={ref}
          {...rest}
        />
      </NumberInput>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const CustomNumberInput = forwardRef(InputBase);
