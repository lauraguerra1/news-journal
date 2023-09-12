import { Link } from "react-router-dom"
type MenuProps = {
  openOrCloseMenu: () => void 
}
const Menu = ({ openOrCloseMenu }: MenuProps )=> {
  return (
    <nav className="menu">
      <button onClick={openOrCloseMenu}>X</button>
      <Link to='/'><button onClick={openOrCloseMenu}>HOME</button></Link>
    </nav>
  )
}

export default Menu