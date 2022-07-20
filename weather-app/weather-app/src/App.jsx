import React from 'react';
import Cards from './components/Cards';


import './index.css';
import info from './info.js';

function App() {
  return (
    <div>
      <Cards cities = {info}/>
      {/* <SearchBar onSearch={(ciudad) => alert(ciudad)}/> */}
    </div>
  );
}

export default App;
