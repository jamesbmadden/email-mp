import React from 'react';
import './MP.scss';

export default class MP extends React.Component {

  constructor(props) {
    super(props);
    this.postal = props.postal;
    this.state = {riding: undefined};
    console.log(`https://represent.opennorth.ca/postcodes/${this.postal}/`);
    fetch(`https://represent.opennorth.ca/postcodes/${this.postal}/`)
      .then(response => response.json())
      .then(riding => this.setState({riding}));
  }

  render () {
    return (<>
      {!this.state.riding && (<>
        <h1>Loading {this.postal}...</h1>
      </>)}
      {this.state.riding && (<>
        <h1>{this.state.riding.candidates_centroid[0].name}</h1>
        <a href={`mailto:${this.state.riding.candidates_centroid[0].first_name}.${this.state.riding.candidates_centroid[0].last_name}@parl.gc.ca`}><button className="mp-button">Email</button></a>
      </>)}
    </>);
  }

}