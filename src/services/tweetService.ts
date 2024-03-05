import { rwClient } from './../twitterClient';

export const postTweet = async (content: string): Promise<void> => {
  try {
    await rwClient.v2.tweet(content);
  } catch (error) {
    console.error('Error posting tweet:', error);
  }
};
