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
            this.updateRadiosProperties();
        });
    }
    ngOnChanges(changes) {
        // Si hay radios inicializados, actualizar sus propiedades
        if (this.radios && this.radios.length > 0) {
            this.updateRadiosProperties();
        }
    }
    updateRadiosProperties() {
        this.radios.forEach((radio) => {
            radio.name = this.name;
            radio.size = this.size;
            radio.status = this.status;
            radio.disabled = this.disabled;
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
        ], queries: [{ propertyName: "radios", predicate: SaRadioComponent }], usesOnChanges: true, ngImport: i0, template: "<div class=\"radio-group-container\">\r\n  <!-- Label del grupo -->\r\n  <label *ngIf=\"label\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"required-asterisk\">*</span>\r\n  </label>\r\n\r\n  <!-- Contenedor de los radios (proyectados con ng-content) -->\r\n  <div class=\"radio-group-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <!-- Helper text -->\r\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">\r\n    {{ helperText }}\r\n  </div>\r\n\r\n  <!-- Error text -->\r\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">\r\n    {{ errorText }}\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block}.radio-group-container,.radio-group-content{display:flex;flex-direction:column;gap:.5rem}.form-label{font-weight:500;margin-bottom:.25rem;display:block}.form-label.label-sm{font-size:.875rem}.form-label.label-md{font-size:1rem}.form-label.label-lg{font-size:1.125rem}.required-asterisk{color:#dc3545;margin-left:.25rem}.form-text{color:#6c757d;margin-top:.25rem}.form-text.helper-text-sm{font-size:.75rem}.form-text.helper-text-md{font-size:.875rem}.form-text.helper-text-lg{font-size:.9375rem}.invalid-feedback{color:#dc3545;margin-top:.25rem}.invalid-feedback.error-text-sm{font-size:.75rem}.invalid-feedback.error-text-md{font-size:.875rem}.invalid-feedback.error-text-lg{font-size:.9375rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1yYWRpby1ncm91cC9zYS1yYWRpby1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXJhZGlvLWdyb3VwL3NhLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQ3hKLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBa0JsRSxNQUFNLE9BQU8scUJBQXFCO0lBQ3ZCLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsSUFBSSxHQUFtQixJQUFJLENBQUM7SUFDNUIsTUFBTSxHQUFxQixTQUFTLENBQUM7SUFDckMsVUFBVSxHQUFXLEVBQUUsQ0FBQztJQUN4QixTQUFTLEdBQVcsRUFBRSxDQUFDO0lBQ3ZCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixJQUFJLEdBQVcsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUU5QyxNQUFNLENBQStCO0lBRXhFLEtBQUssR0FBUSxJQUFJLENBQUM7SUFDbEIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUVuQixRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENB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QVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3BELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRixpREFZZ0IsZ0JBQWdCLGtEQzlCbkMsdXBCQXNCQTs7NEZERmEscUJBQXFCO2tCQWJqQyxTQUFTOytCQUNFLGdCQUFnQixpQkFHWCxpQkFBaUIsQ0FBQyxTQUFTLGFBQy9CO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFHUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFNkIsTUFBTTtzQkFBeEMsZUFBZTt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNhUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgUmFkaW9Hcm91cFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XHJcbmV4cG9ydCB0eXBlIFJhZGlvR3JvdXBTdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS1yYWRpby1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zYS1yYWRpby1ncm91cC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhUmFkaW9Hcm91cENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNpemU6IFJhZGlvR3JvdXBTaXplID0gJ21kJztcclxuICBASW5wdXQoKSBzdGF0dXM6IFJhZGlvR3JvdXBTdGF0dXMgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gYHJhZGlvLWdyb3VwLSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpfWA7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oU2FSYWRpb0NvbXBvbmVudCkgcmFkaW9zITogUXVlcnlMaXN0PFNhUmFkaW9Db21wb25lbnQ+O1xyXG5cclxuICB2YWx1ZTogYW55ID0gbnVsbDtcclxuICBpc1RvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFNpbmNyb25pemFyIHByb3BpZWRhZGVzIGRlbCBncnVwbyBjb24gbG9zIHJhZGlvcyBoaWpvc1xyXG4gICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcclxuICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgcmFkaW8uc2l6ZSA9IHRoaXMuc2l6ZTtcclxuICAgICAgcmFkaW8uc3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuXHJcbiAgICAgIC8vIFN1c2NyaWJpcnNlIGEgY2FtYmlvcyBkZSB2YWxvciBlbiBjYWRhIHJhZGlvXHJcbiAgICAgIHJhZGlvLnZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBY3R1YWxpemFyIGVzdGFkbyBjdWFuZG8gY2FtYmlhbiBsb3MgcmFkaW9zXHJcbiAgICB0aGlzLnJhZGlvcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlUmFkaW9zUHJvcGVydGllcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBTaSBoYXkgcmFkaW9zIGluaWNpYWxpemFkb3MsIGFjdHVhbGl6YXIgc3VzIHByb3BpZWRhZGVzXHJcbiAgICBpZiAodGhpcy5yYWRpb3MgJiYgdGhpcy5yYWRpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVJhZGlvc1Byb3BlcnRpZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUmFkaW9zUHJvcGVydGllcygpOiB2b2lkIHtcclxuICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XHJcbiAgICAgIHJhZGlvLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgIHJhZGlvLnNpemUgPSB0aGlzLnNpemU7XHJcbiAgICAgIHJhZGlvLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWxhYmVsIGxhYmVsLXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1sYWJlbCBsYWJlbC1sZydcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1sYWJlbCBsYWJlbC1tZCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVscGVyVGV4dENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLXRleHQnXTtcclxuXHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnaGVscGVyLXRleHQtc20nLFxyXG4gICAgICAnbWQnOiAnaGVscGVyLXRleHQtbWQnLFxyXG4gICAgICAnbGcnOiAnaGVscGVyLXRleHQtbGcnXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0pIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgZXJyb3JUZXh0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2ludmFsaWQtZmVlZGJhY2snLCAnZC1ibG9jayddO1xyXG5cclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdlcnJvci10ZXh0LXNtJyxcclxuICAgICAgJ21kJzogJ2Vycm9yLXRleHQtbWQnLFxyXG4gICAgICAnbGcnOiAnZXJyb3ItdGV4dC1sZydcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgLy8gQWN0dWFsaXphciBlbCB2YWxvciBzZWxlY2Npb25hZG8gZW4gbG9zIHJhZGlvcyBoaWpvcyB1c2FuZG8gc2VsZWN0ZWRWYWx1ZVxyXG4gICAgaWYgKHRoaXMucmFkaW9zKSB7XHJcbiAgICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XHJcbiAgICAgICAgcmFkaW8uc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcclxuICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcclxuICAgICAgICByYWRpby5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicmFkaW8tZ3JvdXAtY29udGFpbmVyXCI+XHJcbiAgPCEtLSBMYWJlbCBkZWwgZ3J1cG8gLS0+XHJcbiAgPGxhYmVsICpuZ0lmPVwibGFiZWxcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gQ29udGVuZWRvciBkZSBsb3MgcmFkaW9zIChwcm95ZWN0YWRvcyBjb24gbmctY29udGVudCkgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInJhZGlvLWdyb3VwLWNvbnRlbnRcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBIZWxwZXIgdGV4dCAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgW2NsYXNzXT1cImhlbHBlclRleHRDbGFzc2VzXCI+XHJcbiAgICB7eyBoZWxwZXJUZXh0IH19XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gRXJyb3IgdGV4dCAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZXh0XCIgW2NsYXNzXT1cImVycm9yVGV4dENsYXNzZXNcIj5cclxuICAgIHt7IGVycm9yVGV4dCB9fVxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19