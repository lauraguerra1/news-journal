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
            {location === '/' && <SearchBar searchArticles={searchArticles}  openOrCloseMenu={openOrCloseMenu} smallScreen={smallScreen} menuOpen={menuOpen} />}
          </div>
          :
          <div className='large-screen-nav'>
            {location === '/' && <SearchBar searchArticles={searchArticles} openOrCloseMenu={openOrCloseMenu} smallScreen={smallScreen} menuOpen={menuOpen} />}
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </div>
      }
    </nav>
  )
}
export default NavBar