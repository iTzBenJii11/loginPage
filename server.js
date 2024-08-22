const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

// Allows our application to use json
app.use(express.json());

// Users
const users = [];

// Create route that gets all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add a user to our users array
// Bcrypt is used to add a salt to the password
app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status();
  } catch {
    res.status(500).send();
  }
});

// Compares the user password
app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    // Compare the users password with the hashed password
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

value1 = Math.floor(Math.random() * 256);
value2 = Math.floor(Math.random() * 256);
value3 = Math.floor(Math.random() * 256);

const randomColor = `rgb(${value1}, ${value2}, ${value3})`;
console.log(randomColor);

// App will open on port 3000
app.listen(3000);
