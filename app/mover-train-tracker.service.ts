import { Injectable } from '@angular/core';

import { MoverTrain } from './mover-train';
import { MOVERTRAINS } from './mock-mover-trains';

Injectable()
export class MoverTrainTrackerService {
  getMoverTrains(): Promise<MoverTrain[]> {
    return Promise.resolve(MOVERTRAINS);
  }
}
