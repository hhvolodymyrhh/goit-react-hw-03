import css from './SearchBox.module.css'


function SearchBox({value,onFilter}) {
  
  return (
  <div className={css.searchBox}>
      <h2 className={css.searchBoxH2}>Finde contacts by name</h2>
      <input type="text" className={css.searchInput} value={value} onChange={e => onFilter(e.target.value)} />
  </div>
  )
}

export default SearchBox
