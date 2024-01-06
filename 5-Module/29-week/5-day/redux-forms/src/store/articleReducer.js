import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const CREATE_ARTICLE = 'article/createArticle'

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const createArticle = (article) => {
  return {
    type: CREATE_ARTICLE,
    payload: article
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] }
    case CREATE_ARTICLE:
      return { ...state, entries: [...state.entries, action.payload] }
    default:
      return state;
  }
};

export default articleReducer;
