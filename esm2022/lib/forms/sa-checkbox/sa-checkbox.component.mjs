import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SaCheckboxComponent {
    checked = false;
    size = 'md';
    status = 'default';
    label = '';
    _noLabel = false;
    set noLabel(value) {
        this._noLabel = value === true || value === 'true';
    }
    get noLabel() {
        return this._noLabel;
    }
    _hideLabel = false;
    set hideLabel(value) {
        this._hideLabel = value === true || value === 'true';
    }
    get hideLabel() {
        return this._hideLabel;
    }
    helperText = '';
    errorText = '';
    required = false;
    disabled = false;
    readonly = false;
    id = '';
    name = '';
    value = '';
    indeterminate = false;
    bold = false;
    // Soporte para ngClass
    class = '';
    checkedChange = new EventEmitter();
    change = new EventEmitter();
    focusin = new EventEmitter();
    focusout = new EventEmitter();
    isFocused = false;
    _generatedId;
    onChange = (_) => { };
    onTouched = () => { };
    // HostBinding para soporte de ngClass
    get hostClasses() {
        return this.class || '';
    }
    constructor() {
        this._generatedId = `sa-checkbox-${Math.random().toString(36).substr(2, 9)}`;
    }
    get checkboxId() {
        return this.id || this._generatedId;
    }
    get checkboxClasses() {
        const sizeMap = {
            'sm': 'form-check-sm',
            'md': '', // Bootstrap default
            'lg': 'form-check-lg'
        };
        const baseClasses = ['form-check-input'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            // Note: Bootstrap doesn't have built-in size classes for checkboxes
            // We'll handle this in CSS
        }
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-check-label label-sm',
            'md': 'form-check-label label-md',
            'lg': 'form-check-label label-lg'
        };
        let classes = sizeMap[this.size] || 'form-check-label label-md';
        if (this.bold) {
            classes += ' label-bold';
        }
        // Si es noLabel, agregar clase para label fantasma
        if (this.noLabel && !this.hideLabel) {
            classes += ' ghost-label';
        }
        return classes;
    }
    get shouldShowLabel() {
        // Si hideLabel está activo, nunca mostrar el label
        if (this.hideLabel) {
            return false;
        }
        // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
        return !!this.label || this.noLabel;
    }
    get containerClasses() {
        const sizeMap = {
            'sm': 'form-check-sm',
            'md': '', // Bootstrap default
            'lg': 'form-check-lg'
        };
        const baseClasses = ['form-check'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
        }
        return baseClasses.join(' ');
    }
    writeValue(value) {
        this.checked = !!value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onCheckboxChange(event) {
        const target = event.target;
        this.checked = target.checked;
        this.onChange(this.checked);
        this.checkedChange.emit(this.checked);
        this.change.emit(event);
    }
    onCheckboxFocus(event) {
        this.isFocused = true;
        this.focusin.emit(event);
    }
    onCheckboxBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.focusout.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaCheckboxComponent, selector: "sa-checkbox", inputs: { checked: "checked", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", readonly: "readonly", id: "id", name: "name", value: "value", indeterminate: "indeterminate", bold: "bold", class: "class" }, outputs: { checkedChange: "checkedChange", change: "change", focusin: "focusin", focusout: "focusout" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaCheckboxComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"sa-checkbox-wrapper\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"checkboxId\"\r\n      [name]=\"name\"\r\n      [class]=\"checkboxClasses\"\r\n      type=\"checkbox\"\r\n      [checked]=\"checked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [indeterminate]=\"indeterminate\"\r\n      (change)=\"onCheckboxChange($event)\"\r\n      (focusin)=\"onCheckboxFocus($event)\"\r\n      (focusout)=\"onCheckboxBlur($event)\"\r\n    />\r\n    <label *ngIf=\"shouldShowLabel\" [for]=\"checkboxId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box;vertical-align:top;margin-right:1rem;margin-bottom:.5rem}:host .sa-checkbox-wrapper{width:auto;box-sizing:border-box;margin-bottom:0;height:auto}:host .sa-checkbox-wrapper:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:14px;height:14px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:.25em;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;cursor:pointer}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input:indeterminate{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10h8'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:12px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.label-bold{font-weight:600!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:12px!important;height:12px!important;border-radius:.2em}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:18px!important;height:18px!important;border-radius:.3em}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:14px!important;height:14px!important;border-radius:.25em}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:12px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-checkbox', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaCheckboxComponent),
                            multi: true
                        }
                    ], template: "<div class=\"sa-checkbox-wrapper\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"checkboxId\"\r\n      [name]=\"name\"\r\n      [class]=\"checkboxClasses\"\r\n      type=\"checkbox\"\r\n      [checked]=\"checked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [indeterminate]=\"indeterminate\"\r\n      (change)=\"onCheckboxChange($event)\"\r\n      (focusin)=\"onCheckboxFocus($event)\"\r\n      (focusout)=\"onCheckboxBlur($event)\"\r\n    />\r\n    <label *ngIf=\"shouldShowLabel\" [for]=\"checkboxId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box;vertical-align:top;margin-right:1rem;margin-bottom:.5rem}:host .sa-checkbox-wrapper{width:auto;box-sizing:border-box;margin-bottom:0;height:auto}:host .sa-checkbox-wrapper:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:14px;height:14px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:.25em;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;cursor:pointer}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input:indeterminate{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10h8'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:12px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.label-bold{font-weight:600!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:12px!important;height:12px!important;border-radius:.2em}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:18px!important;height:18px!important;border-radius:.3em}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:14px!important;height:14px!important;border-radius:.25em}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:12px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { checked: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], noLabel: [{
                type: Input
            }], hideLabel: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], bold: [{
                type: Input
            }], class: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focusin: [{
                type: Output
            }], focusout: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1jaGVja2JveC9zYS1jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWtCekUsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLElBQUksR0FBaUIsSUFBSSxDQUFDO0lBQzFCLE1BQU0sR0FBbUIsU0FBUyxDQUFDO0lBQ25DLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFcEIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNsQyxJQUNJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBQ3BDLElBQ0ksU0FBUyxDQUFDLEtBQW9CO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElB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WjtxQkFDRjt3REFHUSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBSUYsT0FBTztzQkFEVixLQUFLO2dCQVVGLFNBQVM7c0JBRFosS0FBSztnQkFPRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUVJLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFVSCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2hlY2tib3hTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBDaGVja2JveFN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2EtY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NhLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FDaGVja2JveENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogQ2hlY2tib3hTaXplID0gJ21kJztcclxuICBASW5wdXQoKSBzdGF0dXM6IENoZWNrYm94U3RhdHVzID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBcclxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBoaWRlTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2hpZGVMYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBoaWRlTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsO1xyXG4gIH1cclxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJvbGQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICAvLyBTb3BvcnRlIHBhcmEgbmdDbGFzc1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIGNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzaW4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3Vzb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9nZW5lcmF0ZWRJZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgLy8gSG9zdEJpbmRpbmcgcGFyYSBzb3BvcnRlIGRlIG5nQ2xhc3NcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9nZW5lcmF0ZWRJZCA9IGBzYS1jaGVja2JveC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoZWNrYm94SWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlkIHx8IHRoaXMuX2dlbmVyYXRlZElkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoZWNrYm94Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tY2hlY2stc20nLFxyXG4gICAgICAnbWQnOiAnJywgLy8gQm9vdHN0cmFwIGRlZmF1bHRcclxuICAgICAgJ2xnJzogJ2Zvcm0tY2hlY2stbGcnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNoZWNrLWlucHV0J107XHJcbiAgICBcclxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xyXG4gICAgICAvLyBOb3RlOiBCb290c3RyYXAgZG9lc24ndCBoYXZlIGJ1aWx0LWluIHNpemUgY2xhc3NlcyBmb3IgY2hlY2tib3hlc1xyXG4gICAgICAvLyBXZSdsbCBoYW5kbGUgdGhpcyBpbiBDU1NcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tY2hlY2stbGFiZWwgbGFiZWwtbGcnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBsZXQgY2xhc3NlcyA9IHNpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1tZCc7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmJvbGQpIHtcclxuICAgICAgY2xhc3NlcyArPSAnIGxhYmVsLWJvbGQnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTaSBlcyBub0xhYmVsLCBhZ3JlZ2FyIGNsYXNlIHBhcmEgbGFiZWwgZmFudGFzbWFcclxuICAgIGlmICh0aGlzLm5vTGFiZWwgJiYgIXRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIGNsYXNzZXMgKz0gJyBnaG9zdC1sYWJlbCc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3VsZFNob3dMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIC8vIFNpIGhpZGVMYWJlbCBlc3TDoSBhY3Rpdm8sIG51bmNhIG1vc3RyYXIgZWwgbGFiZWxcclxuICAgIGlmICh0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBDb21wb3J0YW1pZW50byBvcmlnaW5hbDogbW9zdHJhciBzaSBoYXkgbGFiZWwgbyBzaSBub0xhYmVsIGVzdMOhIGFjdGl2byAocGFyYSBlc3BhY2lvIGZhbnRhc21hKVxyXG4gICAgcmV0dXJuICEhdGhpcy5sYWJlbCB8fCB0aGlzLm5vTGFiZWw7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udGFpbmVyQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tY2hlY2stc20nLFxyXG4gICAgICAnbWQnOiAnJywgLy8gQm9vdHN0cmFwIGRlZmF1bHRcclxuICAgICAgJ2xnJzogJ2Zvcm0tY2hlY2stbGcnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNoZWNrJ107XHJcbiAgICBcclxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5jaGVja2VkKTtcclxuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hGb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1c2luLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5mb2N1c291dC5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNhLWNoZWNrYm94LXdyYXBwZXJcIj5cclxuICA8ZGl2IFtjbGFzc109XCJjb250YWluZXJDbGFzc2VzXCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgW2lkXT1cImNoZWNrYm94SWRcIlxyXG4gICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgW2NsYXNzXT1cImNoZWNrYm94Q2xhc3Nlc1wiXHJcbiAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgKGNoYW5nZSk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAoZm9jdXNpbik9XCJvbkNoZWNrYm94Rm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1c291dCk9XCJvbkNoZWNrYm94Qmx1cigkZXZlbnQpXCJcclxuICAgIC8+XHJcbiAgICA8bGFiZWwgKm5nSWY9XCJzaG91bGRTaG93TGFiZWxcIiBbZm9yXT1cImNoZWNrYm94SWRcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XHJcbiAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwicmVxdWlyZWQgJiYgbGFiZWxcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0ICYmICFlcnJvclRleHRcIiBjbGFzcz1cImZvcm0tdGV4dFwiPnt7IGhlbHBlclRleHQgfX08L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZXh0XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57eyBlcnJvclRleHQgfX08L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==