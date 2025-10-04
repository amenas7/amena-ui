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
        this.focus.emit(event);
    }
    onSelectBlur(event) {
        this.isFocused = false;
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
        ], ngImport: i0, template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    (change)=\"onSelectChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focus)=\"onSelectFocus($event)\"\r\n    (blur)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"getOptionValue(option)\"\r\n      [disabled]=\"isOptionDisabled(option)\"\r\n    >\r\n      {{ getOptionLabel(option) }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 36px 8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none;-webkit-appearance:none;-moz-appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444!important}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:23px;padding:4px 28px 4px 8px!important;font-size:11px!important;border-radius:5px;background-position:right 8px center;background-size:12px 9px}:host .form-select.form-select-md{min-height:30px;padding:8px 36px 8px 12px;font-size:13px;border-radius:6px;background-position:right 12px center;background-size:16px 12px}:host .form-select.form-select-lg{min-height:37px;padding:10px 44px 10px 14px;font-size:15px;border-radius:7px;background-position:right 14px center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:8px 12px;border:none;outline:none}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host select{outline:none!important}:host select::-ms-expand{display:none}:host select::-webkit-appearance{border-radius:6px}:host select::-moz-appearance{border-radius:6px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}:host select{box-shadow:none!important;outline:none!important}:host option{background-color:#fff!important;color:#212529!important}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-select', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaSelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    (change)=\"onSelectChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focus)=\"onSelectFocus($event)\"\r\n    (blur)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"getOptionValue(option)\"\r\n      [disabled]=\"isOptionDisabled(option)\"\r\n    >\r\n      {{ getOptionLabel(option) }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 36px 8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none;-webkit-appearance:none;-moz-appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444!important}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:23px;padding:4px 28px 4px 8px!important;font-size:11px!important;border-radius:5px;background-position:right 8px center;background-size:12px 9px}:host .form-select.form-select-md{min-height:30px;padding:8px 36px 8px 12px;font-size:13px;border-radius:6px;background-position:right 12px center;background-size:16px 12px}:host .form-select.form-select-lg{min-height:37px;padding:10px 44px 10px 14px;font-size:15px;border-radius:7px;background-position:right 14px center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:8px 12px;border:none;outline:none}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host select{outline:none!important}:host select::-ms-expand{display:none}:host select::-webkit-appearance{border-radius:6px}:host select::-moz-appearance{border-radius:6px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}:host select{box-shadow:none!important;outline:none!important}:host option{background-color:#fff!important;color:#212529!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Etc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXNlbGVjdC9zYS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQXdCekUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixLQUFLLEdBQW9CLEVBQUUsQ0FBQztJQUM1QixPQUFPLEdBQTJCLEVBQUUsQ0FBQztJQUNyQyxTQUFTLEdBQVcsT0FBTyxDQUFDO0lBQzVCLFNBQVMsR0FBVyxPQUFPLENBQUM7SUFDNUIsSUFBSSxHQUFlLElBQUksQ0FBQztJQUN4QixNQUFNLEdBQWlCLFNBQVMsQ0FBQztJQUNqQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRXBCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZLEtBQUssQ0FBQztJQUNwQyxJQUNJLFNBQVMsQ0FBQyxLQUFvQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssS0FB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QUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFJRixlQUFlO3NCQURsQixLQUFLO2dCQVFJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBU0gsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCB0eXBlIFNlbGVjdFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XHJcbmV4cG9ydCB0eXBlIFNlbGVjdFN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9wdGlvbiB7XHJcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NhLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyID0gJyc7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2VsZWN0T3B0aW9uW10gfCBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGJpbmRWYWx1ZTogc3RyaW5nID0gJ3ZhbHVlJztcclxuICBASW5wdXQoKSBiaW5kTGFiZWw6IHN0cmluZyA9ICdsYWJlbCc7XHJcbiAgQElucHV0KCkgc2l6ZTogU2VsZWN0U2l6ZSA9ICdtZCc7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBTZWxlY3RTdGF0dXMgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIHByaXZhdGUgX25vTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBub0xhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9ub0xhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IG5vTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9MYWJlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hpZGVMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhpZGVMYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5faGlkZUxhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGhpZGVMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlTGFiZWw7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgX3JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX3JlYWRvbmx5ID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlYWRvbmx5O1xyXG4gIH1cclxuICBcclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcbiAgXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnLS1TZWxlY2Npb25lLS0nO1xyXG4gIFxyXG4gIC8vIFNvcG9ydGUgcGFyYSBuZ0NsYXNzXHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIHByaXZhdGUgX3Nob3dQbGFjZWhvbGRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBzZXQgc2hvd1BsYWNlaG9sZGVyKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9zaG93UGxhY2Vob2xkZXIgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgc2hvd1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICAvLyBIb3N0QmluZGluZyBwYXJhIHNvcG9ydGUgZGUgbmdDbGFzc1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tc2VsZWN0LXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tc2VsZWN0LW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tc2VsZWN0LWxnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS1zZWxlY3QnXTtcclxuXHJcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyB8fCB0aGlzLmVycm9yVGV4dCkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tbGFiZWwgbGFiZWwtc20nLFxyXG4gICAgICAnbWQnOiAnZm9ybS1sYWJlbCBsYWJlbC1tZCcsXHJcbiAgICAgICdsZyc6ICdmb3JtLWxhYmVsIGxhYmVsLWxnJ1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBzaXplTWFwW3RoaXMuc2l6ZV0gfHwgJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnO1xyXG4gICAgXHJcbiAgICAvLyBTaSBlcyBub0xhYmVsLCBhZ3JlZ2FyIGNsYXNlIHBhcmEgbGFiZWwgZmFudGFzbWFcclxuICAgIGlmICh0aGlzLm5vTGFiZWwgJiYgIXRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIHJldHVybiBgJHtiYXNlQ2xhc3Nlc30gZ2hvc3QtbGFiZWxgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvdWxkU2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gU2kgaGlkZUxhYmVsIGVzdMOhIGFjdGl2bywgbnVuY2EgbW9zdHJhciBlbCBsYWJlbFxyXG4gICAgaWYgKHRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIENvbXBvcnRhbWllbnRvIG9yaWdpbmFsOiBtb3N0cmFyIHNpIGhheSBsYWJlbCBvIHNpIG5vTGFiZWwgZXN0w6EgYWN0aXZvIChwYXJhIGVzcGFjaW8gZmFudGFzbWEpXHJcbiAgICByZXR1cm4gISF0aGlzLmxhYmVsIHx8IHRoaXMubm9MYWJlbDtcclxuICB9XHJcblxyXG4gIGdldCBoYXNWYWxpZFNlbGVjdGlvbigpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5zaG93UGxhY2Vob2xkZXIpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgIT09ICcnICYmIHRoaXMudmFsdWUgIT09IG51bGwgJiYgdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPz8gJyc7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgXHJcbiAgICAvLyBNYXJjYXIgY29tbyB0b3VjaGVkIGN1YW5kbyBlbCB1c3VhcmlvIGludGVyYWN0w7phXHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RGb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Qmx1cihldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25WYWx1ZShvcHRpb246IGFueSk6IHN0cmluZyB8IG51bWJlciB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuYmluZFZhbHVlXSA/PyBvcHRpb24udmFsdWUgPz8gJyc7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25MYWJlbChvcHRpb246IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuYmluZExhYmVsXSA/PyBvcHRpb24ubGFiZWwgPz8gJyc7XHJcbiAgfVxyXG5cclxuICBpc09wdGlvbkRpc2FibGVkKG9wdGlvbjogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gb3B0aW9uLmRpc2FibGVkID8/IGZhbHNlO1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgPGxhYmVsICpuZ0lmPVwic2hvdWxkU2hvd0xhYmVsXCIgW2Zvcl09XCJpZFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cclxuICAgIHt7IGxhYmVsIH19XHJcbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuICBcclxuICA8c2VsZWN0XHJcbiAgICBbaWRdPVwiaWRcIlxyXG4gICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICBbY2xhc3NdPVwic2VsZWN0Q2xhc3Nlc1wiXHJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAoY2hhbmdlKT1cIm9uU2VsZWN0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXHJcbiAgICAoZm9jdXMpPVwib25TZWxlY3RGb2N1cygkZXZlbnQpXCJcclxuICAgIChibHVyKT1cIm9uU2VsZWN0Qmx1cigkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8b3B0aW9uICpuZ0lmPVwic2hvd1BsYWNlaG9sZGVyXCIgdmFsdWU9XCJcIiBbZGlzYWJsZWRdPVwicmVxdWlyZWRcIj5cclxuICAgICAge3sgcGxhY2Vob2xkZXIgfX1cclxuICAgIDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvblxyXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxyXG4gICAgICBbdmFsdWVdPVwiZ2V0T3B0aW9uVmFsdWUob3B0aW9uKVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJpc09wdGlvbkRpc2FibGVkKG9wdGlvbilcIlxyXG4gICAgPlxyXG4gICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XHJcbiAgICA8L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICBcclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJmb3JtLXRleHRcIj57eyBoZWxwZXJUZXh0IH19PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XHJcbjwvZGl2PiJdfQ==