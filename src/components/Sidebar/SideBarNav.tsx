import { Stack } from '@chakra-ui/react';
import { CalcSection } from './Calc';
import { OrdersSection } from './OrdersSection';
import { ProductsSection } from './ProductsSection';
import { SalesSection } from './SalesSection';

export const SideBarNav = () => {
  return (
    <Stack spacing='12' align='flex-start'>
      <CalcSection />
      <SalesSection />
      <ProductsSection />
      <OrdersSection />
    </Stack>
  );
};
