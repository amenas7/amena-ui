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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth" } }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', host: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFrQixrQkFBa0IsRUFBcUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQWUzQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLDZFQUE2RTtJQUNwRSxLQUFLLEdBQVcsUUFBUSxDQUFDLENBQUMsMkNBQTJDO0lBRTlFLDJEQUEyRDtJQUNuRCxR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QUFXLFFBR2Y7d0JBQ0osb0JBQW9CLEVBQUUsV0FBVztxQkFDbEM7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQWNGLE9BQU87c0JBRFYsS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLE9BQU87c0JBRFYsS0FBSztnQkFTRixTQUFTO3NCQURaLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNzQyxVQUFVO3NCQUFyRCxTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBRWhDLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBmaW5kSWNvbkRlZmluaXRpb24sIGxpYnJhcnksIEljb25OYW1lIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgXHJcbiAgZmFTcGlubmVyLCBcclxuICBmYURvd25sb2FkLCBcclxuICBmYVRyYXNoLCBcclxuICBmYVNoYXJlLCBcclxuICBmYVByaW50LCBcclxuICBmYUhlYXJ0LFxyXG4gIGZhSG9tZSxcclxuICBmYVVzZXIsXHJcbiAgZmFDb2csXHJcbiAgZmFTZWFyY2gsXHJcbiAgZmFTdGFyLFxyXG4gIGZhRWRpdCxcclxuICBmYVNhdmUsXHJcbiAgZmFQbHVzLFxyXG4gIGZhTWludXMsXHJcbiAgZmFDaGVjayxcclxuICBmYVRpbWVzLFxyXG4gIGZhRXllLFxyXG4gIGZhRXllU2xhc2gsXHJcbiAgZmFMb2NrLFxyXG4gIGZhVW5sb2NrLFxyXG4gIGZhQmVsbCxcclxuICBmYUVudmVsb3BlLFxyXG4gIGZhUGhvbmUsXHJcbiAgZmFNYXBNYXJrZXJBbHQsXHJcbiAgZmFDYWxlbmRhcixcclxuICBmYUNsb2NrLFxyXG4gIGZhSW5mbyxcclxuICBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgZmFRdWVzdGlvbixcclxuICBmYUNoZXZyb25Eb3duLFxyXG4gIGZhQ2hldnJvblVwLFxyXG4gIGZhQ2hldnJvbkxlZnQsXHJcbiAgZmFDaGV2cm9uUmlnaHQsXHJcbiAgZmFBcnJvd0xlZnQsXHJcbiAgZmFBcnJvd1JpZ2h0LFxyXG4gIGZhQXJyb3dVcCxcclxuICBmYUFycm93RG93bixcclxuICBmYVBlbmNpbFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZ3JheScgfCAncmVkJyB8ICdzdWNjZXNzJztcclxuZXhwb3J0IHR5cGUgQnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XHJcbmV4cG9ydCB0eXBlIEJ1dHRvblR5cGUgPSAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuc2NzcycsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5mdWxsLXdpZHRoXSc6ICdmdWxsV2lkdGgnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FCdXR0b25Db21wb25lbnQge1xyXG4gIC8vIFByb3BpZWRhZGVzIGNvbiBmbGV4aWJpbGlkYWQgbcOheGltYTogc29wb3J0YW4gYXR0cmlidXRlIHkgcHJvcGVydHkgYmluZGluZ1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnQnV0dG9uJzsgLy8gTWFudGVuZXIgY29tbyBASW5wdXQgc2ltcGxlIHBhcmEgc3RyaW5nc1xyXG4gIFxyXG4gIC8vIFByb3BpZWRhZGVzIGNvbiBzZXR0ZXJzL2dldHRlcnMgcGFyYSBmbGV4aWJpbGlkYWQgbcOheGltYVxyXG4gIHByaXZhdGUgX3ZhcmlhbnQ6IEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeSc7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogQnV0dG9uU2l6ZSA9ICdtZWRpdW0nO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Z1bGxXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3R5cGU6IEJ1dHRvblR5cGUgPSAnYnV0dG9uJztcclxuICBwcml2YXRlIF9pY29uPzogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xyXG4gIHByaXZhdGUgX2ljb25Pbmx5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhcmlhbnQodmFsdWU6IEJ1dHRvblZhcmlhbnQgfCBhbnkpIHtcclxuICAgIHRoaXMuX3ZhcmlhbnQgPSB2YWx1ZSB8fCAncHJpbWFyeSc7XHJcbiAgfVxyXG4gIGdldCB2YXJpYW50KCk6IEJ1dHRvblZhcmlhbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhcmlhbnQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzaXplKHZhbHVlOiBCdXR0b25TaXplIHwgYW55KSB7XHJcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgfHwgJ21lZGl1bSc7XHJcbiAgfVxyXG4gIGdldCBzaXplKCk6IEJ1dHRvblNpemUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZ1bGxXaWR0aCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fZnVsbFdpZHRoID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGZ1bGxXaWR0aCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0eXBlKHZhbHVlOiBCdXR0b25UeXBlIHwgYW55KSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWUgfHwgJ2J1dHRvbic7XHJcbiAgfVxyXG4gIGdldCB0eXBlKCk6IEJ1dHRvblR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpY29uKHZhbHVlOiBzdHJpbmcgfCBhbnkpIHtcclxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcG9zaXRpb24odmFsdWU6ICdsZWZ0JyB8ICdyaWdodCcgfCBhbnkpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWUgfHwgJ2xlZnQnO1xyXG4gIH1cclxuICBnZXQgcG9zaXRpb24oKTogJ2xlZnQnIHwgJ3JpZ2h0JyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpY29uT25seSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5faWNvbk9ubHkgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgaWNvbk9ubHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faWNvbk9ubHk7XHJcbiAgfVxyXG5cclxuXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uVGV4dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBidXR0b25UZXh0ITogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8vIEljb25vIGRlIHNwaW5uZXIgcGFyYSBlbCBlc3RhZG8gbG9hZGluZ1xyXG4gIHJlYWRvbmx5IHNwaW5uZXJJY29uID0gZmFTcGlubmVyO1xyXG5cclxuICAvLyBNw6l0b2RvIHBhcmEgb2J0ZW5lciBlbCBpY29ubyBiYXNhZG8gZW4gZWwgc3RyaW5nXHJcbiAgZ2V0IGljb25EZWZpbml0aW9uKCk6IEljb25EZWZpbml0aW9uIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5pY29uKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgXHJcbiAgICAvLyBQcmltZXJvIGludGVudGEgY29uIGVsIG1hcGVvIGxvY2FsIChtw6FzIHLDoXBpZG8pXHJcbiAgICBjb25zdCBsb2NhbEljb25NYXA6IHsgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb24gfSA9IHtcclxuICAgICAgLy8gSWNvbm9zIGLDoXNpY29zXHJcbiAgICAgICdzcGlubmVyJzogZmFTcGlubmVyLFxyXG4gICAgICAnZG93bmxvYWQnOiBmYURvd25sb2FkLFxyXG4gICAgICAndHJhc2gnOiBmYVRyYXNoLFxyXG4gICAgICAnc2hhcmUnOiBmYVNoYXJlLFxyXG4gICAgICAncHJpbnQnOiBmYVByaW50LFxyXG4gICAgICAnaGVhcnQnOiBmYUhlYXJ0LFxyXG4gICAgICAnaG9tZSc6IGZhSG9tZSxcclxuICAgICAgJ3VzZXInOiBmYVVzZXIsXHJcbiAgICAgICdjb2cnOiBmYUNvZyxcclxuICAgICAgJ3NlYXJjaCc6IGZhU2VhcmNoLFxyXG4gICAgICAnc3Rhcic6IGZhU3RhcixcclxuICAgICAgJ2VkaXQnOiBmYUVkaXQsXHJcbiAgICAgICdzYXZlJzogZmFTYXZlLFxyXG4gICAgICAncGx1cyc6IGZhUGx1cyxcclxuICAgICAgJ21pbnVzJzogZmFNaW51cyxcclxuICAgICAgJ2NoZWNrJzogZmFDaGVjayxcclxuICAgICAgJ3RpbWVzJzogZmFUaW1lcyxcclxuICAgICAgJ3gnOiBmYVRpbWVzLFxyXG4gICAgICAnY2xvc2UnOiBmYVRpbWVzLFxyXG4gICAgICAnZXllJzogZmFFeWUsXHJcbiAgICAgICdleWUtc2xhc2gnOiBmYUV5ZVNsYXNoLFxyXG4gICAgICAnbG9jayc6IGZhTG9jayxcclxuICAgICAgJ3VubG9jayc6IGZhVW5sb2NrLFxyXG4gICAgICAnYmVsbCc6IGZhQmVsbCxcclxuICAgICAgJ2VudmVsb3BlJzogZmFFbnZlbG9wZSxcclxuICAgICAgJ3Bob25lJzogZmFQaG9uZSxcclxuICAgICAgJ21hcC1tYXJrZXItYWx0JzogZmFNYXBNYXJrZXJBbHQsXHJcbiAgICAgICdjYWxlbmRhcic6IGZhQ2FsZW5kYXIsXHJcbiAgICAgICdjbG9jayc6IGZhQ2xvY2ssXHJcbiAgICAgICdpbmZvJzogZmFJbmZvLFxyXG4gICAgICAnZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgICAgICdxdWVzdGlvbic6IGZhUXVlc3Rpb24sXHJcbiAgICAgICdjaGV2cm9uLWRvd24nOiBmYUNoZXZyb25Eb3duLFxyXG4gICAgICAnY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxyXG4gICAgICAnY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcclxuICAgICAgJ2NoZXZyb24tcmlnaHQnOiBmYUNoZXZyb25SaWdodCxcclxuICAgICAgJ2Fycm93LWxlZnQnOiBmYUFycm93TGVmdCxcclxuICAgICAgJ2Fycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxyXG4gICAgICAnYXJyb3ctdXAnOiBmYUFycm93VXAsXHJcbiAgICAgICdhcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXHJcbiAgICAgICdwZW5jaWwnOiBmYVBlbmNpbCxcclxuICAgICAgXHJcbiAgICAgIC8vIFRhbWJpw6luIHNvcG9ydGEgZm9ybWF0byBmYXMgZmEtXHJcbiAgICAgICdmYXMgZmEtc3Bpbm5lcic6IGZhU3Bpbm5lcixcclxuICAgICAgJ2ZhcyBmYS1kb3dubG9hZCc6IGZhRG93bmxvYWQsXHJcbiAgICAgICdmYXMgZmEtdHJhc2gnOiBmYVRyYXNoLFxyXG4gICAgICAnZmFzIGZhLXNoYXJlJzogZmFTaGFyZSxcclxuICAgICAgJ2ZhcyBmYS1wcmludCc6IGZhUHJpbnQsXHJcbiAgICAgICdmYXMgZmEtaGVhcnQnOiBmYUhlYXJ0LFxyXG4gICAgICAnZmFzIGZhLWhvbWUnOiBmYUhvbWUsXHJcbiAgICAgICdmYXMgZmEtdXNlcic6IGZhVXNlcixcclxuICAgICAgJ2ZhcyBmYS1jb2cnOiBmYUNvZyxcclxuICAgICAgJ2ZhcyBmYS1zZWFyY2gnOiBmYVNlYXJjaCxcclxuICAgICAgJ2ZhcyBmYS1zdGFyJzogZmFTdGFyLFxyXG4gICAgICAnZmFzIGZhLWVkaXQnOiBmYUVkaXQsXHJcbiAgICAgICdmYXMgZmEtc2F2ZSc6IGZhU2F2ZSxcclxuICAgICAgJ2ZhcyBmYS1wbHVzJzogZmFQbHVzLFxyXG4gICAgICAnZmFzIGZhLW1pbnVzJzogZmFNaW51cyxcclxuICAgICAgJ2ZhcyBmYS1jaGVjayc6IGZhQ2hlY2ssXHJcbiAgICAgICdmYXMgZmEtdGltZXMnOiBmYVRpbWVzLFxyXG4gICAgICAnZmFzIGZhLXgnOiBmYVRpbWVzLFxyXG4gICAgICAnZmFzIGZhLWNsb3NlJzogZmFUaW1lcyxcclxuICAgICAgJ2ZhcyBmYS1leWUnOiBmYUV5ZSxcclxuICAgICAgJ2ZhcyBmYS1leWUtc2xhc2gnOiBmYUV5ZVNsYXNoLFxyXG4gICAgICAnZmFzIGZhLWxvY2snOiBmYUxvY2ssXHJcbiAgICAgICdmYXMgZmEtdW5sb2NrJzogZmFVbmxvY2ssXHJcbiAgICAgICdmYXMgZmEtYmVsbCc6IGZhQmVsbCxcclxuICAgICAgJ2ZhcyBmYS1lbnZlbG9wZSc6IGZhRW52ZWxvcGUsXHJcbiAgICAgICdmYXMgZmEtcGhvbmUnOiBmYVBob25lLFxyXG4gICAgICAnZmFzIGZhLW1hcC1tYXJrZXItYWx0JzogZmFNYXBNYXJrZXJBbHQsXHJcbiAgICAgICdmYXMgZmEtY2FsZW5kYXInOiBmYUNhbGVuZGFyLFxyXG4gICAgICAnZmFzIGZhLWNsb2NrJzogZmFDbG9jayxcclxuICAgICAgJ2ZhcyBmYS1pbmZvJzogZmFJbmZvLFxyXG4gICAgICAnZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxyXG4gICAgICAnZmFzIGZhLXF1ZXN0aW9uJzogZmFRdWVzdGlvbixcclxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLWRvd24nOiBmYUNoZXZyb25Eb3duLFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tdXAnOiBmYUNoZXZyb25VcCxcclxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tcmlnaHQnOiBmYUNoZXZyb25SaWdodCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy1sZWZ0JzogZmFBcnJvd0xlZnQsXHJcbiAgICAgICdmYXMgZmEtYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXHJcbiAgICAgICdmYXMgZmEtYXJyb3ctdXAnOiBmYUFycm93VXAsXHJcbiAgICAgICdmYXMgZmEtYXJyb3ctZG93bic6IGZhQXJyb3dEb3duLFxyXG4gICAgICAnZmFzIGZhLXBlbmNpbCc6IGZhUGVuY2lsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBTaSBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgw7pzYWxvXHJcbiAgICBpZiAobG9jYWxJY29uTWFwW3RoaXMuaWNvbl0pIHtcclxuICAgICAgcmV0dXJuIGxvY2FsSWNvbk1hcFt0aGlzLmljb25dO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTaSBubyBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgaW50ZW50YSBjb24gZmluZEljb25EZWZpbml0aW9uXHJcbiAgICAvLyBGb3JtYXRvOiAnZmFzIGZhLXNwaW5uZXInIG8gJ3NwaW5uZXInIChhc3VtZSAnZmFzJyBwb3IgZGVmZWN0bylcclxuICAgIGxldCBpY29uTmFtZSA9IHRoaXMuaWNvbjtcclxuICAgIGlmICh0aGlzLmljb24uaW5jbHVkZXMoJ2ZhcyBmYS0nKSkge1xyXG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYXMgZmEtJywgJycpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmljb24uaW5jbHVkZXMoJ2ZhLScpKSB7XHJcbiAgICAgIGljb25OYW1lID0gdGhpcy5pY29uLnJlcGxhY2UoJ2ZhLScsICcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZm91bmRJY29uID0gZmluZEljb25EZWZpbml0aW9uKHsgcHJlZml4OiAnZmFzJywgaWNvbk5hbWU6IGljb25OYW1lIGFzIEljb25OYW1lIH0pO1xyXG4gICAgaWYgKGZvdW5kSWNvbikge1xyXG4gICAgICByZXR1cm4gZm91bmRJY29uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTaSBubyBzZSBlbmN1ZW50cmEsIHJldG9ybmEgdW5kZWZpbmVkXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhldmVudD86IEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBTaSBlc3TDoSBkaXNhYmxlZCBvIGxvYWRpbmcsIHByZXZlbmlyIGNvbXBsZXRhbWVudGUgZWwgZXZlbnRvXHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNvbG8gZW1pdGlyIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcclxuICAgIHRoaXMuY2xpY2tlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYnV0dG9uQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgICAgJ2J0bicsXHJcbiAgICAgIGBidG4tJHt0aGlzLnZhcmlhbnR9YCxcclxuICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcclxuICAgICAgdGhpcy5mdWxsV2lkdGggPyAndy0xMDAnIDogJycsXHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXHJcbiAgICAgIHRoaXMubG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gRWwgYm90w7NuIGVzIGludGVyYWN0aXZvIHNvbG8gc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1NwaW5uZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dDb250ZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gTW9zdHJhciBjb250ZW5pZG8gKHRleHRvICsgaWNvbm8pIHNvbG8gc2kgbm8gZXN0w6EgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNpemVDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcclxuICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgIHJldHVybiAnYnRuLXNtJztcclxuICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7XHJcbiAgICAgIGNhc2UgJ2xhcmdlJzpcclxuICAgICAgICByZXR1cm4gJ2J0bi1sZyc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdidG4tbWQnOyAvLyBQb3IgZGVmZWN0byB1c2EgZWwgdGFtYcOxbyBtZWRpYW5vXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICAjYnV0dG9uRWxlbWVudFxyXG4gIFtjbGFzc109XCJidXR0b25DbGFzc2VzXCJcclxuICBbdHlwZV09XCJ0eXBlXCJcclxuICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nID8gJycgOiBudWxsXCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbG9hZGluZ1wiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbj5cclxuICA8IS0tIENvbnRlbmlkbyBkZWwgYm90w7NuIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGVudFwiIFtjbGFzcy5sb2FkaW5nLWhpZGRlbl09XCJzaG93U3Bpbm5lclwiPlxyXG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiAocG9zaXRpb24gPT09ICdsZWZ0JyB8fCBpY29uT25seSlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIFtjbGFzcy5tZS0xXT1cIiFpY29uT25seVwiPjwvZmEtaWNvbj5cclxuICAgIDxzcGFuICNidXR0b25UZXh0ICpuZ0lmPVwiIWljb25Pbmx5XCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIHBvc2l0aW9uID09PSAncmlnaHQnICYmICFpY29uT25seVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgY2xhc3M9XCJtcy0xXCI+PC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwhLS0gU3Bpbm5lciBxdWUgc2Ugc3VwZXJwb25lIGN1YW5kbyBlc3TDoSBsb2FkaW5nIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93U3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1vdmVybGF5XCI+XHJcbiAgICA8ZmEtaWNvbiBcclxuICAgICAgW2ljb25dPVwic3Bpbm5lckljb25cIiBcclxuICAgICAgY2xhc3M9XCJzcGlubmVyLWljb25cIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5pbmddPVwibG9hZGluZ1wiPlxyXG4gICAgPC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG48L2J1dHRvbj5cclxuIl19