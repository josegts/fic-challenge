import { useQuery } from '@tanstack/react-query';

const key = 'get-products';

export const useGetDetailProduct = ({
  id,
  options
}: {
  id?: string;
  options?: any;
}) => {
  return useQuery(
    [key],
    () =>
      fetch(`http://localhost:3000/api/get-item?id=${id}`).then((res) =>
        res.json()
      ),
    options
  );
};
