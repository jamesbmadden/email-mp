import React from 'react';
import logo from './logo.svg';
import search from './icons/search.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Email <span className="title-bold">Members of Parliament</span></span>
      </header>
      <main className="App-main">
        <h1 className="title-reg">Enter Your <span className="title-bold">Postal Code</span>:</h1>
        <form className="search-bar">
          <input className="App-postal title-bold" placeholder="a1b2c3"></input>
          <button><img src={search} alt="->" /></button>
        </form>
      </main>
    </div>
  );
}

export default App;
