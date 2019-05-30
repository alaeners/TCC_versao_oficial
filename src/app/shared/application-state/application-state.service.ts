import { Injectable } from '@angular/core';
import { StateEnum } from './state-enum';
import { Local } from 'app/models/Local';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private state: StateEnum;

  private local: Local;

  private pathToBackAfterAction: string;

  constructor() { }

  setState(state: StateEnum): void { this.state = state; }

  getState(): StateEnum { return this.state; }

  setLocalToEdit(local: Local): void { this.local = local; }

  getLocalToEdit(): Local { return this.local; }

  setPathToBack(path: string): void { this.pathToBackAfterAction = path; }

  getPathToBack(): string { return this.pathToBackAfterAction; }
}
