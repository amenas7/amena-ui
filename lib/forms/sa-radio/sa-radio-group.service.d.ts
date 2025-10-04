import * as i0 from "@angular/core";
export interface RadioGroupChange {
    name: string;
    value: any;
}
export declare class SaRadioGroupService {
    private changeSubject;
    change$: import("rxjs").Observable<RadioGroupChange>;
    notifyChange(name: string, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaRadioGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SaRadioGroupService>;
}
