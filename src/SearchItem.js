import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="search">search</label>
      <input
           id='search' 
           type="text"
           role='searchBox'
           placeholder='search Items'
           value={search}
           onChange={(e)=> setSearch(e.target.value)}
           />
    </form>
  )
}

export default SearchItem
