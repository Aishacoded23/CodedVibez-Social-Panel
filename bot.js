const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

async function postVibez() {
  const text = `CodedVibez AUTO BOOST!  
Like = Coding tonight  
Comment = Your language  
RT = Spread the vibe!  
https://x.com/CodedPanel?t=yEHGZ2OhZOblUI9Kfw2iHQ&s=09`;

  try {
    const { data } = await client.v2.tweet(text);
    console.log("POSTED: https://x.com/user/status/" + data.id);
  } catch (e) {
    console.error("ERROR:", e.code, e.message);
  }
}

postVibez();
