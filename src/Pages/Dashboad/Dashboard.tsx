import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import Chart from 'react-apexcharts';

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    marker: {
      show: true,
      fillSeriesColor: true,
      fillColors: ['#8b54a0', '#611576'],
    },
    theme: 'dark',
  },
  xaxis: {
    type: 'datetime' as const,
    axisBorder: {
      color: theme.colors.gray[400],
    },
    axisTicks: {
      color: theme.colors.gray[400],
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
      '2021-03-25T00:00:00.000Z',
      '2021-03-26T00:00:00.000Z',
      '2021-03-27T00:00:00.000Z',
      '2021-03-28T00:00:00.000Z',
      '2021-03-29T00:00:00.000Z',
      '2021-03-30T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shape: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: 'Produtos mais vendidos',
    data: [540, 210, 350, 290, 98, 128, 321, 540, 210, 350, 290, 198, 128],
  },
];

export const Dashboard = () => {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          alignItems='flex-start'
        >
          <Box p='8' bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>
              Vendas
            </Text>
            <Chart options={options} series={series} type='bar' height={160} />
          </Box>

          <Box p='8' bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>
              Evolução das vendas
            </Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
