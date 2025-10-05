import { Component, Input, forwardRef, ViewEncapsulation, ContentChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SaRadioComponent } from '../sa-radio/sa-radio.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SaRadioGroupComponent {
    label = '';
    size = 'md';
    status = 'default';
    helperText = '';
    errorText = '';
    required = false;
    disabled = false;
    name = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    radios;
    value = null;
    isTouched = false;
    onChange = (_) => { };
    onTouched = () => { };
    ngAfterContentInit() {
        // Sincronizar propiedades del grupo con los radios hijos
        this.radios.forEach((radio) => {
            radio.name = this.name;
            radio.size = this.size;
            radio.status = this.status;
            radio.disabled = this.disabled;
            // Suscribirse a cambios de valor en cada radio
            radio.valueChange.subscribe((value) => {
                this.value = value;
                this.onChange(value);
                this.isTouched = true;
                this.onTouched();
            });
        });
        // Actualizar estado cuando cambian los radios
        this.radios.changes.subscribe(() => {
            this.radios.forEach((radio) => {
                radio.name = this.name;
                radio.size = this.size;
                radio.status = this.status;
                radio.disabled = this.disabled;
            });
        });
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-label label-sm',
            'md': 'form-label label-md',
            'lg': 'form-label label-lg'
        };
        return sizeMap[this.size] || 'form-label label-md';
    }
    get helperTextClasses() {
        const baseClasses = ['form-text'];
        const sizeMap = {
            'sm': 'helper-text-sm',
            'md': 'helper-text-md',
            'lg': 'helper-text-lg'
        };
        if (sizeMap[this.size]) {
            baseClasses.push(sizeMap[this.size]);
        }
        return baseClasses.join(' ');
    }
    get errorTextClasses() {
        const baseClasses = ['invalid-feedback', 'd-block'];
        const sizeMap = {
            'sm': 'error-text-sm',
            'md': 'error-text-md',
            'lg': 'error-text-lg'
        };
        if (sizeMap[this.size]) {
            baseClasses.push(sizeMap[this.size]);
        }
        return baseClasses.join(' ');
    }
    writeValue(value) {
        this.value = value;
        // Actualizar el valor seleccionado en los radios hijos usando selectedValue
        if (this.radios) {
            this.radios.forEach((radio) => {
                radio.selectedValue = value;
            });
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        if (this.radios) {
            this.radios.forEach((radio) => {
                radio.disabled = isDisabled;
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaRadioGroupComponent, selector: "sa-radio-group", inputs: { label: "label", size: "size", status: "status", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", name: "name" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaRadioGroupComponent),
                multi: true
            }
        ], queries: [{ propertyName: "radios", predicate: SaRadioComponent }], ngImport: i0, template: "<div class=\"radio-group-container\">\r\n  <!-- Label del grupo -->\r\n  <label *ngIf=\"label\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"required-asterisk\">*</span>\r\n  </label>\r\n\r\n  <!-- Contenedor de los radios (proyectados con ng-content) -->\r\n  <div class=\"radio-group-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <!-- Helper text -->\r\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">\r\n    {{ helperText }}\r\n  </div>\r\n\r\n  <!-- Error text -->\r\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">\r\n    {{ errorText }}\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block}.radio-group-container,.radio-group-content{display:flex;flex-direction:column;gap:.5rem}.form-label{font-weight:500;margin-bottom:.25rem;display:block}.form-label.label-sm{font-size:.875rem}.form-label.label-md{font-size:1rem}.form-label.label-lg{font-size:1.125rem}.required-asterisk{color:#dc3545;margin-left:.25rem}.form-text{color:#6c757d;margin-top:.25rem}.form-text.helper-text-sm{font-size:.75rem}.form-text.helper-text-md{font-size:.875rem}.form-text.helper-text-lg{font-size:.9375rem}.invalid-feedback{color:#dc3545;margin-top:.25rem}.invalid-feedback.error-text-sm{font-size:.75rem}.invalid-feedback.error-text-md{font-size:.875rem}.invalid-feedback.error-text-lg{font-size:.9375rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-radio-group', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaRadioGroupComponent),
                            multi: true
                        }
                    ], template: "<div class=\"radio-group-container\">\r\n  <!-- Label del grupo -->\r\n  <label *ngIf=\"label\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"required-asterisk\">*</span>\r\n  </label>\r\n\r\n  <!-- Contenedor de los radios (proyectados con ng-content) -->\r\n  <div class=\"radio-group-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <!-- Helper text -->\r\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">\r\n    {{ helperText }}\r\n  </div>\r\n\r\n  <!-- Error text -->\r\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">\r\n    {{ errorText }}\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block}.radio-group-container,.radio-group-content{display:flex;flex-direction:column;gap:.5rem}.form-label{font-weight:500;margin-bottom:.25rem;display:block}.form-label.label-sm{font-size:.875rem}.form-label.label-md{font-size:1rem}.form-label.label-lg{font-size:1.125rem}.required-asterisk{color:#dc3545;margin-left:.25rem}.form-text{color:#6c757d;margin-top:.25rem}.form-text.helper-text-sm{font-size:.75rem}.form-text.helper-text-md{font-size:.875rem}.form-text.helper-text-lg{font-size:.9375rem}.invalid-feedback{color:#dc3545;margin-top:.25rem}.invalid-feedback.error-text-sm{font-size:.75rem}.invalid-feedback.error-text-md{font-size:.875rem}.invalid-feedback.error-text-lg{font-size:.9375rem}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], name: [{
                type: Input
            }], radios: [{
                type: ContentChildren,
                args: [SaRadioComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1yYWRpby1ncm91cC9zYS1yYWRpby1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXJhZGlvLWdyb3VwL3NhLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBa0JsRSxNQUFNLE9BQU8scUJBQXFCO0lBQ3ZCLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsSUFBSSxHQUFtQixJQUFJLENBQUM7SUFDNUIsTUFBTSxHQUFxQixTQUFTLENBQUM7SUFDckMsVUFBVSxHQUFXLEVBQUUsQ0FBQztJQUN4QixTQUFTLEdBQVcsRUFBRSxDQUFDO0lBQ3ZCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixJQUFJLEdBQVcsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUU5QyxNQUFNLENBQStCO0lBRXhFLEtBQUssR0FBUSxJQUFJLENBQUM7SUFDbEIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUVuQixRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENB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RUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFHUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFNkIsTUFBTTtzQkFBeEMsZUFBZTt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTYVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vc2EtcmFkaW8vc2EtcmFkaW8uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIFJhZGlvR3JvdXBTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBSYWRpb0dyb3VwU3RhdHVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2EtcmFkaW8tZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2EtcmFkaW8tZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTYVJhZGlvR3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhUmFkaW9Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2l6ZTogUmFkaW9Hcm91cFNpemUgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogUmFkaW9Hcm91cFN0YXR1cyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSBgcmFkaW8tZ3JvdXAtJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSl9YDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihTYVJhZGlvQ29tcG9uZW50KSByYWRpb3MhOiBRdWVyeUxpc3Q8U2FSYWRpb0NvbXBvbmVudD47XHJcblxyXG4gIHZhbHVlOiBhbnkgPSBudWxsO1xyXG4gIGlzVG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gU2luY3Jvbml6YXIgcHJvcGllZGFkZXMgZGVsIGdydXBvIGNvbiBsb3MgcmFkaW9zIGhpam9zXHJcbiAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xyXG4gICAgICByYWRpby5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICByYWRpby5zaXplID0gdGhpcy5zaXplO1xyXG4gICAgICByYWRpby5zdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG5cclxuICAgICAgLy8gU3VzY3JpYmlyc2UgYSBjYW1iaW9zIGRlIHZhbG9yIGVuIGNhZGEgcmFkaW9cclxuICAgICAgcmFkaW8udmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFjdHVhbGl6YXIgZXN0YWRvIGN1YW5kbyBjYW1iaWFuIGxvcyByYWRpb3NcclxuICAgIHRoaXMucmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcclxuICAgICAgICByYWRpby5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIHJhZGlvLnNpemUgPSB0aGlzLnNpemU7XHJcbiAgICAgICAgcmFkaW8uc3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tbGFiZWwgbGFiZWwtc20nLFxyXG4gICAgICAnbWQnOiAnZm9ybS1sYWJlbCBsYWJlbC1tZCcsXHJcbiAgICAgICdsZyc6ICdmb3JtLWxhYmVsIGxhYmVsLWxnJ1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWxhYmVsIGxhYmVsLW1kJztcclxuICB9XHJcblxyXG4gIGdldCBoZWxwZXJUZXh0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tdGV4dCddO1xyXG5cclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdoZWxwZXItdGV4dC1zbScsXHJcbiAgICAgICdtZCc6ICdoZWxwZXItdGV4dC1tZCcsXHJcbiAgICAgICdsZyc6ICdoZWxwZXItdGV4dC1sZydcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBlcnJvclRleHRDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnaW52YWxpZC1mZWVkYmFjaycsICdkLWJsb2NrJ107XHJcblxyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Vycm9yLXRleHQtc20nLFxyXG4gICAgICAnbWQnOiAnZXJyb3ItdGV4dC1tZCcsXHJcbiAgICAgICdsZyc6ICdlcnJvci10ZXh0LWxnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAvLyBBY3R1YWxpemFyIGVsIHZhbG9yIHNlbGVjY2lvbmFkbyBlbiBsb3MgcmFkaW9zIGhpam9zIHVzYW5kbyBzZWxlY3RlZFZhbHVlXHJcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcclxuICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcclxuICAgICAgICByYWRpby5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIGlmICh0aGlzLnJhZGlvcykge1xyXG4gICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xyXG4gICAgICAgIHJhZGlvLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJyYWRpby1ncm91cC1jb250YWluZXJcIj5cclxuICA8IS0tIExhYmVsIGRlbCBncnVwbyAtLT5cclxuICA8bGFiZWwgKm5nSWY9XCJsYWJlbFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cclxuICAgIHt7IGxhYmVsIH19XHJcbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkXCIgY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBDb250ZW5lZG9yIGRlIGxvcyByYWRpb3MgKHByb3llY3RhZG9zIGNvbiBuZy1jb250ZW50KSAtLT5cclxuICA8ZGl2IGNsYXNzPVwicmFkaW8tZ3JvdXAtY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIEhlbHBlciB0ZXh0IC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0ICYmICFlcnJvclRleHRcIiBbY2xhc3NdPVwiaGVscGVyVGV4dENsYXNzZXNcIj5cclxuICAgIHt7IGhlbHBlclRleHQgfX1cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBFcnJvciB0ZXh0IC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBbY2xhc3NdPVwiZXJyb3JUZXh0Q2xhc3Nlc1wiPlxyXG4gICAge3sgZXJyb3JUZXh0IH19XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=