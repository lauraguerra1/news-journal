type NavBarProps = {
  smallScreen: boolean
}
const NavBar = ({ smallScreen }: NavBarProps) => {
  return (
    <nav className='nav'>
      {
        smallScreen ? <div></div> : <div></div>
      }
    </nav>
  )
}
export default NavBar