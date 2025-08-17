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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth" } }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', encapsulation: ViewEncapsulation.None, host: {
                        '[class.full-width]': 'fullWidth'
                    }, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFrQixrQkFBa0IsRUFBcUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQWdCM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUM1Qiw2RUFBNkU7SUFDcEUsS0FBSyxHQUFXLFFBQVEsQ0FBQyxDQUFDLDJDQUEyQztJQUU5RSwy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LFNBQVM7K0JBQ0UsV0FBVyxpQkFHTixpQkFBaUIsQ0FBQyxJQUFJLFFBQy9CO3dCQUNKLG9CQUFvQixFQUFFLFdBQVc7cUJBQ2xDOzhCQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFjRixPQUFPO3NCQURWLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixPQUFPO3NCQURWLEtBQUs7Z0JBU0YsU0FBUztzQkFEWixLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTc0MsVUFBVTtzQkFBckQsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUVoQyxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIGZpbmRJY29uRGVmaW5pdGlvbiwgbGlicmFyeSwgSWNvbk5hbWUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyBcclxuICBmYVNwaW5uZXIsIFxyXG4gIGZhRG93bmxvYWQsIFxyXG4gIGZhVHJhc2gsIFxyXG4gIGZhU2hhcmUsIFxyXG4gIGZhUHJpbnQsIFxyXG4gIGZhSGVhcnQsXHJcbiAgZmFIb21lLFxyXG4gIGZhVXNlcixcclxuICBmYUNvZyxcclxuICBmYVNlYXJjaCxcclxuICBmYVN0YXIsXHJcbiAgZmFFZGl0LFxyXG4gIGZhU2F2ZSxcclxuICBmYVBsdXMsXHJcbiAgZmFNaW51cyxcclxuICBmYUNoZWNrLFxyXG4gIGZhVGltZXMsXHJcbiAgZmFFeWUsXHJcbiAgZmFFeWVTbGFzaCxcclxuICBmYUxvY2ssXHJcbiAgZmFVbmxvY2ssXHJcbiAgZmFCZWxsLFxyXG4gIGZhRW52ZWxvcGUsXHJcbiAgZmFQaG9uZSxcclxuICBmYU1hcE1hcmtlckFsdCxcclxuICBmYUNhbGVuZGFyLFxyXG4gIGZhQ2xvY2ssXHJcbiAgZmFJbmZvLFxyXG4gIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxuICBmYVF1ZXN0aW9uLFxyXG4gIGZhQ2hldnJvbkRvd24sXHJcbiAgZmFDaGV2cm9uVXAsXHJcbiAgZmFDaGV2cm9uTGVmdCxcclxuICBmYUNoZXZyb25SaWdodCxcclxuICBmYUFycm93TGVmdCxcclxuICBmYUFycm93UmlnaHQsXHJcbiAgZmFBcnJvd1VwLFxyXG4gIGZhQXJyb3dEb3duLFxyXG4gIGZhUGVuY2lsXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJjaWFyeScgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdncmF5JyB8ICdyZWQnIHwgJ3N1Y2Nlc3MnO1xyXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcclxuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdidXR0b24nIHwgJ3N1Ym1pdCcgfCAncmVzZXQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2EtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2EtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vc2EtYnV0dG9uLmNvbXBvbmVudC5zY3NzJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuZnVsbC13aWR0aF0nOiAnZnVsbFdpZHRoJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhQnV0dG9uQ29tcG9uZW50IHtcclxuICAvLyBQcm9waWVkYWRlcyBjb24gZmxleGliaWxpZGFkIG3DoXhpbWE6IHNvcG9ydGFuIGF0dHJpYnV0ZSB5IHByb3BlcnR5IGJpbmRpbmdcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0J1dHRvbic7IC8vIE1hbnRlbmVyIGNvbW8gQElucHV0IHNpbXBsZSBwYXJhIHN0cmluZ3NcclxuICBcclxuICAvLyBQcm9waWVkYWRlcyBjb24gc2V0dGVycy9nZXR0ZXJzIHBhcmEgZmxleGliaWxpZGFkIG3DoXhpbWFcclxuICBwcml2YXRlIF92YXJpYW50OiBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknO1xyXG4gIHByaXZhdGUgX3NpemU6IEJ1dHRvblNpemUgPSAnbWVkaXVtJztcclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9mdWxsV2lkdGg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF90eXBlOiBCdXR0b25UeXBlID0gJ2J1dHRvbic7XHJcbiAgcHJpdmF0ZSBfaWNvbj86IHN0cmluZztcclxuICBwcml2YXRlIF9wb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcclxuICBwcml2YXRlIF9pY29uT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YXJpYW50KHZhbHVlOiBCdXR0b25WYXJpYW50IHwgYW55KSB7XHJcbiAgICB0aGlzLl92YXJpYW50ID0gdmFsdWUgfHwgJ3ByaW1hcnknO1xyXG4gIH1cclxuICBnZXQgdmFyaWFudCgpOiBCdXR0b25WYXJpYW50IHtcclxuICAgIHJldHVybiB0aGlzLl92YXJpYW50O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2l6ZSh2YWx1ZTogQnV0dG9uU2l6ZSB8IGFueSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlIHx8ICdtZWRpdW0nO1xyXG4gIH1cclxuICBnZXQgc2l6ZSgpOiBCdXR0b25TaXplIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmdWxsV2lkdGgodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBmdWxsV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnVsbFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdHlwZSh2YWx1ZTogQnV0dG9uVHlwZSB8IGFueSkge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8ICdidXR0b24nO1xyXG4gIH1cclxuICBnZXQgdHlwZSgpOiBCdXR0b25UeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgYW55KSB7XHJcbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiAnbGVmdCcgfCAncmlnaHQnIHwgYW55KSB7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlIHx8ICdsZWZ0JztcclxuICB9XHJcbiAgZ2V0IHBvc2l0aW9uKCk6ICdsZWZ0JyB8ICdyaWdodCcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaWNvbk9ubHkodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2ljb25Pbmx5ID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGljb25Pbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb25Pbmx5O1xyXG4gIH1cclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvblRleHQnLCB7IHN0YXRpYzogZmFsc2UgfSkgYnV0dG9uVGV4dCE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvLyBJY29ubyBkZSBzcGlubmVyIHBhcmEgZWwgZXN0YWRvIGxvYWRpbmdcclxuICByZWFkb25seSBzcGlubmVySWNvbiA9IGZhU3Bpbm5lcjtcclxuXHJcbiAgLy8gTcOpdG9kbyBwYXJhIG9idGVuZXIgZWwgaWNvbm8gYmFzYWRvIGVuIGVsIHN0cmluZ1xyXG4gIGdldCBpY29uRGVmaW5pdGlvbigpOiBJY29uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIXRoaXMuaWNvbikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIFxyXG4gICAgLy8gUHJpbWVybyBpbnRlbnRhIGNvbiBlbCBtYXBlbyBsb2NhbCAobcOhcyByw6FwaWRvKVxyXG4gICAgY29uc3QgbG9jYWxJY29uTWFwOiB7IFtrZXk6IHN0cmluZ106IEljb25EZWZpbml0aW9uIH0gPSB7XHJcbiAgICAgIC8vIEljb25vcyBiw6FzaWNvc1xyXG4gICAgICAnc3Bpbm5lcic6IGZhU3Bpbm5lcixcclxuICAgICAgJ2Rvd25sb2FkJzogZmFEb3dubG9hZCxcclxuICAgICAgJ3RyYXNoJzogZmFUcmFzaCxcclxuICAgICAgJ3NoYXJlJzogZmFTaGFyZSxcclxuICAgICAgJ3ByaW50JzogZmFQcmludCxcclxuICAgICAgJ2hlYXJ0JzogZmFIZWFydCxcclxuICAgICAgJ2hvbWUnOiBmYUhvbWUsXHJcbiAgICAgICd1c2VyJzogZmFVc2VyLFxyXG4gICAgICAnY29nJzogZmFDb2csXHJcbiAgICAgICdzZWFyY2gnOiBmYVNlYXJjaCxcclxuICAgICAgJ3N0YXInOiBmYVN0YXIsXHJcbiAgICAgICdlZGl0JzogZmFFZGl0LFxyXG4gICAgICAnc2F2ZSc6IGZhU2F2ZSxcclxuICAgICAgJ3BsdXMnOiBmYVBsdXMsXHJcbiAgICAgICdtaW51cyc6IGZhTWludXMsXHJcbiAgICAgICdjaGVjayc6IGZhQ2hlY2ssXHJcbiAgICAgICd0aW1lcyc6IGZhVGltZXMsXHJcbiAgICAgICd4JzogZmFUaW1lcyxcclxuICAgICAgJ2Nsb3NlJzogZmFUaW1lcyxcclxuICAgICAgJ2V5ZSc6IGZhRXllLFxyXG4gICAgICAnZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcclxuICAgICAgJ2xvY2snOiBmYUxvY2ssXHJcbiAgICAgICd1bmxvY2snOiBmYVVubG9jayxcclxuICAgICAgJ2JlbGwnOiBmYUJlbGwsXHJcbiAgICAgICdlbnZlbG9wZSc6IGZhRW52ZWxvcGUsXHJcbiAgICAgICdwaG9uZSc6IGZhUGhvbmUsXHJcbiAgICAgICdtYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxyXG4gICAgICAnY2FsZW5kYXInOiBmYUNhbGVuZGFyLFxyXG4gICAgICAnY2xvY2snOiBmYUNsb2NrLFxyXG4gICAgICAnaW5mbyc6IGZhSW5mbyxcclxuICAgICAgJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxyXG4gICAgICAncXVlc3Rpb24nOiBmYVF1ZXN0aW9uLFxyXG4gICAgICAnY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcclxuICAgICAgJ2NoZXZyb24tdXAnOiBmYUNoZXZyb25VcCxcclxuICAgICAgJ2NoZXZyb24tbGVmdCc6IGZhQ2hldnJvbkxlZnQsXHJcbiAgICAgICdjaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXHJcbiAgICAgICdhcnJvdy1sZWZ0JzogZmFBcnJvd0xlZnQsXHJcbiAgICAgICdhcnJvdy1yaWdodCc6IGZhQXJyb3dSaWdodCxcclxuICAgICAgJ2Fycm93LXVwJzogZmFBcnJvd1VwLFxyXG4gICAgICAnYXJyb3ctZG93bic6IGZhQXJyb3dEb3duLFxyXG4gICAgICAncGVuY2lsJzogZmFQZW5jaWwsXHJcbiAgICAgIFxyXG4gICAgICAvLyBUYW1iacOpbiBzb3BvcnRhIGZvcm1hdG8gZmFzIGZhLVxyXG4gICAgICAnZmFzIGZhLXNwaW5uZXInOiBmYVNwaW5uZXIsXHJcbiAgICAgICdmYXMgZmEtZG93bmxvYWQnOiBmYURvd25sb2FkLFxyXG4gICAgICAnZmFzIGZhLXRyYXNoJzogZmFUcmFzaCxcclxuICAgICAgJ2ZhcyBmYS1zaGFyZSc6IGZhU2hhcmUsXHJcbiAgICAgICdmYXMgZmEtcHJpbnQnOiBmYVByaW50LFxyXG4gICAgICAnZmFzIGZhLWhlYXJ0JzogZmFIZWFydCxcclxuICAgICAgJ2ZhcyBmYS1ob21lJzogZmFIb21lLFxyXG4gICAgICAnZmFzIGZhLXVzZXInOiBmYVVzZXIsXHJcbiAgICAgICdmYXMgZmEtY29nJzogZmFDb2csXHJcbiAgICAgICdmYXMgZmEtc2VhcmNoJzogZmFTZWFyY2gsXHJcbiAgICAgICdmYXMgZmEtc3Rhcic6IGZhU3RhcixcclxuICAgICAgJ2ZhcyBmYS1lZGl0JzogZmFFZGl0LFxyXG4gICAgICAnZmFzIGZhLXNhdmUnOiBmYVNhdmUsXHJcbiAgICAgICdmYXMgZmEtcGx1cyc6IGZhUGx1cyxcclxuICAgICAgJ2ZhcyBmYS1taW51cyc6IGZhTWludXMsXHJcbiAgICAgICdmYXMgZmEtY2hlY2snOiBmYUNoZWNrLFxyXG4gICAgICAnZmFzIGZhLXRpbWVzJzogZmFUaW1lcyxcclxuICAgICAgJ2ZhcyBmYS14JzogZmFUaW1lcyxcclxuICAgICAgJ2ZhcyBmYS1jbG9zZSc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEtZXllJzogZmFFeWUsXHJcbiAgICAgICdmYXMgZmEtZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcclxuICAgICAgJ2ZhcyBmYS1sb2NrJzogZmFMb2NrLFxyXG4gICAgICAnZmFzIGZhLXVubG9jayc6IGZhVW5sb2NrLFxyXG4gICAgICAnZmFzIGZhLWJlbGwnOiBmYUJlbGwsXHJcbiAgICAgICdmYXMgZmEtZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxyXG4gICAgICAnZmFzIGZhLXBob25lJzogZmFQaG9uZSxcclxuICAgICAgJ2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxyXG4gICAgICAnZmFzIGZhLWNhbGVuZGFyJzogZmFDYWxlbmRhcixcclxuICAgICAgJ2ZhcyBmYS1jbG9jayc6IGZhQ2xvY2ssXHJcbiAgICAgICdmYXMgZmEtaW5mbyc6IGZhSW5mbyxcclxuICAgICAgJ2ZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxuICAgICAgJ2ZhcyBmYS1xdWVzdGlvbic6IGZhUXVlc3Rpb24sXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcclxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcclxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXHJcbiAgICAgICdmYXMgZmEtYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxyXG4gICAgICAnZmFzIGZhLWFycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxyXG4gICAgICAnZmFzIGZhLWFycm93LXVwJzogZmFBcnJvd1VwLFxyXG4gICAgICAnZmFzIGZhLWFycm93LWRvd24nOiBmYUFycm93RG93bixcclxuICAgICAgJ2ZhcyBmYS1wZW5jaWwnOiBmYVBlbmNpbFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gU2kgZXN0w6EgZW4gZWwgbWFwZW8gbG9jYWwsIMO6c2Fsb1xyXG4gICAgaWYgKGxvY2FsSWNvbk1hcFt0aGlzLmljb25dKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbEljb25NYXBbdGhpcy5pY29uXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2kgbm8gZXN0w6EgZW4gZWwgbWFwZW8gbG9jYWwsIGludGVudGEgY29uIGZpbmRJY29uRGVmaW5pdGlvblxyXG4gICAgLy8gRm9ybWF0bzogJ2ZhcyBmYS1zcGlubmVyJyBvICdzcGlubmVyJyAoYXN1bWUgJ2ZhcycgcG9yIGRlZmVjdG8pXHJcbiAgICBsZXQgaWNvbk5hbWUgPSB0aGlzLmljb247XHJcbiAgICBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYXMgZmEtJykpIHtcclxuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmFzIGZhLScsICcnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYS0nKSkge1xyXG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYS0nLCAnJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGZvdW5kSWNvbiA9IGZpbmRJY29uRGVmaW5pdGlvbih7IHByZWZpeDogJ2ZhcycsIGljb25OYW1lOiBpY29uTmFtZSBhcyBJY29uTmFtZSB9KTtcclxuICAgIGlmIChmb3VuZEljb24pIHtcclxuICAgICAgcmV0dXJuIGZvdW5kSWNvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2kgbm8gc2UgZW5jdWVudHJhLCByZXRvcm5hIHVuZGVmaW5lZFxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gU2kgZXN0w6EgZGlzYWJsZWQgbyBsb2FkaW5nLCBwcmV2ZW5pciBjb21wbGV0YW1lbnRlIGVsIGV2ZW50b1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nKSB7XHJcbiAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTb2xvIGVtaXRpciBzaSBubyBlc3TDoSBkaXNhYmxlZCBuaSBsb2FkaW5nXHJcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJ1dHRvbkNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXHJcbiAgICAgICdidG4nLFxyXG4gICAgICBgYnRuLSR7dGhpcy52YXJpYW50fWAsXHJcbiAgICAgIHRoaXMuZ2V0U2l6ZUNsYXNzKCksXHJcbiAgICAgIHRoaXMuZnVsbFdpZHRoID8gJ3ctMTAwJyA6ICcnLFxyXG4gICAgICB0aGlzLmRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnLFxyXG4gICAgICB0aGlzLmxvYWRpbmcgPyAnbG9hZGluZycgOiAnJ1xyXG4gICAgXTtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNJbnRlcmFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIC8vIEVsIGJvdMOzbiBlcyBpbnRlcmFjdGl2byBzb2xvIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcclxuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dTcGlubmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubG9hZGluZztcclxuICB9XHJcblxyXG4gIGdldCBzaG93Q29udGVudCgpOiBib29sZWFuIHtcclxuICAgIC8vIE1vc3RyYXIgY29udGVuaWRvICh0ZXh0byArIGljb25vKSBzb2xvIHNpIG5vIGVzdMOhIGxvYWRpbmdcclxuICAgIHJldHVybiAhdGhpcy5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTaXplQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAodGhpcy5zaXplKSB7XHJcbiAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICByZXR1cm4gJ2J0bi1zbSc7XHJcbiAgICAgIGNhc2UgJ21lZGl1bSc6XHJcbiAgICAgICAgcmV0dXJuICdidG4tbWQnO1xyXG4gICAgICBjYXNlICdsYXJnZSc6XHJcbiAgICAgICAgcmV0dXJuICdidG4tbGcnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnYnRuLW1kJzsgLy8gUG9yIGRlZmVjdG8gdXNhIGVsIHRhbWHDsW8gbWVkaWFub1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8YnV0dG9uXHJcbiAgI2J1dHRvbkVsZW1lbnRcclxuICBbY2xhc3NdPVwiYnV0dG9uQ2xhc3Nlc1wiXHJcbiAgW3R5cGVdPVwidHlwZVwiXHJcbiAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbG9hZGluZyA/ICcnIDogbnVsbFwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmdcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4+XHJcbiAgPCEtLSBDb250ZW5pZG8gZGVsIGJvdMOzbiAtLT5cclxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRlbnRcIiBbY2xhc3MubG9hZGluZy1oaWRkZW5dPVwic2hvd1NwaW5uZXJcIj5cclxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgKHBvc2l0aW9uID09PSAnbGVmdCcgfHwgaWNvbk9ubHkpXCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBbY2xhc3MubWUtMV09XCIhaWNvbk9ubHlcIj48L2ZhLWljb24+XHJcbiAgICA8c3BhbiAjYnV0dG9uVGV4dCAqbmdJZj1cIiFpY29uT25seVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJiAhaWNvbk9ubHlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIGNsYXNzPVwibXMtMVwiPjwvZmEtaWNvbj5cclxuICA8L2Rpdj5cclxuICBcclxuICA8IS0tIFNwaW5uZXIgcXVlIHNlIHN1cGVycG9uZSBjdWFuZG8gZXN0w6EgbG9hZGluZyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwic2hvd1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItb3ZlcmxheVwiPlxyXG4gICAgPGZhLWljb24gXHJcbiAgICAgIFtpY29uXT1cInNwaW5uZXJJY29uXCIgXHJcbiAgICAgIGNsYXNzPVwic3Bpbm5lci1pY29uXCJcclxuICAgICAgW2NsYXNzLnNwaW5uaW5nXT1cImxvYWRpbmdcIj5cclxuICAgIDwvZmEtaWNvbj5cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbiJdfQ==