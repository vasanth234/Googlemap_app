import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  /*Here when we are exporting the component also we do provide our own API key
  to generate our own API key we do navigate to the specific link as 
  https://developers.google.com/maps/get-started#create-project and generate our key 
  Step1:project set up in gooogle cloud platform
  step2:enable our API key that is select ur project -->select dashboard-->select API & services-->credentials-->create credentials--->API key-->
  AIzaSyBwNwSiVX1ODuCOsIR0qwEz5P_a4fzD2-k--->after generating the API key-->go to library--->enable maps javascript library */
  apiKey: ('AIzaSyBwNwSiVX1ODuCOsIR0qwEz5P_a4fzD2-k')

})(MapContainer)