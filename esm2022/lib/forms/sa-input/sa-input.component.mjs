import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SaInputComponent {
    /** Valor del input (ngModel y reactivo) */
    value = '';
    valueChange = new EventEmitter();
    /** Placeholder del input */
    placeholder = '';
    /** Tipo de input */
    type = 'text';
    /** Tamaño visual */
    size = 'medium';
    /** Variante visual */
    variant = 'default';
    /** Deshabilitado */
    disabled = false;
    /** Solo lectura */
    readonly = false;
    /** Requerido */
    required = false;
    /** Nombre del input */
    name = '';
    /** ID del input */
    id = '';
    /** Máximo de caracteres */
    maxlength;
    /** Mínimo de caracteres */
    minlength;
    /** Patrón de validación */
    pattern;
    /** Etiqueta */
    label;
    /** Texto de ayuda */
    helperText;
    /** Texto de error */
    errorText;
    /** Mostrar toggle de contraseña */
    showPasswordToggle = false;
    /** Icono izquierdo (clase CSS) */
    leftIcon;
    /** Icono derecho (clase CSS) */
    rightIcon;
    showPassword = false;
    isFocused = false;
    ngOnChanges(changes) {
        // Forzar ciclo de detección de cambios para Storybook
    }
    onChange = (_) => { };
    onTouched = () => { };
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
        this.disabled = isDisabled;
    }
    onModelChange(value) {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(value);
    }
    onFocus(event) {
        this.isFocused = true;
    }
    onBlur(event) {
        this.isFocused = false;
        this.onTouched();
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    get inputType() {
        if (this.type === 'password' && this.showPasswordToggle && this.showPassword) {
            return 'text';
        }
        return this.type;
    }
    get inputClasses() {
        return {
            'input': true,
            [`input-${this.size}`]: !!this.size,
            [`input-${this.variant}`]: !!this.variant,
            'focused': this.isFocused,
            'disabled': this.disabled,
            'readonly': this.readonly,
            'error': !!this.errorText,
            'has-left-icon': !!this.leftIcon,
            'has-right-icon': !!this.rightIcon,
            'has-password-toggle': this.showPasswordToggle
        };
    }
    get hasError() {
        return !!this.errorText;
    }
    get showPasswordToggleButton() {
        return this.type === 'password' && this.showPasswordToggle;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaInputComponent, selector: "sa-input", inputs: { value: "value", placeholder: "placeholder", type: "type", size: "size", variant: "variant", disabled: "disabled", readonly: "readonly", required: "required", name: "name", id: "id", maxlength: "maxlength", minlength: "minlength", pattern: "pattern", label: "label", helperText: "helperText", errorText: "errorText", showPasswordToggle: "showPasswordToggle", leftIcon: "leftIcon", rightIcon: "rightIcon" }, outputs: { valueChange: "valueChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaInputComponent),
                multi: true
            }
        ], usesOnChanges: true, ngImport: i0, template: "<div class=\"input-container\">\r\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\r\n  </label>\r\n  <div class=\"input-wrapper\">\r\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\r\n      <i [class]=\"leftIcon\"></i>\r\n    </div>\r\n    <input\r\n      [type]=\"inputType\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [name]=\"name\"\r\n      [id]=\"id || name\"\r\n      [maxLength]=\"maxlength\"\r\n      [minLength]=\"minlength\"\r\n      [attr.pattern]=\"pattern\"\r\n      autocomplete=\"off\"\r\n      [ngClass]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"onModelChange($event)\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n    />\r\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\r\n      <i [class]=\"rightIcon\"></i>\r\n    </div>\r\n    <button\r\n      *ngIf=\"showPasswordToggleButton\"\r\n      type=\"button\"\r\n      class=\"password-toggle-btn\"\r\n      (click)=\"togglePasswordVisibility()\"\r\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\r\n    >\r\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\r\n    {{ helperText }}\r\n  </div>\r\n  <div *ngIf=\"errorText\" class=\"error-text\">\r\n    {{ errorText }}\r\n  </div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input-container\">\r\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\r\n  </label>\r\n  <div class=\"input-wrapper\">\r\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\r\n      <i [class]=\"leftIcon\"></i>\r\n    </div>\r\n    <input\r\n      [type]=\"inputType\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [name]=\"name\"\r\n      [id]=\"id || name\"\r\n      [maxLength]=\"maxlength\"\r\n      [minLength]=\"minlength\"\r\n      [attr.pattern]=\"pattern\"\r\n      autocomplete=\"off\"\r\n      [ngClass]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"onModelChange($event)\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n    />\r\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\r\n      <i [class]=\"rightIcon\"></i>\r\n    </div>\r\n    <button\r\n      *ngIf=\"showPasswordToggleButton\"\r\n      type=\"button\"\r\n      class=\"password-toggle-btn\"\r\n      (click)=\"togglePasswordVisibility()\"\r\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\r\n    >\r\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\r\n    {{ helperText }}\r\n  </div>\r\n  <div *ngIf=\"errorText\" class=\"error-text\">\r\n    {{ errorText }}\r\n  </div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], name: [{
                type: Input
            }], id: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], minlength: [{
                type: Input
            }], pattern: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], showPasswordToggle: [{
                type: Input
            }], leftIcon: [{
                type: Input
            }], rightIcon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFrQnpFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsMkNBQTJDO0lBQ2xDLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbEIsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFFbkQsNEJBQTRCO0lBQ25CLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDbEMsb0JBQW9CO0lBQ1gsSUFBSSxHQUFjLE1BQU0sQ0FBQztJQUNsQyxvQkFBb0I7SUFDWCxJQUFJLEdBQWMsUUFBUSxDQUFDO0lBQ3BDLHNCQUFzQjtJQUNiLE9BQU8sR0FBaUIsU0FBUyxDQUFDO0lBQzNDLG9CQUFvQjtJQUNYLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbkMsbUJBQW1CO0lBQ1YsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNuQyxnQkFBZ0I7SUFDUCxRQUFRLEdBQVksS0FBSyxDQUFDO0lBQ25DLHVCQUF1QjtJQUNkLElBQUksR0FBVyxFQUFFLENBQUM7SUFDM0IsbUJBQW1CO0lBQ1YsRUFBRSxHQUFXLEVBQUUsQ0FBQztJQUN6QiwyQkFBMkI7SUFDbEIsU0FBUyxDQUFVO0lBQzVCLDJCQUEyQjtJQUNsQixTQUFTLENBQVU7SUFDNUIs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dmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAndGV4dCcgfCAnZW1haWwnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInIHwgJ3RlbCcgfCAndXJsJyB8ICdzZWFyY2gnIHwgJ2RhdGUnIHwgJ3RpbWUnIHwgJ2RhdGV0aW1lLWxvY2FsJztcclxuZXhwb3J0IHR5cGUgSW5wdXRTaXplID0gJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcclxuZXhwb3J0IHR5cGUgSW5wdXRWYXJpYW50ID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2EtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2EtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhSW5wdXRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcclxuICAvKiogVmFsb3IgZGVsIGlucHV0IChuZ01vZGVsIHkgcmVhY3Rpdm8pICovXHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogUGxhY2Vob2xkZXIgZGVsIGlucHV0ICovXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIC8qKiBUaXBvIGRlIGlucHV0ICovXHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRUeXBlID0gJ3RleHQnO1xyXG4gIC8qKiBUYW1hw7FvIHZpc3VhbCAqL1xyXG4gIEBJbnB1dCgpIHNpemU6IElucHV0U2l6ZSA9ICdtZWRpdW0nO1xyXG4gIC8qKiBWYXJpYW50ZSB2aXN1YWwgKi9cclxuICBASW5wdXQoKSB2YXJpYW50OiBJbnB1dFZhcmlhbnQgPSAnZGVmYXVsdCc7XHJcbiAgLyoqIERlc2hhYmlsaXRhZG8gKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiBTb2xvIGxlY3R1cmEgKi9cclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiBSZXF1ZXJpZG8gKi9cclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiBOb21icmUgZGVsIGlucHV0ICovXHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgLyoqIElEIGRlbCBpbnB1dCAqL1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcclxuICAvKiogTcOheGltbyBkZSBjYXJhY3RlcmVzICovXHJcbiAgQElucHV0KCkgbWF4bGVuZ3RoPzogbnVtYmVyO1xyXG4gIC8qKiBNw61uaW1vIGRlIGNhcmFjdGVyZXMgKi9cclxuICBASW5wdXQoKSBtaW5sZW5ndGg/OiBudW1iZXI7XHJcbiAgLyoqIFBhdHLDs24gZGUgdmFsaWRhY2nDs24gKi9cclxuICBASW5wdXQoKSBwYXR0ZXJuPzogc3RyaW5nO1xyXG5cclxuICAvKiogRXRpcXVldGEgKi9cclxuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZztcclxuICAvKiogVGV4dG8gZGUgYXl1ZGEgKi9cclxuICBASW5wdXQoKSBoZWxwZXJUZXh0Pzogc3RyaW5nO1xyXG4gIC8qKiBUZXh0byBkZSBlcnJvciAqL1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dD86IHN0cmluZztcclxuICAvKiogTW9zdHJhciB0b2dnbGUgZGUgY29udHJhc2XDsWEgKi9cclxuICBASW5wdXQoKSBzaG93UGFzc3dvcmRUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKiogSWNvbm8gaXpxdWllcmRvIChjbGFzZSBDU1MpICovXHJcbiAgQElucHV0KCkgbGVmdEljb24/OiBzdHJpbmc7XHJcbiAgLyoqIEljb25vIGRlcmVjaG8gKGNsYXNlIENTUykgKi9cclxuICBASW5wdXQoKSByaWdodEljb24/OiBzdHJpbmc7XHJcblxyXG4gIHNob3dQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBGb3J6YXIgY2ljbG8gZGUgZGV0ZWNjacOzbiBkZSBjYW1iaW9zIHBhcmEgU3Rvcnlib29rXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPz8gJyc7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93UGFzc3dvcmQgPSAhdGhpcy5zaG93UGFzc3dvcmQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncGFzc3dvcmQnICYmIHRoaXMuc2hvd1Bhc3N3b3JkVG9nZ2xlICYmIHRoaXMuc2hvd1Bhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybiAndGV4dCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0Q2xhc3NlcygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ2lucHV0JzogdHJ1ZSxcclxuICAgICAgW2BpbnB1dC0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXHJcbiAgICAgIFtgaW5wdXQtJHt0aGlzLnZhcmlhbnR9YF06ICEhdGhpcy52YXJpYW50LFxyXG4gICAgICAnZm9jdXNlZCc6IHRoaXMuaXNGb2N1c2VkLFxyXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxyXG4gICAgICAncmVhZG9ubHknOiB0aGlzLnJlYWRvbmx5LFxyXG4gICAgICAnZXJyb3InOiAhIXRoaXMuZXJyb3JUZXh0LFxyXG4gICAgICAnaGFzLWxlZnQtaWNvbic6ICEhdGhpcy5sZWZ0SWNvbixcclxuICAgICAgJ2hhcy1yaWdodC1pY29uJzogISF0aGlzLnJpZ2h0SWNvbixcclxuICAgICAgJ2hhcy1wYXNzd29yZC10b2dnbGUnOiB0aGlzLnNob3dQYXNzd29yZFRvZ2dsZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuZXJyb3JUZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dQYXNzd29yZFRvZ2dsZUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdwYXNzd29yZCcgJiYgdGhpcy5zaG93UGFzc3dvcmRUb2dnbGU7XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gIDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgW2Zvcl09XCJpZCB8fCBuYW1lXCIgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPlxyXG4gICAge3sgbGFiZWwgfX1cclxuICAgIDxzcGFuICpuZ0lmPVwicmVxdWlyZWRcIiBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgPGRpdiAqbmdJZj1cImxlZnRJY29uXCIgY2xhc3M9XCJpbnB1dC1pY29uIGxlZnQtaWNvblwiPlxyXG4gICAgICA8aSBbY2xhc3NdPVwibGVmdEljb25cIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBbdHlwZV09XCJpbnB1dFR5cGVcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgW2lkXT1cImlkIHx8IG5hbWVcIlxyXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgICAgIFttaW5MZW5ndGhdPVwibWlubGVuZ3RoXCJcclxuICAgICAgW2F0dHIucGF0dGVybl09XCJwYXR0ZXJuXCJcclxuICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc2VzXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG4gICAgPGRpdiAqbmdJZj1cInJpZ2h0SWNvbiAmJiAhc2hvd1Bhc3N3b3JkVG9nZ2xlQnV0dG9uXCIgY2xhc3M9XCJpbnB1dC1pY29uIHJpZ2h0LWljb25cIj5cclxuICAgICAgPGkgW2NsYXNzXT1cInJpZ2h0SWNvblwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAqbmdJZj1cInNob3dQYXNzd29yZFRvZ2dsZUJ1dHRvblwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBjbGFzcz1cInBhc3N3b3JkLXRvZ2dsZS1idG5cIlxyXG4gICAgICAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KClcIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInNob3dQYXNzd29yZCA/ICdPY3VsdGFyIGNvbnRyYXNlw7FhJyA6ICdNb3N0cmFyIGNvbnRyYXNlw7FhJ1wiXHJcbiAgICA+XHJcbiAgICAgIDxpIFtjbGFzc109XCJzaG93UGFzc3dvcmQgPyAnZmFzIGZhLWV5ZS1zbGFzaCcgOiAnZmFzIGZhLWV5ZSdcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJoZWxwZXItdGV4dFwiPlxyXG4gICAge3sgaGVscGVyVGV4dCB9fVxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBjbGFzcz1cImVycm9yLXRleHRcIj5cclxuICAgIHt7IGVycm9yVGV4dCB9fVxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=