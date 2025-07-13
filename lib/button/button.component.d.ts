import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';
export declare class ButtonComponent {
    label: string;
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
    loading: boolean;
    fullWidth: boolean;
    type: ButtonType;
    icon?: string;
    iconPosition: 'left' | 'right';
    clicked: EventEmitter<void>;
    onClick(): void;
    get buttonClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "lib-button", never, { "label": { "alias": "label"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "type": { "alias": "type"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; }, { "clicked": "clicked"; }, never, never, false, never>;
}
