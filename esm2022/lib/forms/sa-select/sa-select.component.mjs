import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SaSelectComponent {
    value = '';
    options = [];
    bindValue = 'value';
    bindLabel = 'label';
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
    _required = false;
    set required(value) {
        this._required = value === true || value === 'true';
    }
    get required() {
        return this._required;
    }
    _readonly = false;
    set readonly(value) {
        this._readonly = value === true || value === 'true';
    }
    get readonly() {
        return this._readonly;
    }
    _disabled = false;
    set disabled(value) {
        this._disabled = value === true || value === 'true';
    }
    get disabled() {
        return this._disabled;
    }
    id = '';
    name = '';
    placeholder = '--Seleccione--';
    // Soporte para ngClass
    class = '';
    _showPlaceholder = true;
    set showPlaceholder(value) {
        this._showPlaceholder = value === true || value === 'true';
    }
    get showPlaceholder() {
        return this._showPlaceholder;
    }
    valueChange = new EventEmitter();
    change = new EventEmitter();
    focusin = new EventEmitter();
    focusout = new EventEmitter();
    isFocused = false;
    onChange = (_) => { };
    onTouched = () => { };
    // HostBinding para soporte de ngClass
    get hostClasses() {
        return this.class || '';
    }
    get selectClasses() {
        const sizeMap = {
            'sm': 'form-select-sm',
            'md': 'form-select-md',
            'lg': 'form-select-lg'
        };
        const baseClasses = ['form-select'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
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
            'sm': 'form-label label-sm',
            'md': 'form-label label-md',
            'lg': 'form-label label-lg'
        };
        const baseClasses = sizeMap[this.size] || 'form-label label-md';
        // Si es noLabel, agregar clase para label fantasma
        if (this.noLabel && !this.hideLabel) {
            return `${baseClasses} ghost-label`;
        }
        return baseClasses;
    }
    get shouldShowLabel() {
        // Si hideLabel está activo, nunca mostrar el label
        if (this.hideLabel) {
            return false;
        }
        // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
        return !!this.label || this.noLabel;
    }
    get hasValidSelection() {
        if (!this.showPlaceholder)
            return true;
        return this.value !== '' && this.value !== null && this.value !== undefined;
    }
    writeValue(value) {
        this.value = value ?? '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
    }
    onModelChange(value) {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(value);
        // Marcar como touched cuando el usuario interactúa
        if (!this.isFocused) {
            this.onTouched();
        }
    }
    onSelectChange(event) {
        this.change.emit(event);
    }
    onSelectFocus(event) {
        this.isFocused = true;
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.focusin.emit(event);
    }
    onSelectBlur(event) {
        this.isFocused = false;
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.onTouched();
        this.focusout.emit(event);
    }
    getOptionValue(option) {
        return option[this.bindValue] ?? option.value ?? '';
    }
    getOptionLabel(option) {
        return option[this.bindLabel] ?? option.label ?? '';
    }
    isOptionDisabled(option) {
        return option.disabled ?? false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaSelectComponent, selector: "sa-select", inputs: { value: "value", options: "options", bindValue: "bindValue", bindLabel: "bindLabel", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", placeholder: "placeholder", class: "class", showPlaceholder: "showPlaceholder" }, outputs: { valueChange: "valueChange", change: "change", focusin: "focusin", focusout: "focusout" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaSelectComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    (change)=\"onSelectChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focusin)=\"onSelectFocus($event)\"\r\n    (focusout)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"getOptionValue(option)\"\r\n      [disabled]=\"isOptionDisabled(option)\"\r\n    >\r\n      {{ getOptionLabel(option) }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 36px 8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none;-webkit-appearance:none;-moz-appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444!important}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:23px;padding:4px 28px 4px 8px!important;font-size:11px!important;border-radius:5px;background-position:right 8px center;background-size:12px 9px}:host .form-select.form-select-md{min-height:30px;padding:8px 36px 8px 12px;font-size:13px;border-radius:6px;background-position:right 12px center;background-size:16px 12px}:host .form-select.form-select-lg{min-height:37px;padding:10px 44px 10px 14px;font-size:15px;border-radius:7px;background-position:right 14px center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:8px 12px;border:none;outline:none}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host select{outline:none!important}:host select::-ms-expand{display:none}:host select::-webkit-appearance{border-radius:6px}:host select::-moz-appearance{border-radius:6px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}:host select{box-shadow:none!important;outline:none!important}:host option{background-color:#fff!important;color:#212529!important}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-select', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaSelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    (change)=\"onSelectChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focusin)=\"onSelectFocus($event)\"\r\n    (focusout)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"getOptionValue(option)\"\r\n      [disabled]=\"isOptionDisabled(option)\"\r\n    >\r\n      {{ getOptionLabel(option) }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 36px 8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none;-webkit-appearance:none;-moz-appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444!important}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:23px;padding:4px 28px 4px 8px!important;font-size:11px!important;border-radius:5px;background-position:right 8px center;background-size:12px 9px}:host .form-select.form-select-md{min-height:30px;padding:8px 36px 8px 12px;font-size:13px;border-radius:6px;background-position:right 12px center;background-size:16px 12px}:host .form-select.form-select-lg{min-height:37px;padding:10px 44px 10px 14px;font-size:15px;border-radius:7px;background-position:right 14px center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:8px 12px;border:none;outline:none}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host select{outline:none!important}:host select::-ms-expand{display:none}:host select::-webkit-appearance{border-radius:6px}:host select::-moz-appearance{border-radius:6px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}:host select{box-shadow:none!important;outline:none!important}:host option{background-color:#fff!important;color:#212529!important}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], options: [{
                type: Input
            }], bindValue: [{
                type: Input
            }], bindLabel: [{
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
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], class: [{
                type: Input
            }], showPlaceholder: [{
                type: Input
            }], valueChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Etc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXNlbGVjdC9zYS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQXdCekUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixLQUFLLEdBQW9CLEVBQUUsQ0FBQztJQUM1QixPQUFPLEdBQTJCLEVBQUUsQ0FBQztJQUNyQyxTQUFTLEdBQVcsT0FBTyxDQUFDO0lBQzVCLFNBQVMsR0FBVyxPQUFPLENBQUM7SUFDNUIsSUFBSSxHQUFlLElBQUksQ0FBQztJQUN4QixNQUFNLEdBQWlCLFNBQVMsQ0FBQztJQUNqQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRXBCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZLEtBQUssQ0FBQztJQUNwQyxJQUNJLFNBQVMsQ0FBQyxLQUFvQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDUSxVQUFVLEdBQVcsRUFBRSxDQUFDO0lBQ3hCLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFFeEIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUNuQyxJQUNJLFFBQVEsQ0FBQyxLQUFvQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxTQUFTLEdBQVksS0FBSyxDQUFDO0lBQ25DLElBQ0ksUUFBUSxDQUFDLEtBQW9CO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVPLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFDbkMsSUFDSSxRQUFRLENBQUMsS0FBb0I7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRVEsRUFBRSxHQUFXLEVBQUUsQ0FBQztJQUNoQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsR0FBVyxnQkFBZ0IsQ0FBQztJQUVoRCx1QkFBdUI7SUFDZCxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRXBCLGdCQUFnQixHQUFZLElBQUksQ0FBQztJQUN6QyxJQUNJLGVBQWUsQ0FBQyxLQUFvQjtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQzdELENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVTLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQUNsRCxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUNuQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN6QyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVwRCxTQUFTLEdBQVksS0FBSyxDQUFDO0lBRW5CLFFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQzFCLFNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFN0Isc0NBQXNDO0lBQ3RDLElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLElBQUksRUFBRSxnQkFBZ0I7U0FDdkIsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFcEMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzlDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNyQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLHFCQUFxQjtZQUMzQixJQUFJLEVBQUUscUJBQXFCO1lBQzNCLElBQUksRUFBRSxxQkFBcUI7U0FDNUIsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQXFCLENBQUM7UUFFaEUsbURBQW1EO1FBQ25ELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQyxPQUFPLEdBQUcsV0FBVyxjQUFjLENBQUM7UUFDdEMsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsbURBQW1EO1FBQ25ELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELGlHQUFpRztRQUNqRyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFzQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdCLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFZO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBaUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsdURBQXVEO1FBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBaUI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsdURBQXVEO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQVc7UUFDeEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxjQUFjLENBQUMsTUFBVztRQUN4QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQVc7UUFDMUIsT0FBTyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztJQUNsQyxDQUFDO3dHQW5NVSxpQkFBaUI7NEZBQWpCLGlCQUFpQix3bEJBUmpCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEQsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLDBCQ3ZCSCx1bUNBZ0NNOzs0RkRQTyxpQkFBaUI7a0JBYjdCLFNBQVM7K0JBQ0UsV0FBVyxpQkFHTixpQkFBaUIsQ0FBQyxTQUFTLGFBQy9CO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFHUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFJRixPQUFPO3NCQURWLEtBQUs7Z0JBVUYsU0FBUztzQkFEWixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFJRixRQUFRO3NCQURYLEtBQUs7Z0JBVUYsUUFBUTtzQkFEWCxLQUFLO2dCQVVGLFFBQVE7c0JBRFgsS0FBSztnQkFRRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUlGLGVBQWU7c0JBRGxCLEtBQUs7Z0JBUUksV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQVNILFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3RTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBTZWxlY3RTdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPcHRpb24ge1xyXG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2Etc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2Etc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zYS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTYVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IG51bWJlciA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFNlbGVjdE9wdGlvbltdIHwgYW55W10gPSBbXTtcclxuICBASW5wdXQoKSBiaW5kVmFsdWU6IHN0cmluZyA9ICd2YWx1ZSc7XHJcbiAgQElucHV0KCkgYmluZExhYmVsOiBzdHJpbmcgPSAnbGFiZWwnO1xyXG4gIEBJbnB1dCgpIHNpemU6IFNlbGVjdFNpemUgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogU2VsZWN0U3RhdHVzID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBcclxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBoaWRlTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2hpZGVMYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBoaWRlTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsO1xyXG4gIH1cclxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xyXG4gIH1cclxuICBcclxuICBwcml2YXRlIF9yZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9yZWFkb25seSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCByZWFkb25seSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yZWFkb25seTtcclxuICB9XHJcbiAgXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJy0tU2VsZWNjaW9uZS0tJztcclxuICBcclxuICAvLyBTb3BvcnRlIHBhcmEgbmdDbGFzc1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBcclxuICBwcml2YXRlIF9zaG93UGxhY2Vob2xkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNob3dQbGFjZWhvbGRlcih2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fc2hvd1BsYWNlaG9sZGVyID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IHNob3dQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93UGxhY2Vob2xkZXI7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNpbiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgLy8gSG9zdEJpbmRpbmcgcGFyYSBzb3BvcnRlIGRlIG5nQ2xhc3NcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLXNlbGVjdC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLXNlbGVjdC1tZCcsXHJcbiAgICAgICdsZyc6ICdmb3JtLXNlbGVjdC1sZydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tc2VsZWN0J107XHJcblxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWxhYmVsIGxhYmVsLXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1sYWJlbCBsYWJlbC1sZydcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWxhYmVsIGxhYmVsLW1kJztcclxuICAgIFxyXG4gICAgLy8gU2kgZXMgbm9MYWJlbCwgYWdyZWdhciBjbGFzZSBwYXJhIGxhYmVsIGZhbnRhc21hXHJcbiAgICBpZiAodGhpcy5ub0xhYmVsICYmICF0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICByZXR1cm4gYCR7YmFzZUNsYXNzZXN9IGdob3N0LWxhYmVsYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3VsZFNob3dMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIC8vIFNpIGhpZGVMYWJlbCBlc3TDoSBhY3Rpdm8sIG51bmNhIG1vc3RyYXIgZWwgbGFiZWxcclxuICAgIGlmICh0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBDb21wb3J0YW1pZW50byBvcmlnaW5hbDogbW9zdHJhciBzaSBoYXkgbGFiZWwgbyBzaSBub0xhYmVsIGVzdMOhIGFjdGl2byAocGFyYSBlc3BhY2lvIGZhbnRhc21hKVxyXG4gICAgcmV0dXJuICEhdGhpcy5sYWJlbCB8fCB0aGlzLm5vTGFiZWw7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzVmFsaWRTZWxlY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1BsYWNlaG9sZGVyKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSAnJyAmJiB0aGlzLnZhbHVlICE9PSBudWxsICYmIHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8/ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIFxyXG4gICAgLy8gTWFyY2FyIGNvbW8gdG91Y2hlZCBjdWFuZG8gZWwgdXN1YXJpbyBpbnRlcmFjdMO6YVxyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Rm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW5pciBxdWUgZWwgZXZlbnRvIGJ1cmJ1amVlIGZ1ZXJhIGRlbCBTaGFkb3cgRE9NXHJcbiAgICB0aGlzLmZvY3VzaW4uZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuZm9jdXNvdXQuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25WYWx1ZShvcHRpb246IGFueSk6IHN0cmluZyB8IG51bWJlciB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuYmluZFZhbHVlXSA/PyBvcHRpb24udmFsdWUgPz8gJyc7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25MYWJlbChvcHRpb246IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuYmluZExhYmVsXSA/PyBvcHRpb24ubGFiZWwgPz8gJyc7XHJcbiAgfVxyXG5cclxuICBpc09wdGlvbkRpc2FibGVkKG9wdGlvbjogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gb3B0aW9uLmRpc2FibGVkID8/IGZhbHNlO1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgPGxhYmVsICpuZ0lmPVwic2hvdWxkU2hvd0xhYmVsXCIgW2Zvcl09XCJpZFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cclxuICAgIHt7IGxhYmVsIH19XHJcbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuICBcclxuICA8c2VsZWN0XHJcbiAgICBbaWRdPVwiaWRcIlxyXG4gICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICBbY2xhc3NdPVwic2VsZWN0Q2xhc3Nlc1wiXHJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAoY2hhbmdlKT1cIm9uU2VsZWN0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXHJcbiAgICAoZm9jdXNpbik9XCJvblNlbGVjdEZvY3VzKCRldmVudClcIlxyXG4gICAgKGZvY3Vzb3V0KT1cIm9uU2VsZWN0Qmx1cigkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8b3B0aW9uICpuZ0lmPVwic2hvd1BsYWNlaG9sZGVyXCIgdmFsdWU9XCJcIiBbZGlzYWJsZWRdPVwicmVxdWlyZWRcIj5cclxuICAgICAge3sgcGxhY2Vob2xkZXIgfX1cclxuICAgIDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvblxyXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxyXG4gICAgICBbdmFsdWVdPVwiZ2V0T3B0aW9uVmFsdWUob3B0aW9uKVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJpc09wdGlvbkRpc2FibGVkKG9wdGlvbilcIlxyXG4gICAgPlxyXG4gICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XHJcbiAgICA8L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICBcclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJmb3JtLXRleHRcIj57eyBoZWxwZXJUZXh0IH19PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XHJcbjwvZGl2PiJdfQ==