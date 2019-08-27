import React from 'react';
import './MP.scss';

export default class MP extends React.Component {

  constructor(props) {
    super(props);
    this.postal = props.postal;
    this.state = {mp: undefined};
    console.log(`https://represent.opennorth.ca/postcodes/${this.postal}/`);
    fetch(`https://represent.opennorth.ca/postcodes/${this.postal}/`)
      .then(response => response.json())
      .then(riding => {
        let mpList = riding.representatives_centroid.filter(rep => rep.elected_office === 'MP');
        this.setState({mp: mpList[0]});
      });
  }

  render () {
    return (<>
      {!this.state.mp && (<>
        <h1>Loading {this.postal}...</h1>
      </>)}
      {this.state.mp && (<>
        <div className="mp-box">
          <div className="mp-header">
            <img className="mp-image" src={this.state.mp.photo_url} alt={this.state.mp.name} />
            <div className="mp-header-text">
              <h1 className="title-reg">{this.state.mp.first_name} <span className="title-bold">{this.state.mp.last_name}</span></h1>
              <p>{this.state.mp.district_name}</p>
            </div>
          </div>
          <a href={`mailto:${this.state.mp.email}`}><button className="mp-button">Email</button></a>
          {this.state.mp.extra.twitter && <a href={this.state.mp.extra.twitter} target="_blank" rel="noreferrer noopener"><button className="mp-button mp-button--blue">Twitter</button></a>}
          {this.state.mp.extra.facebook && <a href={this.state.mp.extra.facebook} target="_blank" rel="noreferrer noopener"><button className="mp-button mp-button--darkblue">Facebook</button></a>}
        </div>
      </>)}
    </>);
  }

}