import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, EventEmitter, Input, ViewChild, Output, forwardRef } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faSave, faEdit, faPlus, faMinus, faCheck, faTimes, faInfo, faExclamationTriangle, faExclamationCircle, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faEye, faEyeSlash, faLock, faUnlock, faKey, faShieldAlt, faUserPlus, faUserMinus, faVideo, faWifi, faTable, faThLarge, faUsers, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartLine, faAppleAlt, faRobot, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalendarDay, faFile, faFlask, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faComment, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faFileExcel, faSignOutAlt, faSmile, faFrown, faMask, faBoxOpen, faSeedling, faVolumeUp, faExpandArrowsAlt, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faLightbulb, faLayerGroup, faListUl, faVolumeDown, faPills, faMobile, faMobileAlt, faMoneyBill, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faDesktop, faChartPie, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faRedo, faRuler, faUtensils, faTshirt, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStore, faTablet, faTabletAlt, faThermometerHalf, faBolt, faTicketAlt, faSitemap, faBath, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faChevronLeft, faChevronRight, faBell, faQuestion, faChevronDown, faChevronUp, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faPencil, faLink, faCopy, faChartBar, faGift, faBatteryHalf, faBicycle, faCalculator, faCamera, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faComments, faMicroscope, faCoffee, faCreditCard, faCropAlt, faCrop, faTruck, faEquals, faEraser, faFileDownload, faMedal, faFilter, faFingerprint, faFire, faTrophy, faFish, faFlag, faForward, faGlobe, faIceCream, faLaptop, faMapPin, faMotorcycle, faPaperclip, faPause, faPercent, faPiggyBank, faPlay, faReceipt, faShoppingCart, faStarHalf, faStop, faThumbsDown, faThumbsUp, faUndo, faUpload } from '@fortawesome/free-solid-svg-icons';
import * as i1$1 from '@angular/platform-browser';

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

// Agregar todos los iconos a la librería
library.add(faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faSave, faEdit, faPlus, faMinus, faCheck, faTimes, faInfo, faExclamationTriangle, faExclamationCircle, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faEye, faEyeSlash, faLock, faUnlock, faKey, faShieldAlt, faUserPlus, faUserMinus, faVideo, faWifi, faTable, faThLarge, faUsers, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartLine, faAppleAlt, faRobot, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalendarDay, faFile, faFlask, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faComment, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faFileExcel, faSignOutAlt, faSmile, faFrown, faMask, faBoxOpen, faSeedling, faVolumeUp, faExpandArrowsAlt, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faLightbulb, faLayerGroup, faListUl, faVolumeDown, faPills, faMobile, faMobileAlt, faMoneyBill, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faDesktop, faChartPie, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faRedo, faRuler, faUtensils, faTshirt, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStore, faTablet, faTabletAlt, faThermometerHalf, faBolt, faTicketAlt, faSitemap, faBath, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faChevronLeft, faChevronRight);

/**
 * Módulo que configura automáticamente Font Awesome con todos los iconos
 * necesarios para los componentes de Sanna UI.
 *
 * Este módulo se auto-configura al importarse, por lo que no es necesario
 * que los proyectos que usen sanna-ui instalen o configuren Font Awesome manualmente.
 */
class SannaUiFontAwesomeModule {
    constructor() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiFontAwesomeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaUiFontAwesomeModule, imports: [FontAwesomeModule], exports: [FontAwesomeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiFontAwesomeModule, imports: [FontAwesomeModule, FontAwesomeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiFontAwesomeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FontAwesomeModule],
                    exports: [FontAwesomeModule]
                }]
        }], ctorParameters: () => [] });

class SaButtonComponent {
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth" } }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [disabled]=\"!isInteractive\"\r\n  (click)=\"onClick()\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#98c8ff4a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', host: {
                        '[class.full-width]': 'fullWidth'
                    }, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [disabled]=\"!isInteractive\"\r\n  (click)=\"onClick()\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#98c8ff4a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:14px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}\n"] }]
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

class SaIconComponent {
    // Propiedades con setters/getters para flexibilidad máxima
    _name = '';
    _color = '#000000';
    _size = 'md';
    set name(value) {
        this._name = value || '';
    }
    get name() {
        return this._name;
    }
    set color(value) {
        this._color = value || '#000000';
    }
    get color() {
        return this._color;
    }
    set size(value) {
        this._size = value || 'md';
    }
    get size() {
        return this._size;
    }
    // Método para obtener el icono basado en el string
    get iconDefinition() {
        if (!this.name)
            return undefined;
        // Mapeo local de iconos (más rápido)
        const localIconMap = {
            // Iconos básicos (solid por defecto)
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
            'angle-double-left': faAngleDoubleLeft,
            'angle-left': faAngleLeft,
            'angle-right': faAngleRight,
            'angle-double-right': faAngleDoubleRight,
            'table': faTable,
            'th-large': faThLarge,
            'users': faUsers,
            'universal-access': faUniversalAccess,
            'running': faRunning,
            'image': faImage,
            'calendar-alt': faCalendarAlt,
            'chart-line': faChartLine,
            'apple-alt': faAppleAlt,
            'robot': faRobot,
            'shopping-bag': faShoppingBag,
            'balance-scale': faBalanceScale,
            'battery-three-quarters': faBatteryThreeQuarters,
            'battery-quarter': faBatteryQuarter,
            'battery-empty': faBatteryEmpty,
            'bell-slash': faBellSlash,
            'bookmark': faBookmark,
            'bowl-food': faBowlFood,
            'box': faBox,
            'bus': faBus,
            'birthday-cake': faBirthdayCake,
            'calendar-day': faCalendarDay,
            'file': faFile,
            'flask': faFlask,
            'cookie-bite': faCookieBite,
            'spray-can': faSprayCan,
            'soap': faSoap,
            'expand': faExpand,
            'cloud': faCloud,
            'comment': faComment,
            'file-upload': faFileUpload,
            'ellipsis-h': faEllipsisH,
            'plane': faPlane,
            'graduation-cap': faGraduationCap,
            'file-excel': faFileExcel,
            'sign-out-alt': faSignOutAlt,
            'smile': faSmile,
            'frown': faFrown,
            'mask': faMask,
            'box-open': faBoxOpen,
            'seedling': faSeedling,
            'volume-up': faVolumeUp,
            'expand-arrows-alt': faExpandArrowsAlt,
            'volume-mute': faVolumeMute,
            'bars': faBars,
            'briefcase': faBriefcase,
            'microchip': faMicrochip,
            'heartbeat': faHeartbeat,
            'history': faHistory,
            'microphone': faMicrophone,
            'lightbulb': faLightbulb,
            'key': faKey,
            'layer-group': faLayerGroup,
            'list-ul': faListUl,
            'volume-down': faVolumeDown,
            'pills': faPills,
            'mobile': faMobile,
            'mobile-alt': faMobileAlt,
            'money-bill': faMoneyBill,
            'sticky-note': faStickyNote,
            'ellipsis-v': faEllipsisV,
            'lungs': faLungs,
            'cash-register': faCashRegister,
            'paper-plane': faPaperPlane,
            'desktop': faDesktop,
            'package': faBox,
            'chart-pie': faChartPie,
            'mouse-pointer': faMousePointer,
            'swimming-pool': faSwimmingPool,
            'ban': faBan,
            'tag': faTag,
            'shield': faShield,
            'qrcode': faQrcode,
            'redo': faRedo,
            'ruler': faRuler,
            'utensils': faUtensils,
            'tshirt': faTshirt,
            'sliders-h': faSlidersH,
            'glass-whiskey': faGlassWhiskey,
            'sort': faSort,
            'tachometer-alt': faTachometerAlt,
            'spoon': faSpoon,
            'store': faStore,
            'tablet': faTablet,
            'tablet-alt': faTabletAlt,
            'thermometer-half': faThermometerHalf,
            'bolt': faBolt,
            'ticket-alt': faTicketAlt,
            'sitemap': faSitemap,
            'bath': faBath,
            // Nuevos iconos agregados
            'cell': faDesktop,
            'grid': faThLarge,
            'group': faUsers,
            'link': faLink,
            'copy': faCopy,
            'accessibility-alt': faUniversalAccess,
            'accessibility': faUniversalAccess,
            'activity': faRunning,
            'add-document': faFile,
            'add-image': faImage,
            'analytics': faChartBar,
            'analytics-raise': faChartLine,
            'apple': faAppleAlt,
            'assistant': faRobot,
            'bag-of-flour': faGift,
            'bag-with-gift': faGift,
            'bags': faShoppingBag,
            'balance': faBalanceScale,
            'battery-alt': faBatteryThreeQuarters,
            'battery-charginig': faBatteryHalf,
            'battery-full': faBatteryHalf,
            'battery-half': faBatteryHalf,
            'battery-low': faBatteryQuarter,
            'bell-new-message': faBell,
            'bell-off': faBellSlash,
            'bicycle': faBicycle,
            'bookmark-simple': faBookmark,
            'bowl': faBowlFood,
            'bus-front': faBus,
            'butter': faBirthdayCake,
            'cake': faBirthdayCake,
            'calculator': faCalculator,
            'calendar-history-alt': faCalendarDay,
            'calendar-history': faCalendarDay,
            'camera': faCamera,
            'candy': faCookieBite,
            'caret-down': faCaretDown,
            'caret-left': faCaretLeft,
            'caret-right': faCaretRight,
            'caret-up': faCaretUp,
            'cells-document': faFile,
            'chart-bar': faChartBar,
            'chart-pie-slice': faChartPie,
            'chat-circle-text': faComments,
            'chemical-experiment': faFlask,
            'chemical-test': faMicroscope,
            'chocolate-bar': faCookieBite,
            'cleaner': faSprayCan,
            'cleaner-dispenser': faSoap,
            'close-full-screen': faExpand,
            'cloud-offline': faCloud,
            'cloud-problem': faCloud,
            'coffee': faCoffee,
            'comments': faComment,
            'cookie': faCookieBite,
            'credit-card': faCreditCard,
            'crop-alt': faCropAlt,
            'crop': faCrop,
            'crop-health': faCrop,
            'delivery-guy': faTruck,
            'density': faDesktop,
            'detergent': faSoap,
            'document-upload': faFileUpload,
            'dots-three': faEllipsisH,
            'download-alt': faDownload,
            'dron': faPlane,
            'education': faGraduationCap,
            'envelope-new-message': faEnvelope,
            'equals': faEquals,
            'eraser': faEraser,
            'excel': faFileExcel,
            'excel-download': faFileDownload,
            'exit': faSignOutAlt,
            'face-satisfied': faSmile,
            'face-dissatisfied': faFrown,
            'face-mask': faMask,
            'facebook': faShare,
            'fast-truck': faTruck,
            'favorite-medal': faMedal,
            'favorite-package': faBoxOpen,
            'feeder': faSeedling,
            'file-download': faFileDownload,
            'filter': faFilter,
            'fingerprint': faFingerprint,
            'fire': faFire,
            'fireworks': faFire,
            'first-place': faTrophy,
            'fish': faFish,
            'flag': faFlag,
            'forward': faForward,
            'full-volume': faVolumeUp,
            'full-screen': faExpandArrowsAlt,
            'gear': faCog,
            'gift': faGift,
            'gift-delivery': faGift,
            'globe': faGlobe,
            'group-bigger': faUsers,
            'half-volume': faVolumeMute,
            'hamburger': faBars,
            'handbag': faBriefcase,
            'happy-chip': faMicrochip,
            'healthy': faHeartbeat,
            'history-time': faHistory,
            'hydrophone': faMicrophone,
            'ice-cream': faIceCream,
            'idea': faLightbulb,
            'instagram': faShare,
            'intelligence-a-i': faRobot,
            'laptop': faLaptop,
            'layer': faLayerGroup,
            'list-bulleted': faListUl,
            'load-balancer-classic': faDesktop,
            'low-volume': faVolumeDown,
            'machine-learning-model': faRobot,
            'magnifying-glass': faSearch,
            'map': faMapPin,
            'map-pin': faMapPin,
            'medal': faMedal,
            'medicine-alert': faExclamationTriangle,
            'medicine': faPills,
            'micro-chip-alt': faMicrochip,
            'micro-chip': faMicrochip,
            'microscope': faMicroscope,
            'mobile-horizontal': faMobile,
            'mobile-vertical': faMobileAlt,
            'money': faMoneyBill,
            'motorcycle': faMotorcycle,
            'note-pencil': faStickyNote,
            'openlock': faUnlock,
            'overflow-menu-vertical': faEllipsisV,
            'oxygen': faLungs,
            'p-o-s': faCashRegister,
            'paper-plane-right': faPaperPlane,
            'paperclip': faPaperclip,
            'parallel-screen': faDesktop,
            'pause': faPause,
            'percent': faPercent,
            'piggy-bank': faPiggyBank,
            'pill': faPills,
            'place-location': faMapMarkerAlt,
            'play': faPlay,
            'pointer': faMousePointer,
            'pointer-lock': faMousePointer,
            'pool-ladder': faSwimmingPool,
            'post-history': faHistory,
            'postit': faStickyNote,
            'prohibit': faBan,
            'promotion': faTag,
            'protection-checked': faShield,
            'qr': faQrcode,
            'receipt': faReceipt,
            'receipt-checked': faReceipt,
            'renew': faRedo,
            'repeat': faRedo,
            'repeat-purchase': faRedo,
            'ruc': faUser,
            'ruler-alt': faRuler,
            'sauce': faUtensils,
            'scan': faQrcode,
            'search-layers': faSearch,
            'sensor': faMicrochip,
            'settings-alt': faCog,
            'share-network': faShare,
            'shirt': faTshirt,
            'shopping-cart': faShoppingCart,
            'shrimp': faFish,
            'sign-out': faSignOutAlt,
            'sliders-horizontal': faSlidersH,
            'soda': faGlassWhiskey,
            'sort-by': faSort,
            'soup-dispenser': faUtensils,
            'soup-noodles': faUtensils,
            'speedometer': faTachometerAlt,
            'sponge': faSpoon,
            'star-half': faStarHalf,
            'stop': faStop,
            'storefront': faStore,
            'styling-cream': faSoap,
            'substract-volume': faVolumeMute,
            'tablet-horizontal': faDesktop,
            'tablet-vertical': faDesktop,
            'temperature': faThermometerHalf,
            'thumbs-down': faThumbsDown,
            'thumbs-up': faThumbsUp,
            'thunder': faBolt,
            'ticket': faTicketAlt,
            'toothpaste': faSoap,
            'tree-view': faSitemap,
            'trend-down': faChartLine,
            'trend-up': faChartLine,
            'trophy': faTrophy,
            'truck': faTruck,
            'tub': faBath,
            'twitter': faShare,
            'undo': faUndo,
            'upload': faUpload,
            'user-avatar': faUser,
            'user-add': faUserPlus,
            'user-plus': faUserPlus,
            'user-substract': faUserMinus,
            'user-minus': faUserMinus,
            'user-with-cart': faUser,
            'video': faVideo,
            'video-layer': faVideo,
            'exclamation-circle': faExclamationCircle,
            'warning-circle': faExclamationCircle,
            'warning-triangle': faExclamationTriangle,
            'whatsapp': faShare,
            'wifi': faWifi,
            'wi-fi': faWifi,
            'wi-fi-off': faWifi,
            'x': faTimes,
            'youtube': faShare,
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
            'fas fa-pencil': faPencil,
            'fas fa-user-plus': faUserPlus,
            'fas fa-user-minus': faUserMinus,
            'fas fa-video': faVideo,
            'fas fa-exclamation-circle': faExclamationCircle,
            'fas fa-wifi': faWifi,
            'fas fa-table': faTable,
            'fas fa-th-large': faThLarge,
            'fas fa-users': faUsers,
            'fas fa-universal-access': faUniversalAccess,
            'fas fa-running': faRunning,
            'fas fa-image': faImage,
            'fas fa-calendar-alt': faCalendarAlt,
            'fas fa-chart-line': faChartLine,
            'fas fa-apple-alt': faAppleAlt,
            'fas fa-robot': faRobot,
            'fas fa-shopping-bag': faShoppingBag,
            'fas fa-balance-scale': faBalanceScale,
            'fas fa-battery-three-quarters': faBatteryThreeQuarters,
            'fas fa-battery-quarter': faBatteryQuarter,
            'fas fa-battery-empty': faBatteryEmpty,
            'fas fa-bell-slash': faBellSlash,
            'fas fa-bookmark': faBookmark,
            'fas fa-bowl-food': faBowlFood,
            'fas fa-box': faBox,
            'fas fa-bus': faBus,
            'fas fa-birthday-cake': faBirthdayCake,
            'fas fa-calendar-day': faCalendarDay,
            'fas fa-file': faFile,
            'fas fa-flask': faFlask,
            'fas fa-cookie-bite': faCookieBite,
            'fas fa-spray-can': faSprayCan,
            'fas fa-soap': faSoap,
            'fas fa-expand': faExpand,
            'fas fa-cloud': faCloud,
            'fas fa-comment': faComment,
            'fas fa-file-upload': faFileUpload,
            'fas fa-ellipsis-h': faEllipsisH,
            'fas fa-plane': faPlane,
            'fas fa-graduation-cap': faGraduationCap,
            'fas fa-file-excel': faFileExcel,
            'fas fa-sign-out-alt': faSignOutAlt,
            'fas fa-smile': faSmile,
            'fas fa-frown': faFrown,
            'fas fa-mask': faMask,
            'fas fa-box-open': faBoxOpen,
            'fas fa-seedling': faSeedling,
            'fas fa-volume-up': faVolumeUp,
            'fas fa-expand-arrows-alt': faExpandArrowsAlt,
            'fas fa-volume-mute': faVolumeMute,
            'fas fa-bars': faBars,
            'fas fa-briefcase': faBriefcase,
            'fas fa-microchip': faMicrochip,
            'fas fa-heartbeat': faHeartbeat,
            'fas fa-history': faHistory,
            'fas fa-microphone': faMicrophone,
            'fas fa-lightbulb': faLightbulb,
            'fas fa-key': faKey,
            'fas fa-layer-group': faLayerGroup,
            'fas fa-list-ul': faListUl,
            'fas fa-volume-down': faVolumeDown,
            'fas fa-pills': faPills,
            'fas fa-mobile': faMobile,
            'fas fa-mobile-alt': faMobileAlt,
            'fas fa-money-bill': faMoneyBill,
            'fas fa-sticky-note': faStickyNote,
            'fas fa-ellipsis-v': faEllipsisV,
            'fas fa-lungs': faLungs,
            'fas fa-cash-register': faCashRegister,
            'fas fa-paper-plane': faPaperPlane,
            'fas fa-desktop': faDesktop,
            'fas fa-package': faBox,
            'fas fa-chart-pie': faChartPie,
            'fas fa-mouse-pointer': faMousePointer,
            'fas fa-swimming-pool': faSwimmingPool,
            'fas fa-ban': faBan,
            'fas fa-tag': faTag,
            'fas fa-shield': faShield,
            'fas fa-qrcode': faQrcode,
            'fas fa-redo': faRedo,
            'fas fa-ruler': faRuler,
            'fas fa-utensils': faUtensils,
            'fas fa-tshirt': faTshirt,
            'fas fa-sliders-h': faSlidersH,
            'fas fa-glass-whiskey': faGlassWhiskey,
            'fas fa-sort': faSort,
            'fas fa-tachometer-alt': faTachometerAlt,
            'fas fa-spoon': faSpoon,
            'fas fa-store': faStore,
            'fas fa-tablet': faTablet,
            'fas fa-tablet-alt': faTabletAlt,
            'fas fa-thermometer-half': faThermometerHalf,
            'fas fa-bolt': faBolt,
            'fas fa-ticket-alt': faTicketAlt,
            'fas fa-sitemap': faSitemap,
            'fas fa-bath': faBath
        };
        // Si está en el mapeo local, úsalo
        if (localIconMap[this.name]) {
            return localIconMap[this.name];
        }
        // Si no está en el mapeo local, intenta con findIconDefinition
        let iconName = this.name;
        if (this.name.includes('fas fa-')) {
            iconName = this.name.replace('fas fa-', '');
        }
        else if (this.name.includes('fa-')) {
            iconName = this.name.replace('fa-', '');
        }
        const foundIcon = findIconDefinition({ prefix: 'fas', iconName: iconName });
        if (foundIcon) {
            return foundIcon;
        }
        // Si no se encuentra, retorna undefined
        return undefined;
    }
    get iconClasses() {
        const classes = [
            'icon',
            `icon-${this.size}`
        ];
        return classes.filter(Boolean).join(' ');
    }
    get iconStyles() {
        return {
            'color': this.color
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaIconComponent, selector: "sa-icon", inputs: { name: "name", color: "color", size: "size" }, ngImport: i0, template: "<fa-icon \r\n  *ngIf=\"iconDefinition\"\r\n  [icon]=\"iconDefinition\"\r\n  [class]=\"iconClasses\"\r\n  [ngStyle]=\"iconStyles\">\r\n</fa-icon>\r\n", styles: ["@charset \"UTF-8\";:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}.icon{display:inline-block;vertical-align:middle}.icon.icon-sm{font-size:.875rem}.icon.icon-md{font-size:1rem}.icon.icon-lg{font-size:1.25rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-icon', template: "<fa-icon \r\n  *ngIf=\"iconDefinition\"\r\n  [icon]=\"iconDefinition\"\r\n  [class]=\"iconClasses\"\r\n  [ngStyle]=\"iconStyles\">\r\n</fa-icon>\r\n", styles: ["@charset \"UTF-8\";:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}.icon{display:inline-block;vertical-align:middle}.icon.icon-sm{font-size:.875rem}.icon.icon-md{font-size:1rem}.icon.icon-lg{font-size:1.25rem}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class SaMessageboxComponent {
    sanitizer;
    // Property que DEBE usar property binding: [message]="'texto'"
    message = '';
    // Propiedades con setters/getters para flexibilidad máxima
    _type = 'success';
    _iconName;
    _iconSize;
    _iconColor;
    set type(value) {
        this._type = value || 'success';
    }
    get type() {
        return this._type;
    }
    set iconName(value) {
        this._iconName = value;
    }
    get iconName() {
        return this._iconName;
    }
    set iconSize(value) {
        this._iconSize = value;
    }
    get iconSize() {
        return this._iconSize;
    }
    set iconColor(value) {
        this._iconColor = value;
    }
    get iconColor() {
        return this._iconColor;
    }
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    get sanitizedMessage() {
        return this.sanitizer.bypassSecurityTrustHtml(this.message);
    }
    get hasIcon() {
        return !!this.iconName;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaMessageboxComponent, deps: [{ token: i1$1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaMessageboxComponent, selector: "sa-messagebox", inputs: { message: "message", type: "type", iconName: "iconName", iconSize: "iconSize", iconColor: "iconColor" }, ngImport: i0, template: "<div class=\"messagebox\" \r\n     [class.success]=\"type === 'success'\"\r\n     [class.warning]=\"type === 'warning'\"\r\n     [class.error]=\"type === 'error'\"\r\n     [class.info]=\"type === 'info'\">\r\n  <div class=\"messagebox-content\">\r\n    <sa-icon *ngIf=\"hasIcon\" \r\n              [name]=\"iconName!\" \r\n              [size]=\"iconSize || 'md'\"\r\n              [color]=\"iconColor || '#000000'\"\r\n              class=\"messagebox-icon\">\r\n    </sa-icon>\r\n    <p class=\"message-text\" [innerHTML]=\"sanitizedMessage\"></p>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.messagebox{position:relative;font-size:14px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;display:flex;flex-direction:row;border:.0625rem solid rgb(14,144,105);border-radius:8px;width:100%;max-width:100%;min-height:auto;padding:1rem;background-color:#f2fdf9;color:#006e4a;margin:8px 0;transition:all .3s ease;box-sizing:border-box;overflow-wrap:break-word}.messagebox.success{background-color:#f2fdf9;color:#006e4a;border:.0625rem solid rgb(14,144,105)}.messagebox.warning{background-color:#fff9f2;color:#9f5200;border:.0625rem solid rgb(217,125,8)}.messagebox.error{background-color:#fff2f7;color:#9f003c;border:.0625rem solid rgb(226,8,103)}.messagebox.info{background-color:#f2f7ff;color:#003d9f;border:.0625rem solid rgb(0,100,209)}.messagebox .messagebox-content{display:flex;align-items:center;gap:.75rem;width:100%}.messagebox .messagebox-icon{flex-shrink:0}.messagebox .message-text{margin:0!important;padding:0;text-align:left;word-wrap:break-word;flex:1;line-height:1.28;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SaIconComponent, selector: "sa-icon", inputs: ["name", "color", "size"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaMessageboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-messagebox', template: "<div class=\"messagebox\" \r\n     [class.success]=\"type === 'success'\"\r\n     [class.warning]=\"type === 'warning'\"\r\n     [class.error]=\"type === 'error'\"\r\n     [class.info]=\"type === 'info'\">\r\n  <div class=\"messagebox-content\">\r\n    <sa-icon *ngIf=\"hasIcon\" \r\n              [name]=\"iconName!\" \r\n              [size]=\"iconSize || 'md'\"\r\n              [color]=\"iconColor || '#000000'\"\r\n              class=\"messagebox-icon\">\r\n    </sa-icon>\r\n    <p class=\"message-text\" [innerHTML]=\"sanitizedMessage\"></p>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.messagebox{position:relative;font-size:14px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;display:flex;flex-direction:row;border:.0625rem solid rgb(14,144,105);border-radius:8px;width:100%;max-width:100%;min-height:auto;padding:1rem;background-color:#f2fdf9;color:#006e4a;margin:8px 0;transition:all .3s ease;box-sizing:border-box;overflow-wrap:break-word}.messagebox.success{background-color:#f2fdf9;color:#006e4a;border:.0625rem solid rgb(14,144,105)}.messagebox.warning{background-color:#fff9f2;color:#9f5200;border:.0625rem solid rgb(217,125,8)}.messagebox.error{background-color:#fff2f7;color:#9f003c;border:.0625rem solid rgb(226,8,103)}.messagebox.info{background-color:#f2f7ff;color:#003d9f;border:.0625rem solid rgb(0,100,209)}.messagebox .messagebox-content{display:flex;align-items:center;gap:.75rem;width:100%}.messagebox .messagebox-icon{flex-shrink:0}.messagebox .message-text{margin:0!important;padding:0;text-align:left;word-wrap:break-word;flex:1;line-height:1.28;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.DomSanitizer }], propDecorators: { message: [{
                type: Input
            }], type: [{
                type: Input
            }], iconName: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], iconColor: [{
                type: Input
            }] } });

class SaInputComponent {
    /** Valor del input (ngModel y reactivo) */
    value = '';
    valueChange = new EventEmitter();
    /** Placeholder del input */
    placeholder = '';
    /** Tipo de input */
    type = 'text';
    /** Tamaño visual */
    size = 'medium';
    /** Variante visual */
    variant = 'default';
    /** Deshabilitado */
    disabled = false;
    /** Solo lectura */
    readonly = false;
    /** Requerido */
    required = false;
    /** Nombre del input */
    name = '';
    /** ID del input */
    id = '';
    /** Máximo de caracteres */
    maxlength;
    /** Mínimo de caracteres */
    minlength;
    /** Patrón de validación */
    pattern;
    /** Etiqueta */
    label;
    /** Texto de ayuda */
    helperText;
    /** Texto de error */
    errorText;
    /** Mostrar toggle de contraseña */
    showPasswordToggle = false;
    /** Icono izquierdo (clase CSS) */
    leftIcon;
    /** Icono derecho (clase CSS) */
    rightIcon;
    showPassword = false;
    isFocused = false;
    ngOnChanges(changes) {
        // Forzar ciclo de detección de cambios para Storybook
    }
    onChange = (_) => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value ?? '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onModelChange(value) {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(value);
    }
    onFocus(event) {
        this.isFocused = true;
    }
    onBlur(event) {
        this.isFocused = false;
        this.onTouched();
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    get inputType() {
        if (this.type === 'password' && this.showPasswordToggle && this.showPassword) {
            return 'text';
        }
        return this.type;
    }
    get inputClasses() {
        return {
            'input': true,
            [`input-${this.size}`]: !!this.size,
            [`input-${this.variant}`]: !!this.variant,
            'focused': this.isFocused,
            'disabled': this.disabled,
            'readonly': this.readonly,
            'error': !!this.errorText,
            'has-left-icon': !!this.leftIcon,
            'has-right-icon': !!this.rightIcon,
            'has-password-toggle': this.showPasswordToggle
        };
    }
    get hasError() {
        return !!this.errorText;
    }
    get showPasswordToggleButton() {
        return this.type === 'password' && this.showPasswordToggle;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaInputComponent, selector: "sa-input", inputs: { value: "value", placeholder: "placeholder", type: "type", size: "size", variant: "variant", disabled: "disabled", readonly: "readonly", required: "required", name: "name", id: "id", maxlength: "maxlength", minlength: "minlength", pattern: "pattern", label: "label", helperText: "helperText", errorText: "errorText", showPasswordToggle: "showPasswordToggle", leftIcon: "leftIcon", rightIcon: "rightIcon" }, outputs: { valueChange: "valueChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaInputComponent),
                multi: true
            }
        ], usesOnChanges: true, ngImport: i0, template: "<div class=\"input-container\">\r\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\r\n  </label>\r\n  <div class=\"input-wrapper\">\r\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\r\n      <i [class]=\"leftIcon\"></i>\r\n    </div>\r\n    <input\r\n      [type]=\"inputType\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [name]=\"name\"\r\n      [id]=\"id || name\"\r\n      [maxLength]=\"maxlength\"\r\n      [minLength]=\"minlength\"\r\n      [attr.pattern]=\"pattern\"\r\n      autocomplete=\"off\"\r\n      [ngClass]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"onModelChange($event)\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n    />\r\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\r\n      <i [class]=\"rightIcon\"></i>\r\n    </div>\r\n    <button\r\n      *ngIf=\"showPasswordToggleButton\"\r\n      type=\"button\"\r\n      class=\"password-toggle-btn\"\r\n      (click)=\"togglePasswordVisibility()\"\r\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\r\n    >\r\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\r\n    {{ helperText }}\r\n  </div>\r\n  <div *ngIf=\"errorText\" class=\"error-text\">\r\n    {{ errorText }}\r\n  </div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input-container\">\r\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\r\n  </label>\r\n  <div class=\"input-wrapper\">\r\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\r\n      <i [class]=\"leftIcon\"></i>\r\n    </div>\r\n    <input\r\n      [type]=\"inputType\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [name]=\"name\"\r\n      [id]=\"id || name\"\r\n      [maxLength]=\"maxlength\"\r\n      [minLength]=\"minlength\"\r\n      [attr.pattern]=\"pattern\"\r\n      autocomplete=\"off\"\r\n      [ngClass]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"onModelChange($event)\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n    />\r\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\r\n      <i [class]=\"rightIcon\"></i>\r\n    </div>\r\n    <button\r\n      *ngIf=\"showPasswordToggleButton\"\r\n      type=\"button\"\r\n      class=\"password-toggle-btn\"\r\n      (click)=\"togglePasswordVisibility()\"\r\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\r\n    >\r\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\r\n    {{ helperText }}\r\n  </div>\r\n  <div *ngIf=\"errorText\" class=\"error-text\">\r\n    {{ errorText }}\r\n  </div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], name: [{
                type: Input
            }], id: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], minlength: [{
                type: Input
            }], pattern: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], showPasswordToggle: [{
                type: Input
            }], leftIcon: [{
                type: Input
            }], rightIcon: [{
                type: Input
            }] } });

class SaHeadingComponent {
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

class SaTextComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTextComponent, selector: "sa-text", ngImport: i0, template: "<p>sa-text works!</p>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}p,span,div,text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-text', template: "<p>sa-text works!</p>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}p,span,div,text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] }]
        }] });

class SaTableComponent {
    resizeListener = null;
    // Arrays/objetos que siempre usan property binding
    columns = [];
    data = [];
    // Solo emptyMessage usa property binding con comillas simples: [emptyMessage]="'texto'"
    emptyMessage = 'No hay datos disponibles';
    // Propiedades con setters/getters para flexibilidad máxima
    _itemsPerPage = 10;
    _showPagination = true;
    _showItemsPerPage = true;
    _showTotal = true;
    _hover = false;
    _loading = false;
    _showFirstLastButtons = true;
    set itemsPerPage(value) {
        this._itemsPerPage = value != null ? +value : 10;
    }
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    set showPagination(value) {
        this._showPagination = value === true || value === 'true';
    }
    get showPagination() {
        return this._showPagination;
    }
    set showItemsPerPage(value) {
        this._showItemsPerPage = value === true || value === 'true';
    }
    get showItemsPerPage() {
        return this._showItemsPerPage;
    }
    set showTotal(value) {
        this._showTotal = value === true || value === 'true';
    }
    get showTotal() {
        return this._showTotal;
    }
    set hover(value) {
        this._hover = value === true || value === 'true';
    }
    get hover() {
        return this._hover;
    }
    set loading(value) {
        this._loading = value === true || value === 'true';
    }
    get loading() {
        return this._loading;
    }
    set showFirstLastButtons(value) {
        this._showFirstLastButtons = value === true || value === 'true';
    }
    get showFirstLastButtons() {
        return this._showFirstLastButtons;
    }
    // Propiedad para el ancho mínimo de la tabla
    _minWidth = '600px';
    set minWidth(value) {
        this._minWidth = value || '600px';
    }
    get minWidth() {
        return this._minWidth;
    }
    pageChange = new EventEmitter();
    itemsPerPageChange = new EventEmitter();
    sortChange = new EventEmitter();
    currentPage = 1;
    currentSort = null;
    paginationInfo = {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: 10,
        startItem: 0,
        endItem: 0
    };
    paginatedData = [];
    itemsPerPageOptions = [5, 10, 25, 50, 100];
    // Propiedad para controlar la animación
    animationKey = 0;
    ngOnInit() {
        this.updatePagination();
        this.setupResizeListener();
    }
    ngOnChanges(changes) {
        if (changes['data'] || changes['itemsPerPage'] || changes['currentPage']) {
            this.updatePagination();
        }
    }
    updatePagination() {
        if (!this.data) {
            this.paginatedData = [];
            this.paginationInfo = {
                currentPage: 1,
                totalPages: 0,
                totalItems: 0,
                itemsPerPage: this.itemsPerPage,
                startItem: 0,
                endItem: 0
            };
            return;
        }
        const totalItems = this.data.length;
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);
        const startItem = (this.currentPage - 1) * this.itemsPerPage;
        const endItem = Math.min(startItem + this.itemsPerPage, totalItems);
        this.paginationInfo = {
            currentPage: this.currentPage,
            totalPages,
            totalItems,
            itemsPerPage: this.itemsPerPage,
            startItem: startItem + 1,
            endItem
        };
        this.paginatedData = this.data.slice(startItem, endItem);
    }
    onPageChange(page) {
        if (page >= 1 && page <= this.paginationInfo.totalPages) {
            this.currentPage = page;
            this.animationKey = 0; // Reiniciar la animación
            this.updatePagination();
            this.pageChange.emit(page);
            // Activar la animación después de un breve delay
            setTimeout(() => {
                this.animationKey = Date.now();
                // Marcar como completa después de la duración de la animación
                setTimeout(() => {
                    const tbody = document.querySelector('tbody[data-animation-key]');
                    if (tbody) {
                        tbody.classList.add('animation-complete');
                    }
                }, 300); // Duración de la animación
            }, 10);
        }
    }
    onItemsPerPageChange(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1;
        this.animationKey = 0; // Reiniciar la animación
        this.updatePagination();
        this.itemsPerPageChange.emit(itemsPerPage);
        // Activar la animación después de un breve delay
        setTimeout(() => {
            this.animationKey = Date.now();
            // Marcar como completa después de la duración de la animación
            setTimeout(() => {
                const tbody = document.querySelector('tbody[data-animation-key]');
                if (tbody) {
                    tbody.classList.add('animation-complete');
                }
            }, 300); // Duración de la animación
        }, 10);
    }
    onSort(column) {
        if (!this.columns.find(col => col.key === column)?.sortable) {
            return;
        }
        if (this.currentSort?.column === column) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        }
        else {
            this.currentSort = { column, direction: 'asc' };
        }
        this.sortChange.emit(this.currentSort);
    }
    getSortIcon(column) {
        if (this.currentSort?.column !== column) {
            return 'bi-arrow-down-up';
        }
        return this.currentSort.direction === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
    }
    getPageNumbers() {
        const pages = [];
        const totalPages = this.paginationInfo.totalPages;
        const currentPage = this.currentPage;
        // Detectar si estamos en un dispositivo pequeño (menos de 768px)
        const isSmallScreen = window.innerWidth < 768;
        if (totalPages <= 7) {
            // Para pocas páginas, mostrar todas
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else if (isSmallScreen) {
            // En dispositivos pequeños, mostrar solo 2 páginas máximo
            if (currentPage <= 2) {
                // Al inicio: mostrar páginas 1, 2 + separador + última
                for (let i = 1; i <= Math.min(2, totalPages); i++) {
                    pages.push(i);
                }
                if (totalPages > 2) {
                    pages.push(-1); // Separator
                    pages.push(totalPages);
                }
            }
            else if (currentPage >= totalPages - 1) {
                // Al final: mostrar primera + separador + últimas 2 páginas
                pages.push(1);
                pages.push(-1); // Separator
                for (let i = Math.max(totalPages - 1, 1); i <= totalPages; i++) {
                    pages.push(i);
                }
            }
            else {
                // En medio: mostrar primera + separador + actual + separador + última
                pages.push(1);
                pages.push(-1); // Separator
                pages.push(currentPage);
                pages.push(-1); // Separator
                pages.push(totalPages);
            }
        }
        else {
            // En pantallas grandes, comportamiento original
            if (currentPage <= 4) {
                for (let i = 1; i <= 5; i++) {
                    pages.push(i);
                }
                pages.push(-1); // Separator
                pages.push(totalPages);
            }
            else if (currentPage >= totalPages - 3) {
                pages.push(1);
                pages.push(-1); // Separator
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pages.push(i);
                }
            }
            else {
                pages.push(1);
                pages.push(-1); // Separator
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push(-1); // Separator
                pages.push(totalPages);
            }
        }
        return pages;
    }
    trackByFn(index, item) {
        return index;
    }
    onSelectChange(event) {
        const target = event.target;
        if (target) {
            this.onItemsPerPageChange(+target.value);
        }
    }
    setupResizeListener() {
        this.resizeListener = () => {
            // Actualizar paginación cuando cambie el tamaño de la ventana
            this.updatePagination();
        };
        window.addEventListener('resize', this.resizeListener);
    }
    ngOnDestroy() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTableComponent, selector: "sa-table", inputs: { columns: "columns", data: "data", emptyMessage: "emptyMessage", itemsPerPage: "itemsPerPage", showPagination: "showPagination", showItemsPerPage: "showItemsPerPage", showTotal: "showTotal", hover: "hover", loading: "loading", showFirstLastButtons: "showFirstLastButtons", minWidth: "minWidth" }, outputs: { pageChange: "pageChange", itemsPerPageChange: "itemsPerPageChange", sortChange: "sortChange" }, usesOnChanges: true, ngImport: i0, template: "<!-- Table Container -->\r\n<div class=\"sa-table-container\">\r\n  <!-- Table Content (siempre visible) -->\r\n  <div class=\"table-content\" [class.loading]=\"loading\">\r\n  \r\n  <!-- Table -->\r\n  <div class=\"table-responsive table-container\">\r\n    <table class=\"table\" \r\n           [class.table-hover]=\"hover\"\r\n           [style.min-width]=\"minWidth\">\r\n      <thead class=\"table-light\">\r\n        <tr>\r\n          <th *ngFor=\"let column of columns\" \r\n              [style.width]=\"column.width\">\r\n            <div class=\"d-flex align-items-center justify-content-between\">\r\n              <span>{{ column.label }}</span>\r\n            </div>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody [class.animate-fade-in]=\"animationKey > 0\" [class.animation-complete]=\"animationKey > 0\" [attr.data-animation-key]=\"animationKey\">\r\n        <tr *ngFor=\"let row of paginatedData; trackBy: trackByFn\">\r\n          <td *ngFor=\"let column of columns\" [style.width]=\"column.width\">\r\n            {{ row[column.key] }}\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"paginatedData.length === 0\">\r\n          <td [attr.colspan]=\"columns.length\" class=\"text-center py-4 text-muted\">\r\n            {{ emptyMessage }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    \r\n    <!-- Loading Overlay solo sobre la tabla -->\r\n    <div *ngIf=\"loading\" class=\"loading-overlay\">\r\n      <div class=\"loading-content\">\r\n        <div class=\"spinner-border text-primary\" role=\"status\">\r\n        </div>\r\n        <div class=\"loading-text\">Cargando...</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Items Per Page Selector and Pagination Controls (en una sola fila) -->\r\n  <div *ngIf=\"showPagination && data.length > 0\" class=\"d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center mt-2\">\r\n    <!-- Items Per Page Selector (izquierda) -->\r\n    <div *ngIf=\"showItemsPerPage\" class=\"d-flex align-items-center mb-2 mb-md-0\">\r\n      <span class=\"text-muted me-2\">Registros por p\u00E1gina:</span>\r\n      <select \r\n        id=\"itemsPerPage\"\r\n        class=\"form-select form-select-sm\" \r\n        style=\"width: auto;\"\r\n        [value]=\"itemsPerPage\"\r\n        (change)=\"onSelectChange($event)\">\r\n        <option *ngFor=\"let option of itemsPerPageOptions\" [value]=\"option\">\r\n          {{ option }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    \r\n    <!-- Pagination Info and Controls (derecha) -->\r\n    <div class=\"d-flex flex-column flex-md-row align-items-center\">\r\n      <div *ngIf=\"showTotal\" class=\"text-muted mb-2 mb-md-0 me-md-3 text-center text-md-start\">\r\n        P\u00E1gina: {{ paginationInfo.currentPage }} - {{ paginationInfo.startItem }} de {{ paginationInfo.totalItems }}\r\n      </div>\r\n      \r\n      <nav *ngIf=\"paginationInfo.totalPages > 1\" aria-label=\"Navegaci\u00F3n de p\u00E1ginas\">\r\n        <ul class=\"pagination mb-0 justify-content-center justify-content-md-start\">\r\n                <!-- First Page Button -->\r\n        <li *ngIf=\"showFirstLastButtons\" class=\"page-item\" [class.disabled]=\"currentPage === 1\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"Primera p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-first\">\u00AB</span>\r\n          </button>\r\n        </li>\r\n\r\n        <!-- Previous Button -->\r\n        <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(currentPage - 1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"P\u00E1gina anterior\">\r\n            <span class=\"pagination-icon\">\u2039</span>\r\n          </button>\r\n        </li>\r\n\r\n        <!-- Page Numbers -->\r\n        <li *ngFor=\"let page of getPageNumbers()\" \r\n            class=\"page-item\"\r\n            [class.active]=\"page === currentPage\"\r\n            [class.disabled]=\"page === -1\">\r\n          <button *ngIf=\"page !== -1\" \r\n                  class=\"page-link\" \r\n                  (click)=\"onPageChange(page)\">\r\n            {{ page }}\r\n          </button>\r\n          <span *ngIf=\"page === -1\" class=\"page-link\">...</span>\r\n        </li>\r\n\r\n        <!-- Next Button -->\r\n        <li class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(currentPage + 1)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"P\u00E1gina siguiente\">\r\n            <span class=\"pagination-icon\">\u203A</span>\r\n          </button>\r\n        </li>\r\n\r\n        <!-- Last Page Button -->\r\n        <li *ngIf=\"showFirstLastButtons\" class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(paginationInfo.totalPages)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"\u00DAltima p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-last\">\u00BB</span>\r\n          </button>\r\n        </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.d-flex{display:flex!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.mb-3{margin-bottom:1rem!important}.mt-3{margin-top:1rem!important}.me-2{margin-right:.5rem!important}.text-muted{color:#6c757d!important}.text-center{text-align:center!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.form-select{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.table{width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border:none!important}.table>:not(caption)>*>*{padding:.5rem;background-color:transparent;border:none!important;box-shadow:none!important}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-light{color:#000;background-color:#f8f9fa}.table-hover>tbody>tr:hover>*{background-color:#00000013;color:#000}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}.table-bordered>:not(caption)>*{border-width:0!important}.table-bordered>:not(caption)>*>*{border-width:0!important}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.text-primary{color:#0d6efd!important}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.375rem}.page-item{list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.page-item:first-child .page-link{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.page-item:last-child .page-link{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.mb-0{margin-bottom:0!important}@keyframes spinner-border{to{transform:rotate(360deg)}}.sa-table-container{position:relative;border-radius:.375rem;overflow:hidden;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table-content{transition:opacity .3s ease}.sa-table-container .table-content.loading{opacity:.5;pointer-events:none}.sa-table-container .loading-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:#fffc;border-radius:.375rem;z-index:10;margin-top:0;margin-bottom:0}.sa-table-container .loading-overlay .loading-content{display:flex;flex-direction:column;align-items:center;gap:1rem}.sa-table-container .loading-overlay .loading-content .loading-text{color:#6c757d;font-size:.875rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sa-table-container .table-responsive{border-radius:.375rem;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;border:1px solid #e1e2e4!important}.sa-table-container .table{margin-bottom:0;border-radius:.375rem!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;border:none!important}.sa-table-container .table th{cursor:default!important;-webkit-user-select:text!important;user-select:text!important;border-radius:0!important;border:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table th:first-child{border-top-left-radius:.375rem!important}.sa-table-container .table th:last-child{border-top-right-radius:.375rem!important}.sa-table-container .table th:hover{background-color:transparent!important}.sa-table-container .table td{border-bottom:1px solid #e1e2e4!important;border-right:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody.animate-fade-in{animation:fadeIn .5s ease-out;animation-fill-mode:both}.sa-table-container .table tbody.animate-fade-in td{color:transparent!important;transition:color .5s ease-out}.sa-table-container .table tbody.animate-fade-in.animation-complete td{color:inherit!important}.sa-table-container .table thead th{cursor:default!important;border-bottom:none!important;border-right:none!important;background-color:#eef8f0!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table thead th:hover{background-color:#eef8f0!important}.sa-table-container .table thead tr th{background-color:#eef8f0!important;border-bottom:none!important;border-right:none!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table thead tr th:hover{background-color:#eef8f0!important}.sa-table-container .table tbody tr td{text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody tr td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important;border-right:none!important}.sa-table-container .table>tbody>tr:last-child>td:first-child{border-bottom-left-radius:.375rem!important}.sa-table-container .table>tbody>tr:last-child>td:last-child{border-bottom-right-radius:.375rem!important}.sa-table-container .table>tbody>tr>td:first-child,.sa-table-container .table>thead>tr>th:first-child{padding-left:1rem!important}.sa-table-container .table.table-hover>tbody>tr:hover>td{background-color:#f8f9fa!important}.sa-table-container .table.table-hover>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table.table-hover>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .d-flex.justify-content-between.align-items-center.mt-3{margin-top:.75rem!important}.sa-table-container .pagination{margin-bottom:0;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}.sa-table-container .pagination .page-link{border-radius:.25rem;border:1px solid #dddfe0;min-width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;padding:0;background-color:transparent;color:#5bab5f;font-size:1.125rem;text-align:center;line-height:1;width:2rem;box-sizing:border-box;letter-spacing:0;word-spacing:0;outline:none!important;cursor:pointer!important;font-size:.9rem;font-weight:500}.sa-table-container .pagination .page-link .pagination-icon{font-size:1.5rem;font-weight:500;line-height:0;display:flex;align-items:center;justify-content:center;margin:0;margin-top:-5px!important;padding:0;height:100%;width:100%}.sa-table-container .pagination .page-link:hover{background-color:#fff;border-color:#5bab5f;color:#5bab5f}.sa-table-container .pagination .page-link:focus{outline:none!important;box-shadow:none!important}.sa-table-container .pagination .page-item.active .page-link{background-color:#5bab5f;color:#fff;font-weight:500;border:none!important;cursor:pointer!important}.sa-table-container .pagination .page-item.active .page-link:hover{background-color:#5bab5f!important;color:#fff!important;border:none!important}.sa-table-container .pagination .page-item.disabled .page-link{color:#dee2e6;pointer-events:none;background-color:#fafafa;border-color:#dee2e6;cursor:not-allowed!important}.sa-table-container .pagination .page-item:first-child .page-link,.sa-table-container .pagination .page-item:last-child .page-link{min-width:2rem;width:2rem}.sa-table-container .pagination .page-link *{display:inline-block;vertical-align:middle}.sa-table-container .form-select{border-radius:.375rem;border:1px solid #ced4da!important;padding:.375rem .75rem!important;font-size:1rem!important;font-weight:400!important;line-height:1.5!important;color:#212529!important;background-color:#fff!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right .75rem center!important;background-size:16px 12px!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;appearance:none!important;width:auto!important;min-width:70px!important;display:inline-block!important;outline:none!important}.sa-table-container .form-select:focus{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-container .form-select:active,.sa-table-container .form-select:hover{outline:none!important;box-shadow:none!important}.sa-table-container .form-select-sm{padding-top:.25rem!important;padding-bottom:.25rem!important;padding-left:.5rem!important;font-size:.875rem!important}.sa-table-container .table-container{position:relative}.sa-table-container .table-bordered{border:1px solid #e1e2e4!important;border-right:none!important}.sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}@media (max-width: 768px){.sa-table-container .d-flex.justify-content-between{flex-direction:column}.sa-table-container .pagination{justify-content:center!important;flex-wrap:wrap}.sa-table-container .pagination .page-link{padding:.375rem .5rem;font-size:.875rem;min-width:2.5rem;height:2.5rem;border-radius:.25rem}.sa-table-container .pagination .page-item:has(.pagination-first),.sa-table-container .pagination .page-item:has(.pagination-last){display:none}}@media (max-width: 480px){.sa-table-container .pagination{gap:.125rem}.sa-table-container .pagination .page-link{min-width:2.25rem;height:2.25rem;font-size:.8rem;padding:.25rem .375rem}}@media (min-width: 481px) and (max-width: 600px){.sa-table-container .pagination{gap:.375rem}}@media (min-width: 601px) and (max-width: 768px){.sa-table-container .pagination{gap:.5rem}}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"]{overflow:visible;padding:.5rem 0}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"] .pagination{margin:0;padding:0}.sa-table-container .table.table-bordered{border:1px solid #e1e2e4!important}.sa-table-container .table.table-bordered>:not(caption)>*{border-width:0!important}.sa-table-container .table.table-bordered>:not(caption)>*>*{border-width:0!important}.sa-table-container .table>:not(caption)>*>*{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table{border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr>td{border:none!important;border-bottom:1px solid #e1e2e4!important;border-right:none!important;border-top:none!important;border-left:none!important;padding:.5rem!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table>tbody>tr>td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important;padding:2rem .5rem!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .table>thead>tr>th{border:none!important;padding:.5rem!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important}.sa-table-container .table,.sa-table-container .table>thead,.sa-table-container .table>tbody,.sa-table-container .table>tfoot,.sa-table-container .table>tr,.sa-table-container .table>th,.sa-table-container .table>td{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr:not(:last-child)>td{border-bottom:1px solid #e1e2e4!important;border-top:none!important;border-left:none!important;border-right:none!important}.sa-table-container .table-responsive{border:1px solid #e1e2e4!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch}.sa-table-container .table-responsive::-webkit-scrollbar{height:8px}.sa-table-container .table-responsive::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.sa-table-container .table-responsive .table{width:100%}@media (max-width: 480px){.sa-table-container .table-responsive .table{min-width:400px!important}}.sa-table-container .table-container{border:1px solid #e1e2e4!important;border-radius:.375rem!important;overflow:hidden}.table-scrollable{overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:#c1c1c1 #f1f1f1}.table-scrollable .table{table-layout:fixed;width:100%}.table-scrollable .table th,.table-scrollable .table td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-table', template: "<!-- Table Container -->\r\n<div class=\"sa-table-container\">\r\n  <!-- Table Content (siempre visible) -->\r\n  <div class=\"table-content\" [class.loading]=\"loading\">\r\n  \r\n  <!-- Table -->\r\n  <div class=\"table-responsive table-container\">\r\n    <table class=\"table\" \r\n           [class.table-hover]=\"hover\"\r\n           [style.min-width]=\"minWidth\">\r\n      <thead class=\"table-light\">\r\n        <tr>\r\n          <th *ngFor=\"let column of columns\" \r\n              [style.width]=\"column.width\">\r\n            <div class=\"d-flex align-items-center justify-content-between\">\r\n              <span>{{ column.label }}</span>\r\n            </div>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody [class.animate-fade-in]=\"animationKey > 0\" [class.animation-complete]=\"animationKey > 0\" [attr.data-animation-key]=\"animationKey\">\r\n        <tr *ngFor=\"let row of paginatedData; trackBy: trackByFn\">\r\n          <td *ngFor=\"let column of columns\" [style.width]=\"column.width\">\r\n            {{ row[column.key] }}\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"paginatedData.length === 0\">\r\n          <td [attr.colspan]=\"columns.length\" class=\"text-center py-4 text-muted\">\r\n            {{ emptyMessage }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    \r\n    <!-- Loading Overlay solo sobre la tabla -->\r\n    <div *ngIf=\"loading\" class=\"loading-overlay\">\r\n      <div class=\"loading-content\">\r\n        <div class=\"spinner-border text-primary\" role=\"status\">\r\n        </div>\r\n        <div class=\"loading-text\">Cargando...</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Items Per Page Selector and Pagination Controls (en una sola fila) -->\r\n  <div *ngIf=\"showPagination && data.length > 0\" class=\"d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center mt-2\">\r\n    <!-- Items Per Page Selector (izquierda) -->\r\n    <div *ngIf=\"showItemsPerPage\" class=\"d-flex align-items-center mb-2 mb-md-0\">\r\n      <span class=\"text-muted me-2\">Registros por p\u00E1gina:</span>\r\n      <select \r\n        id=\"itemsPerPage\"\r\n        class=\"form-select form-select-sm\" \r\n        style=\"width: auto;\"\r\n        [value]=\"itemsPerPage\"\r\n        (change)=\"onSelectChange($event)\">\r\n        <option *ngFor=\"let option of itemsPerPageOptions\" [value]=\"option\">\r\n          {{ option }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    \r\n    <!-- Pagination Info and Controls (derecha) -->\r\n    <div class=\"d-flex flex-column flex-md-row align-items-center\">\r\n      <div *ngIf=\"showTotal\" class=\"text-muted mb-2 mb-md-0 me-md-3 text-center text-md-start\">\r\n        P\u00E1gina: {{ paginationInfo.currentPage }} - {{ paginationInfo.startItem }} de {{ paginationInfo.totalItems }}\r\n      </div>\r\n      \r\n      <nav *ngIf=\"paginationInfo.totalPages > 1\" aria-label=\"Navegaci\u00F3n de p\u00E1ginas\">\r\n        <ul class=\"pagination mb-0 justify-content-center justify-content-md-start\">\r\n                <!-- First Page Button -->\r\n        <li *ngIf=\"showFirstLastButtons\" class=\"page-item\" [class.disabled]=\"currentPage === 1\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"Primera p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-first\">\u00AB</span>\r\n          </button>\r\n        </li>\r\n\r\n        <!-- Previous Button -->\r\n        <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(currentPage - 1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"P\u00E1gina anterior\">\r\n            <span class=\"pagination-icon\">\u2039</span>\r\n          </button>\r\n        </li>\r\n\r\n        <!-- Page Numbers -->\r\n        <li *ngFor=\"let page of getPageNumbers()\" \r\n            class=\"page-item\"\r\n            [class.active]=\"page === currentPage\"\r\n            [class.disabled]=\"page === -1\">\r\n          <button *ngIf=\"page !== -1\" \r\n                  class=\"page-link\" \r\n                  (click)=\"onPageChange(page)\">\r\n            {{ page }}\r\n          </button>\r\n          <span *ngIf=\"page === -1\" class=\"page-link\">...</span>\r\n        </li>\r\n\r\n        <!-- Next Button -->\r\n        <li class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(currentPage + 1)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"P\u00E1gina siguiente\">\r\n            <span class=\"pagination-icon\">\u203A</span>\r\n          </button>\r\n        </li>\r\n\r\n        <!-- Last Page Button -->\r\n        <li *ngIf=\"showFirstLastButtons\" class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\r\n          <button class=\"page-link\" \r\n                  (click)=\"onPageChange(paginationInfo.totalPages)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"\u00DAltima p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-last\">\u00BB</span>\r\n          </button>\r\n        </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.d-flex{display:flex!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.mb-3{margin-bottom:1rem!important}.mt-3{margin-top:1rem!important}.me-2{margin-right:.5rem!important}.text-muted{color:#6c757d!important}.text-center{text-align:center!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.form-select{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.table{width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border:none!important}.table>:not(caption)>*>*{padding:.5rem;background-color:transparent;border:none!important;box-shadow:none!important}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-light{color:#000;background-color:#f8f9fa}.table-hover>tbody>tr:hover>*{background-color:#00000013;color:#000}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}.table-bordered>:not(caption)>*{border-width:0!important}.table-bordered>:not(caption)>*>*{border-width:0!important}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.text-primary{color:#0d6efd!important}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.375rem}.page-item{list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.page-item:first-child .page-link{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.page-item:last-child .page-link{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.mb-0{margin-bottom:0!important}@keyframes spinner-border{to{transform:rotate(360deg)}}.sa-table-container{position:relative;border-radius:.375rem;overflow:hidden;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table-content{transition:opacity .3s ease}.sa-table-container .table-content.loading{opacity:.5;pointer-events:none}.sa-table-container .loading-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:#fffc;border-radius:.375rem;z-index:10;margin-top:0;margin-bottom:0}.sa-table-container .loading-overlay .loading-content{display:flex;flex-direction:column;align-items:center;gap:1rem}.sa-table-container .loading-overlay .loading-content .loading-text{color:#6c757d;font-size:.875rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sa-table-container .table-responsive{border-radius:.375rem;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;border:1px solid #e1e2e4!important}.sa-table-container .table{margin-bottom:0;border-radius:.375rem!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;border:none!important}.sa-table-container .table th{cursor:default!important;-webkit-user-select:text!important;user-select:text!important;border-radius:0!important;border:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table th:first-child{border-top-left-radius:.375rem!important}.sa-table-container .table th:last-child{border-top-right-radius:.375rem!important}.sa-table-container .table th:hover{background-color:transparent!important}.sa-table-container .table td{border-bottom:1px solid #e1e2e4!important;border-right:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody.animate-fade-in{animation:fadeIn .5s ease-out;animation-fill-mode:both}.sa-table-container .table tbody.animate-fade-in td{color:transparent!important;transition:color .5s ease-out}.sa-table-container .table tbody.animate-fade-in.animation-complete td{color:inherit!important}.sa-table-container .table thead th{cursor:default!important;border-bottom:none!important;border-right:none!important;background-color:#eef8f0!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table thead th:hover{background-color:#eef8f0!important}.sa-table-container .table thead tr th{background-color:#eef8f0!important;border-bottom:none!important;border-right:none!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table thead tr th:hover{background-color:#eef8f0!important}.sa-table-container .table tbody tr td{text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody tr td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important;border-right:none!important}.sa-table-container .table>tbody>tr:last-child>td:first-child{border-bottom-left-radius:.375rem!important}.sa-table-container .table>tbody>tr:last-child>td:last-child{border-bottom-right-radius:.375rem!important}.sa-table-container .table>tbody>tr>td:first-child,.sa-table-container .table>thead>tr>th:first-child{padding-left:1rem!important}.sa-table-container .table.table-hover>tbody>tr:hover>td{background-color:#f8f9fa!important}.sa-table-container .table.table-hover>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table.table-hover>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .d-flex.justify-content-between.align-items-center.mt-3{margin-top:.75rem!important}.sa-table-container .pagination{margin-bottom:0;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}.sa-table-container .pagination .page-link{border-radius:.25rem;border:1px solid #dddfe0;min-width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;padding:0;background-color:transparent;color:#5bab5f;font-size:1.125rem;text-align:center;line-height:1;width:2rem;box-sizing:border-box;letter-spacing:0;word-spacing:0;outline:none!important;cursor:pointer!important;font-size:.9rem;font-weight:500}.sa-table-container .pagination .page-link .pagination-icon{font-size:1.5rem;font-weight:500;line-height:0;display:flex;align-items:center;justify-content:center;margin:0;margin-top:-5px!important;padding:0;height:100%;width:100%}.sa-table-container .pagination .page-link:hover{background-color:#fff;border-color:#5bab5f;color:#5bab5f}.sa-table-container .pagination .page-link:focus{outline:none!important;box-shadow:none!important}.sa-table-container .pagination .page-item.active .page-link{background-color:#5bab5f;color:#fff;font-weight:500;border:none!important;cursor:pointer!important}.sa-table-container .pagination .page-item.active .page-link:hover{background-color:#5bab5f!important;color:#fff!important;border:none!important}.sa-table-container .pagination .page-item.disabled .page-link{color:#dee2e6;pointer-events:none;background-color:#fafafa;border-color:#dee2e6;cursor:not-allowed!important}.sa-table-container .pagination .page-item:first-child .page-link,.sa-table-container .pagination .page-item:last-child .page-link{min-width:2rem;width:2rem}.sa-table-container .pagination .page-link *{display:inline-block;vertical-align:middle}.sa-table-container .form-select{border-radius:.375rem;border:1px solid #ced4da!important;padding:.375rem .75rem!important;font-size:1rem!important;font-weight:400!important;line-height:1.5!important;color:#212529!important;background-color:#fff!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right .75rem center!important;background-size:16px 12px!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;appearance:none!important;width:auto!important;min-width:70px!important;display:inline-block!important;outline:none!important}.sa-table-container .form-select:focus{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-container .form-select:active,.sa-table-container .form-select:hover{outline:none!important;box-shadow:none!important}.sa-table-container .form-select-sm{padding-top:.25rem!important;padding-bottom:.25rem!important;padding-left:.5rem!important;font-size:.875rem!important}.sa-table-container .table-container{position:relative}.sa-table-container .table-bordered{border:1px solid #e1e2e4!important;border-right:none!important}.sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}@media (max-width: 768px){.sa-table-container .d-flex.justify-content-between{flex-direction:column}.sa-table-container .pagination{justify-content:center!important;flex-wrap:wrap}.sa-table-container .pagination .page-link{padding:.375rem .5rem;font-size:.875rem;min-width:2.5rem;height:2.5rem;border-radius:.25rem}.sa-table-container .pagination .page-item:has(.pagination-first),.sa-table-container .pagination .page-item:has(.pagination-last){display:none}}@media (max-width: 480px){.sa-table-container .pagination{gap:.125rem}.sa-table-container .pagination .page-link{min-width:2.25rem;height:2.25rem;font-size:.8rem;padding:.25rem .375rem}}@media (min-width: 481px) and (max-width: 600px){.sa-table-container .pagination{gap:.375rem}}@media (min-width: 601px) and (max-width: 768px){.sa-table-container .pagination{gap:.5rem}}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"]{overflow:visible;padding:.5rem 0}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"] .pagination{margin:0;padding:0}.sa-table-container .table.table-bordered{border:1px solid #e1e2e4!important}.sa-table-container .table.table-bordered>:not(caption)>*{border-width:0!important}.sa-table-container .table.table-bordered>:not(caption)>*>*{border-width:0!important}.sa-table-container .table>:not(caption)>*>*{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table{border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr>td{border:none!important;border-bottom:1px solid #e1e2e4!important;border-right:none!important;border-top:none!important;border-left:none!important;padding:.5rem!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table>tbody>tr>td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important;padding:2rem .5rem!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .table>thead>tr>th{border:none!important;padding:.5rem!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important}.sa-table-container .table,.sa-table-container .table>thead,.sa-table-container .table>tbody,.sa-table-container .table>tfoot,.sa-table-container .table>tr,.sa-table-container .table>th,.sa-table-container .table>td{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr:not(:last-child)>td{border-bottom:1px solid #e1e2e4!important;border-top:none!important;border-left:none!important;border-right:none!important}.sa-table-container .table-responsive{border:1px solid #e1e2e4!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch}.sa-table-container .table-responsive::-webkit-scrollbar{height:8px}.sa-table-container .table-responsive::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.sa-table-container .table-responsive .table{width:100%}@media (max-width: 480px){.sa-table-container .table-responsive .table{min-width:400px!important}}.sa-table-container .table-container{border:1px solid #e1e2e4!important;border-radius:.375rem!important;overflow:hidden}.table-scrollable{overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:#c1c1c1 #f1f1f1}.table-scrollable .table{table-layout:fixed;width:100%}.table-scrollable .table th,.table-scrollable .table td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], data: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], itemsPerPage: [{
                type: Input
            }], showPagination: [{
                type: Input
            }], showItemsPerPage: [{
                type: Input
            }], showTotal: [{
                type: Input
            }], hover: [{
                type: Input
            }], loading: [{
                type: Input
            }], showFirstLastButtons: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], pageChange: [{
                type: Output
            }], itemsPerPageChange: [{
                type: Output
            }], sortChange: [{
                type: Output
            }] } });

class SannaUiModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, declarations: [SannaUiComponent,
            SaButtonComponent,
            SaIconComponent,
            SaMessageboxComponent,
            SaInputComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule], exports: [SannaUiComponent,
            SaButtonComponent,
            SaIconComponent,
            SaMessageboxComponent,
            SaInputComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent,
            SannaUiFontAwesomeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule, SannaUiFontAwesomeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaIconComponent,
                        SaMessageboxComponent,
                        SaInputComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SannaUiFontAwesomeModule
                    ],
                    exports: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaIconComponent,
                        SaMessageboxComponent,
                        SaInputComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                        SannaUiFontAwesomeModule
                    ]
                }]
        }] });

/*
 * Public API Surface of sanna-ui
 */
// Estilos y configuración (para personalización avanzada)
// Los usuarios pueden importar directamente: import 'sanna-ui/lib/_styles/sanna-fonts.scss';

/**
 * Generated bundle index. Do not edit.
 */

export { SaButtonComponent, SaHeadingComponent, SaIconComponent, SaInputComponent, SaMessageboxComponent, SaTableComponent, SaTextComponent, SannaUiComponent, SannaUiFontAwesomeModule, SannaUiModule, SannaUiService };
//# sourceMappingURL=sanna-ui.mjs.map
