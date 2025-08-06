import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class SaHeadingComponent {
    // Propiedad que DEBE usar property binding: [children]="'texto'"
    children = '';
    // Propiedades con setters/getters para flexibilidad máxima
    _size = 'md';
    _weight = 'bold';
    _mt;
    _mb;
    _mr;
    _ml;
    set size(value) {
        this._size = value || 'md';
    }
    get size() {
        return this._size;
    }
    set weight(value) {
        this._weight = value || 'bold';
    }
    get weight() {
        return this._weight;
    }
    set mt(value) {
        this._mt = value;
    }
    get mt() {
        return this._mt;
    }
    set mb(value) {
        this._mb = value;
    }
    get mb() {
        return this._mb;
    }
    set mr(value) {
        this._mr = value;
    }
    get mr() {
        return this._mr;
    }
    set ml(value) {
        this._ml = value;
    }
    get ml() {
        return this._ml;
    }
    get headingClasses() {
        const sizeClasses = {
            'xs': 'fs-6',
            'sm': 'fs-5',
            'md': 'fs-4',
            'lg': 'fs-3',
            'xl': 'fs-2',
            '2xl': 'fs-1',
            '3xl': 'display-6',
            '4xl': 'display-5',
            '5xl': 'display-4'
        };
        const weightClasses = {
            'bold': 'fw-bold',
            'regular': 'fw-normal',
            'light': 'fw-light',
            'semibold': 'fw-semibold'
        };
        const marginTopClass = this.mt ? `mt-${this.mt}` : '';
        const marginBottomClass = this.mb ? `mb-${this.mb}` : '';
        const marginRightClass = this.mr ? `me-${this.mr}` : '';
        const marginLeftClass = this.ml ? `ms-${this.ml}` : '';
        return `${sizeClasses[this.size] || 'fs-4'} ${weightClasses[this.weight] || 'fw-bold'} ${marginTopClass} ${marginBottomClass} ${marginRightClass} ${marginLeftClass}`.trim();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaHeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaHeadingComponent, selector: "sa-heading", inputs: { children: "children", size: "size", weight: "weight", mt: "mt", mb: "mb", mr: "mr", ml: "ml" }, ngImport: i0, template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;line-height:1.2;color:#2a3547}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaHeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-heading', template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;line-height:1.2;color:#2a3547}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] }]
        }], propDecorators: { children: [{
                type: Input
            }], size: [{
                type: Input
            }], weight: [{
                type: Input
            }], mt: [{
                type: Input
            }], mb: [{
                type: Input
            }], mr: [{
                type: Input
            }], ml: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaGVhZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWhlYWRpbmcvc2EtaGVhZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWhlYWRpbmcvc2EtaGVhZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFXakQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixpRUFBaUU7SUFDeEQsUUFBUSxHQUFXLEVBQUUsQ0FBQztJQUUvQiwyREFBMkQ7SUFDbkQsS0FBSyxHQUFnQixJQUFJLENBQUM7SUFDMUIsT0FBTyxHQUFrQixNQUFNLENBQUM7SUFDaEMsR0FBRyxDQUFpQjtJQUNwQixHQUFHLENBQWlCO0lBQ3BCLEdBQUcsQ0FBaUI7SUFDcEIsR0FBRyxDQUFpQjtJQUU1QixJQUNJLElBQUksQ0FBQyxLQUF3QjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFDSSxNQUFNLENBQUMsS0FBMEI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixNQUFNLFdBQVcsR0FBRztZQUNsQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsV0FBVztTQUNuQixDQUFDO1FBQ0YsTUFBTSxhQUFhLEdBQUc7WUFDcEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsT0FBTyxFQUFFLFVBQVU7WUFDbkIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztRQUNGLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXZELE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsSUFBSSxjQUFjLElBQUksaUJBQWlCLElBQUksZ0JBQWdCLElBQUksZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0ssQ0FBQzt3R0FwRlUsa0JBQWtCOzRGQUFsQixrQkFBa0IsNEpDWC9CLHdEQUNBOzs0RkRVYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsWUFBWTs4QkFNYixRQUFRO3NCQUFoQixLQUFLO2dCQVdGLElBQUk7c0JBRFAsS0FBSztnQkFTRixNQUFNO3NCQURULEtBQUs7Z0JBU0YsRUFBRTtzQkFETCxLQUFLO2dCQVNGLEVBQUU7c0JBREwsS0FBSztnQkFTRixFQUFFO3NCQURMLEtBQUs7Z0JBU0YsRUFBRTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxudHlwZSBIZWFkaW5nU2l6ZSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJzJ4bCcgfCAnM3hsJyB8ICc0eGwnIHwgJzV4bCc7XHJcbnR5cGUgSGVhZGluZ1dlaWdodCA9ICdib2xkJyB8ICdyZWd1bGFyJyB8ICdsaWdodCcgfCAnc2VtaWJvbGQnO1xyXG50eXBlIEhlYWRpbmdNYXJnaW4gPSAnMCcgfCAnMScgfCAnMicgfCAnMycgfCAnNCcgfCAnNScgfCAnYXV0byc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLWhlYWRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1oZWFkaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vc2EtaGVhZGluZy5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhSGVhZGluZ0NvbXBvbmVudCB7XHJcbiAgLy8gUHJvcGllZGFkIHF1ZSBERUJFIHVzYXIgcHJvcGVydHkgYmluZGluZzogW2NoaWxkcmVuXT1cIid0ZXh0bydcIlxyXG4gIEBJbnB1dCgpIGNoaWxkcmVuOiBzdHJpbmcgPSAnJztcclxuICBcclxuICAvLyBQcm9waWVkYWRlcyBjb24gc2V0dGVycy9nZXR0ZXJzIHBhcmEgZmxleGliaWxpZGFkIG3DoXhpbWFcclxuICBwcml2YXRlIF9zaXplOiBIZWFkaW5nU2l6ZSA9ICdtZCc7XHJcbiAgcHJpdmF0ZSBfd2VpZ2h0OiBIZWFkaW5nV2VpZ2h0ID0gJ2JvbGQnO1xyXG4gIHByaXZhdGUgX210PzogSGVhZGluZ01hcmdpbjtcclxuICBwcml2YXRlIF9tYj86IEhlYWRpbmdNYXJnaW47XHJcbiAgcHJpdmF0ZSBfbXI/OiBIZWFkaW5nTWFyZ2luO1xyXG4gIHByaXZhdGUgX21sPzogSGVhZGluZ01hcmdpbjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2l6ZSh2YWx1ZTogSGVhZGluZ1NpemUgfCBhbnkpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZSB8fCAnbWQnO1xyXG4gIH1cclxuICBnZXQgc2l6ZSgpOiBIZWFkaW5nU2l6ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHdlaWdodCh2YWx1ZTogSGVhZGluZ1dlaWdodCB8IGFueSkge1xyXG4gICAgdGhpcy5fd2VpZ2h0ID0gdmFsdWUgfHwgJ2JvbGQnO1xyXG4gIH1cclxuICBnZXQgd2VpZ2h0KCk6IEhlYWRpbmdXZWlnaHQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dlaWdodDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG10KHZhbHVlOiBIZWFkaW5nTWFyZ2luIHwgYW55KSB7XHJcbiAgICB0aGlzLl9tdCA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgbXQoKTogSGVhZGluZ01hcmdpbiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbXQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYih2YWx1ZTogSGVhZGluZ01hcmdpbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbWIgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG1iKCk6IEhlYWRpbmdNYXJnaW4gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX21iO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbXIodmFsdWU6IEhlYWRpbmdNYXJnaW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX21yID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBtcigpOiBIZWFkaW5nTWFyZ2luIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9tcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1sKHZhbHVlOiBIZWFkaW5nTWFyZ2luIHwgYW55KSB7XHJcbiAgICB0aGlzLl9tbCA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgbWwoKTogSGVhZGluZ01hcmdpbiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWw7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVhZGluZ0NsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVDbGFzc2VzID0ge1xyXG4gICAgICAneHMnOiAnZnMtNicsXHJcbiAgICAgICdzbSc6ICdmcy01JywgXHJcbiAgICAgICdtZCc6ICdmcy00JyxcclxuICAgICAgJ2xnJzogJ2ZzLTMnLFxyXG4gICAgICAneGwnOiAnZnMtMicsXHJcbiAgICAgICcyeGwnOiAnZnMtMScsXHJcbiAgICAgICczeGwnOiAnZGlzcGxheS02JyxcclxuICAgICAgJzR4bCc6ICdkaXNwbGF5LTUnLFxyXG4gICAgICAnNXhsJzogJ2Rpc3BsYXktNCdcclxuICAgIH07XHJcbiAgICBjb25zdCB3ZWlnaHRDbGFzc2VzID0ge1xyXG4gICAgICAnYm9sZCc6ICdmdy1ib2xkJyxcclxuICAgICAgJ3JlZ3VsYXInOiAnZnctbm9ybWFsJyxcclxuICAgICAgJ2xpZ2h0JzogJ2Z3LWxpZ2h0JyxcclxuICAgICAgJ3NlbWlib2xkJzogJ2Z3LXNlbWlib2xkJ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG1hcmdpblRvcENsYXNzID0gdGhpcy5tdCA/IGBtdC0ke3RoaXMubXR9YCA6ICcnO1xyXG4gICAgY29uc3QgbWFyZ2luQm90dG9tQ2xhc3MgPSB0aGlzLm1iID8gYG1iLSR7dGhpcy5tYn1gIDogJyc7XHJcbiAgICBjb25zdCBtYXJnaW5SaWdodENsYXNzID0gdGhpcy5tciA/IGBtZS0ke3RoaXMubXJ9YCA6ICcnO1xyXG4gICAgY29uc3QgbWFyZ2luTGVmdENsYXNzID0gdGhpcy5tbCA/IGBtcy0ke3RoaXMubWx9YCA6ICcnO1xyXG4gICAgXHJcbiAgICByZXR1cm4gYCR7c2l6ZUNsYXNzZXNbdGhpcy5zaXplXSB8fCAnZnMtNCd9ICR7d2VpZ2h0Q2xhc3Nlc1t0aGlzLndlaWdodF0gfHwgJ2Z3LWJvbGQnfSAke21hcmdpblRvcENsYXNzfSAke21hcmdpbkJvdHRvbUNsYXNzfSAke21hcmdpblJpZ2h0Q2xhc3N9ICR7bWFyZ2luTGVmdENsYXNzfWAudHJpbSgpO1xyXG4gIH1cclxufVxyXG4iLCI8aDEgW2NsYXNzXT1cImhlYWRpbmdDbGFzc2VzXCI+e3sgY2hpbGRyZW4gfX08L2gxPlxyXG4iXX0=