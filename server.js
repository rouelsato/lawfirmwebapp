const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist', 'client');
const indexPath = path.join(distPath, 'index.html');

console.log(`✓ Server starting on port ${PORT}`);
console.log(`✓ Serving from: ${distPath}`);

if (!fs.existsSync(indexPath)) {
  console.error(`✗ ERROR: index.html not found at ${indexPath}`);
  process.exit(1);
}

// Custom middleware to handle SPA routing
app.use((req, res, next) => {
  // For /assets, continue to static serving
  if (req.path.startsWith('/assets')) {
    return express.static(distPath)(req, res, next);
  }
  
  // Check if file exists in dist/client
  const filePath = path.join(distPath, req.path);
  
  try {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      // File exists, serve it
      return res.sendFile(filePath);
    }
  } catch (e) {
    // Ignore errors, fall through to index.html
  }
  
  // For all other requests, serve index.html (SPA routing)
  console.log(`→ SPA: ${req.method} ${req.path} → index.html`);
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(indexPath);
});

// Static files middleware
app.use(express.static(distPath, { 
  maxAge: '1y',
  etag: false
}));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server ready`);
});







