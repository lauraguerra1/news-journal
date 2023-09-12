import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import { article } from '../../types';
import { newsData } from '../../data/data';

const App = () => {
  const [articles, setArticles] = useState<article[]>(newsData.articles)
  const [smallScreen, setSmallScreen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const openOrCloseMenu = () => setMenuOpen(prev => !prev)
  const changeScreenSize = () => window.innerWidth <= 800 ? setSmallScreen(true) : setSmallScreen(false)
  
  useEffect(() => {
    changeScreenSize()
    window.addEventListener('resize', changeScreenSize)
    return () => window.removeEventListener('resize', changeScreenSize)
  }, [])
  
  return (
    <div className="app">
      <header className="app-header">
        {!menuOpen && <NavBar openOrCloseMenu={openOrCloseMenu} smallScreen={smallScreen} />}
      </header>
      <main>
        {
          menuOpen
            ? <Menu openOrCloseMenu={openOrCloseMenu} />
            : <Routes>
              <Route path='/' element={<Home />} />
              </Routes>
        }
      </main>
    </div>
  );
}

export default App;
