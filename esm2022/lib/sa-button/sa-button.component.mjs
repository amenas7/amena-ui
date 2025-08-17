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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth", "style.visibility": "\"visible\"" }, styleAttribute: "visibility: hidden;" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\n  #buttonElement\n  [class]=\"buttonClasses\"\n  [type]=\"type\"\n  [attr.disabled]=\"disabled || loading ? '' : null\"\n  [disabled]=\"disabled || loading\"\n  (click)=\"onClick($event)\"\n>\n  <!-- Contenido del bot\u00F3n -->\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\n  </div>\n  \n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\n    <fa-icon \n      [icon]=\"spinnerIcon\" \n      class=\"spinner-icon\"\n      [class.spinning]=\"loading\">\n    </fa-icon>\n  </div>\n</button>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', host: {
                        '[class.full-width]': 'fullWidth',
                        'style': 'visibility: hidden;',
                        '[style.visibility]': '"visible"'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFrQixrQkFBa0IsRUFBWSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pHLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sVUFBVSxFQUNWLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLE9BQU8sRUFDUCxNQUFNLEVBQ04scUJBQXFCLEVBQ3JCLFVBQVUsRUFDVixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDVCxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBaUIzQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLDZFQUE2RTtJQUNwRSxLQUFLLEdBQVcsUUFBUSxDQUFDLENBQUMsMkNBQTJDO0lBRTlFLDJEQUEyRDtJQUNuRCxR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V0FBVyxRQUdmO3dCQUNKLG9CQUFvQixFQUFFLFdBQVc7d0JBQ2pDLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLG9CQUFvQixFQUFFLFdBQVc7cUJBQ2xDOzhCQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFjRixPQUFPO3NCQURWLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixPQUFPO3NCQURWLEtBQUs7Z0JBU0YsU0FBUztzQkFEWixLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTc0MsVUFBVTtzQkFBckQsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUVoQyxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIGZpbmRJY29uRGVmaW5pdGlvbiwgSWNvbk5hbWUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgXG4gIGZhU3Bpbm5lciwgXG4gIGZhRG93bmxvYWQsIFxuICBmYVRyYXNoLCBcbiAgZmFTaGFyZSwgXG4gIGZhUHJpbnQsIFxuICBmYUhlYXJ0LFxuICBmYUhvbWUsXG4gIGZhVXNlcixcbiAgZmFDb2csXG4gIGZhU2VhcmNoLFxuICBmYVN0YXIsXG4gIGZhRWRpdCxcbiAgZmFTYXZlLFxuICBmYVBsdXMsXG4gIGZhTWludXMsXG4gIGZhQ2hlY2ssXG4gIGZhVGltZXMsXG4gIGZhRXllLFxuICBmYUV5ZVNsYXNoLFxuICBmYUxvY2ssXG4gIGZhVW5sb2NrLFxuICBmYUJlbGwsXG4gIGZhRW52ZWxvcGUsXG4gIGZhUGhvbmUsXG4gIGZhTWFwTWFya2VyQWx0LFxuICBmYUNhbGVuZGFyLFxuICBmYUNsb2NrLFxuICBmYUluZm8sXG4gIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgZmFRdWVzdGlvbixcbiAgZmFDaGV2cm9uRG93bixcbiAgZmFDaGV2cm9uVXAsXG4gIGZhQ2hldnJvbkxlZnQsXG4gIGZhQ2hldnJvblJpZ2h0LFxuICBmYUFycm93TGVmdCxcbiAgZmFBcnJvd1JpZ2h0LFxuICBmYUFycm93VXAsXG4gIGZhQXJyb3dEb3duLFxuICBmYVBlbmNpbFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZ3JheScgfCAncmVkJyB8ICdzdWNjZXNzJztcbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdidXR0b24nIHwgJ3N1Ym1pdCcgfCAncmVzZXQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2EtYnV0dG9uLmNvbXBvbmVudC5zY3NzJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZnVsbC13aWR0aF0nOiAnZnVsbFdpZHRoJyxcbiAgICAnc3R5bGUnOiAndmlzaWJpbGl0eTogaGlkZGVuOycsXG4gICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICdcInZpc2libGVcIidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTYUJ1dHRvbkNvbXBvbmVudCB7XG4gIC8vIFByb3BpZWRhZGVzIGNvbiBmbGV4aWJpbGlkYWQgbcOheGltYTogc29wb3J0YW4gYXR0cmlidXRlIHkgcHJvcGVydHkgYmluZGluZ1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0J1dHRvbic7IC8vIE1hbnRlbmVyIGNvbW8gQElucHV0IHNpbXBsZSBwYXJhIHN0cmluZ3NcbiAgXG4gIC8vIFByb3BpZWRhZGVzIGNvbiBzZXR0ZXJzL2dldHRlcnMgcGFyYSBmbGV4aWJpbGlkYWQgbcOheGltYVxuICBwcml2YXRlIF92YXJpYW50OiBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknO1xuICBwcml2YXRlIF9zaXplOiBCdXR0b25TaXplID0gJ21lZGl1bSc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3R5cGU6IEJ1dHRvblR5cGUgPSAnYnV0dG9uJztcbiAgcHJpdmF0ZSBfaWNvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIHByaXZhdGUgX2ljb25Pbmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhcmlhbnQodmFsdWU6IEJ1dHRvblZhcmlhbnQgfCBhbnkpIHtcbiAgICB0aGlzLl92YXJpYW50ID0gdmFsdWUgfHwgJ3ByaW1hcnknO1xuICB9XG4gIGdldCB2YXJpYW50KCk6IEJ1dHRvblZhcmlhbnQge1xuICAgIHJldHVybiB0aGlzLl92YXJpYW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6IEJ1dHRvblNpemUgfCBhbnkpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgfHwgJ21lZGl1bSc7XG4gIH1cbiAgZ2V0IHNpemUoKTogQnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnVsbFdpZHRoKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fZnVsbFdpZHRoID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgZnVsbFdpZHRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWx1ZTogQnV0dG9uVHlwZSB8IGFueSkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCAnYnV0dG9uJztcbiAgfVxuICBnZXQgdHlwZSgpOiBCdXR0b25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKHZhbHVlOiBzdHJpbmcgfCBhbnkpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWx1ZTogJ2xlZnQnIHwgJ3JpZ2h0JyB8IGFueSkge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWUgfHwgJ2xlZnQnO1xuICB9XG4gIGdldCBwb3NpdGlvbigpOiAnbGVmdCcgfCAncmlnaHQnIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaWNvbk9ubHkodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9pY29uT25seSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGljb25Pbmx5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pY29uT25seTtcbiAgfVxuXG5cbiAgQFZpZXdDaGlsZCgnYnV0dG9uVGV4dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBidXR0b25UZXh0ITogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvLyBJY29ubyBkZSBzcGlubmVyIHBhcmEgZWwgZXN0YWRvIGxvYWRpbmdcbiAgcmVhZG9ubHkgc3Bpbm5lckljb24gPSBmYVNwaW5uZXI7XG5cbiAgLy8gTcOpdG9kbyBwYXJhIG9idGVuZXIgZWwgaWNvbm8gYmFzYWRvIGVuIGVsIHN0cmluZ1xuICBnZXQgaWNvbkRlZmluaXRpb24oKTogSWNvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICAgIGlmICghdGhpcy5pY29uKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIFxuICAgIC8vIFByaW1lcm8gaW50ZW50YSBjb24gZWwgbWFwZW8gbG9jYWwgKG3DoXMgcsOhcGlkbylcbiAgICBjb25zdCBsb2NhbEljb25NYXA6IHsgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb24gfSA9IHtcbiAgICAgIC8vIEljb25vcyBiw6FzaWNvc1xuICAgICAgJ3NwaW5uZXInOiBmYVNwaW5uZXIsXG4gICAgICAnZG93bmxvYWQnOiBmYURvd25sb2FkLFxuICAgICAgJ3RyYXNoJzogZmFUcmFzaCxcbiAgICAgICdzaGFyZSc6IGZhU2hhcmUsXG4gICAgICAncHJpbnQnOiBmYVByaW50LFxuICAgICAgJ2hlYXJ0JzogZmFIZWFydCxcbiAgICAgICdob21lJzogZmFIb21lLFxuICAgICAgJ3VzZXInOiBmYVVzZXIsXG4gICAgICAnY29nJzogZmFDb2csXG4gICAgICAnc2VhcmNoJzogZmFTZWFyY2gsXG4gICAgICAnc3Rhcic6IGZhU3RhcixcbiAgICAgICdlZGl0JzogZmFFZGl0LFxuICAgICAgJ3NhdmUnOiBmYVNhdmUsXG4gICAgICAncGx1cyc6IGZhUGx1cyxcbiAgICAgICdtaW51cyc6IGZhTWludXMsXG4gICAgICAnY2hlY2snOiBmYUNoZWNrLFxuICAgICAgJ3RpbWVzJzogZmFUaW1lcyxcbiAgICAgICd4JzogZmFUaW1lcyxcbiAgICAgICdjbG9zZSc6IGZhVGltZXMsXG4gICAgICAnZXllJzogZmFFeWUsXG4gICAgICAnZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcbiAgICAgICdsb2NrJzogZmFMb2NrLFxuICAgICAgJ3VubG9jayc6IGZhVW5sb2NrLFxuICAgICAgJ2JlbGwnOiBmYUJlbGwsXG4gICAgICAnZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxuICAgICAgJ3Bob25lJzogZmFQaG9uZSxcbiAgICAgICdtYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ2NhbGVuZGFyJzogZmFDYWxlbmRhcixcbiAgICAgICdjbG9jayc6IGZhQ2xvY2ssXG4gICAgICAnaW5mbyc6IGZhSW5mbyxcbiAgICAgICdleGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICdxdWVzdGlvbic6IGZhUXVlc3Rpb24sXG4gICAgICAnY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcbiAgICAgICdjaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXG4gICAgICAnY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcbiAgICAgICdjaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXG4gICAgICAnYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxuICAgICAgJ2Fycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxuICAgICAgJ2Fycm93LXVwJzogZmFBcnJvd1VwLFxuICAgICAgJ2Fycm93LWRvd24nOiBmYUFycm93RG93bixcbiAgICAgICdwZW5jaWwnOiBmYVBlbmNpbCxcbiAgICAgIFxuICAgICAgLy8gVGFtYmnDqW4gc29wb3J0YSBmb3JtYXRvIGZhcyBmYS1cbiAgICAgICdmYXMgZmEtc3Bpbm5lcic6IGZhU3Bpbm5lcixcbiAgICAgICdmYXMgZmEtZG93bmxvYWQnOiBmYURvd25sb2FkLFxuICAgICAgJ2ZhcyBmYS10cmFzaCc6IGZhVHJhc2gsXG4gICAgICAnZmFzIGZhLXNoYXJlJzogZmFTaGFyZSxcbiAgICAgICdmYXMgZmEtcHJpbnQnOiBmYVByaW50LFxuICAgICAgJ2ZhcyBmYS1oZWFydCc6IGZhSGVhcnQsXG4gICAgICAnZmFzIGZhLWhvbWUnOiBmYUhvbWUsXG4gICAgICAnZmFzIGZhLXVzZXInOiBmYVVzZXIsXG4gICAgICAnZmFzIGZhLWNvZyc6IGZhQ29nLFxuICAgICAgJ2ZhcyBmYS1zZWFyY2gnOiBmYVNlYXJjaCxcbiAgICAgICdmYXMgZmEtc3Rhcic6IGZhU3RhcixcbiAgICAgICdmYXMgZmEtZWRpdCc6IGZhRWRpdCxcbiAgICAgICdmYXMgZmEtc2F2ZSc6IGZhU2F2ZSxcbiAgICAgICdmYXMgZmEtcGx1cyc6IGZhUGx1cyxcbiAgICAgICdmYXMgZmEtbWludXMnOiBmYU1pbnVzLFxuICAgICAgJ2ZhcyBmYS1jaGVjayc6IGZhQ2hlY2ssXG4gICAgICAnZmFzIGZhLXRpbWVzJzogZmFUaW1lcyxcbiAgICAgICdmYXMgZmEteCc6IGZhVGltZXMsXG4gICAgICAnZmFzIGZhLWNsb3NlJzogZmFUaW1lcyxcbiAgICAgICdmYXMgZmEtZXllJzogZmFFeWUsXG4gICAgICAnZmFzIGZhLWV5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXG4gICAgICAnZmFzIGZhLWxvY2snOiBmYUxvY2ssXG4gICAgICAnZmFzIGZhLXVubG9jayc6IGZhVW5sb2NrLFxuICAgICAgJ2ZhcyBmYS1iZWxsJzogZmFCZWxsLFxuICAgICAgJ2ZhcyBmYS1lbnZlbG9wZSc6IGZhRW52ZWxvcGUsXG4gICAgICAnZmFzIGZhLXBob25lJzogZmFQaG9uZSxcbiAgICAgICdmYXMgZmEtbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcbiAgICAgICdmYXMgZmEtY2FsZW5kYXInOiBmYUNhbGVuZGFyLFxuICAgICAgJ2ZhcyBmYS1jbG9jayc6IGZhQ2xvY2ssXG4gICAgICAnZmFzIGZhLWluZm8nOiBmYUluZm8sXG4gICAgICAnZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgICAgJ2ZhcyBmYS1xdWVzdGlvbic6IGZhUXVlc3Rpb24sXG4gICAgICAnZmFzIGZhLWNoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXG4gICAgICAnZmFzIGZhLWNoZXZyb24tdXAnOiBmYUNoZXZyb25VcCxcbiAgICAgICdmYXMgZmEtY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcbiAgICAgICdmYXMgZmEtY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxuICAgICAgJ2ZhcyBmYS1hcnJvdy1sZWZ0JzogZmFBcnJvd0xlZnQsXG4gICAgICAnZmFzIGZhLWFycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxuICAgICAgJ2ZhcyBmYS1hcnJvdy11cCc6IGZhQXJyb3dVcCxcbiAgICAgICdmYXMgZmEtYXJyb3ctZG93bic6IGZhQXJyb3dEb3duLFxuICAgICAgJ2ZhcyBmYS1wZW5jaWwnOiBmYVBlbmNpbFxuICAgIH07XG4gICAgXG4gICAgLy8gU2kgZXN0w6EgZW4gZWwgbWFwZW8gbG9jYWwsIMO6c2Fsb1xuICAgIGlmIChsb2NhbEljb25NYXBbdGhpcy5pY29uXSkge1xuICAgICAgcmV0dXJuIGxvY2FsSWNvbk1hcFt0aGlzLmljb25dO1xuICAgIH1cbiAgICBcbiAgICAvLyBTaSBubyBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgaW50ZW50YSBjb24gZmluZEljb25EZWZpbml0aW9uXG4gICAgLy8gRm9ybWF0bzogJ2ZhcyBmYS1zcGlubmVyJyBvICdzcGlubmVyJyAoYXN1bWUgJ2ZhcycgcG9yIGRlZmVjdG8pXG4gICAgbGV0IGljb25OYW1lID0gdGhpcy5pY29uO1xuICAgIGlmICh0aGlzLmljb24uaW5jbHVkZXMoJ2ZhcyBmYS0nKSkge1xuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmFzIGZhLScsICcnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmEtJykpIHtcbiAgICAgIGljb25OYW1lID0gdGhpcy5pY29uLnJlcGxhY2UoJ2ZhLScsICcnKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZm91bmRJY29uID0gZmluZEljb25EZWZpbml0aW9uKHsgcHJlZml4OiAnZmFzJywgaWNvbk5hbWU6IGljb25OYW1lIGFzIEljb25OYW1lIH0pO1xuICAgIGlmIChmb3VuZEljb24pIHtcbiAgICAgIHJldHVybiBmb3VuZEljb247XG4gICAgfVxuICAgIFxuICAgIC8vIFNpIG5vIHNlIGVuY3VlbnRyYSwgcmV0b3JuYSB1bmRlZmluZWRcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgb25DbGljayhldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gU2kgZXN0w6EgZGlzYWJsZWQgbyBsb2FkaW5nLCBwcmV2ZW5pciBjb21wbGV0YW1lbnRlIGVsIGV2ZW50b1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMubG9hZGluZykge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gU29sbyBlbWl0aXIgc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xuICAgIHRoaXMuY2xpY2tlZC5lbWl0KCk7XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAnYnRuJyxcbiAgICAgIGBidG4tJHt0aGlzLnZhcmlhbnR9YCxcbiAgICAgIHRoaXMuZ2V0U2l6ZUNsYXNzKCksXG4gICAgICB0aGlzLmZ1bGxXaWR0aCA/ICd3LTEwMCcgOiAnJyxcbiAgICAgIHRoaXMuZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXG4gICAgICB0aGlzLmxvYWRpbmcgPyAnbG9hZGluZycgOiAnJ1xuICAgIF07XG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIC8vIEVsIGJvdMOzbiBlcyBpbnRlcmFjdGl2byBzb2xvIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGdldCBzaG93U3Bpbm5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHNob3dDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIC8vIE1vc3RyYXIgY29udGVuaWRvICh0ZXh0byArIGljb25vKSBzb2xvIHNpIG5vIGVzdMOhIGxvYWRpbmdcbiAgICByZXR1cm4gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2l6ZUNsYXNzKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgcmV0dXJuICdidG4tc20nO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgcmV0dXJuICdidG4tbWQnO1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICByZXR1cm4gJ2J0bi1sZyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7IC8vIFBvciBkZWZlY3RvIHVzYSBlbCB0YW1hw7FvIG1lZGlhbm9cbiAgICB9XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgI2J1dHRvbkVsZW1lbnRcbiAgW2NsYXNzXT1cImJ1dHRvbkNsYXNzZXNcIlxuICBbdHlwZV09XCJ0eXBlXCJcbiAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbG9hZGluZyA/ICcnIDogbnVsbFwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4+XG4gIDwhLS0gQ29udGVuaWRvIGRlbCBib3TDs24gLS0+XG4gIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGVudFwiIFtjbGFzcy5sb2FkaW5nLWhpZGRlbl09XCJzaG93U3Bpbm5lclwiPlxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgKHBvc2l0aW9uID09PSAnbGVmdCcgfHwgaWNvbk9ubHkpXCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBbY2xhc3MubWUtMV09XCIhaWNvbk9ubHlcIj48L2ZhLWljb24+XG4gICAgPHNwYW4gI2J1dHRvblRleHQgKm5nSWY9XCIhaWNvbk9ubHlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIHBvc2l0aW9uID09PSAncmlnaHQnICYmICFpY29uT25seVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgY2xhc3M9XCJtcy0xXCI+PC9mYS1pY29uPlxuICA8L2Rpdj5cbiAgXG4gIDwhLS0gU3Bpbm5lciBxdWUgc2Ugc3VwZXJwb25lIGN1YW5kbyBlc3TDoSBsb2FkaW5nIC0tPlxuICA8ZGl2ICpuZ0lmPVwic2hvd1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItb3ZlcmxheVwiPlxuICAgIDxmYS1pY29uIFxuICAgICAgW2ljb25dPVwic3Bpbm5lckljb25cIiBcbiAgICAgIGNsYXNzPVwic3Bpbm5lci1pY29uXCJcbiAgICAgIFtjbGFzcy5zcGlubmluZ109XCJsb2FkaW5nXCI+XG4gICAgPC9mYS1pY29uPlxuICA8L2Rpdj5cbjwvYnV0dG9uPlxuIl19