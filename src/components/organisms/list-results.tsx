import { Box, Card, Skeleton, Typography } from '@mui/material';
import { useGetProducts } from '../../hooks';
import { CardContainer, CardProduct } from '../molecules';
import { useEffect, useState } from 'react';

export const ListResults = ({ term }: { term?: string }) => {
  const { data, refetch, isLoading } = useGetProducts({
    term,
    options: { enabled: false }
  });

  useEffect(() => {
    if (term) {
      refetch();
    }
  }, [term]);

  if(term === ''){
    return <CardContainer>
      <Typography variant='h6'>Ingrese un termino de busqueda</Typography>
    </CardContainer>
  }

  if (isLoading)
    return (
      <CardContainer>
        <Skeleton animation='wave' sx={{width: { xs: '100%', md: '700px' }}} height='128px'/>
        <Skeleton animation='wave' sx={{width: { xs: '100%', md: '700px' }}} height='128px'/>
        <Skeleton animation='wave' sx={{width: { xs: '100%', md: '700px' }}} height='128px'/>
        <Skeleton animation='wave' sx={{width: { xs: '100%', md: '700px' }}} height='128px'/>
      </CardContainer>
    );

  return (
    <CardContainer>
      {term &&
        data?.results.map(({ id, title, price, thumbnail, condition }: any) => (
          <CardProduct
            key={id}
            id={id}
            title={title}
            price={price}
            img={thumbnail}
            isNew={condition === 'new'}
          />
        ))}
    </CardContainer>
  );
};
