import express from "express";
import path from "node:path";
import { dirname } from "node:path";
// import ejs from "ejs";


const __dirname = import.meta.dirname;


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get('/', (req, res) => {
   res.render("home.ejs")
})

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const  num = Math.floor((Math.random() *  10) + 1)
  res.render ("farms", {subreddit, num})
})


app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for: ${q}</h1><p>Here are the results</p>`)
})

app.get("*", (req, res) => {
  res.send("<h1>Any other route that doesn't exist leads here</h1>")
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
