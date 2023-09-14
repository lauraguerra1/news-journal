import { NavLink } from "react-router-dom";
import menuBtn from '../../images/menu.png';
import SearchBar from "../SearchBar/SearchBar";
import './NavBar.css'

type NavBarProps = {
  smallScreen: boolean,
  openOrCloseMenu: () => void,
  searchArticles: (searchTerm: string) => void,
  location: string,
  menuOpen: boolean
}
const NavBar = ({ searchArticles, menuOpen, location, smallScreen, openOrCloseMenu }: NavBarProps) => {
  return (
    <nav className='nav'>
      {
        smallScreen
          ?
          <div className='small-screen-nav'>
            <button onClick={openOrCloseMenu} className='clear-btn'><img src={menuBtn} alt='open menu button' /></button>
            {location === '/' && <SearchBar location={location} searchArticles={searchArticles}  openOrCloseMenu={openOrCloseMenu} menuOpen={menuOpen} />}
          </div>
          :
          <div className='large-screen-nav'>
            {!location.includes('article-details') && <SearchBar location={location} searchArticles={searchArticles} openOrCloseMenu={openOrCloseMenu} menuOpen={menuOpen} />}
            <div className='nav-link-container'>
              <NavLink className='nav-link' to='/'><button className='nav-link-btn clear-btn'>U.S. News</button></NavLink>
              <NavLink className='nav-link' to='/global'><button className='nav-link-btn clear-btn'>Global News</button></NavLink>
            </div>
          </div>
      }
    </nav>
  )
}
export default NavBar