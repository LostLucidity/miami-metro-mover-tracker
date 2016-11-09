import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';
import { MoverTrainTrackerService } from './mover-train-tracker.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div id="map"></div>
  `,
  providers: [MapService, MoverTrainTrackerService]
})
export class AppComponent implements OnInit{
  title = 'Miami Metromover Tracker';
  map: google.maps.Map

  constructor(
    private mapService: MapService,
    private moverTrainTrackerService: MoverTrainTrackerService
  ) { }

  initMap(): void {
    this.mapService.initMap().then(map => {
      this.map = map;
      console.log(map);
      this.moverTrainTrackerService.getMoverTrains();
    }
  )}

  ngOnInit(): void {
    this.initMap();
  }
}
