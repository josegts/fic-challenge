import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getItems(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { q } = req.query;
  const items = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`
  ).then((res) => res.json());
  res.status(200).json(items);
}
