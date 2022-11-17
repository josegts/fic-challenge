import { Box, Button, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface Props {
  children: JSX.Element | JSX.Element[];
  withoutBack?: boolean;
}
export const CardContainer = ({ children, withoutBack = false }: Props) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: {
            xs: 'none',
            md: theme.palette.background.paper
          },
        }}
      >
        {!withoutBack && (
          <Box display='flex' sx={{ width: {
            xs: '100%',
            md: '700px'
          }}}>
            <Button

              color='secondary'
              onClick={() => {
                router.back();
              }}
              startIcon={<KeyboardBackspaceIcon />}
            >
              Regresar
            </Button>
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
};
