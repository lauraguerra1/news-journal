import { Link } from "react-router-dom";
import closeBtn from '../../images/close.png';
import './Menu.css'

type MenuProps = {
  openOrCloseMenu: () => void 
}
const Menu = ({ openOrCloseMenu }: MenuProps )=> {
  return (
    <nav className="menu">
      <button onClick={openOrCloseMenu}  className='clear-btn'><img src={closeBtn} alt='close menu button' /></button>
      <Link to='/'><button className='clear-btn' onClick={openOrCloseMenu}>HOME</button></Link>
    </nav>
  )
}

export default Menu