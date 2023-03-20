import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';
import { AppRoutes } from './routes/AppRoutes';
import { theme } from './styles/theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <SidebarDrawerProvider>
            <AppRoutes />
          </SidebarDrawerProvider>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};
