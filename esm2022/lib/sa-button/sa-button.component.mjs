import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth" }, styleAttribute: "display: inline-block; vertical-align: middle;" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick($event)\"\r\n  style=\"border: none; border-radius: 0.375rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; font-weight: 400; transition: all 0.2s ease-in-out; text-align: center; user-select: none; vertical-align: middle; white-space: nowrap; text-decoration: none; outline: none; position: relative; overflow: visible;\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', encapsulation: ViewEncapsulation.None, host: {
                        '[class.full-width]': 'fullWidth',
                        'style': 'display: inline-block; vertical-align: middle;'
                    }, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick($event)\"\r\n  style=\"border: none; border-radius: 0.375rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; font-weight: 400; transition: all 0.2s ease-in-out; text-align: center; user-select: none; vertical-align: middle; white-space: nowrap; text-decoration: none; outline: none; position: relative; overflow: visible;\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFrQixrQkFBa0IsRUFBcUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQWlCM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUM1Qiw2RUFBNkU7SUFDcEUsS0FBSyxHQUFXLFFBQVEsQ0FBQyxDQUFDLDJDQUEyQztJQUU5RSwy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QixTQUFTOytCQUNFLFdBQVcsaUJBR04saUJBQWlCLENBQUMsSUFBSSxRQUMvQjt3QkFDSixvQkFBb0IsRUFBRSxXQUFXO3dCQUNqQyxPQUFPLEVBQUUsZ0RBQWdEO3FCQUMxRDs4QkFJUSxLQUFLO3NCQUFiLEtBQUs7Z0JBY0YsT0FBTztzQkFEVixLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU0YsT0FBTztzQkFEVixLQUFLO2dCQVNGLFNBQVM7c0JBRFosS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU3NDLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFFaEMsT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBmaW5kSWNvbkRlZmluaXRpb24sIGxpYnJhcnksIEljb25OYW1lIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgXHJcbiAgZmFTcGlubmVyLCBcclxuICBmYURvd25sb2FkLCBcclxuICBmYVRyYXNoLCBcclxuICBmYVNoYXJlLCBcclxuICBmYVByaW50LCBcclxuICBmYUhlYXJ0LFxyXG4gIGZhSG9tZSxcclxuICBmYVVzZXIsXHJcbiAgZmFDb2csXHJcbiAgZmFTZWFyY2gsXHJcbiAgZmFTdGFyLFxyXG4gIGZhRWRpdCxcclxuICBmYVNhdmUsXHJcbiAgZmFQbHVzLFxyXG4gIGZhTWludXMsXHJcbiAgZmFDaGVjayxcclxuICBmYVRpbWVzLFxyXG4gIGZhRXllLFxyXG4gIGZhRXllU2xhc2gsXHJcbiAgZmFMb2NrLFxyXG4gIGZhVW5sb2NrLFxyXG4gIGZhQmVsbCxcclxuICBmYUVudmVsb3BlLFxyXG4gIGZhUGhvbmUsXHJcbiAgZmFNYXBNYXJrZXJBbHQsXHJcbiAgZmFDYWxlbmRhcixcclxuICBmYUNsb2NrLFxyXG4gIGZhSW5mbyxcclxuICBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgZmFRdWVzdGlvbixcclxuICBmYUNoZXZyb25Eb3duLFxyXG4gIGZhQ2hldnJvblVwLFxyXG4gIGZhQ2hldnJvbkxlZnQsXHJcbiAgZmFDaGV2cm9uUmlnaHQsXHJcbiAgZmFBcnJvd0xlZnQsXHJcbiAgZmFBcnJvd1JpZ2h0LFxyXG4gIGZhQXJyb3dVcCxcclxuICBmYUFycm93RG93bixcclxuICBmYVBlbmNpbFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZ3JheScgfCAncmVkJyB8ICdzdWNjZXNzJztcclxuZXhwb3J0IHR5cGUgQnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XHJcbmV4cG9ydCB0eXBlIEJ1dHRvblR5cGUgPSAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuc2NzcycsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmZ1bGwtd2lkdGhdJzogJ2Z1bGxXaWR0aCcsXHJcbiAgICAnc3R5bGUnOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYUJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgLy8gUHJvcGllZGFkZXMgY29uIGZsZXhpYmlsaWRhZCBtw6F4aW1hOiBzb3BvcnRhbiBhdHRyaWJ1dGUgeSBwcm9wZXJ0eSBiaW5kaW5nXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdCdXR0b24nOyAvLyBNYW50ZW5lciBjb21vIEBJbnB1dCBzaW1wbGUgcGFyYSBzdHJpbmdzXHJcbiAgXHJcbiAgLy8gUHJvcGllZGFkZXMgY29uIHNldHRlcnMvZ2V0dGVycyBwYXJhIGZsZXhpYmlsaWRhZCBtw6F4aW1hXHJcbiAgcHJpdmF0ZSBfdmFyaWFudDogQnV0dG9uVmFyaWFudCA9ICdwcmltYXJ5JztcclxuICBwcml2YXRlIF9zaXplOiBCdXR0b25TaXplID0gJ21lZGl1bSc7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfdHlwZTogQnV0dG9uVHlwZSA9ICdidXR0b24nO1xyXG4gIHByaXZhdGUgX2ljb24/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XHJcbiAgcHJpdmF0ZSBfaWNvbk9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdmFyaWFudCh2YWx1ZTogQnV0dG9uVmFyaWFudCB8IGFueSkge1xyXG4gICAgdGhpcy5fdmFyaWFudCA9IHZhbHVlIHx8ICdwcmltYXJ5JztcclxuICB9XHJcbiAgZ2V0IHZhcmlhbnQoKTogQnV0dG9uVmFyaWFudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFyaWFudDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNpemUodmFsdWU6IEJ1dHRvblNpemUgfCBhbnkpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZSB8fCAnbWVkaXVtJztcclxuICB9XHJcbiAgZ2V0IHNpemUoKTogQnV0dG9uU2l6ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZnVsbFdpZHRoKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9mdWxsV2lkdGggPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgZnVsbFdpZHRoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHR5cGUodmFsdWU6IEJ1dHRvblR5cGUgfCBhbnkpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCAnYnV0dG9uJztcclxuICB9XHJcbiAgZ2V0IHR5cGUoKTogQnV0dG9uVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZyB8IGFueSkge1xyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwb3NpdGlvbih2YWx1ZTogJ2xlZnQnIHwgJ3JpZ2h0JyB8IGFueSkge1xyXG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZSB8fCAnbGVmdCc7XHJcbiAgfVxyXG4gIGdldCBwb3NpdGlvbigpOiAnbGVmdCcgfCAncmlnaHQnIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGljb25Pbmx5KHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9pY29uT25seSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBpY29uT25seSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uT25seTtcclxuICB9XHJcblxyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b25UZXh0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGJ1dHRvblRleHQhOiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLy8gSWNvbm8gZGUgc3Bpbm5lciBwYXJhIGVsIGVzdGFkbyBsb2FkaW5nXHJcbiAgcmVhZG9ubHkgc3Bpbm5lckljb24gPSBmYVNwaW5uZXI7XHJcblxyXG4gIC8vIE3DqXRvZG8gcGFyYSBvYnRlbmVyIGVsIGljb25vIGJhc2FkbyBlbiBlbCBzdHJpbmdcclxuICBnZXQgaWNvbkRlZmluaXRpb24oKTogSWNvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLmljb24pIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIC8vIFByaW1lcm8gaW50ZW50YSBjb24gZWwgbWFwZW8gbG9jYWwgKG3DoXMgcsOhcGlkbylcclxuICAgIGNvbnN0IGxvY2FsSWNvbk1hcDogeyBba2V5OiBzdHJpbmddOiBJY29uRGVmaW5pdGlvbiB9ID0ge1xyXG4gICAgICAvLyBJY29ub3MgYsOhc2ljb3NcclxuICAgICAgJ3NwaW5uZXInOiBmYVNwaW5uZXIsXHJcbiAgICAgICdkb3dubG9hZCc6IGZhRG93bmxvYWQsXHJcbiAgICAgICd0cmFzaCc6IGZhVHJhc2gsXHJcbiAgICAgICdzaGFyZSc6IGZhU2hhcmUsXHJcbiAgICAgICdwcmludCc6IGZhUHJpbnQsXHJcbiAgICAgICdoZWFydCc6IGZhSGVhcnQsXHJcbiAgICAgICdob21lJzogZmFIb21lLFxyXG4gICAgICAndXNlcic6IGZhVXNlcixcclxuICAgICAgJ2NvZyc6IGZhQ29nLFxyXG4gICAgICAnc2VhcmNoJzogZmFTZWFyY2gsXHJcbiAgICAgICdzdGFyJzogZmFTdGFyLFxyXG4gICAgICAnZWRpdCc6IGZhRWRpdCxcclxuICAgICAgJ3NhdmUnOiBmYVNhdmUsXHJcbiAgICAgICdwbHVzJzogZmFQbHVzLFxyXG4gICAgICAnbWludXMnOiBmYU1pbnVzLFxyXG4gICAgICAnY2hlY2snOiBmYUNoZWNrLFxyXG4gICAgICAndGltZXMnOiBmYVRpbWVzLFxyXG4gICAgICAneCc6IGZhVGltZXMsXHJcbiAgICAgICdjbG9zZSc6IGZhVGltZXMsXHJcbiAgICAgICdleWUnOiBmYUV5ZSxcclxuICAgICAgJ2V5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXHJcbiAgICAgICdsb2NrJzogZmFMb2NrLFxyXG4gICAgICAndW5sb2NrJzogZmFVbmxvY2ssXHJcbiAgICAgICdiZWxsJzogZmFCZWxsLFxyXG4gICAgICAnZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxyXG4gICAgICAncGhvbmUnOiBmYVBob25lLFxyXG4gICAgICAnbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcclxuICAgICAgJ2NhbGVuZGFyJzogZmFDYWxlbmRhcixcclxuICAgICAgJ2Nsb2NrJzogZmFDbG9jayxcclxuICAgICAgJ2luZm8nOiBmYUluZm8sXHJcbiAgICAgICdleGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxuICAgICAgJ3F1ZXN0aW9uJzogZmFRdWVzdGlvbixcclxuICAgICAgJ2NoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXHJcbiAgICAgICdjaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXHJcbiAgICAgICdjaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxyXG4gICAgICAnY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxyXG4gICAgICAnYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxyXG4gICAgICAnYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXHJcbiAgICAgICdhcnJvdy11cCc6IGZhQXJyb3dVcCxcclxuICAgICAgJ2Fycm93LWRvd24nOiBmYUFycm93RG93bixcclxuICAgICAgJ3BlbmNpbCc6IGZhUGVuY2lsLFxyXG4gICAgICBcclxuICAgICAgLy8gVGFtYmnDqW4gc29wb3J0YSBmb3JtYXRvIGZhcyBmYS1cclxuICAgICAgJ2ZhcyBmYS1zcGlubmVyJzogZmFTcGlubmVyLFxyXG4gICAgICAnZmFzIGZhLWRvd25sb2FkJzogZmFEb3dubG9hZCxcclxuICAgICAgJ2ZhcyBmYS10cmFzaCc6IGZhVHJhc2gsXHJcbiAgICAgICdmYXMgZmEtc2hhcmUnOiBmYVNoYXJlLFxyXG4gICAgICAnZmFzIGZhLXByaW50JzogZmFQcmludCxcclxuICAgICAgJ2ZhcyBmYS1oZWFydCc6IGZhSGVhcnQsXHJcbiAgICAgICdmYXMgZmEtaG9tZSc6IGZhSG9tZSxcclxuICAgICAgJ2ZhcyBmYS11c2VyJzogZmFVc2VyLFxyXG4gICAgICAnZmFzIGZhLWNvZyc6IGZhQ29nLFxyXG4gICAgICAnZmFzIGZhLXNlYXJjaCc6IGZhU2VhcmNoLFxyXG4gICAgICAnZmFzIGZhLXN0YXInOiBmYVN0YXIsXHJcbiAgICAgICdmYXMgZmEtZWRpdCc6IGZhRWRpdCxcclxuICAgICAgJ2ZhcyBmYS1zYXZlJzogZmFTYXZlLFxyXG4gICAgICAnZmFzIGZhLXBsdXMnOiBmYVBsdXMsXHJcbiAgICAgICdmYXMgZmEtbWludXMnOiBmYU1pbnVzLFxyXG4gICAgICAnZmFzIGZhLWNoZWNrJzogZmFDaGVjayxcclxuICAgICAgJ2ZhcyBmYS10aW1lcyc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEteCc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEtY2xvc2UnOiBmYVRpbWVzLFxyXG4gICAgICAnZmFzIGZhLWV5ZSc6IGZhRXllLFxyXG4gICAgICAnZmFzIGZhLWV5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXHJcbiAgICAgICdmYXMgZmEtbG9jayc6IGZhTG9jayxcclxuICAgICAgJ2ZhcyBmYS11bmxvY2snOiBmYVVubG9jayxcclxuICAgICAgJ2ZhcyBmYS1iZWxsJzogZmFCZWxsLFxyXG4gICAgICAnZmFzIGZhLWVudmVsb3BlJzogZmFFbnZlbG9wZSxcclxuICAgICAgJ2ZhcyBmYS1waG9uZSc6IGZhUGhvbmUsXHJcbiAgICAgICdmYXMgZmEtbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcclxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhcic6IGZhQ2FsZW5kYXIsXHJcbiAgICAgICdmYXMgZmEtY2xvY2snOiBmYUNsb2NrLFxyXG4gICAgICAnZmFzIGZhLWluZm8nOiBmYUluZm8sXHJcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgICAgICdmYXMgZmEtcXVlc3Rpb24nOiBmYVF1ZXN0aW9uLFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tbGVmdCc6IGZhQ2hldnJvbkxlZnQsXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxyXG4gICAgICAnZmFzIGZhLWFycm93LWxlZnQnOiBmYUFycm93TGVmdCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy1yaWdodCc6IGZhQXJyb3dSaWdodCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy11cCc6IGZhQXJyb3dVcCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXHJcbiAgICAgICdmYXMgZmEtcGVuY2lsJzogZmFQZW5jaWxcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIFNpIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCDDunNhbG9cclxuICAgIGlmIChsb2NhbEljb25NYXBbdGhpcy5pY29uXSkge1xyXG4gICAgICByZXR1cm4gbG9jYWxJY29uTWFwW3RoaXMuaWNvbl07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNpIG5vIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCBpbnRlbnRhIGNvbiBmaW5kSWNvbkRlZmluaXRpb25cclxuICAgIC8vIEZvcm1hdG86ICdmYXMgZmEtc3Bpbm5lcicgbyAnc3Bpbm5lcicgKGFzdW1lICdmYXMnIHBvciBkZWZlY3RvKVxyXG4gICAgbGV0IGljb25OYW1lID0gdGhpcy5pY29uO1xyXG4gICAgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmFzIGZhLScpKSB7XHJcbiAgICAgIGljb25OYW1lID0gdGhpcy5pY29uLnJlcGxhY2UoJ2ZhcyBmYS0nLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmEtJykpIHtcclxuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmEtJywgJycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBmb3VuZEljb24gPSBmaW5kSWNvbkRlZmluaXRpb24oeyBwcmVmaXg6ICdmYXMnLCBpY29uTmFtZTogaWNvbk5hbWUgYXMgSWNvbk5hbWUgfSk7XHJcbiAgICBpZiAoZm91bmRJY29uKSB7XHJcbiAgICAgIHJldHVybiBmb3VuZEljb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNpIG5vIHNlIGVuY3VlbnRyYSwgcmV0b3JuYSB1bmRlZmluZWRcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIFNpIGVzdMOhIGRpc2FibGVkIG8gbG9hZGluZywgcHJldmVuaXIgY29tcGxldGFtZW50ZSBlbCBldmVudG9cclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMubG9hZGluZykge1xyXG4gICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU29sbyBlbWl0aXIgc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xyXG4gICAgdGhpcy5jbGlja2VkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCBidXR0b25DbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAnYnRuJyxcclxuICAgICAgYGJ0bi0ke3RoaXMudmFyaWFudH1gLFxyXG4gICAgICB0aGlzLmdldFNpemVDbGFzcygpLFxyXG4gICAgICB0aGlzLmZ1bGxXaWR0aCA/ICd3LTEwMCcgOiAnJyxcclxuICAgICAgdGhpcy5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcclxuICAgICAgdGhpcy5sb2FkaW5nID8gJ2xvYWRpbmcnIDogJydcclxuICAgIF07XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzSW50ZXJhY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBFbCBib3TDs24gZXMgaW50ZXJhY3Rpdm8gc29sbyBzaSBubyBlc3TDoSBkaXNhYmxlZCBuaSBsb2FkaW5nXHJcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZztcclxuICB9XHJcblxyXG4gIGdldCBzaG93U3Bpbm5lcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0NvbnRlbnQoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBNb3N0cmFyIGNvbnRlbmlkbyAodGV4dG8gKyBpY29ubykgc29sbyBzaSBubyBlc3TDoSBsb2FkaW5nXHJcbiAgICByZXR1cm4gIXRoaXMubG9hZGluZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2l6ZUNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xyXG4gICAgICBjYXNlICdzbWFsbCc6XHJcbiAgICAgICAgcmV0dXJuICdidG4tc20nO1xyXG4gICAgICBjYXNlICdtZWRpdW0nOlxyXG4gICAgICAgIHJldHVybiAnYnRuLW1kJztcclxuICAgICAgY2FzZSAnbGFyZ2UnOlxyXG4gICAgICAgIHJldHVybiAnYnRuLWxnJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7IC8vIFBvciBkZWZlY3RvIHVzYSBlbCB0YW1hw7FvIG1lZGlhbm9cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICNidXR0b25FbGVtZW50XHJcbiAgW2NsYXNzXT1cImJ1dHRvbkNsYXNzZXNcIlxyXG4gIFt0eXBlXT1cInR5cGVcIlxyXG4gIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmcgPyAnJyA6IG51bGxcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuICBzdHlsZT1cImJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IGN1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgZm9udC13ZWlnaHQ6IDQwMDsgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7IHRleHQtYWxpZ246IGNlbnRlcjsgdXNlci1zZWxlY3Q6IG5vbmU7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHdoaXRlLXNwYWNlOiBub3dyYXA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgb3V0bGluZTogbm9uZTsgcG9zaXRpb246IHJlbGF0aXZlOyBvdmVyZmxvdzogdmlzaWJsZTtcIlxyXG4+XHJcbiAgPCEtLSBDb250ZW5pZG8gZGVsIGJvdMOzbiAtLT5cclxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRlbnRcIiBbY2xhc3MubG9hZGluZy1oaWRkZW5dPVwic2hvd1NwaW5uZXJcIj5cclxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgKHBvc2l0aW9uID09PSAnbGVmdCcgfHwgaWNvbk9ubHkpXCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBbY2xhc3MubWUtMV09XCIhaWNvbk9ubHlcIj48L2ZhLWljb24+XHJcbiAgICA8c3BhbiAjYnV0dG9uVGV4dCAqbmdJZj1cIiFpY29uT25seVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJiAhaWNvbk9ubHlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIGNsYXNzPVwibXMtMVwiPjwvZmEtaWNvbj5cclxuICA8L2Rpdj5cclxuICBcclxuICA8IS0tIFNwaW5uZXIgcXVlIHNlIHN1cGVycG9uZSBjdWFuZG8gZXN0w6EgbG9hZGluZyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwic2hvd1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItb3ZlcmxheVwiPlxyXG4gICAgPGZhLWljb24gXHJcbiAgICAgIFtpY29uXT1cInNwaW5uZXJJY29uXCIgXHJcbiAgICAgIGNsYXNzPVwic3Bpbm5lci1pY29uXCJcclxuICAgICAgW2NsYXNzLnNwaW5uaW5nXT1cImxvYWRpbmdcIj5cclxuICAgIDwvZmEtaWNvbj5cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbiJdfQ==