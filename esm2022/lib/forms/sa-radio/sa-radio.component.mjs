import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./sa-radio-group.service";
import * as i2 from "@angular/common";
export class SaRadioComponent {
    radioGroupService;
    value = '';
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
    // Soporte para ngClass
    class = '';
    valueChange = new EventEmitter();
    change = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    selectedValue = null;
    isFocused = false;
    _generatedId;
    subscription = null;
    onChange = (_) => { };
    onTouched = () => { };
    // HostBinding para soporte de ngClass
    get hostClasses() {
        return this.class || '';
    }
    constructor(radioGroupService) {
        this.radioGroupService = radioGroupService;
        this._generatedId = `sa-radio-${Math.random().toString(36).substr(2, 9)}`;
    }
    ngOnInit() {
        // Suscribirse a cambios de otros radio buttons del mismo grupo
        this.subscription = this.radioGroupService.change$.subscribe(change => {
            if (change.name === this.name && change.value !== this.value) {
                // Otro radio del mismo grupo fue seleccionado, deseleccionar este
                this.selectedValue = change.value;
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    get radioId() {
        return this.id || this._generatedId;
    }
    get isChecked() {
        return this.selectedValue === this.value;
    }
    get radioClasses() {
        const sizeMap = {
            'sm': 'form-check-sm',
            'md': '', // Bootstrap default
            'lg': 'form-check-lg'
        };
        const baseClasses = ['form-check-input'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            // Note: Bootstrap doesn't have built-in size classes for radios
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
        this.selectedValue = value;
        // Notificar a otros radio buttons del mismo grupo cuando el valor viene del formulario
        if (value === this.value && this.name) {
            setTimeout(() => {
                this.radioGroupService.notifyChange(this.name, value);
            }, 0);
        }
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
    onRadioChange(event) {
        const target = event.target;
        if (target.checked) {
            this.selectedValue = this.value;
            this.onChange(this.selectedValue);
            this.valueChange.emit(this.selectedValue);
            this.change.emit(event);
            // Notificar a otros radio buttons del mismo grupo
            if (this.name) {
                this.radioGroupService.notifyChange(this.name, this.value);
            }
        }
    }
    onRadioFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onRadioBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioComponent, deps: [{ token: i1.SaRadioGroupService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaRadioComponent, selector: "sa-radio", inputs: { value: "value", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", readonly: "readonly", id: "id", name: "name", class: "class" }, outputs: { valueChange: "valueChange", change: "change", focus: "focus", blur: "blur" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaRadioComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"radioId\"\r\n      [name]=\"name\"\r\n      [class]=\"radioClasses\"\r\n      type=\"radio\"\r\n      [checked]=\"isChecked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      (change)=\"onRadioChange($event)\"\r\n      (focus)=\"onRadioFocus($event)\"\r\n      (blur)=\"onRadioBlur($event)\"\r\n    />\r\n    <label *ngIf=\"shouldShowLabel\" [for]=\"radioId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:auto;box-sizing:border-box}:host:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:16px;height:16px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:50%;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;cursor:pointer}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:14px!important;height:14px!important}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:20px!important;height:20px!important}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:16px!important;height:16px!important}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:14px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-radio', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaRadioComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"radioId\"\r\n      [name]=\"name\"\r\n      [class]=\"radioClasses\"\r\n      type=\"radio\"\r\n      [checked]=\"isChecked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      (change)=\"onRadioChange($event)\"\r\n      (focus)=\"onRadioFocus($event)\"\r\n      (blur)=\"onRadioBlur($event)\"\r\n    />\r\n    <label *ngIf=\"shouldShowLabel\" [for]=\"radioId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:auto;box-sizing:border-box}:host:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:16px;height:16px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:50%;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;cursor:pointer}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:14px!important;height:14px!important}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:20px!important;height:20px!important}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:16px!important;height:16px!important}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:14px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"] }]
        }], ctorParameters: () => [{ type: i1.SaRadioGroupService }], propDecorators: { value: [{
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
            }], class: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXJhZGlvL3NhLXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBb0J6RSxNQUFNLE9BQU8sZ0JBQWdCO0lBcURQO0lBcERYLEtBQUssR0FBUSxFQUFFLENBQUM7SUFDaEIsSUFBSSxHQUFjLElBQUksQ0FBQztJQUN2QixNQUFNLEdBQWdCLFNBQVMsQ0FBQztJQUNoQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRXBCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZLEtBQUssQ0FBQztJQUNwQyxJQUNJLFNBQVMsQ0FBQyxLQUFvQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDUSxVQUFVLEdBQVcsRUFBRSxDQUFDO0lBQ3hCLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFDdkIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsRUFBRSxHQUFXLEVBQUUsQ0FBQztJQUNoQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBRTNCLHVCQUF1QjtJQUNkLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFbEIsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDdEMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFDbkMsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDdkMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFFaEQsYUFBYSxHQUFRLElBQUksQ0FBQztJQUMxQixTQUFTLEdBQVksS0FBSyxDQUFDO0lBQ25CLFlBQVksQ0FBUztJQUNyQixZQUFZLEdBQXdCLElBQUksQ0FBQztJQUV6QyxRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUMxQixTQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRTdCLHNDQUFzQztJQUN0QyxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFvQixpQkFBc0M7UUFBdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUUsQ0FBQztJQUVELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDN0Qsa0VBQWtFO2dCQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxNQUFNLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxlQUFlO1lBQ3JCLElBQUksRUFBRSxFQUFFLEVBQUUsb0JBQW9CO1lBQzlCLElBQUksRUFBRSxlQUFlO1NBQ3RCLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFekMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDcEQsZ0VBQWdFO1lBQ2hFLDJCQUEyQjtRQUM3QixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDOUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsMkJBQTJCO1lBQ2pDLElBQUksRUFBRSwyQkFBMkI7WUFDakMsSUFBSSxFQUFFLDJCQUEyQjtTQUNsQyxDQUFDO1FBRUYsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBMkIsQ0FBQztRQUVoRSxtREFBbUQ7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxjQUFjLENBQUM7UUFDNUIsQ0FBQztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsbURBQW1EO1FBQ25ELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELGlHQUFpRztRQUNqRyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLGVBQWU7WUFDckIsSUFBSSxFQUFFLEVBQUUsRUFBRSxvQkFBb0I7WUFDOUIsSUFBSSxFQUFFLGVBQWU7U0FDdEIsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsdUZBQXVGO1FBQ3ZGLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFZO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQ2hELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEIsa0RBQWtEO1lBQ2xELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7d0dBaE1VLGdCQUFnQjs0RkFBaEIsZ0JBQWdCLHVjQVJoQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9DLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkNuQkgsNDJCQXlCQTs7NEZESmEsZ0JBQWdCO2tCQWI1QixTQUFTOytCQUNFLFVBQVUsaUJBR0wsaUJBQWlCLENBQUMsU0FBUyxhQUMvQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQzs0QkFDL0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7d0ZBR1EsS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUlGLE9BQU87c0JBRFYsS0FBSztnQkFVRixTQUFTO3NCQURaLEtBQUs7Z0JBT0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBWUgsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNhUmFkaW9Hcm91cFNlcnZpY2UgfSBmcm9tICcuL3NhLXJhZGlvLWdyb3VwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIFJhZGlvU2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgUmFkaW9TdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS1yYWRpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zYS1yYWRpby5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhUmFkaW9Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSAnJztcclxuICBASW5wdXQoKSBzaXplOiBSYWRpb1NpemUgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogUmFkaW9TdGF0dXMgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIHByaXZhdGUgX25vTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBub0xhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9ub0xhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IG5vTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9MYWJlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hpZGVMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhpZGVMYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5faGlkZUxhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGhpZGVMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlTGFiZWw7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIC8vIFNvcG9ydGUgcGFyYSBuZ0NsYXNzXHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIHNlbGVjdGVkVmFsdWU6IGFueSA9IG51bGw7XHJcbiAgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVkSWQ6IHN0cmluZztcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICAvLyBIb3N0QmluZGluZyBwYXJhIHNvcG9ydGUgZGUgbmdDbGFzc1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJhZGlvR3JvdXBTZXJ2aWNlOiBTYVJhZGlvR3JvdXBTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9nZW5lcmF0ZWRJZCA9IGBzYS1yYWRpby0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBTdXNjcmliaXJzZSBhIGNhbWJpb3MgZGUgb3Ryb3MgcmFkaW8gYnV0dG9ucyBkZWwgbWlzbW8gZ3J1cG9cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yYWRpb0dyb3VwU2VydmljZS5jaGFuZ2UkLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xyXG4gICAgICBpZiAoY2hhbmdlLm5hbWUgPT09IHRoaXMubmFtZSAmJiBjaGFuZ2UudmFsdWUgIT09IHRoaXMudmFsdWUpIHtcclxuICAgICAgICAvLyBPdHJvIHJhZGlvIGRlbCBtaXNtbyBncnVwbyBmdWUgc2VsZWNjaW9uYWRvLCBkZXNlbGVjY2lvbmFyIGVzdGVcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByYWRpb0lkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pZCB8fCB0aGlzLl9nZW5lcmF0ZWRJZDtcclxuICB9XHJcblxyXG4gIGdldCBpc0NoZWNrZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlID09PSB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJhZGlvQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tY2hlY2stc20nLFxyXG4gICAgICAnbWQnOiAnJywgLy8gQm9vdHN0cmFwIGRlZmF1bHRcclxuICAgICAgJ2xnJzogJ2Zvcm0tY2hlY2stbGcnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNoZWNrLWlucHV0J107XHJcbiAgICBcclxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xyXG4gICAgICAvLyBOb3RlOiBCb290c3RyYXAgZG9lc24ndCBoYXZlIGJ1aWx0LWluIHNpemUgY2xhc3NlcyBmb3IgcmFkaW9zXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIENTU1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tY2hlY2stbGFiZWwgbGFiZWwtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1sZydcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxldCBjbGFzc2VzID0gc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLW1kJztcclxuICAgIFxyXG4gICAgLy8gU2kgZXMgbm9MYWJlbCwgYWdyZWdhciBjbGFzZSBwYXJhIGxhYmVsIGZhbnRhc21hXHJcbiAgICBpZiAodGhpcy5ub0xhYmVsICYmICF0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICBjbGFzc2VzICs9ICcgZ2hvc3QtbGFiZWwnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGdldCBzaG91bGRTaG93TGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBTaSBoaWRlTGFiZWwgZXN0w6EgYWN0aXZvLCBudW5jYSBtb3N0cmFyIGVsIGxhYmVsXHJcbiAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gQ29tcG9ydGFtaWVudG8gb3JpZ2luYWw6IG1vc3RyYXIgc2kgaGF5IGxhYmVsIG8gc2kgbm9MYWJlbCBlc3TDoSBhY3Rpdm8gKHBhcmEgZXNwYWNpbyBmYW50YXNtYSlcclxuICAgIHJldHVybiAhIXRoaXMubGFiZWwgfHwgdGhpcy5ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRhaW5lckNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWNoZWNrLXNtJyxcclxuICAgICAgJ21kJzogJycsIC8vIEJvb3RzdHJhcCBkZWZhdWx0XHJcbiAgICAgICdsZyc6ICdmb3JtLWNoZWNrLWxnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS1jaGVjayddO1xyXG4gICAgXHJcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgLy8gTm90aWZpY2FyIGEgb3Ryb3MgcmFkaW8gYnV0dG9ucyBkZWwgbWlzbW8gZ3J1cG8gY3VhbmRvIGVsIHZhbG9yIHZpZW5lIGRlbCBmb3JtdWxhcmlvXHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMudmFsdWUgJiYgdGhpcy5uYW1lKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmFkaW9Hcm91cFNlcnZpY2Uubm90aWZ5Q2hhbmdlKHRoaXMubmFtZSwgdmFsdWUpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvblJhZGlvQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAodGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XHJcblxyXG4gICAgICAvLyBOb3RpZmljYXIgYSBvdHJvcyByYWRpbyBidXR0b25zIGRlbCBtaXNtbyBncnVwb1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7XHJcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwU2VydmljZS5ub3RpZnlDaGFuZ2UodGhpcy5uYW1lLCB0aGlzLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SYWRpb0ZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25SYWRpb0JsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgPGRpdiBbY2xhc3NdPVwiY29udGFpbmVyQ2xhc3Nlc1wiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtpZF09XCJyYWRpb0lkXCJcclxuICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgIFtjbGFzc109XCJyYWRpb0NsYXNzZXNcIlxyXG4gICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICAoY2hhbmdlKT1cIm9uUmFkaW9DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJvblJhZGlvRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChibHVyKT1cIm9uUmFkaW9CbHVyKCRldmVudClcIlxyXG4gICAgLz5cclxuICAgIDxsYWJlbCAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFtmb3JdPVwicmFkaW9JZFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cclxuICAgICAge3sgbGFiZWwgfX1cclxuICAgICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7IGVycm9yVGV4dCB9fTwvZGl2PlxyXG48L2Rpdj5cclxuIl19