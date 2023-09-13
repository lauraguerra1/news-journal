import { article } from "../../types"
import { useParams } from "react-router-dom"
import NotFound from '../NotFound/NotFound';
import { getStringDate } from "../helpers";
import { useEffect, useState } from "react";
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
            <article>
              <h2 className='description-page-title'>{article.title}</h2>
              <p className='description-page-'>{article.description}</p>
              <img className='article-detail-img' src={article.urlToImage} alt={article.title} />
            </article>
            <div className='description-divider'></div>
            <p>By {article.author}</p>
            <p className='description-page-date'>Published on {getStringDate(article.publishedAt)}</p>
            {/* <div style={{ display: 'flex', justifyContent:'center'}}> */}
              <a className='article-link' href={article.url} target='_blank'>View the full article here</a>
            {/* </div> */}
            <div className='description-divider'></div>
          </div>
          : <NotFound />
      }
    </section>
  )
}

export default ArticleDetails