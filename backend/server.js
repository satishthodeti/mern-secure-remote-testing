const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {

const message = `Hello from Express backend!
                 Running on localhost (development) via IPv4 address`
  res.json({ message });
});

const PORT = 5000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, async () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
