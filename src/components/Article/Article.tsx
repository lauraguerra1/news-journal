import { Link } from "react-router-dom";
import { article } from "../../types";
import { useEffect } from "react";
import './Article.css'

type ArticleProps = {
  article: article,
  lastBlog: boolean
}
const Article = ({ article, lastBlog }: ArticleProps) => {
  useEffect(() => {
    console.log(article)
  }, [])
  return (
    <Link  to={`/article-details/${article.source.id}`} className={`article-cover ${lastBlog ? 'last-blog' : ''}`}>
      <article>
        <h2 className='article-title'>{article.title}</h2>
        <p className='articledescription'>{article.description}</p>
      </article>
      <img className='article-cover-img' src={article.urlToImage} alt={article.title} />
    </Link>
  )
}

export default Article