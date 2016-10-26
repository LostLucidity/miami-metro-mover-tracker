import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div id="map"></div>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBs-qJ73enc1zbN3BgTcmoklWxDQF7GREk&callback=initMap"
  async defer></script>
  `
})
export class AppComponent {
  title = 'Miami Metromover Tracker';
}
