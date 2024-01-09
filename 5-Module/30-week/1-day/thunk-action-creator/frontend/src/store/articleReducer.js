import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = articles => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};


export const fetchArticles = () => async dispatch => {
  let res = await fetch('/api/articles')
  res = await res.json()
  dispatch(loadArticles(res))
}

export const writeArticle = payload => async dispatch => {
  let res = await fetch('/api/articles', {
    method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(payload)
  })
  if(res.ok){
    res = await res.json()
    dispatch(addArticle(res))
    return res
  }
}


const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
