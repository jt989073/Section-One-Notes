import articles from '../data/data.json'

/* actions*/
const LOAD_ARTICLES = 'article/loadArticles'
const LOAD_SINGLE_ARTICLE = 'article/singleArticle'

export const loadArticles = () => ({
    type: LOAD_ARTICLES,
    payload: articles
})

export const loadSingleArticle = () => ({
    type: LOAD_SINGLE_ARTICLE,
    payload: articles[0]
})

/* THUNKS*/
/* REDUCER*/

const initialState = {entries: [], isLoading: true}

const articleReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_ARTICLES:
            return {...state, entries: [...action.payload]}
        case LOAD_SINGLE_ARTICLE:
            return {...state, entries: [action.payload]}
        default:
            return state
    }
}

export default articleReducer
