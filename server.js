const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Home route
app.get("/", (req, res) => {
  res.send("🍪 Cookies Server Running");
});

// Set cookie
app.get("/set", (req, res) => {
  res.cookie("user", "sarvar", {
    httpOnly: true
  });
  res.send("Cookie set successfully");
});

// Get cookie
app.get("/get", (req, res) => {
  res.send(req.cookies);
});

// Delete cookie
app.get("/delete", (req, res) => {
  res.clearCookie("user");
  res.send("Cookie deleted");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
