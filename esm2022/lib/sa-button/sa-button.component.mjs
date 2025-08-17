import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faEdit, faSave, faPlus, faMinus, faCheck, faTimes, faEye, faEyeSlash, faLock, faUnlock, faBell, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faInfo, faExclamationTriangle, faQuestion, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
export class SaButtonComponent {
    // Propiedades con flexibilidad máxima: soportan attribute y property binding
    label = 'Button'; // Mantener como @Input simple para strings
    // Propiedades con setters/getters para flexibilidad máxima
    _variant = 'primary';
    _size = 'medium';
    _disabled = false;
    _loading = false;
    _fullWidth = false;
    _type = 'button';
    _icon;
    _position = 'left';
    _iconOnly = false;
    set variant(value) {
        this._variant = value || 'primary';
    }
    get variant() {
        return this._variant;
    }
    set size(value) {
        this._size = value || 'medium';
    }
    get size() {
        return this._size;
    }
    set disabled(value) {
        this._disabled = value === true || value === 'true';
    }
    get disabled() {
        return this._disabled;
    }
    set loading(value) {
        this._loading = value === true || value === 'true';
    }
    get loading() {
        return this._loading;
    }
    set fullWidth(value) {
        this._fullWidth = value === true || value === 'true';
    }
    get fullWidth() {
        return this._fullWidth;
    }
    set type(value) {
        this._type = value || 'button';
    }
    get type() {
        return this._type;
    }
    set icon(value) {
        this._icon = value;
    }
    get icon() {
        return this._icon;
    }
    set position(value) {
        this._position = value || 'left';
    }
    get position() {
        return this._position;
    }
    set iconOnly(value) {
        this._iconOnly = value === true || value === 'true';
    }
    get iconOnly() {
        return this._iconOnly;
    }
    buttonText;
    clicked = new EventEmitter();
    // Icono de spinner para el estado loading
    spinnerIcon = faSpinner;
    // Método para obtener el icono basado en el string
    get iconDefinition() {
        if (!this.icon)
            return undefined;
        // Primero intenta con el mapeo local (más rápido)
        const localIconMap = {
            // Iconos básicos
            'spinner': faSpinner,
            'download': faDownload,
            'trash': faTrash,
            'share': faShare,
            'print': faPrint,
            'heart': faHeart,
            'home': faHome,
            'user': faUser,
            'cog': faCog,
            'search': faSearch,
            'star': faStar,
            'edit': faEdit,
            'save': faSave,
            'plus': faPlus,
            'minus': faMinus,
            'check': faCheck,
            'times': faTimes,
            'x': faTimes,
            'close': faTimes,
            'eye': faEye,
            'eye-slash': faEyeSlash,
            'lock': faLock,
            'unlock': faUnlock,
            'bell': faBell,
            'envelope': faEnvelope,
            'phone': faPhone,
            'map-marker-alt': faMapMarkerAlt,
            'calendar': faCalendar,
            'clock': faClock,
            'info': faInfo,
            'exclamation-triangle': faExclamationTriangle,
            'question': faQuestion,
            'chevron-down': faChevronDown,
            'chevron-up': faChevronUp,
            'chevron-left': faChevronLeft,
            'chevron-right': faChevronRight,
            'arrow-left': faArrowLeft,
            'arrow-right': faArrowRight,
            'arrow-up': faArrowUp,
            'arrow-down': faArrowDown,
            'pencil': faPencil,
            // También soporta formato fas fa-
            'fas fa-spinner': faSpinner,
            'fas fa-download': faDownload,
            'fas fa-trash': faTrash,
            'fas fa-share': faShare,
            'fas fa-print': faPrint,
            'fas fa-heart': faHeart,
            'fas fa-home': faHome,
            'fas fa-user': faUser,
            'fas fa-cog': faCog,
            'fas fa-search': faSearch,
            'fas fa-star': faStar,
            'fas fa-edit': faEdit,
            'fas fa-save': faSave,
            'fas fa-plus': faPlus,
            'fas fa-minus': faMinus,
            'fas fa-check': faCheck,
            'fas fa-times': faTimes,
            'fas fa-x': faTimes,
            'fas fa-close': faTimes,
            'fas fa-eye': faEye,
            'fas fa-eye-slash': faEyeSlash,
            'fas fa-lock': faLock,
            'fas fa-unlock': faUnlock,
            'fas fa-bell': faBell,
            'fas fa-envelope': faEnvelope,
            'fas fa-phone': faPhone,
            'fas fa-map-marker-alt': faMapMarkerAlt,
            'fas fa-calendar': faCalendar,
            'fas fa-clock': faClock,
            'fas fa-info': faInfo,
            'fas fa-exclamation-triangle': faExclamationTriangle,
            'fas fa-question': faQuestion,
            'fas fa-chevron-down': faChevronDown,
            'fas fa-chevron-up': faChevronUp,
            'fas fa-chevron-left': faChevronLeft,
            'fas fa-chevron-right': faChevronRight,
            'fas fa-arrow-left': faArrowLeft,
            'fas fa-arrow-right': faArrowRight,
            'fas fa-arrow-up': faArrowUp,
            'fas fa-arrow-down': faArrowDown,
            'fas fa-pencil': faPencil
        };
        // Si está en el mapeo local, úsalo
        if (localIconMap[this.icon]) {
            return localIconMap[this.icon];
        }
        // Si no está en el mapeo local, intenta con findIconDefinition
        // Formato: 'fas fa-spinner' o 'spinner' (asume 'fas' por defecto)
        let iconName = this.icon;
        if (this.icon.includes('fas fa-')) {
            iconName = this.icon.replace('fas fa-', '');
        }
        else if (this.icon.includes('fa-')) {
            iconName = this.icon.replace('fa-', '');
        }
        const foundIcon = findIconDefinition({ prefix: 'fas', iconName: iconName });
        if (foundIcon) {
            return foundIcon;
        }
        // Si no se encuentra, retorna undefined
        return undefined;
    }
    onClick(event) {
        // Si está disabled o loading, prevenir completamente el evento
        if (this.disabled || this.loading) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
            }
            return;
        }
        // Solo emitir si no está disabled ni loading
        this.clicked.emit();
    }
    get buttonClasses() {
        const classes = [
            'btn',
            `btn-${this.variant}`,
            this.getSizeClass(),
            this.fullWidth ? 'w-100' : '',
            this.disabled ? 'disabled' : '',
            this.loading ? 'loading' : ''
        ];
        return classes.filter(Boolean).join(' ');
    }
    get isInteractive() {
        // El botón es interactivo solo si no está disabled ni loading
        return !this.disabled && !this.loading;
    }
    get showSpinner() {
        return this.loading;
    }
    get showContent() {
        // Mostrar contenido (texto + icono) solo si no está loading
        return !this.loading;
    }
    getSizeClass() {
        switch (this.size) {
            case 'small':
                return 'btn-sm';
            case 'medium':
                return 'btn-md';
            case 'large':
                return 'btn-lg';
            default:
                return 'btn-md'; // Por defecto usa el tamaño mediano
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth", "style.opacity": "1" }, styleAttribute: "opacity: 0; transition: opacity 0.3s ease-out;" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\n  #buttonElement\n  [class]=\"buttonClasses\"\n  [type]=\"type\"\n  [attr.disabled]=\"disabled || loading ? '' : null\"\n  [disabled]=\"disabled || loading\"\n  (click)=\"onClick($event)\"\n>\n  <!-- Contenido del bot\u00F3n -->\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\n  </div>\n  \n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\n    <fa-icon \n      [icon]=\"spinnerIcon\" \n      class=\"spinner-icon\"\n      [class.spinning]=\"loading\">\n    </fa-icon>\n  </div>\n</button>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', host: {
                        '[class.full-width]': 'fullWidth',
                        'style': 'opacity: 0; transition: opacity 0.3s ease-out;',
                        '[style.opacity]': '1'
                    }, template: "<button\n  #buttonElement\n  [class]=\"buttonClasses\"\n  [type]=\"type\"\n  [attr.disabled]=\"disabled || loading ? '' : null\"\n  [disabled]=\"disabled || loading\"\n  (click)=\"onClick($event)\"\n>\n  <!-- Contenido del bot\u00F3n -->\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\n  </div>\n  \n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\n    <fa-icon \n      [icon]=\"spinnerIcon\" \n      class=\"spinner-icon\"\n      [class.spinning]=\"loading\">\n    </fa-icon>\n  </div>\n</button>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"] }]
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
            }], position: [{
                type: Input
            }], iconOnly: [{
                type: Input
            }], buttonText: [{
                type: ViewChild,
                args: ['buttonText', { static: false }]
            }], clicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBa0Isa0JBQWtCLEVBQXFCLE1BQU0sbUNBQW1DLENBQUM7QUFDMUcsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixVQUFVLEVBQ1YsT0FBTyxFQUNQLGNBQWMsRUFDZCxVQUFVLEVBQ1YsT0FBTyxFQUNQLE1BQU0sRUFDTixxQkFBcUIsRUFDckIsVUFBVSxFQUNWLGFBQWEsRUFDYixXQUFXLEVBQ1gsYUFBYSxFQUNiLGNBQWMsRUFDZCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsUUFBUSxFQUNULE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFpQjNDLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsNkVBQTZFO0lBQ3BFLEtBQUssR0FBVyxRQUFRLENBQUMsQ0FBQywyQ0FBMkM7SUFFOUUsMkRBQTJEO0lBQ25ELFFBQVEsR0FBa0IsU0FBUyxDQUFDO0lBQ3BDLEtBQUssR0FBZSxRQUFRLENBQUM7SUFDN0IsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUMzQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsS0FBSyxHQUFlLFFBQVEsQ0FBQztJQUM3QixLQUFLLENBQVU7SUFDZixTQUFTLEdBQXFCLE1BQU0sQ0FBQztJQUNyQyxTQUFTLEdBQVksS0FBSyxDQUFDO0lBRW5DLElBQ0ksT0FBTyxDQUFDLEtBQTBCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUNJLElBQUksQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBb0I7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLEtBQW1CO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQTZCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFvQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFHMkMsVUFBVSxDQUFjO0lBRTFELE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBRTdDLDBDQUEwQztJQUNqQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBRWpDLG1EQUFtRDtJQUNuRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFFakMsa0RBQWtEO1FBQ2xELE1BQU0sWUFBWSxHQUFzQztZQUN0RCxpQkFBaUI7WUFDakIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLFFBQVE7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osV0FBVyxFQUFFLFVBQVU7WUFDdkIsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGdCQUFnQixFQUFFLGNBQWM7WUFDaEMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxzQkFBc0IsRUFBRSxxQkFBcUI7WUFDN0MsVUFBVSxFQUFFLFVBQVU7WUFDdEIsY0FBYyxFQUFFLGFBQWE7WUFDN0IsWUFBWSxFQUFFLFdBQVc7WUFDekIsY0FBYyxFQUFFLGFBQWE7WUFDN0IsZUFBZSxFQUFFLGNBQWM7WUFDL0IsWUFBWSxFQUFFLFdBQVc7WUFDekIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsVUFBVSxFQUFFLFNBQVM7WUFDckIsWUFBWSxFQUFFLFdBQVc7WUFDekIsUUFBUSxFQUFFLFFBQVE7WUFFbEIsa0NBQWtDO1lBQ2xDLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsaUJBQWlCLEVBQUUsVUFBVTtZQUM3QixjQUFjLEVBQUUsT0FBTztZQUN2QixjQUFjLEVBQUUsT0FBTztZQUN2QixjQUFjLEVBQUUsT0FBTztZQUN2QixjQUFjLEVBQUUsT0FBTztZQUN2QixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsTUFBTTtZQUNyQixZQUFZLEVBQUUsS0FBSztZQUNuQixlQUFlLEVBQUUsUUFBUTtZQUN6QixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsTUFBTTtZQUNyQixjQUFjLEVBQUUsT0FBTztZQUN2QixjQUFjLEVBQUUsT0FBTztZQUN2QixjQUFjLEVBQUUsT0FBTztZQUN2QixVQUFVLEVBQUUsT0FBTztZQUNuQixjQUFjLEVBQUUsT0FBTztZQUN2QixZQUFZLEVBQUUsS0FBSztZQUNuQixrQkFBa0IsRUFBRSxVQUFVO1lBQzlCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGVBQWUsRUFBRSxRQUFRO1lBQ3pCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsY0FBYyxFQUFFLE9BQU87WUFDdkIsdUJBQXVCLEVBQUUsY0FBYztZQUN2QyxpQkFBaUIsRUFBRSxVQUFVO1lBQzdCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLDZCQUE2QixFQUFFLHFCQUFxQjtZQUNwRCxpQkFBaUIsRUFBRSxVQUFVO1lBQzdCLHFCQUFxQixFQUFFLGFBQWE7WUFDcEMsbUJBQW1CLEVBQUUsV0FBVztZQUNoQyxxQkFBcUIsRUFBRSxhQUFhO1lBQ3BDLHNCQUFzQixFQUFFLGNBQWM7WUFDdEMsbUJBQW1CLEVBQUUsV0FBVztZQUNoQyxvQkFBb0IsRUFBRSxZQUFZO1lBQ2xDLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsbUJBQW1CLEVBQUUsV0FBVztZQUNoQyxlQUFlLEVBQUUsUUFBUTtTQUMxQixDQUFDO1FBRUYsbUNBQW1DO1FBQ25DLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzVCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsK0RBQStEO1FBQy9ELGtFQUFrRTtRQUNsRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDckMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFvQixFQUFFLENBQUMsQ0FBQztRQUN4RixJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ2QsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUVELHdDQUF3QztRQUN4QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsK0RBQStEO1FBQy9ELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDbkMsQ0FBQztZQUNELE9BQU87UUFDVCxDQUFDO1FBRUQsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE1BQU0sT0FBTyxHQUFHO1lBQ2QsS0FBSztZQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQzlCLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZiw4REFBOEQ7UUFDOUQsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLDREQUE0RDtRQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBRU8sWUFBWTtRQUNsQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxRQUFRO2dCQUNYLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLEtBQUssT0FBTztnQkFDVixPQUFPLFFBQVEsQ0FBQztZQUNsQjtnQkFDRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLG9DQUFvQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQzt3R0F2UVUsaUJBQWlCOzRGQUFqQixpQkFBaUIsdWhCQzNEOUIsKzVCQXdCQTs7NEZEbUNhLGlCQUFpQjtrQkFWN0IsU0FBUzsrQkFDRSxXQUFXLFFBR2Y7d0JBQ0osb0JBQW9CLEVBQUUsV0FBVzt3QkFDakMsT0FBTyxFQUFFLGdEQUFnRDt3QkFDekQsaUJBQWlCLEVBQUUsR0FBRztxQkFDdkI7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQWNGLE9BQU87c0JBRFYsS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLE9BQU87c0JBRFYsS0FBSztnQkFTRixTQUFTO3NCQURaLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNzQyxVQUFVO3NCQUFyRCxTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBRWhDLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIGZpbmRJY29uRGVmaW5pdGlvbiwgbGlicmFyeSwgSWNvbk5hbWUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgXG4gIGZhU3Bpbm5lciwgXG4gIGZhRG93bmxvYWQsIFxuICBmYVRyYXNoLCBcbiAgZmFTaGFyZSwgXG4gIGZhUHJpbnQsIFxuICBmYUhlYXJ0LFxuICBmYUhvbWUsXG4gIGZhVXNlcixcbiAgZmFDb2csXG4gIGZhU2VhcmNoLFxuICBmYVN0YXIsXG4gIGZhRWRpdCxcbiAgZmFTYXZlLFxuICBmYVBsdXMsXG4gIGZhTWludXMsXG4gIGZhQ2hlY2ssXG4gIGZhVGltZXMsXG4gIGZhRXllLFxuICBmYUV5ZVNsYXNoLFxuICBmYUxvY2ssXG4gIGZhVW5sb2NrLFxuICBmYUJlbGwsXG4gIGZhRW52ZWxvcGUsXG4gIGZhUGhvbmUsXG4gIGZhTWFwTWFya2VyQWx0LFxuICBmYUNhbGVuZGFyLFxuICBmYUNsb2NrLFxuICBmYUluZm8sXG4gIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgZmFRdWVzdGlvbixcbiAgZmFDaGV2cm9uRG93bixcbiAgZmFDaGV2cm9uVXAsXG4gIGZhQ2hldnJvbkxlZnQsXG4gIGZhQ2hldnJvblJpZ2h0LFxuICBmYUFycm93TGVmdCxcbiAgZmFBcnJvd1JpZ2h0LFxuICBmYUFycm93VXAsXG4gIGZhQXJyb3dEb3duLFxuICBmYVBlbmNpbFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZ3JheScgfCAncmVkJyB8ICdzdWNjZXNzJztcbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdidXR0b24nIHwgJ3N1Ym1pdCcgfCAncmVzZXQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2EtYnV0dG9uLmNvbXBvbmVudC5zY3NzJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZnVsbC13aWR0aF0nOiAnZnVsbFdpZHRoJyxcbiAgICAnc3R5bGUnOiAnb3BhY2l0eTogMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0OycsXG4gICAgJ1tzdHlsZS5vcGFjaXR5XSc6ICcxJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFNhQnV0dG9uQ29tcG9uZW50IHtcbiAgLy8gUHJvcGllZGFkZXMgY29uIGZsZXhpYmlsaWRhZCBtw6F4aW1hOiBzb3BvcnRhbiBhdHRyaWJ1dGUgeSBwcm9wZXJ0eSBiaW5kaW5nXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnQnV0dG9uJzsgLy8gTWFudGVuZXIgY29tbyBASW5wdXQgc2ltcGxlIHBhcmEgc3RyaW5nc1xuICBcbiAgLy8gUHJvcGllZGFkZXMgY29uIHNldHRlcnMvZ2V0dGVycyBwYXJhIGZsZXhpYmlsaWRhZCBtw6F4aW1hXG4gIHByaXZhdGUgX3ZhcmlhbnQ6IEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeSc7XG4gIHByaXZhdGUgX3NpemU6IEJ1dHRvblNpemUgPSAnbWVkaXVtJztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9mdWxsV2lkdGg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdHlwZTogQnV0dG9uVHlwZSA9ICdidXR0b24nO1xuICBwcml2YXRlIF9pY29uPzogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgcHJpdmF0ZSBfaWNvbk9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFyaWFudCh2YWx1ZTogQnV0dG9uVmFyaWFudCB8IGFueSkge1xuICAgIHRoaXMuX3ZhcmlhbnQgPSB2YWx1ZSB8fCAncHJpbWFyeSc7XG4gIH1cbiAgZ2V0IHZhcmlhbnQoKTogQnV0dG9uVmFyaWFudCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhcmlhbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogQnV0dG9uU2l6ZSB8IGFueSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZSB8fCAnbWVkaXVtJztcbiAgfVxuICBnZXQgc2l6ZSgpOiBCdXR0b25TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9mdWxsV2lkdGggPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBmdWxsV2lkdGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBCdXR0b25UeXBlIHwgYW55KSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8ICdidXR0b24nO1xuICB9XG4gIGdldCB0eXBlKCk6IEJ1dHRvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZyB8IGFueSkge1xuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiAnbGVmdCcgfCAncmlnaHQnIHwgYW55KSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZSB8fCAnbGVmdCc7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6ICdsZWZ0JyB8ICdyaWdodCcge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uT25seSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2ljb25Pbmx5ID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgaWNvbk9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25Pbmx5O1xuICB9XG5cblxuICBAVmlld0NoaWxkKCdidXR0b25UZXh0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGJ1dHRvblRleHQhOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8vIEljb25vIGRlIHNwaW5uZXIgcGFyYSBlbCBlc3RhZG8gbG9hZGluZ1xuICByZWFkb25seSBzcGlubmVySWNvbiA9IGZhU3Bpbm5lcjtcblxuICAvLyBNw6l0b2RvIHBhcmEgb2J0ZW5lciBlbCBpY29ubyBiYXNhZG8gZW4gZWwgc3RyaW5nXG4gIGdldCBpY29uRGVmaW5pdGlvbigpOiBJY29uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLmljb24pIHJldHVybiB1bmRlZmluZWQ7XG4gICAgXG4gICAgLy8gUHJpbWVybyBpbnRlbnRhIGNvbiBlbCBtYXBlbyBsb2NhbCAobcOhcyByw6FwaWRvKVxuICAgIGNvbnN0IGxvY2FsSWNvbk1hcDogeyBba2V5OiBzdHJpbmddOiBJY29uRGVmaW5pdGlvbiB9ID0ge1xuICAgICAgLy8gSWNvbm9zIGLDoXNpY29zXG4gICAgICAnc3Bpbm5lcic6IGZhU3Bpbm5lcixcbiAgICAgICdkb3dubG9hZCc6IGZhRG93bmxvYWQsXG4gICAgICAndHJhc2gnOiBmYVRyYXNoLFxuICAgICAgJ3NoYXJlJzogZmFTaGFyZSxcbiAgICAgICdwcmludCc6IGZhUHJpbnQsXG4gICAgICAnaGVhcnQnOiBmYUhlYXJ0LFxuICAgICAgJ2hvbWUnOiBmYUhvbWUsXG4gICAgICAndXNlcic6IGZhVXNlcixcbiAgICAgICdjb2cnOiBmYUNvZyxcbiAgICAgICdzZWFyY2gnOiBmYVNlYXJjaCxcbiAgICAgICdzdGFyJzogZmFTdGFyLFxuICAgICAgJ2VkaXQnOiBmYUVkaXQsXG4gICAgICAnc2F2ZSc6IGZhU2F2ZSxcbiAgICAgICdwbHVzJzogZmFQbHVzLFxuICAgICAgJ21pbnVzJzogZmFNaW51cyxcbiAgICAgICdjaGVjayc6IGZhQ2hlY2ssXG4gICAgICAndGltZXMnOiBmYVRpbWVzLFxuICAgICAgJ3gnOiBmYVRpbWVzLFxuICAgICAgJ2Nsb3NlJzogZmFUaW1lcyxcbiAgICAgICdleWUnOiBmYUV5ZSxcbiAgICAgICdleWUtc2xhc2gnOiBmYUV5ZVNsYXNoLFxuICAgICAgJ2xvY2snOiBmYUxvY2ssXG4gICAgICAndW5sb2NrJzogZmFVbmxvY2ssXG4gICAgICAnYmVsbCc6IGZhQmVsbCxcbiAgICAgICdlbnZlbG9wZSc6IGZhRW52ZWxvcGUsXG4gICAgICAncGhvbmUnOiBmYVBob25lLFxuICAgICAgJ21hcC1tYXJrZXItYWx0JzogZmFNYXBNYXJrZXJBbHQsXG4gICAgICAnY2FsZW5kYXInOiBmYUNhbGVuZGFyLFxuICAgICAgJ2Nsb2NrJzogZmFDbG9jayxcbiAgICAgICdpbmZvJzogZmFJbmZvLFxuICAgICAgJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgICAgJ3F1ZXN0aW9uJzogZmFRdWVzdGlvbixcbiAgICAgICdjaGV2cm9uLWRvd24nOiBmYUNoZXZyb25Eb3duLFxuICAgICAgJ2NoZXZyb24tdXAnOiBmYUNoZXZyb25VcCxcbiAgICAgICdjaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxuICAgICAgJ2NoZXZyb24tcmlnaHQnOiBmYUNoZXZyb25SaWdodCxcbiAgICAgICdhcnJvdy1sZWZ0JzogZmFBcnJvd0xlZnQsXG4gICAgICAnYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXG4gICAgICAnYXJyb3ctdXAnOiBmYUFycm93VXAsXG4gICAgICAnYXJyb3ctZG93bic6IGZhQXJyb3dEb3duLFxuICAgICAgJ3BlbmNpbCc6IGZhUGVuY2lsLFxuICAgICAgXG4gICAgICAvLyBUYW1iacOpbiBzb3BvcnRhIGZvcm1hdG8gZmFzIGZhLVxuICAgICAgJ2ZhcyBmYS1zcGlubmVyJzogZmFTcGlubmVyLFxuICAgICAgJ2ZhcyBmYS1kb3dubG9hZCc6IGZhRG93bmxvYWQsXG4gICAgICAnZmFzIGZhLXRyYXNoJzogZmFUcmFzaCxcbiAgICAgICdmYXMgZmEtc2hhcmUnOiBmYVNoYXJlLFxuICAgICAgJ2ZhcyBmYS1wcmludCc6IGZhUHJpbnQsXG4gICAgICAnZmFzIGZhLWhlYXJ0JzogZmFIZWFydCxcbiAgICAgICdmYXMgZmEtaG9tZSc6IGZhSG9tZSxcbiAgICAgICdmYXMgZmEtdXNlcic6IGZhVXNlcixcbiAgICAgICdmYXMgZmEtY29nJzogZmFDb2csXG4gICAgICAnZmFzIGZhLXNlYXJjaCc6IGZhU2VhcmNoLFxuICAgICAgJ2ZhcyBmYS1zdGFyJzogZmFTdGFyLFxuICAgICAgJ2ZhcyBmYS1lZGl0JzogZmFFZGl0LFxuICAgICAgJ2ZhcyBmYS1zYXZlJzogZmFTYXZlLFxuICAgICAgJ2ZhcyBmYS1wbHVzJzogZmFQbHVzLFxuICAgICAgJ2ZhcyBmYS1taW51cyc6IGZhTWludXMsXG4gICAgICAnZmFzIGZhLWNoZWNrJzogZmFDaGVjayxcbiAgICAgICdmYXMgZmEtdGltZXMnOiBmYVRpbWVzLFxuICAgICAgJ2ZhcyBmYS14JzogZmFUaW1lcyxcbiAgICAgICdmYXMgZmEtY2xvc2UnOiBmYVRpbWVzLFxuICAgICAgJ2ZhcyBmYS1leWUnOiBmYUV5ZSxcbiAgICAgICdmYXMgZmEtZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcbiAgICAgICdmYXMgZmEtbG9jayc6IGZhTG9jayxcbiAgICAgICdmYXMgZmEtdW5sb2NrJzogZmFVbmxvY2ssXG4gICAgICAnZmFzIGZhLWJlbGwnOiBmYUJlbGwsXG4gICAgICAnZmFzIGZhLWVudmVsb3BlJzogZmFFbnZlbG9wZSxcbiAgICAgICdmYXMgZmEtcGhvbmUnOiBmYVBob25lLFxuICAgICAgJ2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhcic6IGZhQ2FsZW5kYXIsXG4gICAgICAnZmFzIGZhLWNsb2NrJzogZmFDbG9jayxcbiAgICAgICdmYXMgZmEtaW5mbyc6IGZhSW5mbyxcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgICAnZmFzIGZhLXF1ZXN0aW9uJzogZmFRdWVzdGlvbixcbiAgICAgICdmYXMgZmEtY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcbiAgICAgICdmYXMgZmEtY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXG4gICAgICAnZmFzIGZhLWFycm93LWxlZnQnOiBmYUFycm93TGVmdCxcbiAgICAgICdmYXMgZmEtYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXG4gICAgICAnZmFzIGZhLWFycm93LXVwJzogZmFBcnJvd1VwLFxuICAgICAgJ2ZhcyBmYS1hcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXG4gICAgICAnZmFzIGZhLXBlbmNpbCc6IGZhUGVuY2lsXG4gICAgfTtcbiAgICBcbiAgICAvLyBTaSBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgw7pzYWxvXG4gICAgaWYgKGxvY2FsSWNvbk1hcFt0aGlzLmljb25dKSB7XG4gICAgICByZXR1cm4gbG9jYWxJY29uTWFwW3RoaXMuaWNvbl07XG4gICAgfVxuICAgIFxuICAgIC8vIFNpIG5vIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCBpbnRlbnRhIGNvbiBmaW5kSWNvbkRlZmluaXRpb25cbiAgICAvLyBGb3JtYXRvOiAnZmFzIGZhLXNwaW5uZXInIG8gJ3NwaW5uZXInIChhc3VtZSAnZmFzJyBwb3IgZGVmZWN0bylcbiAgICBsZXQgaWNvbk5hbWUgPSB0aGlzLmljb247XG4gICAgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmFzIGZhLScpKSB7XG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYXMgZmEtJywgJycpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYS0nKSkge1xuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmEtJywgJycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBmb3VuZEljb24gPSBmaW5kSWNvbkRlZmluaXRpb24oeyBwcmVmaXg6ICdmYXMnLCBpY29uTmFtZTogaWNvbk5hbWUgYXMgSWNvbk5hbWUgfSk7XG4gICAgaWYgKGZvdW5kSWNvbikge1xuICAgICAgcmV0dXJuIGZvdW5kSWNvbjtcbiAgICB9XG4gICAgXG4gICAgLy8gU2kgbm8gc2UgZW5jdWVudHJhLCByZXRvcm5hIHVuZGVmaW5lZFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBTaSBlc3TDoSBkaXNhYmxlZCBvIGxvYWRpbmcsIHByZXZlbmlyIGNvbXBsZXRhbWVudGUgZWwgZXZlbnRvXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBTb2xvIGVtaXRpciBzaSBubyBlc3TDoSBkaXNhYmxlZCBuaSBsb2FkaW5nXG4gICAgdGhpcy5jbGlja2VkLmVtaXQoKTtcbiAgfVxuXG4gIGdldCBidXR0b25DbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICdidG4nLFxuICAgICAgYGJ0bi0ke3RoaXMudmFyaWFudH1gLFxuICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcbiAgICAgIHRoaXMuZnVsbFdpZHRoID8gJ3ctMTAwJyA6ICcnLFxuICAgICAgdGhpcy5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcbiAgICAgIHRoaXMubG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnXG4gICAgXTtcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGlzSW50ZXJhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgLy8gRWwgYm90w7NuIGVzIGludGVyYWN0aXZvIHNvbG8gc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHNob3dTcGlubmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBnZXQgc2hvd0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgLy8gTW9zdHJhciBjb250ZW5pZG8gKHRleHRvICsgaWNvbm8pIHNvbG8gc2kgbm8gZXN0w6EgbG9hZGluZ1xuICAgIHJldHVybiAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaXplQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICByZXR1cm4gJ2J0bi1zbSc7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIHJldHVybiAnYnRuLWxnJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnYnRuLW1kJzsgLy8gUG9yIGRlZmVjdG8gdXNhIGVsIHRhbWHDsW8gbWVkaWFub1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvblxuICAjYnV0dG9uRWxlbWVudFxuICBbY2xhc3NdPVwiYnV0dG9uQ2xhc3Nlc1wiXG4gIFt0eXBlXT1cInR5cGVcIlxuICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nID8gJycgOiBudWxsXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmdcIlxuICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbj5cbiAgPCEtLSBDb250ZW5pZG8gZGVsIGJvdMOzbiAtLT5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250ZW50XCIgW2NsYXNzLmxvYWRpbmctaGlkZGVuXT1cInNob3dTcGlubmVyXCI+XG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiAocG9zaXRpb24gPT09ICdsZWZ0JyB8fCBpY29uT25seSlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIFtjbGFzcy5tZS0xXT1cIiFpY29uT25seVwiPjwvZmEtaWNvbj5cbiAgICA8c3BhbiAjYnV0dG9uVGV4dCAqbmdJZj1cIiFpY29uT25seVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgcG9zaXRpb24gPT09ICdyaWdodCcgJiYgIWljb25Pbmx5XCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBjbGFzcz1cIm1zLTFcIj48L2ZhLWljb24+XG4gIDwvZGl2PlxuICBcbiAgPCEtLSBTcGlubmVyIHF1ZSBzZSBzdXBlcnBvbmUgY3VhbmRvIGVzdMOhIGxvYWRpbmcgLS0+XG4gIDxkaXYgKm5nSWY9XCJzaG93U3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1vdmVybGF5XCI+XG4gICAgPGZhLWljb24gXG4gICAgICBbaWNvbl09XCJzcGlubmVySWNvblwiIFxuICAgICAgY2xhc3M9XCJzcGlubmVyLWljb25cIlxuICAgICAgW2NsYXNzLnNwaW5uaW5nXT1cImxvYWRpbmdcIj5cbiAgICA8L2ZhLWljb24+XG4gIDwvZGl2PlxuPC9idXR0b24+XG4iXX0=