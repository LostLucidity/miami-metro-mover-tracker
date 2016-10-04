import { Component } from '@angular/core';

declare var google: any;
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><div id="map"></div>'
})
export class AppComponent {
  title = "Miami Metromover Tracker"

  ngOnInit(){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
}
