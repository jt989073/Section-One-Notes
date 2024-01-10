const myFunc = (str) => str

myFunc('hello')


const articleReducer = (state = {}, action) => {
    switch (action.type) {
      case LOAD_ARTICLES: {
        const newState = { ...state, entries: { ...state.entries } };
        action.articles.forEach(
          (article) => (newState.entries[article.id] = article)
        );
        return newState;
      }
      case ADD_ARTICLE:
        return {
          ...state,
          entries: { ...state.entries, [action.article.id]: action.article },
        };
      default:
        return state;
    }
  };

//   articleReducer({}, 'loadArticle')


  dispatch(loadArticles('articles')) === articleReducer({}, {
    type: LOAD_ARTICLES,
    articles
  })