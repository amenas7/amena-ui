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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaHeadingComponent, selector: "sa-heading", inputs: { children: "children", size: "size", weight: "weight", mt: "mt", mb: "mb", mr: "mr", ml: "ml" }, ngImport: i0, template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;line-height:1.2;color:#2a3547}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaHeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-heading', template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;line-height:1.2;color:#2a3547}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaGVhZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWhlYWRpbmcvc2EtaGVhZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWhlYWRpbmcvc2EtaGVhZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFXakQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixpRUFBaUU7SUFDeEQsUUFBUSxHQUFXLEVBQUUsQ0FBQztJQUUvQiwyREFBMkQ7SUFDbkQsS0FBSyxHQUFnQixJQUFJLENBQUM7SUFDMUIsT0FBTyxHQUFrQixNQUFNLENBQUM7SUFDaEMsR0FBRyxDQUFpQjtJQUNwQixHQUFHLENBQWlCO0lBQ3BCLEdBQUcsQ0FBaUI7SUFDcEIsR0FBRyxDQUFpQjtJQUU1QixJQUNJLElBQUksQ0FBQyxLQUF3QjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFDSSxNQUFNLENBQUMsS0FBMEI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksRUFBRSxDQUFDLEtBQTBCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixNQUFNLFdBQVcsR0FBRztZQUNsQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsV0FBVztTQUNuQixDQUFDO1FBQ0YsTUFBTSxhQUFhLEdBQUc7WUFDcEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsT0FBTyxFQUFFLFVBQVU7WUFDbkIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztRQUNGLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXZELE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsSUFBSSxjQUFjLElBQUksaUJBQWlCLElBQUksZ0JBQWdCLElBQUksZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0ssQ0FBQzt3R0FwRlUsa0JBQWtCOzRGQUFsQixrQkFBa0IsNEpDWC9CLHNEQUNBOzs0RkRVYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsWUFBWTs4QkFNYixRQUFRO3NCQUFoQixLQUFLO2dCQVdGLElBQUk7c0JBRFAsS0FBSztnQkFTRixNQUFNO3NCQURULEtBQUs7Z0JBU0YsRUFBRTtzQkFETCxLQUFLO2dCQVNGLEVBQUU7c0JBREwsS0FBSztnQkFTRixFQUFFO3NCQURMLEtBQUs7Z0JBU0YsRUFBRTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG50eXBlIEhlYWRpbmdTaXplID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnMnhsJyB8ICczeGwnIHwgJzR4bCcgfCAnNXhsJztcbnR5cGUgSGVhZGluZ1dlaWdodCA9ICdib2xkJyB8ICdyZWd1bGFyJyB8ICdsaWdodCcgfCAnc2VtaWJvbGQnO1xudHlwZSBIZWFkaW5nTWFyZ2luID0gJzAnIHwgJzEnIHwgJzInIHwgJzMnIHwgJzQnIHwgJzUnIHwgJ2F1dG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYS1oZWFkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWhlYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2EtaGVhZGluZy5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgU2FIZWFkaW5nQ29tcG9uZW50IHtcbiAgLy8gUHJvcGllZGFkIHF1ZSBERUJFIHVzYXIgcHJvcGVydHkgYmluZGluZzogW2NoaWxkcmVuXT1cIid0ZXh0bydcIlxuICBASW5wdXQoKSBjaGlsZHJlbjogc3RyaW5nID0gJyc7XG4gIFxuICAvLyBQcm9waWVkYWRlcyBjb24gc2V0dGVycy9nZXR0ZXJzIHBhcmEgZmxleGliaWxpZGFkIG3DoXhpbWFcbiAgcHJpdmF0ZSBfc2l6ZTogSGVhZGluZ1NpemUgPSAnbWQnO1xuICBwcml2YXRlIF93ZWlnaHQ6IEhlYWRpbmdXZWlnaHQgPSAnYm9sZCc7XG4gIHByaXZhdGUgX210PzogSGVhZGluZ01hcmdpbjtcbiAgcHJpdmF0ZSBfbWI/OiBIZWFkaW5nTWFyZ2luO1xuICBwcml2YXRlIF9tcj86IEhlYWRpbmdNYXJnaW47XG4gIHByaXZhdGUgX21sPzogSGVhZGluZ01hcmdpbjtcblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogSGVhZGluZ1NpemUgfCBhbnkpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgfHwgJ21kJztcbiAgfVxuICBnZXQgc2l6ZSgpOiBIZWFkaW5nU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgd2VpZ2h0KHZhbHVlOiBIZWFkaW5nV2VpZ2h0IHwgYW55KSB7XG4gICAgdGhpcy5fd2VpZ2h0ID0gdmFsdWUgfHwgJ2JvbGQnO1xuICB9XG4gIGdldCB3ZWlnaHQoKTogSGVhZGluZ1dlaWdodCB7XG4gICAgcmV0dXJuIHRoaXMuX3dlaWdodDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtdCh2YWx1ZTogSGVhZGluZ01hcmdpbiB8IGFueSkge1xuICAgIHRoaXMuX210ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG10KCk6IEhlYWRpbmdNYXJnaW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtYih2YWx1ZTogSGVhZGluZ01hcmdpbiB8IGFueSkge1xuICAgIHRoaXMuX21iID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1iKCk6IEhlYWRpbmdNYXJnaW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtcih2YWx1ZTogSGVhZGluZ01hcmdpbiB8IGFueSkge1xuICAgIHRoaXMuX21yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1yKCk6IEhlYWRpbmdNYXJnaW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtbCh2YWx1ZTogSGVhZGluZ01hcmdpbiB8IGFueSkge1xuICAgIHRoaXMuX21sID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1sKCk6IEhlYWRpbmdNYXJnaW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tbDtcbiAgfVxuXG4gIGdldCBoZWFkaW5nQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemVDbGFzc2VzID0ge1xuICAgICAgJ3hzJzogJ2ZzLTYnLFxuICAgICAgJ3NtJzogJ2ZzLTUnLCBcbiAgICAgICdtZCc6ICdmcy00JyxcbiAgICAgICdsZyc6ICdmcy0zJyxcbiAgICAgICd4bCc6ICdmcy0yJyxcbiAgICAgICcyeGwnOiAnZnMtMScsXG4gICAgICAnM3hsJzogJ2Rpc3BsYXktNicsXG4gICAgICAnNHhsJzogJ2Rpc3BsYXktNScsXG4gICAgICAnNXhsJzogJ2Rpc3BsYXktNCdcbiAgICB9O1xuICAgIGNvbnN0IHdlaWdodENsYXNzZXMgPSB7XG4gICAgICAnYm9sZCc6ICdmdy1ib2xkJyxcbiAgICAgICdyZWd1bGFyJzogJ2Z3LW5vcm1hbCcsXG4gICAgICAnbGlnaHQnOiAnZnctbGlnaHQnLFxuICAgICAgJ3NlbWlib2xkJzogJ2Z3LXNlbWlib2xkJ1xuICAgIH07XG4gICAgY29uc3QgbWFyZ2luVG9wQ2xhc3MgPSB0aGlzLm10ID8gYG10LSR7dGhpcy5tdH1gIDogJyc7XG4gICAgY29uc3QgbWFyZ2luQm90dG9tQ2xhc3MgPSB0aGlzLm1iID8gYG1iLSR7dGhpcy5tYn1gIDogJyc7XG4gICAgY29uc3QgbWFyZ2luUmlnaHRDbGFzcyA9IHRoaXMubXIgPyBgbWUtJHt0aGlzLm1yfWAgOiAnJztcbiAgICBjb25zdCBtYXJnaW5MZWZ0Q2xhc3MgPSB0aGlzLm1sID8gYG1zLSR7dGhpcy5tbH1gIDogJyc7XG4gICAgXG4gICAgcmV0dXJuIGAke3NpemVDbGFzc2VzW3RoaXMuc2l6ZV0gfHwgJ2ZzLTQnfSAke3dlaWdodENsYXNzZXNbdGhpcy53ZWlnaHRdIHx8ICdmdy1ib2xkJ30gJHttYXJnaW5Ub3BDbGFzc30gJHttYXJnaW5Cb3R0b21DbGFzc30gJHttYXJnaW5SaWdodENsYXNzfSAke21hcmdpbkxlZnRDbGFzc31gLnRyaW0oKTtcbiAgfVxufVxuIiwiPGgxIFtjbGFzc109XCJoZWFkaW5nQ2xhc3Nlc1wiPnt7IGNoaWxkcmVuIH19PC9oMT5cbiJdfQ==