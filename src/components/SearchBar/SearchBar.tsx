import { useEffect, useState } from "react";
import search from '../../images/search.png';
import './SearchBar.css'

type SearchBarProps = {
  smallScreen: boolean,
  menuOpen: boolean
}

const SearchBar = ({smallScreen, menuOpen}: SearchBarProps) => {
  const [inputShown, setInputShown] = useState(smallScreen && menuOpen)
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => { 
    setInputShown(smallScreen && menuOpen)
  }, [smallScreen, menuOpen])

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    //use navigate to go home
  }

  return (
    <section className='search-section'>
      {!menuOpen && <button className='search-button clear-btn' onClick={() => setInputShown(prev => !prev)} aria-expanded={inputShown ? true : false}><img src={search} alt='search button' /></button>}
      {inputShown && 
        <form onSubmit={handleSubmit}>
          <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='search-input' type='search' placeholder='SEARCH' />
          <button className={searchValue.length ? 'search-submit-btn go' : 'go'}>GO</button>
        </form>
      }
    </section>
  )
}

export default SearchBar