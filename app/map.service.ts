import { Injectable } from '@angular/core';

Injectable()
export class MapService {
  map: google.maps.Map
  marker: google.maps.Marker

  initMap(): Promise<google.maps.Map> {
    console.log('initMap');
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 25.775726, lng: -80.192043},
      zoom: 14
    });
    this.marker = new google.maps.Marker({
      position: {lat: 25.775726, lng: -80.192043},
      map: this.map
    })
    return Promise.resolve(this.map);
  }
}
