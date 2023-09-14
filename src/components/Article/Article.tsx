import { Link } from "react-router-dom";
import { article } from "../../types";
import { useEffect } from "react";
import { getStringDate } from "../helpers";
import newspaper from '../../images/news.png';
import './Article.css'

type ArticleProps = {
  article: article,
  lastBlog: boolean,
  index: number
}
const Article = ({ article, lastBlog, index }: ArticleProps) => {
  return (
    <Link  to={`/article-details/${index}`} className={`article-cover ${lastBlog ? 'last-blog' : ''}`}>
      <article>
        <p className='article-date-top'>{getStringDate(article.publishedAt)}</p>
        <h2 className='article-title'>{article.title}</h2>
        <p>{article.description}</p>
        <p className='article-date-bottom'>{getStringDate(article.publishedAt)}</p>
      </article>
      <img className='article-cover-img' src={article.urlToImage ? article.urlToImage : newspaper} alt={article.title} />
    </Link>
  )
}

export default Article