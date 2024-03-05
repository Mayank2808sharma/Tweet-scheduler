import { Request, Response } from "express";
import Tweet from "../models/tweet";
import { rwClient } from "./../twitterClient";

export async function scheduleTweet(req: Request, res: Response) {
    try {
        const {content} = req.body;
        const resp = await rwClient.v2.tweet(content);
        return res.json({"status":resp})
      } catch (error) {
        console.error('Error posting tweet:', error);
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
