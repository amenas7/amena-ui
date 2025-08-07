import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SaDateComponent {
    value = '';
    size = 'md';
    status = 'default';
    label = '';
    placeholder = '';
    helperText = '';
    errorText = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    min = '';
    max = '';
    blockFutureDates = false;
    showCurrentDate = false;
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    isFocused = false;
    _generatedId;
    onChange = (_) => { };
    onTouched = () => { };
    constructor() {
        this._generatedId = `sa-date-${Math.random().toString(36).substr(2, 9)}`;
        // Si showCurrentDate está habilitado, establecer fecha actual
        if (this.showCurrentDate && !this.value) {
            this.value = this.getCurrentDateISO();
        }
    }
    ngOnInit() {
        // Configurar límites de fecha
        if (this.blockFutureDates && !this.max) {
            this.max = this.getCurrentDateISO();
        }
        // Si showCurrentDate está habilitado y no hay valor, establecer fecha actual
        if (this.showCurrentDate && !this.value) {
            this.value = this.getCurrentDateISO();
            this.onChange(this.value);
        }
    }
    get dateId() {
        return this.id || this._generatedId;
    }
    get inputClasses() {
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
        return 'form-label';
    }
    getCurrentDateISO() {
        const today = new Date();
        return today.toISOString().split('T')[0];
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
    onInputFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onInputBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    openCalendar(event) {
        // Si el input no está deshabilitado ni en solo lectura
        if (!this.disabled && !this.readonly) {
            const inputElement = event.target;
            // Intentar abrir el calendario programáticamente
            try {
                inputElement.showPicker();
            }
            catch (error) {
                // Fallback para navegadores que no soportan showPicker()
                // En estos casos, el click normal en el input debería funcionar
                console.debug('showPicker() no soportado, usando comportamiento por defecto');
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaDateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaDateComponent, selector: "sa-date", inputs: { value: "value", size: "size", status: "status", label: "label", placeholder: "placeholder", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", min: "min", max: "max", blockFutureDates: "blockFutureDates", showCurrentDate: "showCurrentDate" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaDateComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"mb-3\">\n  <label *ngIf=\"label\" [for]=\"dateId\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\n  </label>\n\n  <div class=\"position-relative\">\n    <!-- Input date nativo -->\n    <input\n      [id]=\"dateId\"\n      [name]=\"name\"\n      [class]=\"inputClasses\"\n      type=\"date\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [min]=\"min\"\n      [max]=\"max\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n      (click)=\"openCalendar($event)\"\n    />\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .mb-3{width:100%;box-sizing:border-box}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control.is-valid{border-color:#32a047}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #32a047!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .position-relative{position:relative}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#2e3438;font-size:14px;font-weight:400!important;margin-bottom:2px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem}:host .mb-3:last-child{margin-bottom:0!important}:host .form-control[type=date]{cursor:pointer}:host .form-control[type=date]::-webkit-calendar-picker-indicator{color:#6c757d;cursor:pointer;filter:invert(.5)}:host .form-control[type=date]::-webkit-calendar-picker-indicator:hover{filter:invert(.3)}:host .form-control[type=date]::-moz-calendar-picker-indicator{cursor:pointer}:host .form-control[type=date]:disabled,:host .form-control[type=date][readonly]{cursor:default}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaDateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-date', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaDateComponent),
                            multi: true
                        }
                    ], template: "<div class=\"mb-3\">\n  <label *ngIf=\"label\" [for]=\"dateId\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\n  </label>\n\n  <div class=\"position-relative\">\n    <!-- Input date nativo -->\n    <input\n      [id]=\"dateId\"\n      [name]=\"name\"\n      [class]=\"inputClasses\"\n      type=\"date\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [min]=\"min\"\n      [max]=\"max\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n      (click)=\"openCalendar($event)\"\n    />\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .mb-3{width:100%;box-sizing:border-box}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control.is-valid{border-color:#32a047}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #32a047!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .position-relative{position:relative}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#2e3438;font-size:14px;font-weight:400!important;margin-bottom:2px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem}:host .mb-3:last-child{margin-bottom:0!important}:host .form-control[type=date]{cursor:pointer}:host .form-control[type=date]::-webkit-calendar-picker-indicator{color:#6c757d;cursor:pointer;filter:invert(.5)}:host .form-control[type=date]::-webkit-calendar-picker-indicator:hover{filter:invert(.3)}:host .form-control[type=date]::-moz-calendar-picker-indicator{cursor:pointer}:host .form-control[type=date]:disabled,:host .form-control[type=date][readonly]{cursor:default}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
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
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], blockFutureDates: [{
                type: Input
            }], showCurrentDate: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWRhdGUvc2EtZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWRhdGUvc2EtZGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFpQnpFLE1BQU0sT0FBTyxlQUFlO0lBQ2pCLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsSUFBSSxHQUFhLElBQUksQ0FBQztJQUN0QixNQUFNLEdBQWUsU0FBUyxDQUFDO0lBQy9CLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixVQUFVLEdBQVcsRUFBRSxDQUFDO0lBQ3hCLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFDdkIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsRUFBRSxHQUFXLEVBQUUsQ0FBQztJQUNoQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLEdBQUcsR0FBVyxFQUFFLENBQUM7SUFDakIsR0FBRyxHQUFXLEVBQUUsQ0FBQztJQUNqQixnQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsZUFBZSxHQUFZLEtBQUssQ0FBQztJQUVoQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUN6QyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN2QyxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVoRCxTQUFTLEdBQVksS0FBSyxDQUFDO0lBQ25CLFlBQVksQ0FBUztJQUVyQixRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUMxQixTQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRTdCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXpFLDhEQUE4RDtRQUM5RCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTiw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBRUQsNkVBQTZFO1FBQzdFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixJQUFJLEVBQUUsRUFBRSxFQUFFLG9CQUFvQjtZQUM5QixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3BELFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM5QyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDckMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBaUI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFpQjtRQUM1Qix1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQTBCLENBQUM7WUFFdEQsaURBQWlEO1lBQ2pELElBQUksQ0FBQztnQkFDSCxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUIsQ0FBQztZQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7Z0JBQ2YseURBQXlEO2dCQUN6RCxnRUFBZ0U7Z0JBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztZQUNoRixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7d0dBcElVLGVBQWU7NEZBQWYsZUFBZSwrYkFSZjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUM5QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJDaEJILG82QkE4QkE7OzRGRFphLGVBQWU7a0JBWjNCLFNBQVM7K0JBQ0UsU0FBUyxhQUdSO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjt3REFHUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IHR5cGUgRGF0ZVNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5leHBvcnQgdHlwZSBEYXRlU3RhdHVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2EtZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1kYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2EtZGF0ZS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhRGF0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTYURhdGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzaXplOiBEYXRlU2l6ZSA9ICdtZCc7XG4gIEBJbnB1dCgpIHN0YXR1czogRGF0ZVN0YXR1cyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBtaW46IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBtYXg6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBibG9ja0Z1dHVyZURhdGVzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dDdXJyZW50RGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9nZW5lcmF0ZWRJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9nZW5lcmF0ZWRJZCA9IGBzYS1kYXRlLSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpfWA7XG4gICAgXG4gICAgLy8gU2kgc2hvd0N1cnJlbnREYXRlIGVzdMOhIGhhYmlsaXRhZG8sIGVzdGFibGVjZXIgZmVjaGEgYWN0dWFsXG4gICAgaWYgKHRoaXMuc2hvd0N1cnJlbnREYXRlICYmICF0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRDdXJyZW50RGF0ZUlTTygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIENvbmZpZ3VyYXIgbMOtbWl0ZXMgZGUgZmVjaGFcbiAgICBpZiAodGhpcy5ibG9ja0Z1dHVyZURhdGVzICYmICF0aGlzLm1heCkge1xuICAgICAgdGhpcy5tYXggPSB0aGlzLmdldEN1cnJlbnREYXRlSVNPKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIFNpIHNob3dDdXJyZW50RGF0ZSBlc3TDoSBoYWJpbGl0YWRvIHkgbm8gaGF5IHZhbG9yLCBlc3RhYmxlY2VyIGZlY2hhIGFjdHVhbFxuICAgIGlmICh0aGlzLnNob3dDdXJyZW50RGF0ZSAmJiAhdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudERhdGVJU08oKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRhdGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlkIHx8IHRoaXMuX2dlbmVyYXRlZElkO1xuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAnc20nOiAnZm9ybS1jb250cm9sLXNtJyxcbiAgICAgICdtZCc6ICcnLCAvLyBCb290c3RyYXAgZGVmYXVsdFxuICAgICAgJ2xnJzogJ2Zvcm0tY29udHJvbC1sZydcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY29udHJvbCddO1xuICAgIFxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2Zvcm0tbGFiZWwnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50RGF0ZUlTTygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25JbnB1dEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICBvbklucHV0Qmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICBvcGVuQ2FsZW5kYXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAvLyBTaSBlbCBpbnB1dCBubyBlc3TDoSBkZXNoYWJpbGl0YWRvIG5pIGVuIHNvbG8gbGVjdHVyYVxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBcbiAgICAgIC8vIEludGVudGFyIGFicmlyIGVsIGNhbGVuZGFyaW8gcHJvZ3JhbcOhdGljYW1lbnRlXG4gICAgICB0cnkge1xuICAgICAgICBpbnB1dEVsZW1lbnQuc2hvd1BpY2tlcigpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gRmFsbGJhY2sgcGFyYSBuYXZlZ2Fkb3JlcyBxdWUgbm8gc29wb3J0YW4gc2hvd1BpY2tlcigpXG4gICAgICAgIC8vIEVuIGVzdG9zIGNhc29zLCBlbCBjbGljayBub3JtYWwgZW4gZWwgaW5wdXQgZGViZXLDrWEgZnVuY2lvbmFyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ3Nob3dQaWNrZXIoKSBubyBzb3BvcnRhZG8sIHVzYW5kbyBjb21wb3J0YW1pZW50byBwb3IgZGVmZWN0bycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgPGxhYmVsICpuZ0lmPVwibGFiZWxcIiBbZm9yXT1cImRhdGVJZFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cbiAgICB7eyBsYWJlbCB9fVxuICAgIDxzcGFuICpuZ0lmPVwicmVxdWlyZWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cbiAgPC9sYWJlbD5cblxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICA8IS0tIElucHV0IGRhdGUgbmF0aXZvIC0tPlxuICAgIDxpbnB1dFxuICAgICAgW2lkXT1cImRhdGVJZFwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIFtjbGFzc109XCJpbnB1dENsYXNzZXNcIlxuICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFttaW5dPVwibWluXCJcbiAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAoYmx1cik9XCJvbklucHV0Qmx1cigkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJvcGVuQ2FsZW5kYXIoJGV2ZW50KVwiXG4gICAgLz5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZXh0XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57eyBlcnJvclRleHQgfX08L2Rpdj5cbjwvZGl2PlxuIl19