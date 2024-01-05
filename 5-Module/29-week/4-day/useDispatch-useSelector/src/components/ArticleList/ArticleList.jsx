import {useDispatch, useSelector} from 'react-redux'
import { loadArticles } from '../../store/articleReducer';
import {NavLink} from 'react-router-dom'
import { useEffect } from 'react';

const ArticleList = () => {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articleState.entries)
  console.log(articles)

  useEffect(() => {
    dispatch(loadArticles())
  }, [dispatch])
  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {/* <li>Gilligan&apos;s Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li> */}
        {articles && articles.map(article => (
          <li key={article.id}><NavLink to={`${article.id}`}>{article.title}</NavLink></li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
