import React from 'react'

const SearchBar = () => {
  return (
     <div className="search-bar" >

    <div className="input-wrapper">
      <input type="search" name="search" placeholder="Search" className="input-field"/>

      <button className="search-close-btn" aria-label="close search bar" >
        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
      </button>

    </div>

    <p className="search-bar-text">Please enter at least 3 characters</p>

  </div>
  )
}

export default SearchBar