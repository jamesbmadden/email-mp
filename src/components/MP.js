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
        <div className="mp-box">
          <div className="mp-header">
            <img className="mp-image" src={this.state.riding.candidates_centroid[0].photo_url} alt={this.state.riding.candidates_centroid[0].name} />
            <div class="mp-header-text">
              <h1 className="title-reg">{this.state.riding.candidates_centroid[0].first_name} <span className="title-bold">{this.state.riding.candidates_centroid[0].last_name}</span></h1>
              <p>{this.state.riding.candidates_centroid[0].district_name}</p>
            </div>
          </div>
          <a href={`mailto:${this.state.riding.candidates_centroid[0].email}`}><button className="mp-button">Email</button></a>
          {this.state.riding.candidates_centroid[0].extra.twitter && <a href={this.state.riding.candidates_centroid[0].extra.twitter} target="_blank" rel="noreferrer noopener"><button className="mp-button mp-button--blue">Twitter</button></a>}
          {this.state.riding.candidates_centroid[0].extra.facebook && <a href={this.state.riding.candidates_centroid[0].extra.facebook} target="_blank" rel="noreferrer noopener"><button className="mp-button mp-button--darkblue">Facebook</button></a>}
        </div>
      </>)}
    </>);
  }

}