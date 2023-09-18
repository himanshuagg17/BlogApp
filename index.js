const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

app.use(express.json());

const articlesInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect("monogdb://localhost:27017");
    const db = client.db("BlogApp");
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({msg:"error connecting to the database",error})
  }
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(1800, () => {
  console.log(`The server is running at 1800`);
});
