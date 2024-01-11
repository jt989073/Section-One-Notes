// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const ADD_TWEET = 'tweet/addTweet'

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

const addTweet = tweet => ({
  type: ADD_TWEET,
  tweet
})

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadTweets(data));
    return data;
  }
};

export const createTweet = tweet => async dispatch => {
  let res = await fetch('/api/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tweet)
  })

  if(res.ok){
    res = await res.json()
    dispatch(addTweet(res))
    return res
  } else {
    const errors = await res.json()
    return errors
  }
}

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    case ADD_TWEET: {
      const newState = {...state}
      newState[action.tweet.id] = action.tweet
      return newState
    }
    default:
      return state;
  }
};

export default tweetsReducer;
