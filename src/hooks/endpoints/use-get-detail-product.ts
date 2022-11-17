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
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-item?id=${id}`).then((res) =>
        res.json()
      ),
    options
  );
};
