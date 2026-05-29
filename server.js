const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist', 'client');
const indexPath = path.join(distPath, 'index.html');

console.log(`✓ Server starting...`);
console.log(`✓ Serving files from: ${distPath}`);
console.log(`✓ NODE_ENV: ${process.env.NODE_ENV || 'development'}`);

// Verify dist/client exists and has index.html
if (!fs.existsSync(indexPath)) {
  console.error(`✗ CRITICAL: ${indexPath} not found!`);
  process.exit(1);
}

// Serve static files from dist/client with proper cache headers
app.use(express.static(distPath, { 
  maxAge: '1y',
  etag: false,
  setHeaders: (res, filepath) => {
    if (filepath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    }
  }
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// SPA fallback - catch all non-static requests and serve index.html
app.use((req, res) => {
  // Don't serve index.html for API routes or known non-HTML requests
  if (req.path.startsWith('/api/') || req.path.startsWith('/assets/')) {
    return res.status(404).send('Not Found');
  }
  
  console.log(`→ SPA route requested: ${req.method} ${req.path}`);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`✗ Error serving ${indexPath}:`, err.message);
      res.status(500).send('Internal Server Error');
    }
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server listening on http://0.0.0.0:${PORT}`);
  console.log(`✓ Ready to serve requests`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});




