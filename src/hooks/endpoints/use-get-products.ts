import { useQuery } from '@tanstack/react-query';

const key = 'get-products';

export const useGetProducts = ({
  term,
  options
}: {
  term?: string;
  options?: any;
}) => {
  return useQuery(
    [key],
    () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items?q=${term}`).then((res) =>
        res.json()
      ),
    options
  );
};
