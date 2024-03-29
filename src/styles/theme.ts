import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#181B23',
      800: '#212332',
      700: '#2A2D3E',
      600: '#4B4D63',
      500: '#616480',
      400: '#797D9A',
      300: '#9699B0',
      200: '#B3B5C6',
      100: '#D1D2DC',
      50: '#EEEEF2',
    },

    blue: {
      bg: '#112E5E',
      900: '#1A365D',
      800: '#2A4365',
      700: '#2C5282',
      600: '#2B6CB0',
      500: '#3182CE',
      400: '#4299E1',
      300: '#63B3ED',
      200: '#90CDF4',
      100: '#BEE3F8',
      50: '#EBF8FF',
    },

    green: {
      900: '#1C4532',
      800: '#22543D',
      700: '#276749',
      600: '#2F855A',
      500: '#38A169',
      400: '#48BB78',
      300: '#68D391',
      200: '#9AE6B4',
      100: '#C6F6D5',
      50: '#F0FFF4',
    },

    orange: {
      900: '#652B19',
      800: '#7B341E',
      700: '#9C4221',
      600: '#C05621',
      500: '#DD6B20',
      400: '#ED8936',
      300: '#F6AD55',
      200: '#FBD38D',
      100: '#FEEBC8',
      50: '#FFFAF0',
    },

    red: {
      900: '#63171B',
      800: '#822727',
      700: '#9B2C2C',
      600: '#C53030',
      500: '#E53E3E',
      400: '#F56565',
      300: '#FC8181',
      200: '#FEB2B2',
      100: '#FED7D7',
      50: '#FFF5F5',
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
       // bgGradient:['linear(to-r, green.900, green.700, green.500)'],
        background: 'gray.700',
        overflow:'auto',
        color: 'gray.50',
        '::-webkit-scrollbar': {
          width: '2px',
        },
        '::-webkit-scrollbar-track': {
          width: '1px',
          background: 'gray.700',
          backgroundClip: 'content-box',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'gray.400',
          borderRadius: '24px',
        },
      },
    }
  }
});
