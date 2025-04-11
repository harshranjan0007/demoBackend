require('dotenv').config()
const express = require("express");
const app = express();

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


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});