import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectStatus = 'default' | 'success' | 'error';
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
export declare class SaSelectComponent implements ControlValueAccessor {
    value: string | number;
    options: SelectOption[];
    size: SelectSize;
    status: SelectStatus;
    label: string;
    helperText: string;
    errorText: string;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    id: string;
    name: string;
    placeholder: string;
    showPlaceholder: boolean;
    valueChange: EventEmitter<string | number>;
    focus: EventEmitter<FocusEvent>;
    blur: EventEmitter<FocusEvent>;
    isFocused: boolean;
    private onChange;
    private onTouched;
    get selectClasses(): string;
    get labelClasses(): string;
    get hasValidSelection(): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onModelChange(value: string | number): void;
    onSelectFocus(event: FocusEvent): void;
    onSelectBlur(event: FocusEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaSelectComponent, "sa-select", never, { "value": { "alias": "value"; "required": false; }; "options": { "alias": "options"; "required": false; }; "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "label": { "alias": "label"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "errorText": { "alias": "errorText"; "required": false; }; "required": { "alias": "required"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "showPlaceholder": { "alias": "showPlaceholder"; "required": false; }; }, { "valueChange": "valueChange"; "focus": "focus"; "blur": "blur"; }, never, never, false, never>;
}
