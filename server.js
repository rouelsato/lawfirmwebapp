const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist', 'client');
const indexPath = path.join(distPath, 'index.html');

console.log(`✓ Server starting...`);
console.log(`✓ Serving files from: ${distPath}`);

// Verify dist/client exists
if (!fs.existsSync(indexPath)) {
  console.error(`✗ CRITICAL: ${indexPath} not found!`);
  process.exit(1);
}

// Serve only assets with long cache
app.use('/assets', express.static(path.join(distPath, 'assets'), { 
  maxAge: '1y',
  etag: false 
}));

// Serve static files in root (robots.txt, favicon.ico, etc)
app.use(express.static(distPath, {
  maxAge: '1d',
  setHeaders: (res, filepath) => {
    if (filepath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Fallback: redirect all unknown routes to home
app.use((req, res) => {
  // Don't redirect if it's an API or explicitly missing file
  if (req.path.startsWith('/api/')) {
    return res.status(404).send('Not Found');
  }
  
  console.log(`→ Redirecting ${req.path} → /`);
  res.redirect('/');
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server listening on http://0.0.0.0:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Shutdown signal received');
  server.close(() => process.exit(0));
});






