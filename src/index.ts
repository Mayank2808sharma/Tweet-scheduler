import express from "express";
import connectToDB from "./connectDB";
import tweetrouter from "./routes/tweet";
import dotenv from 'dotenv';
dotenv.config();

const app = express();


connectToDB("mongodb://127.0.0.1:27017/twitter")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Getting Error", err));

app.use(express.json())
app.use('/tweet',tweetrouter);

app.listen(8000, () => {
  console.log("running on PORT 8000");
});
