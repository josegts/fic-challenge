import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(
    (res) => res.json()
  );
  res.status(200).json(item);
}
