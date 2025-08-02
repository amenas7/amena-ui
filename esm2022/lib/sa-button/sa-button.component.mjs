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
    onClick() {
        // No permitir clic si está disabled o loading
        if (!this.disabled && !this.loading) {
            this.clicked.emit();
        }
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [disabled]=\"!isInteractive\"\r\n  (click)=\"onClick()\"\r\n  class=\"btn\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;line-height:1;min-width:fit-content}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:2rem;min-height:2rem;padding:.375rem}.btn:has(.button-content:not(:has(span))).btn-md{min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:3rem;min-height:3rem;padding:.75rem}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#36ad55;border:1px solid #36AD55}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary,.btn-secondary:hover{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c0c6cd;color:#2e3b60;font-weight:600}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#daf6e4;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#d0ffd0;border-color:#090;color:#090}.btn-success.loading{background-color:#daf6e4!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#daf6e4!important;opacity:1!important}.btn-danger{background-color:#ffe7e7;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#f5c6cb;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#b9d5f54a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#418be04a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777676;border:1px solid #777676;color:#fff}.btn-gray:hover{background-color:#6b6b6b;border-color:#6b6b6b;color:#fff}.btn-gray.loading{background-color:#777676!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777676!important;opacity:1!important}.btn-sm{padding:.5rem;font-size:.875rem;border-radius:.375rem}.btn-md{padding:.7rem 1rem;font-size:.875rem;border-radius:.375rem}.btn-lg{padding:1rem 2rem;font-size:1rem;border-radius:.375rem}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [disabled]=\"!isInteractive\"\r\n  (click)=\"onClick()\"\r\n  class=\"btn\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;line-height:1;min-width:fit-content}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:2rem;min-height:2rem;padding:.375rem}.btn:has(.button-content:not(:has(span))).btn-md{min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:3rem;min-height:3rem;padding:.75rem}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#36ad55;border:1px solid #36AD55}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary,.btn-secondary:hover{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c0c6cd;color:#2e3b60;font-weight:600}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#daf6e4;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#d0ffd0;border-color:#090;color:#090}.btn-success.loading{background-color:#daf6e4!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#daf6e4!important;opacity:1!important}.btn-danger{background-color:#ffe7e7;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#f5c6cb;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#b9d5f54a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#418be04a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777676;border:1px solid #777676;color:#fff}.btn-gray:hover{background-color:#6b6b6b;border-color:#6b6b6b;color:#fff}.btn-gray.loading{background-color:#777676!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777676!important;opacity:1!important}.btn-sm{padding:.5rem;font-size:.875rem;border-radius:.375rem}.btn-md{padding:.7rem 1rem;font-size:.875rem;border-radius:.375rem}.btn-lg{padding:1rem 2rem;font-size:1rem;border-radius:.375rem}.w-100{width:100%}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFrQixrQkFBa0IsRUFBcUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQVkzQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLDZFQUE2RTtJQUNwRSxLQUFLLEdBQVcsUUFBUSxDQUFDLENBQUMsMkNBQTJDO0lBRTlFLDJEQUEyRDtJQUNuRCxR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O2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNzQyxVQUFVO3NCQUFyRCxTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBRWhDLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBmaW5kSWNvbkRlZmluaXRpb24sIGxpYnJhcnksIEljb25OYW1lIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgXHJcbiAgZmFTcGlubmVyLCBcclxuICBmYURvd25sb2FkLCBcclxuICBmYVRyYXNoLCBcclxuICBmYVNoYXJlLCBcclxuICBmYVByaW50LCBcclxuICBmYUhlYXJ0LFxyXG4gIGZhSG9tZSxcclxuICBmYVVzZXIsXHJcbiAgZmFDb2csXHJcbiAgZmFTZWFyY2gsXHJcbiAgZmFTdGFyLFxyXG4gIGZhRWRpdCxcclxuICBmYVNhdmUsXHJcbiAgZmFQbHVzLFxyXG4gIGZhTWludXMsXHJcbiAgZmFDaGVjayxcclxuICBmYVRpbWVzLFxyXG4gIGZhRXllLFxyXG4gIGZhRXllU2xhc2gsXHJcbiAgZmFMb2NrLFxyXG4gIGZhVW5sb2NrLFxyXG4gIGZhQmVsbCxcclxuICBmYUVudmVsb3BlLFxyXG4gIGZhUGhvbmUsXHJcbiAgZmFNYXBNYXJrZXJBbHQsXHJcbiAgZmFDYWxlbmRhcixcclxuICBmYUNsb2NrLFxyXG4gIGZhSW5mbyxcclxuICBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgZmFRdWVzdGlvbixcclxuICBmYUNoZXZyb25Eb3duLFxyXG4gIGZhQ2hldnJvblVwLFxyXG4gIGZhQ2hldnJvbkxlZnQsXHJcbiAgZmFDaGV2cm9uUmlnaHQsXHJcbiAgZmFBcnJvd0xlZnQsXHJcbiAgZmFBcnJvd1JpZ2h0LFxyXG4gIGZhQXJyb3dVcCxcclxuICBmYUFycm93RG93bixcclxuICBmYVBlbmNpbFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZ3JheSc7XHJcbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xyXG5leHBvcnQgdHlwZSBCdXR0b25UeXBlID0gJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYUJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgLy8gUHJvcGllZGFkZXMgY29uIGZsZXhpYmlsaWRhZCBtw6F4aW1hOiBzb3BvcnRhbiBhdHRyaWJ1dGUgeSBwcm9wZXJ0eSBiaW5kaW5nXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdCdXR0b24nOyAvLyBNYW50ZW5lciBjb21vIEBJbnB1dCBzaW1wbGUgcGFyYSBzdHJpbmdzXHJcbiAgXHJcbiAgLy8gUHJvcGllZGFkZXMgY29uIHNldHRlcnMvZ2V0dGVycyBwYXJhIGZsZXhpYmlsaWRhZCBtw6F4aW1hXHJcbiAgcHJpdmF0ZSBfdmFyaWFudDogQnV0dG9uVmFyaWFudCA9ICdwcmltYXJ5JztcclxuICBwcml2YXRlIF9zaXplOiBCdXR0b25TaXplID0gJ21lZGl1bSc7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfdHlwZTogQnV0dG9uVHlwZSA9ICdidXR0b24nO1xyXG4gIHByaXZhdGUgX2ljb24/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XHJcbiAgcHJpdmF0ZSBfaWNvbk9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdmFyaWFudCh2YWx1ZTogQnV0dG9uVmFyaWFudCB8IGFueSkge1xyXG4gICAgdGhpcy5fdmFyaWFudCA9IHZhbHVlIHx8ICdwcmltYXJ5JztcclxuICB9XHJcbiAgZ2V0IHZhcmlhbnQoKTogQnV0dG9uVmFyaWFudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFyaWFudDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNpemUodmFsdWU6IEJ1dHRvblNpemUgfCBhbnkpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZSB8fCAnbWVkaXVtJztcclxuICB9XHJcbiAgZ2V0IHNpemUoKTogQnV0dG9uU2l6ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZnVsbFdpZHRoKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9mdWxsV2lkdGggPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgZnVsbFdpZHRoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHR5cGUodmFsdWU6IEJ1dHRvblR5cGUgfCBhbnkpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCAnYnV0dG9uJztcclxuICB9XHJcbiAgZ2V0IHR5cGUoKTogQnV0dG9uVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZyB8IGFueSkge1xyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwb3NpdGlvbih2YWx1ZTogJ2xlZnQnIHwgJ3JpZ2h0JyB8IGFueSkge1xyXG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZSB8fCAnbGVmdCc7XHJcbiAgfVxyXG4gIGdldCBwb3NpdGlvbigpOiAnbGVmdCcgfCAncmlnaHQnIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGljb25Pbmx5KHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9pY29uT25seSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBpY29uT25seSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uT25seTtcclxuICB9XHJcblxyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b25UZXh0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGJ1dHRvblRleHQhOiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLy8gSWNvbm8gZGUgc3Bpbm5lciBwYXJhIGVsIGVzdGFkbyBsb2FkaW5nXHJcbiAgcmVhZG9ubHkgc3Bpbm5lckljb24gPSBmYVNwaW5uZXI7XHJcblxyXG4gIC8vIE3DqXRvZG8gcGFyYSBvYnRlbmVyIGVsIGljb25vIGJhc2FkbyBlbiBlbCBzdHJpbmdcclxuICBnZXQgaWNvbkRlZmluaXRpb24oKTogSWNvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLmljb24pIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIC8vIFByaW1lcm8gaW50ZW50YSBjb24gZWwgbWFwZW8gbG9jYWwgKG3DoXMgcsOhcGlkbylcclxuICAgIGNvbnN0IGxvY2FsSWNvbk1hcDogeyBba2V5OiBzdHJpbmddOiBJY29uRGVmaW5pdGlvbiB9ID0ge1xyXG4gICAgICAvLyBJY29ub3MgYsOhc2ljb3NcclxuICAgICAgJ3NwaW5uZXInOiBmYVNwaW5uZXIsXHJcbiAgICAgICdkb3dubG9hZCc6IGZhRG93bmxvYWQsXHJcbiAgICAgICd0cmFzaCc6IGZhVHJhc2gsXHJcbiAgICAgICdzaGFyZSc6IGZhU2hhcmUsXHJcbiAgICAgICdwcmludCc6IGZhUHJpbnQsXHJcbiAgICAgICdoZWFydCc6IGZhSGVhcnQsXHJcbiAgICAgICdob21lJzogZmFIb21lLFxyXG4gICAgICAndXNlcic6IGZhVXNlcixcclxuICAgICAgJ2NvZyc6IGZhQ29nLFxyXG4gICAgICAnc2VhcmNoJzogZmFTZWFyY2gsXHJcbiAgICAgICdzdGFyJzogZmFTdGFyLFxyXG4gICAgICAnZWRpdCc6IGZhRWRpdCxcclxuICAgICAgJ3NhdmUnOiBmYVNhdmUsXHJcbiAgICAgICdwbHVzJzogZmFQbHVzLFxyXG4gICAgICAnbWludXMnOiBmYU1pbnVzLFxyXG4gICAgICAnY2hlY2snOiBmYUNoZWNrLFxyXG4gICAgICAndGltZXMnOiBmYVRpbWVzLFxyXG4gICAgICAneCc6IGZhVGltZXMsXHJcbiAgICAgICdjbG9zZSc6IGZhVGltZXMsXHJcbiAgICAgICdleWUnOiBmYUV5ZSxcclxuICAgICAgJ2V5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXHJcbiAgICAgICdsb2NrJzogZmFMb2NrLFxyXG4gICAgICAndW5sb2NrJzogZmFVbmxvY2ssXHJcbiAgICAgICdiZWxsJzogZmFCZWxsLFxyXG4gICAgICAnZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxyXG4gICAgICAncGhvbmUnOiBmYVBob25lLFxyXG4gICAgICAnbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcclxuICAgICAgJ2NhbGVuZGFyJzogZmFDYWxlbmRhcixcclxuICAgICAgJ2Nsb2NrJzogZmFDbG9jayxcclxuICAgICAgJ2luZm8nOiBmYUluZm8sXHJcbiAgICAgICdleGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxuICAgICAgJ3F1ZXN0aW9uJzogZmFRdWVzdGlvbixcclxuICAgICAgJ2NoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXHJcbiAgICAgICdjaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXHJcbiAgICAgICdjaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxyXG4gICAgICAnY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxyXG4gICAgICAnYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxyXG4gICAgICAnYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXHJcbiAgICAgICdhcnJvdy11cCc6IGZhQXJyb3dVcCxcclxuICAgICAgJ2Fycm93LWRvd24nOiBmYUFycm93RG93bixcclxuICAgICAgJ3BlbmNpbCc6IGZhUGVuY2lsLFxyXG4gICAgICBcclxuICAgICAgLy8gVGFtYmnDqW4gc29wb3J0YSBmb3JtYXRvIGZhcyBmYS1cclxuICAgICAgJ2ZhcyBmYS1zcGlubmVyJzogZmFTcGlubmVyLFxyXG4gICAgICAnZmFzIGZhLWRvd25sb2FkJzogZmFEb3dubG9hZCxcclxuICAgICAgJ2ZhcyBmYS10cmFzaCc6IGZhVHJhc2gsXHJcbiAgICAgICdmYXMgZmEtc2hhcmUnOiBmYVNoYXJlLFxyXG4gICAgICAnZmFzIGZhLXByaW50JzogZmFQcmludCxcclxuICAgICAgJ2ZhcyBmYS1oZWFydCc6IGZhSGVhcnQsXHJcbiAgICAgICdmYXMgZmEtaG9tZSc6IGZhSG9tZSxcclxuICAgICAgJ2ZhcyBmYS11c2VyJzogZmFVc2VyLFxyXG4gICAgICAnZmFzIGZhLWNvZyc6IGZhQ29nLFxyXG4gICAgICAnZmFzIGZhLXNlYXJjaCc6IGZhU2VhcmNoLFxyXG4gICAgICAnZmFzIGZhLXN0YXInOiBmYVN0YXIsXHJcbiAgICAgICdmYXMgZmEtZWRpdCc6IGZhRWRpdCxcclxuICAgICAgJ2ZhcyBmYS1zYXZlJzogZmFTYXZlLFxyXG4gICAgICAnZmFzIGZhLXBsdXMnOiBmYVBsdXMsXHJcbiAgICAgICdmYXMgZmEtbWludXMnOiBmYU1pbnVzLFxyXG4gICAgICAnZmFzIGZhLWNoZWNrJzogZmFDaGVjayxcclxuICAgICAgJ2ZhcyBmYS10aW1lcyc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEteCc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEtY2xvc2UnOiBmYVRpbWVzLFxyXG4gICAgICAnZmFzIGZhLWV5ZSc6IGZhRXllLFxyXG4gICAgICAnZmFzIGZhLWV5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXHJcbiAgICAgICdmYXMgZmEtbG9jayc6IGZhTG9jayxcclxuICAgICAgJ2ZhcyBmYS11bmxvY2snOiBmYVVubG9jayxcclxuICAgICAgJ2ZhcyBmYS1iZWxsJzogZmFCZWxsLFxyXG4gICAgICAnZmFzIGZhLWVudmVsb3BlJzogZmFFbnZlbG9wZSxcclxuICAgICAgJ2ZhcyBmYS1waG9uZSc6IGZhUGhvbmUsXHJcbiAgICAgICdmYXMgZmEtbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcclxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhcic6IGZhQ2FsZW5kYXIsXHJcbiAgICAgICdmYXMgZmEtY2xvY2snOiBmYUNsb2NrLFxyXG4gICAgICAnZmFzIGZhLWluZm8nOiBmYUluZm8sXHJcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgICAgICdmYXMgZmEtcXVlc3Rpb24nOiBmYVF1ZXN0aW9uLFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tbGVmdCc6IGZhQ2hldnJvbkxlZnQsXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxyXG4gICAgICAnZmFzIGZhLWFycm93LWxlZnQnOiBmYUFycm93TGVmdCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy1yaWdodCc6IGZhQXJyb3dSaWdodCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy11cCc6IGZhQXJyb3dVcCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXHJcbiAgICAgICdmYXMgZmEtcGVuY2lsJzogZmFQZW5jaWxcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIFNpIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCDDunNhbG9cclxuICAgIGlmIChsb2NhbEljb25NYXBbdGhpcy5pY29uXSkge1xyXG4gICAgICByZXR1cm4gbG9jYWxJY29uTWFwW3RoaXMuaWNvbl07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNpIG5vIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCBpbnRlbnRhIGNvbiBmaW5kSWNvbkRlZmluaXRpb25cclxuICAgIC8vIEZvcm1hdG86ICdmYXMgZmEtc3Bpbm5lcicgbyAnc3Bpbm5lcicgKGFzdW1lICdmYXMnIHBvciBkZWZlY3RvKVxyXG4gICAgbGV0IGljb25OYW1lID0gdGhpcy5pY29uO1xyXG4gICAgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmFzIGZhLScpKSB7XHJcbiAgICAgIGljb25OYW1lID0gdGhpcy5pY29uLnJlcGxhY2UoJ2ZhcyBmYS0nLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmEtJykpIHtcclxuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmEtJywgJycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBmb3VuZEljb24gPSBmaW5kSWNvbkRlZmluaXRpb24oeyBwcmVmaXg6ICdmYXMnLCBpY29uTmFtZTogaWNvbk5hbWUgYXMgSWNvbk5hbWUgfSk7XHJcbiAgICBpZiAoZm91bmRJY29uKSB7XHJcbiAgICAgIHJldHVybiBmb3VuZEljb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNpIG5vIHNlIGVuY3VlbnRyYSwgcmV0b3JuYSB1bmRlZmluZWRcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgLy8gTm8gcGVybWl0aXIgY2xpYyBzaSBlc3TDoSBkaXNhYmxlZCBvIGxvYWRpbmdcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYnV0dG9uQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgICAgJ2J0bicsXHJcbiAgICAgIGBidG4tJHt0aGlzLnZhcmlhbnR9YCxcclxuICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcclxuICAgICAgdGhpcy5mdWxsV2lkdGggPyAndy0xMDAnIDogJycsXHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXHJcbiAgICAgIHRoaXMubG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gRWwgYm90w7NuIGVzIGludGVyYWN0aXZvIHNvbG8gc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1NwaW5uZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dDb250ZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gTW9zdHJhciBjb250ZW5pZG8gKHRleHRvICsgaWNvbm8pIHNvbG8gc2kgbm8gZXN0w6EgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNpemVDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcclxuICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgIHJldHVybiAnYnRuLXNtJztcclxuICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7XHJcbiAgICAgIGNhc2UgJ2xhcmdlJzpcclxuICAgICAgICByZXR1cm4gJ2J0bi1sZyc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdidG4tbWQnOyAvLyBQb3IgZGVmZWN0byB1c2EgZWwgdGFtYcOxbyBtZWRpYW5vXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICAjYnV0dG9uRWxlbWVudFxyXG4gIFtjbGFzc109XCJidXR0b25DbGFzc2VzXCJcclxuICBbdHlwZV09XCJ0eXBlXCJcclxuICBbZGlzYWJsZWRdPVwiIWlzSW50ZXJhY3RpdmVcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4gIGNsYXNzPVwiYnRuXCJcclxuPlxyXG4gIDwhLS0gQ29udGVuaWRvIGRlbCBib3TDs24gLS0+XHJcbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250ZW50XCIgW2NsYXNzLmxvYWRpbmctaGlkZGVuXT1cInNob3dTcGlubmVyXCI+XHJcbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIChwb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGljb25Pbmx5KVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgW2NsYXNzLm1lLTFdPVwiIWljb25Pbmx5XCI+PC9mYS1pY29uPlxyXG4gICAgPHNwYW4gI2J1dHRvblRleHQgKm5nSWY9XCIhaWNvbk9ubHlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cclxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgcG9zaXRpb24gPT09ICdyaWdodCcgJiYgIWljb25Pbmx5XCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBjbGFzcz1cIm1zLTFcIj48L2ZhLWljb24+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPCEtLSBTcGlubmVyIHF1ZSBzZSBzdXBlcnBvbmUgY3VhbmRvIGVzdMOhIGxvYWRpbmcgLS0+XHJcbiAgPGRpdiAqbmdJZj1cInNob3dTcGlubmVyXCIgY2xhc3M9XCJzcGlubmVyLW92ZXJsYXlcIj5cclxuICAgIDxmYS1pY29uIFxyXG4gICAgICBbaWNvbl09XCJzcGlubmVySWNvblwiIFxyXG4gICAgICBjbGFzcz1cInNwaW5uZXItaWNvblwiXHJcbiAgICAgIFtjbGFzcy5zcGlubmluZ109XCJsb2FkaW5nXCI+XHJcbiAgICA8L2ZhLWljb24+XHJcbiAgPC9kaXY+XHJcbjwvYnV0dG9uPlxyXG4iXX0=