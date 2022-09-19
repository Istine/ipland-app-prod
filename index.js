const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
