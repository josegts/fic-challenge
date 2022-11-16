import { Box, Button, TextField, Typography } from "@mui/material"

export const SearchInputs = () => {
  return (
    <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <Typography>Buscador de productos</Typography>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' gap={2}>
        <TextField
          size='small'
          placeholder="Ingrese un termino..."
          label="Buscar"
        />
        <Button variant='contained'>Buscar</Button>
      </Box>
    </Box>
  )
}
