import css from './SearchBox.module.css'


function SearchBox() {
  
  return (
  <div>
      <h2 className="searchBox">Finde contacts by name</h2>
      <input type="text" className="searchInput" />
  </div>
  )
}

export default SearchBox
