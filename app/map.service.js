"use strict";
var core_1 = require('@angular/core');
core_1.Injectable();
var MapService = (function () {
    function MapService() {
    }
    MapService.prototype.initMap = function () {
        console.log('initMap');
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        return this.map;
    };
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map