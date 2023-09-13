import { Link } from "react-router-dom";
import { article } from "../../types";
import { useEffect } from "react";
import { getStringDate } from "../helpers";
import './Article.css'

type ArticleProps = {
  article: article,
  lastBlog: boolean,
  index: number
}
const Article = ({ article, lastBlog, index }: ArticleProps) => {

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  return (
    <Link  to={`/article-details/${index}`} className={`article-cover ${lastBlog ? 'last-blog' : ''}`}>
      <article>
        <h2 className='article-title'>{article.title}</h2>
        <p className='articledescription'>{article.description}</p>
        <p>{getStringDate(article.publishedAt)}</p>
      </article>
      <img className='article-cover-img' src={article.urlToImage} alt={article.title} />
    </Link>
  )
}

export default Article