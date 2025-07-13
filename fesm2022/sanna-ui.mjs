import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class SannaUiService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SannaUiComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SannaUiComponent, selector: "lib-sanna-ui", ngImport: i0, template: `
    <p>
      sanna-ui works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sanna-ui', template: `
    <p>
      sanna-ui works!
    </p>
  ` }]
        }] });

class ButtonComponent {
    label = 'Button';
    variant = 'primary';
    size = 'medium';
    disabled = false;
    loading = false;
    fullWidth = false;
    type = 'button';
    icon;
    iconPosition = 'left';
    clicked = new EventEmitter();
    onClick() {
        if (!this.disabled && !this.loading) {
            this.clicked.emit();
        }
    }
    get buttonClasses() {
        const classes = [
            'sanna-button',
            `sanna-button--${this.variant}`,
            `sanna-button--${this.size}`,
            this.fullWidth ? 'sanna-button--full-width' : '',
            this.disabled ? 'sanna-button--disabled' : '',
            this.loading ? 'sanna-button--loading' : ''
        ];
        return classes.filter(Boolean).join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ButtonComponent, selector: "lib-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", iconPosition: "iconPosition" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<button\n  [class]=\"buttonClasses\"\n  [type]=\"type\"\n  [disabled]=\"disabled || loading\"\n  (click)=\"onClick()\"\n  class=\"sanna-button\">\n  \n  <!-- Loading spinner -->\n  <div *ngIf=\"loading\" class=\"sanna-button__spinner\">\n    <svg class=\"sanna-button__spinner-icon\" viewBox=\"0 0 24 24\">\n      <circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-dasharray=\"31.416\" stroke-dashoffset=\"31.416\">\n        <animate attributeName=\"stroke-dasharray\" dur=\"2s\" values=\"0 31.416;15.708 15.708;0 31.416\" repeatCount=\"indefinite\"/>\n        <animate attributeName=\"stroke-dashoffset\" dur=\"2s\" values=\"0;-15.708;-31.416\" repeatCount=\"indefinite\"/>\n      </circle>\n    </svg>\n  </div>\n\n  <!-- Icon left -->\n  <i *ngIf=\"icon && iconPosition === 'left' && !loading\" class=\"sanna-button__icon sanna-button__icon--left\" [class]=\"icon\"></i>\n  \n  <!-- Label -->\n  <span *ngIf=\"!loading\" class=\"sanna-button__label\">{{ label }}</span>\n  \n  <!-- Icon right -->\n  <i *ngIf=\"icon && iconPosition === 'right' && !loading\" class=\"sanna-button__icon sanna-button__icon--right\" [class]=\"icon\"></i>\n</button>\n", styles: [".sanna-button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:500;text-decoration:none;cursor:pointer;transition:all .2s ease-in-out;box-shadow:0 2px 4px #0000001a;outline:none;-webkit-user-select:none;user-select:none}.sanna-button:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 4px 8px #00000026}.sanna-button:active:not(:disabled){transform:translateY(0);box-shadow:0 2px 4px #0000001a}.sanna-button:focus-visible{outline:2px solid #3b82f6;outline-offset:2px}.sanna-button:disabled{cursor:not-allowed;opacity:.6}.sanna-button--small{padding:8px 16px;font-size:14px;min-height:32px}.sanna-button--medium{padding:12px 24px;font-size:16px;min-height:40px}.sanna-button--large{padding:16px 32px;font-size:18px;min-height:48px}.sanna-button--primary{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.sanna-button--primary:hover:not(:disabled){background:linear-gradient(135deg,#5a6fd8,#6a4190)}.sanna-button--secondary{background:#f8fafc;color:#374151;border:1px solid #d1d5db}.sanna-button--secondary:hover:not(:disabled){background:#f1f5f9;border-color:#9ca3af}.sanna-button--success{background:linear-gradient(135deg,#10b981,#059669);color:#fff}.sanna-button--success:hover:not(:disabled){background:linear-gradient(135deg,#059669,#047857)}.sanna-button--danger{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff}.sanna-button--danger:hover:not(:disabled){background:linear-gradient(135deg,#dc2626,#b91c1c)}.sanna-button--warning{background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff}.sanna-button--warning:hover:not(:disabled){background:linear-gradient(135deg,#d97706,#b45309)}.sanna-button--info{background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff}.sanna-button--info:hover:not(:disabled){background:linear-gradient(135deg,#2563eb,#1d4ed8)}.sanna-button--full-width{width:100%}.sanna-button--loading{pointer-events:none}.sanna-button__spinner{display:flex;align-items:center;justify-content:center}.sanna-button__spinner-icon{width:20px;height:20px;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.sanna-button__icon{font-size:1em;line-height:1}.sanna-button__icon--left{margin-right:4px}.sanna-button__icon--right{margin-left:4px}.sanna-button__label{line-height:1}@media (max-width: 768px){.sanna-button--large{padding:14px 28px;font-size:16px;min-height:44px}.sanna-button--medium{padding:10px 20px;font-size:15px;min-height:36px}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', template: "<button\n  [class]=\"buttonClasses\"\n  [type]=\"type\"\n  [disabled]=\"disabled || loading\"\n  (click)=\"onClick()\"\n  class=\"sanna-button\">\n  \n  <!-- Loading spinner -->\n  <div *ngIf=\"loading\" class=\"sanna-button__spinner\">\n    <svg class=\"sanna-button__spinner-icon\" viewBox=\"0 0 24 24\">\n      <circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-dasharray=\"31.416\" stroke-dashoffset=\"31.416\">\n        <animate attributeName=\"stroke-dasharray\" dur=\"2s\" values=\"0 31.416;15.708 15.708;0 31.416\" repeatCount=\"indefinite\"/>\n        <animate attributeName=\"stroke-dashoffset\" dur=\"2s\" values=\"0;-15.708;-31.416\" repeatCount=\"indefinite\"/>\n      </circle>\n    </svg>\n  </div>\n\n  <!-- Icon left -->\n  <i *ngIf=\"icon && iconPosition === 'left' && !loading\" class=\"sanna-button__icon sanna-button__icon--left\" [class]=\"icon\"></i>\n  \n  <!-- Label -->\n  <span *ngIf=\"!loading\" class=\"sanna-button__label\">{{ label }}</span>\n  \n  <!-- Icon right -->\n  <i *ngIf=\"icon && iconPosition === 'right' && !loading\" class=\"sanna-button__icon sanna-button__icon--right\" [class]=\"icon\"></i>\n</button>\n", styles: [".sanna-button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:500;text-decoration:none;cursor:pointer;transition:all .2s ease-in-out;box-shadow:0 2px 4px #0000001a;outline:none;-webkit-user-select:none;user-select:none}.sanna-button:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 4px 8px #00000026}.sanna-button:active:not(:disabled){transform:translateY(0);box-shadow:0 2px 4px #0000001a}.sanna-button:focus-visible{outline:2px solid #3b82f6;outline-offset:2px}.sanna-button:disabled{cursor:not-allowed;opacity:.6}.sanna-button--small{padding:8px 16px;font-size:14px;min-height:32px}.sanna-button--medium{padding:12px 24px;font-size:16px;min-height:40px}.sanna-button--large{padding:16px 32px;font-size:18px;min-height:48px}.sanna-button--primary{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.sanna-button--primary:hover:not(:disabled){background:linear-gradient(135deg,#5a6fd8,#6a4190)}.sanna-button--secondary{background:#f8fafc;color:#374151;border:1px solid #d1d5db}.sanna-button--secondary:hover:not(:disabled){background:#f1f5f9;border-color:#9ca3af}.sanna-button--success{background:linear-gradient(135deg,#10b981,#059669);color:#fff}.sanna-button--success:hover:not(:disabled){background:linear-gradient(135deg,#059669,#047857)}.sanna-button--danger{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff}.sanna-button--danger:hover:not(:disabled){background:linear-gradient(135deg,#dc2626,#b91c1c)}.sanna-button--warning{background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff}.sanna-button--warning:hover:not(:disabled){background:linear-gradient(135deg,#d97706,#b45309)}.sanna-button--info{background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff}.sanna-button--info:hover:not(:disabled){background:linear-gradient(135deg,#2563eb,#1d4ed8)}.sanna-button--full-width{width:100%}.sanna-button--loading{pointer-events:none}.sanna-button__spinner{display:flex;align-items:center;justify-content:center}.sanna-button__spinner-icon{width:20px;height:20px;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.sanna-button__icon{font-size:1em;line-height:1}.sanna-button__icon--left{margin-right:4px}.sanna-button__icon--right{margin-left:4px}.sanna-button__label{line-height:1}@media (max-width: 768px){.sanna-button--large{padding:14px 28px;font-size:16px;min-height:44px}.sanna-button--medium{padding:10px 20px;font-size:15px;min-height:36px}}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], type: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class SannaUiModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, declarations: [SannaUiComponent,
            ButtonComponent], imports: [CommonModule], exports: [SannaUiComponent,
            ButtonComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SannaUiComponent,
                        ButtonComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        SannaUiComponent,
                        ButtonComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of sanna-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, SannaUiComponent, SannaUiModule, SannaUiService };
//# sourceMappingURL=sanna-ui.mjs.map
