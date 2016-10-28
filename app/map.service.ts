import { Injectable } from '@angular/core';

declare var google;

Injectable()
export class MapService {
  map: google.maps.Map

  initMap(): Promise<google.maps.Map> {
    console.log('initMap');
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    return Promise.resolve(this.map);
  }
}
