import { Component, Input, Output, EventEmitter, ViewChild, HostBinding } from '@angular/core';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faEdit, faSave, faPlus, faMinus, faCheck, faTimes, faEye, faEyeSlash, faLock, faUnlock, faBell, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faInfo, faExclamationTriangle, faQuestion, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faPencil, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, 
// Nuevos iconos agregados
faThLarge, faUsers, faLink, faCopy, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartBar, faChartLine, faAppleAlt, faRobot, faGift, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBicycle, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalculator, faCalendarDay, faCamera, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faFile, faChartPie, faComments, faFlask, faMicroscope, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faCoffee, faComment, faCreditCard, faCrop, faCropAlt, faTruck, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faEquals, faEraser, faFileExcel, faFileDownload, faSignOutAlt, faSmile, faFrown, faMask, faMedal, faBoxOpen, faSeedling, faFilter, faFingerprint, faFire, faTrophy, faFish, faFlag, faForward, faVolumeUp, faExpandArrowsAlt, faGlobe, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faIceCream, faLightbulb, faKey, faLaptop, faLayerGroup, faListUl, faVolumeDown, faMapPin, faLocationArrow, faCompass, faPills, faMobile, faMobileAlt, faMoneyBill, faMotorcycle, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faPaperclip, faDesktop, faPause, faPercent, faPiggyBank, faPlay, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faReceipt, faRedo, faRuler, faUtensils, faTshirt, faShoppingCart, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStarHalf, faStop, faStore, faThermometerHalf, faThumbsDown, faThumbsUp, faBolt, faTicketAlt, faSitemap, faBath, faUndo, faUpload, faUserPlus, faUserMinus, faVideo, faExclamationCircle, faWifi, faTable, faTablet, faTabletAlt, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
export class SaButtonComponent {
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
    // Soporte para ngClass
    class = '';
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
    // HostBinding para soporte de ngClass
    get hostClasses() {
        return this.class || '';
    }
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
            'map': faGlobe,
            'map-pin': faMapPin,
            'map-marker': faMapMarkerAlt,
            'location': faMapMarkerAlt,
            'location-pin': faMapPin,
            'location-arrow': faLocationArrow,
            'compass': faCompass,
            'navigation': faCompass,
            'maps': faGlobe,
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
            'fas fa-location-arrow': faLocationArrow,
            'fas fa-compass': faCompass,
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", class: "class", tooltip: "tooltip", tooltipPosition: "tooltipPosition", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly", noAnimate: "noAnimate" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth", "style.visibility": "\"visible\"", "class": "this.hostClasses" }, styleAttribute: "visibility: hidden;" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#acacac!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-success-light{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-success-light:hover{background-color:#fff;border-color:#00ab4a;color:#00ab4a}.btn-success-light.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-success-light .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-warning-light{background-color:#fff;border:1px solid #FFC107;color:#ffc107}.btn-warning-light:hover{background-color:#fff;border-color:#ffc107;color:#ffc107}.btn-warning-light.loading{background-color:#fff!important;color:#ffc107!important;opacity:1!important}.btn-warning-light .spinner-icon{color:#ffc107!important;opacity:1!important}.btn-warning-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-info-light{background-color:#fff;border:1px solid #007bff;color:#007bff}.btn-info-light:hover{background-color:#fff;border-color:#007bff;color:#007bff}.btn-info-light.loading{background-color:#fff!important;color:#007bff!important;opacity:1!important}.btn-info-light .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', host: {
                        '[class.full-width]': 'fullWidth',
                        'style': 'visibility: hidden;',
                        '[style.visibility]': '"visible"'
                    }, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#acacac!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-success-light{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-success-light:hover{background-color:#fff;border-color:#00ab4a;color:#00ab4a}.btn-success-light.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-success-light .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-warning-light{background-color:#fff;border:1px solid #FFC107;color:#ffc107}.btn-warning-light:hover{background-color:#fff;border-color:#ffc107;color:#ffc107}.btn-warning-light.loading{background-color:#fff!important;color:#ffc107!important;opacity:1!important}.btn-warning-light .spinner-icon{color:#ffc107!important;opacity:1!important}.btn-warning-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-info-light{background-color:#fff;border:1px solid #007bff;color:#007bff}.btn-info-light:hover{background-color:#fff;border-color:#007bff;color:#007bff}.btn-info-light.loading{background-color:#fff!important;color:#007bff!important;opacity:1!important}.btn-info-light .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], class: [{
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
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBa0Isa0JBQWtCLEVBQVksTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxZQUFZLEVBQ1osa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04saUJBQWlC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c0JBRFAsS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixTQUFTO3NCQURaLEtBQUs7Z0JBU3NDLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFFaEMsT0FBTztzQkFBaEIsTUFBTTtnQkFJSCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgZmluZEljb25EZWZpbml0aW9uLCBJY29uTmFtZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBcbiAgZmFTcGlubmVyLCBcbiAgZmFEb3dubG9hZCwgXG4gIGZhVHJhc2gsIFxuICBmYVNoYXJlLCBcbiAgZmFQcmludCwgXG4gIGZhSGVhcnQsXG4gIGZhSG9tZSxcbiAgZmFVc2VyLFxuICBmYUNvZyxcbiAgZmFTZWFyY2gsXG4gIGZhU3RhcixcbiAgZmFFZGl0LFxuICBmYVNhdmUsXG4gIGZhUGx1cyxcbiAgZmFNaW51cyxcbiAgZmFDaGVjayxcbiAgZmFUaW1lcyxcbiAgZmFFeWUsXG4gIGZhRXllU2xhc2gsXG4gIGZhTG9jayxcbiAgZmFVbmxvY2ssXG4gIGZhQmVsbCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFQaG9uZSxcbiAgZmFNYXBNYXJrZXJBbHQsXG4gIGZhQ2FsZW5kYXIsXG4gIGZhQ2xvY2ssXG4gIGZhSW5mbyxcbiAgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICBmYVF1ZXN0aW9uLFxuICBmYUNoZXZyb25Eb3duLFxuICBmYUNoZXZyb25VcCxcbiAgZmFDaGV2cm9uTGVmdCxcbiAgZmFDaGV2cm9uUmlnaHQsXG4gIGZhQXJyb3dMZWZ0LFxuICBmYUFycm93UmlnaHQsXG4gIGZhQXJyb3dVcCxcbiAgZmFBcnJvd0Rvd24sXG4gIGZhUGVuY2lsLFxuICBmYUFuZ2xlRG91YmxlTGVmdCxcbiAgZmFBbmdsZUxlZnQsXG4gIGZhQW5nbGVSaWdodCxcbiAgZmFBbmdsZURvdWJsZVJpZ2h0LFxuICAvLyBOdWV2b3MgaWNvbm9zIGFncmVnYWRvc1xuICBmYVRoTGFyZ2UsXG4gIGZhVXNlcnMsXG4gIGZhTGluayxcbiAgZmFDb3B5LFxuICBmYVVuaXZlcnNhbEFjY2VzcyxcbiAgZmFSdW5uaW5nLFxuICBmYUltYWdlLFxuICBmYUNhbGVuZGFyQWx0LFxuICBmYUNoYXJ0QmFyLFxuICBmYUNoYXJ0TGluZSxcbiAgZmFBcHBsZUFsdCxcbiAgZmFSb2JvdCxcbiAgZmFHaWZ0LFxuICBmYVNob3BwaW5nQmFnLFxuICBmYUJhbGFuY2VTY2FsZSxcbiAgZmFCYXR0ZXJ5VGhyZWVRdWFydGVycyxcbiAgZmFCYXR0ZXJ5SGFsZixcbiAgZmFCYXR0ZXJ5UXVhcnRlcixcbiAgZmFCYXR0ZXJ5RW1wdHksXG4gIGZhQmVsbFNsYXNoLFxuICBmYUJpY3ljbGUsXG4gIGZhQm9va21hcmssXG4gIGZhQm93bEZvb2QsXG4gIGZhQm94LFxuICBmYUJ1cyxcbiAgZmFCaXJ0aGRheUNha2UsXG4gIGZhQ2FsY3VsYXRvcixcbiAgZmFDYWxlbmRhckRheSxcbiAgZmFDYW1lcmEsXG4gIGZhQ2FyZXREb3duLFxuICBmYUNhcmV0TGVmdCxcbiAgZmFDYXJldFJpZ2h0LFxuICBmYUNhcmV0VXAsXG4gIGZhRmlsZSxcbiAgZmFDaGFydFBpZSxcbiAgZmFDb21tZW50cyxcbiAgZmFGbGFzayxcbiAgZmFNaWNyb3Njb3BlLFxuICBmYUNvb2tpZUJpdGUsXG4gIGZhU3ByYXlDYW4sXG4gIGZhU29hcCxcbiAgZmFFeHBhbmQsXG4gIGZhQ2xvdWQsXG4gIGZhQ29mZmVlLFxuICBmYUNvbW1lbnQsXG4gIGZhQ3JlZGl0Q2FyZCxcbiAgZmFDcm9wLFxuICBmYUNyb3BBbHQsXG4gIGZhVHJ1Y2ssXG4gIGZhRmlsZVVwbG9hZCxcbiAgZmFFbGxpcHNpc0gsXG4gIGZhUGxhbmUsXG4gIGZhR3JhZHVhdGlvbkNhcCxcbiAgZmFFcXVhbHMsXG4gIGZhRXJhc2VyLFxuICBmYUZpbGVFeGNlbCxcbiAgZmFGaWxlRG93bmxvYWQsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFTbWlsZSxcbiAgZmFGcm93bixcbiAgZmFNYXNrLFxuICBmYU1lZGFsLFxuICBmYUJveE9wZW4sXG4gIGZhU2VlZGxpbmcsXG4gIGZhRmlsdGVyLFxuICBmYUZpbmdlcnByaW50LFxuICBmYUZpcmUsXG4gIGZhVHJvcGh5LFxuICBmYUZpc2gsXG4gIGZhRmxhZyxcbiAgZmFGb3J3YXJkLFxuICBmYVZvbHVtZVVwLFxuICBmYUV4cGFuZEFycm93c0FsdCxcbiAgZmFHbG9iZSxcbiAgZmFWb2x1bWVNdXRlLFxuICBmYUJhcnMsXG4gIGZhQnJpZWZjYXNlLFxuICBmYU1pY3JvY2hpcCxcbiAgZmFIZWFydGJlYXQsXG4gIGZhSGlzdG9yeSxcbiAgZmFNaWNyb3Bob25lLFxuICBmYUljZUNyZWFtLFxuICBmYUxpZ2h0YnVsYixcbiAgZmFLZXksXG4gIGZhTGFwdG9wLFxuICBmYUxheWVyR3JvdXAsXG4gIGZhTGlzdFVsLFxuICBmYVZvbHVtZURvd24sXG4gIGZhTWFwUGluLFxuICBmYUxvY2F0aW9uQXJyb3csXG4gIGZhQ29tcGFzcyxcbiAgZmFQaWxscyxcbiAgZmFNb2JpbGUsXG4gIGZhTW9iaWxlQWx0LFxuICBmYU1vbmV5QmlsbCxcbiAgZmFNb3RvcmN5Y2xlLFxuICBmYVN0aWNreU5vdGUsXG4gIGZhRWxsaXBzaXNWLFxuICBmYUx1bmdzLFxuICBmYUNhc2hSZWdpc3RlcixcbiAgZmFQYXBlclBsYW5lLFxuICBmYVBhcGVyY2xpcCxcbiAgZmFEZXNrdG9wLFxuICBmYVBhdXNlLFxuICBmYVBlcmNlbnQsXG4gIGZhUGlnZ3lCYW5rLFxuICBmYVBsYXksXG4gIGZhTW91c2VQb2ludGVyLFxuICBmYVN3aW1taW5nUG9vbCxcbiAgZmFCYW4sXG4gIGZhVGFnLFxuICBmYVNoaWVsZCxcbiAgZmFRcmNvZGUsXG4gIGZhUmVjZWlwdCxcbiAgZmFSZWRvLFxuICBmYVJ1bGVyLFxuICBmYVV0ZW5zaWxzLFxuICBmYVRzaGlydCxcbiAgZmFTaG9wcGluZ0NhcnQsXG4gIGZhU2xpZGVyc0gsXG4gIGZhR2xhc3NXaGlza2V5LFxuICBmYVNvcnQsXG4gIGZhVGFjaG9tZXRlckFsdCxcbiAgZmFTcG9vbixcbiAgZmFTdGFySGFsZixcbiAgZmFTdG9wLFxuICBmYVN0b3JlLFxuICBmYVRoZXJtb21ldGVySGFsZixcbiAgZmFUaHVtYnNEb3duLFxuICBmYVRodW1ic1VwLFxuICBmYUJvbHQsXG4gIGZhVGlja2V0QWx0LFxuICBmYVNpdGVtYXAsXG4gIGZhQmF0aCxcbiAgZmFVbmRvLFxuICBmYVVwbG9hZCxcbiAgZmFVc2VyUGx1cyxcbiAgZmFVc2VyTWludXMsXG4gIGZhVmlkZW8sXG4gIGZhRXhjbGFtYXRpb25DaXJjbGUsXG4gIGZhV2lmaSxcbiAgZmFUYWJsZSxcbiAgZmFUYWJsZXQsXG4gIGZhVGFibGV0QWx0LFxuICBmYUFtYnVsYW5jZVxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5pbXBvcnQgeyBUb29sdGlwUG9zaXRpb24gfSBmcm9tICcuLi90eXBlcy90b29sdGlwLnR5cGVzJztcblxuZXhwb3J0IHR5cGUgQnV0dG9uVmFyaWFudCA9ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcmNpYXJ5JyB8ICdkYW5nZXInIHwgJ2Rhbmdlci1saWdodCcgfCAnd2FybmluZycgfCAnd2FybmluZy1saWdodCcgfCAnaW5mbycgfCAnaW5mby1saWdodCcgfCAnZ3JheScgfCAncmVkJyB8ICdzdWNjZXNzJyB8ICdzdWNjZXNzLWxpZ2h0JztcbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5leHBvcnQgdHlwZSBCdXR0b25UeXBlID0gJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2EtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50LnNjc3MnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5mdWxsLXdpZHRoXSc6ICdmdWxsV2lkdGgnLFxuICAgICdzdHlsZSc6ICd2aXNpYmlsaXR5OiBoaWRkZW47JyxcbiAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ1widmlzaWJsZVwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFNhQnV0dG9uQ29tcG9uZW50IHtcbiAgLy8gUHJvcGllZGFkZXMgY29uIGZsZXhpYmlsaWRhZCBtw6F4aW1hOiBzb3BvcnRhbiBhdHRyaWJ1dGUgeSBwcm9wZXJ0eSBiaW5kaW5nXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnQnV0dG9uJzsgLy8gTWFudGVuZXIgY29tbyBASW5wdXQgc2ltcGxlIHBhcmEgc3RyaW5nc1xuICBcbiAgLy8gUHJvcGllZGFkZXMgY29uIHNldHRlcnMvZ2V0dGVycyBwYXJhIGZsZXhpYmlsaWRhZCBtw6F4aW1hXG4gIHByaXZhdGUgX3ZhcmlhbnQ6IEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeSc7XG4gIHByaXZhdGUgX3NpemU6IEJ1dHRvblNpemUgPSAnbWQnO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Z1bGxXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90eXBlOiBCdXR0b25UeXBlID0gJ2J1dHRvbic7XG4gIHByaXZhdGUgX2ljb24/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuICBwcml2YXRlIF9pY29uT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90b29sdGlwPzogc3RyaW5nO1xuICBwcml2YXRlIF90b29sdGlwUG9zaXRpb246IFRvb2x0aXBQb3NpdGlvbiA9ICd0b3AnO1xuICBwcml2YXRlIF9ub0FuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBTb3BvcnRlIHBhcmEgbmdDbGFzc1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXAodmFsdWU6IHN0cmluZyB8IGFueSkge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG9vbHRpcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXBQb3NpdGlvbih2YWx1ZTogVG9vbHRpcFBvc2l0aW9uIHwgYW55KSB7XG4gICAgdGhpcy5fdG9vbHRpcFBvc2l0aW9uID0gdmFsdWUgfHwgJ3RvcCc7XG4gIH1cbiAgZ2V0IHRvb2x0aXBQb3NpdGlvbigpOiBUb29sdGlwUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwUG9zaXRpb247XG4gIH1cblxuICAvLyBEZXRlcm1pbmFyIHNpIGVsIHRvb2x0aXAgbmVjZXNpdGEgbcO6bHRpcGxlcyBsw61uZWFzXG4gIGdldCBpc0xvbmdUb29sdGlwKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy50b29sdGlwKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQ29uc2lkZXJhciB0ZXh0byBsYXJnbyBzaSB0aWVuZSBtw6FzIGRlIDYwIGNhcmFjdGVyZXMgbyBjb250aWVuZSBzYWx0b3MgZGUgbMOtbmVhXG4gICAgLy8gNjAgY2FyYWN0ZXJlcyBlcyBhcHJveGltYWRhbWVudGUgbG8gcXVlIGNhYmUgZW4gMzUwcHggY29uIGZvbnQtc2l6ZSAxMnB4XG4gICAgcmV0dXJuIHRoaXMudG9vbHRpcC5sZW5ndGggPiA2MCB8fCB0aGlzLnRvb2x0aXAuaW5jbHVkZXMoJ1xcbicpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhcmlhbnQodmFsdWU6IEJ1dHRvblZhcmlhbnQgfCBhbnkpIHtcbiAgICB0aGlzLl92YXJpYW50ID0gdmFsdWUgfHwgJ3ByaW1hcnknO1xuICB9XG4gIGdldCB2YXJpYW50KCk6IEJ1dHRvblZhcmlhbnQge1xuICAgIHJldHVybiB0aGlzLl92YXJpYW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6IEJ1dHRvblNpemUgfCBhbnkpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgfHwgJ21kJztcbiAgfVxuICBnZXQgc2l6ZSgpOiBCdXR0b25TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9mdWxsV2lkdGggPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBmdWxsV2lkdGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBCdXR0b25UeXBlIHwgYW55KSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8ICdidXR0b24nO1xuICB9XG4gIGdldCB0eXBlKCk6IEJ1dHRvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZyB8IGFueSkge1xuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiAnbGVmdCcgfCAncmlnaHQnIHwgYW55KSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZSB8fCAnbGVmdCc7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6ICdsZWZ0JyB8ICdyaWdodCcge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uT25seSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2ljb25Pbmx5ID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgaWNvbk9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25Pbmx5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5vQW5pbWF0ZSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX25vQW5pbWF0ZSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IG5vQW5pbWF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm9BbmltYXRlO1xuICB9XG5cblxuICBAVmlld0NoaWxkKCdidXR0b25UZXh0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGJ1dHRvblRleHQhOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8vIEhvc3RCaW5kaW5nIHBhcmEgc29wb3J0ZSBkZSBuZ0NsYXNzXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIC8vIEljb25vIGRlIHNwaW5uZXIgcGFyYSBlbCBlc3RhZG8gbG9hZGluZ1xuICByZWFkb25seSBzcGlubmVySWNvbiA9IGZhU3Bpbm5lcjtcblxuICAvLyBNw6l0b2RvIHBhcmEgb2J0ZW5lciBlbCBpY29ubyBiYXNhZG8gZW4gZWwgc3RyaW5nXG4gIGdldCBpY29uRGVmaW5pdGlvbigpOiBJY29uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLmljb24pIHJldHVybiB1bmRlZmluZWQ7XG4gICAgXG4gICAgLy8gUHJpbWVybyBpbnRlbnRhIGNvbiBlbCBtYXBlbyBsb2NhbCAobcOhcyByw6FwaWRvKVxuICAgIGNvbnN0IGxvY2FsSWNvbk1hcDogeyBba2V5OiBzdHJpbmddOiBJY29uRGVmaW5pdGlvbiB9ID0ge1xuICAgICAgLy8gSWNvbm9zIGLDoXNpY29zIChzb2xpZCBwb3IgZGVmZWN0bylcbiAgICAgICdzcGlubmVyJzogZmFTcGlubmVyLFxuICAgICAgJ2Rvd25sb2FkJzogZmFEb3dubG9hZCxcbiAgICAgICd0cmFzaCc6IGZhVHJhc2gsXG4gICAgICAnc2hhcmUnOiBmYVNoYXJlLFxuICAgICAgJ3ByaW50JzogZmFQcmludCxcbiAgICAgICdoZWFydCc6IGZhSGVhcnQsXG4gICAgICAnaG9tZSc6IGZhSG9tZSxcbiAgICAgICd1c2VyJzogZmFVc2VyLFxuICAgICAgJ2NvZyc6IGZhQ29nLFxuICAgICAgJ3NlYXJjaCc6IGZhU2VhcmNoLFxuICAgICAgJ3N0YXInOiBmYVN0YXIsXG4gICAgICAnZWRpdCc6IGZhRWRpdCxcbiAgICAgICdzYXZlJzogZmFTYXZlLFxuICAgICAgJ3BsdXMnOiBmYVBsdXMsXG4gICAgICAnbWludXMnOiBmYU1pbnVzLFxuICAgICAgJ2NoZWNrJzogZmFDaGVjayxcbiAgICAgICd0aW1lcyc6IGZhVGltZXMsXG4gICAgICAnZXllJzogZmFFeWUsXG4gICAgICAnZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcbiAgICAgICdsb2NrJzogZmFMb2NrLFxuICAgICAgJ3VubG9jayc6IGZhVW5sb2NrLFxuICAgICAgJ2JlbGwnOiBmYUJlbGwsXG4gICAgICAnZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxuICAgICAgJ3Bob25lJzogZmFQaG9uZSxcbiAgICAgICdtYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ2NhbGVuZGFyJzogZmFDYWxlbmRhcixcbiAgICAgICdjbG9jayc6IGZhQ2xvY2ssXG4gICAgICAnaW5mbyc6IGZhSW5mbyxcbiAgICAgICdleGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICdxdWVzdGlvbic6IGZhUXVlc3Rpb24sXG4gICAgICAnY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcbiAgICAgICdjaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXG4gICAgICAnY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcbiAgICAgICdjaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXG4gICAgICAnYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxuICAgICAgJ2Fycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxuICAgICAgJ2Fycm93LXVwJzogZmFBcnJvd1VwLFxuICAgICAgJ2Fycm93LWRvd24nOiBmYUFycm93RG93bixcbiAgICAgICdwZW5jaWwnOiBmYVBlbmNpbCxcbiAgICAgICdhbmdsZS1kb3VibGUtbGVmdCc6IGZhQW5nbGVEb3VibGVMZWZ0LFxuICAgICAgJ2FuZ2xlLWxlZnQnOiBmYUFuZ2xlTGVmdCxcbiAgICAgICdhbmdsZS1yaWdodCc6IGZhQW5nbGVSaWdodCxcbiAgICAgICdhbmdsZS1kb3VibGUtcmlnaHQnOiBmYUFuZ2xlRG91YmxlUmlnaHQsXG4gICAgICAndGFibGUnOiBmYVRhYmxlLFxuICAgICAgJ3RoLWxhcmdlJzogZmFUaExhcmdlLFxuICAgICAgJ3VzZXJzJzogZmFVc2VycyxcbiAgICAgICd1bml2ZXJzYWwtYWNjZXNzJzogZmFVbml2ZXJzYWxBY2Nlc3MsXG4gICAgICAncnVubmluZyc6IGZhUnVubmluZyxcbiAgICAgICdpbWFnZSc6IGZhSW1hZ2UsXG4gICAgICAnY2FsZW5kYXItYWx0JzogZmFDYWxlbmRhckFsdCxcbiAgICAgICdjaGFydC1saW5lJzogZmFDaGFydExpbmUsXG4gICAgICAnYXBwbGUtYWx0JzogZmFBcHBsZUFsdCxcbiAgICAgICdyb2JvdCc6IGZhUm9ib3QsXG4gICAgICAnc2hvcHBpbmctYmFnJzogZmFTaG9wcGluZ0JhZyxcbiAgICAgICdiYWxhbmNlLXNjYWxlJzogZmFCYWxhbmNlU2NhbGUsXG4gICAgICAnYmF0dGVyeS10aHJlZS1xdWFydGVycyc6IGZhQmF0dGVyeVRocmVlUXVhcnRlcnMsXG4gICAgICAnYmF0dGVyeS1xdWFydGVyJzogZmFCYXR0ZXJ5UXVhcnRlcixcbiAgICAgICdiYXR0ZXJ5LWVtcHR5JzogZmFCYXR0ZXJ5RW1wdHksXG4gICAgICAnYmVsbC1zbGFzaCc6IGZhQmVsbFNsYXNoLFxuICAgICAgJ2Jvb2ttYXJrJzogZmFCb29rbWFyayxcbiAgICAgICdib3dsLWZvb2QnOiBmYUJvd2xGb29kLFxuICAgICAgJ2JveCc6IGZhQm94LFxuICAgICAgJ2J1cyc6IGZhQnVzLFxuICAgICAgJ2JpcnRoZGF5LWNha2UnOiBmYUJpcnRoZGF5Q2FrZSxcbiAgICAgICdjYWxlbmRhci1kYXknOiBmYUNhbGVuZGFyRGF5LFxuICAgICAgJ2ZpbGUnOiBmYUZpbGUsXG4gICAgICAnZmxhc2snOiBmYUZsYXNrLFxuICAgICAgJ2Nvb2tpZS1iaXRlJzogZmFDb29raWVCaXRlLFxuICAgICAgJ3NwcmF5LWNhbic6IGZhU3ByYXlDYW4sXG4gICAgICAnc29hcCc6IGZhU29hcCxcbiAgICAgICdleHBhbmQnOiBmYUV4cGFuZCxcbiAgICAgICdjbG91ZCc6IGZhQ2xvdWQsXG4gICAgICAnY29tbWVudCc6IGZhQ29tbWVudCxcbiAgICAgICdmaWxlLXVwbG9hZCc6IGZhRmlsZVVwbG9hZCxcbiAgICAgICdlbGxpcHNpcy1oJzogZmFFbGxpcHNpc0gsXG4gICAgICAncGxhbmUnOiBmYVBsYW5lLFxuICAgICAgJ2dyYWR1YXRpb24tY2FwJzogZmFHcmFkdWF0aW9uQ2FwLFxuICAgICAgJ2ZpbGUtZXhjZWwnOiBmYUZpbGVFeGNlbCxcbiAgICAgICdzaWduLW91dC1hbHQnOiBmYVNpZ25PdXRBbHQsXG4gICAgICAnc21pbGUnOiBmYVNtaWxlLFxuICAgICAgJ2Zyb3duJzogZmFGcm93bixcbiAgICAgICdtYXNrJzogZmFNYXNrLFxuICAgICAgJ2JveC1vcGVuJzogZmFCb3hPcGVuLFxuICAgICAgJ3NlZWRsaW5nJzogZmFTZWVkbGluZyxcbiAgICAgICd2b2x1bWUtdXAnOiBmYVZvbHVtZVVwLFxuICAgICAgJ2V4cGFuZC1hcnJvd3MtYWx0JzogZmFFeHBhbmRBcnJvd3NBbHQsXG4gICAgICAndm9sdW1lLW11dGUnOiBmYVZvbHVtZU11dGUsXG4gICAgICAnYmFycyc6IGZhQmFycyxcbiAgICAgICdicmllZmNhc2UnOiBmYUJyaWVmY2FzZSxcbiAgICAgICdtaWNyb2NoaXAnOiBmYU1pY3JvY2hpcCxcbiAgICAgICdoZWFydGJlYXQnOiBmYUhlYXJ0YmVhdCxcbiAgICAgICdoaXN0b3J5JzogZmFIaXN0b3J5LFxuICAgICAgJ21pY3JvcGhvbmUnOiBmYU1pY3JvcGhvbmUsXG4gICAgICAnbGlnaHRidWxiJzogZmFMaWdodGJ1bGIsXG4gICAgICAna2V5JzogZmFLZXksXG4gICAgICAnbGF5ZXItZ3JvdXAnOiBmYUxheWVyR3JvdXAsXG4gICAgICAnbGlzdC11bCc6IGZhTGlzdFVsLFxuICAgICAgJ3ZvbHVtZS1kb3duJzogZmFWb2x1bWVEb3duLFxuICAgICAgJ3BpbGxzJzogZmFQaWxscyxcbiAgICAgICdtb2JpbGUnOiBmYU1vYmlsZSxcbiAgICAgICdtb2JpbGUtYWx0JzogZmFNb2JpbGVBbHQsXG4gICAgICAnbW9uZXktYmlsbCc6IGZhTW9uZXlCaWxsLFxuICAgICAgJ3N0aWNreS1ub3RlJzogZmFTdGlja3lOb3RlLFxuICAgICAgJ2VsbGlwc2lzLXYnOiBmYUVsbGlwc2lzVixcbiAgICAgICdsdW5ncyc6IGZhTHVuZ3MsXG4gICAgICAnY2FzaC1yZWdpc3Rlcic6IGZhQ2FzaFJlZ2lzdGVyLFxuICAgICAgJ3BhcGVyLXBsYW5lJzogZmFQYXBlclBsYW5lLFxuICAgICAgJ2Rlc2t0b3AnOiBmYURlc2t0b3AsXG4gICAgICAnY2hhcnQtcGllJzogZmFDaGFydFBpZSxcbiAgICAgICdtb3VzZS1wb2ludGVyJzogZmFNb3VzZVBvaW50ZXIsXG4gICAgICAnc3dpbW1pbmctcG9vbCc6IGZhU3dpbW1pbmdQb29sLFxuICAgICAgJ2Jhbic6IGZhQmFuLFxuICAgICAgJ3RhZyc6IGZhVGFnLFxuICAgICAgJ3NoaWVsZCc6IGZhU2hpZWxkLFxuICAgICAgJ3FyY29kZSc6IGZhUXJjb2RlLFxuICAgICAgJ3JlZG8nOiBmYVJlZG8sXG4gICAgICAncnVsZXInOiBmYVJ1bGVyLFxuICAgICAgJ3V0ZW5zaWxzJzogZmFVdGVuc2lscyxcbiAgICAgICd0c2hpcnQnOiBmYVRzaGlydCxcbiAgICAgICdzbGlkZXJzLWgnOiBmYVNsaWRlcnNILFxuICAgICAgJ2dsYXNzLXdoaXNrZXknOiBmYUdsYXNzV2hpc2tleSxcbiAgICAgICdzb3J0JzogZmFTb3J0LFxuICAgICAgJ3RhY2hvbWV0ZXItYWx0JzogZmFUYWNob21ldGVyQWx0LFxuICAgICAgJ3Nwb29uJzogZmFTcG9vbixcbiAgICAgICdzdG9yZSc6IGZhU3RvcmUsXG4gICAgICAndGFibGV0JzogZmFUYWJsZXQsXG4gICAgICAndGFibGV0LWFsdCc6IGZhVGFibGV0QWx0LFxuICAgICAgJ3RoZXJtb21ldGVyLWhhbGYnOiBmYVRoZXJtb21ldGVySGFsZixcbiAgICAgICdib2x0JzogZmFCb2x0LFxuICAgICAgJ3RpY2tldC1hbHQnOiBmYVRpY2tldEFsdCxcbiAgICAgICdzaXRlbWFwJzogZmFTaXRlbWFwLFxuICAgICAgJ2JhdGgnOiBmYUJhdGgsXG4gICAgICBcbiAgICAgIC8vIE51ZXZvcyBpY29ub3MgYWdyZWdhZG9zXG4gICAgICAnZ3JpZCc6IGZhVGhMYXJnZSxcbiAgICAgICdncm91cCc6IGZhVXNlcnMsXG4gICAgICAnbGluayc6IGZhTGluayxcbiAgICAgICdjb3B5JzogZmFDb3B5LFxuICAgICAgJ2FjY2Vzc2liaWxpdHktYWx0JzogZmFVbml2ZXJzYWxBY2Nlc3MsXG4gICAgICAnYWNjZXNzaWJpbGl0eSc6IGZhVW5pdmVyc2FsQWNjZXNzLFxuICAgICAgJ2FjdGl2aXR5JzogZmFSdW5uaW5nLFxuICAgICAgJ2FkZC1kb2N1bWVudCc6IGZhRmlsZSxcbiAgICAgICdhZGQtaW1hZ2UnOiBmYUltYWdlLFxuXG4gICAgICAnYW5hbHl0aWNzJzogZmFDaGFydEJhcixcbiAgICAgICdhbmFseXRpY3MtcmFpc2UnOiBmYUNoYXJ0TGluZSxcbiAgICAgICdhcHBsZSc6IGZhQXBwbGVBbHQsXG4gICAgICAnYXNzaXN0YW50JzogZmFSb2JvdCxcbiAgICAgICdiYWctb2YtZmxvdXInOiBmYUdpZnQsXG4gICAgICAnYmFnLXdpdGgtZ2lmdCc6IGZhR2lmdCxcbiAgICAgICdiYWdzJzogZmFTaG9wcGluZ0JhZyxcbiAgICAgICdiYWxhbmNlJzogZmFCYWxhbmNlU2NhbGUsXG4gICAgICAnYmF0dGVyeS1hbHQnOiBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxuICAgICAgJ2JhdHRlcnktY2hhcmdpbmlnJzogZmFCYXR0ZXJ5SGFsZixcbiAgICAgICdiYXR0ZXJ5LWZ1bGwnOiBmYUJhdHRlcnlIYWxmLFxuICAgICAgJ2JhdHRlcnktaGFsZic6IGZhQmF0dGVyeUhhbGYsXG4gICAgICAnYmF0dGVyeS1sb3cnOiBmYUJhdHRlcnlRdWFydGVyLFxuICAgICAgJ2JlbGwtbmV3LW1lc3NhZ2UnOiBmYUJlbGwsXG4gICAgICAnYmVsbC1vZmYnOiBmYUJlbGxTbGFzaCxcbiAgICAgICdiaWN5Y2xlJzogZmFCaWN5Y2xlLFxuICAgICAgJ2Jvb2ttYXJrLXNpbXBsZSc6IGZhQm9va21hcmssXG4gICAgICAnYm93bCc6IGZhQm93bEZvb2QsXG5cbiAgICAgICdidXMtZnJvbnQnOiBmYUJ1cyxcbiAgICAgICdidXR0ZXInOiBmYUJpcnRoZGF5Q2FrZSxcbiAgICAgICdjYWtlJzogZmFCaXJ0aGRheUNha2UsXG4gICAgICAnY2FsY3VsYXRvcic6IGZhQ2FsY3VsYXRvcixcbiAgICAgICdjYWxlbmRhci1oaXN0b3J5LWFsdCc6IGZhQ2FsZW5kYXJEYXksXG4gICAgICAnY2FsZW5kYXItaGlzdG9yeSc6IGZhQ2FsZW5kYXJEYXksXG5cbiAgICAgICdjYW1lcmEnOiBmYUNhbWVyYSxcblxuICAgICAgJ2NhbmR5JzogZmFDb29raWVCaXRlLFxuICAgICAgJ2NhcmV0LWRvd24nOiBmYUNhcmV0RG93bixcbiAgICAgICdjYXJldC1sZWZ0JzogZmFDYXJldExlZnQsXG4gICAgICAnY2FyZXQtcmlnaHQnOiBmYUNhcmV0UmlnaHQsXG4gICAgICAnY2FyZXQtdXAnOiBmYUNhcmV0VXAsXG4gICAgICAnY2VsbHMtZG9jdW1lbnQnOiBmYUZpbGUsXG4gICAgICAnY2hhcnQtYmFyJzogZmFDaGFydEJhcixcbiAgICAgICdjaGFydC1waWUtc2xpY2UnOiBmYUNoYXJ0UGllLFxuICAgICAgJ2NoYXQtY2lyY2xlLXRleHQnOiBmYUNvbW1lbnRzLFxuICAgICAgJ2NoZW1pY2FsLWV4cGVyaW1lbnQnOiBmYUZsYXNrLFxuICAgICAgJ2NoZW1pY2FsLXRlc3QnOiBmYU1pY3Jvc2NvcGUsXG4gICAgICAnY2hvY29sYXRlLWJhcic6IGZhQ29va2llQml0ZSxcbiAgICAgICdjbGVhbmVyJzogZmFTcHJheUNhbixcbiAgICAgICdjbGVhbmVyLWRpc3BlbnNlcic6IGZhU29hcCxcbiAgICAgICdjbG9zZS1mdWxsLXNjcmVlbic6IGZhRXhwYW5kLFxuICAgICAgJ2Nsb3VkLW9mZmxpbmUnOiBmYUNsb3VkLFxuICAgICAgJ2Nsb3VkLXByb2JsZW0nOiBmYUNsb3VkLFxuICAgICAgJ2NvZmZlZSc6IGZhQ29mZmVlLFxuICAgICAgJ2NvbW1lbnRzJzogZmFDb21tZW50LFxuICAgICAgJ2Nvb2tpZSc6IGZhQ29va2llQml0ZSxcbiAgICAgICdjcmVkaXQtY2FyZCc6IGZhQ3JlZGl0Q2FyZCxcbiAgICAgICdjcm9wLWFsdCc6IGZhQ3JvcEFsdCxcbiAgICAgICdjcm9wJzogZmFDcm9wLFxuICAgICAgJ2Nyb3AtaGVhbHRoJzogZmFDcm9wLFxuICAgICAgJ2RlbGl2ZXJ5LWd1eSc6IGZhVHJ1Y2ssXG4gICAgICAnZGV0ZXJnZW50JzogZmFTb2FwLFxuICAgICAgJ2RvY3VtZW50LXVwbG9hZCc6IGZhRmlsZVVwbG9hZCxcbiAgICAgICdkb3RzLXRocmVlJzogZmFFbGxpcHNpc0gsXG4gICAgICAnZG93bmxvYWQtYWx0JzogZmFEb3dubG9hZCxcbiAgICAgICdkcm9uJzogZmFQbGFuZSxcbiAgICAgICdlZHVjYXRpb24nOiBmYUdyYWR1YXRpb25DYXAsXG4gICAgICAnZW52ZWxvcGUtbmV3LW1lc3NhZ2UnOiBmYUVudmVsb3BlLFxuICAgICAgJ2VxdWFscyc6IGZhRXF1YWxzLFxuICAgICAgJ2VyYXNlcic6IGZhRXJhc2VyLFxuICAgICAgJ2V4Y2VsJzogZmFGaWxlRXhjZWwsXG4gICAgICAnZXhjZWwtZG93bmxvYWQnOiBmYUZpbGVEb3dubG9hZCxcbiAgICAgICdleGl0JzogZmFTaWduT3V0QWx0LFxuICAgICAgJ2ZhY2Utc2F0aXNmaWVkJzogZmFTbWlsZSxcbiAgICAgICdmYWNlLWRpc3NhdGlzZmllZCc6IGZhRnJvd24sXG4gICAgICAnZmFjZS1tYXNrJzogZmFNYXNrLFxuICAgICAgJ2ZhY2Vib29rJzogZmFTaGFyZSxcbiAgICAgICdmYXN0LXRydWNrJzogZmFUcnVjayxcblxuICAgICAgJ2Zhdm9yaXRlLW1lZGFsJzogZmFNZWRhbCxcbiAgICAgICdmYXZvcml0ZS1wYWNrYWdlJzogZmFCb3hPcGVuLFxuICAgICAgJ2ZlZWRlcic6IGZhU2VlZGxpbmcsXG4gICAgICAnZmlsZS1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxuICAgICAgJ2ZpbHRlcic6IGZhRmlsdGVyLFxuICAgICAgJ2ZpbmdlcnByaW50JzogZmFGaW5nZXJwcmludCxcbiAgICAgICdmaXJlJzogZmFGaXJlLFxuICAgICAgJ2ZpcmV3b3Jrcyc6IGZhRmlyZSxcbiAgICAgICdmaXJzdC1wbGFjZSc6IGZhVHJvcGh5LFxuICAgICAgJ2Zpc2gnOiBmYUZpc2gsXG4gICAgICAnZmxhZyc6IGZhRmxhZyxcbiAgICAgICdmb3J3YXJkJzogZmFGb3J3YXJkLFxuICAgICAgJ2Z1bGwtdm9sdW1lJzogZmFWb2x1bWVVcCxcbiAgICAgICdmdWxsLXNjcmVlbic6IGZhRXhwYW5kQXJyb3dzQWx0LFxuICAgICAgJ2dlYXInOiBmYUNvZyxcbiAgICAgICdnaWZ0JzogZmFHaWZ0LFxuICAgICAgJ2dpZnQtZGVsaXZlcnknOiBmYUdpZnQsXG4gICAgICAnZ2xvYmUnOiBmYUdsb2JlLFxuICAgICAgJ2dyb3VwLWJpZ2dlcic6IGZhVXNlcnMsXG4gICAgICAnaGFsZi12b2x1bWUnOiBmYVZvbHVtZU11dGUsXG4gICAgICAnaGFtYnVyZ2VyJzogZmFCYXJzLFxuICAgICAgJ2hhbmRiYWcnOiBmYUJyaWVmY2FzZSxcbiAgICAgICdoYXBweS1jaGlwJzogZmFNaWNyb2NoaXAsXG4gICAgICAnaGVhbHRoeSc6IGZhSGVhcnRiZWF0LFxuICAgICAgJ2hpc3RvcnktdGltZSc6IGZhSGlzdG9yeSxcbiAgICAgICdoeWRyb3Bob25lJzogZmFNaWNyb3Bob25lLFxuICAgICAgJ2ljZS1jcmVhbSc6IGZhSWNlQ3JlYW0sXG4gICAgICAnaWRlYSc6IGZhTGlnaHRidWxiLFxuXG4gICAgICAnaW5zdGFncmFtJzogZmFTaGFyZSxcbiAgICAgICdpbnRlbGxpZ2VuY2UtYS1pJzogZmFSb2JvdCxcbiAgICAgICdsYXB0b3AnOiBmYUxhcHRvcCxcbiAgICAgICdsYXllcic6IGZhTGF5ZXJHcm91cCxcbiAgICAgICdsaXN0LWJ1bGxldGVkJzogZmFMaXN0VWwsXG4gICAgICAnbG93LXZvbHVtZSc6IGZhVm9sdW1lRG93bixcbiAgICAgICdtYWNoaW5lLWxlYXJuaW5nLW1vZGVsJzogZmFSb2JvdCxcbiAgICAgICdtYWduaWZ5aW5nLWdsYXNzJzogZmFTZWFyY2gsXG4gICAgICAnbWFwJzogZmFHbG9iZSxcbiAgICAgICdtYXAtcGluJzogZmFNYXBQaW4sXG4gICAgICAnbWFwLW1hcmtlcic6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ2xvY2F0aW9uJzogZmFNYXBNYXJrZXJBbHQsXG4gICAgICAnbG9jYXRpb24tcGluJzogZmFNYXBQaW4sXG4gICAgICAnbG9jYXRpb24tYXJyb3cnOiBmYUxvY2F0aW9uQXJyb3csXG4gICAgICAnY29tcGFzcyc6IGZhQ29tcGFzcyxcbiAgICAgICduYXZpZ2F0aW9uJzogZmFDb21wYXNzLFxuICAgICAgJ21hcHMnOiBmYUdsb2JlLFxuICAgICAgJ21lZGFsJzogZmFNZWRhbCxcbiAgICAgICdtZWRpY2luZS1hbGVydCc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICdtZWRpY2luZSc6IGZhUGlsbHMsXG4gICAgICAnbWljcm8tY2hpcC1hbHQnOiBmYU1pY3JvY2hpcCxcbiAgICAgICdtaWNyby1jaGlwJzogZmFNaWNyb2NoaXAsXG4gICAgICAnbWljcm9zY29wZSc6IGZhTWljcm9zY29wZSxcbiAgICAgICdtb2JpbGUtaG9yaXpvbnRhbCc6IGZhTW9iaWxlLFxuICAgICAgJ21vYmlsZS12ZXJ0aWNhbCc6IGZhTW9iaWxlQWx0LFxuICAgICAgJ21vbmV5JzogZmFNb25leUJpbGwsXG4gICAgICAnbW90b3JjeWNsZSc6IGZhTW90b3JjeWNsZSxcbiAgICAgICdub3RlLXBlbmNpbCc6IGZhU3RpY2t5Tm90ZSxcbiAgICAgICdvcGVubG9jayc6IGZhVW5sb2NrLFxuICAgICAgJ292ZXJmbG93LW1lbnUtdmVydGljYWwnOiBmYUVsbGlwc2lzVixcbiAgICAgICdveHlnZW4nOiBmYUx1bmdzLFxuICAgICAgJ3Atby1zJzogZmFDYXNoUmVnaXN0ZXIsXG5cbiAgICAgICdwYXBlci1wbGFuZS1yaWdodCc6IGZhUGFwZXJQbGFuZSxcbiAgICAgICdwYXBlcmNsaXAnOiBmYVBhcGVyY2xpcCxcbiAgICAgICdwYXVzZSc6IGZhUGF1c2UsXG4gICAgICAncGVyY2VudCc6IGZhUGVyY2VudCxcbiAgICAgICdwaWdneS1iYW5rJzogZmFQaWdneUJhbmssXG4gICAgICAncGlsbCc6IGZhUGlsbHMsXG4gICAgICAncGxhY2UtbG9jYXRpb24nOiBmYU1hcE1hcmtlckFsdCxcbiAgICAgICdwbGF5JzogZmFQbGF5LFxuICAgICAgJ3BvaW50ZXInOiBmYU1vdXNlUG9pbnRlcixcbiAgICAgICdwb2ludGVyLWxvY2snOiBmYU1vdXNlUG9pbnRlcixcbiAgICAgICdwb29sLWxhZGRlcic6IGZhU3dpbW1pbmdQb29sLFxuICAgICAgJ3Bvc3QtaGlzdG9yeSc6IGZhSGlzdG9yeSxcbiAgICAgICdwb3N0aXQnOiBmYVN0aWNreU5vdGUsXG4gICAgICAncHJvaGliaXQnOiBmYUJhbixcbiAgICAgICdwcm9tb3Rpb24nOiBmYVRhZyxcbiAgICAgICdwcm90ZWN0aW9uLWNoZWNrZWQnOiBmYVNoaWVsZCxcbiAgICAgICdxcic6IGZhUXJjb2RlLFxuICAgICAgJ3JlY2VpcHQnOiBmYVJlY2VpcHQsXG4gICAgICAncmVjZWlwdC1jaGVja2VkJzogZmFSZWNlaXB0LFxuXG4gICAgICAncmVuZXcnOiBmYVJlZG8sXG4gICAgICAncmVwZWF0JzogZmFSZWRvLFxuICAgICAgJ3JlcGVhdC1wdXJjaGFzZSc6IGZhUmVkbyxcbiAgICAgICdydWMnOiBmYVVzZXIsXG4gICAgICAncnVsZXItYWx0JzogZmFSdWxlcixcbiAgICAgICdzYXVjZSc6IGZhVXRlbnNpbHMsXG4gICAgICAnc2Nhbic6IGZhUXJjb2RlLFxuICAgICAgJ3NlYXJjaC1sYXllcnMnOiBmYVNlYXJjaCxcbiAgICAgICdzZW5zb3InOiBmYU1pY3JvY2hpcCxcbiAgICAgICdzZXR0aW5ncy1hbHQnOiBmYUNvZyxcbiAgICAgICdzaGFyZS1uZXR3b3JrJzogZmFTaGFyZSxcbiAgICAgICdzaGlydCc6IGZhVHNoaXJ0LFxuICAgICAgJ3Nob3BwaW5nLWNhcnQnOiBmYVNob3BwaW5nQ2FydCxcbiAgICAgICdzaHJpbXAnOiBmYUZpc2gsXG4gICAgICAnc2lnbi1vdXQnOiBmYVNpZ25PdXRBbHQsXG4gICAgICAnc2xpZGVycy1ob3Jpem9udGFsJzogZmFTbGlkZXJzSCxcbiAgICAgICdzb2RhJzogZmFHbGFzc1doaXNrZXksXG4gICAgICAnc29ydC1ieSc6IGZhU29ydCxcbiAgICAgICdzb3VwLWRpc3BlbnNlcic6IGZhVXRlbnNpbHMsXG4gICAgICAnc291cC1ub29kbGVzJzogZmFVdGVuc2lscyxcbiAgICAgICdzcGVlZG9tZXRlcic6IGZhVGFjaG9tZXRlckFsdCxcbiAgICAgICdzcG9uZ2UnOiBmYVNwb29uLFxuICAgICAgJ3N0YXItaGFsZic6IGZhU3RhckhhbGYsXG4gICAgICAnc3RvcCc6IGZhU3RvcCxcbiAgICAgICdzdG9yZWZyb250JzogZmFTdG9yZSxcbiAgICAgICdzdHlsaW5nLWNyZWFtJzogZmFTb2FwLFxuICAgICAgJ3N1YnN0cmFjdC12b2x1bWUnOiBmYVZvbHVtZU11dGUsXG4gICAgICAndGVtcGVyYXR1cmUnOiBmYVRoZXJtb21ldGVySGFsZixcbiAgICAgICd0aHVtYnMtZG93bic6IGZhVGh1bWJzRG93bixcbiAgICAgICd0aHVtYnMtdXAnOiBmYVRodW1ic1VwLFxuICAgICAgJ3RodW5kZXInOiBmYUJvbHQsXG4gICAgICAndGlja2V0JzogZmFUaWNrZXRBbHQsXG4gICAgICAndG9vdGhwYXN0ZSc6IGZhU29hcCxcbiAgICAgICd0cmVlLXZpZXcnOiBmYVNpdGVtYXAsXG4gICAgICAndHJlbmQtZG93bic6IGZhQ2hhcnRMaW5lLFxuICAgICAgJ3RyZW5kLXVwJzogZmFDaGFydExpbmUsXG4gICAgICAndHJvcGh5JzogZmFUcm9waHksXG4gICAgICAndHJ1Y2snOiBmYVRydWNrLFxuICAgICAgJ3R1Yic6IGZhQmF0aCxcbiAgICAgICd0d2l0dGVyJzogZmFTaGFyZSxcbiAgICAgICd1bmRvJzogZmFVbmRvLFxuICAgICAgJ3VwbG9hZCc6IGZhVXBsb2FkLFxuICAgICAgJ3VzZXItYXZhdGFyJzogZmFVc2VyLFxuICAgICAgJ3VzZXItYWRkJzogZmFVc2VyUGx1cyxcbiAgICAgICd1c2VyLXBsdXMnOiBmYVVzZXJQbHVzLFxuICAgICAgJ3VzZXItc3Vic3RyYWN0JzogZmFVc2VyTWludXMsXG4gICAgICAndXNlci1taW51cyc6IGZhVXNlck1pbnVzLFxuICAgICAgJ3VzZXItd2l0aC1jYXJ0JzogZmFVc2VyLFxuICAgICAgJ3ZpZGVvJzogZmFWaWRlbyxcbiAgICAgICd2aWRlby1sYXllcic6IGZhVmlkZW8sXG4gICAgICAnZXhjbGFtYXRpb24tY2lyY2xlJzogZmFFeGNsYW1hdGlvbkNpcmNsZSxcbiAgICAgICd3YXJuaW5nLWNpcmNsZSc6IGZhRXhjbGFtYXRpb25DaXJjbGUsXG4gICAgICAnd2FybmluZy10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICd3aGF0c2FwcCc6IGZhU2hhcmUsXG4gICAgICAnd2lmaSc6IGZhV2lmaSxcbiAgICAgICd3aS1maSc6IGZhV2lmaSxcbiAgICAgICd3aS1maS1vZmYnOiBmYVdpZmksXG4gICAgICAneCc6IGZhVGltZXMsXG4gICAgICAnY2xvc2UnOiBmYVRpbWVzLFxuICAgICAgJ3lvdXR1YmUnOiBmYVNoYXJlLFxuICAgICAgXG4gICAgICAvLyBUYW1iacOpbiBzb3BvcnRhIGZvcm1hdG8gZmFzIGZhLVxuICAgICAgJ2ZhcyBmYS1zcGlubmVyJzogZmFTcGlubmVyLFxuICAgICAgJ2ZhcyBmYS1kb3dubG9hZCc6IGZhRG93bmxvYWQsXG4gICAgICAnZmFzIGZhLXRyYXNoJzogZmFUcmFzaCxcbiAgICAgICdmYXMgZmEtc2hhcmUnOiBmYVNoYXJlLFxuICAgICAgJ2ZhcyBmYS1wcmludCc6IGZhUHJpbnQsXG4gICAgICAnZmFzIGZhLWhlYXJ0JzogZmFIZWFydCxcbiAgICAgICdmYXMgZmEtaG9tZSc6IGZhSG9tZSxcbiAgICAgICdmYXMgZmEtdXNlcic6IGZhVXNlcixcbiAgICAgICdmYXMgZmEtY29nJzogZmFDb2csXG4gICAgICAnZmFzIGZhLXNlYXJjaCc6IGZhU2VhcmNoLFxuICAgICAgJ2ZhcyBmYS1zdGFyJzogZmFTdGFyLFxuICAgICAgJ2ZhcyBmYS1lZGl0JzogZmFFZGl0LFxuICAgICAgJ2ZhcyBmYS1zYXZlJzogZmFTYXZlLFxuICAgICAgJ2ZhcyBmYS1wbHVzJzogZmFQbHVzLFxuICAgICAgJ2ZhcyBmYS1taW51cyc6IGZhTWludXMsXG4gICAgICAnZmFzIGZhLWNoZWNrJzogZmFDaGVjayxcbiAgICAgICdmYXMgZmEtdGltZXMnOiBmYVRpbWVzLFxuICAgICAgJ2ZhcyBmYS14JzogZmFUaW1lcyxcbiAgICAgICdmYXMgZmEtY2xvc2UnOiBmYVRpbWVzLFxuICAgICAgJ2ZhcyBmYS1leWUnOiBmYUV5ZSxcbiAgICAgICdmYXMgZmEtZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcbiAgICAgICdmYXMgZmEtbG9jayc6IGZhTG9jayxcbiAgICAgICdmYXMgZmEtdW5sb2NrJzogZmFVbmxvY2ssXG4gICAgICAnZmFzIGZhLWJlbGwnOiBmYUJlbGwsXG4gICAgICAnZmFzIGZhLWVudmVsb3BlJzogZmFFbnZlbG9wZSxcbiAgICAgICdmYXMgZmEtcGhvbmUnOiBmYVBob25lLFxuICAgICAgJ2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhcic6IGZhQ2FsZW5kYXIsXG4gICAgICAnZmFzIGZhLWNsb2NrJzogZmFDbG9jayxcbiAgICAgICdmYXMgZmEtaW5mbyc6IGZhSW5mbyxcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgICAnZmFzIGZhLXF1ZXN0aW9uJzogZmFRdWVzdGlvbixcbiAgICAgICdmYXMgZmEtY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcbiAgICAgICdmYXMgZmEtY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXG4gICAgICAnZmFzIGZhLWFycm93LWxlZnQnOiBmYUFycm93TGVmdCxcbiAgICAgICdmYXMgZmEtYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXG4gICAgICAnZmFzIGZhLWFycm93LXVwJzogZmFBcnJvd1VwLFxuICAgICAgJ2ZhcyBmYS1hcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXG4gICAgICAnZmFzIGZhLXBlbmNpbCc6IGZhUGVuY2lsLFxuICAgICAgJ2ZhcyBmYS1hbmdsZS1kb3VibGUtbGVmdCc6IGZhQW5nbGVEb3VibGVMZWZ0LFxuICAgICAgJ2ZhcyBmYS1hbmdsZS1sZWZ0JzogZmFBbmdsZUxlZnQsXG4gICAgICAnZmFzIGZhLWFuZ2xlLXJpZ2h0JzogZmFBbmdsZVJpZ2h0LFxuICAgICAgJ2ZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHQnOiBmYUFuZ2xlRG91YmxlUmlnaHQsXG4gICAgICAnZmFzIGZhLXRhYmxlJzogZmFUYWJsZSxcbiAgICAgICdmYXMgZmEtdGgtbGFyZ2UnOiBmYVRoTGFyZ2UsXG4gICAgICAnZmFzIGZhLXVzZXJzJzogZmFVc2VycyxcbiAgICAgICdmYXMgZmEtbGluayc6IGZhTGluayxcbiAgICAgICdmYXMgZmEtY29weSc6IGZhQ29weSxcbiAgICAgICdmYXMgZmEtdW5pdmVyc2FsLWFjY2Vzcyc6IGZhVW5pdmVyc2FsQWNjZXNzLFxuICAgICAgJ2ZhcyBmYS1ydW5uaW5nJzogZmFSdW5uaW5nLFxuICAgICAgJ2ZhcyBmYS1pbWFnZSc6IGZhSW1hZ2UsXG4gICAgICAnZmFzIGZhLWNhbGVuZGFyLWFsdCc6IGZhQ2FsZW5kYXJBbHQsXG4gICAgICAnZmFzIGZhLWNoYXJ0LWJhcic6IGZhQ2hhcnRCYXIsXG4gICAgICAnZmFzIGZhLWNoYXJ0LWxpbmUnOiBmYUNoYXJ0TGluZSxcbiAgICAgICdmYXMgZmEtYXBwbGUtYWx0JzogZmFBcHBsZUFsdCxcbiAgICAgICdmYXMgZmEtcm9ib3QnOiBmYVJvYm90LFxuICAgICAgJ2ZhcyBmYS1naWZ0JzogZmFHaWZ0LFxuICAgICAgJ2ZhcyBmYS1zaG9wcGluZy1iYWcnOiBmYVNob3BwaW5nQmFnLFxuICAgICAgJ2ZhcyBmYS1iYWxhbmNlLXNjYWxlJzogZmFCYWxhbmNlU2NhbGUsXG4gICAgICAnZmFzIGZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnMnOiBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LWhhbGYnOiBmYUJhdHRlcnlIYWxmLFxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LXF1YXJ0ZXInOiBmYUJhdHRlcnlRdWFydGVyLFxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LWVtcHR5JzogZmFCYXR0ZXJ5RW1wdHksXG4gICAgICAnZmFzIGZhLWJlbGwtc2xhc2gnOiBmYUJlbGxTbGFzaCxcbiAgICAgICdmYXMgZmEtYmljeWNsZSc6IGZhQmljeWNsZSxcbiAgICAgICdmYXMgZmEtYm9va21hcmsnOiBmYUJvb2ttYXJrLFxuICAgICAgJ2ZhcyBmYS1ib3dsLWZvb2QnOiBmYUJvd2xGb29kLFxuICAgICAgJ2ZhcyBmYS1ib3gnOiBmYUJveCxcbiAgICAgICdmYXMgZmEtYnVzJzogZmFCdXMsXG4gICAgICAnZmFzIGZhLWJpcnRoZGF5LWNha2UnOiBmYUJpcnRoZGF5Q2FrZSxcbiAgICAgICdmYXMgZmEtY2FsY3VsYXRvcic6IGZhQ2FsY3VsYXRvcixcbiAgICAgICdmYXMgZmEtY2FsZW5kYXItZGF5JzogZmFDYWxlbmRhckRheSxcbiAgICAgICdmYXMgZmEtY2FtZXJhJzogZmFDYW1lcmEsXG4gICAgICAnZmFzIGZhLWNhcmV0LWRvd24nOiBmYUNhcmV0RG93bixcbiAgICAgICdmYXMgZmEtY2FyZXQtbGVmdCc6IGZhQ2FyZXRMZWZ0LFxuICAgICAgJ2ZhcyBmYS1jYXJldC1yaWdodCc6IGZhQ2FyZXRSaWdodCxcbiAgICAgICdmYXMgZmEtY2FyZXQtdXAnOiBmYUNhcmV0VXAsXG4gICAgICAnZmFzIGZhLWZpbGUnOiBmYUZpbGUsXG4gICAgICAnZmFzIGZhLWNoYXJ0LXBpZSc6IGZhQ2hhcnRQaWUsXG4gICAgICAnZmFzIGZhLWNvbW1lbnRzJzogZmFDb21tZW50cyxcbiAgICAgICdmYXMgZmEtZmxhc2snOiBmYUZsYXNrLFxuICAgICAgJ2ZhcyBmYS1taWNyb3Njb3BlJzogZmFNaWNyb3Njb3BlLFxuICAgICAgJ2ZhcyBmYS1jb29raWUtYml0ZSc6IGZhQ29va2llQml0ZSxcbiAgICAgICdmYXMgZmEtc3ByYXktY2FuJzogZmFTcHJheUNhbixcbiAgICAgICdmYXMgZmEtc29hcCc6IGZhU29hcCxcbiAgICAgICdmYXMgZmEtZXhwYW5kJzogZmFFeHBhbmQsXG4gICAgICAnZmFzIGZhLWNsb3VkJzogZmFDbG91ZCxcbiAgICAgICdmYXMgZmEtY29mZmVlJzogZmFDb2ZmZWUsXG4gICAgICAnZmFzIGZhLWNvbW1lbnQnOiBmYUNvbW1lbnQsXG4gICAgICAnZmFzIGZhLWNyZWRpdC1jYXJkJzogZmFDcmVkaXRDYXJkLFxuICAgICAgJ2ZhcyBmYS1jcm9wJzogZmFDcm9wLFxuICAgICAgJ2ZhcyBmYS1jcm9wLWFsdCc6IGZhQ3JvcEFsdCxcbiAgICAgICdmYXMgZmEtdHJ1Y2snOiBmYVRydWNrLFxuICAgICAgJ2ZhcyBmYS1maWxlLXVwbG9hZCc6IGZhRmlsZVVwbG9hZCxcbiAgICAgICdmYXMgZmEtZWxsaXBzaXMtaCc6IGZhRWxsaXBzaXNILFxuICAgICAgJ2ZhcyBmYS1wbGFuZSc6IGZhUGxhbmUsXG4gICAgICAnZmFzIGZhLWdyYWR1YXRpb24tY2FwJzogZmFHcmFkdWF0aW9uQ2FwLFxuICAgICAgJ2ZhcyBmYS1lcXVhbHMnOiBmYUVxdWFscyxcbiAgICAgICdmYXMgZmEtZXJhc2VyJzogZmFFcmFzZXIsXG4gICAgICAnZmFzIGZhLWZpbGUtZXhjZWwnOiBmYUZpbGVFeGNlbCxcbiAgICAgICdmYXMgZmEtZmlsZS1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxuICAgICAgJ2ZhcyBmYS1zaWduLW91dC1hbHQnOiBmYVNpZ25PdXRBbHQsXG4gICAgICAnZmFzIGZhLXNtaWxlJzogZmFTbWlsZSxcbiAgICAgICdmYXMgZmEtZnJvd24nOiBmYUZyb3duLFxuICAgICAgJ2ZhcyBmYS1tYXNrJzogZmFNYXNrLFxuICAgICAgJ2ZhcyBmYS1tZWRhbCc6IGZhTWVkYWwsXG4gICAgICAnZmFzIGZhLWJveC1vcGVuJzogZmFCb3hPcGVuLFxuICAgICAgJ2ZhcyBmYS1zZWVkbGluZyc6IGZhU2VlZGxpbmcsXG4gICAgICAnZmFzIGZhLWZpbHRlcic6IGZhRmlsdGVyLFxuICAgICAgJ2ZhcyBmYS1maW5nZXJwcmludCc6IGZhRmluZ2VycHJpbnQsXG4gICAgICAnZmFzIGZhLWZpcmUnOiBmYUZpcmUsXG4gICAgICAnZmFzIGZhLXRyb3BoeSc6IGZhVHJvcGh5LFxuICAgICAgJ2ZhcyBmYS1maXNoJzogZmFGaXNoLFxuICAgICAgJ2ZhcyBmYS1mbGFnJzogZmFGbGFnLFxuICAgICAgJ2ZhcyBmYS1mb3J3YXJkJzogZmFGb3J3YXJkLFxuICAgICAgJ2ZhcyBmYS12b2x1bWUtdXAnOiBmYVZvbHVtZVVwLFxuICAgICAgJ2ZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdCc6IGZhRXhwYW5kQXJyb3dzQWx0LFxuICAgICAgJ2ZhcyBmYS1nbG9iZSc6IGZhR2xvYmUsXG4gICAgICAnZmFzIGZhLXZvbHVtZS1tdXRlJzogZmFWb2x1bWVNdXRlLFxuICAgICAgJ2ZhcyBmYS1iYXJzJzogZmFCYXJzLFxuICAgICAgJ2ZhcyBmYS1icmllZmNhc2UnOiBmYUJyaWVmY2FzZSxcbiAgICAgICdmYXMgZmEtbWljcm9jaGlwJzogZmFNaWNyb2NoaXAsXG4gICAgICAnZmFzIGZhLWhlYXJ0YmVhdCc6IGZhSGVhcnRiZWF0LFxuICAgICAgJ2ZhcyBmYS1oaXN0b3J5JzogZmFIaXN0b3J5LFxuICAgICAgJ2ZhcyBmYS1taWNyb3Bob25lJzogZmFNaWNyb3Bob25lLFxuICAgICAgJ2ZhcyBmYS1pY2UtY3JlYW0nOiBmYUljZUNyZWFtLFxuICAgICAgJ2ZhcyBmYS1saWdodGJ1bGInOiBmYUxpZ2h0YnVsYixcbiAgICAgICdmYXMgZmEta2V5JzogZmFLZXksXG4gICAgICAnZmFzIGZhLWxhcHRvcCc6IGZhTGFwdG9wLFxuICAgICAgJ2ZhcyBmYS1sYXllci1ncm91cCc6IGZhTGF5ZXJHcm91cCxcbiAgICAgICdmYXMgZmEtbGlzdC11bCc6IGZhTGlzdFVsLFxuICAgICAgJ2ZhcyBmYS12b2x1bWUtZG93bic6IGZhVm9sdW1lRG93bixcbiAgICAgICdmYXMgZmEtbWFwLXBpbic6IGZhTWFwUGluLFxuICAgICAgJ2ZhcyBmYS1sb2NhdGlvbi1hcnJvdyc6IGZhTG9jYXRpb25BcnJvdyxcbiAgICAgICdmYXMgZmEtY29tcGFzcyc6IGZhQ29tcGFzcyxcbiAgICAgICdmYXMgZmEtcGlsbHMnOiBmYVBpbGxzLFxuICAgICAgJ2ZhcyBmYS1tb2JpbGUnOiBmYU1vYmlsZSxcbiAgICAgICdmYXMgZmEtbW9iaWxlLWFsdCc6IGZhTW9iaWxlQWx0LFxuICAgICAgJ2ZhcyBmYS1tb25leS1iaWxsJzogZmFNb25leUJpbGwsXG4gICAgICAnZmFzIGZhLW1vdG9yY3ljbGUnOiBmYU1vdG9yY3ljbGUsXG4gICAgICAnZmFzIGZhLXN0aWNreS1ub3RlJzogZmFTdGlja3lOb3RlLFxuICAgICAgJ2ZhcyBmYS1lbGxpcHNpcy12JzogZmFFbGxpcHNpc1YsXG4gICAgICAnZmFzIGZhLWx1bmdzJzogZmFMdW5ncyxcbiAgICAgICdmYXMgZmEtY2FzaC1yZWdpc3Rlcic6IGZhQ2FzaFJlZ2lzdGVyLFxuICAgICAgJ2ZhcyBmYS1wYXBlci1wbGFuZSc6IGZhUGFwZXJQbGFuZSxcbiAgICAgICdmYXMgZmEtcGFwZXJjbGlwJzogZmFQYXBlcmNsaXAsXG4gICAgICAnZmFzIGZhLWRlc2t0b3AnOiBmYURlc2t0b3AsXG4gICAgICAnZmFzIGZhLXBhdXNlJzogZmFQYXVzZSxcbiAgICAgICdmYXMgZmEtcGVyY2VudCc6IGZhUGVyY2VudCxcbiAgICAgICdmYXMgZmEtcGlnZ3ktYmFuayc6IGZhUGlnZ3lCYW5rLFxuICAgICAgJ2ZhcyBmYS1wbGF5JzogZmFQbGF5LFxuICAgICAgJ2ZhcyBmYS1tb3VzZS1wb2ludGVyJzogZmFNb3VzZVBvaW50ZXIsXG4gICAgICAnZmFzIGZhLXN3aW1taW5nLXBvb2wnOiBmYVN3aW1taW5nUG9vbCxcbiAgICAgICdmYXMgZmEtYmFuJzogZmFCYW4sXG4gICAgICAnZmFzIGZhLXRhZyc6IGZhVGFnLFxuICAgICAgJ2ZhcyBmYS1zaGllbGQnOiBmYVNoaWVsZCxcbiAgICAgICdmYXMgZmEtcXJjb2RlJzogZmFRcmNvZGUsXG4gICAgICAnZmFzIGZhLXJlY2VpcHQnOiBmYVJlY2VpcHQsXG4gICAgICAnZmFzIGZhLXJlZG8nOiBmYVJlZG8sXG4gICAgICAnZmFzIGZhLXJ1bGVyJzogZmFSdWxlcixcbiAgICAgICdmYXMgZmEtdXRlbnNpbHMnOiBmYVV0ZW5zaWxzLFxuICAgICAgJ2ZhcyBmYS10c2hpcnQnOiBmYVRzaGlydCxcbiAgICAgICdmYXMgZmEtc2hvcHBpbmctY2FydCc6IGZhU2hvcHBpbmdDYXJ0LFxuICAgICAgJ2ZhcyBmYS1zbGlkZXJzLWgnOiBmYVNsaWRlcnNILFxuICAgICAgJ2ZhcyBmYS1nbGFzcy13aGlza2V5JzogZmFHbGFzc1doaXNrZXksXG4gICAgICAnZmFzIGZhLXNvcnQnOiBmYVNvcnQsXG4gICAgICAnZmFzIGZhLXRhY2hvbWV0ZXItYWx0JzogZmFUYWNob21ldGVyQWx0LFxuICAgICAgJ2ZhcyBmYS1zcG9vbic6IGZhU3Bvb24sXG4gICAgICAnZmFzIGZhLXN0YXItaGFsZic6IGZhU3RhckhhbGYsXG4gICAgICAnZmFzIGZhLXN0b3AnOiBmYVN0b3AsXG4gICAgICAnZmFzIGZhLXN0b3JlJzogZmFTdG9yZSxcbiAgICAgICdmYXMgZmEtdGhlcm1vbWV0ZXItaGFsZic6IGZhVGhlcm1vbWV0ZXJIYWxmLFxuICAgICAgJ2ZhcyBmYS10aHVtYnMtZG93bic6IGZhVGh1bWJzRG93bixcbiAgICAgICdmYXMgZmEtdGh1bWJzLXVwJzogZmFUaHVtYnNVcCxcbiAgICAgICdmYXMgZmEtYm9sdCc6IGZhQm9sdCxcbiAgICAgICdmYXMgZmEtdGlja2V0LWFsdCc6IGZhVGlja2V0QWx0LFxuICAgICAgJ2ZhcyBmYS1zaXRlbWFwJzogZmFTaXRlbWFwLFxuICAgICAgJ2ZhcyBmYS1iYXRoJzogZmFCYXRoLFxuICAgICAgJ2ZhcyBmYS11bmRvJzogZmFVbmRvLFxuICAgICAgJ2ZhcyBmYS11cGxvYWQnOiBmYVVwbG9hZCxcbiAgICAgICdmYXMgZmEtdXNlci1wbHVzJzogZmFVc2VyUGx1cyxcbiAgICAgICdmYXMgZmEtdXNlci1taW51cyc6IGZhVXNlck1pbnVzLFxuICAgICAgJ2ZhcyBmYS12aWRlbyc6IGZhVmlkZW8sXG4gICAgICAnZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc6IGZhRXhjbGFtYXRpb25DaXJjbGUsXG4gICAgICAnZmFzIGZhLXdpZmknOiBmYVdpZmksXG4gICAgICAnZmFzIGZhLXRhYmxldCc6IGZhVGFibGV0LFxuICAgICAgJ2ZhcyBmYS10YWJsZXQtYWx0JzogZmFUYWJsZXRBbHQsXG4gICAgICAnZmFzIGZhLWFtYnVsYW5jZSc6IGZhQW1idWxhbmNlXG4gICAgfTtcbiAgICBcbiAgICAvLyBTaSBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgw7pzYWxvXG4gICAgaWYgKGxvY2FsSWNvbk1hcFt0aGlzLmljb25dKSB7XG4gICAgICByZXR1cm4gbG9jYWxJY29uTWFwW3RoaXMuaWNvbl07XG4gICAgfVxuICAgIFxuICAgIC8vIFNpIG5vIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCBpbnRlbnRhIGNvbiBmaW5kSWNvbkRlZmluaXRpb25cbiAgICAvLyBGb3JtYXRvOiAnZmFzIGZhLXNwaW5uZXInIG8gJ3NwaW5uZXInIChhc3VtZSAnZmFzJyBwb3IgZGVmZWN0bylcbiAgICBsZXQgaWNvbk5hbWUgPSB0aGlzLmljb247XG4gICAgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmFzIGZhLScpKSB7XG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYXMgZmEtJywgJycpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYS0nKSkge1xuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmEtJywgJycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBmb3VuZEljb24gPSBmaW5kSWNvbkRlZmluaXRpb24oeyBwcmVmaXg6ICdmYXMnLCBpY29uTmFtZTogaWNvbk5hbWUgYXMgSWNvbk5hbWUgfSk7XG4gICAgaWYgKGZvdW5kSWNvbikge1xuICAgICAgcmV0dXJuIGZvdW5kSWNvbjtcbiAgICB9XG4gICAgXG4gICAgLy8gU2kgbm8gc2UgZW5jdWVudHJhLCByZXRvcm5hIHVuZGVmaW5lZFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBTaSBlc3TDoSBkaXNhYmxlZCBvIGxvYWRpbmcsIHByZXZlbmlyIGNvbXBsZXRhbWVudGUgZWwgZXZlbnRvXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBTb2xvIGVtaXRpciBzaSBubyBlc3TDoSBkaXNhYmxlZCBuaSBsb2FkaW5nXG4gICAgdGhpcy5jbGlja2VkLmVtaXQoKTtcbiAgfVxuXG4gIGdldCBidXR0b25DbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICdidG4nLFxuICAgICAgYGJ0bi0ke3RoaXMudmFyaWFudH1gLFxuICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcbiAgICAgIHRoaXMuZnVsbFdpZHRoID8gJ3ctMTAwJyA6ICcnLFxuICAgICAgdGhpcy5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcbiAgICAgIHRoaXMubG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnLFxuICAgICAgdGhpcy5ub0FuaW1hdGUgPyAnbm8tYW5pbWF0ZScgOiAnJ1xuICAgIF07XG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIC8vIEVsIGJvdMOzbiBlcyBpbnRlcmFjdGl2byBzb2xvIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGdldCBzaG93U3Bpbm5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHNob3dDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIC8vIE1vc3RyYXIgY29udGVuaWRvICh0ZXh0byArIGljb25vKSBzb2xvIHNpIG5vIGVzdMOhIGxvYWRpbmdcbiAgICByZXR1cm4gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2l6ZUNsYXNzKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgcmV0dXJuICdidG4tc20nO1xuICAgICAgY2FzZSAnbWQnOlxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7XG4gICAgICBjYXNlICdsZyc6XG4gICAgICAgIHJldHVybiAnYnRuLWxnJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnYnRuLW1kJzsgLy8gUG9yIGRlZmVjdG8gdXNhIGVsIHRhbWHDsW8gbWVkaWFub1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvblxyXG4gICNidXR0b25FbGVtZW50XHJcbiAgW2NsYXNzXT1cImJ1dHRvbkNsYXNzZXNcIlxyXG4gIFt0eXBlXT1cInR5cGVcIlxyXG4gIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmcgPyAnJyA6IG51bGxcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICBbY2xhc3MuaGFzLXRvb2x0aXBdPVwidG9vbHRpcFwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbj5cclxuICA8IS0tIENvbnRlbmlkbyBkZWwgYm90w7NuIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGVudFwiIFtjbGFzcy5sb2FkaW5nLWhpZGRlbl09XCJzaG93U3Bpbm5lclwiPlxyXG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiAocG9zaXRpb24gPT09ICdsZWZ0JyB8fCBpY29uT25seSlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIFtjbGFzcy5tZS0xXT1cIiFpY29uT25seVwiPjwvZmEtaWNvbj5cclxuICAgIDxzcGFuICNidXR0b25UZXh0ICpuZ0lmPVwiIWljb25Pbmx5XCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIHBvc2l0aW9uID09PSAncmlnaHQnICYmICFpY29uT25seVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgY2xhc3M9XCJtcy0xXCI+PC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwhLS0gU3Bpbm5lciBxdWUgc2Ugc3VwZXJwb25lIGN1YW5kbyBlc3TDoSBsb2FkaW5nIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93U3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1vdmVybGF5XCI+XHJcbiAgICA8ZmEtaWNvbiBcclxuICAgICAgW2ljb25dPVwic3Bpbm5lckljb25cIiBcclxuICAgICAgY2xhc3M9XCJzcGlubmVyLWljb25cIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5pbmddPVwibG9hZGluZ1wiPlxyXG4gICAgPC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwhLS0gVG9vbHRpcCBwZXJzb25hbGl6YWRvIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJ0b29sdGlwXCIgXHJcbiAgICAgICBjbGFzcz1cImN1c3RvbS10b29sdGlwXCIgXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC10b3BdPVwidG9vbHRpcFBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC1ib3R0b21dPVwidG9vbHRpcFBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC1sZWZ0XT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgIFtjbGFzcy50b29sdGlwLXJpZ2h0XT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICBbY2xhc3MubXVsdGlsaW5lXT1cImlzTG9uZ1Rvb2x0aXBcIlxyXG4gICAgICAgW2F0dHIuZGF0YS10b29sdGlwXT1cInRvb2x0aXBcIj5cclxuICAgIHt7IHRvb2x0aXAgfX1cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbiJdfQ==