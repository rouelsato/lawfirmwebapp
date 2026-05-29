const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist', 'client');

console.log(`Serving files from: ${distPath}`);

// Serve static files from dist/client
app.use(express.static(distPath, { 
  maxAge: '1d',
  etag: false 
}));

// SPA fallback - serve index.html for all routes that don't match files
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});


