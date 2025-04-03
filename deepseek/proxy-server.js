const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/models', async (req, res) => {
  try {
    const response = await axios.get('http://dynns.keyxx.com:8099/api/get_recommend_model_list', {
      params: {
        language: 'EN'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
