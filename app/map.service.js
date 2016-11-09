"use strict";
var core_1 = require('@angular/core');
core_1.Injectable();
var MapService = (function () {
    function MapService() {
    }
    MapService.prototype.initMap = function () {
        console.log('initMap');
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 25.775726, lng: -80.192043 },
            zoom: 14
        });
        this.marker = new google.maps.Marker({
            position: { lat: 25.775726, lng: -80.192043 },
            map: this.map
        });
        return Promise.resolve(this.map);
    };
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map