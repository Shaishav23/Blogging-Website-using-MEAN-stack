const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://Shaishav23:shaishav23@cluster0.b2lkjqo.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Connection is failed');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post Added successfully'
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sdfvh134",
      title: "First server-side post",
      content: "This is coming from server"
    },
    {
      id: "kjhkjc2345",
      title: "Second server-side post",
      content: "This is coming from server"
    }
  ];
  res.status(200).json({
    message: 'Posts successfully fetched!',
    posts: posts
  });
});

module.exports = app;
