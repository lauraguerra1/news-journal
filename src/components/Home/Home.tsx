import { article } from "../../types"
import Article from "../Article/Article";
import './Home.css'

type HomeProps = {
  articles: article[]
}
const Home = ({ articles }: HomeProps) => {
  const articleEls = articles.map((article, i) => <Article article={article} lastBlog={i === articles.length - 1 ? true : false} />)
  return ( 
    <div className='articles-container'>
      {articleEls}
    </div>
  )
}

export default Home