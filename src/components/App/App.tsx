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
import { getStringDate } from '../helpers';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import { getAllNews } from '../../apiCalls';

const App = () => {
  const [articles, setArticles] = useState<article[]>([])
  const [articlesToDisplay, setArticlesToDisplay] = useState<article[]>([])
  const [smallScreen, setSmallScreen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const openOrCloseMenu = () => setMenuOpen(prev => !prev)
  const changeScreenSize = () => window.innerWidth <= 800 ? setSmallScreen(true) : setSmallScreen(false)
  const location = useLocation();

  useEffect(() => {
    changeScreenSize()
    window.addEventListener('resize', changeScreenSize)
    return () => window.removeEventListener('resize', changeScreenSize)
  }, [])

  useEffect(() => {
    //add location as dependency 
    // make an object with diff categories for each location
    //make the api call based on locations 
    const apiCall = async (category?: string) => {
      //setLoading(true)
      try {
        const news = await getAllNews(category);
        console.log(news)
        setArticles(news.articles);
        //setLocaing(false)
      } catch (error) {
        //if (error instanceof Error) setError(true)
        //setLoading(false)
        console.log(error)
      }
    }

    apiCall()
  }, [])

  useEffect(() => {
    setArticlesToDisplay(articles)
  }, [articles])

  const searchArticles = (searchTerm: string) => {
    if (!searchTerm) {
      setArticlesToDisplay(articles)
    } else {
      const search = searchTerm.toLowerCase()
      setArticlesToDisplay(prev => prev.filter(article => article.title.toLowerCase().includes(search) || article.description.toLowerCase().includes(search) || article.content.toLowerCase().includes(search) || article.author.toLowerCase().includes(search) || getStringDate(article.publishedAt).toLowerCase().includes(search)))
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
            ? <Menu searchArticles={searchArticles} menuOpen={menuOpen} smallScreen={smallScreen} openOrCloseMenu={openOrCloseMenu} />
            :
            <Routes>
              <Route path='/' element={<Home articles={articlesToDisplay} allArticles={articles} />} />
              <Route path='/article-details/:id' element={<ArticleDetails articles={articles} />} />
            </Routes>
        }
      </main>
    </div>
  );
}

export default App;
