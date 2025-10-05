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
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.focusin.emit(event);
    }
    onCheckboxBlur(event) {
        this.isFocused = false;
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1jaGVja2JveC9zYS1jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWtCekUsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLElBQUksR0FBaUIsSUFBSSxDQUFDO0lBQzFCLE1BQU0sR0FBbUIsU0FBUyxDQUFDO0lBQ25DLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFcEIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNsQyxJQUNJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBQ3BDLElBQ0ksU0FBUyxDQUFDLEtBQW9CO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElB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QUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO3dEQUdRLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFJRixPQUFPO3NCQURWLEtBQUs7Z0JBVUYsU0FBUztzQkFEWixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFHRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUksYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQVVILFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgdHlwZSBDaGVja2JveFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XHJcbmV4cG9ydCB0eXBlIENoZWNrYm94U3RhdHVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2EtY2hlY2tib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2EtY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTYUNoZWNrYm94Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYUNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplOiBDaGVja2JveFNpemUgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogQ2hlY2tib3hTdGF0dXMgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIHByaXZhdGUgX25vTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBub0xhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9ub0xhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IG5vTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9MYWJlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hpZGVMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhpZGVMYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5faGlkZUxhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGhpZGVMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlTGFiZWw7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYm9sZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8vIFNvcG9ydGUgcGFyYSBuZ0NsYXNzXHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNpbiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2dlbmVyYXRlZElkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICAvLyBIb3N0QmluZGluZyBwYXJhIHNvcG9ydGUgZGUgbmdDbGFzc1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2dlbmVyYXRlZElkID0gYHNhLWNoZWNrYm94LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpfWA7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hlY2tib3hJZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaWQgfHwgdGhpcy5fZ2VuZXJhdGVkSWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hlY2tib3hDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1jaGVjay1zbScsXHJcbiAgICAgICdtZCc6ICcnLCAvLyBCb290c3RyYXAgZGVmYXVsdFxyXG4gICAgICAnbGcnOiAnZm9ybS1jaGVjay1sZydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY2hlY2staW5wdXQnXTtcclxuICAgIFxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XHJcbiAgICAgIC8vIE5vdGU6IEJvb3RzdHJhcCBkb2Vzbid0IGhhdmUgYnVpbHQtaW4gc2l6ZSBjbGFzc2VzIGZvciBjaGVja2JveGVzXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIENTU1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tY2hlY2stbGFiZWwgbGFiZWwtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1sZydcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxldCBjbGFzc2VzID0gc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLW1kJztcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuYm9sZCkge1xyXG4gICAgICBjbGFzc2VzICs9ICcgbGFiZWwtYm9sZCc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxyXG4gICAgaWYgKHRoaXMubm9MYWJlbCAmJiAhdGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgY2xhc3NlcyArPSAnIGdob3N0LWxhYmVsJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvdWxkU2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gU2kgaGlkZUxhYmVsIGVzdMOhIGFjdGl2bywgbnVuY2EgbW9zdHJhciBlbCBsYWJlbFxyXG4gICAgaWYgKHRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIENvbXBvcnRhbWllbnRvIG9yaWdpbmFsOiBtb3N0cmFyIHNpIGhheSBsYWJlbCBvIHNpIG5vTGFiZWwgZXN0w6EgYWN0aXZvIChwYXJhIGVzcGFjaW8gZmFudGFzbWEpXHJcbiAgICByZXR1cm4gISF0aGlzLmxhYmVsIHx8IHRoaXMubm9MYWJlbDtcclxuICB9XHJcblxyXG4gIGdldCBjb250YWluZXJDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1jaGVjay1zbScsXHJcbiAgICAgICdtZCc6ICcnLCAvLyBCb290c3RyYXAgZGVmYXVsdFxyXG4gICAgICAnbGcnOiAnZm9ybS1jaGVjay1sZydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY2hlY2snXTtcclxuICAgIFxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHRhcmdldC5jaGVja2VkO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xyXG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxyXG4gICAgdGhpcy5mb2N1c2luLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuZm9jdXNvdXQuZW1pdChldmVudCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJzYS1jaGVja2JveC13cmFwcGVyXCI+XHJcbiAgPGRpdiBbY2xhc3NdPVwiY29udGFpbmVyQ2xhc3Nlc1wiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtpZF09XCJjaGVja2JveElkXCJcclxuICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgIFtjbGFzc109XCJjaGVja2JveENsYXNzZXNcIlxyXG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiaW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgIChjaGFuZ2UpPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzaW4pPVwib25DaGVja2JveEZvY3VzKCRldmVudClcIlxyXG4gICAgICAoZm9jdXNvdXQpPVwib25DaGVja2JveEJsdXIoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG4gICAgPGxhYmVsICpuZ0lmPVwic2hvdWxkU2hvd0xhYmVsXCIgW2Zvcl09XCJjaGVja2JveElkXCIgW2NsYXNzXT1cImxhYmVsQ2xhc3Nlc1wiPlxyXG4gICAgICB7eyBsYWJlbCB9fVxyXG4gICAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJmb3JtLXRleHRcIj57eyBoZWxwZXJUZXh0IH19PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=