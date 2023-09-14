import { useEffect, useState } from "react";
import search from '../../images/search.png';
import './SearchBar.css'

type SearchBarProps = {
  menuOpen: boolean,
  openOrCloseMenu: () => void,
  searchArticles: (searchTerm: string) => void,
  location: string
}

const SearchBar = ({location, searchArticles, menuOpen, openOrCloseMenu}: SearchBarProps) => {
  const [inputShown, setInputShown] = useState(menuOpen)
  const [searchValue, setSearchValue] = useState('');
  const [valueSearched, setValueSearched] = useState(false);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    valueSearched ? setSearchValue('') : searchArticles(searchValue);
    setValueSearched(prev => !prev);
    if (menuOpen) {
      openOrCloseMenu();
    }
  }

  useEffect(() => {
    if (!searchValue) {
      searchArticles(searchValue)
      if (valueSearched) {
        setValueSearched(false)
      }
    }
  }, [searchValue])

  useEffect(() => {
    setSearchValue('')
    setValueSearched(false)
  }, [location])

  return (
    <section className='search-section'>
      {!menuOpen && <button className='search-button clear-btn' onClick={() => setInputShown(prev => !prev)} aria-expanded={inputShown ? true : false}><img src={search} alt='search button' /></button>}
      {inputShown && 
        <form onSubmit={handleSubmit}>
          <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={!menuOpen ? 'search-input grow-input' : 'search-input fade-input'} type='search' placeholder='SEARCH' />
          <button className={searchValue.length ? 'search-submit-btn go' : 'go'}>{valueSearched ? 'CLEAR' : 'GO'}</button>
        </form>
      }
    </section>
  )
}

export default SearchBar