import { useEffect, useState } from "react";
import search from '../../images/search.png';
import './SearchBar.css'
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  smallScreen: boolean,
  menuOpen: boolean,
  openOrCloseMenu: () => void,
  searchArticles: (searchTerm: string) => void
}

const SearchBar = ({searchArticles, smallScreen, menuOpen, openOrCloseMenu}: SearchBarProps) => {
  const [inputShown, setInputShown] = useState(smallScreen && menuOpen)
  const [searchValue, setSearchValue] = useState('');
  const [valueSearched, setValueSearched] = useState(false);
  const navigate = useNavigate();
  useEffect(() => { 
    setInputShown(smallScreen && menuOpen)
  }, [smallScreen, menuOpen])

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    valueSearched ? setSearchValue('') : searchArticles(searchValue);
    setValueSearched(prev => !prev);
    if (menuOpen) {
      navigate('/')
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

  return (
    <section className='search-section'>
      {!menuOpen && <button className='search-button clear-btn' onClick={() => setInputShown(prev => !prev)} aria-expanded={inputShown ? true : false}><img src={search} alt='search button' /></button>}
      {inputShown && 
        <form onSubmit={handleSubmit}>
          <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='search-input' type='search' placeholder='SEARCH' />
          <button className={searchValue.length ? 'search-submit-btn go' : 'go'}>{valueSearched ? 'CLEAR' : 'GO'}</button>
        </form>
      }
    </section>
  )
}

export default SearchBar