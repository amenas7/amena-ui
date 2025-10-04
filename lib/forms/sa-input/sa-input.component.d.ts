import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export type InputSize = 'sm' | 'md' | 'lg';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel';
export type InputStatus = 'default' | 'success' | 'error';
export declare class SaInputComponent implements ControlValueAccessor, OnChanges {
    value: string;
    type: InputType;
    placeholder: string;
    size: InputSize;
    status: InputStatus;
    label: string;
    constructor();
    private _noLabel;
    set noLabel(value: boolean | any);
    get noLabel(): boolean;
    private _hideLabel;
    set hideLabel(value: boolean | any);
    get hideLabel(): boolean;
    helperText: string;
    errorText: string;
    leftIcon: string;
    rightIcon: string;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    id: string;
    name: string;
    autocomplete: string;
    min: number | null;
    max: number | null;
    minlength: number | null;
    maxlength: number | null;
    pattern: string;
    backgroundColor: string;
    textColor: string;
    boldText: boolean;
    class: string;
    saNumbersOnly: boolean;
    allowDecimals: boolean;
    allowNegative: boolean;
    maxDecimals: number;
    saLettersOnly: boolean;
    allowSpaces: boolean;
    allowAccents: boolean;
    valueChange: EventEmitter<string>;
    change: EventEmitter<Event>;
    focus: EventEmitter<FocusEvent>;
    blur: EventEmitter<FocusEvent>;
    keyup: EventEmitter<KeyboardEvent>;
    keydown: EventEmitter<KeyboardEvent>;
    keypress: EventEmitter<KeyboardEvent>;
    enter: EventEmitter<KeyboardEvent>;
    showPassword: boolean;
    isFocused: boolean;
    inputElement: ElementRef<HTMLInputElement>;
    private onChange;
    private onTouched;
    private numbersRegex;
    private isProcessingNumbersInput;
    private lettersRegex;
    get hostClasses(): string;
    get inputClasses(): string;
    get labelClasses(): string;
    get shouldShowLabel(): boolean;
    get inputGroupClasses(): string;
    get inputType(): string;
    get inputStyles(): any;
    get helperTextClasses(): string;
    get errorTextClasses(): string;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onModelChange(value: string): void;
    onInputFocus(event: FocusEvent): void;
    onInputBlur(event: FocusEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onKeyPress(event: KeyboardEvent): void;
    onInputChange(event: Event): void;
    togglePasswordVisibility(): void;
    /**
     * Enfoca el input
     */
    focusInput(): void;
    /**
     * Quita el foco del input
     */
    blurInput(): void;
    /**
     * Selecciona todo el texto del input
     */
    selectAll(): void;
    /**
     * Obtiene la referencia al elemento input nativo
     */
    getNativeInput(): HTMLInputElement | null;
    ngOnChanges(changes: SimpleChanges): void;
    private updateNumbersRegex;
    onInputForNumbers(event: any): void;
    onKeyPressForNumbers(event: KeyboardEvent): void;
    onPasteForNumbers(event: ClipboardEvent): void;
    private updateLettersRegex;
    onInputForLetters(event: any): void;
    onKeyPressForLetters(event: KeyboardEvent): void;
    onPasteForLetters(event: ClipboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaInputComponent, "sa-input", never, { "value": { "alias": "value"; "required": false; }; "type": { "alias": "type"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "label": { "alias": "label"; "required": false; }; "noLabel": { "alias": "noLabel"; "required": false; }; "hideLabel": { "alias": "hideLabel"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "errorText": { "alias": "errorText"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; "rightIcon": { "alias": "rightIcon"; "required": false; }; "required": { "alias": "required"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "boldText": { "alias": "boldText"; "required": false; }; "class": { "alias": "class"; "required": false; }; "saNumbersOnly": { "alias": "saNumbersOnly"; "required": false; }; "allowDecimals": { "alias": "allowDecimals"; "required": false; }; "allowNegative": { "alias": "allowNegative"; "required": false; }; "maxDecimals": { "alias": "maxDecimals"; "required": false; }; "saLettersOnly": { "alias": "saLettersOnly"; "required": false; }; "allowSpaces": { "alias": "allowSpaces"; "required": false; }; "allowAccents": { "alias": "allowAccents"; "required": false; }; }, { "valueChange": "valueChange"; "change": "change"; "focus": "focus"; "blur": "blur"; "keyup": "keyup"; "keydown": "keydown"; "keypress": "keypress"; "enter": "enter"; }, never, never, false, never>;
}
