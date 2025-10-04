import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface RadioGroupChange {
  name: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})
export class SaRadioGroupService {
  private changeSubject = new Subject<RadioGroupChange>();
  public change$ = this.changeSubject.asObservable();

  notifyChange(name: string, value: any): void {
    this.changeSubject.next({ name, value });
  }
}
