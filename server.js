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

// Serve assets folder
app.use('/assets', express.static(path.join(distPath, 'assets'), { 
  maxAge: '1y',
  etag: false 
}));

// Serve robots.txt if it exists
if (fs.existsSync(path.join(distPath, 'robots.txt'))) {
  app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(distPath, 'robots.txt'));
  });
}

// Serve favicon if it exists
if (fs.existsSync(path.join(distPath, 'favicon.ico'))) {
  app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(distPath, 'favicon.ico'));
  });
}

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// SPA fallback - serve index.html for ALL other requests
app.use((req, res) => {
  console.log(`→ SPA route: ${req.method} ${req.path}`);
  res.set('Cache-Control', 'public, max-age=0, must-revalidate');
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.sendFile(indexPath);
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server listening on http://0.0.0.0:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Shutdown signal received');
  server.close(() => process.exit(0));
});





