const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the "sql" directory
app.use(express.static(path.join(__dirname, "sql")));

// Set up the web server
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "sql", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
