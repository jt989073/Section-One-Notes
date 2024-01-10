import {createSelector} from 'reselect'
const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
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

export const fetchArticles = () => async (dispatch) => {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  dispatch(loadArticles(articles));
};

export const writeArticle = (payload) => async (dispatch) => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const article = await response.json();
    dispatch(addArticle(article));
    return article;
  }
};

const selectedArticles = state => state.articleState.entries

export const selectArticleById = articleId => state => state.articleState.entries[articleId]

export const selectArticlesArray = createSelector(selectedArticles, (articles) => Object.values(articles))


const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      const newState = {...state, entries: {...state.entries}}
      action.articles.forEach(article => newState.entries[article.id] = article)
      return newState
    case ADD_ARTICLE:{
      const newState = { 
        ...state, 
        entries: {...state.entries, [action.article.id]: action.article} 
      };
      return newState
    }
    default:
      return state;
  }
};

export default articleReducer;
