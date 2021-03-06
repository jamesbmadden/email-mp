import React from 'react';
import logo from './icons/icon.svg';
import search from './icons/search.svg';
import MP from './components/MP';
import './App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', submitted: false};

    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReset() {
    this.setState({value: '', submitted: false});
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    this.setState({submitted: true});
    event.preventDefault();
  }

  render() {

    let mp = this.state.submitted && <MP postal={this.state.value} />;

    let forum = !this.state.submitted && (<><h1 className="title-reg">Enter Your <span className="title-bold">Postal Code</span>:</h1>
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input className="App-postal title-bold" name="postal" id="postal" placeholder="A1B2C3" type="text" 
        value={this.state.value} onChange={this.handleChange} maxLength="6"></input>
        <button><img src={search} alt="->" /></button>
      </form></>)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.handleReset}/>
          <span>Email <span className="title-bold">Reps</span></span>
        </header>
        <main className="App-main">
          {forum}
          {mp}
        </main>
      </div>
    );
  }

}