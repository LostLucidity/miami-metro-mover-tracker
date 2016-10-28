import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';

declare var google;

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div id="map"></div>
  `,
  providers: [MapService]
})
export class AppComponent implements OnInit{
  title = 'Miami Metromover Tracker';
  map: google.maps.Map

  constructor(private mapService: MapService) { }

  initMap(): void {
    this.mapService.initMap().then(map => {
      this.map = map;
      console.log(map);
    }
  )}

  ngOnInit(): void {
    this.initMap();
  }
}
