import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
