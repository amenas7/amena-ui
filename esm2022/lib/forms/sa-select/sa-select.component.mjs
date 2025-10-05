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
    focus = new EventEmitter();
    blur = new EventEmitter();
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
        this.focus.emit(event);
    }
    onSelectBlur(event) {
        this.isFocused = false;
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.onTouched();
        this.blur.emit(event);
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaSelectComponent, selector: "sa-select", inputs: { value: "value", options: "options", bindValue: "bindValue", bindLabel: "bindLabel", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", placeholder: "placeholder", class: "class", showPlaceholder: "showPlaceholder" }, outputs: { valueChange: "valueChange", change: "change", focus: "focus", blur: "blur" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
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
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Etc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXNlbGVjdC9zYS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQXdCekUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixLQUFLLEdBQW9CLEVBQUUsQ0FBQztJQUM1QixPQUFPLEdBQTJCLEVBQUUsQ0FBQztJQUNyQyxTQUFTLEdBQVcsT0FBTyxDQUFDO0lBQzVCLFNBQVMsR0FBVyxPQUFPLENBQUM7SUFDNUIsSUFBSSxHQUFlLElBQUksQ0FBQztJQUN4QixNQUFNLEdBQWlCLFNBQVMsQ0FBQztJQUNqQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRXBCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZLEtBQUssQ0FBQztJQUNwQyxJQUNJLFNBQVMsQ0FBQyxLQUFvQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssS0FB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RixRQUFRO3NCQURYLEtBQUs7Z0JBVUYsUUFBUTtzQkFEWCxLQUFLO2dCQVVGLFFBQVE7c0JBRFgsS0FBSztnQkFRRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUlGLGVBQWU7c0JBRGxCLEtBQUs7Z0JBUUksV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFTSCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2VsZWN0U2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgU2VsZWN0U3RhdHVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T3B0aW9uIHtcclxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2Etc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgPSAnJztcclxuICBASW5wdXQoKSBvcHRpb25zOiBTZWxlY3RPcHRpb25bXSB8IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgYmluZFZhbHVlOiBzdHJpbmcgPSAndmFsdWUnO1xyXG4gIEBJbnB1dCgpIGJpbmRMYWJlbDogc3RyaW5nID0gJ2xhYmVsJztcclxuICBASW5wdXQoKSBzaXplOiBTZWxlY3RTaXplID0gJ21kJztcclxuICBASW5wdXQoKSBzdGF0dXM6IFNlbGVjdFN0YXR1cyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfbm9MYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5vTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX25vTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgbm9MYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZUxhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgaGlkZUxhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9oaWRlTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgaGlkZUxhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVMYWJlbDtcclxuICB9XHJcbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcclxuICBcclxuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcclxuICB9XHJcbiAgXHJcbiAgcHJpdmF0ZSBfcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCByZWFkb25seSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fcmVhZG9ubHkgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuICBcclxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICctLVNlbGVjY2lvbmUtLSc7XHJcbiAgXHJcbiAgLy8gU29wb3J0ZSBwYXJhIG5nQ2xhc3NcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfc2hvd1BsYWNlaG9sZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBzaG93UGxhY2Vob2xkZXIodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX3Nob3dQbGFjZWhvbGRlciA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIC8vIEhvc3RCaW5kaW5nIHBhcmEgc29wb3J0ZSBkZSBuZ0NsYXNzXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzcyB8fCAnJztcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1zZWxlY3Qtc20nLFxyXG4gICAgICAnbWQnOiAnZm9ybS1zZWxlY3QtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1zZWxlY3QtbGcnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLXNlbGVjdCddO1xyXG5cclxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1sYWJlbCBsYWJlbC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLWxhYmVsIGxhYmVsLW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbGcnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IHNpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1sYWJlbCBsYWJlbC1tZCc7XHJcbiAgICBcclxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxyXG4gICAgaWYgKHRoaXMubm9MYWJlbCAmJiAhdGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgcmV0dXJuIGAke2Jhc2VDbGFzc2VzfSBnaG9zdC1sYWJlbGA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBiYXNlQ2xhc3NlcztcclxuICB9XHJcblxyXG4gIGdldCBzaG91bGRTaG93TGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBTaSBoaWRlTGFiZWwgZXN0w6EgYWN0aXZvLCBudW5jYSBtb3N0cmFyIGVsIGxhYmVsXHJcbiAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gQ29tcG9ydGFtaWVudG8gb3JpZ2luYWw6IG1vc3RyYXIgc2kgaGF5IGxhYmVsIG8gc2kgbm9MYWJlbCBlc3TDoSBhY3Rpdm8gKHBhcmEgZXNwYWNpbyBmYW50YXNtYSlcclxuICAgIHJldHVybiAhIXRoaXMubGFiZWwgfHwgdGhpcy5ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc1ZhbGlkU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLnNob3dQbGFjZWhvbGRlcikgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gJycgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/PyAnJztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICBcclxuICAgIC8vIE1hcmNhciBjb21vIHRvdWNoZWQgY3VhbmRvIGVsIHVzdWFyaW8gaW50ZXJhY3TDumFcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxyXG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Qmx1cihldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW5pciBxdWUgZWwgZXZlbnRvIGJ1cmJ1amVlIGZ1ZXJhIGRlbCBTaGFkb3cgRE9NXHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uVmFsdWUob3B0aW9uOiBhbnkpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIG9wdGlvblt0aGlzLmJpbmRWYWx1ZV0gPz8gb3B0aW9uLnZhbHVlID8/ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9wdGlvblt0aGlzLmJpbmRMYWJlbF0gPz8gb3B0aW9uLmxhYmVsID8/ICcnO1xyXG4gIH1cclxuXHJcbiAgaXNPcHRpb25EaXNhYmxlZChvcHRpb246IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5kaXNhYmxlZCA/PyBmYWxzZTtcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gIDxsYWJlbCAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFtmb3JdPVwiaWRcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcbiAgXHJcbiAgPHNlbGVjdFxyXG4gICAgW2lkXT1cImlkXCJcclxuICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgW2NsYXNzXT1cInNlbGVjdENsYXNzZXNcIlxyXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxyXG4gICAgKGNoYW5nZSk9XCJvblNlbGVjdENoYW5nZSgkZXZlbnQpXCJcclxuICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxyXG4gICAgKGZvY3VzaW4pPVwib25TZWxlY3RGb2N1cygkZXZlbnQpXCJcclxuICAgIChmb2N1c291dCk9XCJvblNlbGVjdEJsdXIoJGV2ZW50KVwiXHJcbiAgPlxyXG4gICAgPG9wdGlvbiAqbmdJZj1cInNob3dQbGFjZWhvbGRlclwiIHZhbHVlPVwiXCIgW2Rpc2FibGVkXT1cInJlcXVpcmVkXCI+XHJcbiAgICAgIHt7IHBsYWNlaG9sZGVyIH19XHJcbiAgICA8L29wdGlvbj5cclxuICAgIDxvcHRpb25cclxuICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCJcclxuICAgICAgW3ZhbHVlXT1cImdldE9wdGlvblZhbHVlKG9wdGlvbilcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiaXNPcHRpb25EaXNhYmxlZChvcHRpb24pXCJcclxuICAgID5cclxuICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxyXG4gICAgPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgXHJcbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7IGVycm9yVGV4dCB9fTwvZGl2PlxyXG48L2Rpdj4iXX0=