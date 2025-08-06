import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SaInputComponent implements ControlValueAccessor {
    value: string;
    valueChange: EventEmitter<string>;
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onModelChange(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaInputComponent, "sa-input", never, { "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
