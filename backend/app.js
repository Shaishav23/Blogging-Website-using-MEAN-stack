const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
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
    message: 'Posts succesfully fetched!',
    posts: posts
  });
});

module.exports = app;
