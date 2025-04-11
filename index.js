require('dotenv').config()
const express = require("express");
const app = express();

const data = {
  'text': "hjhgasdyufvwhj ksgdvw ",
  name: "Alice",
age: 25,
city: "London",
customer_id: 12345,
customer_name: "Charlie",
order_total: 50.00,
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req, res) => {
    res.send('harsh.com')
})
app.get('/login',(req, res) => {
    res.send('<h1>login</h1>')
})
app.get('/youtube',(req, res) => {
    res.send('<h2>youtube</h2>')
})
app.get('/github',(req, res) => {
    res.json(data)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});