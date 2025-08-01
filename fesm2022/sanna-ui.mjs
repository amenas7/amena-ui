import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, EventEmitter, Input, ViewChild, Output, forwardRef } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faSave, faEdit, faPlus, faMinus, faCheck, faTimes, faInfo, faExclamationTriangle, faExclamationCircle, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faEye, faEyeSlash, faLock, faUnlock, faKey, faShieldAlt, faUserPlus, faUserMinus, faVideo, faWifi, faTable, faThLarge, faUsers, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartLine, faAppleAlt, faRobot, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalendarDay, faFile, faFlask, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faComment, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faFileExcel, faSignOutAlt, faSmile, faFrown, faMask, faBoxOpen, faSeedling, faVolumeUp, faExpandArrowsAlt, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faLightbulb, faLayerGroup, faListUl, faVolumeDown, faPills, faMobile, faMobileAlt, faMoneyBill, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faDesktop, faChartPie, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faRedo, faRuler, faUtensils, faTshirt, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStore, faTablet, faTabletAlt, faThermometerHalf, faBolt, faTicketAlt, faSitemap, faBath, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faChevronLeft, faChevronRight, faBell, faQuestion, faChevronDown, faChevronUp, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faPencil, faLink, faCopy, faChartBar, faGift, faBatteryHalf, faBicycle, faCalculator, faCamera, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faComments, faMicroscope, faCoffee, faCreditCard, faCropAlt, faCrop, faTruck, faEquals, faEraser, faFileDownload, faMedal, faFilter, faFingerprint, faFire, faTrophy, faFish, faFlag, faForward, faGlobe, faIceCream, faLaptop, faMapPin, faMotorcycle, faPaperclip, faPause, faPercent, faPiggyBank, faPlay, faReceipt, faShoppingCart, faStarHalf, faStop, faThumbsDown, faThumbsUp, faUndo, faUpload } from '@fortawesome/free-solid-svg-icons';
import * as i1$1 from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
    label = 'Button';
    variant = 'primary';
    size = 'medium';
    disabled = false;
    loading = false;
    fullWidth = false;
    type = 'button';
    icon;
    position = 'left';
    iconOnly = false;
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly" }, outputs: { clicked: "clicked" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\n  #buttonElement\n  [class]=\"buttonClasses\"\n  [type]=\"type\"\n  [disabled]=\"!isInteractive\"\n  (click)=\"onClick()\"\n  class=\"btn\"\n>\n  <!-- Contenido del bot\u00F3n -->\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\n  </div>\n  \n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\n    <fa-icon \n      [icon]=\"spinnerIcon\" \n      class=\"spinner-icon\"\n      [class.spinning]=\"loading\">\n    </fa-icon>\n  </div>\n</button>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;line-height:1;min-width:fit-content}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:2rem;min-height:2rem;padding:.375rem}.btn:has(.button-content:not(:has(span))).btn-md{min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:3rem;min-height:3rem;padding:.75rem}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#36ad55;border:1px solid #36AD55}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary,.btn-secondary:hover{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c0c6cd;color:#2e3b60;font-weight:600}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#daf6e4;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#d0ffd0;border-color:#090;color:#090}.btn-success.loading{background-color:#daf6e4!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#daf6e4!important;opacity:1!important}.btn-danger{background-color:#ffe7e7;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#f5c6cb;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#b9d5f54a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#418be04a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777676;border:1px solid #777676;color:#fff}.btn-gray:hover{background-color:#6b6b6b;border-color:#6b6b6b;color:#fff}.btn-gray.loading{background-color:#777676!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777676!important;opacity:1!important}.btn-sm{padding:.5rem;font-size:.875rem;border-radius:.375rem}.btn-md{padding:.7rem 1rem;font-size:.875rem;border-radius:.375rem}.btn-lg{padding:1rem 2rem;font-size:1rem;border-radius:.375rem}.w-100{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', template: "<button\n  #buttonElement\n  [class]=\"buttonClasses\"\n  [type]=\"type\"\n  [disabled]=\"!isInteractive\"\n  (click)=\"onClick()\"\n  class=\"btn\"\n>\n  <!-- Contenido del bot\u00F3n -->\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\n  </div>\n  \n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\n    <fa-icon \n      [icon]=\"spinnerIcon\" \n      class=\"spinner-icon\"\n      [class.spinning]=\"loading\">\n    </fa-icon>\n  </div>\n</button>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;line-height:1;min-width:fit-content}.btn:active{transform:translateY(1px)}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:2rem;min-height:2rem;padding:.375rem}.btn:has(.button-content:not(:has(span))).btn-md{min-width:2.5rem;min-height:2.5rem;padding:.5rem}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:3rem;min-height:3rem;padding:.75rem}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#36ad55;border:1px solid #36AD55}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary,.btn-secondary:hover{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c0c6cd;color:#2e3b60;font-weight:600}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#daf6e4;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#d0ffd0;border-color:#090;color:#090}.btn-success.loading{background-color:#daf6e4!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#daf6e4!important;opacity:1!important}.btn-danger{background-color:#ffe7e7;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#f5c6cb;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#b9d5f54a;border:1px solid #007bff;color:#007bff}.btn-info:hover{background-color:#418be04a;border-color:#007bff;color:#007bff}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777676;border:1px solid #777676;color:#fff}.btn-gray:hover{background-color:#6b6b6b;border-color:#6b6b6b;color:#fff}.btn-gray.loading{background-color:#777676!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777676!important;opacity:1!important}.btn-sm{padding:.5rem;font-size:.875rem;border-radius:.375rem}.btn-md{padding:.7rem 1rem;font-size:.875rem;border-radius:.375rem}.btn-lg{padding:1rem 2rem;font-size:1rem;border-radius:.375rem}.w-100{width:100%}\n"] }]
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
    name = '';
    color = '#000000';
    size = 'md';
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaIconComponent, selector: "sa-icon", inputs: { name: "name", color: "color", size: "size" }, ngImport: i0, template: "<fa-icon \n  *ngIf=\"iconDefinition\"\n  [icon]=\"iconDefinition\"\n  [class]=\"iconClasses\"\n  [ngStyle]=\"iconStyles\">\n</fa-icon>\n", styles: [".icon{display:inline-block;vertical-align:middle}.icon.icon-sm{font-size:.875rem}.icon.icon-md{font-size:1rem}.icon.icon-lg{font-size:1.25rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-icon', template: "<fa-icon \n  *ngIf=\"iconDefinition\"\n  [icon]=\"iconDefinition\"\n  [class]=\"iconClasses\"\n  [ngStyle]=\"iconStyles\">\n</fa-icon>\n", styles: [".icon{display:inline-block;vertical-align:middle}.icon.icon-sm{font-size:.875rem}.icon.icon-md{font-size:1rem}.icon.icon-lg{font-size:1.25rem}\n"] }]
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
    // Propiedades que DEBEN usar attribute binding: type="success"
    isFullWidth = false;
    type = 'success';
    iconName;
    iconSize;
    iconColor;
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaMessageboxComponent, selector: "sa-messagebox", inputs: { message: "message", isFullWidth: "isFullWidth", type: "type", iconName: "iconName", iconSize: "iconSize", iconColor: "iconColor" }, ngImport: i0, template: "<div class=\"messagebox\" \n     [class.full-width]=\"isFullWidth\"\n     [class.success]=\"type === 'success'\"\n     [class.warning]=\"type === 'warning'\"\n     [class.error]=\"type === 'error'\"\n     [class.info]=\"type === 'info'\">\n  <div class=\"messagebox-content\">\n    <sa-icon *ngIf=\"hasIcon\" \n              [name]=\"iconName!\" \n              [size]=\"iconSize || 'md'\"\n              [color]=\"iconColor || '#000000'\"\n              class=\"messagebox-icon\">\n    </sa-icon>\n    <p class=\"message-text\" [innerHTML]=\"sanitizedMessage\"></p>\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.messagebox{position:relative;font-size:14px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;display:flex;flex-direction:row;border:.0625rem solid rgb(14,144,105);border-radius:8px;width:22.9375rem;line-height:1.28;min-height:auto;padding:1rem;background-color:#f2fdf9;color:#006e4a;margin:8px 0;transition:all .3s ease;box-sizing:border-box}.messagebox.full-width{width:100%;max-width:100%;min-height:auto;overflow-wrap:break-word}.messagebox.success{background-color:#f2fdf9;color:#006e4a;border:.0625rem solid rgb(14,144,105)}.messagebox.warning{background-color:#fff9f2;color:#9f5200;border:.0625rem solid rgb(217,125,8)}.messagebox.error{background-color:#fff2f7;color:#9f003c;border:.0625rem solid rgb(226,8,103)}.messagebox.info{background-color:#f2f7ff;color:#003d9f;border:.0625rem solid rgb(0,100,209)}.messagebox .messagebox-content{display:flex;align-items:center;gap:.75rem;width:100%}.messagebox .messagebox-icon{flex-shrink:0}.messagebox .message-text{margin:0!important;padding:0;text-align:left;word-wrap:break-word;flex:1;line-height:1.28;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SaIconComponent, selector: "sa-icon", inputs: ["name", "color", "size"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaMessageboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-messagebox', template: "<div class=\"messagebox\" \n     [class.full-width]=\"isFullWidth\"\n     [class.success]=\"type === 'success'\"\n     [class.warning]=\"type === 'warning'\"\n     [class.error]=\"type === 'error'\"\n     [class.info]=\"type === 'info'\">\n  <div class=\"messagebox-content\">\n    <sa-icon *ngIf=\"hasIcon\" \n              [name]=\"iconName!\" \n              [size]=\"iconSize || 'md'\"\n              [color]=\"iconColor || '#000000'\"\n              class=\"messagebox-icon\">\n    </sa-icon>\n    <p class=\"message-text\" [innerHTML]=\"sanitizedMessage\"></p>\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.messagebox{position:relative;font-size:14px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;display:flex;flex-direction:row;border:.0625rem solid rgb(14,144,105);border-radius:8px;width:22.9375rem;line-height:1.28;min-height:auto;padding:1rem;background-color:#f2fdf9;color:#006e4a;margin:8px 0;transition:all .3s ease;box-sizing:border-box}.messagebox.full-width{width:100%;max-width:100%;min-height:auto;overflow-wrap:break-word}.messagebox.success{background-color:#f2fdf9;color:#006e4a;border:.0625rem solid rgb(14,144,105)}.messagebox.warning{background-color:#fff9f2;color:#9f5200;border:.0625rem solid rgb(217,125,8)}.messagebox.error{background-color:#fff2f7;color:#9f003c;border:.0625rem solid rgb(226,8,103)}.messagebox.info{background-color:#f2f7ff;color:#003d9f;border:.0625rem solid rgb(0,100,209)}.messagebox .messagebox-content{display:flex;align-items:center;gap:.75rem;width:100%}.messagebox .messagebox-icon{flex-shrink:0}.messagebox .message-text{margin:0!important;padding:0;text-align:left;word-wrap:break-word;flex:1;line-height:1.28;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.DomSanitizer }], propDecorators: { message: [{
                type: Input
            }], isFullWidth: [{
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
    placeholder = '';
    type = 'text';
    size = 'medium';
    variant = 'default';
    disabled = false;
    readonly = false;
    required = false;
    name = '';
    id = '';
    maxlength;
    minlength;
    pattern;
    autocomplete;
    label;
    helperText;
    errorText;
    showPasswordToggle = false;
    leftIcon;
    rightIcon;
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    input = new EventEmitter();
    value = '';
    showPassword = false;
    isFocused = false;
    // ControlValueAccessor implementation
    onChange = (value) => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value || '';
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
    // Event handlers
    onInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
        this.input.emit(event);
    }
    onFocus(event) {
        this.isFocused = true;
        this.onTouched();
        this.focus.emit(event);
    }
    onBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    // Computed properties
    get inputType() {
        if (this.type === 'password' && this.showPasswordToggle && this.showPassword) {
            return 'text';
        }
        return this.type;
    }
    get inputClasses() {
        const classes = [
            'input',
            `input-${this.size}`,
            `input-${this.variant}`,
            this.isFocused ? 'focused' : '',
            this.disabled ? 'disabled' : '',
            this.readonly ? 'readonly' : '',
            this.errorText ? 'error' : '',
            this.leftIcon ? 'has-left-icon' : '',
            this.rightIcon ? 'has-right-icon' : '',
            this.showPasswordToggle ? 'has-password-toggle' : ''
        ];
        return classes.filter(Boolean).join(' ');
    }
    get hasError() {
        return !!this.errorText;
    }
    get showPasswordToggleButton() {
        return this.type === 'password' && this.showPasswordToggle;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaInputComponent, selector: "sa-input", inputs: { placeholder: "placeholder", type: "type", size: "size", variant: "variant", disabled: "disabled", readonly: "readonly", required: "required", name: "name", id: "id", maxlength: "maxlength", minlength: "minlength", pattern: "pattern", autocomplete: "autocomplete", label: "label", helperText: "helperText", errorText: "errorText", showPasswordToggle: "showPasswordToggle", leftIcon: "leftIcon", rightIcon: "rightIcon" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur", input: "input" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaInputComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"input-container\">\n  <!-- Label -->\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\n  </label>\n\n  <!-- Input wrapper -->\n  <div class=\"input-wrapper\">\n    <!-- Left icon -->\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\n      <i [class]=\"leftIcon\"></i>\n    </div>\n\n    <!-- Input field -->\n    <input\n      [type]=\"inputType\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      [required]=\"required\"\n      [name]=\"name\"\n      [id]=\"id || name\"\n      [maxLength]=\"maxlength\"\n      [minLength]=\"minlength\"\n      [pattern]=\"pattern\"\n      [autocomplete]=\"autocomplete\"\n      [value]=\"value\"\n      [class]=\"inputClasses\"\n      (input)=\"onInput($event)\"\n      (focus)=\"onFocus($event)\"\n      (blur)=\"onBlur($event)\"\n    />\n\n    <!-- Right icon or password toggle -->\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\n      <i [class]=\"rightIcon\"></i>\n    </div>\n\n    <!-- Password toggle button -->\n    <button\n      *ngIf=\"showPasswordToggleButton\"\n      type=\"button\"\n      class=\"password-toggle-btn\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\n    </button>\n  </div>\n\n  <!-- Helper text -->\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\n    {{ helperText }}\n  </div>\n\n  <!-- Error text -->\n  <div *ngIf=\"errorText\" class=\"error-text\">\n    {{ errorText }}\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input-container\">\n  <!-- Label -->\n  <label *ngIf=\"label\" [for]=\"id || name\" class=\"input-label\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"required-indicator\">*</span>\n  </label>\n\n  <!-- Input wrapper -->\n  <div class=\"input-wrapper\">\n    <!-- Left icon -->\n    <div *ngIf=\"leftIcon\" class=\"input-icon left-icon\">\n      <i [class]=\"leftIcon\"></i>\n    </div>\n\n    <!-- Input field -->\n    <input\n      [type]=\"inputType\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      [required]=\"required\"\n      [name]=\"name\"\n      [id]=\"id || name\"\n      [maxLength]=\"maxlength\"\n      [minLength]=\"minlength\"\n      [pattern]=\"pattern\"\n      [autocomplete]=\"autocomplete\"\n      [value]=\"value\"\n      [class]=\"inputClasses\"\n      (input)=\"onInput($event)\"\n      (focus)=\"onFocus($event)\"\n      (blur)=\"onBlur($event)\"\n    />\n\n    <!-- Right icon or password toggle -->\n    <div *ngIf=\"rightIcon && !showPasswordToggleButton\" class=\"input-icon right-icon\">\n      <i [class]=\"rightIcon\"></i>\n    </div>\n\n    <!-- Password toggle button -->\n    <button\n      *ngIf=\"showPasswordToggleButton\"\n      type=\"button\"\n      class=\"password-toggle-btn\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <i [class]=\"showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'\"></i>\n    </button>\n  </div>\n\n  <!-- Helper text -->\n  <div *ngIf=\"helperText && !errorText\" class=\"helper-text\">\n    {{ helperText }}\n  </div>\n\n  <!-- Error text -->\n  <div *ngIf=\"errorText\" class=\"error-text\">\n    {{ errorText }}\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.input-container{display:flex;flex-direction:column;gap:4px;width:100%}.input-label{font-size:14px;font-weight:500;color:#374151;margin-bottom:4px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.input-label .required-indicator{color:#ef4444;margin-left:2px}.input-wrapper{position:relative;display:flex;align-items:center;width:100%}.input{width:100%;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;color:#374151;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;transition:all .2s ease-in-out;outline:none}.input::placeholder{color:#9ca3af}.input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input:disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input:read-only{background-color:#f9fafb}.input.input-small{padding:8px 12px;font-size:14px}.input.input-medium{padding:12px 16px;font-size:16px}.input.input-large{padding:16px 20px;font-size:18px}.input.input-default{border-color:#d1d5db}.input.input-success{border-color:#10b981}.input.input-success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.input.input-warning{border-color:#f59e0b}.input.input-warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.input.input-error{border-color:#ef4444}.input.input-error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.input.has-left-icon{padding-left:40px}.input.has-right-icon,.input.has-password-toggle{padding-right:40px}.input-icon{position:absolute;display:flex;align-items:center;justify-content:center;color:#9ca3af;z-index:1}.input-icon.left-icon{left:12px}.input-icon.right-icon{right:12px}.input-icon i{font-size:16px}.password-toggle-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#9ca3af;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease-in-out}.password-toggle-btn:hover{color:#374151;background-color:#0000000d}.password-toggle-btn:focus{outline:none;box-shadow:0 0 0 2px #3b82f633}.password-toggle-btn i{font-size:16px}.helper-text{font-size:12px;color:#6b7280;margin-top:2px}.error-text{font-size:12px;color:#ef4444;margin-top:2px}.input.focused{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.input.disabled{background-color:#f9fafb;color:#9ca3af;cursor:not-allowed}.input.readonly{background-color:#f9fafb}.input.error{border-color:#ef4444}.input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}\n"] }]
        }], propDecorators: { placeholder: [{
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
            }], autocomplete: [{
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
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], input: [{
                type: Output
            }] } });

class SaHeadingComponent {
    children = '';
    size = 'md';
    weight = 'bold';
    mt;
    mb;
    mr;
    ml;
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaHeadingComponent, selector: "sa-heading", inputs: { children: "children", size: "size", weight: "weight", mt: "mt", mb: "mb", mr: "mr", ml: "ml" }, ngImport: i0, template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaHeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-heading', template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] }]
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTextComponent, selector: "sa-text", ngImport: i0, template: "<p>sa-text works!</p>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}p,span,div,text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-text', template: "<p>sa-text works!</p>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}p,span,div,text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] }]
        }] });

class SaTableComponent {
    columns = [];
    data = [];
    itemsPerPage = 10;
    showPagination = true;
    showItemsPerPage = true;
    showTotal = true;
    hover = false;
    responsive = true;
    loading = false;
    emptyMessage = 'No hay datos disponibles';
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
    ngOnInit() {
        this.updatePagination();
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
            this.updatePagination();
            this.pageChange.emit(page);
        }
    }
    onItemsPerPageChange(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1;
        this.updatePagination();
        this.itemsPerPageChange.emit(itemsPerPage);
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
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTableComponent, selector: "sa-table", inputs: { columns: "columns", data: "data", itemsPerPage: "itemsPerPage", showPagination: "showPagination", showItemsPerPage: "showItemsPerPage", showTotal: "showTotal", hover: "hover", responsive: "responsive", loading: "loading", emptyMessage: "emptyMessage" }, outputs: { pageChange: "pageChange", itemsPerPageChange: "itemsPerPageChange", sortChange: "sortChange" }, usesOnChanges: true, ngImport: i0, template: "<!-- Table Container -->\n<div class=\"sa-table-container\">\n  <!-- Table Content (siempre visible) -->\n  <div class=\"table-content\" [class.loading]=\"loading\">\n  <!-- Items Per Page Selector -->\n  <div *ngIf=\"showItemsPerPage && showPagination\" class=\"d-flex justify-content-between align-items-center mb-3\">\n    <div class=\"d-flex align-items-center\">\n      <span class=\"text-muted me-2\">Registros por p\u00E1gina</span>\n      <select \n        id=\"itemsPerPage\"\n        class=\"form-select form-select-sm\" \n        style=\"width: auto;\"\n        [value]=\"itemsPerPage\"\n        (change)=\"onSelectChange($event)\">\n        <option *ngFor=\"let option of itemsPerPageOptions\" [value]=\"option\">\n          {{ option }}\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <!-- Table -->\n  <div [class.table-responsive]=\"responsive\" class=\"table-container\">\n    <table class=\"table\" \n           [class.table-hover]=\"hover\">\n      <thead class=\"table-light\">\n        <tr>\n          <th *ngFor=\"let column of columns\" \n              [style.width]=\"column.width\">\n            <div class=\"d-flex align-items-center justify-content-between\">\n              <span>{{ column.label }}</span>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let row of paginatedData; trackBy: trackByFn\">\n          <td *ngFor=\"let column of columns\" [style.width]=\"column.width\">\n            {{ row[column.key] }}\n          </td>\n        </tr>\n        <tr *ngIf=\"paginatedData.length === 0\">\n          <td [attr.colspan]=\"columns.length\" class=\"text-center py-4 text-muted\">\n            {{ emptyMessage }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    \n    <!-- Loading Overlay solo sobre la tabla -->\n    <div *ngIf=\"loading\" class=\"loading-overlay\">\n      <div class=\"loading-content\">\n        <div class=\"spinner-border text-primary\" role=\"status\">\n        </div>\n        <div class=\"loading-text\">Cargando...</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Pagination Info and Controls -->\n  <div *ngIf=\"showPagination\" class=\"d-flex justify-content-between align-items-center mt-3\">\n    <div *ngIf=\"showTotal\" class=\"text-muted\">\n      {{ paginationInfo.startItem }} - {{ paginationInfo.endItem }} de {{ paginationInfo.totalItems }} registros\n    </div>\n    <div *ngIf=\"!showTotal\"></div>\n    \n    <nav *ngIf=\"paginationInfo.totalPages > 1\" aria-label=\"Navegaci\u00F3n de p\u00E1ginas\">\n      <ul class=\"pagination mb-0\">\n              <!-- First Page Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(1)\"\n                [disabled]=\"currentPage === 1\"\n                aria-label=\"Primera p\u00E1gina\">\n          <span class=\"pagination-icon\">\u00AB</span>\n        </button>\n      </li>\n\n      <!-- Previous Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(currentPage - 1)\"\n                [disabled]=\"currentPage === 1\"\n                aria-label=\"P\u00E1gina anterior\">\n          <span class=\"pagination-icon\">\u2039</span>\n        </button>\n      </li>\n\n      <!-- Page Numbers -->\n      <li *ngFor=\"let page of getPageNumbers()\" \n          class=\"page-item\"\n          [class.active]=\"page === currentPage\"\n          [class.disabled]=\"page === -1\">\n        <button *ngIf=\"page !== -1\" \n                class=\"page-link\" \n                (click)=\"onPageChange(page)\">\n          {{ page }}\n        </button>\n        <span *ngIf=\"page === -1\" class=\"page-link\">...</span>\n      </li>\n\n      <!-- Next Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(currentPage + 1)\"\n                [disabled]=\"currentPage === paginationInfo.totalPages\"\n                aria-label=\"P\u00E1gina siguiente\">\n          <span class=\"pagination-icon\">\u203A</span>\n        </button>\n      </li>\n\n      <!-- Last Page Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(paginationInfo.totalPages)\"\n                [disabled]=\"currentPage === paginationInfo.totalPages\"\n                aria-label=\"\u00DAltima p\u00E1gina\">\n          <span class=\"pagination-icon\">\u00BB</span>\n        </button>\n      </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container{position:relative;border-radius:.375rem;overflow:hidden;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table-content{transition:opacity .3s ease}.sa-table-container .table-content.loading{opacity:.5;pointer-events:none}.sa-table-container .loading-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:#fffc;border-radius:.375rem;z-index:10;margin-top:0;margin-bottom:0}.sa-table-container .loading-overlay .loading-content{display:flex;flex-direction:column;align-items:center;gap:1rem}.sa-table-container .loading-overlay .loading-content .loading-text{color:#6c757d;font-size:.875rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sa-table-container .table-responsive{border-radius:.375rem;overflow:hidden}.sa-table-container .table{margin-bottom:0;border-radius:.375rem!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table th{cursor:default!important;-webkit-user-select:text!important;user-select:text!important;border-radius:0!important}.sa-table-container .table th:first-child{border-top-left-radius:.375rem!important}.sa-table-container .table th:last-child{border-top-right-radius:.375rem!important}.sa-table-container .table th:hover{background-color:transparent!important}.sa-table-container .table thead th{cursor:default!important;border-bottom:none!important;background-color:#eef8f0!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important}.sa-table-container .table thead th:hover{background-color:#eef8f0!important}.sa-table-container .table thead tr th{background-color:#eef8f0!important;border-bottom:none!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important}.sa-table-container .table thead tr th:hover{background-color:#eef8f0!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important}.sa-table-container .table>tbody>tr:last-child>td:first-child{border-bottom-left-radius:.375rem!important}.sa-table-container .table>tbody>tr:last-child>td:last-child{border-bottom-right-radius:.375rem!important}.sa-table-container .table>tbody>tr>td:first-child,.sa-table-container .table>thead>tr>th:first-child{padding-left:1rem!important}.sa-table-container .table.table-hover>tbody>tr:hover>td{background-color:#f8f9fa!important}.sa-table-container .d-flex.justify-content-between.align-items-center.mt-3{margin-top:.75rem!important}.sa-table-container .pagination{margin-bottom:0;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}.sa-table-container .pagination .page-link{border-radius:.25rem;border:1px solid #dddfe0;min-width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;padding:0;background-color:transparent;color:#5bab5f;font-size:1.125rem;text-align:center;line-height:1;width:2rem;box-sizing:border-box;letter-spacing:0;word-spacing:0;outline:none!important;font-size:.9rem;font-weight:500}.sa-table-container .pagination .page-link .pagination-icon{font-size:1.5rem;font-weight:500;line-height:0;display:flex;align-items:center;justify-content:center;margin:0;margin-top:-5px!important;padding:0;height:100%;width:100%}.sa-table-container .pagination .page-link:hover{background-color:#fff;border-color:#5bab5f;color:#5bab5f}.sa-table-container .pagination .page-link:focus{outline:none!important;box-shadow:none!important}.sa-table-container .pagination .page-item.active .page-link{background-color:#5bab5f;color:#fff;font-weight:500;border:none!important}.sa-table-container .pagination .page-item.active .page-link:hover{background-color:#5bab5f!important;color:#fff!important;border:none!important}.sa-table-container .pagination .page-item.disabled .page-link{color:#dee2e6;pointer-events:none;background-color:#fafafa;border-color:#dee2e6}.sa-table-container .pagination .page-item:first-child .page-link,.sa-table-container .pagination .page-item:last-child .page-link{min-width:2rem;width:2rem}.sa-table-container .pagination .page-link *{display:inline-block;vertical-align:middle}.sa-table-container .form-select{border-radius:.375rem;border:1px solid var(--bs-border-color)}.sa-table-container .form-select:focus{border-color:var(--bs-primary);box-shadow:0 0 0 .2rem rgba(var(--bs-primary-rgb),.25)}.sa-table-container .table-responsive{border-radius:.375rem!important;overflow:hidden;border:1px solid #e1e2e4}.sa-table-container .table-container{position:relative}.sa-table-container .table-bordered{border:1px solid var(--bs-border-color)}.sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}@media (max-width: 768px){.sa-table-container .d-flex.justify-content-between{flex-direction:column;gap:1rem}.sa-table-container .pagination .page-link{padding:.375rem .5rem;font-size:.875rem;min-width:2.25rem;height:2.25rem}}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"]{overflow:visible;padding:.5rem 0}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"] .pagination{margin:0;padding:0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-table', template: "<!-- Table Container -->\n<div class=\"sa-table-container\">\n  <!-- Table Content (siempre visible) -->\n  <div class=\"table-content\" [class.loading]=\"loading\">\n  <!-- Items Per Page Selector -->\n  <div *ngIf=\"showItemsPerPage && showPagination\" class=\"d-flex justify-content-between align-items-center mb-3\">\n    <div class=\"d-flex align-items-center\">\n      <span class=\"text-muted me-2\">Registros por p\u00E1gina</span>\n      <select \n        id=\"itemsPerPage\"\n        class=\"form-select form-select-sm\" \n        style=\"width: auto;\"\n        [value]=\"itemsPerPage\"\n        (change)=\"onSelectChange($event)\">\n        <option *ngFor=\"let option of itemsPerPageOptions\" [value]=\"option\">\n          {{ option }}\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <!-- Table -->\n  <div [class.table-responsive]=\"responsive\" class=\"table-container\">\n    <table class=\"table\" \n           [class.table-hover]=\"hover\">\n      <thead class=\"table-light\">\n        <tr>\n          <th *ngFor=\"let column of columns\" \n              [style.width]=\"column.width\">\n            <div class=\"d-flex align-items-center justify-content-between\">\n              <span>{{ column.label }}</span>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let row of paginatedData; trackBy: trackByFn\">\n          <td *ngFor=\"let column of columns\" [style.width]=\"column.width\">\n            {{ row[column.key] }}\n          </td>\n        </tr>\n        <tr *ngIf=\"paginatedData.length === 0\">\n          <td [attr.colspan]=\"columns.length\" class=\"text-center py-4 text-muted\">\n            {{ emptyMessage }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    \n    <!-- Loading Overlay solo sobre la tabla -->\n    <div *ngIf=\"loading\" class=\"loading-overlay\">\n      <div class=\"loading-content\">\n        <div class=\"spinner-border text-primary\" role=\"status\">\n        </div>\n        <div class=\"loading-text\">Cargando...</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Pagination Info and Controls -->\n  <div *ngIf=\"showPagination\" class=\"d-flex justify-content-between align-items-center mt-3\">\n    <div *ngIf=\"showTotal\" class=\"text-muted\">\n      {{ paginationInfo.startItem }} - {{ paginationInfo.endItem }} de {{ paginationInfo.totalItems }} registros\n    </div>\n    <div *ngIf=\"!showTotal\"></div>\n    \n    <nav *ngIf=\"paginationInfo.totalPages > 1\" aria-label=\"Navegaci\u00F3n de p\u00E1ginas\">\n      <ul class=\"pagination mb-0\">\n              <!-- First Page Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(1)\"\n                [disabled]=\"currentPage === 1\"\n                aria-label=\"Primera p\u00E1gina\">\n          <span class=\"pagination-icon\">\u00AB</span>\n        </button>\n      </li>\n\n      <!-- Previous Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(currentPage - 1)\"\n                [disabled]=\"currentPage === 1\"\n                aria-label=\"P\u00E1gina anterior\">\n          <span class=\"pagination-icon\">\u2039</span>\n        </button>\n      </li>\n\n      <!-- Page Numbers -->\n      <li *ngFor=\"let page of getPageNumbers()\" \n          class=\"page-item\"\n          [class.active]=\"page === currentPage\"\n          [class.disabled]=\"page === -1\">\n        <button *ngIf=\"page !== -1\" \n                class=\"page-link\" \n                (click)=\"onPageChange(page)\">\n          {{ page }}\n        </button>\n        <span *ngIf=\"page === -1\" class=\"page-link\">...</span>\n      </li>\n\n      <!-- Next Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(currentPage + 1)\"\n                [disabled]=\"currentPage === paginationInfo.totalPages\"\n                aria-label=\"P\u00E1gina siguiente\">\n          <span class=\"pagination-icon\">\u203A</span>\n        </button>\n      </li>\n\n      <!-- Last Page Button -->\n      <li class=\"page-item\" [class.disabled]=\"currentPage === paginationInfo.totalPages\">\n        <button class=\"page-link\" \n                (click)=\"onPageChange(paginationInfo.totalPages)\"\n                [disabled]=\"currentPage === paginationInfo.totalPages\"\n                aria-label=\"\u00DAltima p\u00E1gina\">\n          <span class=\"pagination-icon\">\u00BB</span>\n        </button>\n      </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:600!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container{position:relative;border-radius:.375rem;overflow:hidden;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table-content{transition:opacity .3s ease}.sa-table-container .table-content.loading{opacity:.5;pointer-events:none}.sa-table-container .loading-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:#fffc;border-radius:.375rem;z-index:10;margin-top:0;margin-bottom:0}.sa-table-container .loading-overlay .loading-content{display:flex;flex-direction:column;align-items:center;gap:1rem}.sa-table-container .loading-overlay .loading-content .loading-text{color:#6c757d;font-size:.875rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sa-table-container .table-responsive{border-radius:.375rem;overflow:hidden}.sa-table-container .table{margin-bottom:0;border-radius:.375rem!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table th{cursor:default!important;-webkit-user-select:text!important;user-select:text!important;border-radius:0!important}.sa-table-container .table th:first-child{border-top-left-radius:.375rem!important}.sa-table-container .table th:last-child{border-top-right-radius:.375rem!important}.sa-table-container .table th:hover{background-color:transparent!important}.sa-table-container .table thead th{cursor:default!important;border-bottom:none!important;background-color:#eef8f0!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important}.sa-table-container .table thead th:hover{background-color:#eef8f0!important}.sa-table-container .table thead tr th{background-color:#eef8f0!important;border-bottom:none!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:500!important}.sa-table-container .table thead tr th:hover{background-color:#eef8f0!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important}.sa-table-container .table>tbody>tr:last-child>td:first-child{border-bottom-left-radius:.375rem!important}.sa-table-container .table>tbody>tr:last-child>td:last-child{border-bottom-right-radius:.375rem!important}.sa-table-container .table>tbody>tr>td:first-child,.sa-table-container .table>thead>tr>th:first-child{padding-left:1rem!important}.sa-table-container .table.table-hover>tbody>tr:hover>td{background-color:#f8f9fa!important}.sa-table-container .d-flex.justify-content-between.align-items-center.mt-3{margin-top:.75rem!important}.sa-table-container .pagination{margin-bottom:0;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}.sa-table-container .pagination .page-link{border-radius:.25rem;border:1px solid #dddfe0;min-width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;padding:0;background-color:transparent;color:#5bab5f;font-size:1.125rem;text-align:center;line-height:1;width:2rem;box-sizing:border-box;letter-spacing:0;word-spacing:0;outline:none!important;font-size:.9rem;font-weight:500}.sa-table-container .pagination .page-link .pagination-icon{font-size:1.5rem;font-weight:500;line-height:0;display:flex;align-items:center;justify-content:center;margin:0;margin-top:-5px!important;padding:0;height:100%;width:100%}.sa-table-container .pagination .page-link:hover{background-color:#fff;border-color:#5bab5f;color:#5bab5f}.sa-table-container .pagination .page-link:focus{outline:none!important;box-shadow:none!important}.sa-table-container .pagination .page-item.active .page-link{background-color:#5bab5f;color:#fff;font-weight:500;border:none!important}.sa-table-container .pagination .page-item.active .page-link:hover{background-color:#5bab5f!important;color:#fff!important;border:none!important}.sa-table-container .pagination .page-item.disabled .page-link{color:#dee2e6;pointer-events:none;background-color:#fafafa;border-color:#dee2e6}.sa-table-container .pagination .page-item:first-child .page-link,.sa-table-container .pagination .page-item:last-child .page-link{min-width:2rem;width:2rem}.sa-table-container .pagination .page-link *{display:inline-block;vertical-align:middle}.sa-table-container .form-select{border-radius:.375rem;border:1px solid var(--bs-border-color)}.sa-table-container .form-select:focus{border-color:var(--bs-primary);box-shadow:0 0 0 .2rem rgba(var(--bs-primary-rgb),.25)}.sa-table-container .table-responsive{border-radius:.375rem!important;overflow:hidden;border:1px solid #e1e2e4}.sa-table-container .table-container{position:relative}.sa-table-container .table-bordered{border:1px solid var(--bs-border-color)}.sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}@media (max-width: 768px){.sa-table-container .d-flex.justify-content-between{flex-direction:column;gap:1rem}.sa-table-container .pagination .page-link{padding:.375rem .5rem;font-size:.875rem;min-width:2.25rem;height:2.25rem}}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"]{overflow:visible;padding:.5rem 0}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"] .pagination{margin:0;padding:0}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], data: [{
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
            }], responsive: [{
                type: Input
            }], loading: [{
                type: Input
            }], emptyMessage: [{
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
