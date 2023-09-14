import { article } from "../../types"
import { useParams } from "react-router-dom"
import NotFound from '../NotFound/NotFound';
import { getStringDate } from "../helpers";
import { useEffect, useState } from "react";
import newspaper from '../../images/news.png';
import './ArticleDetails.css';

type ArticleDetailsProps = {
  articles: article[]
}

const ArticleDetails = ({ articles }: ArticleDetailsProps) => {
  const articleNumber = useParams().id
  const [article, setArticle] = useState<article | null>(null)
  
  useEffect(() => {
    if(articleNumber && articles[parseInt(articleNumber)]) setArticle(articles[parseInt(articleNumber)])
  }, [])
  
  return (
    <section>
      {
        article
          ?
          <div className='description-page'>
            <article className='description-article'>
              <h2 className='description-page-title'>{article.title}</h2>
              <img className='article-detail-img' src={article.urlToImage ? article.urlToImage : newspaper} alt={article.title} />
            </article>
            <div className='description-divider'></div>
            <p>By {article.author}</p>
            <p className='description-page-date'>Published on {getStringDate(article.publishedAt)}</p>
            <div className='description-divider'></div>
            <p>{article.content?.split('[')[0]}<a className='article-link' href={article.url} target='_blank'>Click to Read More</a></p>
          </div>
          : <NotFound />
      }
    </section>
  )
}

export default ArticleDetails