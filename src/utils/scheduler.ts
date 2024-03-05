import cron from 'node-cron';
import {postTweet} from './../services/tweetService';
import Tweet from './../models/tweet';

export const startTweetScheduler = () => {
    cron.schedule('*/1 * * * *', async () => {
        const now = new Date();
        const tweetsToPost = await Tweet.find({ scheduledTime: { $lte: now } });
      
        for (const tweet of tweetsToPost) {
          await postTweet(tweet.content);
        }
        for (const tweet of  tweetsToPost) {
            await Tweet.deleteOne({_id : tweet._id});
        }
      });
};
