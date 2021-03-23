import React, {Component} from 'react';
import Map from './Map';
import Toggler from './Toggler';
import Search from './Search';
import PlacesPanel from './PlacesPanel'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      map: null,
      latitude: 41.14273,
      longitude: 16.40652,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      places: []
    }
  }
  render() {
    return (
      <div className="App">
        <PlacesPanel app={this} />
        <Search app={this} />
        <Toggler app={this}/>
        <Map app={this}/>
      </div>
    );
  }
}

export default App;
