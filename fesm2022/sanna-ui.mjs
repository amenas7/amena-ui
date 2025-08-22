import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, EventEmitter, Input, ViewChild, Output, Directive, ViewEncapsulation, ContentChildren, forwardRef } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faSave, faEdit, faPlus, faMinus, faCheck, faTimes, faInfo, faExclamationTriangle, faExclamationCircle, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faEye, faEyeSlash, faLock, faUnlock, faKey, faShieldAlt, faUserPlus, faUserMinus, faVideo, faWifi, faTable, faThLarge, faUsers, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartLine, faAppleAlt, faRobot, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalendarDay, faFile, faFlask, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faComment, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faFileExcel, faSignOutAlt, faSmile, faFrown, faMask, faBoxOpen, faSeedling, faVolumeUp, faExpandArrowsAlt, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faLightbulb, faLayerGroup, faListUl, faVolumeDown, faPills, faMobile, faMobileAlt, faMoneyBill, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faChevronDown, faDesktop, faChartPie, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faRedo, faRuler, faUtensils, faTshirt, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStore, faTablet, faTabletAlt, faThermometerHalf, faBolt, faTicketAlt, faSitemap, faBath, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faChevronLeft, faChevronRight, faBell, faQuestion, faChevronUp, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faPencil, faLink, faCopy, faChartBar, faGift, faBatteryHalf, faBicycle, faCalculator, faCamera, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faComments, faMicroscope, faCoffee, faCreditCard, faCropAlt, faCrop, faTruck, faEquals, faEraser, faFileDownload, faMedal, faFilter, faFingerprint, faFire, faTrophy, faFish, faFlag, faForward, faGlobe, faIceCream, faLaptop, faMapPin, faMotorcycle, faPaperclip, faPause, faPercent, faPiggyBank, faPlay, faReceipt, faShoppingCart, faStarHalf, faStop, faThumbsDown, faThumbsUp, faUndo, faUpload, faAmbulance } from '@fortawesome/free-solid-svg-icons';
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
library.add(faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faSave, faEdit, faPlus, faMinus, faCheck, faTimes, faInfo, faExclamationTriangle, faExclamationCircle, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faEye, faEyeSlash, faLock, faUnlock, faKey, faShieldAlt, faUserPlus, faUserMinus, faVideo, faWifi, faTable, faThLarge, faUsers, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartLine, faAppleAlt, faRobot, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalendarDay, faFile, faFlask, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faComment, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faFileExcel, faSignOutAlt, faSmile, faFrown, faMask, faBoxOpen, faSeedling, faVolumeUp, faExpandArrowsAlt, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faLightbulb, faLayerGroup, faListUl, faVolumeDown, faPills, faMobile, faMobileAlt, faMoneyBill, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faChevronDown, faDesktop, faChartPie, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faRedo, faRuler, faUtensils, faTshirt, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStore, faTablet, faTabletAlt, faThermometerHalf, faBolt, faTicketAlt, faSitemap, faBath, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faChevronLeft, faChevronRight);

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
    _size = 'md';
    _disabled = false;
    _loading = false;
    _fullWidth = false;
    _type = 'button';
    _icon;
    _position = 'left';
    _iconOnly = false;
    _tooltip;
    _tooltipPosition = 'top';
    _noAnimate = false;
    set tooltip(value) {
        this._tooltip = value;
    }
    get tooltip() {
        return this._tooltip;
    }
    set tooltipPosition(value) {
        this._tooltipPosition = value || 'top';
    }
    get tooltipPosition() {
        return this._tooltipPosition;
    }
    // Determinar si el tooltip necesita múltiples líneas
    get isLongTooltip() {
        if (!this.tooltip)
            return false;
        // Considerar texto largo si tiene más de 60 caracteres o contiene saltos de línea
        // 60 caracteres es aproximadamente lo que cabe en 350px con font-size 12px
        return this.tooltip.length > 60 || this.tooltip.includes('\n');
    }
    set variant(value) {
        this._variant = value || 'primary';
    }
    get variant() {
        return this._variant;
    }
    set size(value) {
        this._size = value || 'md';
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
    set noAnimate(value) {
        this._noAnimate = value === true || value === 'true';
    }
    get noAnimate() {
        return this._noAnimate;
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
            'close': faTimes,
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
            'fas fa-pencil': faPencil,
            'fas fa-angle-double-left': faAngleDoubleLeft,
            'fas fa-angle-left': faAngleLeft,
            'fas fa-angle-right': faAngleRight,
            'fas fa-angle-double-right': faAngleDoubleRight,
            'fas fa-table': faTable,
            'fas fa-th-large': faThLarge,
            'fas fa-users': faUsers,
            'fas fa-link': faLink,
            'fas fa-copy': faCopy,
            'fas fa-universal-access': faUniversalAccess,
            'fas fa-running': faRunning,
            'fas fa-image': faImage,
            'fas fa-calendar-alt': faCalendarAlt,
            'fas fa-chart-bar': faChartBar,
            'fas fa-chart-line': faChartLine,
            'fas fa-apple-alt': faAppleAlt,
            'fas fa-robot': faRobot,
            'fas fa-gift': faGift,
            'fas fa-shopping-bag': faShoppingBag,
            'fas fa-balance-scale': faBalanceScale,
            'fas fa-battery-three-quarters': faBatteryThreeQuarters,
            'fas fa-battery-half': faBatteryHalf,
            'fas fa-battery-quarter': faBatteryQuarter,
            'fas fa-battery-empty': faBatteryEmpty,
            'fas fa-bell-slash': faBellSlash,
            'fas fa-bicycle': faBicycle,
            'fas fa-bookmark': faBookmark,
            'fas fa-bowl-food': faBowlFood,
            'fas fa-box': faBox,
            'fas fa-bus': faBus,
            'fas fa-birthday-cake': faBirthdayCake,
            'fas fa-calculator': faCalculator,
            'fas fa-calendar-day': faCalendarDay,
            'fas fa-camera': faCamera,
            'fas fa-caret-down': faCaretDown,
            'fas fa-caret-left': faCaretLeft,
            'fas fa-caret-right': faCaretRight,
            'fas fa-caret-up': faCaretUp,
            'fas fa-file': faFile,
            'fas fa-chart-pie': faChartPie,
            'fas fa-comments': faComments,
            'fas fa-flask': faFlask,
            'fas fa-microscope': faMicroscope,
            'fas fa-cookie-bite': faCookieBite,
            'fas fa-spray-can': faSprayCan,
            'fas fa-soap': faSoap,
            'fas fa-expand': faExpand,
            'fas fa-cloud': faCloud,
            'fas fa-coffee': faCoffee,
            'fas fa-comment': faComment,
            'fas fa-credit-card': faCreditCard,
            'fas fa-crop': faCrop,
            'fas fa-crop-alt': faCropAlt,
            'fas fa-truck': faTruck,
            'fas fa-file-upload': faFileUpload,
            'fas fa-ellipsis-h': faEllipsisH,
            'fas fa-plane': faPlane,
            'fas fa-graduation-cap': faGraduationCap,
            'fas fa-equals': faEquals,
            'fas fa-eraser': faEraser,
            'fas fa-file-excel': faFileExcel,
            'fas fa-file-download': faFileDownload,
            'fas fa-sign-out-alt': faSignOutAlt,
            'fas fa-smile': faSmile,
            'fas fa-frown': faFrown,
            'fas fa-mask': faMask,
            'fas fa-medal': faMedal,
            'fas fa-box-open': faBoxOpen,
            'fas fa-seedling': faSeedling,
            'fas fa-filter': faFilter,
            'fas fa-fingerprint': faFingerprint,
            'fas fa-fire': faFire,
            'fas fa-trophy': faTrophy,
            'fas fa-fish': faFish,
            'fas fa-flag': faFlag,
            'fas fa-forward': faForward,
            'fas fa-volume-up': faVolumeUp,
            'fas fa-expand-arrows-alt': faExpandArrowsAlt,
            'fas fa-globe': faGlobe,
            'fas fa-volume-mute': faVolumeMute,
            'fas fa-bars': faBars,
            'fas fa-briefcase': faBriefcase,
            'fas fa-microchip': faMicrochip,
            'fas fa-heartbeat': faHeartbeat,
            'fas fa-history': faHistory,
            'fas fa-microphone': faMicrophone,
            'fas fa-ice-cream': faIceCream,
            'fas fa-lightbulb': faLightbulb,
            'fas fa-key': faKey,
            'fas fa-laptop': faLaptop,
            'fas fa-layer-group': faLayerGroup,
            'fas fa-list-ul': faListUl,
            'fas fa-volume-down': faVolumeDown,
            'fas fa-map-pin': faMapPin,
            'fas fa-pills': faPills,
            'fas fa-mobile': faMobile,
            'fas fa-mobile-alt': faMobileAlt,
            'fas fa-money-bill': faMoneyBill,
            'fas fa-motorcycle': faMotorcycle,
            'fas fa-sticky-note': faStickyNote,
            'fas fa-ellipsis-v': faEllipsisV,
            'fas fa-lungs': faLungs,
            'fas fa-cash-register': faCashRegister,
            'fas fa-paper-plane': faPaperPlane,
            'fas fa-paperclip': faPaperclip,
            'fas fa-desktop': faDesktop,
            'fas fa-pause': faPause,
            'fas fa-percent': faPercent,
            'fas fa-piggy-bank': faPiggyBank,
            'fas fa-play': faPlay,
            'fas fa-mouse-pointer': faMousePointer,
            'fas fa-swimming-pool': faSwimmingPool,
            'fas fa-ban': faBan,
            'fas fa-tag': faTag,
            'fas fa-shield': faShield,
            'fas fa-qrcode': faQrcode,
            'fas fa-receipt': faReceipt,
            'fas fa-redo': faRedo,
            'fas fa-ruler': faRuler,
            'fas fa-utensils': faUtensils,
            'fas fa-tshirt': faTshirt,
            'fas fa-shopping-cart': faShoppingCart,
            'fas fa-sliders-h': faSlidersH,
            'fas fa-glass-whiskey': faGlassWhiskey,
            'fas fa-sort': faSort,
            'fas fa-tachometer-alt': faTachometerAlt,
            'fas fa-spoon': faSpoon,
            'fas fa-star-half': faStarHalf,
            'fas fa-stop': faStop,
            'fas fa-store': faStore,
            'fas fa-thermometer-half': faThermometerHalf,
            'fas fa-thumbs-down': faThumbsDown,
            'fas fa-thumbs-up': faThumbsUp,
            'fas fa-bolt': faBolt,
            'fas fa-ticket-alt': faTicketAlt,
            'fas fa-sitemap': faSitemap,
            'fas fa-bath': faBath,
            'fas fa-undo': faUndo,
            'fas fa-upload': faUpload,
            'fas fa-user-plus': faUserPlus,
            'fas fa-user-minus': faUserMinus,
            'fas fa-video': faVideo,
            'fas fa-exclamation-circle': faExclamationCircle,
            'fas fa-wifi': faWifi,
            'fas fa-tablet': faTablet,
            'fas fa-tablet-alt': faTabletAlt,
            'fas fa-ambulance': faAmbulance
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
            this.loading ? 'loading' : '',
            this.noAnimate ? 'no-animate' : ''
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
            case 'sm':
                return 'btn-sm';
            case 'md':
                return 'btn-md';
            case 'lg':
                return 'btn-lg';
            default:
                return 'btn-md'; // Por defecto usa el tamaño mediano
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", tooltip: "tooltip", tooltipPosition: "tooltipPosition", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly", noAnimate: "noAnimate" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth", "style.visibility": "\"visible\"" }, styleAttribute: "visibility: hidden;" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', host: {
                        '[class.full-width]': 'fullWidth',
                        'style': 'visibility: hidden;',
                        '[style.visibility]': '"visible"'
                    }, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], tooltipPosition: [{
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
            }], noAnimate: [{
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaMessageboxComponent, selector: "sa-messagebox", inputs: { message: "message", type: "type", iconName: "iconName", iconSize: "iconSize", iconColor: "iconColor" }, ngImport: i0, template: "<div class=\"messagebox\" \r\n     [class.success]=\"type === 'success'\"\r\n     [class.warning]=\"type === 'warning'\"\r\n     [class.error]=\"type === 'error'\"\r\n     [class.info]=\"type === 'info'\">\r\n  <div class=\"messagebox-content\">\r\n    <sa-icon *ngIf=\"hasIcon\" \r\n              [name]=\"iconName!\" \r\n              [size]=\"iconSize || 'md'\"\r\n              [color]=\"iconColor || '#000000'\"\r\n              class=\"messagebox-icon\">\r\n    </sa-icon>\r\n    <p class=\"message-text\" [innerHTML]=\"sanitizedMessage\"></p>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.messagebox{position:relative;font-size:14px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;display:flex;flex-direction:row;border:.0625rem solid rgb(14,144,105);border-radius:8px;width:100%;max-width:100%;min-height:auto;padding:1rem;background-color:#f2fdf9;color:#006e4a;margin:8px 0;transition:all .3s ease;box-sizing:border-box;overflow-wrap:break-word}.messagebox.success{background-color:#f2fdf9;color:#006e4a;border:.0625rem solid rgb(14,144,105)}.messagebox.warning{background-color:#fff9f2;color:#9f5200;border:.0625rem solid rgb(217,125,8)}.messagebox.error{background-color:#fff2f7;color:#9f003c;border:.0625rem solid rgb(226,8,103)}.messagebox.info{background-color:#f2f7ff;color:#003d9f;border:.0625rem solid rgb(0,100,209)}.messagebox .messagebox-content{display:flex;align-items:center;gap:.75rem;width:100%}.messagebox .messagebox-icon{flex-shrink:0}.messagebox .message-text{margin:0!important;padding:0;text-align:left;word-wrap:break-word;flex:1;line-height:1.28;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SaIconComponent, selector: "sa-icon", inputs: ["name", "color", "size"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaMessageboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-messagebox', template: "<div class=\"messagebox\" \r\n     [class.success]=\"type === 'success'\"\r\n     [class.warning]=\"type === 'warning'\"\r\n     [class.error]=\"type === 'error'\"\r\n     [class.info]=\"type === 'info'\">\r\n  <div class=\"messagebox-content\">\r\n    <sa-icon *ngIf=\"hasIcon\" \r\n              [name]=\"iconName!\" \r\n              [size]=\"iconSize || 'md'\"\r\n              [color]=\"iconColor || '#000000'\"\r\n              class=\"messagebox-icon\">\r\n    </sa-icon>\r\n    <p class=\"message-text\" [innerHTML]=\"sanitizedMessage\"></p>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.messagebox{position:relative;font-size:14px;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;display:flex;flex-direction:row;border:.0625rem solid rgb(14,144,105);border-radius:8px;width:100%;max-width:100%;min-height:auto;padding:1rem;background-color:#f2fdf9;color:#006e4a;margin:8px 0;transition:all .3s ease;box-sizing:border-box;overflow-wrap:break-word}.messagebox.success{background-color:#f2fdf9;color:#006e4a;border:.0625rem solid rgb(14,144,105)}.messagebox.warning{background-color:#fff9f2;color:#9f5200;border:.0625rem solid rgb(217,125,8)}.messagebox.error{background-color:#fff2f7;color:#9f003c;border:.0625rem solid rgb(226,8,103)}.messagebox.info{background-color:#f2f7ff;color:#003d9f;border:.0625rem solid rgb(0,100,209)}.messagebox .messagebox-content{display:flex;align-items:center;gap:.75rem;width:100%}.messagebox .messagebox-icon{flex-shrink:0}.messagebox .message-text{margin:0!important;padding:0;text-align:left;word-wrap:break-word;flex:1;line-height:1.28;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] }]
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaHeadingComponent, selector: "sa-heading", inputs: { children: "children", size: "size", weight: "weight", mt: "mt", mb: "mb", mr: "mr", ml: "ml" }, ngImport: i0, template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;line-height:1.2;color:#2a3547}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaHeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-heading', template: "<h1 [class]=\"headingClasses\">{{ children }}</h1>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block!important;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block!important;vertical-align:middle}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;line-height:1.2;color:#2a3547}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child{margin-bottom:0}.fs-6{font-size:.875rem!important}.fs-5{font-size:1rem!important}.fs-4{font-size:1.125rem!important}.fs-3{font-size:1.25rem!important}.fs-2{font-size:1.5rem!important}.fs-1{font-size:1.75rem!important}.display-6{font-size:2rem!important}.display-5{font-size:2.5rem!important}.display-4{font-size:3rem!important}\n"] }]
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTextComponent, selector: "sa-text", ngImport: i0, template: "<p>sa-text works!</p>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}p,span,div,text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-text', template: "<p>sa-text works!</p>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}p,span,div,text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}\n"] }]
        }] });

class SaColumnDefDirective {
    templateRef;
    columnKey;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaColumnDefDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SaColumnDefDirective, isStandalone: true, selector: "[saColumnDef]", inputs: { columnKey: ["saColumnDef", "columnKey"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaColumnDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[saColumnDef]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { columnKey: [{
                type: Input,
                args: ['saColumnDef']
            }] } });

class SaTableComponent {
    cdr;
    resizeListener = null;
    constructor(cdr) {
        this.cdr = cdr;
    }
    // Arrays/objetos que siempre usan property binding
    columns = [];
    data = [];
    // Solo emptyMessage usa property binding con comillas simples: [emptyMessage]="'texto'"
    emptyMessage = 'No hay datos disponibles';
    // Templates dinámicos por columna usando ContentChildren
    columnDefs;
    defaultCellTemplate;
    // Propiedades con setters/getters para flexibilidad máxima
    _itemsPerPage = 5;
    _showPagination = true;
    _showItemsPerPage = true;
    _showTotal = true;
    _hover = false;
    _loading = false;
    _showFirstLastButtons = true;
    _showFilters = false;
    set itemsPerPage(value) {
        this._itemsPerPage = value != null ? +value : 5;
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
    set showFilters(value) {
        this._showFilters = value === true || value === 'true';
    }
    get showFilters() {
        return this._showFilters;
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
    rowClick = new EventEmitter();
    rowDoubleClick = new EventEmitter();
    filterChange = new EventEmitter();
    currentPage = 1;
    currentSort = null;
    paginationInfo = {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: this._itemsPerPage,
        startItem: 0,
        endItem: 0
    };
    paginatedData = [];
    itemsPerPageOptions = [5, 10, 25, 50, 100];
    // Propiedad para controlar la animación
    animationKey = 0;
    // Propiedad para acceder a Array desde el template
    Array = Array;
    // Propiedad para acceder a Object desde el template
    Object = Object;
    // Propiedad para la fila seleccionada
    selectedRow = null;
    // Propiedades para filtros
    columnFilters = {};
    filteredData = [];
    ngOnInit() {
        // Asegurar que el itemsPerPage esté sincronizado con paginationInfo
        this.paginationInfo.itemsPerPage = this.itemsPerPage;
        // Resetear a la primera página al inicializar
        this.currentPage = 1;
        this.applyFilters();
        this.updatePagination();
        this.setupResizeListener();
    }
    ngAfterViewInit() {
        // Forzar la detección de cambios para asegurar que los templates se detecten
        setTimeout(() => {
            this.cdr.detectChanges();
        });
    }
    ngOnChanges(changes) {
        if (changes['data'] || changes['itemsPerPage']) {
            // Resetear a la primera página cuando cambian los datos
            if (changes['data']) {
                this.currentPage = 1;
            }
            this.applyFilters();
            this.updatePagination();
        }
    }
    updatePagination() {
        // LÓGICA CORREGIDA: Si hay filtros activos, solo usar filteredData
        let dataToUse = [];
        if (this.hasActiveFilters()) {
            // Si hay filtros activos, solo usar datos filtrados
            dataToUse = this.filteredData;
        }
        else {
            // Si no hay filtros activos, usar todos los datos
            dataToUse = this.data;
        }
        if (!dataToUse || dataToUse.length === 0) {
            this.paginatedData = [];
            this.paginationInfo = {
                currentPage: 1,
                totalPages: 0,
                totalItems: 0,
                itemsPerPage: this._itemsPerPage,
                startItem: 0,
                endItem: 0
            };
            this.currentPage = 1;
            return;
        }
        const totalItems = dataToUse.length;
        const totalPages = Math.ceil(totalItems / this._itemsPerPage);
        // Asegurar que currentPage esté dentro del rango válido
        if (this.currentPage > totalPages) {
            this.currentPage = totalPages;
        }
        if (this.currentPage < 1) {
            this.currentPage = 1;
        }
        const startItem = (this.currentPage - 1) * this._itemsPerPage;
        const endItem = Math.min(startItem + this._itemsPerPage, totalItems);
        this.paginationInfo = {
            currentPage: this.currentPage,
            totalPages,
            totalItems,
            itemsPerPage: this._itemsPerPage,
            startItem: startItem + 1,
            endItem
        };
        this.paginatedData = dataToUse.slice(startItem, endItem);
        // Forzar detección de cambios
        this.cdr.detectChanges();
    }
    onPageChange(page) {
        // Validar que la página esté dentro del rango válido
        if (page >= 1 && page <= this.paginationInfo.totalPages && this.paginationInfo.totalPages > 0) {
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
        this._itemsPerPage = itemsPerPage;
        this.currentPage = 1; // Resetear a la primera página
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
    trackByFn(index, item) {
        return index;
    }
    // Método para obtener el template de una columna específica
    getColumnTemplate(columnKey) {
        if (!this.columnDefs) {
            return null;
        }
        const columnDef = this.columnDefs.find(def => def.columnKey === columnKey);
        return columnDef ? columnDef.templateRef : null;
    }
    // Método para obtener el contexto del template
    getTemplateContext(row, column) {
        return {
            $implicit: row,
            row: row,
            column: column,
            element: row,
            value: row[column.key],
            data: row[column.key]
        };
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
    // Método para manejar el click en una fila
    onRowClick(row) {
        this.selectedRow = row;
        this.rowClick.emit(row);
    }
    // Método para manejar el doble click en una fila
    onRowDoubleClick(row) {
        this.rowDoubleClick.emit(row);
    }
    // Método para verificar si una fila está seleccionada
    isRowSelected(row) {
        return this.selectedRow === row;
    }
    // Métodos para manejar filtros - SIMPLIFICADO CON NORMALIZACIÓN DE TILDES
    applyFilters() {
        if (!this.data) {
            this.filteredData = [];
            return;
        }
        // Si no hay filtros activos, usar todos los datos
        const activeFilters = Object.keys(this.columnFilters).filter(key => this.columnFilters[key] && this.columnFilters[key].trim() !== '');
        if (activeFilters.length === 0) {
            this.filteredData = [...this.data];
        }
        else {
            // Aplicar filtros con normalización de tildes
            this.filteredData = this.data.filter(row => {
                return activeFilters.every(columnKey => {
                    const filterValue = this.columnFilters[columnKey].trim();
                    const cellValue = row[columnKey]?.toString() || '';
                    // Filtrado con normalización: incluye el texto (insensible a mayúsculas/minúsculas y tildes)
                    return this.normalizeText(cellValue).includes(this.normalizeText(filterValue));
                });
            });
        }
        // Resetear a la primera página cuando se aplican filtros
        this.currentPage = 1;
        // Forzar detección de cambios
        this.cdr.detectChanges();
    }
    // Método simple para normalizar texto (quitar tildes)
    normalizeText(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); // Quitar tildes y diacríticos
    }
    onFilterInputChange(event, columnKey) {
        const target = event.target;
        const value = target?.value || '';
        this.onFilterChange(columnKey, value);
    }
    onFilterChange(columnKey, value) {
        this.columnFilters[columnKey] = value;
        this.applyFilters(); // Esto ya resetea currentPage a 1
        this.updatePagination();
        // Emitir evento de filtro
        this.filterChange.emit({ ...this.columnFilters });
    }
    clearFilters() {
        this.columnFilters = {};
        this.applyFilters(); // Esto ya resetea currentPage a 1
        this.updatePagination();
        this.filterChange.emit({});
    }
    // Método para verificar si hay filtros activos
    hasActiveFilters() {
        return Object.keys(this.columnFilters).some(key => this.columnFilters[key] && this.columnFilters[key].trim() !== '');
    }
    // Método para obtener el número de resultados filtrados
    getFilteredResultsCount() {
        return this.filteredData.length;
    }
    ngOnDestroy() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTableComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTableComponent, selector: "sa-table", inputs: { columns: "columns", data: "data", emptyMessage: "emptyMessage", itemsPerPage: "itemsPerPage", showPagination: "showPagination", showItemsPerPage: "showItemsPerPage", showTotal: "showTotal", hover: "hover", loading: "loading", showFirstLastButtons: "showFirstLastButtons", showFilters: "showFilters", minWidth: "minWidth" }, outputs: { pageChange: "pageChange", itemsPerPageChange: "itemsPerPageChange", sortChange: "sortChange", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", filterChange: "filterChange" }, queries: [{ propertyName: "columnDefs", predicate: SaColumnDefDirective }], viewQueries: [{ propertyName: "defaultCellTemplate", first: true, predicate: ["defaultCellTemplate"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "  <!-- Table Container -->\r\n  <div class=\"sa-table-container\">\r\n    \r\n    <!-- Table Content (siempre visible) -->\r\n    <div class=\"table-content\" [class.loading]=\"loading\">\r\n  \r\n  <!-- Table -->\r\n  <div class=\"table-responsive table-container\">\r\n    <table class=\"table\" \r\n           [class.table-hover]=\"hover\"\r\n           [style.min-width]=\"minWidth\">\r\n      <thead class=\"table-light\" [class.has-filters]=\"showFilters\">\r\n        <tr>\r\n          <th *ngFor=\"let column of columns\" \r\n              class=\"column-header\"\r\n              [style.width]=\"column.width\">\r\n            <div class=\"d-flex align-items-center justify-content-between\">\r\n              <span style=\"font-weight: 700 !important;\">{{ column.label }}</span>\r\n            </div>\r\n          </th>\r\n        </tr>\r\n        <!-- Fila de filtros -->\r\n        <tr *ngIf=\"showFilters\" class=\"filter-row\">\r\n          <th class=\"filter-row-th\" *ngFor=\"let column of columns\" \r\n              [style.width]=\"column.width\">\r\n            <input \r\n              *ngIf=\"!column.noFilter\"\r\n              type=\"text\" \r\n              class=\"form-control form-control-sm filter-input\"\r\n              [placeholder]=\"\"\r\n              [value]=\"columnFilters[column.key] || ''\"\r\n              (input)=\"onFilterInputChange($event, column.key)\"\r\n              />\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody [class.animate-fade-in]=\"animationKey > 0\" [class.animation-complete]=\"animationKey > 0\" [attr.data-animation-key]=\"animationKey\">\r\n        <tr *ngFor=\"let row of paginatedData; trackBy: trackByFn\"\r\n            [class.selected-row]=\"isRowSelected(row)\"\r\n            (click)=\"onRowClick(row)\"\r\n            (dblclick)=\"onRowDoubleClick(row)\">\r\n          <td *ngFor=\"let column of columns\" [style.width]=\"column.width\">\r\n            <!-- Usar template espec\u00EDfico de la columna si existe, sino usar el default -->\r\n            <ng-container *ngTemplateOutlet=\"getColumnTemplate(column.key) || defaultCellTemplate!; context: getTemplateContext(row, column)\">\r\n            </ng-container>\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"paginatedData.length === 0\">\r\n          <td [attr.colspan]=\"columns.length\" class=\"text-center py-4 text-muted\">\r\n            <div>\r\n              <p class=\"mb-2\" style=\"font-size: 14px !important;\">{{ emptyMessage }}</p>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    \r\n    <!-- Loading Overlay solo sobre la tabla -->\r\n    <div *ngIf=\"loading\" class=\"loading-overlay\">\r\n      <div class=\"loading-content\">\r\n        <div class=\"spinner-border text-primary\" role=\"status\">\r\n        </div>\r\n        <div class=\"loading-text\">Cargando...</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Items Per Page Selector and Pagination Controls (en una sola fila) -->\r\n  <div *ngIf=\"showPagination && paginatedData.length > 0\" class=\"d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center mt-2\">\r\n    <!-- Items Per Page Selector (izquierda) -->\r\n    <div *ngIf=\"showItemsPerPage && paginatedData.length > 0 && paginationInfo.totalItems >= 6\" \r\n         class=\"d-flex align-items-center mb-2 mb-md-0\"\r\n         [class.no-pagination]=\"paginationInfo.totalPages <= 1\">\r\n      <span class=\"text-muted me-2\" style=\"font-size: 12px !important;\">Registros por p\u00E1gina:</span>\r\n      <select \r\n        id=\"itemsPerPage\"\r\n        class=\"form-select form-select-sm sa-table-items-per-page\" \r\n        [value]=\"itemsPerPage\"\r\n        (change)=\"onSelectChange($event)\">\r\n        <option *ngFor=\"let option of itemsPerPageOptions\" [value]=\"option\">\r\n          {{ option }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    \r\n    <!-- Pagination Info and Controls (derecha) -->\r\n      <div class=\"d-flex flex-column flex-md-row align-items-center\">\r\n        <div *ngIf=\"showTotal && paginatedData.length > 0\" \r\n             class=\"text-muted mb-2 mb-md-0 me-md-3 text-center text-md-start\"\r\n             [class.mt-custom-pagination]=\"paginationInfo.totalItems < 6\"\r\n             style=\"font-size: 12px !important;\">\r\n          P\u00E1gina {{ paginationInfo.currentPage }}: {{ paginationInfo.startItem }}-{{ paginationInfo.endItem }} de {{ paginationInfo.totalItems }} registros\r\n        </div>\r\n      \r\n      <nav *ngIf=\"paginationInfo.totalPages > 1\" aria-label=\"Navegaci\u00F3n de p\u00E1ginas\">\r\n        <div class=\"pagination-controls d-flex align-items-center\">\r\n          <!-- First Page Button -->\r\n          <button *ngIf=\"showFirstLastButtons\" \r\n                  class=\"btn btn-outline-secondary btn-sm me-1\" \r\n                  (click)=\"onPageChange(1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"Primera p\u00E1gina\"\r\n                  title=\"Primera p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-first\">\u00AB</span>\r\n          </button>\r\n\r\n          <!-- Previous Button -->\r\n          <button class=\"btn btn-outline-secondary btn-sm me-2\" \r\n                  (click)=\"onPageChange(currentPage - 1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"P\u00E1gina anterior\"\r\n                  title=\"P\u00E1gina anterior\">\r\n            <span class=\"pagination-icon\">\u2039</span>\r\n          </button>\r\n\r\n          <!-- Page Indicator -->\r\n          <!-- <span class=\"page-indicator mx-2 text-muted\">\r\n            {{ currentPage }} de {{ paginationInfo.totalPages }}\r\n          </span> -->\r\n\r\n          <!-- Next Button -->\r\n          <button class=\"btn btn-outline-secondary btn-sm ms-2\" \r\n                  (click)=\"onPageChange(currentPage + 1)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"P\u00E1gina siguiente\"\r\n                  title=\"P\u00E1gina siguiente\">\r\n            <span class=\"pagination-icon\">\u203A</span>\r\n          </button>\r\n\r\n          <!-- Last Page Button -->\r\n          <button *ngIf=\"showFirstLastButtons\" \r\n                  class=\"btn btn-outline-secondary btn-sm ms-1\" \r\n                  (click)=\"onPageChange(paginationInfo.totalPages)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"\u00DAltima p\u00E1gina\"\r\n                  title=\"\u00DAltima p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-last\">\u00BB</span>\r\n          </button>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Template por defecto para celdas -->\r\n<ng-template #defaultCellTemplate let-row=\"row\" let-column=\"column\">\r\n  <ng-container *ngIf=\"row[column.key] !== undefined && row[column.key] !== null\">\r\n    {{ row[column.key] }}\r\n  </ng-container>\r\n</ng-template>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;contain:style;isolation:isolate}:host .sa-table-container{font-family:Nunito Sans,sans-serif}.d-flex{display:flex!important}.justify-content-between{justify-content:space-between!important}.justify-content-center{justify-content:center!important}@media (min-width: 768px){.justify-content-md-between{justify-content:space-between!important}}.align-items-center{align-items:center!important}.flex-column{flex-direction:column!important}@media (min-width: 768px){.flex-md-row{flex-direction:row!important}}.mb-3{margin-bottom:1rem!important}.mt-3{margin-top:1rem!important}.me-2{margin-right:.5rem!important}.text-muted{color:#6c757d!important}.text-center{text-align:center!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.form-select{display:block;width:100%;padding:.375rem 12px;font-size:1rem!important;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:11px!important}.sa-table-items-per-page{width:auto!important;min-width:60px;max-width:120px;font-size:11px!important}.sa-table-items-per-page:focus{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-items-per-page:focus-visible{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-items-per-page:active{outline:none!important;box-shadow:none!important;border-color:#ced4da!important}.table{width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border:none!important}.table>:not(caption)>*>*{padding:.5rem;background-color:transparent;border:none!important;box-shadow:none!important}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-light{color:#000;background-color:#f8f9fa}.table-hover>tbody>tr:hover>*{background-color:#00000013;color:#000}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}.table-bordered>:not(caption)>*{border-width:0!important}.table-bordered>:not(caption)>*>*{border-width:0!important}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.text-primary{color:#0d6efd!important}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.375rem}.page-item{list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6}.page-item:first-child .page-link{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.page-item:last-child .page-link{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.mb-0{margin-bottom:0!important}@keyframes spinner-border{to{transform:rotate(360deg)}}.sa-table-container{position:relative;border-radius:.375rem;overflow:hidden;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table-content{transition:opacity .3s ease}.sa-table-container .table-content.loading{opacity:.5;pointer-events:none}.sa-table-container .loading-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:#fffc;border-radius:.375rem;z-index:10;margin-top:0;margin-bottom:0}.sa-table-container .loading-overlay .loading-content{display:flex;flex-direction:column;align-items:center;gap:1rem}.sa-table-container .loading-overlay .loading-content .loading-text{color:#6c757d;font-size:11px!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sa-table-container .table-responsive{border-radius:.375rem;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;border:1px solid #e1e2e4!important}.sa-table-container .table{margin-bottom:0;border-radius:.375rem!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;border:none!important}.sa-table-container .table th{cursor:default!important;-webkit-user-select:text!important;user-select:text!important;border-radius:0!important;border:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table th:first-child{border-top-left-radius:.375rem!important}.sa-table-container .table th:last-child{border-top-right-radius:.375rem!important}.sa-table-container .table th:hover{background-color:transparent!important}.sa-table-container .table td{border-bottom:1px solid #e1e2e4!important;border-right:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody.animate-fade-in{animation:fadeIn .3s ease-out;animation-fill-mode:both}.sa-table-container .table tbody.animate-fade-in td{color:transparent!important;transition:color .3s ease-out}.sa-table-container .table tbody.animate-fade-in.animation-complete td{color:inherit!important}.sa-table-container .table tbody.animate-fade-in tr.selected-row td{color:#fff!important;transition:none!important;background-color:#1f8be1!important}.sa-table-container .table tbody.animate-fade-in tr.selected-row{background-color:#1f8be1!important}.sa-table-container .table tbody.animate-fade-in tr.selected-row td{background-color:#1f8be1!important;color:#fff!important}.sa-table-container .table thead th,.sa-table-container .table thead th:hover,.sa-table-container .table thead th:focus,.sa-table-container .table thead th:active,.sa-table-container .table.table-light thead th,.sa-table-container .table-light thead th{cursor:default!important;border-bottom:none!important;border-right:none!important;background-color:#e9ecef!important;background:#e9ecef!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:600!important;text-align:left!important;vertical-align:middle!important;color:#555b5f!important}.sa-table-container .table thead tr th,.sa-table-container .table thead tr th:hover,.sa-table-container .table thead tr th:focus,.sa-table-container .table thead tr th:active,.sa-table-container .table.table-light thead tr th,.sa-table-container .table-light thead tr th{background-color:#e9ecef!important;background:#e9ecef!important;border-bottom:none!important;border-right:none!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:600!important;text-align:left!important;vertical-align:middle!important;color:#7e8386!important}.sa-table-container .table tbody tr td{text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody tr td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important;border-right:none!important}.sa-table-container .table>tbody>tr:last-child>td:first-child{border-bottom-left-radius:.375rem!important}.sa-table-container .table>tbody>tr:last-child>td:last-child{border-bottom-right-radius:.375rem!important}.sa-table-container .table>tbody>tr>td:first-child,.sa-table-container .table>thead>tr>th:first-child{padding-left:1rem!important}.sa-table-container .table.table-hover>tbody>tr:hover>td{background-color:#f8f9fa!important;font-size:11px!important}.sa-table-container .table.table-hover>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table.table-hover>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .table>tbody>tr.selected-row td{background-color:#1f8be1!important;color:#fff!important}.sa-table-container .table>tbody>tr.selected-row:hover td{background-color:#1f8be1!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover td{background-color:#fff!important}.sa-table-container .d-flex.justify-content-between.align-items-center.mt-3{margin-top:11px!important}.sa-table-container .pagination{margin-bottom:0;flex-wrap:nowrap!important;justify-content:flex-end;gap:.5rem;display:flex!important;align-items:center!important;flex-direction:row!important}.sa-table-container .pagination .page-link{border-radius:.25rem;border:1px solid #dddfe0;min-width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;padding:0;background-color:transparent;color:#5bab5f;font-size:1.125rem!important;text-align:center;line-height:1;width:2rem;box-sizing:border-box;letter-spacing:0;word-spacing:0;outline:none!important;cursor:pointer!important;font-size:.9rem!important;font-weight:500}.sa-table-container .pagination .page-link .pagination-icon{font-size:1.5rem!important;font-weight:500;line-height:0;display:flex;align-items:center;justify-content:center;margin:0;margin-top:-5px!important;padding:0;height:100%;width:100%}.sa-table-container .pagination .page-link:hover{background-color:#fff;border-color:#5bab5f;color:#5bab5f}.sa-table-container .pagination .page-link:focus{outline:none!important;box-shadow:none!important}.sa-table-container .pagination .page-item.active .page-link{background-color:#5bab5f;color:#fff;font-weight:500;border:none!important;cursor:pointer!important}.sa-table-container .pagination .page-item.active .page-link:hover{background-color:#5bab5f!important;color:#fff!important;border:none!important}.sa-table-container .pagination .page-item.disabled .page-link{color:#dee2e6;pointer-events:none;background-color:#fafafa;border-color:#dee2e6;cursor:not-allowed!important}.sa-table-container .pagination .page-item:first-child .page-link,.sa-table-container .pagination .page-item:last-child .page-link{min-width:2rem;width:2rem}.sa-table-container .pagination .page-link *{display:inline-block;vertical-align:middle}.sa-table-container .pagination-controls .form-select,.sa-table-container .table-controls .form-select{border-radius:.375rem;border:1px solid #ced4da!important;padding:.375rem 11px!important;font-size:11px!important;font-weight:400!important;line-height:1.5!important;color:#212529!important;background-color:#fff!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right 12px center!important;background-size:16px 11px!important;appearance:none!important;width:auto!important;min-width:70px!important;display:inline-block!important;outline:none!important}.sa-table-container .pagination-controls .form-select:focus,.sa-table-container .table-controls .form-select:focus{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-container .pagination-controls .form-select:active,.sa-table-container .table-controls .form-select:active,.sa-table-container .pagination-controls .form-select:hover,.sa-table-container .table-controls .form-select:hover{outline:none!important;box-shadow:none!important}.sa-table-container .pagination-controls .form-select-sm,.sa-table-container .table-controls .form-select-sm{padding-top:.25rem!important;padding-bottom:.25rem!important;padding-left:.5rem!important;font-size:11px!important}.sa-table-container .table-container{position:relative}.sa-table-container .table-bordered{border:1px solid #e1e2e4!important;border-right:none!important}.sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}@media (max-width: 768px){.sa-table-container .d-flex.justify-content-between{flex-direction:column}.sa-table-container .pagination{justify-content:center!important;flex-wrap:nowrap!important;display:flex!important;align-items:center!important;flex-direction:row!important}.sa-table-container .pagination .page-link{padding:.375rem .5rem;font-size:11px!important;min-width:2.5rem;height:2.5rem;border-radius:.25rem}.sa-table-container .pagination .page-item:has(.pagination-first),.sa-table-container .pagination .page-item:has(.pagination-last){display:none}}@media (max-width: 480px){.sa-table-container .pagination{gap:.125rem;flex-wrap:nowrap!important;display:flex!important;align-items:center!important;flex-direction:row!important}.sa-table-container .pagination .page-link{min-width:2.25rem;height:2.25rem;font-size:.8rem!important;padding:.25rem .375rem}}@media (min-width: 481px) and (max-width: 600px){.sa-table-container .pagination{gap:.375rem}}@media (min-width: 601px) and (max-width: 768px){.sa-table-container .pagination{gap:.5rem}}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"]{overflow:visible;padding:.5rem 0}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"] .pagination{margin:0;padding:0}.sa-table-container .table.table-bordered{border:1px solid #e1e2e4!important}.sa-table-container .table.table-bordered>:not(caption)>*{border-width:0!important}.sa-table-container .table.table-bordered>:not(caption)>*>*{border-width:0!important}.sa-table-container .table>:not(caption)>*>*{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table{border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr>td{border:none!important;border-bottom:1px solid #e1e2e4!important;border-right:none!important;border-top:none!important;border-left:none!important;padding:.5rem!important;text-align:left!important;vertical-align:middle!important;font-size:11px!important}.sa-table-container .table>tbody>tr>td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important;padding:2rem .5rem!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .table>thead>tr>th{border:none!important;padding:.3125rem .5rem!important;text-align:left!important;vertical-align:middle!important;background-color:#e9ecef!important;background:#e9ecef!important;color:#555b5f!important;font-weight:600!important;font-size:11px!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important}.sa-table-container .table,.sa-table-container .table>thead,.sa-table-container .table>tbody,.sa-table-container .table>tfoot,.sa-table-container .table>tr,.sa-table-container .table>th,.sa-table-container .table>td{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr:not(:last-child)>td{border-bottom:1px solid #e1e2e4!important;border-top:none!important;border-left:none!important;border-right:none!important}.sa-table-container .table-responsive{border:1px solid #e1e2e4!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch}.sa-table-container .table-responsive::-webkit-scrollbar{height:8px}.sa-table-container .table-responsive::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.sa-table-container .table-responsive .table{width:100%}@media (max-width: 480px){.sa-table-container .table-responsive .table{min-width:400px!important}}.sa-table-container .table-container{border:1px solid #e1e2e4!important;border-radius:.375rem!important;overflow:hidden}.table-scrollable{overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:#c1c1c1 #f1f1f1}.table-scrollable .table{table-layout:fixed;width:100%}.table-scrollable .table th,.table-scrollable .table td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@keyframes fadeIn{0%{opacity:.8}to{opacity:1}}.sa-table-container .table>tbody>tr{cursor:pointer;transition:background-color .2s ease}.sa-table-container .table>tbody>tr:hover{background-color:#f8f9fa!important}.sa-table-container .table>tbody>tr:hover td{background-color:#f8f9fa!important;font-size:11px!important}.sa-table-container .table>tbody>tr.selected-row{background-color:#1f8be1!important}.sa-table-container .table>tbody>tr.selected-row td{background-color:#1f8be1!important;color:#fff!important;font-size:11px!important;transition:none!important}.sa-table-container .table>tbody>tr.selected-row:hover{background-color:#1f8be1!important}.sa-table-container .table>tbody>tr.selected-row:hover td{background-color:#1f8be1!important;color:#fff!important;font-size:11px!important}.sa-table-container .table>tbody>tr:has(td.text-center){cursor:default}.sa-table-container .table>tbody>tr:has(td.text-center):hover{background-color:#fff!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover td{background-color:#fff!important;color:#6c757d!important}.sa-table-container .table>tbody>tr:has(td.text-center).selected-row{background-color:#fff!important}.sa-table-container .table>tbody>tr:has(td.text-center).selected-row td{background-color:#fff!important;color:#6c757d!important}.d-flex.flex-column.flex-md-row.justify-content-center.justify-content-md-between.align-items-center.mt-2{width:100%!important}@media (max-width: 767px){.d-flex.flex-column.flex-md-row.justify-content-center.justify-content-md-between.align-items-center.mt-2{justify-content:center!important;align-items:center!important}}@media (min-width: 768px){.d-flex.flex-column.flex-md-row.justify-content-center.justify-content-md-between.align-items-center.mt-2{justify-content:space-between!important;align-items:center!important}}@media (max-width: 767px){.d-flex.align-items-center.mb-2.mb-md-0{justify-content:center!important;margin-bottom:1rem!important}}@media (min-width: 768px){.d-flex.align-items-center.mb-2.mb-md-0{justify-content:flex-start!important;margin-bottom:0!important}}.d-flex.align-items-center.mb-2.mb-md-0.no-pagination{margin-top:10px!important}.pagination-controls{display:flex!important;align-items:center!important;gap:.5rem!important;flex-direction:row!important;flex-wrap:nowrap!important}.pagination-controls *{box-shadow:none!important;filter:none!important;text-shadow:none!important}.pagination-controls .btn{border-color:#cacaca;min-width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:.375rem;transition:none!important;background-color:transparent;box-shadow:none!important;filter:none!important;text-shadow:none!important;cursor:pointer!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important;-webkit-filter:none!important;-moz-filter:none!important;-ms-filter:none!important}.pagination-controls .btn .pagination-icon{font-size:16px!important;line-height:1;font-weight:700}.pagination-controls .btn:disabled{opacity:.3;cursor:not-allowed;background-color:transparent!important;border-color:#cacaca!important}.pagination-controls .btn:not(:disabled):hover{background-color:#32a047!important;border-color:#32a047!important;color:#fff!important}.pagination-controls .btn:not(:disabled):active{background-color:#32a047!important;border-color:#32a047!important;color:#fff!important;box-shadow:none!important;transform:none!important}.pagination-controls .btn:not(:disabled):hover{box-shadow:none!important}.pagination-controls .btn:focus,.pagination-controls .btn:focus-visible{box-shadow:none!important;outline:none!important}.pagination-controls .btn,.pagination-controls .btn:hover,.pagination-controls .btn:active,.pagination-controls .btn:focus,.pagination-controls .btn:focus-visible{box-shadow:none!important;filter:none!important;text-shadow:none!important;outline:none!important;border:1px solid #cacaca!important;cursor:pointer!important}.pagination-controls .btn:disabled{cursor:initial!important}.pagination-controls .page-indicator{font-size:11px!important;font-weight:500;white-space:nowrap;min-width:80px;text-align:center}@media (max-width: 767px){.d-flex.flex-column.flex-md-row.align-items-center{align-items:center!important;text-align:center!important}}@media (min-width: 768px){.d-flex.flex-column.flex-md-row.align-items-center{align-items:center!important;margin-left:auto!important}}@media (max-width: 767px){.text-muted.mb-2.mb-md-0.me-md-3.text-center.text-md-start{text-align:center!important;margin-right:0!important}}@media (min-width: 768px){.text-muted.mb-2.mb-md-0.me-md-3.text-center.text-md-start{text-align:start!important;margin-right:1rem!important}}@media (max-width: 576px){.pagination-controls{display:flex!important;align-items:center!important;gap:.25rem!important;flex-direction:row!important;flex-wrap:nowrap!important}.pagination-controls .btn{min-width:32px;height:32px}.pagination-controls .btn .pagination-icon{font-size:14px!important}.pagination-controls .page-indicator{font-size:11px!important;min-width:60px}}.sa-table-container .table .filter-row .filter-row-th{padding-top:0!important;padding-bottom:8px!important;font-weight:800px!important}.sa-table-container .table thead.has-filters th.column-header{padding-bottom:0!important}.sa-table-container .filter-row{border-spacing:1rem!important}.sa-table-container .filter-row th{background-color:#f8f9fa!important;border-bottom:1px solid #e1e2e4!important;border-top:none!important;padding:.25rem 1rem!important}.sa-table-container .filter-row th:hover{background-color:#f8f9fa!important}.sa-table-container .filter-row .filter-input{border:1px solid #ced4da;border-radius:.25rem;font-size:13px!important;padding:.25rem .5rem;background-color:#fff;color:#495057;width:calc(100% - 1rem)!important;margin:0!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.sa-table-container .filter-row .filter-input:focus{border-color:#32a047!important;outline:none!important;box-shadow:inset 0 0 0 1px #32a047!important}.sa-table-container .filter-row .filter-input:focus-visible{border-color:#32a047!important;outline:none!important;box-shadow:inset 0 0 0 1px #32a047!important}.sa-table-container .filter-row .filter-input::placeholder{color:#6c757d;font-style:italic;font-size:11px!important}.sa-table-container .filter-row .filter-input:hover{border-color:#adb5bd}.sa-table-container .table>thead>tr>th,.sa-table-container .table.table-light>thead>tr>th,.sa-table-container .table-light>thead>tr>th,.sa-table-container .table thead th.table-light,.sa-table-container .table thead th{background-color:#e9ecef!important;background:#e9ecef!important;color:#555b5f!important;font-weight:600!important;font-size:11px!important}.sa-table-container .table>thead>tr>th:hover,.sa-table-container .table.table-light>thead>tr>th:hover,.sa-table-container .table-light>thead>tr>th:hover,.sa-table-container .table thead th.table-light:hover,.sa-table-container .table thead th:hover{background-color:#e9ecef!important;background:#e9ecef!important;color:#555b5f!important;font-size:11px!important}fa-icon{display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}fa-icon svg{fill:currentColor;width:1em;height:1em}fa-icon.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}fa-icon.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}fa-icon.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}fa-icon.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}fa-icon.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}fa-icon.fa-spin{animation:fa-spin 2s infinite linear}fa-icon.fa-pulse{animation:fa-pulse 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes fa-pulse{0%{opacity:1}50%{opacity:.25}to{opacity:1}}:host sa-button fa-icon,:host ::ng-deep sa-button fa-icon{display:inline-block!important;font-style:normal!important;font-variant:normal!important;text-rendering:auto!important;line-height:1!important;vertical-align:middle!important}:host sa-button fa-icon svg,:host ::ng-deep sa-button fa-icon svg{fill:currentColor!important;width:1em!important;height:1em!important;vertical-align:middle!important}:host sa-button,:host ::ng-deep sa-button{display:inline-flex!important;align-items:center!important;justify-content:center!important}:host sa-button .spinner-icon,:host ::ng-deep sa-button .spinner-icon{animation:fa-spin 1s infinite linear!important}:host sa-button .spinner-icon.spinning,:host ::ng-deep sa-button .spinner-icon.spinning{animation:fa-spin 1s infinite linear!important}.mt-custom-pagination{margin-top:8px!important}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-table', encapsulation: ViewEncapsulation.ShadowDom, template: "  <!-- Table Container -->\r\n  <div class=\"sa-table-container\">\r\n    \r\n    <!-- Table Content (siempre visible) -->\r\n    <div class=\"table-content\" [class.loading]=\"loading\">\r\n  \r\n  <!-- Table -->\r\n  <div class=\"table-responsive table-container\">\r\n    <table class=\"table\" \r\n           [class.table-hover]=\"hover\"\r\n           [style.min-width]=\"minWidth\">\r\n      <thead class=\"table-light\" [class.has-filters]=\"showFilters\">\r\n        <tr>\r\n          <th *ngFor=\"let column of columns\" \r\n              class=\"column-header\"\r\n              [style.width]=\"column.width\">\r\n            <div class=\"d-flex align-items-center justify-content-between\">\r\n              <span style=\"font-weight: 700 !important;\">{{ column.label }}</span>\r\n            </div>\r\n          </th>\r\n        </tr>\r\n        <!-- Fila de filtros -->\r\n        <tr *ngIf=\"showFilters\" class=\"filter-row\">\r\n          <th class=\"filter-row-th\" *ngFor=\"let column of columns\" \r\n              [style.width]=\"column.width\">\r\n            <input \r\n              *ngIf=\"!column.noFilter\"\r\n              type=\"text\" \r\n              class=\"form-control form-control-sm filter-input\"\r\n              [placeholder]=\"\"\r\n              [value]=\"columnFilters[column.key] || ''\"\r\n              (input)=\"onFilterInputChange($event, column.key)\"\r\n              />\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody [class.animate-fade-in]=\"animationKey > 0\" [class.animation-complete]=\"animationKey > 0\" [attr.data-animation-key]=\"animationKey\">\r\n        <tr *ngFor=\"let row of paginatedData; trackBy: trackByFn\"\r\n            [class.selected-row]=\"isRowSelected(row)\"\r\n            (click)=\"onRowClick(row)\"\r\n            (dblclick)=\"onRowDoubleClick(row)\">\r\n          <td *ngFor=\"let column of columns\" [style.width]=\"column.width\">\r\n            <!-- Usar template espec\u00EDfico de la columna si existe, sino usar el default -->\r\n            <ng-container *ngTemplateOutlet=\"getColumnTemplate(column.key) || defaultCellTemplate!; context: getTemplateContext(row, column)\">\r\n            </ng-container>\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"paginatedData.length === 0\">\r\n          <td [attr.colspan]=\"columns.length\" class=\"text-center py-4 text-muted\">\r\n            <div>\r\n              <p class=\"mb-2\" style=\"font-size: 14px !important;\">{{ emptyMessage }}</p>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    \r\n    <!-- Loading Overlay solo sobre la tabla -->\r\n    <div *ngIf=\"loading\" class=\"loading-overlay\">\r\n      <div class=\"loading-content\">\r\n        <div class=\"spinner-border text-primary\" role=\"status\">\r\n        </div>\r\n        <div class=\"loading-text\">Cargando...</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Items Per Page Selector and Pagination Controls (en una sola fila) -->\r\n  <div *ngIf=\"showPagination && paginatedData.length > 0\" class=\"d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center mt-2\">\r\n    <!-- Items Per Page Selector (izquierda) -->\r\n    <div *ngIf=\"showItemsPerPage && paginatedData.length > 0 && paginationInfo.totalItems >= 6\" \r\n         class=\"d-flex align-items-center mb-2 mb-md-0\"\r\n         [class.no-pagination]=\"paginationInfo.totalPages <= 1\">\r\n      <span class=\"text-muted me-2\" style=\"font-size: 12px !important;\">Registros por p\u00E1gina:</span>\r\n      <select \r\n        id=\"itemsPerPage\"\r\n        class=\"form-select form-select-sm sa-table-items-per-page\" \r\n        [value]=\"itemsPerPage\"\r\n        (change)=\"onSelectChange($event)\">\r\n        <option *ngFor=\"let option of itemsPerPageOptions\" [value]=\"option\">\r\n          {{ option }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    \r\n    <!-- Pagination Info and Controls (derecha) -->\r\n      <div class=\"d-flex flex-column flex-md-row align-items-center\">\r\n        <div *ngIf=\"showTotal && paginatedData.length > 0\" \r\n             class=\"text-muted mb-2 mb-md-0 me-md-3 text-center text-md-start\"\r\n             [class.mt-custom-pagination]=\"paginationInfo.totalItems < 6\"\r\n             style=\"font-size: 12px !important;\">\r\n          P\u00E1gina {{ paginationInfo.currentPage }}: {{ paginationInfo.startItem }}-{{ paginationInfo.endItem }} de {{ paginationInfo.totalItems }} registros\r\n        </div>\r\n      \r\n      <nav *ngIf=\"paginationInfo.totalPages > 1\" aria-label=\"Navegaci\u00F3n de p\u00E1ginas\">\r\n        <div class=\"pagination-controls d-flex align-items-center\">\r\n          <!-- First Page Button -->\r\n          <button *ngIf=\"showFirstLastButtons\" \r\n                  class=\"btn btn-outline-secondary btn-sm me-1\" \r\n                  (click)=\"onPageChange(1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"Primera p\u00E1gina\"\r\n                  title=\"Primera p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-first\">\u00AB</span>\r\n          </button>\r\n\r\n          <!-- Previous Button -->\r\n          <button class=\"btn btn-outline-secondary btn-sm me-2\" \r\n                  (click)=\"onPageChange(currentPage - 1)\"\r\n                  [disabled]=\"currentPage === 1\"\r\n                  aria-label=\"P\u00E1gina anterior\"\r\n                  title=\"P\u00E1gina anterior\">\r\n            <span class=\"pagination-icon\">\u2039</span>\r\n          </button>\r\n\r\n          <!-- Page Indicator -->\r\n          <!-- <span class=\"page-indicator mx-2 text-muted\">\r\n            {{ currentPage }} de {{ paginationInfo.totalPages }}\r\n          </span> -->\r\n\r\n          <!-- Next Button -->\r\n          <button class=\"btn btn-outline-secondary btn-sm ms-2\" \r\n                  (click)=\"onPageChange(currentPage + 1)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"P\u00E1gina siguiente\"\r\n                  title=\"P\u00E1gina siguiente\">\r\n            <span class=\"pagination-icon\">\u203A</span>\r\n          </button>\r\n\r\n          <!-- Last Page Button -->\r\n          <button *ngIf=\"showFirstLastButtons\" \r\n                  class=\"btn btn-outline-secondary btn-sm ms-1\" \r\n                  (click)=\"onPageChange(paginationInfo.totalPages)\"\r\n                  [disabled]=\"currentPage === paginationInfo.totalPages\"\r\n                  aria-label=\"\u00DAltima p\u00E1gina\"\r\n                  title=\"\u00DAltima p\u00E1gina\">\r\n            <span class=\"pagination-icon pagination-last\">\u00BB</span>\r\n          </button>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Template por defecto para celdas -->\r\n<ng-template #defaultCellTemplate let-row=\"row\" let-column=\"column\">\r\n  <ng-container *ngIf=\"row[column.key] !== undefined && row[column.key] !== null\">\r\n    {{ row[column.key] }}\r\n  </ng-container>\r\n</ng-template>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;contain:style;isolation:isolate}:host .sa-table-container{font-family:Nunito Sans,sans-serif}.d-flex{display:flex!important}.justify-content-between{justify-content:space-between!important}.justify-content-center{justify-content:center!important}@media (min-width: 768px){.justify-content-md-between{justify-content:space-between!important}}.align-items-center{align-items:center!important}.flex-column{flex-direction:column!important}@media (min-width: 768px){.flex-md-row{flex-direction:row!important}}.mb-3{margin-bottom:1rem!important}.mt-3{margin-top:1rem!important}.me-2{margin-right:.5rem!important}.text-muted{color:#6c757d!important}.text-center{text-align:center!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.form-select{display:block;width:100%;padding:.375rem 12px;font-size:1rem!important;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 12px center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:11px!important}.sa-table-items-per-page{width:auto!important;min-width:60px;max-width:120px;font-size:11px!important}.sa-table-items-per-page:focus{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-items-per-page:focus-visible{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-items-per-page:active{outline:none!important;box-shadow:none!important;border-color:#ced4da!important}.table{width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border:none!important}.table>:not(caption)>*>*{padding:.5rem;background-color:transparent;border:none!important;box-shadow:none!important}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-light{color:#000;background-color:#f8f9fa}.table-hover>tbody>tr:hover>*{background-color:#00000013;color:#000}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}.table-bordered>:not(caption)>*{border-width:0!important}.table-bordered>:not(caption)>*>*{border-width:0!important}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.text-primary{color:#0d6efd!important}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.375rem}.page-item{list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6}.page-item:first-child .page-link{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.page-item:last-child .page-link{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.mb-0{margin-bottom:0!important}@keyframes spinner-border{to{transform:rotate(360deg)}}.sa-table-container{position:relative;border-radius:.375rem;overflow:hidden;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sa-table-container .table-content{transition:opacity .3s ease}.sa-table-container .table-content.loading{opacity:.5;pointer-events:none}.sa-table-container .loading-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:#fffc;border-radius:.375rem;z-index:10;margin-top:0;margin-bottom:0}.sa-table-container .loading-overlay .loading-content{display:flex;flex-direction:column;align-items:center;gap:1rem}.sa-table-container .loading-overlay .loading-content .loading-text{color:#6c757d;font-size:11px!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sa-table-container .table-responsive{border-radius:.375rem;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;border:1px solid #e1e2e4!important}.sa-table-container .table{margin-bottom:0;border-radius:.375rem!important;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important;border:none!important}.sa-table-container .table th{cursor:default!important;-webkit-user-select:text!important;user-select:text!important;border-radius:0!important;border:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table th:first-child{border-top-left-radius:.375rem!important}.sa-table-container .table th:last-child{border-top-right-radius:.375rem!important}.sa-table-container .table th:hover{background-color:transparent!important}.sa-table-container .table td{border-bottom:1px solid #e1e2e4!important;border-right:none!important;text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody.animate-fade-in{animation:fadeIn .3s ease-out;animation-fill-mode:both}.sa-table-container .table tbody.animate-fade-in td{color:transparent!important;transition:color .3s ease-out}.sa-table-container .table tbody.animate-fade-in.animation-complete td{color:inherit!important}.sa-table-container .table tbody.animate-fade-in tr.selected-row td{color:#fff!important;transition:none!important;background-color:#1f8be1!important}.sa-table-container .table tbody.animate-fade-in tr.selected-row{background-color:#1f8be1!important}.sa-table-container .table tbody.animate-fade-in tr.selected-row td{background-color:#1f8be1!important;color:#fff!important}.sa-table-container .table thead th,.sa-table-container .table thead th:hover,.sa-table-container .table thead th:focus,.sa-table-container .table thead th:active,.sa-table-container .table.table-light thead th,.sa-table-container .table-light thead th{cursor:default!important;border-bottom:none!important;border-right:none!important;background-color:#e9ecef!important;background:#e9ecef!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:600!important;text-align:left!important;vertical-align:middle!important;color:#555b5f!important}.sa-table-container .table thead tr th,.sa-table-container .table thead tr th:hover,.sa-table-container .table thead tr th:focus,.sa-table-container .table thead tr th:active,.sa-table-container .table.table-light thead tr th,.sa-table-container .table-light thead tr th{background-color:#e9ecef!important;background:#e9ecef!important;border-bottom:none!important;border-right:none!important;border-radius:0!important;-webkit-user-select:text!important;user-select:text!important;font-weight:600!important;text-align:left!important;vertical-align:middle!important;color:#7e8386!important}.sa-table-container .table tbody tr td{text-align:left!important;vertical-align:middle!important}.sa-table-container .table tbody tr td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important;border-right:none!important}.sa-table-container .table>tbody>tr:last-child>td:first-child{border-bottom-left-radius:.375rem!important}.sa-table-container .table>tbody>tr:last-child>td:last-child{border-bottom-right-radius:.375rem!important}.sa-table-container .table>tbody>tr>td:first-child,.sa-table-container .table>thead>tr>th:first-child{padding-left:1rem!important}.sa-table-container .table.table-hover>tbody>tr:hover>td{background-color:#f8f9fa!important;font-size:11px!important}.sa-table-container .table.table-hover>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table.table-hover>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .table>tbody>tr.selected-row td{background-color:#1f8be1!important;color:#fff!important}.sa-table-container .table>tbody>tr.selected-row:hover td{background-color:#1f8be1!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover td{background-color:#fff!important}.sa-table-container .d-flex.justify-content-between.align-items-center.mt-3{margin-top:11px!important}.sa-table-container .pagination{margin-bottom:0;flex-wrap:nowrap!important;justify-content:flex-end;gap:.5rem;display:flex!important;align-items:center!important;flex-direction:row!important}.sa-table-container .pagination .page-link{border-radius:.25rem;border:1px solid #dddfe0;min-width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;padding:0;background-color:transparent;color:#5bab5f;font-size:1.125rem!important;text-align:center;line-height:1;width:2rem;box-sizing:border-box;letter-spacing:0;word-spacing:0;outline:none!important;cursor:pointer!important;font-size:.9rem!important;font-weight:500}.sa-table-container .pagination .page-link .pagination-icon{font-size:1.5rem!important;font-weight:500;line-height:0;display:flex;align-items:center;justify-content:center;margin:0;margin-top:-5px!important;padding:0;height:100%;width:100%}.sa-table-container .pagination .page-link:hover{background-color:#fff;border-color:#5bab5f;color:#5bab5f}.sa-table-container .pagination .page-link:focus{outline:none!important;box-shadow:none!important}.sa-table-container .pagination .page-item.active .page-link{background-color:#5bab5f;color:#fff;font-weight:500;border:none!important;cursor:pointer!important}.sa-table-container .pagination .page-item.active .page-link:hover{background-color:#5bab5f!important;color:#fff!important;border:none!important}.sa-table-container .pagination .page-item.disabled .page-link{color:#dee2e6;pointer-events:none;background-color:#fafafa;border-color:#dee2e6;cursor:not-allowed!important}.sa-table-container .pagination .page-item:first-child .page-link,.sa-table-container .pagination .page-item:last-child .page-link{min-width:2rem;width:2rem}.sa-table-container .pagination .page-link *{display:inline-block;vertical-align:middle}.sa-table-container .pagination-controls .form-select,.sa-table-container .table-controls .form-select{border-radius:.375rem;border:1px solid #ced4da!important;padding:.375rem 11px!important;font-size:11px!important;font-weight:400!important;line-height:1.5!important;color:#212529!important;background-color:#fff!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right 12px center!important;background-size:16px 11px!important;appearance:none!important;width:auto!important;min-width:70px!important;display:inline-block!important;outline:none!important}.sa-table-container .pagination-controls .form-select:focus,.sa-table-container .table-controls .form-select:focus{border-color:#ced4da!important;box-shadow:none!important;outline:none!important}.sa-table-container .pagination-controls .form-select:active,.sa-table-container .table-controls .form-select:active,.sa-table-container .pagination-controls .form-select:hover,.sa-table-container .table-controls .form-select:hover{outline:none!important;box-shadow:none!important}.sa-table-container .pagination-controls .form-select-sm,.sa-table-container .table-controls .form-select-sm{padding-top:.25rem!important;padding-bottom:.25rem!important;padding-left:.5rem!important;font-size:11px!important}.sa-table-container .table-container{position:relative}.sa-table-container .table-bordered{border:1px solid #e1e2e4!important;border-right:none!important}.sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(odd)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:nth-of-type(2n)>td{background-color:#fff!important}.sa-table-container .sa-table-container .table>tbody>tr:hover>td{background-color:#fff!important}@media (max-width: 768px){.sa-table-container .d-flex.justify-content-between{flex-direction:column}.sa-table-container .pagination{justify-content:center!important;flex-wrap:nowrap!important;display:flex!important;align-items:center!important;flex-direction:row!important}.sa-table-container .pagination .page-link{padding:.375rem .5rem;font-size:11px!important;min-width:2.5rem;height:2.5rem;border-radius:.25rem}.sa-table-container .pagination .page-item:has(.pagination-first),.sa-table-container .pagination .page-item:has(.pagination-last){display:none}}@media (max-width: 480px){.sa-table-container .pagination{gap:.125rem;flex-wrap:nowrap!important;display:flex!important;align-items:center!important;flex-direction:row!important}.sa-table-container .pagination .page-link{min-width:2.25rem;height:2.25rem;font-size:.8rem!important;padding:.25rem .375rem}}@media (min-width: 481px) and (max-width: 600px){.sa-table-container .pagination{gap:.375rem}}@media (min-width: 601px) and (max-width: 768px){.sa-table-container .pagination{gap:.5rem}}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"]{overflow:visible;padding:.5rem 0}nav[aria-label=\"Navegaci\\f3n de p\\e1ginas\"] .pagination{margin:0;padding:0}.sa-table-container .table.table-bordered{border:1px solid #e1e2e4!important}.sa-table-container .table.table-bordered>:not(caption)>*{border-width:0!important}.sa-table-container .table.table-bordered>:not(caption)>*>*{border-width:0!important}.sa-table-container .table>:not(caption)>*>*{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table{border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr>td{border:none!important;border-bottom:1px solid #e1e2e4!important;border-right:none!important;border-top:none!important;border-left:none!important;padding:.5rem!important;text-align:left!important;vertical-align:middle!important;font-size:11px!important}.sa-table-container .table>tbody>tr>td.text-center{text-align:center!important;vertical-align:middle!important;font-weight:400!important;color:#6c757d!important;padding:2rem .5rem!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover>td{background-color:#fff!important}.sa-table-container .table>tbody>tr>td.text-center:hover{background-color:#fff!important}.sa-table-container .table>thead>tr>th{border:none!important;padding:.3125rem .5rem!important;text-align:left!important;vertical-align:middle!important;background-color:#e9ecef!important;background:#e9ecef!important;color:#555b5f!important;font-weight:600!important;font-size:11px!important}.sa-table-container .table>tbody>tr:last-child>td{border-bottom:none!important}.sa-table-container .table,.sa-table-container .table>thead,.sa-table-container .table>tbody,.sa-table-container .table>tfoot,.sa-table-container .table>tr,.sa-table-container .table>th,.sa-table-container .table>td{border:none!important;border-collapse:collapse!important;border-spacing:0!important}.sa-table-container .table>tbody>tr:not(:last-child)>td{border-bottom:1px solid #e1e2e4!important;border-top:none!important;border-left:none!important;border-right:none!important}.sa-table-container .table-responsive{border:1px solid #e1e2e4!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch}.sa-table-container .table-responsive::-webkit-scrollbar{height:8px}.sa-table-container .table-responsive::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.sa-table-container .table-responsive::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.sa-table-container .table-responsive .table{width:100%}@media (max-width: 480px){.sa-table-container .table-responsive .table{min-width:400px!important}}.sa-table-container .table-container{border:1px solid #e1e2e4!important;border-radius:.375rem!important;overflow:hidden}.table-scrollable{overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:#c1c1c1 #f1f1f1}.table-scrollable .table{table-layout:fixed;width:100%}.table-scrollable .table th,.table-scrollable .table td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@keyframes fadeIn{0%{opacity:.8}to{opacity:1}}.sa-table-container .table>tbody>tr{cursor:pointer;transition:background-color .2s ease}.sa-table-container .table>tbody>tr:hover{background-color:#f8f9fa!important}.sa-table-container .table>tbody>tr:hover td{background-color:#f8f9fa!important;font-size:11px!important}.sa-table-container .table>tbody>tr.selected-row{background-color:#1f8be1!important}.sa-table-container .table>tbody>tr.selected-row td{background-color:#1f8be1!important;color:#fff!important;font-size:11px!important;transition:none!important}.sa-table-container .table>tbody>tr.selected-row:hover{background-color:#1f8be1!important}.sa-table-container .table>tbody>tr.selected-row:hover td{background-color:#1f8be1!important;color:#fff!important;font-size:11px!important}.sa-table-container .table>tbody>tr:has(td.text-center){cursor:default}.sa-table-container .table>tbody>tr:has(td.text-center):hover{background-color:#fff!important}.sa-table-container .table>tbody>tr:has(td.text-center):hover td{background-color:#fff!important;color:#6c757d!important}.sa-table-container .table>tbody>tr:has(td.text-center).selected-row{background-color:#fff!important}.sa-table-container .table>tbody>tr:has(td.text-center).selected-row td{background-color:#fff!important;color:#6c757d!important}.d-flex.flex-column.flex-md-row.justify-content-center.justify-content-md-between.align-items-center.mt-2{width:100%!important}@media (max-width: 767px){.d-flex.flex-column.flex-md-row.justify-content-center.justify-content-md-between.align-items-center.mt-2{justify-content:center!important;align-items:center!important}}@media (min-width: 768px){.d-flex.flex-column.flex-md-row.justify-content-center.justify-content-md-between.align-items-center.mt-2{justify-content:space-between!important;align-items:center!important}}@media (max-width: 767px){.d-flex.align-items-center.mb-2.mb-md-0{justify-content:center!important;margin-bottom:1rem!important}}@media (min-width: 768px){.d-flex.align-items-center.mb-2.mb-md-0{justify-content:flex-start!important;margin-bottom:0!important}}.d-flex.align-items-center.mb-2.mb-md-0.no-pagination{margin-top:10px!important}.pagination-controls{display:flex!important;align-items:center!important;gap:.5rem!important;flex-direction:row!important;flex-wrap:nowrap!important}.pagination-controls *{box-shadow:none!important;filter:none!important;text-shadow:none!important}.pagination-controls .btn{border-color:#cacaca;min-width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:.375rem;transition:none!important;background-color:transparent;box-shadow:none!important;filter:none!important;text-shadow:none!important;cursor:pointer!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important;-webkit-filter:none!important;-moz-filter:none!important;-ms-filter:none!important}.pagination-controls .btn .pagination-icon{font-size:16px!important;line-height:1;font-weight:700}.pagination-controls .btn:disabled{opacity:.3;cursor:not-allowed;background-color:transparent!important;border-color:#cacaca!important}.pagination-controls .btn:not(:disabled):hover{background-color:#32a047!important;border-color:#32a047!important;color:#fff!important}.pagination-controls .btn:not(:disabled):active{background-color:#32a047!important;border-color:#32a047!important;color:#fff!important;box-shadow:none!important;transform:none!important}.pagination-controls .btn:not(:disabled):hover{box-shadow:none!important}.pagination-controls .btn:focus,.pagination-controls .btn:focus-visible{box-shadow:none!important;outline:none!important}.pagination-controls .btn,.pagination-controls .btn:hover,.pagination-controls .btn:active,.pagination-controls .btn:focus,.pagination-controls .btn:focus-visible{box-shadow:none!important;filter:none!important;text-shadow:none!important;outline:none!important;border:1px solid #cacaca!important;cursor:pointer!important}.pagination-controls .btn:disabled{cursor:initial!important}.pagination-controls .page-indicator{font-size:11px!important;font-weight:500;white-space:nowrap;min-width:80px;text-align:center}@media (max-width: 767px){.d-flex.flex-column.flex-md-row.align-items-center{align-items:center!important;text-align:center!important}}@media (min-width: 768px){.d-flex.flex-column.flex-md-row.align-items-center{align-items:center!important;margin-left:auto!important}}@media (max-width: 767px){.text-muted.mb-2.mb-md-0.me-md-3.text-center.text-md-start{text-align:center!important;margin-right:0!important}}@media (min-width: 768px){.text-muted.mb-2.mb-md-0.me-md-3.text-center.text-md-start{text-align:start!important;margin-right:1rem!important}}@media (max-width: 576px){.pagination-controls{display:flex!important;align-items:center!important;gap:.25rem!important;flex-direction:row!important;flex-wrap:nowrap!important}.pagination-controls .btn{min-width:32px;height:32px}.pagination-controls .btn .pagination-icon{font-size:14px!important}.pagination-controls .page-indicator{font-size:11px!important;min-width:60px}}.sa-table-container .table .filter-row .filter-row-th{padding-top:0!important;padding-bottom:8px!important;font-weight:800px!important}.sa-table-container .table thead.has-filters th.column-header{padding-bottom:0!important}.sa-table-container .filter-row{border-spacing:1rem!important}.sa-table-container .filter-row th{background-color:#f8f9fa!important;border-bottom:1px solid #e1e2e4!important;border-top:none!important;padding:.25rem 1rem!important}.sa-table-container .filter-row th:hover{background-color:#f8f9fa!important}.sa-table-container .filter-row .filter-input{border:1px solid #ced4da;border-radius:.25rem;font-size:13px!important;padding:.25rem .5rem;background-color:#fff;color:#495057;width:calc(100% - 1rem)!important;margin:0!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.sa-table-container .filter-row .filter-input:focus{border-color:#32a047!important;outline:none!important;box-shadow:inset 0 0 0 1px #32a047!important}.sa-table-container .filter-row .filter-input:focus-visible{border-color:#32a047!important;outline:none!important;box-shadow:inset 0 0 0 1px #32a047!important}.sa-table-container .filter-row .filter-input::placeholder{color:#6c757d;font-style:italic;font-size:11px!important}.sa-table-container .filter-row .filter-input:hover{border-color:#adb5bd}.sa-table-container .table>thead>tr>th,.sa-table-container .table.table-light>thead>tr>th,.sa-table-container .table-light>thead>tr>th,.sa-table-container .table thead th.table-light,.sa-table-container .table thead th{background-color:#e9ecef!important;background:#e9ecef!important;color:#555b5f!important;font-weight:600!important;font-size:11px!important}.sa-table-container .table>thead>tr>th:hover,.sa-table-container .table.table-light>thead>tr>th:hover,.sa-table-container .table-light>thead>tr>th:hover,.sa-table-container .table thead th.table-light:hover,.sa-table-container .table thead th:hover{background-color:#e9ecef!important;background:#e9ecef!important;color:#555b5f!important;font-size:11px!important}fa-icon{display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}fa-icon svg{fill:currentColor;width:1em;height:1em}fa-icon.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}fa-icon.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}fa-icon.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}fa-icon.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}fa-icon.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}fa-icon.fa-spin{animation:fa-spin 2s infinite linear}fa-icon.fa-pulse{animation:fa-pulse 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes fa-pulse{0%{opacity:1}50%{opacity:.25}to{opacity:1}}:host sa-button fa-icon,:host ::ng-deep sa-button fa-icon{display:inline-block!important;font-style:normal!important;font-variant:normal!important;text-rendering:auto!important;line-height:1!important;vertical-align:middle!important}:host sa-button fa-icon svg,:host ::ng-deep sa-button fa-icon svg{fill:currentColor!important;width:1em!important;height:1em!important;vertical-align:middle!important}:host sa-button,:host ::ng-deep sa-button{display:inline-flex!important;align-items:center!important;justify-content:center!important}:host sa-button .spinner-icon,:host ::ng-deep sa-button .spinner-icon{animation:fa-spin 1s infinite linear!important}:host sa-button .spinner-icon.spinning,:host ::ng-deep sa-button .spinner-icon.spinning{animation:fa-spin 1s infinite linear!important}.mt-custom-pagination{margin-top:8px!important}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { columns: [{
                type: Input
            }], data: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], columnDefs: [{
                type: ContentChildren,
                args: [SaColumnDefDirective]
            }], defaultCellTemplate: [{
                type: ViewChild,
                args: ['defaultCellTemplate', { static: true }]
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
            }], showFilters: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], pageChange: [{
                type: Output
            }], itemsPerPageChange: [{
                type: Output
            }], sortChange: [{
                type: Output
            }], rowClick: [{
                type: Output
            }], rowDoubleClick: [{
                type: Output
            }], filterChange: [{
                type: Output
            }] } });

class SaTagComponent {
    // Propiedades con setters/getters para flexibilidad máxima
    _text = '';
    _type = 'primary';
    _size = 'medium';
    set text(value) {
        this._text = value || '';
    }
    get text() {
        return this._text;
    }
    set type(value) {
        this._type = value || 'primary';
    }
    get type() {
        return this._type;
    }
    set size(value) {
        this._size = value || 'medium';
    }
    get size() {
        return this._size;
    }
    get tagClasses() {
        const classes = [
            'tag',
            `tag-${this.type}`,
            this.getSizeClass()
        ];
        return classes.filter(Boolean).join(' ');
    }
    getSizeClass() {
        switch (this.size) {
            case 'small':
                return 'tag-sm';
            case 'medium':
                return 'tag-md';
            case 'large':
                return 'tag-lg';
            default:
                return 'tag-md';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTagComponent, selector: "sa-tag", inputs: { text: "text", type: "type", size: "size" }, host: { properties: { "class.tag-inline": "true" } }, ngImport: i0, template: "<span [class]=\"tagClasses\">\r\n  <span class=\"tag-text\">{{ text }}</span>\r\n</span>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle}:host.tag-inline{display:inline-block;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.tag{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;display:inline-flex;align-items:center;justify-content:center;border-radius:.375rem;font-weight:500;white-space:nowrap;transition:all .2s ease-in-out;vertical-align:middle;line-height:1;border:1px solid transparent}.tag .tag-text{display:inline-block;line-height:1}.tag.tag-sm{padding:.25rem .5rem;font-size:.75rem}.tag.tag-md{padding:.375rem .75rem;font-size:.875rem}.tag.tag-lg{padding:.5rem 1rem;font-size:1rem}.tag.tag-primary{background-color:#36ad55;color:#fff;border-color:#36ad55}.tag.tag-secondary{background-color:#fff;color:#00ab4a;border-color:#00ab4a}.tag.tag-success{background-color:#d3f7e3;color:#00ab4a;border-color:#00ab4a}.tag.tag-danger{background-color:#faeded;color:#dc3545;border-color:#dc3545}.tag.tag-warning{background-color:#fff3cd;color:#856404;border-color:#ffc107}.tag.tag-info{background-color:#dae9fc4a;color:#007bff;border-color:#007bff}.tag.tag-dark{background-color:#343a40;color:#fff;border-color:#343a40}.tag.tag-light{background-color:#f8f9fa;color:#495057;border-color:#dee2e6}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-tag', host: {
                        '[class.tag-inline]': 'true'
                    }, template: "<span [class]=\"tagClasses\">\r\n  <span class=\"tag-text\">{{ text }}</span>\r\n</span>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle}:host.tag-inline{display:inline-block;vertical-align:middle}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.tag{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;display:inline-flex;align-items:center;justify-content:center;border-radius:.375rem;font-weight:500;white-space:nowrap;transition:all .2s ease-in-out;vertical-align:middle;line-height:1;border:1px solid transparent}.tag .tag-text{display:inline-block;line-height:1}.tag.tag-sm{padding:.25rem .5rem;font-size:.75rem}.tag.tag-md{padding:.375rem .75rem;font-size:.875rem}.tag.tag-lg{padding:.5rem 1rem;font-size:1rem}.tag.tag-primary{background-color:#36ad55;color:#fff;border-color:#36ad55}.tag.tag-secondary{background-color:#fff;color:#00ab4a;border-color:#00ab4a}.tag.tag-success{background-color:#d3f7e3;color:#00ab4a;border-color:#00ab4a}.tag.tag-danger{background-color:#faeded;color:#dc3545;border-color:#dc3545}.tag.tag-warning{background-color:#fff3cd;color:#856404;border-color:#ffc107}.tag.tag-info{background-color:#dae9fc4a;color:#007bff;border-color:#007bff}.tag.tag-dark{background-color:#343a40;color:#fff;border-color:#343a40}.tag.tag-light{background-color:#f8f9fa;color:#495057;border-color:#dee2e6}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class SaLegendComponent {
    // Propiedades privadas
    _color = '#cccccc';
    _tooltip;
    _tooltipPosition = 'top';
    set color(value) {
        this._color = value || '#cccccc';
    }
    get color() {
        return this._color;
    }
    set tooltip(value) {
        this._tooltip = value;
    }
    get tooltip() {
        return this._tooltip;
    }
    set tooltipPosition(value) {
        this._tooltipPosition = value || 'top';
    }
    get tooltipPosition() {
        return this._tooltipPosition;
    }
    // Determinar si el tooltip necesita múltiples líneas
    get isLongTooltip() {
        if (!this.tooltip)
            return false;
        // Considerar texto largo si tiene más de 60 caracteres o contiene saltos de línea
        return this.tooltip.length > 60 || this.tooltip.includes('\n');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaLegendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaLegendComponent, selector: "sa-legend", inputs: { color: "color", tooltip: "tooltip", tooltipPosition: "tooltipPosition" }, host: { styleAttribute: "display: inline-block; vertical-align: middle;" }, ngImport: i0, template: "<div \r\n  class=\"legend-rectangle\"\r\n  [style.background-color]=\"color\"\r\n  [class.has-tooltip]=\"tooltip\">\r\n  \r\n  <!-- Tooltip personalizado (igual al de sa-button) -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";:host{display:inline-block;vertical-align:middle;margin:2px}.legend-rectangle{width:3.5rem;height:2rem;border-radius:3px;border:1px solid rgba(0,0,0,.1);position:relative;cursor:default;transition:all .2s ease-in-out}.legend-rectangle:hover{border-color:#0003;z-index:10000}.legend-rectangle.has-tooltip{overflow:visible}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.legend-rectangle.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaLegendComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-legend', host: {
                        'style': 'display: inline-block; vertical-align: middle;'
                    }, template: "<div \r\n  class=\"legend-rectangle\"\r\n  [style.background-color]=\"color\"\r\n  [class.has-tooltip]=\"tooltip\">\r\n  \r\n  <!-- Tooltip personalizado (igual al de sa-button) -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";:host{display:inline-block;vertical-align:middle;margin:2px}.legend-rectangle{width:3.5rem;height:2rem;border-radius:3px;border:1px solid rgba(0,0,0,.1);position:relative;cursor:default;transition:all .2s ease-in-out}.legend-rectangle:hover{border-color:#0003;z-index:10000}.legend-rectangle.has-tooltip{overflow:visible}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.legend-rectangle.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], tooltipPosition: [{
                type: Input
            }] } });

class SannaIconModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaIconModule, declarations: [SaIconComponent], imports: [CommonModule,
            SannaUiFontAwesomeModule], exports: [SaIconComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaIconModule, imports: [CommonModule,
            SannaUiFontAwesomeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SaIconComponent,
                    ],
                    imports: [
                        CommonModule,
                        SannaUiFontAwesomeModule,
                    ],
                    exports: [
                        SaIconComponent,
                    ]
                }]
        }] });

class SaInputComponent {
    cdr;
    value = '';
    type = 'text';
    placeholder = '';
    size = 'md';
    status = 'default';
    label = '';
    helperText = '';
    errorText = '';
    leftIcon = '';
    rightIcon = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    autocomplete = 'off';
    min = null;
    max = null;
    minlength = null;
    maxlength = null;
    pattern = '';
    backgroundColor = '';
    textColor = '';
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    showPassword = false;
    isFocused = false;
    styleLoaded = false;
    onChange = (_) => { };
    onTouched = () => { };
    constructor(cdr) {
        this.cdr = cdr;
    }
    get inputClasses() {
        const sizeMap = {
            'sm': 'form-control-sm',
            'md': '', // Bootstrap default
            'lg': 'form-control-lg'
        };
        const baseClasses = ['form-control'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
        }
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-label label-sm',
            'md': 'form-label label-md',
            'lg': 'form-label label-lg'
        };
        return sizeMap[this.size] || 'form-label label-md';
    }
    get inputGroupClasses() {
        const hasIcons = this.leftIcon || this.rightIcon || this.type === 'password';
        if (hasIcons) {
            const sizeMap = {
                'sm': 'input-group-sm',
                'md': '', // Bootstrap default
                'lg': 'input-group-lg'
            };
            const classes = ['input-group'];
            if (sizeMap[this.size] && sizeMap[this.size] !== '') {
                classes.push(sizeMap[this.size]);
            }
            return classes.join(' ');
        }
        return '';
    }
    get inputType() {
        if (this.type === 'password') {
            return this.showPassword ? 'text' : 'password';
        }
        return this.type;
    }
    get inputStyles() {
        const styles = {};
        if (this.backgroundColor) {
            styles['background-color'] = this.backgroundColor;
        }
        if (this.textColor) {
            styles['color'] = this.textColor;
        }
        return styles;
    }
    get helperTextClasses() {
        const baseClasses = ['form-text'];
        const sizeMap = {
            'sm': 'helper-text-sm',
            'md': 'helper-text-md',
            'lg': 'helper-text-lg'
        };
        if (sizeMap[this.size]) {
            baseClasses.push(sizeMap[this.size]);
        }
        return baseClasses.join(' ');
    }
    get errorTextClasses() {
        const baseClasses = ['invalid-feedback', 'd-block'];
        const sizeMap = {
            'sm': 'error-text-sm',
            'md': 'error-text-md',
            'lg': 'error-text-lg'
        };
        if (sizeMap[this.size]) {
            baseClasses.push(sizeMap[this.size]);
        }
        return baseClasses.join(' ');
    }
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
    onInputFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onInputBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    ngAfterViewInit() {
        // Marcar como cargado después de que los estilos se hayan aplicado
        setTimeout(() => {
            this.styleLoaded = true;
            this.cdr.detectChanges();
        }, 50); // Pequeño delay para asegurar que los estilos estén aplicados
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaInputComponent, selector: "sa-input", inputs: { value: "value", type: "type", placeholder: "placeholder", size: "size", status: "status", label: "label", helperText: "helperText", errorText: "errorText", leftIcon: "leftIcon", rightIcon: "rightIcon", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", autocomplete: "autocomplete", min: "min", max: "max", minlength: "minlength", maxlength: "maxlength", pattern: "pattern", backgroundColor: "backgroundColor", textColor: "textColor" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaInputComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"sa-input-container\" [class.sa-input-loading]=\"!styleLoaded\">\n  <!-- Estilos cr\u00EDticos inline para evitar FOUC -->\n  <style>\n    .sa-input-container {\n      display: block;\n      width: 100%;\n      font-family: 'Nunito Sans', sans-serif;\n      opacity: 1;\n      transition: opacity 0.15s ease-in-out;\n    }\n    .sa-input-loading {\n      opacity: 0.3;\n    }\n    .sa-input-skeleton .form-control {\n      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n      background-size: 200% 100%;\n      animation: skeleton-loading 1.5s infinite;\n      border: 1px solid #dee2e6;\n      border-radius: 0.375rem;\n      height: 38px;\n      width: 100%;\n    }\n    @keyframes skeleton-loading {\n      0% { background-position: 200% 0; }\n      100% { background-position: -200% 0; }\n    }\n  </style>\n  \n  <label *ngIf=\"label\" [for]=\"id\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\n  </label>\n\n  <div [class]=\"inputGroupClasses\">\n    <span *ngIf=\"leftIcon\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!leftIcon.includes('fa-')\" \n        [name]=\"leftIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"leftIcon.includes('fa-')\" \n        [class]=\"leftIcon\">\n      </i>\n    </span>\n\n    <input\n      [id]=\"id\"\n      [name]=\"name\"\n      [type]=\"inputType\"\n      [class]=\"inputClasses\"\n      [ngStyle]=\"inputStyles\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [autocomplete]=\"autocomplete\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [minlength]=\"minlength\"\n      [maxlength]=\"maxlength\"\n      [pattern]=\"pattern\"\n      spellcheck=\"false\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n    />\n\n    <span *ngIf=\"rightIcon && type !== 'password'\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!rightIcon.includes('fa-')\" \n        [name]=\"rightIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"rightIcon.includes('fa-')\" \n        [class]=\"rightIcon\">\n      </i>\n    </span>\n\n    <button\n      *ngIf=\"type === 'password'\"\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <sa-icon \n        [name]=\"showPassword ? 'eye-slash' : 'eye'\" \n        size=\"sm\">\n      </sa-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">{{ errorText }}</div>\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .sa-input-container{opacity:1;transition:opacity .15s ease-in-out}:host .sa-input-container.sa-input-loading{opacity:.7}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(input){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#10b981}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #10b981!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host .input-group>.form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}:host .input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group.input-group-sm>.form-control,:host .input-group.input-group-sm>.input-group-text{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.25rem}:host .input-group.input-group-lg>.form-control,:host .input-group.input-group-lg>.input-group-text{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .input-group-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;white-space:nowrap;background-color:#f8f9fa;border:1px solid #dee2e6;box-sizing:border-box;margin-bottom:0}:host .input-group-text:first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group-text:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-sm :host .input-group-text{padding:.25rem .5rem;font-size:.875rem}.input-group-lg :host .input-group-text{padding:.5rem 1rem;font-size:1.25rem}:host .btn-outline-secondary{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid #dee2e6;padding:.375rem .75rem;font-size:1rem;border-radius:.375rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;margin-bottom:0}.input-group :host .btn-outline-secondary:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .btn-outline-secondary:hover{background-color:#f8f9fa;border-color:#dee2e6;color:#495057}:host .btn-outline-secondary:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .btn-outline-secondary:disabled{opacity:.65;cursor:not-allowed}.input-group-sm :host .btn-outline-secondary{padding:.25rem .5rem;font-size:.875rem}.input-group-lg :host .btn-outline-secondary{padding:.5rem 1rem;font-size:1.25rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:2px}:host .form-text.helper-text-sm{font-size:12px}:host .form-text.helper-text-md{font-size:12px}:host .form-text.helper-text-lg{font-size:14px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:2px;color:#dc3545;display:block}:host .invalid-feedback.error-text-sm{font-size:12px}:host .invalid-feedback.error-text-md{font-size:12px}:host .invalid-feedback.error-text-lg{font-size:14px}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}:host i{font-style:normal;display:inline-block;width:1em;height:1em;vertical-align:middle}:host sa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon fa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon svg{display:inline-block;font-size:inherit;height:1em;width:1em;overflow:visible;vertical-align:-.125em}:host sa-icon[size=sm]{font-size:.875rem}:host sa-icon[size=sm] svg{height:.875em;width:.875em}:host sa-icon[size=md]{font-size:1rem}:host sa-icon[size=md] svg{height:1em;width:1em}:host sa-icon[size=lg]{font-size:1.25rem}:host sa-icon[size=lg] svg{height:1.25em;width:1.25em}:host .input-group-text i,:host .input-group-text sa-icon{display:flex;align-items:center;justify-content:center;width:1em;height:1em}:host .input-group-text i fa-icon,:host .input-group-text sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .input-group-text i svg,:host .input-group-text sa-icon svg{width:1em;height:1em}:host .input-group-sm .input-group-text sa-icon{font-size:.875rem}:host .input-group-sm .input-group-text sa-icon svg{width:.875em;height:.875em}:host .input-group-lg .input-group-text sa-icon{font-size:1.25rem}:host .input-group-lg .input-group-text sa-icon svg{width:1.25em;height:1.25em}:host .btn sa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon svg{display:block;margin:0 auto}:host .input-group-sm .btn sa-icon{font-size:.875rem}:host .input-group-sm .btn sa-icon svg{width:.875em;height:.875em}:host .input-group-lg .btn sa-icon{font-size:1.25rem}:host .input-group-lg .btn sa-icon svg{width:1.25em;height:1.25em}:host .input-group .btn-outline-secondary{min-height:calc(1.5em + .75rem + 2px);display:flex!important;align-items:center;justify-content:center}:host .input-group .btn-outline-secondary sa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon svg{display:block}:host .input-group-sm .btn-outline-secondary{min-height:calc(1.5em + .5rem + 2px)}:host .input-group-sm .btn-outline-secondary sa-icon{font-size:.875rem}:host .input-group-sm .btn-outline-secondary sa-icon svg{width:.875em;height:.875em}:host .input-group-lg .btn-outline-secondary{min-height:calc(1.5em + 1rem + 2px)}:host .input-group-lg .btn-outline-secondary sa-icon{font-size:1.25rem}:host .input-group-lg .btn-outline-secondary sa-icon svg{width:1.25em;height:1.25em}:host fa-icon{display:inline-block!important;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}:host .input-group-text:empty:before,:host .btn:empty:before{content:\"\\25ef\";color:#6c757d;font-size:inherit;display:inline-block;vertical-align:middle}:host .input-group-text:not(:empty):before,:host .btn:not(:empty):before{display:none}\n", "\n    .sa-input-container {\n      display: block;\n      width: 100%;\n      font-family: 'Nunito Sans', sans-serif;\n      opacity: 1;\n      transition: opacity 0.15s ease-in-out;\n    }\n    .sa-input-loading {\n      opacity: 0.3;\n    }\n    .sa-input-skeleton .form-control {\n      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n      background-size: 200% 100%;\n      animation: skeleton-loading 1.5s infinite;\n      border: 1px solid #dee2e6;\n      border-radius: 0.375rem;\n      height: 38px;\n      width: 100%;\n    }\n    @keyframes skeleton-loading {\n      0% { background-position: 200% 0; }\n      100% { background-position: -200% 0; }\n    }\n  "], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: SaIconComponent, selector: "sa-icon", inputs: ["name", "color", "size"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"sa-input-container\" [class.sa-input-loading]=\"!styleLoaded\">\n  <!-- Estilos cr\u00EDticos inline para evitar FOUC -->\n  <style>\n    .sa-input-container {\n      display: block;\n      width: 100%;\n      font-family: 'Nunito Sans', sans-serif;\n      opacity: 1;\n      transition: opacity 0.15s ease-in-out;\n    }\n    .sa-input-loading {\n      opacity: 0.3;\n    }\n    .sa-input-skeleton .form-control {\n      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n      background-size: 200% 100%;\n      animation: skeleton-loading 1.5s infinite;\n      border: 1px solid #dee2e6;\n      border-radius: 0.375rem;\n      height: 38px;\n      width: 100%;\n    }\n    @keyframes skeleton-loading {\n      0% { background-position: 200% 0; }\n      100% { background-position: -200% 0; }\n    }\n  </style>\n  \n  <label *ngIf=\"label\" [for]=\"id\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\n  </label>\n\n  <div [class]=\"inputGroupClasses\">\n    <span *ngIf=\"leftIcon\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!leftIcon.includes('fa-')\" \n        [name]=\"leftIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"leftIcon.includes('fa-')\" \n        [class]=\"leftIcon\">\n      </i>\n    </span>\n\n    <input\n      [id]=\"id\"\n      [name]=\"name\"\n      [type]=\"inputType\"\n      [class]=\"inputClasses\"\n      [ngStyle]=\"inputStyles\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [autocomplete]=\"autocomplete\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [minlength]=\"minlength\"\n      [maxlength]=\"maxlength\"\n      [pattern]=\"pattern\"\n      spellcheck=\"false\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n    />\n\n    <span *ngIf=\"rightIcon && type !== 'password'\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!rightIcon.includes('fa-')\" \n        [name]=\"rightIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"rightIcon.includes('fa-')\" \n        [class]=\"rightIcon\">\n      </i>\n    </span>\n\n    <button\n      *ngIf=\"type === 'password'\"\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <sa-icon \n        [name]=\"showPassword ? 'eye-slash' : 'eye'\" \n        size=\"sm\">\n      </sa-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">{{ errorText }}</div>\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .sa-input-container{opacity:1;transition:opacity .15s ease-in-out}:host .sa-input-container.sa-input-loading{opacity:.7}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(input){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#10b981}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #10b981!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host .input-group>.form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}:host .input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group.input-group-sm>.form-control,:host .input-group.input-group-sm>.input-group-text{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.25rem}:host .input-group.input-group-lg>.form-control,:host .input-group.input-group-lg>.input-group-text{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .input-group-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;white-space:nowrap;background-color:#f8f9fa;border:1px solid #dee2e6;box-sizing:border-box;margin-bottom:0}:host .input-group-text:first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group-text:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-sm :host .input-group-text{padding:.25rem .5rem;font-size:.875rem}.input-group-lg :host .input-group-text{padding:.5rem 1rem;font-size:1.25rem}:host .btn-outline-secondary{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid #dee2e6;padding:.375rem .75rem;font-size:1rem;border-radius:.375rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;margin-bottom:0}.input-group :host .btn-outline-secondary:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .btn-outline-secondary:hover{background-color:#f8f9fa;border-color:#dee2e6;color:#495057}:host .btn-outline-secondary:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .btn-outline-secondary:disabled{opacity:.65;cursor:not-allowed}.input-group-sm :host .btn-outline-secondary{padding:.25rem .5rem;font-size:.875rem}.input-group-lg :host .btn-outline-secondary{padding:.5rem 1rem;font-size:1.25rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:2px}:host .form-text.helper-text-sm{font-size:12px}:host .form-text.helper-text-md{font-size:12px}:host .form-text.helper-text-lg{font-size:14px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:2px;color:#dc3545;display:block}:host .invalid-feedback.error-text-sm{font-size:12px}:host .invalid-feedback.error-text-md{font-size:12px}:host .invalid-feedback.error-text-lg{font-size:14px}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}:host i{font-style:normal;display:inline-block;width:1em;height:1em;vertical-align:middle}:host sa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon fa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon svg{display:inline-block;font-size:inherit;height:1em;width:1em;overflow:visible;vertical-align:-.125em}:host sa-icon[size=sm]{font-size:.875rem}:host sa-icon[size=sm] svg{height:.875em;width:.875em}:host sa-icon[size=md]{font-size:1rem}:host sa-icon[size=md] svg{height:1em;width:1em}:host sa-icon[size=lg]{font-size:1.25rem}:host sa-icon[size=lg] svg{height:1.25em;width:1.25em}:host .input-group-text i,:host .input-group-text sa-icon{display:flex;align-items:center;justify-content:center;width:1em;height:1em}:host .input-group-text i fa-icon,:host .input-group-text sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .input-group-text i svg,:host .input-group-text sa-icon svg{width:1em;height:1em}:host .input-group-sm .input-group-text sa-icon{font-size:.875rem}:host .input-group-sm .input-group-text sa-icon svg{width:.875em;height:.875em}:host .input-group-lg .input-group-text sa-icon{font-size:1.25rem}:host .input-group-lg .input-group-text sa-icon svg{width:1.25em;height:1.25em}:host .btn sa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon svg{display:block;margin:0 auto}:host .input-group-sm .btn sa-icon{font-size:.875rem}:host .input-group-sm .btn sa-icon svg{width:.875em;height:.875em}:host .input-group-lg .btn sa-icon{font-size:1.25rem}:host .input-group-lg .btn sa-icon svg{width:1.25em;height:1.25em}:host .input-group .btn-outline-secondary{min-height:calc(1.5em + .75rem + 2px);display:flex!important;align-items:center;justify-content:center}:host .input-group .btn-outline-secondary sa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon svg{display:block}:host .input-group-sm .btn-outline-secondary{min-height:calc(1.5em + .5rem + 2px)}:host .input-group-sm .btn-outline-secondary sa-icon{font-size:.875rem}:host .input-group-sm .btn-outline-secondary sa-icon svg{width:.875em;height:.875em}:host .input-group-lg .btn-outline-secondary{min-height:calc(1.5em + 1rem + 2px)}:host .input-group-lg .btn-outline-secondary sa-icon{font-size:1.25rem}:host .input-group-lg .btn-outline-secondary sa-icon svg{width:1.25em;height:1.25em}:host fa-icon{display:inline-block!important;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}:host .input-group-text:empty:before,:host .btn:empty:before{content:\"\\25ef\";color:#6c757d;font-size:inherit;display:inline-block;vertical-align:middle}:host .input-group-text:not(:empty):before,:host .btn:not(:empty):before{display:none}\n", "\n    .sa-input-container {\n      display: block;\n      width: 100%;\n      font-family: 'Nunito Sans', sans-serif;\n      opacity: 1;\n      transition: opacity 0.15s ease-in-out;\n    }\n    .sa-input-loading {\n      opacity: 0.3;\n    }\n    .sa-input-skeleton .form-control {\n      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n      background-size: 200% 100%;\n      animation: skeleton-loading 1.5s infinite;\n      border: 1px solid #dee2e6;\n      border-radius: 0.375rem;\n      height: 38px;\n      width: 100%;\n    }\n    @keyframes skeleton-loading {\n      0% { background-position: 200% 0; }\n      100% { background-position: -200% 0; }\n    }\n  "] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { value: [{
                type: Input
            }], type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], leftIcon: [{
                type: Input
            }], rightIcon: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minlength: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], pattern: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], textColor: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class SaSelectComponent {
    value = '';
    options = [];
    size = 'md';
    status = 'default';
    label = '';
    helperText = '';
    errorText = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    placeholder = '--Seleccione--';
    showPlaceholder = true;
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    isFocused = false;
    onChange = (_) => { };
    onTouched = () => { };
    get selectClasses() {
        const sizeMap = {
            'sm': 'form-select-sm',
            'md': '', // Bootstrap default
            'lg': 'form-select-lg'
        };
        const baseClasses = ['form-select'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
        }
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-label label-sm',
            'md': 'form-label label-md',
            'lg': 'form-label label-lg'
        };
        return sizeMap[this.size] || 'form-label label-md';
    }
    get hasValidSelection() {
        if (!this.showPlaceholder)
            return true;
        return this.value !== '' && this.value !== null && this.value !== undefined;
    }
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
    onSelectFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onSelectBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaSelectComponent, selector: "sa-select", inputs: { value: "value", options: "options", size: "size", status: "status", label: "label", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", placeholder: "placeholder", showPlaceholder: "showPlaceholder" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaSelectComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"label\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focus)=\"onSelectFocus($event)\"\r\n    (blur)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"option.value\"\r\n      [disabled]=\"option.disabled\"\r\n    >\r\n      {{ option.label }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 1.75rem 4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem;background-position:right .5rem center;background-size:12px 9px}:host .form-select.form-select-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 3rem .5rem 1rem;font-size:1.25rem;border-radius:.5rem;background-position:right 1rem center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:.375rem .75rem}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-select', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaSelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"mb-3\">\r\n  <label *ngIf=\"label\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n  </label>\r\n  \r\n  <select\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"selectClasses\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [required]=\"required\"\r\n    [disabled]=\"disabled || readonly\"\r\n    (focus)=\"onSelectFocus($event)\"\r\n    (blur)=\"onSelectBlur($event)\"\r\n  >\r\n    <option *ngIf=\"showPlaceholder\" value=\"\" [disabled]=\"required\">\r\n      {{ placeholder }}\r\n    </option>\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      [value]=\"option.value\"\r\n      [disabled]=\"option.disabled\"\r\n    >\r\n      {{ option.label }}\r\n    </option>\r\n  </select>\r\n  \r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-select{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;appearance:none}:host .form-select:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-select:focus-visible{outline:none!important;box-shadow:none!important}:host .form-select:disabled{background-color:#e9ecef;opacity:1}:host .form-select.is-valid{border-color:#10b981}:host .form-select.is-valid:focus,:host .form-select.is-valid:focus-visible{border-color:#10b981!important;outline:none!important;box-shadow:none!important}:host .form-select.is-invalid{border-color:#ef4444}:host .form-select.is-invalid:focus,:host .form-select.is-invalid:focus-visible{border-color:#ef4444!important;outline:none!important;box-shadow:none!important}:host .form-select.form-select-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 1.75rem 4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem;background-position:right .5rem center;background-size:12px 9px}:host .form-select.form-select-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 3rem .5rem 1rem;font-size:1.25rem;border-radius:.5rem;background-position:right 1rem center;background-size:20px 15px}:host option{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;background-color:#fff;padding:.375rem .75rem}:host option:disabled{color:#6c757d;background-color:#f8f9fa}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host :last-child{margin-bottom:0!important}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], options: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], showPlaceholder: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class SaTextareaComponent {
    value = '';
    size = 'md';
    status = 'default';
    label = '';
    placeholder = '';
    helperText = '';
    errorText = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    rows = 3;
    cols = 50;
    minlength = null;
    maxlength = null;
    resize = 'vertical';
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    isFocused = false;
    onChange = (_) => { };
    onTouched = () => { };
    get textareaClasses() {
        const sizeMap = {
            'sm': 'form-control-sm',
            'md': '', // Bootstrap default
            'lg': 'form-control-lg'
        };
        const baseClasses = ['form-control'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
        }
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-label label-sm',
            'md': 'form-label label-md',
            'lg': 'form-label label-lg'
        };
        return sizeMap[this.size] || 'form-label label-md';
    }
    get textareaStyles() {
        return {
            resize: this.resize
        };
    }
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
    onModelChange(value) {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(value);
    }
    onTextareaFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onTextareaBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTextareaComponent, selector: "sa-textarea", inputs: { value: "value", size: "size", status: "status", label: "label", placeholder: "placeholder", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", rows: "rows", cols: "cols", minlength: "minlength", maxlength: "maxlength", resize: "resize" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaTextareaComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"\">\r\n  <label *ngIf=\"label\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focus)=\"onTextareaFocus($event)\"\r\n    (blur)=\"onTextareaBlur($event)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#10b981}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #10b981!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-textarea', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaTextareaComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <label *ngIf=\"label\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focus)=\"onTextareaFocus($event)\"\r\n    (blur)=\"onTextareaBlur($event)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#10b981}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #10b981!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }], minlength: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], resize: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class SaCheckboxComponent {
    checked = false;
    size = 'md';
    status = 'default';
    label = '';
    helperText = '';
    errorText = '';
    required = false;
    disabled = false;
    readonly = false;
    id = '';
    name = '';
    value = '';
    indeterminate = false;
    checkedChange = new EventEmitter();
    change = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    isFocused = false;
    _generatedId;
    onChange = (_) => { };
    onTouched = () => { };
    constructor() {
        this._generatedId = `sa-checkbox-${Math.random().toString(36).substr(2, 9)}`;
    }
    get checkboxId() {
        return this.id || this._generatedId;
    }
    get checkboxClasses() {
        const sizeMap = {
            'sm': 'form-check-sm',
            'md': '', // Bootstrap default
            'lg': 'form-check-lg'
        };
        const baseClasses = ['form-check-input'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            // Note: Bootstrap doesn't have built-in size classes for checkboxes
            // We'll handle this in CSS
        }
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-check-label label-sm',
            'md': 'form-check-label label-md',
            'lg': 'form-check-label label-lg'
        };
        return sizeMap[this.size] || 'form-check-label label-md';
    }
    get containerClasses() {
        const sizeMap = {
            'sm': 'form-check-sm',
            'md': '', // Bootstrap default
            'lg': 'form-check-lg'
        };
        const baseClasses = ['form-check'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
        }
        return baseClasses.join(' ');
    }
    writeValue(value) {
        this.checked = !!value;
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
    onCheckboxChange(event) {
        const target = event.target;
        this.checked = target.checked;
        this.onChange(this.checked);
        this.checkedChange.emit(this.checked);
        this.change.emit(event);
    }
    onCheckboxFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onCheckboxBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaCheckboxComponent, selector: "sa-checkbox", inputs: { checked: "checked", size: "size", status: "status", label: "label", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", readonly: "readonly", id: "id", name: "name", value: "value", indeterminate: "indeterminate" }, outputs: { checkedChange: "checkedChange", change: "change", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaCheckboxComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"sa-checkbox-wrapper\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"checkboxId\"\r\n      [name]=\"name\"\r\n      [class]=\"checkboxClasses\"\r\n      type=\"checkbox\"\r\n      [checked]=\"checked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [indeterminate]=\"indeterminate\"\r\n      (change)=\"onCheckboxChange($event)\"\r\n      (focus)=\"onCheckboxFocus($event)\"\r\n      (blur)=\"onCheckboxBlur($event)\"\r\n    />\r\n    <label *ngIf=\"label\" [for]=\"checkboxId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box;vertical-align:top;margin-right:1rem;margin-bottom:.5rem}:host .sa-checkbox-wrapper{width:auto;box-sizing:border-box;margin-bottom:0;height:auto}:host .sa-checkbox-wrapper:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:14px;height:14px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:.25em;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input:indeterminate{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10h8'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:12px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:12px!important;height:12px!important;border-radius:.2em}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:18px!important;height:18px!important;border-radius:.3em}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:14px!important;height:14px!important;border-radius:.25em}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:12px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-checkbox', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaCheckboxComponent),
                            multi: true
                        }
                    ], template: "<div class=\"sa-checkbox-wrapper\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"checkboxId\"\r\n      [name]=\"name\"\r\n      [class]=\"checkboxClasses\"\r\n      type=\"checkbox\"\r\n      [checked]=\"checked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [indeterminate]=\"indeterminate\"\r\n      (change)=\"onCheckboxChange($event)\"\r\n      (focus)=\"onCheckboxFocus($event)\"\r\n      (blur)=\"onCheckboxBlur($event)\"\r\n    />\r\n    <label *ngIf=\"label\" [for]=\"checkboxId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box;vertical-align:top;margin-right:1rem;margin-bottom:.5rem}:host .sa-checkbox-wrapper{width:auto;box-sizing:border-box;margin-bottom:0;height:auto}:host .sa-checkbox-wrapper:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:14px;height:14px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:.25em;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input:indeterminate{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10h8'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:12px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:12px!important;height:12px!important;border-radius:.2em}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:18px!important;height:18px!important;border-radius:.3em}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:14px!important;height:14px!important;border-radius:.25em}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:12px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { checked: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class SaRadioComponent {
    value = '';
    size = 'md';
    status = 'default';
    label = '';
    helperText = '';
    errorText = '';
    required = false;
    disabled = false;
    readonly = false;
    id = '';
    name = '';
    valueChange = new EventEmitter();
    change = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    selectedValue = null;
    isFocused = false;
    _generatedId;
    onChange = (_) => { };
    onTouched = () => { };
    constructor() {
        this._generatedId = `sa-radio-${Math.random().toString(36).substr(2, 9)}`;
    }
    get radioId() {
        return this.id || this._generatedId;
    }
    get isChecked() {
        return this.selectedValue === this.value;
    }
    get radioClasses() {
        const sizeMap = {
            'sm': 'form-check-sm',
            'md': '', // Bootstrap default
            'lg': 'form-check-lg'
        };
        const baseClasses = ['form-check-input'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            // Note: Bootstrap doesn't have built-in size classes for radios
            // We'll handle this in CSS
        }
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-check-label label-sm',
            'md': 'form-check-label label-md',
            'lg': 'form-check-label label-lg'
        };
        return sizeMap[this.size] || 'form-check-label label-md';
    }
    get containerClasses() {
        const sizeMap = {
            'sm': 'form-check-sm',
            'md': '', // Bootstrap default
            'lg': 'form-check-lg'
        };
        const baseClasses = ['form-check'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
        }
        return baseClasses.join(' ');
    }
    writeValue(value) {
        this.selectedValue = value;
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
    onRadioChange(event) {
        const target = event.target;
        if (target.checked) {
            this.selectedValue = this.value;
            this.onChange(this.selectedValue);
            this.valueChange.emit(this.selectedValue);
            this.change.emit(event);
        }
    }
    onRadioFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onRadioBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaRadioComponent, selector: "sa-radio", inputs: { value: "value", size: "size", status: "status", label: "label", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", readonly: "readonly", id: "id", name: "name" }, outputs: { valueChange: "valueChange", change: "change", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaRadioComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"radioId\"\r\n      [name]=\"name\"\r\n      [class]=\"radioClasses\"\r\n      type=\"radio\"\r\n      [checked]=\"isChecked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      (change)=\"onRadioChange($event)\"\r\n      (focus)=\"onRadioFocus($event)\"\r\n      (blur)=\"onRadioBlur($event)\"\r\n    />\r\n    <label *ngIf=\"label\" [for]=\"radioId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:auto;box-sizing:border-box}:host:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:16px;height:16px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:50%;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:14px!important;height:14px!important}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:20px!important;height:20px!important}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:16px!important;height:16px!important}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:14px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-radio', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaRadioComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <div [class]=\"containerClasses\">\r\n    <input\r\n      [id]=\"radioId\"\r\n      [name]=\"name\"\r\n      [class]=\"radioClasses\"\r\n      type=\"radio\"\r\n      [checked]=\"isChecked\"\r\n      [value]=\"value\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      (change)=\"onRadioChange($event)\"\r\n      (focus)=\"onRadioFocus($event)\"\r\n      (blur)=\"onRadioBlur($event)\"\r\n    />\r\n    <label *ngIf=\"label\" [for]=\"radioId\" [class]=\"labelClasses\">\r\n      {{ label }}\r\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;width:auto;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:auto;box-sizing:border-box}:host:last-child{margin-bottom:0}:host .form-check{display:flex!important;align-items:center!important;min-height:auto;padding-left:0!important;margin-bottom:0;position:relative;gap:.5rem}:host .form-check-input{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;width:16px;height:16px;margin:0!important;flex-shrink:0;position:static!important;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #dee2e6;border-radius:50%;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact}:host .form-check-input:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .form-check-input:disabled{opacity:.5;cursor:not-allowed}:host .form-check-input:disabled~.form-check-label{opacity:.5;cursor:not-allowed}:host .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-valid{border-color:#32a047}:host .form-check-input.is-valid:focus{outline:none!important;box-shadow:none!important;border-color:#32a047!important}:host .form-check-input.is-valid:checked{background-color:#32a047!important;border-color:#32a047!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")!important}:host .form-check-input.is-invalid{border-color:#ef4444}:host .form-check-input.is-invalid:focus{outline:none!important;box-shadow:none!important;border-color:#ef4444!important}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer;display:flex;align-items:center;margin:0!important;line-height:1.2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-sm{align-items:center}:host .form-check-sm .form-check-input{width:14px!important;height:14px!important}:host .form-check-sm .form-check-label{font-size:11px!important;line-height:1.2}:host .form-check-lg{align-items:center}:host .form-check-lg .form-check-input{width:20px!important;height:20px!important}:host .form-check-lg .form-check-label{font-size:16px!important;line-height:1.2}:host .form-check:not(.form-check-sm):not(.form-check-lg){align-items:center}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-input{width:16px!important;height:16px!important}:host .form-check:not(.form-check-sm):not(.form-check-lg) .form-check-label{font-size:14px!important;line-height:1.2}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:1.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:1.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class SaDateComponent {
    value = '';
    size = 'md';
    status = 'default';
    label = '';
    placeholder = '';
    helperText = '';
    errorText = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    min = '';
    max = '';
    blockFutureDates = false;
    showCurrentDate = false;
    valueChange = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    dateInput;
    isFocused = false;
    _generatedId;
    onChange = (_) => { };
    onTouched = () => { };
    constructor() {
        this._generatedId = `sa-date-${Math.random().toString(36).substr(2, 9)}`;
        // Si showCurrentDate está habilitado, establecer fecha actual
        if (this.showCurrentDate && !this.value) {
            this.value = this.getCurrentDateISO();
        }
    }
    ngOnInit() {
        // Configurar límites de fecha
        if (this.blockFutureDates && !this.max) {
            this.max = this.getCurrentDateISO();
        }
        // Si showCurrentDate está habilitado y no hay valor, establecer fecha actual
        if (this.showCurrentDate && !this.value) {
            this.value = this.getCurrentDateISO();
            this.onChange(this.value);
        }
    }
    get dateId() {
        return this.id || this._generatedId;
    }
    get inputClasses() {
        const sizeMap = {
            'sm': 'form-control-sm',
            'md': '', // Bootstrap default
            'lg': 'form-control-lg'
        };
        const baseClasses = ['form-control'];
        if (sizeMap[this.size] && sizeMap[this.size] !== '') {
            baseClasses.push(sizeMap[this.size]);
        }
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-label label-sm',
            'md': 'form-label label-md',
            'lg': 'form-label label-lg'
        };
        return sizeMap[this.size] || 'form-label label-md';
    }
    getCurrentDateISO() {
        const today = new Date();
        return today.toISOString().split('T')[0];
    }
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
    onModelChange(value) {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(value);
    }
    onInputFocus(event) {
        this.isFocused = true;
        this.focus.emit(event);
    }
    onInputBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }
    openCalendar(event) {
        // Prevenir propagación del evento
        event.preventDefault();
        event.stopPropagation();
        // Si el input no está deshabilitado ni en solo lectura
        if (!this.disabled && !this.readonly) {
            // Usar ViewChild para acceder al input
            const inputElement = this.dateInput?.nativeElement;
            if (inputElement) {
                // Enfocar el input primero
                inputElement.focus();
                // Intentar abrir el calendario programáticamente
                try {
                    inputElement.showPicker();
                }
                catch (error) {
                    // Fallback: simular click en el input
                    inputElement.click();
                }
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaDateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaDateComponent, selector: "sa-date", inputs: { value: "value", size: "size", status: "status", label: "label", placeholder: "placeholder", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", min: "min", max: "max", blockFutureDates: "blockFutureDates", showCurrentDate: "showCurrentDate" }, outputs: { valueChange: "valueChange", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaDateComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "dateInput", first: true, predicate: ["dateInput"], descendants: true }], ngImport: i0, template: "<div class=\"\">\n  <label *ngIf=\"label\" [for]=\"dateId\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\n  </label>\n\n  <div class=\"position-relative\">\n    <input\n      #dateInput\n      [id]=\"dateId\"\n      [name]=\"name\"\n      [class]=\"inputClasses\"\n      type=\"date\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [min]=\"min\"\n      [max]=\"max\"\n      spellcheck=\"false\"\n      autocomplete=\"off\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n      (click)=\"openCalendar($event)\"\n    />\n    <!-- Icono personalizado del calendario como fallback -->\n    <div class=\"calendar-icon\" \n         [class.disabled]=\"disabled || readonly\"\n         (click)=\"openCalendar($event)\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n        <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line>\n        <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line>\n        <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>\n      </svg>\n    </div>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .position-relative{position:relative}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;cursor:pointer;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1;cursor:default}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#32a047}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #32a047!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .form-control[type=date]::-webkit-calendar-picker-indicator{display:none!important;opacity:0!important;visibility:hidden!important}:host .form-control[type=date]::-moz-calendar-picker-indicator{display:none!important;opacity:0!important;visibility:hidden!important}:host .form-control[type=date]::-ms-calendar-picker-indicator{display:none!important;opacity:0!important;visibility:hidden!important}:host .calendar-icon{position:absolute;top:50%;right:.75rem;transform:translateY(-50%);width:20px;height:20px;cursor:pointer;pointer-events:all;z-index:10;display:flex;align-items:center;justify-content:center;color:#6c757d;transition:color .15s ease-in-out}:host .calendar-icon svg{width:16px;height:16px;stroke:currentColor}:host .calendar-icon:hover{color:#495057}:host .calendar-icon.disabled{color:#adb5bd;cursor:default;pointer-events:none}:host .form-control[type=date]{padding-right:2.5rem!important}:host .form-control[type=date].form-control-sm{padding-right:2.25rem!important}:host .form-control[type=date].form-control-lg{padding-right:3rem!important}:host .form-control-sm~.calendar-icon{right:.5rem;width:18px;height:18px}:host .form-control-sm~.calendar-icon svg{width:14px;height:14px}:host .form-control-lg~.calendar-icon{right:1rem;width:24px;height:24px}:host .form-control-lg~.calendar-icon svg{width:20px;height:20px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaDateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-date', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaDateComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\n  <label *ngIf=\"label\" [for]=\"dateId\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"text-danger\">*</span>\n  </label>\n\n  <div class=\"position-relative\">\n    <input\n      #dateInput\n      [id]=\"dateId\"\n      [name]=\"name\"\n      [class]=\"inputClasses\"\n      type=\"date\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [min]=\"min\"\n      [max]=\"max\"\n      spellcheck=\"false\"\n      autocomplete=\"off\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n      (click)=\"openCalendar($event)\"\n    />\n    <!-- Icono personalizado del calendario como fallback -->\n    <div class=\"calendar-icon\" \n         [class.disabled]=\"disabled || readonly\"\n         (click)=\"openCalendar($event)\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n        <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line>\n        <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line>\n        <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>\n      </svg>\n    </div>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\n</div>\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .position-relative{position:relative}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;cursor:pointer;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 2px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1;cursor:default}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#32a047}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #32a047!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 2px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:4.125px 8.25px!important;font-size:11px!important;border-radius:.25rem}:host .form-control.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}:host .form-control[type=date]::-webkit-calendar-picker-indicator{display:none!important;opacity:0!important;visibility:hidden!important}:host .form-control[type=date]::-moz-calendar-picker-indicator{display:none!important;opacity:0!important;visibility:hidden!important}:host .form-control[type=date]::-ms-calendar-picker-indicator{display:none!important;opacity:0!important;visibility:hidden!important}:host .calendar-icon{position:absolute;top:50%;right:.75rem;transform:translateY(-50%);width:20px;height:20px;cursor:pointer;pointer-events:all;z-index:10;display:flex;align-items:center;justify-content:center;color:#6c757d;transition:color .15s ease-in-out}:host .calendar-icon svg{width:16px;height:16px;stroke:currentColor}:host .calendar-icon:hover{color:#495057}:host .calendar-icon.disabled{color:#adb5bd;cursor:default;pointer-events:none}:host .form-control[type=date]{padding-right:2.5rem!important}:host .form-control[type=date].form-control-sm{padding-right:2.25rem!important}:host .form-control[type=date].form-control-lg{padding-right:3rem!important}:host .form-control-sm~.calendar-icon{right:.5rem;width:18px;height:18px}:host .form-control-sm~.calendar-icon svg{width:14px;height:14px}:host .form-control-lg~.calendar-icon{right:1rem;width:24px;height:24px}:host .form-control-lg~.calendar-icon svg{width:20px;height:20px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], blockFutureDates: [{
                type: Input
            }], showCurrentDate: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], dateInput: [{
                type: ViewChild,
                args: ['dateInput', { static: false }]
            }] } });

class SaSwitchComponent {
    value = false;
    size = 'md';
    status = 'default';
    label = '';
    helperText = '';
    errorText = '';
    required = false;
    disabled = false;
    id = '';
    name = '';
    // Generar ID único si no se proporciona uno
    get uniqueId() {
        return this.id || `sa-switch-${Math.random().toString(36).substr(2, 9)}`;
    }
    valueChange = new EventEmitter();
    change = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    onChange = (_) => { };
    onTouched = () => { };
    get switchClasses() {
        const baseClasses = ['form-check', 'form-switch'];
        // Tamaños personalizados
        if (this.size === 'sm') {
            baseClasses.push('form-switch-sm');
        }
        else if (this.size === 'md') {
            baseClasses.push('form-switch-md');
        }
        else if (this.size === 'lg') {
            baseClasses.push('form-switch-lg');
        }
        // Estados de validación
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get inputClasses() {
        const baseClasses = ['form-check-input'];
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
        const sizeMap = {
            'sm': 'form-check-label label-sm',
            'md': 'form-check-label label-md',
            'lg': 'form-check-label label-lg'
        };
        const baseClasses = [sizeMap[this.size] || 'form-check-label label-md'];
        if (this.disabled) {
            baseClasses.push('text-muted');
        }
        return baseClasses.join(' ');
    }
    writeValue(value) {
        this.value = !!value;
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
    onModelChange(event) {
        const target = event.target;
        this.value = target.checked;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
        this.change.emit(this.value);
    }
    onInputFocus(event) {
        this.focus.emit(event);
    }
    onInputBlur(event) {
        this.onTouched();
        this.blur.emit(event);
    }
    toggleSwitch() {
        if (!this.disabled) {
            this.value = !this.value;
            this.onChange(this.value);
            this.valueChange.emit(this.value);
            this.change.emit(this.value);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaSwitchComponent, selector: "sa-switch", inputs: { value: "value", size: "size", status: "status", label: "label", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", id: "id", name: "name" }, outputs: { valueChange: "valueChange", change: "change", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaSwitchComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"\">\r\n  <div [class]=\"switchClasses\">\r\n    <input\r\n      [id]=\"uniqueId\"\r\n      [name]=\"name\"\r\n      type=\"checkbox\"\r\n      [class]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (change)=\"onModelChange($event)\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      (focus)=\"onInputFocus($event)\"\r\n      (blur)=\"onInputBlur($event)\"\r\n    />\r\n    <label \r\n      *ngIf=\"label\" \r\n      [for]=\"uniqueId\" \r\n      [class]=\"labelClasses\"\r\n      (click)=\"toggleSwitch()\">\r\n      {{ label }}\r\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host .mb-3{width:100%;box-sizing:border-box}:host .form-switch{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;gap:.5rem;padding-left:0!important;margin-bottom:0;min-height:auto}:host .form-switch .form-check-input{cursor:pointer!important;width:3rem;height:1.6rem;background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important;margin:0;flex-shrink:0;background-image:none!important;position:relative;z-index:3;border-radius:3rem;transition:all .3s cubic-bezier(.4,0,.2,1);appearance:none}:host .form-switch .form-check-input:before{content:\"\";position:absolute;top:50%;width:calc(1.6rem - 4px);height:calc(1.6rem - 4px);background-color:#a4a8ac;border-radius:50%;transition:all .3s cubic-bezier(.4,0,.2,1);z-index:1;transform:translateY(-50%);pointer-events:none}:host .form-switch .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important}:host .form-switch .form-check-input:checked:before{left:calc(100% - 1.6rem + 2px);background-color:#fff}:host .form-switch .form-check-input:not(:checked){background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important}:host .form-switch .form-check-input:not(:checked):before{left:2px;background-color:#a4a8ac}:host .form-switch .form-check-input:focus:not(:focus-visible){outline:none!important;box-shadow:none!important}:host .form-switch .form-check-input:focus-visible{outline:none!important;box-shadow:0 0 0 .25rem #32a04740!important;border-color:#32a047!important}:host .form-switch .form-check-input:disabled{background-color:#e9ecef!important;border-color:#e9ecef!important;cursor:not-allowed!important}:host .form-switch .form-check-input:disabled:checked{background-color:#e9ecef!important;border-color:#e9ecef!important}:host .form-switch .form-check-input:disabled:before{background-color:#a4a8ac}:host .form-switch.is-valid .form-check-input{border-color:#32a047}:host .form-switch.is-valid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-valid .form-check-input:focus-visible{box-shadow:0 0 0 .25rem #10b98140!important}:host .form-switch.is-valid .form-check-input:checked{background-color:#32a047!important}:host .form-switch.is-invalid .form-check-input{border-color:#ef4444}:host .form-switch.is-invalid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-invalid .form-check-input:focus-visible{box-shadow:0 0 0 .25rem #ef444440!important}:host .form-switch.is-invalid .form-check-input:checked{background-color:#32a047!important}:host .form-switch-sm .form-check-input{width:2rem;height:1.2rem}:host .form-switch-sm .form-check-input:before{width:calc(1.2rem - 4px);height:calc(1.2rem - 4px)}:host .form-switch-sm .form-check-input:checked:before{left:calc(100% - 1.2rem + 2px)}:host .form-switch-md .form-check-input{width:3rem;height:1.6rem}:host .form-switch-md .form-check-input:before{width:calc(1.6rem - 4px);height:calc(1.6rem - 4px)}:host .form-switch-md .form-check-input:checked:before{left:calc(100% - 1.6rem + 2px)}:host .form-switch-lg .form-check-input{width:4rem;height:2rem}:host .form-switch-lg .form-check-input:before{width:calc(2rem - 4px);height:calc(2rem - 4px)}:host .form-switch-lg .form-check-input:checked:before{left:calc(100% - 2rem + 2px)}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer!important;margin:0;line-height:1.2;display:flex;align-items:center;-webkit-user-select:none;user-select:none;z-index:2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label:hover{color:#1a1a1a}:host .form-check-label.text-muted{cursor:not-allowed!important;opacity:.65}:host .form-check-label.text-muted:hover{color:#212529}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:3.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:3.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled+.form-check-label{opacity:.65;cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.CheckboxRequiredValidator, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]" }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-switch', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaSwitchComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <div [class]=\"switchClasses\">\r\n    <input\r\n      [id]=\"uniqueId\"\r\n      [name]=\"name\"\r\n      type=\"checkbox\"\r\n      [class]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (change)=\"onModelChange($event)\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      (focus)=\"onInputFocus($event)\"\r\n      (blur)=\"onInputBlur($event)\"\r\n    />\r\n    <label \r\n      *ngIf=\"label\" \r\n      [for]=\"uniqueId\" \r\n      [class]=\"labelClasses\"\r\n      (click)=\"toggleSwitch()\">\r\n      {{ label }}\r\n      <span *ngIf=\"required\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host .mb-3{width:100%;box-sizing:border-box}:host .form-switch{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;gap:.5rem;padding-left:0!important;margin-bottom:0;min-height:auto}:host .form-switch .form-check-input{cursor:pointer!important;width:3rem;height:1.6rem;background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important;margin:0;flex-shrink:0;background-image:none!important;position:relative;z-index:3;border-radius:3rem;transition:all .3s cubic-bezier(.4,0,.2,1);appearance:none}:host .form-switch .form-check-input:before{content:\"\";position:absolute;top:50%;width:calc(1.6rem - 4px);height:calc(1.6rem - 4px);background-color:#a4a8ac;border-radius:50%;transition:all .3s cubic-bezier(.4,0,.2,1);z-index:1;transform:translateY(-50%);pointer-events:none}:host .form-switch .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important}:host .form-switch .form-check-input:checked:before{left:calc(100% - 1.6rem + 2px);background-color:#fff}:host .form-switch .form-check-input:not(:checked){background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important}:host .form-switch .form-check-input:not(:checked):before{left:2px;background-color:#a4a8ac}:host .form-switch .form-check-input:focus:not(:focus-visible){outline:none!important;box-shadow:none!important}:host .form-switch .form-check-input:focus-visible{outline:none!important;box-shadow:0 0 0 .25rem #32a04740!important;border-color:#32a047!important}:host .form-switch .form-check-input:disabled{background-color:#e9ecef!important;border-color:#e9ecef!important;cursor:not-allowed!important}:host .form-switch .form-check-input:disabled:checked{background-color:#e9ecef!important;border-color:#e9ecef!important}:host .form-switch .form-check-input:disabled:before{background-color:#a4a8ac}:host .form-switch.is-valid .form-check-input{border-color:#32a047}:host .form-switch.is-valid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-valid .form-check-input:focus-visible{box-shadow:0 0 0 .25rem #10b98140!important}:host .form-switch.is-valid .form-check-input:checked{background-color:#32a047!important}:host .form-switch.is-invalid .form-check-input{border-color:#ef4444}:host .form-switch.is-invalid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-invalid .form-check-input:focus-visible{box-shadow:0 0 0 .25rem #ef444440!important}:host .form-switch.is-invalid .form-check-input:checked{background-color:#32a047!important}:host .form-switch-sm .form-check-input{width:2rem;height:1.2rem}:host .form-switch-sm .form-check-input:before{width:calc(1.2rem - 4px);height:calc(1.2rem - 4px)}:host .form-switch-sm .form-check-input:checked:before{left:calc(100% - 1.2rem + 2px)}:host .form-switch-md .form-check-input{width:3rem;height:1.6rem}:host .form-switch-md .form-check-input:before{width:calc(1.6rem - 4px);height:calc(1.6rem - 4px)}:host .form-switch-md .form-check-input:checked:before{left:calc(100% - 1.6rem + 2px)}:host .form-switch-lg .form-check-input{width:4rem;height:2rem}:host .form-switch-lg .form-check-input:before{width:calc(2rem - 4px);height:calc(2rem - 4px)}:host .form-switch-lg .form-check-input:checked:before{left:calc(100% - 2rem + 2px)}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer!important;margin:0;line-height:1.2;display:flex;align-items:center;-webkit-user-select:none;user-select:none;z-index:2;flex:1}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label:hover{color:#1a1a1a}:host .form-check-label.text-muted{cursor:not-allowed!important;opacity:.65}:host .form-check-label.text-muted:hover{color:#212529}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;color:#6b7280;margin-top:.25rem;margin-left:3.5rem}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:.75rem;margin-top:.25rem;margin-left:3.5rem;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled+.form-check-label{opacity:.65;cursor:not-allowed}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class SannaFormsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, declarations: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaDateComponent,
            SaSwitchComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaIconModule], exports: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaDateComponent,
            SaSwitchComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SaInputComponent,
                        SaSelectComponent,
                        SaTextareaComponent,
                        SaCheckboxComponent,
                        SaRadioComponent,
                        SaDateComponent,
                        SaSwitchComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SannaIconModule,
                    ],
                    exports: [
                        SaInputComponent,
                        SaSelectComponent,
                        SaTextareaComponent,
                        SaCheckboxComponent,
                        SaRadioComponent,
                        SaDateComponent,
                        SaSwitchComponent,
                    ]
                }]
        }] });

class SannaUiModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, declarations: [SannaUiComponent,
            SaButtonComponent,
            SaMessageboxComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent,
            SaTagComponent,
            SaLegendComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule,
            SaColumnDefDirective], exports: [SannaUiComponent,
            SaButtonComponent,
            SaMessageboxComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent,
            SaTagComponent,
            SaLegendComponent,
            SaColumnDefDirective,
            SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule, SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaMessageboxComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                        SaTagComponent,
                        SaLegendComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SannaUiFontAwesomeModule,
                        SannaFormsModule,
                        SannaIconModule,
                        SaColumnDefDirective
                    ],
                    exports: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaMessageboxComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                        SaTagComponent,
                        SaLegendComponent,
                        SaColumnDefDirective,
                        SannaUiFontAwesomeModule,
                        SannaFormsModule,
                        SannaIconModule
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

export { SaButtonComponent, SaCheckboxComponent, SaColumnDefDirective, SaDateComponent, SaHeadingComponent, SaIconComponent, SaInputComponent, SaLegendComponent, SaMessageboxComponent, SaRadioComponent, SaSelectComponent, SaSwitchComponent, SaTableComponent, SaTagComponent, SaTextComponent, SaTextareaComponent, SannaFormsModule, SannaIconModule, SannaUiComponent, SannaUiFontAwesomeModule, SannaUiModule, SannaUiService };
//# sourceMappingURL=sanna-ui.mjs.map
