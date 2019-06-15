import React from 'react';
import logo from './icons/icon.svg';
import search from './icons/search.svg';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Email <span className="title-bold">MPs</span></span>
        </header>
        <main className="App-main">
          <h1 className="title-reg">Enter Your <span className="title-bold">Postal Code</span>:</h1>
          <form className="search-bar" onSubmit={this.handleSubmit}>
            <input className="App-postal title-bold" name="postal" id="postal" placeholder="a1b2c3" type="text" 
            value={this.state.value} onChange={this.handleChange} maxLength="6"></input>
            <button><img src={search} alt="->" /></button>
          </form>
        </main>
      </div>
    );
  }

}

export default App;
