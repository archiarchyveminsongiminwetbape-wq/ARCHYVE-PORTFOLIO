// Minimal Vercel Serverless function that proxies to CountAPI
// POST -> increments counter and returns updated value
// GET  -> returns current counter value

const fetch = global.fetch || require('node-fetch');

module.exports = async (req, res) => {
  const NAMESPACE = 'archyve-portfolio';
  const KEY = 'visitors';

  try {
    if (req.method === 'POST') {
      // Increment the counter
      const apiRes = await fetch(`https://api.countapi.xyz/hit/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`);
      const data = await apiRes.json();
      return res.status(200).json(data);
    }

    if (req.method === 'GET') {
      // Get current value
      const apiRes = await fetch(`https://api.countapi.xyz/get/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`);
      const data = await apiRes.json();
      return res.status(200).json(data);
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  } catch (err) {
    console.error('visitors api error', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
