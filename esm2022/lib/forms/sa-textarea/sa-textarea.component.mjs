import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SaTextareaComponent {
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
    placeholder = '';
    helperText = '';
    errorText = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    rows = 3;
    cols = 50;
    minlength = null;
    maxlength = null;
    resize = 'vertical';
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    isFocused = false;
    onChange = (_) => { };
    onTouched = () => { };
    get textareaClasses() {
        const sizeMap = {
            'sm': 'form-control-sm',
            'md': '', // Bootstrap default
            'lg': 'form-control-lg'
        };
        const baseClasses = ['form-control'];
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
    get textareaStyles() {
        return {
            resize: this.resize
        };
    }
    writeValue(value) {
        this.value = value || '';
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
    onModelChange(value) {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(value);
    }
    onTextareaFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onTextareaBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTextareaComponent, selector: "sa-textarea", inputs: { value: "value", size: "size", status: "status", label: "label", noLabel: "noLabel", placeholder: "placeholder", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", rows: "rows", cols: "cols", minlength: "minlength", maxlength: "maxlength", resize: "resize" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaTextareaComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focus)=\"onTextareaFocus($event)\"\r\n    (blur)=\"onTextareaBlur($event)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#10b981}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #10b981!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-textarea', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaTextareaComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focus)=\"onTextareaFocus($event)\"\r\n    (blur)=\"onTextareaBlur($event)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#10b981}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #10b981!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], noLabel: [{
                type: Input
            }], placeholder: [{
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
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }], minlength: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], resize: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtdGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS10ZXh0YXJlYS9zYS10ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWtCekUsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLElBQUksR0FBaUIsSUFBSSxDQUFDO0lBQzFCLE1BQU0sR0FBbUIsU0FBUyxDQUFDO0lBQ25DLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFcEIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNsQyxJQUNJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDUSxXQUFXLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLFVBQVUsR0FBVyxFQUFFLENBQUM7SUFDeEIsU0FBUyxHQUFXLEVBQUUsQ0FBQztJQUN2QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixFQUFF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c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBRUksV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCB0eXBlIFRleHRhcmVhU2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgVGV4dGFyZWFTdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS10ZXh0YXJlYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLXRleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zYS10ZXh0YXJlYS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhVGV4dGFyZWFDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNpemU6IFRleHRhcmVhU2l6ZSA9ICdtZCc7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBUZXh0YXJlYVN0YXR1cyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfbm9MYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5vTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX25vTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgbm9MYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ub0xhYmVsO1xyXG4gIH1cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcm93czogbnVtYmVyID0gMztcclxuICBASW5wdXQoKSBjb2xzOiBudW1iZXIgPSA1MDtcclxuICBASW5wdXQoKSBtaW5sZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgcmVzaXplOiAnbm9uZScgfCAnYm90aCcgfCAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIGdldCB0ZXh0YXJlYUNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWNvbnRyb2wtc20nLFxyXG4gICAgICAnbWQnOiAnJywgLy8gQm9vdHN0cmFwIGRlZmF1bHRcclxuICAgICAgJ2xnJzogJ2Zvcm0tY29udHJvbC1sZydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY29udHJvbCddO1xyXG4gICAgXHJcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWxhYmVsIGxhYmVsLXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1sYWJlbCBsYWJlbC1sZydcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWxhYmVsIGxhYmVsLW1kJztcclxuICAgIFxyXG4gICAgLy8gU2kgZXMgbm9MYWJlbCwgYWdyZWdhciBjbGFzZSBwYXJhIGxhYmVsIGZhbnRhc21hXHJcbiAgICBpZiAodGhpcy5ub0xhYmVsKSB7XHJcbiAgICAgIHJldHVybiBgJHtiYXNlQ2xhc3Nlc30gZ2hvc3QtbGFiZWxgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvdWxkU2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5sYWJlbCB8fCB0aGlzLm5vTGFiZWw7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dGFyZWFTdHlsZXMoKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2l6ZTogdGhpcy5yZXNpemVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uVGV4dGFyZWFGb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uVGV4dGFyZWFCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIlwiPlxyXG4gIDxsYWJlbCAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFtmb3JdPVwiaWRcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDx0ZXh0YXJlYVxyXG4gICAgW2lkXT1cImlkXCJcclxuICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgW2NsYXNzXT1cInRleHRhcmVhQ2xhc3Nlc1wiXHJcbiAgICBbc3R5bGVdPVwidGV4dGFyZWFTdHlsZXNcIlxyXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxyXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgW2NvbHNdPVwiY29sc1wiXHJcbiAgICBbbWlubGVuZ3RoXT1cIm1pbmxlbmd0aFwiXHJcbiAgICBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG4gICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcclxuICAgIGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcclxuICAgIGRhdGEtZ3JhbW09XCJmYWxzZVwiXHJcbiAgICBkYXRhLWdyYW1tX2VkaXRvcj1cImZhbHNlXCJcclxuICAgIGRhdGEtZW5hYmxlLWdyYW1tYXJseT1cImZhbHNlXCJcclxuICAgIChmb2N1cyk9XCJvblRleHRhcmVhRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAoYmx1cik9XCJvblRleHRhcmVhQmx1cigkZXZlbnQpXCJcclxuICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7IGVycm9yVGV4dCB9fTwvZGl2PlxyXG48L2Rpdj5cclxuIl19