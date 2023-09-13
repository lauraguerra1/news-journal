import { article } from "../../types"
import { useParams } from "react-router-dom"
import NotFound from '../NotFound/NotFound'
type ArticleDetailsProps = {
  articles: article[]
}

const ArticleDetails = ({ articles }: ArticleDetailsProps) => {
  const articleNumber = useParams().id
  let article; 
  if(articleNumber && typeof parseInt(articleNumber) === 'number') article = articles[parseInt(articleNumber)]

  return (
    <section>
      {
        article ? <section></section> : <NotFound />
      }
    </section>
  )
}

export default ArticleDetails