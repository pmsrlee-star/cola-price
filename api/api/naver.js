export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'query required' });

  const response = await fetch(
    `https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(query)}&display=100&sort=sim`,
    {
      headers: {
        'X-Naver-Client-Id': 'xrJBAMw7eLoa_Cuhzc4E',
        'X-Naver-Client-Secret': 'CfbDc1yZsr'
      }
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
