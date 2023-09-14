import { Link } from "react-router-dom";
import closeBtn from '../../images/close.png';
import './Menu.css'
import SearchBar from "../SearchBar/SearchBar";
import logo from '../../images/logo.png'

type MenuProps = {
  openOrCloseMenu: () => void,
  searchArticles: (searchTerm: string) => void,
  smallScreen: boolean,
  menuOpen: boolean,
  location: string
}
const Menu = ({ location, searchArticles, openOrCloseMenu, smallScreen, menuOpen }: MenuProps )=> {
  return (
    <nav className="menu">
      <button onClick={openOrCloseMenu}  className='close-btn clear-btn'><img src={closeBtn} alt='close menu button' /></button>
      <Link className='app-logo' to='/'><img src={logo} alt='Daily Dispatch logo' /></Link>
      {!location.includes('article-details') && <SearchBar inMenu={true} searchArticles={searchArticles} openOrCloseMenu={openOrCloseMenu} menuOpen={menuOpen} smallScreen={smallScreen} />}
      <Link to='/'><button className='clear-btn' onClick={openOrCloseMenu}>U.S. News</button></Link>
      <Link to='/global'><button className='clear-btn' onClick={openOrCloseMenu}>Global News</button></Link>
    </nav>
  )
}

export default Menu