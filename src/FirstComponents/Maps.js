import React, {Component} from 'react';
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWVsdmluZGJ0IiwiYSI6ImNrNjBqb2RtcjA4M3Qzb21ieDB5bzE3ZmkifQ.g8UJ8r3es_zfy-NE9RVFgg'; // Set your mapbox token here

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

const cities = [

]

export class Markers extends React.Component{
  constructor(props){
    super(props);
  }

  setActivite (activites) {
    this.setState({activites: activites})
  }
  render(){
    return(
      cities.map(
        city => <Marker key={city.id} longitude={city.longitude} latitude={city.latitude} show={this.handleShow}><p>{city.name}</p></Marker>
      )
    )
  }
}

class Maps extends Component {
  state = {
    viewport: {
      latitude: 48.938236499999995,
      longitude: 2.6074297,
      zoom: 16,
      bearing: 0,
      pitch: 0
    }
  };

  _onViewportChange = viewport => this.setState({viewport});

  render() {
    const {viewport} = this.state;

    return (
      <div className="map filter-container">
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://sprites/mapbox/bright-v8"
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{enableHighAccuracy: true}}
            trackUserLocation={true}
          />
          <Markers data={cities} className="filter-item vege"/>
        </MapGL>
      </div>
      
    );
  }
}

export default Maps;

// mapboxApiAccessToken={"pk.eyJ1IjoibWVsdmluZGJ0IiwiYSI6ImNrNjBqb2RtcjA4M3Qzb21ieDB5bzE3ZmkifQ.g8UJ8r3es_zfy-NE9RVFgg"}