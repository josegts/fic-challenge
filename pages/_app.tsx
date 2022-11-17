import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#5b48c1',
      },
      secondary: {
        main: '#1aaf62',
      },
      background: {
        paper: '#fcfcfc',
      }
  }});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
