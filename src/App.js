import React from 'react';

import Header from './components/Header';
import Ingredients from './components/Ingredients';
import Etapes from './components/Etapes';

import './App.css';
import data from './data/data';

function App() {
  return (
    <div className="App">
      <Header
        image={data.thumbnail}
        title={data.name}
        author={data.author}
        difficulty={data.difficulty}
      />
      <Ingredients list={data.ingredients} />
      <Etapes steps={data.instructions} />
    </div>
  );
}

export default App;
