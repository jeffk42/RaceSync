import { Observable, BehaviorSubject } from "rxjs";
import { FlagState } from "../types/flag-state";

export class FlagChangeService {

  private currentFlagState: FlagState = FlagState.CLEAR;
  private flagSubject: BehaviorSubject<FlagState> =
    new BehaviorSubject(this.currentFlagState);

  constructor() {
    console.log("The FlagChangeService has been created with a default flag state of " +
      this.currentFlagState + ".");
  }

  public updateFlagStatus(data: any) {}
}
