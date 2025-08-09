import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SaRadioComponent {
    value = '';
    size = 'md';
    status = 'default';
    label = '';
    helperText = '';
    errorText = '';
    required = false;
    disabled = false;
    readonly = false;
    id = '';
    name = '';
    valueChange = new EventEmitter();
    change = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    selectedValue = null;
    isFocused = false;
    _generatedId;
    onChange = (_) => { };
    onTouched = () => { };
    constructor() {
        this._generatedId = `sa-radio-${Math.random().toString(36).substr(2, 9)}`;
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
        return 'form-check-label';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaRadioComponent, selector: "sa-radio", inputs: { value: "value", size: "size", status: "status", label: "label", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", readonly: "readonly", id: "id", name: "name" }, outputs: { valueChange: "valueChange", change: "change", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaRadioComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"mb-3\">\n  <div [class]=\"containerClasses\">\n    <input\n      [id]=\"radioId\"\n      [name]=\"name\"\n      [class]=\"radioClasses\"\n      type=\"radio\"\n      [checked]=\"isChecked\"\n      [value]=\"value\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      (change)=\"onRadioChange($event)\"\n      (focus)=\"onRadioFocus($event)\"\n      (blur)=\"onRadioBlur($event)\"\n    />\n    <label *ngIf=\"label\" [for]=\"radioId\" [class]=\"labelClasses\">\n      {{ label }}\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\n    </label>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .mb-3{width:100%;box-sizing:border-box}:host .form-check .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .form-check .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check .form-check-input:checked,:host .form-check .form-check-input[type=radio]:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check .form-check-input.is-valid{border-color:#32a047}:host .form-check .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check .form-check-input.is-invalid{border-color:#ef4444}:host .form-check .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check{display:flex;align-items:center;min-height:auto;padding-left:0}:host .form-check .form-check-input{margin-top:0;margin-right:.5rem;flex-shrink:0}:host .form-check .form-check-label{margin-bottom:0;line-height:1}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#2e3438;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center}:host .form-check-sm .form-check-input{width:.875rem;height:.875rem;margin-right:.5rem}:host .form-check-sm .form-check-label{font-size:.875rem;line-height:.875rem}:host .form-check-lg .form-check-input{width:1.25rem;height:1.25rem;margin-right:.5rem}:host .form-check-lg .form-check-label{font-size:1.125rem;line-height:1.25rem}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:1rem;height:1rem;margin-right:.5rem}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:14px;line-height:1rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host sa-radio .form-check input[type=radio]:checked,:host .form-check input[type=radio]:checked,:host input[type=radio].form-check-input:checked,:host .form-check input[type=radio].is-valid:checked,:host input[type=radio].form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-radio', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaRadioComponent),
                            multi: true
                        }
                    ], template: "<div class=\"mb-3\">\n  <div [class]=\"containerClasses\">\n    <input\n      [id]=\"radioId\"\n      [name]=\"name\"\n      [class]=\"radioClasses\"\n      type=\"radio\"\n      [checked]=\"isChecked\"\n      [value]=\"value\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      (change)=\"onRadioChange($event)\"\n      (focus)=\"onRadioFocus($event)\"\n      (blur)=\"onRadioBlur($event)\"\n    />\n    <label *ngIf=\"label\" [for]=\"radioId\" [class]=\"labelClasses\">\n      {{ label }}\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\n    </label>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .mb-3{width:100%;box-sizing:border-box}:host .form-check .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .form-check .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check .form-check-input:checked,:host .form-check .form-check-input[type=radio]:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check .form-check-input.is-valid{border-color:#32a047}:host .form-check .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check .form-check-input.is-invalid{border-color:#ef4444}:host .form-check .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check{display:flex;align-items:center;min-height:auto;padding-left:0}:host .form-check .form-check-input{margin-top:0;margin-right:.5rem;flex-shrink:0}:host .form-check .form-check-label{margin-bottom:0;line-height:1}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#2e3438;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center}:host .form-check-sm .form-check-input{width:.875rem;height:.875rem;margin-right:.5rem}:host .form-check-sm .form-check-label{font-size:.875rem;line-height:.875rem}:host .form-check-lg .form-check-input{width:1.25rem;height:1.25rem;margin-right:.5rem}:host .form-check-lg .form-check-label{font-size:1.125rem;line-height:1.25rem}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:1rem;height:1rem;margin-right:.5rem}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:14px;line-height:1rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host sa-radio .form-check input[type=radio]:checked,:host .form-check input[type=radio]:checked,:host input[type=radio].form-check-input:checked,:host .form-check input[type=radio].is-valid:checked,:host input[type=radio].form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
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
            }], valueChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXJhZGlvL3NhLXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBaUJ6RSxNQUFNLE9BQU8sZ0JBQWdCO0lBQ2xCLEtBQUssR0FBUSxFQUFFLENBQUM7SUFDaEIsSUFBSSxHQUFjLElBQUksQ0FBQztJQUN2QixNQUFNLEdBQWdCLFNBQVMsQ0FBQztJQUNoQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLFVBQVUsR0FBVyxFQUFFLENBQUM7SUFDeEIsU0FBUyxHQUFXLEVBQUUsQ0FBQztJQUN2QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixFQUFFLEdBQVcsRUFBRSxDQUFDO0lBQ2hCLElBQUksR0FBVyxFQUFFLENBQUM7SUFFakIsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDdEMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFDbkMsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDdkMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFFaEQsYUFBYSxHQUFRLElBQUksQ0FBQztJQUMxQixTQUFTLEdBQVksS0FBSyxDQUFDO0lB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O2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IHR5cGUgUmFkaW9TaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xuZXhwb3J0IHR5cGUgUmFkaW9TdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYS1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NhLXJhZGlvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FSYWRpb0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTYVJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gJyc7XG4gIEBJbnB1dCgpIHNpemU6IFJhZGlvU2l6ZSA9ICdtZCc7XG4gIEBJbnB1dCgpIHN0YXR1czogUmFkaW9TdGF0dXMgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gIHNlbGVjdGVkVmFsdWU6IGFueSA9IG51bGw7XG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9nZW5lcmF0ZWRJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9nZW5lcmF0ZWRJZCA9IGBzYS1yYWRpby0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gO1xuICB9XG5cbiAgZ2V0IHJhZGlvSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pZCB8fCB0aGlzLl9nZW5lcmF0ZWRJZDtcbiAgfVxuXG4gIGdldCBpc0NoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldCByYWRpb0NsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2Zvcm0tY2hlY2stc20nLFxuICAgICAgJ21kJzogJycsIC8vIEJvb3RzdHJhcCBkZWZhdWx0XG4gICAgICAnbGcnOiAnZm9ybS1jaGVjay1sZydcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY2hlY2staW5wdXQnXTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcbiAgICAgIC8vIE5vdGU6IEJvb3RzdHJhcCBkb2Vzbid0IGhhdmUgYnVpbHQtaW4gc2l6ZSBjbGFzc2VzIGZvciByYWRpb3NcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIENTU1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2Zvcm0tY2hlY2stbGFiZWwnO1xuICB9XG5cbiAgZ2V0IGNvbnRhaW5lckNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2Zvcm0tY2hlY2stc20nLFxuICAgICAgJ21kJzogJycsIC8vIEJvb3RzdHJhcCBkZWZhdWx0XG4gICAgICAnbGcnOiAnZm9ybS1jaGVjay1sZydcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY2hlY2snXTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgb25SYWRpb0NoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmFkaW9Gb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25SYWRpb0JsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibWItM1wiPlxuICA8ZGl2IFtjbGFzc109XCJjb250YWluZXJDbGFzc2VzXCI+XG4gICAgPGlucHV0XG4gICAgICBbaWRdPVwicmFkaW9JZFwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIFtjbGFzc109XCJyYWRpb0NsYXNzZXNcIlxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgIFtjaGVja2VkXT1cImlzQ2hlY2tlZFwiXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgKGNoYW5nZSk9XCJvblJhZGlvQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGZvY3VzKT1cIm9uUmFkaW9Gb2N1cygkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cIm9uUmFkaW9CbHVyKCRldmVudClcIlxuICAgIC8+XG4gICAgPGxhYmVsICpuZ0lmPVwibGFiZWxcIiBbZm9yXT1cInJhZGlvSWRcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XG4gICAgICB7eyBsYWJlbCB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0ICYmICFlcnJvclRleHRcIiBjbGFzcz1cImZvcm0tdGV4dFwiPnt7IGhlbHBlclRleHQgfX08L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XG48L2Rpdj5cbiJdfQ==