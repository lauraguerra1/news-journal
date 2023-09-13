import { Link } from "react-router-dom";
import closeBtn from '../../images/close.png';
import './Menu.css'
import SearchBar from "../SearchBar/SearchBar";
import logo from '../../images/logo.png'

type MenuProps = {
  openOrCloseMenu: () => void,
  smallScreen: boolean,
  menuOpen: boolean
}
const Menu = ({ openOrCloseMenu, smallScreen, menuOpen }: MenuProps )=> {
  return (
    <nav className="menu">

        <button onClick={openOrCloseMenu}  className='close-btn clear-btn'><img src={closeBtn} alt='close menu button' /></button>
        <Link className='app-logo' to='/'><img src={logo} alt='Daily Dispatch logo' /></Link>

      <SearchBar menuOpen={menuOpen} smallScreen={smallScreen} />
      <Link to='/'><button className='clear-btn' onClick={openOrCloseMenu}>HOME</button></Link>
    </nav>
  )
}

export default Menu