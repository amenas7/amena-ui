import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SaInputComponent {
    placeholder = '';
    type = 'text';
    size = 'medium';
    variant = 'default';
    disabled = false;
    readonly = false;
    required = false;
    name = '';
    id = '';
    maxlength;
    minlength;
    pattern;
    autocomplete;
    label;
    helperText;
    errorText;
    showPasswordToggle = false;
    leftIcon;
    rightIcon;
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    input = new EventEmitter();
    value = '';
    showPassword = false;
    isFocused = false;
    // ControlValueAccessor implementation
    onChange = (value) => { };
    onTouched = () => { };
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
    // Event handlers
    onInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
        this.input.emit(event);
    }
    onFocus(event) {
        this.isFocused = true;
        this.onTouched();
        this.focus.emit(event);
    }
    onBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    // Computed properties
    get inputType() {
        if (this.type === 'password' && this.showPasswordToggle && this.showPassword) {
            return 'text';
        }
        return this.type;
    }
    get inputClasses() {
        const classes = [
            'input',
            `input-${this.size}`,
            `input-${this.variant}`,
            this.isFocused ? 'focused' : '',
            this.disabled ? 'disabled' : '',
            this.readonly ? 'readonly' : '',
            this.errorText ? 'error' : '',
            this.leftIcon ? 'has-left-icon' : '',
            this.rightIcon ? 'has-right-icon' : '',
            this.showPasswordToggle ? 'has-password-toggle' : ''
        ];
        return classes.filter(Boolean).join(' ');
    }
    get hasError() {
        return !!this.errorText;
    }
    get showPasswordToggleButton() {
        return this.type === 'password' && this.showPasswordToggle;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaInputComponent, selector: "sa-input", inputs: { placeholder: "placeholder", type: "type", size: "size", variant: "variant", disabled: "disabled", readonly: "readonly", required: "required", name: "name", id: "id", maxlength: "maxlength", minlength: "minlength", pattern: "pattern", autocomplete: "autocomplete", label: "label", helperText: "helperText", errorText: "errorText", showPasswordToggle: "showPasswordToggle", leftIcon: "leftIcon", rightIcon: "rightIcon" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur", input: "input" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaInputComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"input-container\">\n  <!-- Label -->\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\n  </label>\n\n  <!-- Input wrapper -->\n  <div class=\"input-wrapper\">\n    <!-- Left icon -->\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\n      <i [class]=\"leftIcon\"></i>\n    </div>\n\n    <!-- Input field -->\n    <input\n      [type]=\"inputType\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      [required]=\"required\"\n      [name]=\"name\"\n      [id]=\"id || name\"\n      [maxLength]=\"maxlength\"\n      [minLength]=\"minlength\"\n      [pattern]=\"pattern\"\n      [autocomplete]=\"autocomplete\"\n      [value]=\"value\"\n      [class]=\"inputClasses\"\n      (input)=\"onInput($event)\"\n      (focus)=\"onFocus($event)\"\n      (blur)=\"onBlur($event)\"\n    />\n\n    <!-- Right icon or password toggle -->\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\n      <i [class]=\"rightIcon\"></i>\n    </div>\n\n    <!-- Password toggle button -->\n    <button\n      *ngIf=\"showPasswordToggleButton\"\n      type=\"button\"\n      class=\"password-toggle-btn\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\n    </button>\n  </div>\n\n  <!-- Helper text -->\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\n    {{ helperText }}\n  </div>\n\n  <!-- Error text -->\n  <div *ngIf=\"errorText\" class=\"error-text\">\n    {{ errorText }}\n  </div>\n</div>\n", styles: [".input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:inherit;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input-container\">\n  <!-- Label -->\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\n  </label>\n\n  <!-- Input wrapper -->\n  <div class=\"input-wrapper\">\n    <!-- Left icon -->\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\n      <i [class]=\"leftIcon\"></i>\n    </div>\n\n    <!-- Input field -->\n    <input\n      [type]=\"inputType\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      [required]=\"required\"\n      [name]=\"name\"\n      [id]=\"id || name\"\n      [maxLength]=\"maxlength\"\n      [minLength]=\"minlength\"\n      [pattern]=\"pattern\"\n      [autocomplete]=\"autocomplete\"\n      [value]=\"value\"\n      [class]=\"inputClasses\"\n      (input)=\"onInput($event)\"\n      (focus)=\"onFocus($event)\"\n      (blur)=\"onBlur($event)\"\n    />\n\n    <!-- Right icon or password toggle -->\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\n      <i [class]=\"rightIcon\"></i>\n    </div>\n\n    <!-- Password toggle button -->\n    <button\n      *ngIf=\"showPasswordToggleButton\"\n      type=\"button\"\n      class=\"password-toggle-btn\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\n    </button>\n  </div>\n\n  <!-- Helper text -->\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\n    {{ helperText }}\n  </div>\n\n  <!-- Error text -->\n  <div *ngIf=\"errorText\" class=\"error-text\">\n    {{ errorText }}\n  </div>\n</div>\n", styles: [".input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:inherit;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"] }]
        }], propDecorators: { placeholder: [{
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
            }], autocomplete: [{
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
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], input: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBa0J6RSxNQUFNLE9BQU8sZ0JBQWdCO0lBQ2xCLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxHQUFjLE1BQU0sQ0FBQztJQUN6QixJQUFJLEdBQWMsUUFBUSxDQUFDO0lBQzNCLE9BQU8sR0FBaUIsU0FBUyxDQUFDO0lBQ2xDLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLElBQUksR0FBVyxFQUFFLENBQUM7SUFDbEIsRUFBRSxHQUFXLEVBQUUsQ0FBQztJQUNoQixTQUFTLENBQVU7SUFDbkIsU0FBUyxDQUFVO0lBQ25CLE9BQU8sQ0FBVTtJQUNqQixZQUFZLENBQVU7SUFDdEIsS0FBSyxDQUFVO0lBQ2YsVUFBVSxDQUFVO0lBQ3BCLFNBQVMsQ0FBVTtJQUNuQixrQkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDcEMsUUFBUSxDQUFVO0lBQ2xCLFNBQVMsQ0FBVTtJQUVsQixXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUN6QyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN2QyxJ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SztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAndGV4dCcgfCAnZW1haWwnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInIHwgJ3RlbCcgfCAndXJsJyB8ICdzZWFyY2gnIHwgJ2RhdGUnIHwgJ3RpbWUnIHwgJ2RhdGV0aW1lLWxvY2FsJztcbmV4cG9ydCB0eXBlIElucHV0U2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5leHBvcnQgdHlwZSBJbnB1dFZhcmlhbnQgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zYS1pbnB1dC5jb21wb25lbnQuc2NzcycsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTYUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHR5cGU6IElucHV0VHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgc2l6ZTogSW5wdXRTaXplID0gJ21lZGl1bSc7XG4gIEBJbnB1dCgpIHZhcmlhbnQ6IElucHV0VmFyaWFudCA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbWF4bGVuZ3RoPzogbnVtYmVyO1xuICBASW5wdXQoKSBtaW5sZW5ndGg/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhdHRlcm4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZT86IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlbHBlclRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVycm9yVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1Bhc3N3b3JkVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxlZnRJY29uPzogc3RyaW5nO1xuICBASW5wdXQoKSByaWdodEljb24/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBpbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBzaG93UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cbiAgcHJpdmF0ZSBvbkNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLy8gRXZlbnQgaGFuZGxlcnNcbiAgb25JbnB1dChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW5wdXQuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uQmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGFzc3dvcmQgPSAhdGhpcy5zaG93UGFzc3dvcmQ7XG4gIH1cblxuICAvLyBDb21wdXRlZCBwcm9wZXJ0aWVzXG4gIGdldCBpbnB1dFR5cGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAncGFzc3dvcmQnICYmIHRoaXMuc2hvd1Bhc3N3b3JkVG9nZ2xlICYmIHRoaXMuc2hvd1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gJ3RleHQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAnaW5wdXQnLFxuICAgICAgYGlucHV0LSR7dGhpcy5zaXplfWAsXG4gICAgICBgaW5wdXQtJHt0aGlzLnZhcmlhbnR9YCxcbiAgICAgIHRoaXMuaXNGb2N1c2VkID8gJ2ZvY3VzZWQnIDogJycsXG4gICAgICB0aGlzLmRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnLFxuICAgICAgdGhpcy5yZWFkb25seSA/ICdyZWFkb25seScgOiAnJyxcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID8gJ2Vycm9yJyA6ICcnLFxuICAgICAgdGhpcy5sZWZ0SWNvbiA/ICdoYXMtbGVmdC1pY29uJyA6ICcnLFxuICAgICAgdGhpcy5yaWdodEljb24gPyAnaGFzLXJpZ2h0LWljb24nIDogJycsXG4gICAgICB0aGlzLnNob3dQYXNzd29yZFRvZ2dsZSA/ICdoYXMtcGFzc3dvcmQtdG9nZ2xlJyA6ICcnXG4gICAgXTtcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZXJyb3JUZXh0O1xuICB9XG5cbiAgZ2V0IHNob3dQYXNzd29yZFRvZ2dsZUJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAncGFzc3dvcmQnICYmIHRoaXMuc2hvd1Bhc3N3b3JkVG9nZ2xlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gIDwhLS0gTGFiZWwgLS0+XG4gIDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgW2Zvcl09XCJpZCB8fCBuYW1lXCIgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPlxuICAgIHt7IGxhYmVsIH19XG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCI+Kjwvc3Bhbj5cbiAgPC9sYWJlbD5cblxuICA8IS0tIElucHV0IHdyYXBwZXIgLS0+XG4gIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgPCEtLSBMZWZ0IGljb24gLS0+XG4gICAgPGRpdiAqbmdJZj1cImxlZnRJY29uXCIgY2xhc3M9XCJpbnB1dC1pY29uIGxlZnQtaWNvblwiPlxuICAgICAgPGkgW2NsYXNzXT1cImxlZnRJY29uXCI+PC9pPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBJbnB1dCBmaWVsZCAtLT5cbiAgICA8aW5wdXRcbiAgICAgIFt0eXBlXT1cImlucHV0VHlwZVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICBbaWRdPVwiaWQgfHwgbmFtZVwiXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heGxlbmd0aFwiXG4gICAgICBbbWluTGVuZ3RoXT1cIm1pbmxlbmd0aFwiXG4gICAgICBbcGF0dGVybl09XCJwYXR0ZXJuXCJcbiAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc2VzXCJcbiAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gICAgLz5cblxuICAgIDwhLS0gUmlnaHQgaWNvbiBvciBwYXNzd29yZCB0b2dnbGUgLS0+XG4gICAgPGRpdiAqbmdJZj1cInJpZ2h0SWNvbiAmJiAhc2hvd1Bhc3N3b3JkVG9nZ2xlQnV0dG9uXCIgY2xhc3M9XCJpbnB1dC1pY29uIHJpZ2h0LWljb25cIj5cbiAgICAgIDxpIFtjbGFzc109XCJyaWdodEljb25cIj48L2k+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFBhc3N3b3JkIHRvZ2dsZSBidXR0b24gLS0+XG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCJzaG93UGFzc3dvcmRUb2dnbGVCdXR0b25cIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cInBhc3N3b3JkLXRvZ2dsZS1idG5cIlxuICAgICAgKGNsaWNrKT1cInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwic2hvd1Bhc3N3b3JkID8gJ09jdWx0YXIgY29udHJhc2XDsWEnIDogJ01vc3RyYXIgY29udHJhc2XDsWEnXCJcbiAgICA+XG4gICAgICA8aSBbY2xhc3NdPVwic2hvd1Bhc3N3b3JkID8gJ2ZhcyBmYS1leWUtc2xhc2gnIDogJ2ZhcyBmYS1leWUnXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8IS0tIEhlbHBlciB0ZXh0IC0tPlxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJoZWxwZXItdGV4dFwiPlxuICAgIHt7IGhlbHBlclRleHQgfX1cbiAgPC9kaXY+XG5cbiAgPCEtLSBFcnJvciB0ZXh0IC0tPlxuICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZXh0XCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+XG4gICAge3sgZXJyb3JUZXh0IH19XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=