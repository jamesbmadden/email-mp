import React from 'react';
import './MP.scss';

export default class MP extends React.Component {

  constructor(props) {
    super(props);
    this.postal = props.postal;
    this.state = {mp: undefined, reps: undefined};
    console.log(`https://represent.opennorth.ca/postcodes/${this.postal}/`);
    fetch(`https://represent.opennorth.ca/postcodes/${this.postal}/`)
      .then(response => response.json())
      .then(riding => {
        let mpList = riding.representatives_centroid.filter(rep => rep.elected_office === 'MP');
        let reps = riding.representatives_centroid.filter(rep => rep.elected_office !== 'MP');
        this.setState({mp: mpList[0], reps });
      });
  }

  render () {
    return (<>
      {!this.state.mp && (<>
        <h1>Loading {this.postal}...</h1>
      </>)}
      {this.state.mp && (<>
        <div className="mp-box">
          <h3>MP</h3>
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
        <h3>Other Reps</h3>
        {this.state.reps.map(rep => {
          return (
            <div className="mp-box">
            <div className="mp-header">
              <img className="mp-image" src={rep.photo_url} alt={rep.name} />
              <div className="mp-header-text">
                <h1 className="title-reg">{rep.first_name} <span className="title-bold">{rep.last_name}</span></h1>
                <p>{rep.elected_office}</p>
              </div>
            </div>
            <a href={`mailto:${rep.email}`}><button className="mp-button">Email</button></a>
            {rep.extra.twitter && <a href={rep.extra.twitter} target="_blank" rel="noreferrer noopener"><button className="mp-button mp-button--blue">Twitter</button></a>}
            {rep.extra.facebook && <a href={rep.extra.facebook} target="_blank" rel="noreferrer noopener"><button className="mp-button mp-button--darkblue">Facebook</button></a>}
          </div>
          );
        })}
      </>)}
    </>);
  }

}