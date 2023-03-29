import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';
import { queryClient } from './queryClientConfig';
import { AppRoutes } from './routes/AppRoutes';
import { theme } from './styles/theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <SidebarDrawerProvider>
              <AppRoutes />
            </SidebarDrawerProvider>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
