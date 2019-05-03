const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Helloooo"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));
