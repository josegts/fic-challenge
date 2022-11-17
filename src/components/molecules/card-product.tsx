import { Avatar, Box, Card, Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

interface CardProductProps {
  id: string;
  img: string;
  title: string;
  price: string;
  isNew: boolean;
}

export const CardProduct = ({
  id,
  img,
  title,
  price,
  isNew
}: CardProductProps) => {
  const router = useRouter();

  const handleViewDetail = () => {
    router.push(`/items/${id}`);
  };

  return (
    <Card
      sx={{
        position: 'relative',
        width: {
          xs: '100%',
          md: '700px'
        },
        padding: 2,
        display: 'grid',
        gridTemplateRows: 'auto',
        gridTemplateColumns: {
          xs: '1fr 2fr 1fr',
          md: 'auto 2fr 1fr 50px'
        },
        gridTemplateAreas: {
          xs: `"logo title title"
          "logo price detail"`,
          md: `"logo title title detail"
          "logo price . detail"`
        }
      }}
    >
      <Box gridArea='logo' sx={{ paddingRight: 2 }}>
        <Avatar src={img} sx={{ width: { xs: '100%', md: '110px'}, height: { xs: '100%', md: '110px'} }} variant="rounded"/>
      </Box>
      <Typography gridArea='title' variant='h6'>
        {title}
      </Typography>
      <Typography gridArea='price' fontWeight={600} variant='h6' color='error'>
        {`$ ${price}`}
      </Typography>
      {isNew && (
        <Box
          sx={{
            background: '#5ff7a8',
            color: '#000',
            borderRadius: 2,
            padding: '0 4px',
            position: 'absolute',
            left: '12px',
            top: '15px'
          }}
        >
          <Typography variant='caption'>Nuevo</Typography>
        </Box>
      )}
      <Box
        gridArea='detail'
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Fab color='primary' size='small' onClick={handleViewDetail}>
          <AddIcon />
        </Fab>
      </Box>
    </Card>
  );
};
