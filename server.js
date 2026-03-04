const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/srupicks", express.static(path.join(__dirname, "sites/srupicks")));

app.get("/", (req, res) => {
  res.send("<h1>Web Torturous Ventures</h1><ul><li><a href='/srupicks'>srupicks</a></li></ul>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
