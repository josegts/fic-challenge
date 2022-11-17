import { Box, Typography } from '@mui/material';
import Image from "next/image"
import { useRouter } from "next/router"
import { useGetDetailProduct } from "../../hooks"
import { CardContainer } from "../molecules"
import { useEffect } from 'react';

export const DetailProduct = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isError, refetch } = useGetDetailProduct({ id: id as string, options: { enabled: false } })


  useEffect(() => {
    if(id) refetch()
  }, [id])

  if(isLoading){
    return <CardContainer>
      <Typography variant="h4">Cargando...</Typography>
    </CardContainer>
  }

  if(isError || data?.error){
    return <CardContainer>
      <Typography variant="h4">Error al obtener el producto de Mercado Libre</Typography>
    </CardContainer>
  }
  return (
    <CardContainer>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: {
        xs: 'column',
        md: 'row'
      }}}>
        <Box>
          <img className='img-product' src={data?.pictures[0]?.url} alt='Logo del producto'/>
        </Box>
        <Box>
          <Box display='flex' gap={1}>
            <Typography variant='body1' fontWeight={600} sx={{ minWidth: '145px'}}>Producto:</Typography>
            <Typography variant='body1' sx={{ maxWidth: '250px'}}>{data?.title}</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <Typography variant='body1' fontWeight={600} sx={{ minWidth: '145px'}}>Id del producto:</Typography>
            <Typography variant='body1'>{data?.id}</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <Typography variant='body1' fontWeight={600} sx={{ minWidth: '145px'}}>Garantia:</Typography>
            <Typography variant='body1'>{data?.warranty}</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <Typography variant='body1' fontWeight={600} sx={{ minWidth: '145px'}}>Mercado Pago?:</Typography>
            <Typography variant='body1'>{data?.accepts_mercadopago ? 'Si' : 'No'}</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <Typography variant='body1' fontWeight={600} sx={{ minWidth: '145px'}}>Precio:</Typography>
            <Typography variant='body1'>{data?.price}</Typography>
          </Box>
        </Box>
      </Box>
    </CardContainer>
  )
}
