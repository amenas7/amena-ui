import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'default' | 'success' | 'warning' | 'error';
export declare class SaInputComponent implements ControlValueAccessor, OnChanges {
    /** Valor del input (ngModel y reactivo) */
    value: string;
    valueChange: EventEmitter<string>;
    /** Placeholder del input */
    placeholder: string;
    /** Tipo de input */
    type: InputType;
    /** Tamaño visual */
    size: InputSize;
    /** Variante visual */
    variant: InputVariant;
    /** Deshabilitado */
    disabled: boolean;
    /** Solo lectura */
    readonly: boolean;
    /** Requerido */
    required: boolean;
    /** Nombre del input */
    name: string;
    /** ID del input */
    id: string;
    /** Máximo de caracteres */
    maxlength?: number;
    /** Mínimo de caracteres */
    minlength?: number;
    /** Patrón de validación */
    pattern?: string;
    /** Etiqueta */
    label?: string;
    /** Texto de ayuda */
    helperText?: string;
    /** Texto de error */
    errorText?: string;
    /** Mostrar toggle de contraseña */
    showPasswordToggle: boolean;
    /** Icono izquierdo (clase CSS) */
    leftIcon?: string;
    /** Icono derecho (clase CSS) */
    rightIcon?: string;
    showPassword: boolean;
    isFocused: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onModelChange(value: string): void;
    onFocus(event: FocusEvent): void;
    onBlur(event: FocusEvent): void;
    togglePasswordVisibility(): void;
    get inputType(): string;
    get inputClasses(): any;
    get hasError(): boolean;
    get showPasswordToggleButton(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaInputComponent, "sa-input", never, { "value": { "alias": "value"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "name": { "alias": "name"; "required": false; }; "id": { "alias": "id"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "label": { "alias": "label"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "errorText": { "alias": "errorText"; "required": false; }; "showPasswordToggle": { "alias": "showPasswordToggle"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; "rightIcon": { "alias": "rightIcon"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
