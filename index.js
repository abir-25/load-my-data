const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World. I am back dude");
});

const users = [
  { id: 0, name: "Abir", age: 29 },
  { id: 1, name: "Sumon", age: 29 },
  { id: 2, name: "Roji", age: 29 },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const result = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(result);
  } else {
    res.send(users);
  }
});

app.post("/users", (req,res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser); 
})

app.listen(port, () => {
  console.log("Port is working", port);
});
