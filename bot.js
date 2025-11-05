require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

async function postTweet() {
  const text = `Live from CodedVibez! 🚀 Drop a like, comment your fave code tip, or follow for daily vibes! https://your-codedvibez-site.com #WebDev #Coding`;
  
  try {
    const { data } = await client.v2.tweet(text);
    console.log("Tweet posted! ID:", data.id);
    console.log("Check X for likes/views/comments boost!");
  } catch (error) {
    console.error("Error:", error.code, error.message);
  }
}

postTweet();
