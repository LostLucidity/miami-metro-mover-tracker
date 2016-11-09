"use strict";
var core_1 = require('@angular/core');
var mock_mover_trains_1 = require('./mock-mover-trains');
core_1.Injectable();
var MoverTrainTrackerService = (function () {
    function MoverTrainTrackerService() {
    }
    MoverTrainTrackerService.prototype.getMoverTrains = function () {
        return Promise.resolve(mock_mover_trains_1.MOVERTRAINS);
    };
    return MoverTrainTrackerService;
}());
exports.MoverTrainTrackerService = MoverTrainTrackerService;
//# sourceMappingURL=mover-train-tracker.service.js.map