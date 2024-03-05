import mongoose, { Document } from "mongoose";

interface ITweet extends Document {
  content: string;
  scheduledTime: Date;
  createdAt: Date;
  updatedAt: Date;
}

const tweetSchema = new mongoose.Schema({
  content: { type: String, required: true, maxlength: 280 },
  scheduledTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Tweet = mongoose.model<ITweet>("tweet", tweetSchema);

export default Tweet;
