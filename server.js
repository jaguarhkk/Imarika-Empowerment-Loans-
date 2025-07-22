const express = require('express');
const path = require('path');
const app = express();

// Serve all files in the current directory
app.use(express.static(__dirname));

// Default to index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other file requests
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.path);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
