import { Injectable } from '@angular/core';

Injectable()
export class MapService {
  map: google.maps.Map

  initMap(){
    console.log('initMap');
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    return this.map
  }
}
