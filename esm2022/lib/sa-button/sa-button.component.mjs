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
            this.loading ? 'loading' : '',
            'btn-inline' // Agregar clase para comportamiento inline por defecto
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [disabled]=\"!isInteractive\"\r\n  (click)=\"onClick()\"\r\n  class=\"btn\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;line-height:1;min-width:fit-content;float:none!important;clear:none!important;margin-right:.5rem}.row .btn{display:inline-block!important;vertical-align:top}.btn:last-child{margin-right:0}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:2rem;min-height:2rem;padding:.375rem}.btn:has(.button-content:not(:has(span))).btn-md{min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:3rem;min-height:3rem;padding:.75rem}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#36ad55;border:1px solid #36AD55}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary,.btn-secondary:hover{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c0c6cd;color:#2e3b60;font-weight:600}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#daf6e4;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#d0ffd0;border-color:#090;color:#090}.btn-success.loading{background-color:#daf6e4!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#daf6e4!important;opacity:1!important}.btn-danger{background-color:#ffe7e7;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#f5c6cb;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#b9d5f54a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#418be04a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777676;border:1px solid #777676;color:#fff}.btn-gray:hover{background-color:#6b6b6b;border-color:#6b6b6b;color:#fff}.btn-gray.loading{background-color:#777676!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777676!important;opacity:1!important}.btn-sm{padding:.5rem;font-size:.875rem;border-radius:.375rem}.btn-md{padding:.7rem 1rem;font-size:.875rem;border-radius:.375rem}.btn-lg{padding:1rem 2rem;font-size:1rem;border-radius:.375rem}.w-100{width:100%}.btn-inline{display:inline-block!important;vertical-align:top;margin-right:.5rem}.btn-inline:last-child{margin-right:0}.row .btn{display:inline-block!important;vertical-align:top;margin-right:.5rem}.row .btn:last-child{margin-right:0}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [disabled]=\"!isInteractive\"\r\n  (click)=\"onClick()\"\r\n  class=\"btn\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;line-height:1;min-width:fit-content;float:none!important;clear:none!important;margin-right:.5rem}.row .btn{display:inline-block!important;vertical-align:top}.btn:last-child{margin-right:0}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:2rem;min-height:2rem;padding:.375rem}.btn:has(.button-content:not(:has(span))).btn-md{min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:3rem;min-height:3rem;padding:.75rem}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#36ad55;border:1px solid #36AD55}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary,.btn-secondary:hover{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c0c6cd;color:#2e3b60;font-weight:600}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#daf6e4;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#d0ffd0;border-color:#090;color:#090}.btn-success.loading{background-color:#daf6e4!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#daf6e4!important;opacity:1!important}.btn-danger{background-color:#ffe7e7;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#f5c6cb;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#b9d5f54a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#418be04a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777676;border:1px solid #777676;color:#fff}.btn-gray:hover{background-color:#6b6b6b;border-color:#6b6b6b;color:#fff}.btn-gray.loading{background-color:#777676!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777676!important;opacity:1!important}.btn-sm{padding:.5rem;font-size:.875rem;border-radius:.375rem}.btn-md{padding:.7rem 1rem;font-size:.875rem;border-radius:.375rem}.btn-lg{padding:1rem 2rem;font-size:1rem;border-radius:.375rem}.w-100{width:100%}.btn-inline{display:inline-block!important;vertical-align:top;margin-right:.5rem}.btn-inline:last-child{margin-right:0}.row .btn{display:inline-block!important;vertical-align:top;margin-right:.5rem}.row .btn:last-child{margin-right:0}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFrQixrQkFBa0IsRUFBcUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQVkzQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLDZFQUE2RTtJQUNwRSxLQUFLLEdBQVcsUUFBUSxDQUFDLENBQUMsMkNBQTJDO0lBRTlFLDJEQUEyRDtJQUNuRCxR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SztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU3NDLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFFaEMsT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIGZpbmRJY29uRGVmaW5pdGlvbiwgbGlicmFyeSwgSWNvbk5hbWUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyBcclxuICBmYVNwaW5uZXIsIFxyXG4gIGZhRG93bmxvYWQsIFxyXG4gIGZhVHJhc2gsIFxyXG4gIGZhU2hhcmUsIFxyXG4gIGZhUHJpbnQsIFxyXG4gIGZhSGVhcnQsXHJcbiAgZmFIb21lLFxyXG4gIGZhVXNlcixcclxuICBmYUNvZyxcclxuICBmYVNlYXJjaCxcclxuICBmYVN0YXIsXHJcbiAgZmFFZGl0LFxyXG4gIGZhU2F2ZSxcclxuICBmYVBsdXMsXHJcbiAgZmFNaW51cyxcclxuICBmYUNoZWNrLFxyXG4gIGZhVGltZXMsXHJcbiAgZmFFeWUsXHJcbiAgZmFFeWVTbGFzaCxcclxuICBmYUxvY2ssXHJcbiAgZmFVbmxvY2ssXHJcbiAgZmFCZWxsLFxyXG4gIGZhRW52ZWxvcGUsXHJcbiAgZmFQaG9uZSxcclxuICBmYU1hcE1hcmtlckFsdCxcclxuICBmYUNhbGVuZGFyLFxyXG4gIGZhQ2xvY2ssXHJcbiAgZmFJbmZvLFxyXG4gIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxuICBmYVF1ZXN0aW9uLFxyXG4gIGZhQ2hldnJvbkRvd24sXHJcbiAgZmFDaGV2cm9uVXAsXHJcbiAgZmFDaGV2cm9uTGVmdCxcclxuICBmYUNoZXZyb25SaWdodCxcclxuICBmYUFycm93TGVmdCxcclxuICBmYUFycm93UmlnaHQsXHJcbiAgZmFBcnJvd1VwLFxyXG4gIGZhQXJyb3dEb3duLFxyXG4gIGZhUGVuY2lsXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJjaWFyeScgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdncmF5JztcclxuZXhwb3J0IHR5cGUgQnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XHJcbmV4cG9ydCB0eXBlIEJ1dHRvblR5cGUgPSAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhQnV0dG9uQ29tcG9uZW50IHtcclxuICAvLyBQcm9waWVkYWRlcyBjb24gZmxleGliaWxpZGFkIG3DoXhpbWE6IHNvcG9ydGFuIGF0dHJpYnV0ZSB5IHByb3BlcnR5IGJpbmRpbmdcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0J1dHRvbic7IC8vIE1hbnRlbmVyIGNvbW8gQElucHV0IHNpbXBsZSBwYXJhIHN0cmluZ3NcclxuICBcclxuICAvLyBQcm9waWVkYWRlcyBjb24gc2V0dGVycy9nZXR0ZXJzIHBhcmEgZmxleGliaWxpZGFkIG3DoXhpbWFcclxuICBwcml2YXRlIF92YXJpYW50OiBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknO1xyXG4gIHByaXZhdGUgX3NpemU6IEJ1dHRvblNpemUgPSAnbWVkaXVtJztcclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9mdWxsV2lkdGg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF90eXBlOiBCdXR0b25UeXBlID0gJ2J1dHRvbic7XHJcbiAgcHJpdmF0ZSBfaWNvbj86IHN0cmluZztcclxuICBwcml2YXRlIF9wb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcclxuICBwcml2YXRlIF9pY29uT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YXJpYW50KHZhbHVlOiBCdXR0b25WYXJpYW50IHwgYW55KSB7XHJcbiAgICB0aGlzLl92YXJpYW50ID0gdmFsdWUgfHwgJ3ByaW1hcnknO1xyXG4gIH1cclxuICBnZXQgdmFyaWFudCgpOiBCdXR0b25WYXJpYW50IHtcclxuICAgIHJldHVybiB0aGlzLl92YXJpYW50O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2l6ZSh2YWx1ZTogQnV0dG9uU2l6ZSB8IGFueSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlIHx8ICdtZWRpdW0nO1xyXG4gIH1cclxuICBnZXQgc2l6ZSgpOiBCdXR0b25TaXplIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmdWxsV2lkdGgodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBmdWxsV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnVsbFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdHlwZSh2YWx1ZTogQnV0dG9uVHlwZSB8IGFueSkge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8ICdidXR0b24nO1xyXG4gIH1cclxuICBnZXQgdHlwZSgpOiBCdXR0b25UeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgYW55KSB7XHJcbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiAnbGVmdCcgfCAncmlnaHQnIHwgYW55KSB7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlIHx8ICdsZWZ0JztcclxuICB9XHJcbiAgZ2V0IHBvc2l0aW9uKCk6ICdsZWZ0JyB8ICdyaWdodCcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaWNvbk9ubHkodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2ljb25Pbmx5ID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGljb25Pbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb25Pbmx5O1xyXG4gIH1cclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvblRleHQnLCB7IHN0YXRpYzogZmFsc2UgfSkgYnV0dG9uVGV4dCE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvLyBJY29ubyBkZSBzcGlubmVyIHBhcmEgZWwgZXN0YWRvIGxvYWRpbmdcclxuICByZWFkb25seSBzcGlubmVySWNvbiA9IGZhU3Bpbm5lcjtcclxuXHJcbiAgLy8gTcOpdG9kbyBwYXJhIG9idGVuZXIgZWwgaWNvbm8gYmFzYWRvIGVuIGVsIHN0cmluZ1xyXG4gIGdldCBpY29uRGVmaW5pdGlvbigpOiBJY29uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIXRoaXMuaWNvbikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIFxyXG4gICAgLy8gUHJpbWVybyBpbnRlbnRhIGNvbiBlbCBtYXBlbyBsb2NhbCAobcOhcyByw6FwaWRvKVxyXG4gICAgY29uc3QgbG9jYWxJY29uTWFwOiB7IFtrZXk6IHN0cmluZ106IEljb25EZWZpbml0aW9uIH0gPSB7XHJcbiAgICAgIC8vIEljb25vcyBiw6FzaWNvc1xyXG4gICAgICAnc3Bpbm5lcic6IGZhU3Bpbm5lcixcclxuICAgICAgJ2Rvd25sb2FkJzogZmFEb3dubG9hZCxcclxuICAgICAgJ3RyYXNoJzogZmFUcmFzaCxcclxuICAgICAgJ3NoYXJlJzogZmFTaGFyZSxcclxuICAgICAgJ3ByaW50JzogZmFQcmludCxcclxuICAgICAgJ2hlYXJ0JzogZmFIZWFydCxcclxuICAgICAgJ2hvbWUnOiBmYUhvbWUsXHJcbiAgICAgICd1c2VyJzogZmFVc2VyLFxyXG4gICAgICAnY29nJzogZmFDb2csXHJcbiAgICAgICdzZWFyY2gnOiBmYVNlYXJjaCxcclxuICAgICAgJ3N0YXInOiBmYVN0YXIsXHJcbiAgICAgICdlZGl0JzogZmFFZGl0LFxyXG4gICAgICAnc2F2ZSc6IGZhU2F2ZSxcclxuICAgICAgJ3BsdXMnOiBmYVBsdXMsXHJcbiAgICAgICdtaW51cyc6IGZhTWludXMsXHJcbiAgICAgICdjaGVjayc6IGZhQ2hlY2ssXHJcbiAgICAgICd0aW1lcyc6IGZhVGltZXMsXHJcbiAgICAgICd4JzogZmFUaW1lcyxcclxuICAgICAgJ2Nsb3NlJzogZmFUaW1lcyxcclxuICAgICAgJ2V5ZSc6IGZhRXllLFxyXG4gICAgICAnZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcclxuICAgICAgJ2xvY2snOiBmYUxvY2ssXHJcbiAgICAgICd1bmxvY2snOiBmYVVubG9jayxcclxuICAgICAgJ2JlbGwnOiBmYUJlbGwsXHJcbiAgICAgICdlbnZlbG9wZSc6IGZhRW52ZWxvcGUsXHJcbiAgICAgICdwaG9uZSc6IGZhUGhvbmUsXHJcbiAgICAgICdtYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxyXG4gICAgICAnY2FsZW5kYXInOiBmYUNhbGVuZGFyLFxyXG4gICAgICAnY2xvY2snOiBmYUNsb2NrLFxyXG4gICAgICAnaW5mbyc6IGZhSW5mbyxcclxuICAgICAgJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxyXG4gICAgICAncXVlc3Rpb24nOiBmYVF1ZXN0aW9uLFxyXG4gICAgICAnY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcclxuICAgICAgJ2NoZXZyb24tdXAnOiBmYUNoZXZyb25VcCxcclxuICAgICAgJ2NoZXZyb24tbGVmdCc6IGZhQ2hldnJvbkxlZnQsXHJcbiAgICAgICdjaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXHJcbiAgICAgICdhcnJvdy1sZWZ0JzogZmFBcnJvd0xlZnQsXHJcbiAgICAgICdhcnJvdy1yaWdodCc6IGZhQXJyb3dSaWdodCxcclxuICAgICAgJ2Fycm93LXVwJzogZmFBcnJvd1VwLFxyXG4gICAgICAnYXJyb3ctZG93bic6IGZhQXJyb3dEb3duLFxyXG4gICAgICAncGVuY2lsJzogZmFQZW5jaWwsXHJcbiAgICAgIFxyXG4gICAgICAvLyBUYW1iacOpbiBzb3BvcnRhIGZvcm1hdG8gZmFzIGZhLVxyXG4gICAgICAnZmFzIGZhLXNwaW5uZXInOiBmYVNwaW5uZXIsXHJcbiAgICAgICdmYXMgZmEtZG93bmxvYWQnOiBmYURvd25sb2FkLFxyXG4gICAgICAnZmFzIGZhLXRyYXNoJzogZmFUcmFzaCxcclxuICAgICAgJ2ZhcyBmYS1zaGFyZSc6IGZhU2hhcmUsXHJcbiAgICAgICdmYXMgZmEtcHJpbnQnOiBmYVByaW50LFxyXG4gICAgICAnZmFzIGZhLWhlYXJ0JzogZmFIZWFydCxcclxuICAgICAgJ2ZhcyBmYS1ob21lJzogZmFIb21lLFxyXG4gICAgICAnZmFzIGZhLXVzZXInOiBmYVVzZXIsXHJcbiAgICAgICdmYXMgZmEtY29nJzogZmFDb2csXHJcbiAgICAgICdmYXMgZmEtc2VhcmNoJzogZmFTZWFyY2gsXHJcbiAgICAgICdmYXMgZmEtc3Rhcic6IGZhU3RhcixcclxuICAgICAgJ2ZhcyBmYS1lZGl0JzogZmFFZGl0LFxyXG4gICAgICAnZmFzIGZhLXNhdmUnOiBmYVNhdmUsXHJcbiAgICAgICdmYXMgZmEtcGx1cyc6IGZhUGx1cyxcclxuICAgICAgJ2ZhcyBmYS1taW51cyc6IGZhTWludXMsXHJcbiAgICAgICdmYXMgZmEtY2hlY2snOiBmYUNoZWNrLFxyXG4gICAgICAnZmFzIGZhLXRpbWVzJzogZmFUaW1lcyxcclxuICAgICAgJ2ZhcyBmYS14JzogZmFUaW1lcyxcclxuICAgICAgJ2ZhcyBmYS1jbG9zZSc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEtZXllJzogZmFFeWUsXHJcbiAgICAgICdmYXMgZmEtZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcclxuICAgICAgJ2ZhcyBmYS1sb2NrJzogZmFMb2NrLFxyXG4gICAgICAnZmFzIGZhLXVubG9jayc6IGZhVW5sb2NrLFxyXG4gICAgICAnZmFzIGZhLWJlbGwnOiBmYUJlbGwsXHJcbiAgICAgICdmYXMgZmEtZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxyXG4gICAgICAnZmFzIGZhLXBob25lJzogZmFQaG9uZSxcclxuICAgICAgJ2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxyXG4gICAgICAnZmFzIGZhLWNhbGVuZGFyJzogZmFDYWxlbmRhcixcclxuICAgICAgJ2ZhcyBmYS1jbG9jayc6IGZhQ2xvY2ssXHJcbiAgICAgICdmYXMgZmEtaW5mbyc6IGZhSW5mbyxcclxuICAgICAgJ2ZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxuICAgICAgJ2ZhcyBmYS1xdWVzdGlvbic6IGZhUXVlc3Rpb24sXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcclxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcclxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXHJcbiAgICAgICdmYXMgZmEtYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxyXG4gICAgICAnZmFzIGZhLWFycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxyXG4gICAgICAnZmFzIGZhLWFycm93LXVwJzogZmFBcnJvd1VwLFxyXG4gICAgICAnZmFzIGZhLWFycm93LWRvd24nOiBmYUFycm93RG93bixcclxuICAgICAgJ2ZhcyBmYS1wZW5jaWwnOiBmYVBlbmNpbFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gU2kgZXN0w6EgZW4gZWwgbWFwZW8gbG9jYWwsIMO6c2Fsb1xyXG4gICAgaWYgKGxvY2FsSWNvbk1hcFt0aGlzLmljb25dKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbEljb25NYXBbdGhpcy5pY29uXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2kgbm8gZXN0w6EgZW4gZWwgbWFwZW8gbG9jYWwsIGludGVudGEgY29uIGZpbmRJY29uRGVmaW5pdGlvblxyXG4gICAgLy8gRm9ybWF0bzogJ2ZhcyBmYS1zcGlubmVyJyBvICdzcGlubmVyJyAoYXN1bWUgJ2ZhcycgcG9yIGRlZmVjdG8pXHJcbiAgICBsZXQgaWNvbk5hbWUgPSB0aGlzLmljb247XHJcbiAgICBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYXMgZmEtJykpIHtcclxuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmFzIGZhLScsICcnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYS0nKSkge1xyXG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYS0nLCAnJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGZvdW5kSWNvbiA9IGZpbmRJY29uRGVmaW5pdGlvbih7IHByZWZpeDogJ2ZhcycsIGljb25OYW1lOiBpY29uTmFtZSBhcyBJY29uTmFtZSB9KTtcclxuICAgIGlmIChmb3VuZEljb24pIHtcclxuICAgICAgcmV0dXJuIGZvdW5kSWNvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2kgbm8gc2UgZW5jdWVudHJhLCByZXRvcm5hIHVuZGVmaW5lZFxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICAvLyBObyBwZXJtaXRpciBjbGljIHNpIGVzdMOhIGRpc2FibGVkIG8gbG9hZGluZ1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgdGhpcy5jbGlja2VkLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBidXR0b25DbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAnYnRuJyxcclxuICAgICAgYGJ0bi0ke3RoaXMudmFyaWFudH1gLFxyXG4gICAgICB0aGlzLmdldFNpemVDbGFzcygpLFxyXG4gICAgICB0aGlzLmZ1bGxXaWR0aCA/ICd3LTEwMCcgOiAnJyxcclxuICAgICAgdGhpcy5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcclxuICAgICAgdGhpcy5sb2FkaW5nID8gJ2xvYWRpbmcnIDogJycsXHJcbiAgICAgICdidG4taW5saW5lJyAvLyBBZ3JlZ2FyIGNsYXNlIHBhcmEgY29tcG9ydGFtaWVudG8gaW5saW5lIHBvciBkZWZlY3RvXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gRWwgYm90w7NuIGVzIGludGVyYWN0aXZvIHNvbG8gc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1NwaW5uZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dDb250ZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gTW9zdHJhciBjb250ZW5pZG8gKHRleHRvICsgaWNvbm8pIHNvbG8gc2kgbm8gZXN0w6EgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNpemVDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcclxuICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgIHJldHVybiAnYnRuLXNtJztcclxuICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7XHJcbiAgICAgIGNhc2UgJ2xhcmdlJzpcclxuICAgICAgICByZXR1cm4gJ2J0bi1sZyc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdidG4tbWQnOyAvLyBQb3IgZGVmZWN0byB1c2EgZWwgdGFtYcOxbyBtZWRpYW5vXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICAjYnV0dG9uRWxlbWVudFxyXG4gIFtjbGFzc109XCJidXR0b25DbGFzc2VzXCJcclxuICBbdHlwZV09XCJ0eXBlXCJcclxuICBbZGlzYWJsZWRdPVwiIWlzSW50ZXJhY3RpdmVcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4gIGNsYXNzPVwiYnRuXCJcclxuPlxyXG4gIDwhLS0gQ29udGVuaWRvIGRlbCBib3TDs24gLS0+XHJcbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250ZW50XCIgW2NsYXNzLmxvYWRpbmctaGlkZGVuXT1cInNob3dTcGlubmVyXCI+XHJcbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIChwb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGljb25Pbmx5KVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgW2NsYXNzLm1lLTFdPVwiIWljb25Pbmx5XCI+PC9mYS1pY29uPlxyXG4gICAgPHNwYW4gI2J1dHRvblRleHQgKm5nSWY9XCIhaWNvbk9ubHlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cclxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgcG9zaXRpb24gPT09ICdyaWdodCcgJiYgIWljb25Pbmx5XCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBjbGFzcz1cIm1zLTFcIj48L2ZhLWljb24+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPCEtLSBTcGlubmVyIHF1ZSBzZSBzdXBlcnBvbmUgY3VhbmRvIGVzdMOhIGxvYWRpbmcgLS0+XHJcbiAgPGRpdiAqbmdJZj1cInNob3dTcGlubmVyXCIgY2xhc3M9XCJzcGlubmVyLW92ZXJsYXlcIj5cclxuICAgIDxmYS1pY29uIFxyXG4gICAgICBbaWNvbl09XCJzcGlubmVySWNvblwiIFxyXG4gICAgICBjbGFzcz1cInNwaW5uZXItaWNvblwiXHJcbiAgICAgIFtjbGFzcy5zcGlubmluZ109XCJsb2FkaW5nXCI+XHJcbiAgICA8L2ZhLWljb24+XHJcbiAgPC9kaXY+XHJcbjwvYnV0dG9uPlxyXG4iXX0=