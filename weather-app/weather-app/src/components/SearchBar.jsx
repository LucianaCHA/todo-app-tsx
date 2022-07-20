import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const {onSearch} = props;
  return (
     <div>
  <nav>
    <input type = 'text' placeholder ='City' background = 'green'></input>
    <button type='submit' onClick={onSearch}>Add</button>
  </nav>
  </div>
  )
};