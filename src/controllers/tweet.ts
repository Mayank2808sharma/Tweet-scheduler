import { Request, Response } from "express";
import Tweet from "../models/tweet";

export async function scheduleTweet(req: Request, res: Response) {
  try {
    const tweet = new Tweet(req.body);
    await tweet.save();
    res.status(201).json(tweet);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export async function getAllTweets(req: Request, res: Response) {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export async function deleteTweet(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const tweet = await Tweet.findByIdAndDelete(id);
    if (!tweet) return res.status(404).json({ message: "Tweet not found" });
    res.status(200).json({ message: "Tweet deleted" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
