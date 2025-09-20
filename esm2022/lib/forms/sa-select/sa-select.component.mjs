import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SaSelectComponent {
    value = '';
    options = [];
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
    _showPlaceholder = true;
    set showPlaceholder(value) {
        this._showPlaceholder = value === true || value === 'true';
    }
    get showPlaceholder() {
        return this._showPlaceholder;
    }
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    isFocused = false;
    onChange = (_) => { };
    onTouched = () => { };
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
        if (this.noLabel) {
            return `${baseClasses} ghost-label`;
        }
        return baseClasses;
    }
    get shouldShowLabel() {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaSelectComponent, selector: "sa-select", inputs: { value: "value", options: "options", size: "size", status: "status", label: "label", noLabel: "noLabel", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", placeholder: "placeholder", showPlaceholder: "showPlaceholder" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaSelectComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focus)=\"onSelectFocus($event)\"\r\n    (blur)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"option.value\"\r\n      [disabled]=\"option.disabled\"\r\n    >\r\n      {{ option.label }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 36px 8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:23px;padding:4px 28px 4px 8px!important;font-size:11px!important;border-radius:5px;background-position:right 8px center;background-size:12px 9px}:host .form-select.form-select-md{min-height:30px;padding:8px 36px 8px 12px;font-size:13px;border-radius:6px;background-position:right 12px center;background-size:16px 12px}:host .form-select.form-select-lg{min-height:37px;padding:10px 44px 10px 14px;font-size:15px;border-radius:7px;background-position:right 14px center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:8px 12px}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-select', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaSelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focus)=\"onSelectFocus($event)\"\r\n    (blur)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"option.value\"\r\n      [disabled]=\"option.disabled\"\r\n    >\r\n      {{ option.label }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 36px 8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:23px;padding:4px 28px 4px 8px!important;font-size:11px!important;border-radius:5px;background-position:right 8px center;background-size:12px 9px}:host .form-select.form-select-md{min-height:30px;padding:8px 36px 8px 12px;font-size:13px;border-radius:6px;background-position:right 12px center;background-size:16px 12px}:host .form-select.form-select-lg{min-height:37px;padding:10px 44px 10px 14px;font-size:15px;border-radius:7px;background-position:right 14px center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:8px 12px}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], options: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], noLabel: [{
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
            }], showPlaceholder: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Etc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXNlbGVjdC9zYS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBd0J6RSxNQUFNLE9BQU8saUJBQWlCO0lBQ25CLEtBQUssR0FBb0IsRUFBRSxDQUFDO0lBQzVCLE9BQU8sR0FBbUIsRUFBRSxDQUFDO0lBQzdCLElBQUksR0FBZSxJQUFJLENBQUM7SUFDeEIsTUFBTSxHQUFpQixTQUFTLENBQUM7SUFDakMsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUVwQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQ2xDLElBQ0ksT0FBTyxDQUFDLEtBQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNRLFVBQVUsR0FBVyxFQUFFLENBQUM7SUFDeEIsU0FBUyxHQUFXLEVBQUUsQ0FBQztJQUV4QixTQUFTLEdBQVksS0FBSyxDQUFDO0lBQ25DLElBQ0ksUUFBUSxDQUFDLEtBQW9CO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxLQUFLLElBQUksSUFB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WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2VsZWN0U2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgU2VsZWN0U3RhdHVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T3B0aW9uIHtcclxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2Etc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgPSAnJztcclxuICBASW5wdXQoKSBvcHRpb25zOiBTZWxlY3RPcHRpb25bXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHNpemU6IFNlbGVjdFNpemUgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogU2VsZWN0U3RhdHVzID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBcclxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgX3JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX3JlYWRvbmx5ID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlYWRvbmx5O1xyXG4gIH1cclxuICBcclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcbiAgXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnLS1TZWxlY2Npb25lLS0nO1xyXG4gIFxyXG4gIHByaXZhdGUgX3Nob3dQbGFjZWhvbGRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBzZXQgc2hvd1BsYWNlaG9sZGVyKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9zaG93UGxhY2Vob2xkZXIgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgc2hvd1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICBnZXQgc2VsZWN0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tc2VsZWN0LXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tc2VsZWN0LW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tc2VsZWN0LWxnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS1zZWxlY3QnXTtcclxuICAgIFxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1sYWJlbCBsYWJlbC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLWxhYmVsIGxhYmVsLW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbGcnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IHNpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1sYWJlbCBsYWJlbC1tZCc7XHJcbiAgICBcclxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxyXG4gICAgaWYgKHRoaXMubm9MYWJlbCkge1xyXG4gICAgICByZXR1cm4gYCR7YmFzZUNsYXNzZXN9IGdob3N0LWxhYmVsYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3VsZFNob3dMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMubGFiZWwgfHwgdGhpcy5ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc1ZhbGlkU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLnNob3dQbGFjZWhvbGRlcikgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gJycgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/PyAnJztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gIDxsYWJlbCAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFtmb3JdPVwiaWRcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcbiAgXHJcbiAgPHNlbGVjdFxyXG4gICAgW2lkXT1cImlkXCJcclxuICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgW2NsYXNzXT1cInNlbGVjdENsYXNzZXNcIlxyXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxyXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXHJcbiAgICAoZm9jdXMpPVwib25TZWxlY3RGb2N1cygkZXZlbnQpXCJcclxuICAgIChibHVyKT1cIm9uU2VsZWN0Qmx1cigkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8b3B0aW9uICpuZ0lmPVwic2hvd1BsYWNlaG9sZGVyXCIgdmFsdWU9XCJcIiBbZGlzYWJsZWRdPVwicmVxdWlyZWRcIj5cclxuICAgICAge3sgcGxhY2Vob2xkZXIgfX1cclxuICAgIDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvblxyXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxyXG4gICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgW2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiXHJcbiAgICA+XHJcbiAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxyXG4gICAgPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgXHJcbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7IGVycm9yVGV4dCB9fTwvZGl2PlxyXG48L2Rpdj4iXX0=