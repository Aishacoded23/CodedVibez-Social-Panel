require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

async function postVibez() {
  const text = `🔥 CodedVibez dropping heat! Who's coding tonight?  
Like = Yes 🚀  
RT = Legend  
Comment your fave language!  
https://your-codedvibez-site.com`;

  try {
    const { data } = await client.v2.tweet(text);
    console.log("POSTED! 🚀 https://x.com/user/status/" + data.id);
    console.log("Check @CodedVibez in 5 min — watch likes/views/comments go UP!");
  } catch (e) {
    console.error("ERROR:", e.code, e.message);
  }
}

postVibez();
