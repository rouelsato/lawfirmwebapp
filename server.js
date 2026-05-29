const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist', 'client');

console.log(`✓ Server starting...`);
console.log(`✓ Serving files from: ${distPath}`);
console.log(`✓ NODE_ENV: ${process.env.NODE_ENV || 'development'}`);

// Serve static files from dist/client with long cache for assets
app.use(express.static(distPath, { 
  maxAge: '1y',
  etag: false,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// SPA fallback - serve index.html for all non-static routes
app.get('*', (req, res) => {
  console.log(`→ Serving index.html for route: ${req.path}`);
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      console.error(`✗ Error serving index.html:`, err);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server listening on http://0.0.0.0:${PORT}`);
});



