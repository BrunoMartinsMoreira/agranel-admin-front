import {
  FormControl,
  FormLabel,
  Select,
  SelectProps,
  FormErrorMessage,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface SelectCustomProps extends SelectProps {
  error?: FieldError;
}

const SelectCategoryBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectCustomProps
> = ({ error, ...rest }, ref) => {
  return (
    <FormControl colorScheme='gray' isInvalid={!!error}>
      <FormLabel>Tipo de produto</FormLabel>
      <Select
        placeholder=''
        colorScheme='gray'
        focusBorderColor='pink.700'
        ref={ref}
        {...rest}
      >
        <option style={{ backgroundColor: '#2A2D3E' }} value={undefined}>
          Selecione...
        </option>
        <option style={{ backgroundColor: '#2A2D3E' }} value='temperos'>
          Temperos
        </option>
        <option style={{ backgroundColor: '#2A2D3E' }} value='chas'>
          Chás
        </option>
        <option style={{ backgroundColor: '#2A2D3E' }} value='oleaginosas'>
          Oleaginosas
        </option>
        <option style={{ backgroundColor: '#2A2D3E' }} value='farinhas'>
          Farinhas
        </option>
        <option style={{ backgroundColor: '#2A2D3E' }} value='sementes'>
          Sementes
        </option>
        <option
          style={{ backgroundColor: '#2A2D3E' }}
          value='frutas_desidratadas'
        >
          Frutas desidratadas
        </option>
        <option style={{ backgroundColor: '#2A2D3E' }} value='outros'>
          Outros
        </option>
      </Select>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const SelectCategory = forwardRef(SelectCategoryBase);
