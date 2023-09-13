import { article } from "../../types"
import Article from "../Article/Article";
import NotFound from "../NotFound/NotFound";
import './Home.css'

type HomeProps = {
  articles: article[],
  allArticles: article[]
}
const Home = ({ articles, allArticles }: HomeProps) => {
  const articleEls = articles.map((article, i) => <Article key={`${article.source.id}${allArticles.indexOf(article)}`} index={allArticles.indexOf(article)} article={article} lastBlog={i === articles.length - 1 ? true : false} />)
  return ( 
    <div className='articles-container'>
      {articles.length? articleEls : <NotFound />}
    </div>
  )
}

export default Home