const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.use((req, res) => {
  res.status(404).send("Page not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
