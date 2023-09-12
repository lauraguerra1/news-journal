import { NavLink } from "react-router-dom";
import menuBtn from '../../images/menu.png';

type NavBarProps = {
  smallScreen: boolean
}
const NavBar = ({ smallScreen }: NavBarProps) => {
  return (
    <nav className='nav'>
      {
        smallScreen
          ? <button className='clear-btn'><img src={menuBtn}  alt='open menu button'/></button>
          :
          <div>
            <NavLink to='/'>Home</NavLink>
          </div>
      }
    </nav>
  )
}
export default NavBar