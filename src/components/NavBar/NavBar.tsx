import { NavLink } from "react-router-dom";
import menuBtn from '../../images/menu.png';
import './NavBar.css'

type NavBarProps = {
  smallScreen: boolean,
  openOrCloseMenu: () => void
}
const NavBar = ({ smallScreen, openOrCloseMenu }: NavBarProps) => {
  return (
    <nav className='nav'>
      {
        smallScreen
          ? <button onClick={openOrCloseMenu} className='clear-btn'><img src={menuBtn}  alt='open menu button'/></button>
          :
          <div>
            <NavLink to='/'>Home</NavLink>
          </div>
      }
    </nav>
  )
}
export default NavBar