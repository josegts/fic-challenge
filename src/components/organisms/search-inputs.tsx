import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CardContainer } from '../molecules/card-container';
import logo from '../../../public/logo.png';
import Image from 'next/image';

export const SearchInputs = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (event: any) => {
    event.preventDefault();
    router.push(`/items?search=${search}`);
  };

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <CardContainer withoutBack>
      <Box sx={{ padding: { xs: 3, md: 0 } }}>
        <Image className='image-logo' src={logo} alt='logo' />
        <Typography variant='body1'>
          Ingrese cualquier producto para realizar una busqueda.
        </Typography>
        <Typography variant='body2'>ejemplo: Monitor</Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={2}
        sx={{ padding: { xs: 3, md: 0 } }}
        component='form'
        onSubmit={(event) => handleSearch(event)}
      >
        <TextField
          size='small'
          placeholder='Ingrese un termino...'
          label='Buscar'
          sx={{ width: { xs: 'auto', md: 310 } }}
          onChange={handleInputChange}
        />
        <Button variant='contained' type='submit'>
          Buscar
        </Button>
      </Box>
    </CardContainer>
  );
};
