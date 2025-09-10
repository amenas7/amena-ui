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
    height = null; // Altura fija en píxeles
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
        const styles = {};
        if (this.height !== null) {
            // Cuando se especifica altura, usar altura fija y deshabilitar resize
            styles.height = `${this.height}px`;
            styles.resize = 'none';
            styles.overflowY = 'auto'; // Habilitar scroll vertical
        }
        else {
            // Comportamiento normal cuando no hay altura especificada
            styles.resize = this.resize;
        }
        return styles;
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTextareaComponent, selector: "sa-textarea", inputs: { value: "value", size: "size", status: "status", label: "label", noLabel: "noLabel", placeholder: "placeholder", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", rows: "rows", cols: "cols", minlength: "minlength", maxlength: "maxlength", resize: "resize", height: "height" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
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
            }], height: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtdGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS10ZXh0YXJlYS9zYS10ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWtCekUsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLElBQUksR0FBaUIsSUFBSSxDQUFDO0lBQzFCLE1BQU0sR0FBbUIsU0FBUyxDQUFDO0lBQ25DLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFcEIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNsQyxJQUNJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDUSxXQUFXLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLFVBQVUsR0FBVyxFQUFFLENBQUM7SUFDeEIsU0FBUyxHQUFXLEVBQUUsQ0FBQztJQUN2QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixFQUFF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Yi9CLFNBQVM7K0JBQ0UsYUFBYSxpQkFHUixpQkFBaUIsQ0FBQyxTQUFTLGFBQy9CO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDOzRCQUNsRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFHUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBSUYsT0FBTztzQkFEVixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgVGV4dGFyZWFTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBUZXh0YXJlYVN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLXRleHRhcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2EtdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NhLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FUZXh0YXJlYUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2l6ZTogVGV4dGFyZWFTaXplID0gJ21kJztcclxuICBASW5wdXQoKSBzdGF0dXM6IFRleHRhcmVhU3RhdHVzID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBcclxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSByb3dzOiBudW1iZXIgPSAzO1xyXG4gIEBJbnB1dCgpIGNvbHM6IG51bWJlciA9IDUwO1xyXG4gIEBJbnB1dCgpIG1pbmxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbWF4bGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSByZXNpemU6ICdub25lJyB8ICdib3RoJyB8ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgbnVsbCA9IG51bGw7IC8vIEFsdHVyYSBmaWphIGVuIHDDrXhlbGVzXHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICBnZXQgdGV4dGFyZWFDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1jb250cm9sLXNtJyxcclxuICAgICAgJ21kJzogJycsIC8vIEJvb3RzdHJhcCBkZWZhdWx0XHJcbiAgICAgICdsZyc6ICdmb3JtLWNvbnRyb2wtbGcnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNvbnRyb2wnXTtcclxuICAgIFxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1sYWJlbCBsYWJlbC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLWxhYmVsIGxhYmVsLW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbGcnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IHNpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1sYWJlbCBsYWJlbC1tZCc7XHJcbiAgICBcclxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxyXG4gICAgaWYgKHRoaXMubm9MYWJlbCkge1xyXG4gICAgICByZXR1cm4gYCR7YmFzZUNsYXNzZXN9IGdob3N0LWxhYmVsYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3VsZFNob3dMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMubGFiZWwgfHwgdGhpcy5ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRhcmVhU3R5bGVzKCk6IGFueSB7XHJcbiAgICBjb25zdCBzdHlsZXM6IGFueSA9IHt9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5oZWlnaHQgIT09IG51bGwpIHtcclxuICAgICAgLy8gQ3VhbmRvIHNlIGVzcGVjaWZpY2EgYWx0dXJhLCB1c2FyIGFsdHVyYSBmaWphIHkgZGVzaGFiaWxpdGFyIHJlc2l6ZVxyXG4gICAgICBzdHlsZXMuaGVpZ2h0ID0gYCR7dGhpcy5oZWlnaHR9cHhgO1xyXG4gICAgICBzdHlsZXMucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICBzdHlsZXMub3ZlcmZsb3dZID0gJ2F1dG8nOyAvLyBIYWJpbGl0YXIgc2Nyb2xsIHZlcnRpY2FsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDb21wb3J0YW1pZW50byBub3JtYWwgY3VhbmRvIG5vIGhheSBhbHR1cmEgZXNwZWNpZmljYWRhXHJcbiAgICAgIHN0eWxlcy5yZXNpemUgPSB0aGlzLnJlc2l6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0YXJlYUZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0YXJlYUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgPGxhYmVsICpuZ0lmPVwic2hvdWxkU2hvd0xhYmVsXCIgW2Zvcl09XCJpZFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cclxuICAgIHt7IGxhYmVsIH19XHJcbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPHRleHRhcmVhXHJcbiAgICBbaWRdPVwiaWRcIlxyXG4gICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICBbY2xhc3NdPVwidGV4dGFyZWFDbGFzc2VzXCJcclxuICAgIFtzdHlsZV09XCJ0ZXh0YXJlYVN0eWxlc1wiXHJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICBbY29sc109XCJjb2xzXCJcclxuICAgIFttaW5sZW5ndGhdPVwibWlubGVuZ3RoXCJcclxuICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcclxuICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxyXG4gICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxyXG4gICAgZGF0YS1ncmFtbT1cImZhbHNlXCJcclxuICAgIGRhdGEtZ3JhbW1fZWRpdG9yPVwiZmFsc2VcIlxyXG4gICAgZGF0YS1lbmFibGUtZ3JhbW1hcmx5PVwiZmFsc2VcIlxyXG4gICAgKGZvY3VzKT1cIm9uVGV4dGFyZWFGb2N1cygkZXZlbnQpXCJcclxuICAgIChibHVyKT1cIm9uVGV4dGFyZWFCbHVyKCRldmVudClcIlxyXG4gID48L3RleHRhcmVhPlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJmb3JtLXRleHRcIj57eyBoZWxwZXJUZXh0IH19PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=