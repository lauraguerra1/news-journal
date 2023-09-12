import { Link } from "react-router-dom";
import closeBtn from '../../images/close.png';

type MenuProps = {
  openOrCloseMenu: () => void 
}
const Menu = ({ openOrCloseMenu }: MenuProps )=> {
  return (
    <nav className="menu">
      <button onClick={openOrCloseMenu}  className='clear-btn'><img src={closeBtn} alt='close menu button' /></button>
      <Link to='/'><button onClick={openOrCloseMenu}>HOME</button></Link>
    </nav>
  )
}

export default Menu