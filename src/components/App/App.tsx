import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import { article } from '../../types';
import { newsData } from '../../data/data';
import logo from '../../images/logo.png';
import loadingGif from '../../images/loading.gif';
import { getStringDate } from '../helpers';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import { getAllNews } from '../../apiCalls';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const [articles, setArticles] = useState<article[]>([])
  const [articlesToDisplay, setArticlesToDisplay] = useState<article[]>([])
  const [smallScreen, setSmallScreen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null);
  const openOrCloseMenu = () => setMenuOpen(prev => !prev)
  const changeScreenSize = () => window.innerWidth <= 800 ? setSmallScreen(true) : setSmallScreen(false)
  const location = useLocation();

  useEffect(() => {
    changeScreenSize()
    window.addEventListener('resize', changeScreenSize)
    return () => window.removeEventListener('resize', changeScreenSize)
  }, [])

  useEffect(() => {
    const apiCall = async (global: boolean) => {
      setLoading(true)
      try {
        const news = await getAllNews(global);
        setArticles(news.articles);
        setLoading(false)
      } catch (error) {
        if (error instanceof Error) setError(error)
        setLoading(false)
      }
    }
    const globalNews = location.pathname.split('/')[1] ? true : false
    if (location.pathname === '/' || location.pathname === '/global') {
      // apiCall(globalNews)
    }
    return () => setError(null)
  }, [location])

  useEffect(() => {
    setArticlesToDisplay(articles)
  }, [articles])

  const searchArticles = (searchTerm: string) => {
    if (!searchTerm) {
      setArticlesToDisplay(articles)
    } else {
      const search = searchTerm.toLowerCase()
      setArticlesToDisplay(prev => prev.filter(article => article.title?.toLowerCase().includes(search) || article.description?.toLowerCase().includes(search) || article.content?.toLowerCase().includes(search) || article.author?.toLowerCase().includes(search) || getStringDate(article.publishedAt)?.toLowerCase().includes(search)))
    }
  }
  
  return (
    <div className="app">
      {!menuOpen && <header className="app-header decorative-heading">
        <div className='header-decoration decorative-heading'>
          <NavBar searchArticles={searchArticles} menuOpen={menuOpen} location={location.pathname} openOrCloseMenu={openOrCloseMenu} smallScreen={smallScreen} />
          {/* <div>
            <p>{getStringDate(`${new Date()}`)}</p>
            <p>Today's Paper</p> */}
            <Link className='app-logo' to='/'><img src={logo} alt='Daily Dispatch logo' /></Link>
          {/* </div> */}
        </div>
      </header>}
      <main>
        {
          menuOpen
            ? <Menu location={location.pathname} searchArticles={searchArticles} menuOpen={menuOpen} smallScreen={smallScreen} openOrCloseMenu={openOrCloseMenu} />
            :
            <>
              {loading
                ? <div className='loading-container'><img src={loadingGif}  alt='floating newspaper icon'/><p>Loading...</p></div>
                : error instanceof Error ? <p>Oops! Somewthing went wrong, please try again!</p> :
              <Routes>
                <Route path='/' element={<Home articles={articlesToDisplay} allArticles={articles} />} />
                <Route path='/article-details/:id' element={<ArticleDetails articles={articles} />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              }
            </>
        }
      </main>
    </div>
  );
}

export default App;
