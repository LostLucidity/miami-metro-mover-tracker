"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var map_service_1 = require("./map.service");
var AppComponent = (function () {
    function AppComponent(mapService) {
        this.mapService = mapService;
        this.title = 'Miami Metromover Tracker';
    }
    AppComponent.prototype.initMap = function () {
        var _this = this;
        this.mapService.initMap().then(function (map) {
            _this.map = map;
            console.log(map);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <div id=\"map\"></div>\n  ",
        providers: [map_service_1.MapService]
    }),
    __metadata("design:paramtypes", [map_service_1.MapService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map