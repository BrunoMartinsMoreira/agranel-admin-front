import { Tab, TabList, Tabs, Text } from '@chakra-ui/react';

type PropTypes = {
  onClick(value: string): void;
};

export const ProductsTabs = ({ onClick }: PropTypes) => {
  return (
    <Tabs
      py='2'
      variant='enclosed'
      colorScheme='pink'
      isFitted
      isLazy
      maxWidth='90vw'
      overflow='auto'
    >
      <Text mb='2' fontSize={['md', 'large']}>
        Filtrar categoria:
      </Text>
      <TabList mb='1.5rem' border='none'>
        <Tab
          _selected={{ color: 'gray.200', bg: 'green.700' }}
          bg='gray.800'
          border='none'
          mx='0.5'
          borderRadius='5px'
          onClick={() => onClick('temperos')}
        >
          Temperos
        </Tab>
        <Tab
          _selected={{ color: 'gray.200', bg: 'green.700' }}
          bg='gray.800'
          border='none'
          mx='0.5'
          borderRadius='5px'
          onClick={() => onClick('chas')}
        >
          Chás
        </Tab>
        <Tab
          _selected={{ color: 'gray.200', bg: 'green.700' }}
          bg='gray.800'
          border='none'
          mx='0.5'
          borderRadius='5px'
          onClick={() => onClick('sementes')}
        >
          Sementes
        </Tab>
        <Tab
          _selected={{ color: 'gray.200', bg: 'green.700' }}
          bg='gray.800'
          border='none'
          mx='0.5'
          borderRadius='5px'
          onClick={() => onClick('farinhas')}
        >
          Farinhas
        </Tab>
        <Tab
          _selected={{ color: 'gray.200', bg: 'green.700' }}
          bg='gray.800'
          border='none'
          mx='0.5'
          borderRadius='5px'
          onClick={() => onClick('oleaginosas')}
        >
          Oleaginosas
        </Tab>
        <Tab
          _selected={{ color: 'gray.200', bg: 'green.700' }}
          bg='gray.800'
          border='none'
          mx='0.5'
          borderRadius='5px'
          onClick={() => onClick('frutas_desidratadas')}
        >
          Frutas
        </Tab>
        <Tab
          _selected={{ color: 'gray.100', bg: 'green.700' }}
          bg='gray.800'
          border='none'
          mx='0.5'
          borderRadius='5px'
          onClick={() => onClick('outros')}
        >
          Outros
        </Tab>
      </TabList>
    </Tabs>
  );
};
