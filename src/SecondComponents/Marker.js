import React from 'react';
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';



class Markers extends React.Component{
  constructor(props){
    super(props);
  }

  setActivite (activites) {
    this.setState({activites: activites})
  }
  render(){
    const {data} = this.props;
    const cities = [

    ]
    return(
      cities.map(
        city => <Marker key={city.id} longitude={city.longitude} latitude={city.latitude} ><p>{city.name}</p></Marker>
      )
    )
  }
}

export default Markers;

