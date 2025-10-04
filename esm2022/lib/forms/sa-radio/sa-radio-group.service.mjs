import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class SaRadioGroupService {
    changeSubject = new Subject();
    change$ = this.changeSubject.asObservable();
    notifyChange(name, value) {
        this.changeSubject.next({ name, value });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioGroupService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioGroupService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioGroupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtcmFkaW8tZ3JvdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2EtcmFkaW8vc2EtcmFkaW8tZ3JvdXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBVS9CLE1BQU0sT0FBTyxtQkFBbUI7SUFDdEIsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO0lBQ2pELE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRW5ELFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBVTtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7d0dBTlUsbUJBQW1COzRHQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSYWRpb0dyb3VwQ2hhbmdlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FSYWRpb0dyb3VwU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjaGFuZ2VTdWJqZWN0ID0gbmV3IFN1YmplY3Q8UmFkaW9Hcm91cENoYW5nZT4oKTtcclxuICBwdWJsaWMgY2hhbmdlJCA9IHRoaXMuY2hhbmdlU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgbm90aWZ5Q2hhbmdlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VTdWJqZWN0Lm5leHQoeyBuYW1lLCB2YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19