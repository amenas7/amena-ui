import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", tooltip: "tooltip", tooltipPosition: "tooltipPosition", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly", noAnimate: "noAnimate" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth", "style.visibility": "\"visible\"" }, styleAttribute: "visibility: hidden;" }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{border:none;border-radius:.375rem;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;transition:all .2s ease-in-out;cursor:pointer;outline:none;position:relative;overflow:visible;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#acacac!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-icon,.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-success-light{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-success-light:hover{background-color:#fff;border-color:#00ab4a;color:#00ab4a}.btn-success-light.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-success-light .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-warning-light{background-color:#fff;border:1px solid #FFC107;color:#ffc107}.btn-warning-light:hover{background-color:#fff;border-color:#ffc107;color:#ffc107}.btn-warning-light.loading{background-color:#fff!important;color:#ffc107!important;opacity:1!important}.btn-warning-light .spinner-icon{color:#ffc107!important;opacity:1!important}.btn-warning-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-info-light{background-color:#fff;border:1px solid #007bff;color:#007bff}.btn-info-light:hover{background-color:#fff;border-color:#007bff;color:#007bff}.btn-info-light.loading{background-color:#fff!important;color:#007bff!important;opacity:1!important}.btn-info-light .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFrQixrQkFBa0IsRUFBWSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pHLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sVUFBVSxFQUNWLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLE9BQU8sRUFDUCxNQUFNLEVBQ04scUJBQXFCLEVBQ3JCLFVBQVUsRUFDVixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFlBQVksRUFDWixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLFNBQVMsRUFDVCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2IsVUFBVSxFQUNWLFdBQVcsRUFDWCxVQUFVLEVBQ1YsT0FBTyxFQUNQLE1BQU0sRUFDTixhQUFhLEVBQ2IsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLEtBQUssRUFDTCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGFBQWEsRUFDYixRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEVBQ1YsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxZQUFZLEVBQ1osV0FBVyxFQUNYLE9BQU8sRUFDUCxlQUFlLEVBQ2YsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEVBQ1gsY0FBYyxFQUNkLFlBQVksRUFDWixPQUFPLEVBQ1AsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixZQUFZLEVBQ1osUUFBUSxFQUNSLFlBQVksRUFDWixRQUFRLEVBQ1IsZUFBZSxFQUNmLFNBQVMsRUFDVCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFdBQVcsRUFDWCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsRUFDVCxPQUFPLEVBQ1AsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEVBQ04sY0FBYyxFQUNkLGNBQWMsRUFDZCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFDTixPQUFPLEVBQ1AsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsVUFBVSxFQUNWLGNBQWMsRUFDZCxNQUFNLEVBQ04sZUFBZSxFQUNmLE9BQU8sRUFDUCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixVQUFVLEVBQ1YsV0FBVyxFQUNYLE9BQU8sRUFDUCxtQkFBbUIsRUFDbkIsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFDWixNQUFNLG1DQUFtQyxDQUFDOzs7O0FBbUIzQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLDZFQUE2RTtJQUNwRSxLQUFLLEdBQVcsUUFBUSxDQUFDLENBQUMsMkNBQTJDO0lBRTlFLDJEQUEyRDtJQUNuRCxRQUFRLEdBQWtCLFNBQVMsQ0FBQztJQUNwQyxLQUFLLEdBQWUsSUFBSSxDQUFDO0lBQ3pCLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFDM0IsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixVQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLEtBQUssR0FBZSxRQUFRLENBQUM7SUFDN0IsS0FBSyxDQUFVO0lBQ2YsU0FBUyxHQUFxQixNQUFNLENBQUM7SUFDckMsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUMzQixRQUFRLENBQVU7SUFDbEIsZ0JBQWdCLEdBQW9CLEtBQUssQ0FBQztJQUMxQyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBRXBDLElBQ0ksT0FBTyxDQUFDLEtBQW1CO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQ0ksZUFBZSxDQUFDLEtBQTRCO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELHFEQUFxRDtJQUNyRCxJQUFJLGFBQWE7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNoQyxrRkFBa0Y7UUFDbEYsMkVBQTJFO1FBQzNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssSUFBSSxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFDSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQW9CO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQW9CO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUNJLElBQUksQ0FBQyxLQUFtQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUE2QjtRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBb0I7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRzJDLFVBQVUsQ0FBYztJQUUxRCxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUU3QywwQ0FBMEM7SUFDakMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUVqQyxtREFBbUQ7SUFDbkQsSUFBSSxjQUFjO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sU0FBUyxDQUFDO1FBRWpDLGtEQUFrRDtRQUNsRCxNQUFNLFlBQVksR0FBc0M7WUFDdEQscUNBQXFDO1lBQ3JDLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixXQUFXLEVBQUUsVUFBVTtZQUN2QixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLFVBQVU7WUFDdEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsZ0JBQWdCLEVBQUUsY0FBYztZQUNoQyxVQUFVLEVBQUUsVUFBVTtZQUN0QixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsTUFBTTtZQUNkLHNCQUFzQixFQUFFLHFCQUFxQjtZQUM3QyxVQUFVLEVBQUUsVUFBVTtZQUN0QixjQUFjLEVBQUUsYUFBYTtZQUM3QixZQUFZLEVBQUUsV0FBVztZQUN6QixjQUFjLEVBQUUsYUFBYTtZQUM3QixlQUFlLEVBQUUsY0FBYztZQUMvQixZQUFZLEVBQUUsV0FBVztZQUN6QixhQUFhLEVBQUUsWUFBWTtZQUMzQixVQUFVLEVBQUUsU0FBUztZQUNyQixZQUFZLEVBQUUsV0FBVztZQUN6QixRQUFRLEVBQUUsUUFBUTtZQUNsQixtQkFBbUIsRUFBRSxpQkFBaUI7WUFDdEMsWUFBWSxFQUFFLFdBQVc7WUFDekIsYUFBYSxFQUFFLFlBQVk7WUFDM0Isb0JBQW9CLEVBQUUsa0JBQWtCO1lBQ3hDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGtCQUFrQixFQUFFLGlCQUFpQjtZQUNyQyxTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsYUFBYTtZQUM3QixZQUFZLEVBQUUsV0FBVztZQUN6QixXQUFXLEVBQUUsVUFBVTtZQUN2QixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsYUFBYTtZQUM3QixlQUFlLEVBQUUsY0FBYztZQUMvQix3QkFBd0IsRUFBRSxzQkFBc0I7WUFDaEQsaUJBQWlCLEVBQUUsZ0JBQWdCO1lBQ25DLGVBQWUsRUFBRSxjQUFjO1lBQy9CLFlBQVksRUFBRSxXQUFXO1lBQ3pCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixlQUFlLEVBQUUsY0FBYztZQUMvQixjQUFjLEVBQUUsYUFBYTtZQUM3QixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGFBQWEsRUFBRSxZQUFZO1lBQzNCLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsWUFBWSxFQUFFLFdBQVc7WUFDekIsT0FBTyxFQUFFLE9BQU87WUFDaEIsZ0JBQWdCLEVBQUUsZUFBZTtZQUNqQyxZQUFZLEVBQUUsV0FBVztZQUN6QixjQUFjLEVBQUUsWUFBWTtZQUM1QixPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLG1CQUFtQixFQUFFLGlCQUFpQjtZQUN0QyxhQUFhLEVBQUUsWUFBWTtZQUMzQixNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFlBQVksRUFBRSxZQUFZO1lBQzFCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLEtBQUssRUFBRSxLQUFLO1lBQ1osYUFBYSxFQUFFLFlBQVk7WUFDM0IsU0FBUyxFQUFFLFFBQVE7WUFDbkIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLFdBQVc7WUFDekIsWUFBWSxFQUFFLFdBQVc7WUFDekIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsWUFBWSxFQUFFLFdBQVc7WUFDekIsT0FBTyxFQUFFLE9BQU87WUFDaEIsZUFBZSxFQUFFLGNBQWM7WUFDL0IsYUFBYSxFQUFFLFlBQVk7WUFDM0IsU0FBUyxFQUFFLFNBQVM7WUFDcEIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsZUFBZSxFQUFFLGNBQWM7WUFDL0IsZUFBZSxFQUFFLGNBQWM7WUFDL0IsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsZUFBZSxFQUFFLGNBQWM7WUFDL0IsTUFBTSxFQUFFLE1BQU07WUFDZCxnQkFBZ0IsRUFBRSxlQUFlO1lBQ2pDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFlBQVksRUFBRSxXQUFXO1lBQ3pCLGtCQUFrQixFQUFFLGlCQUFpQjtZQUNyQyxNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFBRSxXQUFXO1lBQ3pCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxNQUFNO1lBRWQsMEJBQTBCO1lBQzFCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxtQkFBbUIsRUFBRSxpQkFBaUI7WUFDdEMsZUFBZSxFQUFFLGlCQUFpQjtZQUNsQyxVQUFVLEVBQUUsU0FBUztZQUNyQixjQUFjLEVBQUUsTUFBTTtZQUN0QixXQUFXLEVBQUUsT0FBTztZQUVwQixXQUFXLEVBQUUsVUFBVTtZQUN2QixpQkFBaUIsRUFBRSxXQUFXO1lBQzlCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLGNBQWMsRUFBRSxNQUFNO1lBQ3RCLGVBQWUsRUFBRSxNQUFNO1lBQ3ZCLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLGFBQWEsRUFBRSxzQkFBc0I7WUFDckMsbUJBQW1CLEVBQUUsYUFBYTtZQUNsQyxjQUFjLEVBQUUsYUFBYTtZQUM3QixjQUFjLEVBQUUsYUFBYTtZQUM3QixhQUFhLEVBQUUsZ0JBQWdCO1lBQy9CLGtCQUFrQixFQUFFLE1BQU07WUFDMUIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsaUJBQWlCLEVBQUUsVUFBVTtZQUM3QixNQUFNLEVBQUUsVUFBVTtZQUVsQixXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsY0FBYztZQUN4QixNQUFNLEVBQUUsY0FBYztZQUN0QixZQUFZLEVBQUUsWUFBWTtZQUMxQixzQkFBc0IsRUFBRSxhQUFhO1lBQ3JDLGtCQUFrQixFQUFFLGFBQWE7WUFFakMsUUFBUSxFQUFFLFFBQVE7WUFFbEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsWUFBWSxFQUFFLFdBQVc7WUFDekIsWUFBWSxFQUFFLFdBQVc7WUFDekIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsVUFBVSxFQUFFLFNBQVM7WUFDckIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixXQUFXLEVBQUUsVUFBVTtZQUN2QixpQkFBaUIsRUFBRSxVQUFVO1lBQzdCLGtCQUFrQixFQUFFLFVBQVU7WUFDOUIscUJBQXFCLEVBQUUsT0FBTztZQUM5QixlQUFlLEVBQUUsWUFBWTtZQUM3QixlQUFlLEVBQUUsWUFBWTtZQUM3QixTQUFTLEVBQUUsVUFBVTtZQUNyQixtQkFBbUIsRUFBRSxNQUFNO1lBQzNCLG1CQUFtQixFQUFFLFFBQVE7WUFDN0IsZUFBZSxFQUFFLE9BQU87WUFDeEIsZUFBZSxFQUFFLE9BQU87WUFDeEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLFNBQVM7WUFDckIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsVUFBVSxFQUFFLFNBQVM7WUFDckIsTUFBTSxFQUFFLE1BQU07WUFDZCxhQUFhLEVBQUUsTUFBTTtZQUNyQixjQUFjLEVBQUUsT0FBTztZQUN2QixXQUFXLEVBQUUsTUFBTTtZQUNuQixpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLFlBQVksRUFBRSxXQUFXO1lBQ3pCLGNBQWMsRUFBRSxVQUFVO1lBQzFCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsV0FBVyxFQUFFLGVBQWU7WUFDNUIsc0JBQXNCLEVBQUUsVUFBVTtZQUNsQyxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUUsV0FBVztZQUNwQixnQkFBZ0IsRUFBRSxjQUFjO1lBQ2hDLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLGdCQUFnQixFQUFFLE9BQU87WUFDekIsbUJBQW1CLEVBQUUsT0FBTztZQUM1QixXQUFXLEVBQUUsTUFBTTtZQUNuQixVQUFVLEVBQUUsT0FBTztZQUNuQixZQUFZLEVBQUUsT0FBTztZQUVyQixnQkFBZ0IsRUFBRSxPQUFPO1lBQ3pCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZUFBZSxFQUFFLGNBQWM7WUFDL0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLGFBQWE7WUFDNUIsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsYUFBYSxFQUFFLFVBQVU7WUFDekIsYUFBYSxFQUFFLGlCQUFpQjtZQUNoQyxNQUFNLEVBQUUsS0FBSztZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsZUFBZSxFQUFFLE1BQU07WUFDdkIsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLE9BQU87WUFDdkIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsV0FBVyxFQUFFLE1BQU07WUFDbkIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsWUFBWSxFQUFFLFdBQVc7WUFDekIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsTUFBTSxFQUFFLFdBQVc7WUFFbkIsV0FBVyxFQUFFLE9BQU87WUFDcEIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUUsWUFBWTtZQUNyQixlQUFlLEVBQUUsUUFBUTtZQUN6QixZQUFZLEVBQUUsWUFBWTtZQUMxQix3QkFBd0IsRUFBRSxPQUFPO1lBQ2pDLGtCQUFrQixFQUFFLFFBQVE7WUFDNUIsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsUUFBUTtZQUNuQixZQUFZLEVBQUUsY0FBYztZQUM1QixVQUFVLEVBQUUsY0FBYztZQUMxQixjQUFjLEVBQUUsUUFBUTtZQUN4QixnQkFBZ0IsRUFBRSxlQUFlO1lBQ2pDLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsT0FBTyxFQUFFLE9BQU87WUFDaEIsZ0JBQWdCLEVBQUUscUJBQXFCO1lBQ3ZDLFVBQVUsRUFBRSxPQUFPO1lBQ25CLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsWUFBWSxFQUFFLFdBQVc7WUFDekIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsbUJBQW1CLEVBQUUsUUFBUTtZQUM3QixpQkFBaUIsRUFBRSxXQUFXO1lBQzlCLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFlBQVksRUFBRSxZQUFZO1lBQzFCLGFBQWEsRUFBRSxZQUFZO1lBQzNCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLHdCQUF3QixFQUFFLFdBQVc7WUFDckMsUUFBUSxFQUFFLE9BQU87WUFDakIsT0FBTyxFQUFFLGNBQWM7WUFFdkIsbUJBQW1CLEVBQUUsWUFBWTtZQUNqQyxXQUFXLEVBQUUsV0FBVztZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixTQUFTLEVBQUUsU0FBUztZQUNwQixZQUFZLEVBQUUsV0FBVztZQUN6QixNQUFNLEVBQUUsT0FBTztZQUNmLGdCQUFnQixFQUFFLGNBQWM7WUFDaEMsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsY0FBYztZQUN6QixjQUFjLEVBQUUsY0FBYztZQUM5QixhQUFhLEVBQUUsY0FBYztZQUM3QixjQUFjLEVBQUUsU0FBUztZQUN6QixRQUFRLEVBQUUsWUFBWTtZQUN0QixVQUFVLEVBQUUsS0FBSztZQUNqQixXQUFXLEVBQUUsS0FBSztZQUNsQixvQkFBb0IsRUFBRSxRQUFRO1lBQzlCLElBQUksRUFBRSxRQUFRO1lBQ2QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsaUJBQWlCLEVBQUUsU0FBUztZQUU1QixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLGlCQUFpQixFQUFFLE1BQU07WUFDekIsS0FBSyxFQUFFLE1BQU07WUFDYixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUsVUFBVTtZQUNuQixNQUFNLEVBQUUsUUFBUTtZQUNoQixlQUFlLEVBQUUsUUFBUTtZQUN6QixRQUFRLEVBQUUsV0FBVztZQUNyQixjQUFjLEVBQUUsS0FBSztZQUNyQixlQUFlLEVBQUUsT0FBTztZQUN4QixPQUFPLEVBQUUsUUFBUTtZQUNqQixlQUFlLEVBQUUsY0FBYztZQUMvQixRQUFRLEVBQUUsTUFBTTtZQUNoQixVQUFVLEVBQUUsWUFBWTtZQUN4QixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsYUFBYSxFQUFFLGVBQWU7WUFDOUIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsTUFBTSxFQUFFLE1BQU07WUFDZCxZQUFZLEVBQUUsT0FBTztZQUNyQixlQUFlLEVBQUUsTUFBTTtZQUN2QixrQkFBa0IsRUFBRSxZQUFZO1lBQ2hDLGFBQWEsRUFBRSxpQkFBaUI7WUFDaEMsYUFBYSxFQUFFLFlBQVk7WUFDM0IsV0FBVyxFQUFFLFVBQVU7WUFDdkIsU0FBUyxFQUFFLE1BQU07WUFDakIsUUFBUSxFQUFFLFdBQVc7WUFDckIsWUFBWSxFQUFFLE1BQU07WUFDcEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsWUFBWSxFQUFFLFdBQVc7WUFDekIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLE1BQU07WUFDYixTQUFTLEVBQUUsT0FBTztZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsWUFBWSxFQUFFLFdBQVc7WUFDekIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixhQUFhLEVBQUUsT0FBTztZQUN0QixvQkFBb0IsRUFBRSxtQkFBbUI7WUFDekMsZ0JBQWdCLEVBQUUsbUJBQW1CO1lBQ3JDLGtCQUFrQixFQUFFLHFCQUFxQjtZQUN6QyxVQUFVLEVBQUUsT0FBTztZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsV0FBVyxFQUFFLE1BQU07WUFDbkIsR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixTQUFTLEVBQUUsT0FBTztZQUVsQixrQ0FBa0M7WUFDbEMsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixpQkFBaUIsRUFBRSxVQUFVO1lBQzdCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFlBQVksRUFBRSxLQUFLO1lBQ25CLGVBQWUsRUFBRSxRQUFRO1lBQ3pCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1lBQ25CLGtCQUFrQixFQUFFLFVBQVU7WUFDOUIsYUFBYSxFQUFFLE1BQU07WUFDckIsZUFBZSxFQUFFLFFBQVE7WUFDekIsYUFBYSxFQUFFLE1BQU07WUFDckIsaUJBQWlCLEVBQUUsVUFBVTtZQUM3QixjQUFjLEVBQUUsT0FBTztZQUN2Qix1QkFBdUIsRUFBRSxjQUFjO1lBQ3ZDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsY0FBYyxFQUFFLE9BQU87WUFDdkIsYUFBYSxFQUFFLE1BQU07WUFDckIsNkJBQTZCLEVBQUUscUJBQXFCO1lBQ3BELGlCQUFpQixFQUFFLFVBQVU7WUFDN0IscUJBQXFCLEVBQUUsYUFBYTtZQUNwQyxtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLHFCQUFxQixFQUFFLGFBQWE7WUFDcEMsc0JBQXNCLEVBQUUsY0FBYztZQUN0QyxtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLGVBQWUsRUFBRSxRQUFRO1lBQ3pCLDBCQUEwQixFQUFFLGlCQUFpQjtZQUM3QyxtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsMkJBQTJCLEVBQUUsa0JBQWtCO1lBQy9DLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsY0FBYyxFQUFFLE9BQU87WUFDdkIsYUFBYSxFQUFFLE1BQU07WUFDckIsYUFBYSxFQUFFLE1BQU07WUFDckIseUJBQXlCLEVBQUUsaUJBQWlCO1lBQzVDLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsY0FBYyxFQUFFLE9BQU87WUFDdkIscUJBQXFCLEVBQUUsYUFBYTtZQUNwQyxrQkFBa0IsRUFBRSxVQUFVO1lBQzlCLG1CQUFtQixFQUFFLFdBQVc7WUFDaEMsa0JBQWtCLEVBQUUsVUFBVTtZQUM5QixjQUFjLEVBQUUsT0FBTztZQUN2QixhQUFhLEVBQUUsTUFBTTtZQUNyQixxQkFBcUIsRUFBRSxhQUFhO1lBQ3BDLHNCQUFzQixFQUFFLGNBQWM7WUFDdEMsK0JBQStCLEVBQUUsc0JBQXNCO1lBQ3ZELHFCQUFxQixFQUFFLGFBQWE7WUFDcEMsd0JBQXdCLEVBQUUsZ0JBQWdCO1lBQzFDLHNCQUFzQixFQUFFLGNBQWM7WUFDdEMsbUJBQW1CLEVBQUUsV0FBVztZQUNoQyxnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLGlCQUFpQixFQUFFLFVBQVU7WUFDN0Isa0JBQWtCLEVBQUUsVUFBVTtZQUM5QixZQUFZLEVBQUUsS0FBSztZQUNuQixZQUFZLEVBQUUsS0FBSztZQUNuQixzQkFBc0IsRUFBRSxjQUFjO1lBQ3RDLG1CQUFtQixFQUFFLFlBQVk7WUFDakMscUJBQXFCLEVBQUUsYUFBYTtZQUNwQyxlQUFlLEVBQUUsUUFBUTtZQUN6QixtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLG1CQUFtQixFQUFFLFdBQVc7WUFDaEMsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGtCQUFrQixFQUFFLFVBQVU7WUFDOUIsaUJBQWlCLEVBQUUsVUFBVTtZQUM3QixjQUFjLEVBQUUsT0FBTztZQUN2QixtQkFBbUIsRUFBRSxZQUFZO1lBQ2pDLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsa0JBQWtCLEVBQUUsVUFBVTtZQUM5QixhQUFhLEVBQUUsTUFBTTtZQUNyQixlQUFlLEVBQUUsUUFBUTtZQUN6QixjQUFjLEVBQUUsT0FBTztZQUN2QixlQUFlLEVBQUUsUUFBUTtZQUN6QixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsYUFBYSxFQUFFLE1BQU07WUFDckIsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixjQUFjLEVBQUUsT0FBTztZQUN2QixvQkFBb0IsRUFBRSxZQUFZO1lBQ2xDLG1CQUFtQixFQUFFLFdBQVc7WUFDaEMsY0FBYyxFQUFFLE9BQU87WUFDdkIsdUJBQXVCLEVBQUUsZUFBZTtZQUN4QyxlQUFlLEVBQUUsUUFBUTtZQUN6QixlQUFlLEVBQUUsUUFBUTtZQUN6QixtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLHNCQUFzQixFQUFFLGNBQWM7WUFDdEMscUJBQXFCLEVBQUUsWUFBWTtZQUNuQyxjQUFjLEVBQUUsT0FBTztZQUN2QixjQUFjLEVBQUUsT0FBTztZQUN2QixhQUFhLEVBQUUsTUFBTTtZQUNyQixjQUFjLEVBQUUsT0FBTztZQUN2QixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsZUFBZSxFQUFFLFFBQVE7WUFDekIsb0JBQW9CLEVBQUUsYUFBYTtZQUNuQyxhQUFhLEVBQUUsTUFBTTtZQUNyQixlQUFlLEVBQUUsUUFBUTtZQUN6QixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsTUFBTTtZQUNyQixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLGtCQUFrQixFQUFFLFVBQVU7WUFDOUIsMEJBQTBCLEVBQUUsaUJBQWlCO1lBQzdDLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsYUFBYSxFQUFFLE1BQU07WUFDckIsa0JBQWtCLEVBQUUsV0FBVztZQUMvQixrQkFBa0IsRUFBRSxXQUFXO1lBQy9CLGtCQUFrQixFQUFFLFdBQVc7WUFDL0IsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixtQkFBbUIsRUFBRSxZQUFZO1lBQ2pDLGtCQUFrQixFQUFFLFVBQVU7WUFDOUIsa0JBQWtCLEVBQUUsV0FBVztZQUMvQixZQUFZLEVBQUUsS0FBSztZQUNuQixlQUFlLEVBQUUsUUFBUTtZQUN6QixvQkFBb0IsRUFBRSxZQUFZO1lBQ2xDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLHVCQUF1QixFQUFFLGVBQWU7WUFDeEMsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixjQUFjLEVBQUUsT0FBTztZQUN2QixlQUFlLEVBQUUsUUFBUTtZQUN6QixtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLG1CQUFtQixFQUFFLFdBQVc7WUFDaEMsbUJBQW1CLEVBQUUsWUFBWTtZQUNqQyxvQkFBb0IsRUFBRSxZQUFZO1lBQ2xDLG1CQUFtQixFQUFFLFdBQVc7WUFDaEMsY0FBYyxFQUFFLE9BQU87WUFDdkIsc0JBQXNCLEVBQUUsY0FBYztZQUN0QyxvQkFBb0IsRUFBRSxZQUFZO1lBQ2xDLGtCQUFrQixFQUFFLFdBQVc7WUFDL0IsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixjQUFjLEVBQUUsT0FBTztZQUN2QixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLG1CQUFtQixFQUFFLFdBQVc7WUFDaEMsYUFBYSxFQUFFLE1BQU07WUFDckIsc0JBQXNCLEVBQUUsY0FBYztZQUN0QyxzQkFBc0IsRUFBRSxjQUFjO1lBQ3RDLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRSxLQUFLO1lBQ25CLGVBQWUsRUFBRSxRQUFRO1lBQ3pCLGVBQWUsRUFBRSxRQUFRO1lBQ3pCLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsYUFBYSxFQUFFLE1BQU07WUFDckIsY0FBYyxFQUFFLE9BQU87WUFDdkIsaUJBQWlCLEVBQUUsVUFBVTtZQUM3QixlQUFlLEVBQUUsUUFBUTtZQUN6QixzQkFBc0IsRUFBRSxjQUFjO1lBQ3RDLGtCQUFrQixFQUFFLFVBQVU7WUFDOUIsc0JBQXNCLEVBQUUsY0FBYztZQUN0QyxhQUFhLEVBQUUsTUFBTTtZQUNyQix1QkFBdUIsRUFBRSxlQUFlO1lBQ3hDLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLGtCQUFrQixFQUFFLFVBQVU7WUFDOUIsYUFBYSxFQUFFLE1BQU07WUFDckIsY0FBYyxFQUFFLE9BQU87WUFDdkIseUJBQXlCLEVBQUUsaUJBQWlCO1lBQzVDLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsa0JBQWtCLEVBQUUsVUFBVTtZQUM5QixhQUFhLEVBQUUsTUFBTTtZQUNyQixtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsYUFBYSxFQUFFLE1BQU07WUFDckIsYUFBYSxFQUFFLE1BQU07WUFDckIsZUFBZSxFQUFFLFFBQVE7WUFDekIsa0JBQWtCLEVBQUUsVUFBVTtZQUM5QixtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLDJCQUEyQixFQUFFLG1CQUFtQjtZQUNoRCxhQUFhLEVBQUUsTUFBTTtZQUNyQixlQUFlLEVBQUUsUUFBUTtZQUN6QixtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLGtCQUFrQixFQUFFLFdBQVc7U0FDaEMsQ0FBQztRQUVGLG1DQUFtQztRQUNuQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM1QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELCtEQUErRDtRQUMvRCxrRUFBa0U7UUFDbEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELE1BQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBb0IsRUFBRSxDQUFDLENBQUM7UUFDeEYsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNkLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCx3Q0FBd0M7UUFDeEMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLCtEQUErRDtRQUMvRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ1YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ25DLENBQUM7WUFDRCxPQUFPO1FBQ1QsQ0FBQztRQUVELDZDQUE2QztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixNQUFNLE9BQU8sR0FBRztZQUNkLEtBQUs7WUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDbkMsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLDhEQUE4RDtRQUM5RCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsNERBQTREO1FBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLEtBQUssSUFBSTtnQkFDUCxPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sUUFBUSxDQUFDO1lBQ2xCO2dCQUNFLE9BQU8sUUFBUSxDQUFDLENBQUMsb0NBQW9DO1FBQ3pELENBQUM7SUFDSCxDQUFDO3dHQTV2QlUsaUJBQWlCOzRGQUFqQixpQkFBaUIseWxCQ25OOUIscTlDQXFDQTs7NEZEOEthLGlCQUFpQjtrQkFWN0IsU0FBUzsrQkFDRSxXQUFXLFFBR2Y7d0JBQ0osb0JBQW9CLEVBQUUsV0FBVzt3QkFDakMsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsb0JBQW9CLEVBQUUsV0FBVztxQkFDbEM7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQWlCRixPQUFPO3NCQURWLEtBQUs7Z0JBU0YsZUFBZTtzQkFEbEIsS0FBSztnQkFpQkYsT0FBTztzQkFEVixLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU0YsT0FBTztzQkFEVixLQUFLO2dCQVNGLFNBQVM7c0JBRFosS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU0YsU0FBUztzQkFEWixLQUFLO2dCQVNzQyxVQUFVO3NCQUFyRCxTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBRWhDLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgZmluZEljb25EZWZpbml0aW9uLCBJY29uTmFtZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBcbiAgZmFTcGlubmVyLCBcbiAgZmFEb3dubG9hZCwgXG4gIGZhVHJhc2gsIFxuICBmYVNoYXJlLCBcbiAgZmFQcmludCwgXG4gIGZhSGVhcnQsXG4gIGZhSG9tZSxcbiAgZmFVc2VyLFxuICBmYUNvZyxcbiAgZmFTZWFyY2gsXG4gIGZhU3RhcixcbiAgZmFFZGl0LFxuICBmYVNhdmUsXG4gIGZhUGx1cyxcbiAgZmFNaW51cyxcbiAgZmFDaGVjayxcbiAgZmFUaW1lcyxcbiAgZmFFeWUsXG4gIGZhRXllU2xhc2gsXG4gIGZhTG9jayxcbiAgZmFVbmxvY2ssXG4gIGZhQmVsbCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFQaG9uZSxcbiAgZmFNYXBNYXJrZXJBbHQsXG4gIGZhQ2FsZW5kYXIsXG4gIGZhQ2xvY2ssXG4gIGZhSW5mbyxcbiAgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICBmYVF1ZXN0aW9uLFxuICBmYUNoZXZyb25Eb3duLFxuICBmYUNoZXZyb25VcCxcbiAgZmFDaGV2cm9uTGVmdCxcbiAgZmFDaGV2cm9uUmlnaHQsXG4gIGZhQXJyb3dMZWZ0LFxuICBmYUFycm93UmlnaHQsXG4gIGZhQXJyb3dVcCxcbiAgZmFBcnJvd0Rvd24sXG4gIGZhUGVuY2lsLFxuICBmYUFuZ2xlRG91YmxlTGVmdCxcbiAgZmFBbmdsZUxlZnQsXG4gIGZhQW5nbGVSaWdodCxcbiAgZmFBbmdsZURvdWJsZVJpZ2h0LFxuICAvLyBOdWV2b3MgaWNvbm9zIGFncmVnYWRvc1xuICBmYVRoTGFyZ2UsXG4gIGZhVXNlcnMsXG4gIGZhTGluayxcbiAgZmFDb3B5LFxuICBmYVVuaXZlcnNhbEFjY2VzcyxcbiAgZmFSdW5uaW5nLFxuICBmYUltYWdlLFxuICBmYUNhbGVuZGFyQWx0LFxuICBmYUNoYXJ0QmFyLFxuICBmYUNoYXJ0TGluZSxcbiAgZmFBcHBsZUFsdCxcbiAgZmFSb2JvdCxcbiAgZmFHaWZ0LFxuICBmYVNob3BwaW5nQmFnLFxuICBmYUJhbGFuY2VTY2FsZSxcbiAgZmFCYXR0ZXJ5VGhyZWVRdWFydGVycyxcbiAgZmFCYXR0ZXJ5SGFsZixcbiAgZmFCYXR0ZXJ5UXVhcnRlcixcbiAgZmFCYXR0ZXJ5RW1wdHksXG4gIGZhQmVsbFNsYXNoLFxuICBmYUJpY3ljbGUsXG4gIGZhQm9va21hcmssXG4gIGZhQm93bEZvb2QsXG4gIGZhQm94LFxuICBmYUJ1cyxcbiAgZmFCaXJ0aGRheUNha2UsXG4gIGZhQ2FsY3VsYXRvcixcbiAgZmFDYWxlbmRhckRheSxcbiAgZmFDYW1lcmEsXG4gIGZhQ2FyZXREb3duLFxuICBmYUNhcmV0TGVmdCxcbiAgZmFDYXJldFJpZ2h0LFxuICBmYUNhcmV0VXAsXG4gIGZhRmlsZSxcbiAgZmFDaGFydFBpZSxcbiAgZmFDb21tZW50cyxcbiAgZmFGbGFzayxcbiAgZmFNaWNyb3Njb3BlLFxuICBmYUNvb2tpZUJpdGUsXG4gIGZhU3ByYXlDYW4sXG4gIGZhU29hcCxcbiAgZmFFeHBhbmQsXG4gIGZhQ2xvdWQsXG4gIGZhQ29mZmVlLFxuICBmYUNvbW1lbnQsXG4gIGZhQ3JlZGl0Q2FyZCxcbiAgZmFDcm9wLFxuICBmYUNyb3BBbHQsXG4gIGZhVHJ1Y2ssXG4gIGZhRmlsZVVwbG9hZCxcbiAgZmFFbGxpcHNpc0gsXG4gIGZhUGxhbmUsXG4gIGZhR3JhZHVhdGlvbkNhcCxcbiAgZmFFcXVhbHMsXG4gIGZhRXJhc2VyLFxuICBmYUZpbGVFeGNlbCxcbiAgZmFGaWxlRG93bmxvYWQsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFTbWlsZSxcbiAgZmFGcm93bixcbiAgZmFNYXNrLFxuICBmYU1lZGFsLFxuICBmYUJveE9wZW4sXG4gIGZhU2VlZGxpbmcsXG4gIGZhRmlsdGVyLFxuICBmYUZpbmdlcnByaW50LFxuICBmYUZpcmUsXG4gIGZhVHJvcGh5LFxuICBmYUZpc2gsXG4gIGZhRmxhZyxcbiAgZmFGb3J3YXJkLFxuICBmYVZvbHVtZVVwLFxuICBmYUV4cGFuZEFycm93c0FsdCxcbiAgZmFHbG9iZSxcbiAgZmFWb2x1bWVNdXRlLFxuICBmYUJhcnMsXG4gIGZhQnJpZWZjYXNlLFxuICBmYU1pY3JvY2hpcCxcbiAgZmFIZWFydGJlYXQsXG4gIGZhSGlzdG9yeSxcbiAgZmFNaWNyb3Bob25lLFxuICBmYUljZUNyZWFtLFxuICBmYUxpZ2h0YnVsYixcbiAgZmFLZXksXG4gIGZhTGFwdG9wLFxuICBmYUxheWVyR3JvdXAsXG4gIGZhTGlzdFVsLFxuICBmYVZvbHVtZURvd24sXG4gIGZhTWFwUGluLFxuICBmYUxvY2F0aW9uQXJyb3csXG4gIGZhQ29tcGFzcyxcbiAgZmFQaWxscyxcbiAgZmFNb2JpbGUsXG4gIGZhTW9iaWxlQWx0LFxuICBmYU1vbmV5QmlsbCxcbiAgZmFNb3RvcmN5Y2xlLFxuICBmYVN0aWNreU5vdGUsXG4gIGZhRWxsaXBzaXNWLFxuICBmYUx1bmdzLFxuICBmYUNhc2hSZWdpc3RlcixcbiAgZmFQYXBlclBsYW5lLFxuICBmYVBhcGVyY2xpcCxcbiAgZmFEZXNrdG9wLFxuICBmYVBhdXNlLFxuICBmYVBlcmNlbnQsXG4gIGZhUGlnZ3lCYW5rLFxuICBmYVBsYXksXG4gIGZhTW91c2VQb2ludGVyLFxuICBmYVN3aW1taW5nUG9vbCxcbiAgZmFCYW4sXG4gIGZhVGFnLFxuICBmYVNoaWVsZCxcbiAgZmFRcmNvZGUsXG4gIGZhUmVjZWlwdCxcbiAgZmFSZWRvLFxuICBmYVJ1bGVyLFxuICBmYVV0ZW5zaWxzLFxuICBmYVRzaGlydCxcbiAgZmFTaG9wcGluZ0NhcnQsXG4gIGZhU2xpZGVyc0gsXG4gIGZhR2xhc3NXaGlza2V5LFxuICBmYVNvcnQsXG4gIGZhVGFjaG9tZXRlckFsdCxcbiAgZmFTcG9vbixcbiAgZmFTdGFySGFsZixcbiAgZmFTdG9wLFxuICBmYVN0b3JlLFxuICBmYVRoZXJtb21ldGVySGFsZixcbiAgZmFUaHVtYnNEb3duLFxuICBmYVRodW1ic1VwLFxuICBmYUJvbHQsXG4gIGZhVGlja2V0QWx0LFxuICBmYVNpdGVtYXAsXG4gIGZhQmF0aCxcbiAgZmFVbmRvLFxuICBmYVVwbG9hZCxcbiAgZmFVc2VyUGx1cyxcbiAgZmFVc2VyTWludXMsXG4gIGZhVmlkZW8sXG4gIGZhRXhjbGFtYXRpb25DaXJjbGUsXG4gIGZhV2lmaSxcbiAgZmFUYWJsZSxcbiAgZmFUYWJsZXQsXG4gIGZhVGFibGV0QWx0LFxuICBmYUFtYnVsYW5jZVxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5pbXBvcnQgeyBUb29sdGlwUG9zaXRpb24gfSBmcm9tICcuLi90eXBlcy90b29sdGlwLnR5cGVzJztcblxuZXhwb3J0IHR5cGUgQnV0dG9uVmFyaWFudCA9ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcmNpYXJ5JyB8ICdkYW5nZXInIHwgJ2Rhbmdlci1saWdodCcgfCAnd2FybmluZycgfCAnd2FybmluZy1saWdodCcgfCAnaW5mbycgfCAnaW5mby1saWdodCcgfCAnZ3JheScgfCAncmVkJyB8ICdzdWNjZXNzJyB8ICdzdWNjZXNzLWxpZ2h0JztcbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5leHBvcnQgdHlwZSBCdXR0b25UeXBlID0gJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2EtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50LnNjc3MnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5mdWxsLXdpZHRoXSc6ICdmdWxsV2lkdGgnLFxuICAgICdzdHlsZSc6ICd2aXNpYmlsaXR5OiBoaWRkZW47JyxcbiAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ1widmlzaWJsZVwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFNhQnV0dG9uQ29tcG9uZW50IHtcbiAgLy8gUHJvcGllZGFkZXMgY29uIGZsZXhpYmlsaWRhZCBtw6F4aW1hOiBzb3BvcnRhbiBhdHRyaWJ1dGUgeSBwcm9wZXJ0eSBiaW5kaW5nXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnQnV0dG9uJzsgLy8gTWFudGVuZXIgY29tbyBASW5wdXQgc2ltcGxlIHBhcmEgc3RyaW5nc1xuICBcbiAgLy8gUHJvcGllZGFkZXMgY29uIHNldHRlcnMvZ2V0dGVycyBwYXJhIGZsZXhpYmlsaWRhZCBtw6F4aW1hXG4gIHByaXZhdGUgX3ZhcmlhbnQ6IEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeSc7XG4gIHByaXZhdGUgX3NpemU6IEJ1dHRvblNpemUgPSAnbWQnO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Z1bGxXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90eXBlOiBCdXR0b25UeXBlID0gJ2J1dHRvbic7XG4gIHByaXZhdGUgX2ljb24/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuICBwcml2YXRlIF9pY29uT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90b29sdGlwPzogc3RyaW5nO1xuICBwcml2YXRlIF90b29sdGlwUG9zaXRpb246IFRvb2x0aXBQb3NpdGlvbiA9ICd0b3AnO1xuICBwcml2YXRlIF9ub0FuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcCh2YWx1ZTogc3RyaW5nIHwgYW55KSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IHZhbHVlO1xuICB9XG4gIGdldCB0b29sdGlwKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcFBvc2l0aW9uKHZhbHVlOiBUb29sdGlwUG9zaXRpb24gfCBhbnkpIHtcbiAgICB0aGlzLl90b29sdGlwUG9zaXRpb24gPSB2YWx1ZSB8fCAndG9wJztcbiAgfVxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCk6IFRvb2x0aXBQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbjtcbiAgfVxuXG4gIC8vIERldGVybWluYXIgc2kgZWwgdG9vbHRpcCBuZWNlc2l0YSBtw7psdGlwbGVzIGzDrW5lYXNcbiAgZ2V0IGlzTG9uZ1Rvb2x0aXAoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHJldHVybiBmYWxzZTtcbiAgICAvLyBDb25zaWRlcmFyIHRleHRvIGxhcmdvIHNpIHRpZW5lIG3DoXMgZGUgNjAgY2FyYWN0ZXJlcyBvIGNvbnRpZW5lIHNhbHRvcyBkZSBsw61uZWFcbiAgICAvLyA2MCBjYXJhY3RlcmVzIGVzIGFwcm94aW1hZGFtZW50ZSBsbyBxdWUgY2FiZSBlbiAzNTBweCBjb24gZm9udC1zaXplIDEycHhcbiAgICByZXR1cm4gdGhpcy50b29sdGlwLmxlbmd0aCA+IDYwIHx8IHRoaXMudG9vbHRpcC5pbmNsdWRlcygnXFxuJyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFyaWFudCh2YWx1ZTogQnV0dG9uVmFyaWFudCB8IGFueSkge1xuICAgIHRoaXMuX3ZhcmlhbnQgPSB2YWx1ZSB8fCAncHJpbWFyeSc7XG4gIH1cbiAgZ2V0IHZhcmlhbnQoKTogQnV0dG9uVmFyaWFudCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhcmlhbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogQnV0dG9uU2l6ZSB8IGFueSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZSB8fCAnbWQnO1xuICB9XG4gIGdldCBzaXplKCk6IEJ1dHRvblNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZ1bGxXaWR0aCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGZ1bGxXaWR0aCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsbFdpZHRoO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IEJ1dHRvblR5cGUgfCBhbnkpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWUgfHwgJ2J1dHRvbic7XG4gIH1cbiAgZ2V0IHR5cGUoKTogQnV0dG9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgYW55KSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBpY29uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsdWU6ICdsZWZ0JyB8ICdyaWdodCcgfCBhbnkpIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlIHx8ICdsZWZ0JztcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogJ2xlZnQnIHwgJ3JpZ2h0JyB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb25Pbmx5KHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5faWNvbk9ubHkgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBpY29uT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbk9ubHk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbm9BbmltYXRlKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fbm9BbmltYXRlID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgbm9BbmltYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub0FuaW1hdGU7XG4gIH1cblxuXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvblRleHQnLCB7IHN0YXRpYzogZmFsc2UgfSkgYnV0dG9uVGV4dCE6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLy8gSWNvbm8gZGUgc3Bpbm5lciBwYXJhIGVsIGVzdGFkbyBsb2FkaW5nXG4gIHJlYWRvbmx5IHNwaW5uZXJJY29uID0gZmFTcGlubmVyO1xuXG4gIC8vIE3DqXRvZG8gcGFyYSBvYnRlbmVyIGVsIGljb25vIGJhc2FkbyBlbiBlbCBzdHJpbmdcbiAgZ2V0IGljb25EZWZpbml0aW9uKCk6IEljb25EZWZpbml0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXRoaXMuaWNvbikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBcbiAgICAvLyBQcmltZXJvIGludGVudGEgY29uIGVsIG1hcGVvIGxvY2FsIChtw6FzIHLDoXBpZG8pXG4gICAgY29uc3QgbG9jYWxJY29uTWFwOiB7IFtrZXk6IHN0cmluZ106IEljb25EZWZpbml0aW9uIH0gPSB7XG4gICAgICAvLyBJY29ub3MgYsOhc2ljb3MgKHNvbGlkIHBvciBkZWZlY3RvKVxuICAgICAgJ3NwaW5uZXInOiBmYVNwaW5uZXIsXG4gICAgICAnZG93bmxvYWQnOiBmYURvd25sb2FkLFxuICAgICAgJ3RyYXNoJzogZmFUcmFzaCxcbiAgICAgICdzaGFyZSc6IGZhU2hhcmUsXG4gICAgICAncHJpbnQnOiBmYVByaW50LFxuICAgICAgJ2hlYXJ0JzogZmFIZWFydCxcbiAgICAgICdob21lJzogZmFIb21lLFxuICAgICAgJ3VzZXInOiBmYVVzZXIsXG4gICAgICAnY29nJzogZmFDb2csXG4gICAgICAnc2VhcmNoJzogZmFTZWFyY2gsXG4gICAgICAnc3Rhcic6IGZhU3RhcixcbiAgICAgICdlZGl0JzogZmFFZGl0LFxuICAgICAgJ3NhdmUnOiBmYVNhdmUsXG4gICAgICAncGx1cyc6IGZhUGx1cyxcbiAgICAgICdtaW51cyc6IGZhTWludXMsXG4gICAgICAnY2hlY2snOiBmYUNoZWNrLFxuICAgICAgJ3RpbWVzJzogZmFUaW1lcyxcbiAgICAgICdleWUnOiBmYUV5ZSxcbiAgICAgICdleWUtc2xhc2gnOiBmYUV5ZVNsYXNoLFxuICAgICAgJ2xvY2snOiBmYUxvY2ssXG4gICAgICAndW5sb2NrJzogZmFVbmxvY2ssXG4gICAgICAnYmVsbCc6IGZhQmVsbCxcbiAgICAgICdlbnZlbG9wZSc6IGZhRW52ZWxvcGUsXG4gICAgICAncGhvbmUnOiBmYVBob25lLFxuICAgICAgJ21hcC1tYXJrZXItYWx0JzogZmFNYXBNYXJrZXJBbHQsXG4gICAgICAnY2FsZW5kYXInOiBmYUNhbGVuZGFyLFxuICAgICAgJ2Nsb2NrJzogZmFDbG9jayxcbiAgICAgICdpbmZvJzogZmFJbmZvLFxuICAgICAgJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgICAgJ3F1ZXN0aW9uJzogZmFRdWVzdGlvbixcbiAgICAgICdjaGV2cm9uLWRvd24nOiBmYUNoZXZyb25Eb3duLFxuICAgICAgJ2NoZXZyb24tdXAnOiBmYUNoZXZyb25VcCxcbiAgICAgICdjaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxuICAgICAgJ2NoZXZyb24tcmlnaHQnOiBmYUNoZXZyb25SaWdodCxcbiAgICAgICdhcnJvdy1sZWZ0JzogZmFBcnJvd0xlZnQsXG4gICAgICAnYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXG4gICAgICAnYXJyb3ctdXAnOiBmYUFycm93VXAsXG4gICAgICAnYXJyb3ctZG93bic6IGZhQXJyb3dEb3duLFxuICAgICAgJ3BlbmNpbCc6IGZhUGVuY2lsLFxuICAgICAgJ2FuZ2xlLWRvdWJsZS1sZWZ0JzogZmFBbmdsZURvdWJsZUxlZnQsXG4gICAgICAnYW5nbGUtbGVmdCc6IGZhQW5nbGVMZWZ0LFxuICAgICAgJ2FuZ2xlLXJpZ2h0JzogZmFBbmdsZVJpZ2h0LFxuICAgICAgJ2FuZ2xlLWRvdWJsZS1yaWdodCc6IGZhQW5nbGVEb3VibGVSaWdodCxcbiAgICAgICd0YWJsZSc6IGZhVGFibGUsXG4gICAgICAndGgtbGFyZ2UnOiBmYVRoTGFyZ2UsXG4gICAgICAndXNlcnMnOiBmYVVzZXJzLFxuICAgICAgJ3VuaXZlcnNhbC1hY2Nlc3MnOiBmYVVuaXZlcnNhbEFjY2VzcyxcbiAgICAgICdydW5uaW5nJzogZmFSdW5uaW5nLFxuICAgICAgJ2ltYWdlJzogZmFJbWFnZSxcbiAgICAgICdjYWxlbmRhci1hbHQnOiBmYUNhbGVuZGFyQWx0LFxuICAgICAgJ2NoYXJ0LWxpbmUnOiBmYUNoYXJ0TGluZSxcbiAgICAgICdhcHBsZS1hbHQnOiBmYUFwcGxlQWx0LFxuICAgICAgJ3JvYm90JzogZmFSb2JvdCxcbiAgICAgICdzaG9wcGluZy1iYWcnOiBmYVNob3BwaW5nQmFnLFxuICAgICAgJ2JhbGFuY2Utc2NhbGUnOiBmYUJhbGFuY2VTY2FsZSxcbiAgICAgICdiYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzJzogZmFCYXR0ZXJ5VGhyZWVRdWFydGVycyxcbiAgICAgICdiYXR0ZXJ5LXF1YXJ0ZXInOiBmYUJhdHRlcnlRdWFydGVyLFxuICAgICAgJ2JhdHRlcnktZW1wdHknOiBmYUJhdHRlcnlFbXB0eSxcbiAgICAgICdiZWxsLXNsYXNoJzogZmFCZWxsU2xhc2gsXG4gICAgICAnYm9va21hcmsnOiBmYUJvb2ttYXJrLFxuICAgICAgJ2Jvd2wtZm9vZCc6IGZhQm93bEZvb2QsXG4gICAgICAnYm94JzogZmFCb3gsXG4gICAgICAnYnVzJzogZmFCdXMsXG4gICAgICAnYmlydGhkYXktY2FrZSc6IGZhQmlydGhkYXlDYWtlLFxuICAgICAgJ2NhbGVuZGFyLWRheSc6IGZhQ2FsZW5kYXJEYXksXG4gICAgICAnZmlsZSc6IGZhRmlsZSxcbiAgICAgICdmbGFzayc6IGZhRmxhc2ssXG4gICAgICAnY29va2llLWJpdGUnOiBmYUNvb2tpZUJpdGUsXG4gICAgICAnc3ByYXktY2FuJzogZmFTcHJheUNhbixcbiAgICAgICdzb2FwJzogZmFTb2FwLFxuICAgICAgJ2V4cGFuZCc6IGZhRXhwYW5kLFxuICAgICAgJ2Nsb3VkJzogZmFDbG91ZCxcbiAgICAgICdjb21tZW50JzogZmFDb21tZW50LFxuICAgICAgJ2ZpbGUtdXBsb2FkJzogZmFGaWxlVXBsb2FkLFxuICAgICAgJ2VsbGlwc2lzLWgnOiBmYUVsbGlwc2lzSCxcbiAgICAgICdwbGFuZSc6IGZhUGxhbmUsXG4gICAgICAnZ3JhZHVhdGlvbi1jYXAnOiBmYUdyYWR1YXRpb25DYXAsXG4gICAgICAnZmlsZS1leGNlbCc6IGZhRmlsZUV4Y2VsLFxuICAgICAgJ3NpZ24tb3V0LWFsdCc6IGZhU2lnbk91dEFsdCxcbiAgICAgICdzbWlsZSc6IGZhU21pbGUsXG4gICAgICAnZnJvd24nOiBmYUZyb3duLFxuICAgICAgJ21hc2snOiBmYU1hc2ssXG4gICAgICAnYm94LW9wZW4nOiBmYUJveE9wZW4sXG4gICAgICAnc2VlZGxpbmcnOiBmYVNlZWRsaW5nLFxuICAgICAgJ3ZvbHVtZS11cCc6IGZhVm9sdW1lVXAsXG4gICAgICAnZXhwYW5kLWFycm93cy1hbHQnOiBmYUV4cGFuZEFycm93c0FsdCxcbiAgICAgICd2b2x1bWUtbXV0ZSc6IGZhVm9sdW1lTXV0ZSxcbiAgICAgICdiYXJzJzogZmFCYXJzLFxuICAgICAgJ2JyaWVmY2FzZSc6IGZhQnJpZWZjYXNlLFxuICAgICAgJ21pY3JvY2hpcCc6IGZhTWljcm9jaGlwLFxuICAgICAgJ2hlYXJ0YmVhdCc6IGZhSGVhcnRiZWF0LFxuICAgICAgJ2hpc3RvcnknOiBmYUhpc3RvcnksXG4gICAgICAnbWljcm9waG9uZSc6IGZhTWljcm9waG9uZSxcbiAgICAgICdsaWdodGJ1bGInOiBmYUxpZ2h0YnVsYixcbiAgICAgICdrZXknOiBmYUtleSxcbiAgICAgICdsYXllci1ncm91cCc6IGZhTGF5ZXJHcm91cCxcbiAgICAgICdsaXN0LXVsJzogZmFMaXN0VWwsXG4gICAgICAndm9sdW1lLWRvd24nOiBmYVZvbHVtZURvd24sXG4gICAgICAncGlsbHMnOiBmYVBpbGxzLFxuICAgICAgJ21vYmlsZSc6IGZhTW9iaWxlLFxuICAgICAgJ21vYmlsZS1hbHQnOiBmYU1vYmlsZUFsdCxcbiAgICAgICdtb25leS1iaWxsJzogZmFNb25leUJpbGwsXG4gICAgICAnc3RpY2t5LW5vdGUnOiBmYVN0aWNreU5vdGUsXG4gICAgICAnZWxsaXBzaXMtdic6IGZhRWxsaXBzaXNWLFxuICAgICAgJ2x1bmdzJzogZmFMdW5ncyxcbiAgICAgICdjYXNoLXJlZ2lzdGVyJzogZmFDYXNoUmVnaXN0ZXIsXG4gICAgICAncGFwZXItcGxhbmUnOiBmYVBhcGVyUGxhbmUsXG4gICAgICAnZGVza3RvcCc6IGZhRGVza3RvcCxcbiAgICAgICdjaGFydC1waWUnOiBmYUNoYXJ0UGllLFxuICAgICAgJ21vdXNlLXBvaW50ZXInOiBmYU1vdXNlUG9pbnRlcixcbiAgICAgICdzd2ltbWluZy1wb29sJzogZmFTd2ltbWluZ1Bvb2wsXG4gICAgICAnYmFuJzogZmFCYW4sXG4gICAgICAndGFnJzogZmFUYWcsXG4gICAgICAnc2hpZWxkJzogZmFTaGllbGQsXG4gICAgICAncXJjb2RlJzogZmFRcmNvZGUsXG4gICAgICAncmVkbyc6IGZhUmVkbyxcbiAgICAgICdydWxlcic6IGZhUnVsZXIsXG4gICAgICAndXRlbnNpbHMnOiBmYVV0ZW5zaWxzLFxuICAgICAgJ3RzaGlydCc6IGZhVHNoaXJ0LFxuICAgICAgJ3NsaWRlcnMtaCc6IGZhU2xpZGVyc0gsXG4gICAgICAnZ2xhc3Mtd2hpc2tleSc6IGZhR2xhc3NXaGlza2V5LFxuICAgICAgJ3NvcnQnOiBmYVNvcnQsXG4gICAgICAndGFjaG9tZXRlci1hbHQnOiBmYVRhY2hvbWV0ZXJBbHQsXG4gICAgICAnc3Bvb24nOiBmYVNwb29uLFxuICAgICAgJ3N0b3JlJzogZmFTdG9yZSxcbiAgICAgICd0YWJsZXQnOiBmYVRhYmxldCxcbiAgICAgICd0YWJsZXQtYWx0JzogZmFUYWJsZXRBbHQsXG4gICAgICAndGhlcm1vbWV0ZXItaGFsZic6IGZhVGhlcm1vbWV0ZXJIYWxmLFxuICAgICAgJ2JvbHQnOiBmYUJvbHQsXG4gICAgICAndGlja2V0LWFsdCc6IGZhVGlja2V0QWx0LFxuICAgICAgJ3NpdGVtYXAnOiBmYVNpdGVtYXAsXG4gICAgICAnYmF0aCc6IGZhQmF0aCxcbiAgICAgIFxuICAgICAgLy8gTnVldm9zIGljb25vcyBhZ3JlZ2Fkb3NcbiAgICAgICdncmlkJzogZmFUaExhcmdlLFxuICAgICAgJ2dyb3VwJzogZmFVc2VycyxcbiAgICAgICdsaW5rJzogZmFMaW5rLFxuICAgICAgJ2NvcHknOiBmYUNvcHksXG4gICAgICAnYWNjZXNzaWJpbGl0eS1hbHQnOiBmYVVuaXZlcnNhbEFjY2VzcyxcbiAgICAgICdhY2Nlc3NpYmlsaXR5JzogZmFVbml2ZXJzYWxBY2Nlc3MsXG4gICAgICAnYWN0aXZpdHknOiBmYVJ1bm5pbmcsXG4gICAgICAnYWRkLWRvY3VtZW50JzogZmFGaWxlLFxuICAgICAgJ2FkZC1pbWFnZSc6IGZhSW1hZ2UsXG5cbiAgICAgICdhbmFseXRpY3MnOiBmYUNoYXJ0QmFyLFxuICAgICAgJ2FuYWx5dGljcy1yYWlzZSc6IGZhQ2hhcnRMaW5lLFxuICAgICAgJ2FwcGxlJzogZmFBcHBsZUFsdCxcbiAgICAgICdhc3Npc3RhbnQnOiBmYVJvYm90LFxuICAgICAgJ2JhZy1vZi1mbG91cic6IGZhR2lmdCxcbiAgICAgICdiYWctd2l0aC1naWZ0JzogZmFHaWZ0LFxuICAgICAgJ2JhZ3MnOiBmYVNob3BwaW5nQmFnLFxuICAgICAgJ2JhbGFuY2UnOiBmYUJhbGFuY2VTY2FsZSxcbiAgICAgICdiYXR0ZXJ5LWFsdCc6IGZhQmF0dGVyeVRocmVlUXVhcnRlcnMsXG4gICAgICAnYmF0dGVyeS1jaGFyZ2luaWcnOiBmYUJhdHRlcnlIYWxmLFxuICAgICAgJ2JhdHRlcnktZnVsbCc6IGZhQmF0dGVyeUhhbGYsXG4gICAgICAnYmF0dGVyeS1oYWxmJzogZmFCYXR0ZXJ5SGFsZixcbiAgICAgICdiYXR0ZXJ5LWxvdyc6IGZhQmF0dGVyeVF1YXJ0ZXIsXG4gICAgICAnYmVsbC1uZXctbWVzc2FnZSc6IGZhQmVsbCxcbiAgICAgICdiZWxsLW9mZic6IGZhQmVsbFNsYXNoLFxuICAgICAgJ2JpY3ljbGUnOiBmYUJpY3ljbGUsXG4gICAgICAnYm9va21hcmstc2ltcGxlJzogZmFCb29rbWFyayxcbiAgICAgICdib3dsJzogZmFCb3dsRm9vZCxcblxuICAgICAgJ2J1cy1mcm9udCc6IGZhQnVzLFxuICAgICAgJ2J1dHRlcic6IGZhQmlydGhkYXlDYWtlLFxuICAgICAgJ2Nha2UnOiBmYUJpcnRoZGF5Q2FrZSxcbiAgICAgICdjYWxjdWxhdG9yJzogZmFDYWxjdWxhdG9yLFxuICAgICAgJ2NhbGVuZGFyLWhpc3RvcnktYWx0JzogZmFDYWxlbmRhckRheSxcbiAgICAgICdjYWxlbmRhci1oaXN0b3J5JzogZmFDYWxlbmRhckRheSxcblxuICAgICAgJ2NhbWVyYSc6IGZhQ2FtZXJhLFxuXG4gICAgICAnY2FuZHknOiBmYUNvb2tpZUJpdGUsXG4gICAgICAnY2FyZXQtZG93bic6IGZhQ2FyZXREb3duLFxuICAgICAgJ2NhcmV0LWxlZnQnOiBmYUNhcmV0TGVmdCxcbiAgICAgICdjYXJldC1yaWdodCc6IGZhQ2FyZXRSaWdodCxcbiAgICAgICdjYXJldC11cCc6IGZhQ2FyZXRVcCxcbiAgICAgICdjZWxscy1kb2N1bWVudCc6IGZhRmlsZSxcbiAgICAgICdjaGFydC1iYXInOiBmYUNoYXJ0QmFyLFxuICAgICAgJ2NoYXJ0LXBpZS1zbGljZSc6IGZhQ2hhcnRQaWUsXG4gICAgICAnY2hhdC1jaXJjbGUtdGV4dCc6IGZhQ29tbWVudHMsXG4gICAgICAnY2hlbWljYWwtZXhwZXJpbWVudCc6IGZhRmxhc2ssXG4gICAgICAnY2hlbWljYWwtdGVzdCc6IGZhTWljcm9zY29wZSxcbiAgICAgICdjaG9jb2xhdGUtYmFyJzogZmFDb29raWVCaXRlLFxuICAgICAgJ2NsZWFuZXInOiBmYVNwcmF5Q2FuLFxuICAgICAgJ2NsZWFuZXItZGlzcGVuc2VyJzogZmFTb2FwLFxuICAgICAgJ2Nsb3NlLWZ1bGwtc2NyZWVuJzogZmFFeHBhbmQsXG4gICAgICAnY2xvdWQtb2ZmbGluZSc6IGZhQ2xvdWQsXG4gICAgICAnY2xvdWQtcHJvYmxlbSc6IGZhQ2xvdWQsXG4gICAgICAnY29mZmVlJzogZmFDb2ZmZWUsXG4gICAgICAnY29tbWVudHMnOiBmYUNvbW1lbnQsXG4gICAgICAnY29va2llJzogZmFDb29raWVCaXRlLFxuICAgICAgJ2NyZWRpdC1jYXJkJzogZmFDcmVkaXRDYXJkLFxuICAgICAgJ2Nyb3AtYWx0JzogZmFDcm9wQWx0LFxuICAgICAgJ2Nyb3AnOiBmYUNyb3AsXG4gICAgICAnY3JvcC1oZWFsdGgnOiBmYUNyb3AsXG4gICAgICAnZGVsaXZlcnktZ3V5JzogZmFUcnVjayxcbiAgICAgICdkZXRlcmdlbnQnOiBmYVNvYXAsXG4gICAgICAnZG9jdW1lbnQtdXBsb2FkJzogZmFGaWxlVXBsb2FkLFxuICAgICAgJ2RvdHMtdGhyZWUnOiBmYUVsbGlwc2lzSCxcbiAgICAgICdkb3dubG9hZC1hbHQnOiBmYURvd25sb2FkLFxuICAgICAgJ2Ryb24nOiBmYVBsYW5lLFxuICAgICAgJ2VkdWNhdGlvbic6IGZhR3JhZHVhdGlvbkNhcCxcbiAgICAgICdlbnZlbG9wZS1uZXctbWVzc2FnZSc6IGZhRW52ZWxvcGUsXG4gICAgICAnZXF1YWxzJzogZmFFcXVhbHMsXG4gICAgICAnZXJhc2VyJzogZmFFcmFzZXIsXG4gICAgICAnZXhjZWwnOiBmYUZpbGVFeGNlbCxcbiAgICAgICdleGNlbC1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxuICAgICAgJ2V4aXQnOiBmYVNpZ25PdXRBbHQsXG4gICAgICAnZmFjZS1zYXRpc2ZpZWQnOiBmYVNtaWxlLFxuICAgICAgJ2ZhY2UtZGlzc2F0aXNmaWVkJzogZmFGcm93bixcbiAgICAgICdmYWNlLW1hc2snOiBmYU1hc2ssXG4gICAgICAnZmFjZWJvb2snOiBmYVNoYXJlLFxuICAgICAgJ2Zhc3QtdHJ1Y2snOiBmYVRydWNrLFxuXG4gICAgICAnZmF2b3JpdGUtbWVkYWwnOiBmYU1lZGFsLFxuICAgICAgJ2Zhdm9yaXRlLXBhY2thZ2UnOiBmYUJveE9wZW4sXG4gICAgICAnZmVlZGVyJzogZmFTZWVkbGluZyxcbiAgICAgICdmaWxlLWRvd25sb2FkJzogZmFGaWxlRG93bmxvYWQsXG4gICAgICAnZmlsdGVyJzogZmFGaWx0ZXIsXG4gICAgICAnZmluZ2VycHJpbnQnOiBmYUZpbmdlcnByaW50LFxuICAgICAgJ2ZpcmUnOiBmYUZpcmUsXG4gICAgICAnZmlyZXdvcmtzJzogZmFGaXJlLFxuICAgICAgJ2ZpcnN0LXBsYWNlJzogZmFUcm9waHksXG4gICAgICAnZmlzaCc6IGZhRmlzaCxcbiAgICAgICdmbGFnJzogZmFGbGFnLFxuICAgICAgJ2ZvcndhcmQnOiBmYUZvcndhcmQsXG4gICAgICAnZnVsbC12b2x1bWUnOiBmYVZvbHVtZVVwLFxuICAgICAgJ2Z1bGwtc2NyZWVuJzogZmFFeHBhbmRBcnJvd3NBbHQsXG4gICAgICAnZ2Vhcic6IGZhQ29nLFxuICAgICAgJ2dpZnQnOiBmYUdpZnQsXG4gICAgICAnZ2lmdC1kZWxpdmVyeSc6IGZhR2lmdCxcbiAgICAgICdnbG9iZSc6IGZhR2xvYmUsXG4gICAgICAnZ3JvdXAtYmlnZ2VyJzogZmFVc2VycyxcbiAgICAgICdoYWxmLXZvbHVtZSc6IGZhVm9sdW1lTXV0ZSxcbiAgICAgICdoYW1idXJnZXInOiBmYUJhcnMsXG4gICAgICAnaGFuZGJhZyc6IGZhQnJpZWZjYXNlLFxuICAgICAgJ2hhcHB5LWNoaXAnOiBmYU1pY3JvY2hpcCxcbiAgICAgICdoZWFsdGh5JzogZmFIZWFydGJlYXQsXG4gICAgICAnaGlzdG9yeS10aW1lJzogZmFIaXN0b3J5LFxuICAgICAgJ2h5ZHJvcGhvbmUnOiBmYU1pY3JvcGhvbmUsXG4gICAgICAnaWNlLWNyZWFtJzogZmFJY2VDcmVhbSxcbiAgICAgICdpZGVhJzogZmFMaWdodGJ1bGIsXG5cbiAgICAgICdpbnN0YWdyYW0nOiBmYVNoYXJlLFxuICAgICAgJ2ludGVsbGlnZW5jZS1hLWknOiBmYVJvYm90LFxuICAgICAgJ2xhcHRvcCc6IGZhTGFwdG9wLFxuICAgICAgJ2xheWVyJzogZmFMYXllckdyb3VwLFxuICAgICAgJ2xpc3QtYnVsbGV0ZWQnOiBmYUxpc3RVbCxcbiAgICAgICdsb3ctdm9sdW1lJzogZmFWb2x1bWVEb3duLFxuICAgICAgJ21hY2hpbmUtbGVhcm5pbmctbW9kZWwnOiBmYVJvYm90LFxuICAgICAgJ21hZ25pZnlpbmctZ2xhc3MnOiBmYVNlYXJjaCxcbiAgICAgICdtYXAnOiBmYUdsb2JlLFxuICAgICAgJ21hcC1waW4nOiBmYU1hcFBpbixcbiAgICAgICdtYXAtbWFya2VyJzogZmFNYXBNYXJrZXJBbHQsXG4gICAgICAnbG9jYXRpb24nOiBmYU1hcE1hcmtlckFsdCxcbiAgICAgICdsb2NhdGlvbi1waW4nOiBmYU1hcFBpbixcbiAgICAgICdsb2NhdGlvbi1hcnJvdyc6IGZhTG9jYXRpb25BcnJvdyxcbiAgICAgICdjb21wYXNzJzogZmFDb21wYXNzLFxuICAgICAgJ25hdmlnYXRpb24nOiBmYUNvbXBhc3MsXG4gICAgICAnbWFwcyc6IGZhR2xvYmUsXG4gICAgICAnbWVkYWwnOiBmYU1lZGFsLFxuICAgICAgJ21lZGljaW5lLWFsZXJ0JzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgICAgJ21lZGljaW5lJzogZmFQaWxscyxcbiAgICAgICdtaWNyby1jaGlwLWFsdCc6IGZhTWljcm9jaGlwLFxuICAgICAgJ21pY3JvLWNoaXAnOiBmYU1pY3JvY2hpcCxcbiAgICAgICdtaWNyb3Njb3BlJzogZmFNaWNyb3Njb3BlLFxuICAgICAgJ21vYmlsZS1ob3Jpem9udGFsJzogZmFNb2JpbGUsXG4gICAgICAnbW9iaWxlLXZlcnRpY2FsJzogZmFNb2JpbGVBbHQsXG4gICAgICAnbW9uZXknOiBmYU1vbmV5QmlsbCxcbiAgICAgICdtb3RvcmN5Y2xlJzogZmFNb3RvcmN5Y2xlLFxuICAgICAgJ25vdGUtcGVuY2lsJzogZmFTdGlja3lOb3RlLFxuICAgICAgJ29wZW5sb2NrJzogZmFVbmxvY2ssXG4gICAgICAnb3ZlcmZsb3ctbWVudS12ZXJ0aWNhbCc6IGZhRWxsaXBzaXNWLFxuICAgICAgJ294eWdlbic6IGZhTHVuZ3MsXG4gICAgICAncC1vLXMnOiBmYUNhc2hSZWdpc3RlcixcblxuICAgICAgJ3BhcGVyLXBsYW5lLXJpZ2h0JzogZmFQYXBlclBsYW5lLFxuICAgICAgJ3BhcGVyY2xpcCc6IGZhUGFwZXJjbGlwLFxuICAgICAgJ3BhdXNlJzogZmFQYXVzZSxcbiAgICAgICdwZXJjZW50JzogZmFQZXJjZW50LFxuICAgICAgJ3BpZ2d5LWJhbmsnOiBmYVBpZ2d5QmFuayxcbiAgICAgICdwaWxsJzogZmFQaWxscyxcbiAgICAgICdwbGFjZS1sb2NhdGlvbic6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ3BsYXknOiBmYVBsYXksXG4gICAgICAncG9pbnRlcic6IGZhTW91c2VQb2ludGVyLFxuICAgICAgJ3BvaW50ZXItbG9jayc6IGZhTW91c2VQb2ludGVyLFxuICAgICAgJ3Bvb2wtbGFkZGVyJzogZmFTd2ltbWluZ1Bvb2wsXG4gICAgICAncG9zdC1oaXN0b3J5JzogZmFIaXN0b3J5LFxuICAgICAgJ3Bvc3RpdCc6IGZhU3RpY2t5Tm90ZSxcbiAgICAgICdwcm9oaWJpdCc6IGZhQmFuLFxuICAgICAgJ3Byb21vdGlvbic6IGZhVGFnLFxuICAgICAgJ3Byb3RlY3Rpb24tY2hlY2tlZCc6IGZhU2hpZWxkLFxuICAgICAgJ3FyJzogZmFRcmNvZGUsXG4gICAgICAncmVjZWlwdCc6IGZhUmVjZWlwdCxcbiAgICAgICdyZWNlaXB0LWNoZWNrZWQnOiBmYVJlY2VpcHQsXG5cbiAgICAgICdyZW5ldyc6IGZhUmVkbyxcbiAgICAgICdyZXBlYXQnOiBmYVJlZG8sXG4gICAgICAncmVwZWF0LXB1cmNoYXNlJzogZmFSZWRvLFxuICAgICAgJ3J1Yyc6IGZhVXNlcixcbiAgICAgICdydWxlci1hbHQnOiBmYVJ1bGVyLFxuICAgICAgJ3NhdWNlJzogZmFVdGVuc2lscyxcbiAgICAgICdzY2FuJzogZmFRcmNvZGUsXG4gICAgICAnc2VhcmNoLWxheWVycyc6IGZhU2VhcmNoLFxuICAgICAgJ3NlbnNvcic6IGZhTWljcm9jaGlwLFxuICAgICAgJ3NldHRpbmdzLWFsdCc6IGZhQ29nLFxuICAgICAgJ3NoYXJlLW5ldHdvcmsnOiBmYVNoYXJlLFxuICAgICAgJ3NoaXJ0JzogZmFUc2hpcnQsXG4gICAgICAnc2hvcHBpbmctY2FydCc6IGZhU2hvcHBpbmdDYXJ0LFxuICAgICAgJ3NocmltcCc6IGZhRmlzaCxcbiAgICAgICdzaWduLW91dCc6IGZhU2lnbk91dEFsdCxcbiAgICAgICdzbGlkZXJzLWhvcml6b250YWwnOiBmYVNsaWRlcnNILFxuICAgICAgJ3NvZGEnOiBmYUdsYXNzV2hpc2tleSxcbiAgICAgICdzb3J0LWJ5JzogZmFTb3J0LFxuICAgICAgJ3NvdXAtZGlzcGVuc2VyJzogZmFVdGVuc2lscyxcbiAgICAgICdzb3VwLW5vb2RsZXMnOiBmYVV0ZW5zaWxzLFxuICAgICAgJ3NwZWVkb21ldGVyJzogZmFUYWNob21ldGVyQWx0LFxuICAgICAgJ3Nwb25nZSc6IGZhU3Bvb24sXG4gICAgICAnc3Rhci1oYWxmJzogZmFTdGFySGFsZixcbiAgICAgICdzdG9wJzogZmFTdG9wLFxuICAgICAgJ3N0b3JlZnJvbnQnOiBmYVN0b3JlLFxuICAgICAgJ3N0eWxpbmctY3JlYW0nOiBmYVNvYXAsXG4gICAgICAnc3Vic3RyYWN0LXZvbHVtZSc6IGZhVm9sdW1lTXV0ZSxcbiAgICAgICd0ZW1wZXJhdHVyZSc6IGZhVGhlcm1vbWV0ZXJIYWxmLFxuICAgICAgJ3RodW1icy1kb3duJzogZmFUaHVtYnNEb3duLFxuICAgICAgJ3RodW1icy11cCc6IGZhVGh1bWJzVXAsXG4gICAgICAndGh1bmRlcic6IGZhQm9sdCxcbiAgICAgICd0aWNrZXQnOiBmYVRpY2tldEFsdCxcbiAgICAgICd0b290aHBhc3RlJzogZmFTb2FwLFxuICAgICAgJ3RyZWUtdmlldyc6IGZhU2l0ZW1hcCxcbiAgICAgICd0cmVuZC1kb3duJzogZmFDaGFydExpbmUsXG4gICAgICAndHJlbmQtdXAnOiBmYUNoYXJ0TGluZSxcbiAgICAgICd0cm9waHknOiBmYVRyb3BoeSxcbiAgICAgICd0cnVjayc6IGZhVHJ1Y2ssXG4gICAgICAndHViJzogZmFCYXRoLFxuICAgICAgJ3R3aXR0ZXInOiBmYVNoYXJlLFxuICAgICAgJ3VuZG8nOiBmYVVuZG8sXG4gICAgICAndXBsb2FkJzogZmFVcGxvYWQsXG4gICAgICAndXNlci1hdmF0YXInOiBmYVVzZXIsXG4gICAgICAndXNlci1hZGQnOiBmYVVzZXJQbHVzLFxuICAgICAgJ3VzZXItcGx1cyc6IGZhVXNlclBsdXMsXG4gICAgICAndXNlci1zdWJzdHJhY3QnOiBmYVVzZXJNaW51cyxcbiAgICAgICd1c2VyLW1pbnVzJzogZmFVc2VyTWludXMsXG4gICAgICAndXNlci13aXRoLWNhcnQnOiBmYVVzZXIsXG4gICAgICAndmlkZW8nOiBmYVZpZGVvLFxuICAgICAgJ3ZpZGVvLWxheWVyJzogZmFWaWRlbyxcbiAgICAgICdleGNsYW1hdGlvbi1jaXJjbGUnOiBmYUV4Y2xhbWF0aW9uQ2lyY2xlLFxuICAgICAgJ3dhcm5pbmctY2lyY2xlJzogZmFFeGNsYW1hdGlvbkNpcmNsZSxcbiAgICAgICd3YXJuaW5nLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgICAgJ3doYXRzYXBwJzogZmFTaGFyZSxcbiAgICAgICd3aWZpJzogZmFXaWZpLFxuICAgICAgJ3dpLWZpJzogZmFXaWZpLFxuICAgICAgJ3dpLWZpLW9mZic6IGZhV2lmaSxcbiAgICAgICd4JzogZmFUaW1lcyxcbiAgICAgICdjbG9zZSc6IGZhVGltZXMsXG4gICAgICAneW91dHViZSc6IGZhU2hhcmUsXG4gICAgICBcbiAgICAgIC8vIFRhbWJpw6luIHNvcG9ydGEgZm9ybWF0byBmYXMgZmEtXG4gICAgICAnZmFzIGZhLXNwaW5uZXInOiBmYVNwaW5uZXIsXG4gICAgICAnZmFzIGZhLWRvd25sb2FkJzogZmFEb3dubG9hZCxcbiAgICAgICdmYXMgZmEtdHJhc2gnOiBmYVRyYXNoLFxuICAgICAgJ2ZhcyBmYS1zaGFyZSc6IGZhU2hhcmUsXG4gICAgICAnZmFzIGZhLXByaW50JzogZmFQcmludCxcbiAgICAgICdmYXMgZmEtaGVhcnQnOiBmYUhlYXJ0LFxuICAgICAgJ2ZhcyBmYS1ob21lJzogZmFIb21lLFxuICAgICAgJ2ZhcyBmYS11c2VyJzogZmFVc2VyLFxuICAgICAgJ2ZhcyBmYS1jb2cnOiBmYUNvZyxcbiAgICAgICdmYXMgZmEtc2VhcmNoJzogZmFTZWFyY2gsXG4gICAgICAnZmFzIGZhLXN0YXInOiBmYVN0YXIsXG4gICAgICAnZmFzIGZhLWVkaXQnOiBmYUVkaXQsXG4gICAgICAnZmFzIGZhLXNhdmUnOiBmYVNhdmUsXG4gICAgICAnZmFzIGZhLXBsdXMnOiBmYVBsdXMsXG4gICAgICAnZmFzIGZhLW1pbnVzJzogZmFNaW51cyxcbiAgICAgICdmYXMgZmEtY2hlY2snOiBmYUNoZWNrLFxuICAgICAgJ2ZhcyBmYS10aW1lcyc6IGZhVGltZXMsXG4gICAgICAnZmFzIGZhLXgnOiBmYVRpbWVzLFxuICAgICAgJ2ZhcyBmYS1jbG9zZSc6IGZhVGltZXMsXG4gICAgICAnZmFzIGZhLWV5ZSc6IGZhRXllLFxuICAgICAgJ2ZhcyBmYS1leWUtc2xhc2gnOiBmYUV5ZVNsYXNoLFxuICAgICAgJ2ZhcyBmYS1sb2NrJzogZmFMb2NrLFxuICAgICAgJ2ZhcyBmYS11bmxvY2snOiBmYVVubG9jayxcbiAgICAgICdmYXMgZmEtYmVsbCc6IGZhQmVsbCxcbiAgICAgICdmYXMgZmEtZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxuICAgICAgJ2ZhcyBmYS1waG9uZSc6IGZhUGhvbmUsXG4gICAgICAnZmFzIGZhLW1hcC1tYXJrZXItYWx0JzogZmFNYXBNYXJrZXJBbHQsXG4gICAgICAnZmFzIGZhLWNhbGVuZGFyJzogZmFDYWxlbmRhcixcbiAgICAgICdmYXMgZmEtY2xvY2snOiBmYUNsb2NrLFxuICAgICAgJ2ZhcyBmYS1pbmZvJzogZmFJbmZvLFxuICAgICAgJ2ZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICdmYXMgZmEtcXVlc3Rpb24nOiBmYVF1ZXN0aW9uLFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLWRvd24nOiBmYUNoZXZyb25Eb3duLFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXG4gICAgICAnZmFzIGZhLWNoZXZyb24tbGVmdCc6IGZhQ2hldnJvbkxlZnQsXG4gICAgICAnZmFzIGZhLWNoZXZyb24tcmlnaHQnOiBmYUNoZXZyb25SaWdodCxcbiAgICAgICdmYXMgZmEtYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxuICAgICAgJ2ZhcyBmYS1hcnJvdy1yaWdodCc6IGZhQXJyb3dSaWdodCxcbiAgICAgICdmYXMgZmEtYXJyb3ctdXAnOiBmYUFycm93VXAsXG4gICAgICAnZmFzIGZhLWFycm93LWRvd24nOiBmYUFycm93RG93bixcbiAgICAgICdmYXMgZmEtcGVuY2lsJzogZmFQZW5jaWwsXG4gICAgICAnZmFzIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0JzogZmFBbmdsZURvdWJsZUxlZnQsXG4gICAgICAnZmFzIGZhLWFuZ2xlLWxlZnQnOiBmYUFuZ2xlTGVmdCxcbiAgICAgICdmYXMgZmEtYW5nbGUtcmlnaHQnOiBmYUFuZ2xlUmlnaHQsXG4gICAgICAnZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodCc6IGZhQW5nbGVEb3VibGVSaWdodCxcbiAgICAgICdmYXMgZmEtdGFibGUnOiBmYVRhYmxlLFxuICAgICAgJ2ZhcyBmYS10aC1sYXJnZSc6IGZhVGhMYXJnZSxcbiAgICAgICdmYXMgZmEtdXNlcnMnOiBmYVVzZXJzLFxuICAgICAgJ2ZhcyBmYS1saW5rJzogZmFMaW5rLFxuICAgICAgJ2ZhcyBmYS1jb3B5JzogZmFDb3B5LFxuICAgICAgJ2ZhcyBmYS11bml2ZXJzYWwtYWNjZXNzJzogZmFVbml2ZXJzYWxBY2Nlc3MsXG4gICAgICAnZmFzIGZhLXJ1bm5pbmcnOiBmYVJ1bm5pbmcsXG4gICAgICAnZmFzIGZhLWltYWdlJzogZmFJbWFnZSxcbiAgICAgICdmYXMgZmEtY2FsZW5kYXItYWx0JzogZmFDYWxlbmRhckFsdCxcbiAgICAgICdmYXMgZmEtY2hhcnQtYmFyJzogZmFDaGFydEJhcixcbiAgICAgICdmYXMgZmEtY2hhcnQtbGluZSc6IGZhQ2hhcnRMaW5lLFxuICAgICAgJ2ZhcyBmYS1hcHBsZS1hbHQnOiBmYUFwcGxlQWx0LFxuICAgICAgJ2ZhcyBmYS1yb2JvdCc6IGZhUm9ib3QsXG4gICAgICAnZmFzIGZhLWdpZnQnOiBmYUdpZnQsXG4gICAgICAnZmFzIGZhLXNob3BwaW5nLWJhZyc6IGZhU2hvcHBpbmdCYWcsXG4gICAgICAnZmFzIGZhLWJhbGFuY2Utc2NhbGUnOiBmYUJhbGFuY2VTY2FsZSxcbiAgICAgICdmYXMgZmEtYmF0dGVyeS10aHJlZS1xdWFydGVycyc6IGZhQmF0dGVyeVRocmVlUXVhcnRlcnMsXG4gICAgICAnZmFzIGZhLWJhdHRlcnktaGFsZic6IGZhQmF0dGVyeUhhbGYsXG4gICAgICAnZmFzIGZhLWJhdHRlcnktcXVhcnRlcic6IGZhQmF0dGVyeVF1YXJ0ZXIsXG4gICAgICAnZmFzIGZhLWJhdHRlcnktZW1wdHknOiBmYUJhdHRlcnlFbXB0eSxcbiAgICAgICdmYXMgZmEtYmVsbC1zbGFzaCc6IGZhQmVsbFNsYXNoLFxuICAgICAgJ2ZhcyBmYS1iaWN5Y2xlJzogZmFCaWN5Y2xlLFxuICAgICAgJ2ZhcyBmYS1ib29rbWFyayc6IGZhQm9va21hcmssXG4gICAgICAnZmFzIGZhLWJvd2wtZm9vZCc6IGZhQm93bEZvb2QsXG4gICAgICAnZmFzIGZhLWJveCc6IGZhQm94LFxuICAgICAgJ2ZhcyBmYS1idXMnOiBmYUJ1cyxcbiAgICAgICdmYXMgZmEtYmlydGhkYXktY2FrZSc6IGZhQmlydGhkYXlDYWtlLFxuICAgICAgJ2ZhcyBmYS1jYWxjdWxhdG9yJzogZmFDYWxjdWxhdG9yLFxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhci1kYXknOiBmYUNhbGVuZGFyRGF5LFxuICAgICAgJ2ZhcyBmYS1jYW1lcmEnOiBmYUNhbWVyYSxcbiAgICAgICdmYXMgZmEtY2FyZXQtZG93bic6IGZhQ2FyZXREb3duLFxuICAgICAgJ2ZhcyBmYS1jYXJldC1sZWZ0JzogZmFDYXJldExlZnQsXG4gICAgICAnZmFzIGZhLWNhcmV0LXJpZ2h0JzogZmFDYXJldFJpZ2h0LFxuICAgICAgJ2ZhcyBmYS1jYXJldC11cCc6IGZhQ2FyZXRVcCxcbiAgICAgICdmYXMgZmEtZmlsZSc6IGZhRmlsZSxcbiAgICAgICdmYXMgZmEtY2hhcnQtcGllJzogZmFDaGFydFBpZSxcbiAgICAgICdmYXMgZmEtY29tbWVudHMnOiBmYUNvbW1lbnRzLFxuICAgICAgJ2ZhcyBmYS1mbGFzayc6IGZhRmxhc2ssXG4gICAgICAnZmFzIGZhLW1pY3Jvc2NvcGUnOiBmYU1pY3Jvc2NvcGUsXG4gICAgICAnZmFzIGZhLWNvb2tpZS1iaXRlJzogZmFDb29raWVCaXRlLFxuICAgICAgJ2ZhcyBmYS1zcHJheS1jYW4nOiBmYVNwcmF5Q2FuLFxuICAgICAgJ2ZhcyBmYS1zb2FwJzogZmFTb2FwLFxuICAgICAgJ2ZhcyBmYS1leHBhbmQnOiBmYUV4cGFuZCxcbiAgICAgICdmYXMgZmEtY2xvdWQnOiBmYUNsb3VkLFxuICAgICAgJ2ZhcyBmYS1jb2ZmZWUnOiBmYUNvZmZlZSxcbiAgICAgICdmYXMgZmEtY29tbWVudCc6IGZhQ29tbWVudCxcbiAgICAgICdmYXMgZmEtY3JlZGl0LWNhcmQnOiBmYUNyZWRpdENhcmQsXG4gICAgICAnZmFzIGZhLWNyb3AnOiBmYUNyb3AsXG4gICAgICAnZmFzIGZhLWNyb3AtYWx0JzogZmFDcm9wQWx0LFxuICAgICAgJ2ZhcyBmYS10cnVjayc6IGZhVHJ1Y2ssXG4gICAgICAnZmFzIGZhLWZpbGUtdXBsb2FkJzogZmFGaWxlVXBsb2FkLFxuICAgICAgJ2ZhcyBmYS1lbGxpcHNpcy1oJzogZmFFbGxpcHNpc0gsXG4gICAgICAnZmFzIGZhLXBsYW5lJzogZmFQbGFuZSxcbiAgICAgICdmYXMgZmEtZ3JhZHVhdGlvbi1jYXAnOiBmYUdyYWR1YXRpb25DYXAsXG4gICAgICAnZmFzIGZhLWVxdWFscyc6IGZhRXF1YWxzLFxuICAgICAgJ2ZhcyBmYS1lcmFzZXInOiBmYUVyYXNlcixcbiAgICAgICdmYXMgZmEtZmlsZS1leGNlbCc6IGZhRmlsZUV4Y2VsLFxuICAgICAgJ2ZhcyBmYS1maWxlLWRvd25sb2FkJzogZmFGaWxlRG93bmxvYWQsXG4gICAgICAnZmFzIGZhLXNpZ24tb3V0LWFsdCc6IGZhU2lnbk91dEFsdCxcbiAgICAgICdmYXMgZmEtc21pbGUnOiBmYVNtaWxlLFxuICAgICAgJ2ZhcyBmYS1mcm93bic6IGZhRnJvd24sXG4gICAgICAnZmFzIGZhLW1hc2snOiBmYU1hc2ssXG4gICAgICAnZmFzIGZhLW1lZGFsJzogZmFNZWRhbCxcbiAgICAgICdmYXMgZmEtYm94LW9wZW4nOiBmYUJveE9wZW4sXG4gICAgICAnZmFzIGZhLXNlZWRsaW5nJzogZmFTZWVkbGluZyxcbiAgICAgICdmYXMgZmEtZmlsdGVyJzogZmFGaWx0ZXIsXG4gICAgICAnZmFzIGZhLWZpbmdlcnByaW50JzogZmFGaW5nZXJwcmludCxcbiAgICAgICdmYXMgZmEtZmlyZSc6IGZhRmlyZSxcbiAgICAgICdmYXMgZmEtdHJvcGh5JzogZmFUcm9waHksXG4gICAgICAnZmFzIGZhLWZpc2gnOiBmYUZpc2gsXG4gICAgICAnZmFzIGZhLWZsYWcnOiBmYUZsYWcsXG4gICAgICAnZmFzIGZhLWZvcndhcmQnOiBmYUZvcndhcmQsXG4gICAgICAnZmFzIGZhLXZvbHVtZS11cCc6IGZhVm9sdW1lVXAsXG4gICAgICAnZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0JzogZmFFeHBhbmRBcnJvd3NBbHQsXG4gICAgICAnZmFzIGZhLWdsb2JlJzogZmFHbG9iZSxcbiAgICAgICdmYXMgZmEtdm9sdW1lLW11dGUnOiBmYVZvbHVtZU11dGUsXG4gICAgICAnZmFzIGZhLWJhcnMnOiBmYUJhcnMsXG4gICAgICAnZmFzIGZhLWJyaWVmY2FzZSc6IGZhQnJpZWZjYXNlLFxuICAgICAgJ2ZhcyBmYS1taWNyb2NoaXAnOiBmYU1pY3JvY2hpcCxcbiAgICAgICdmYXMgZmEtaGVhcnRiZWF0JzogZmFIZWFydGJlYXQsXG4gICAgICAnZmFzIGZhLWhpc3RvcnknOiBmYUhpc3RvcnksXG4gICAgICAnZmFzIGZhLW1pY3JvcGhvbmUnOiBmYU1pY3JvcGhvbmUsXG4gICAgICAnZmFzIGZhLWljZS1jcmVhbSc6IGZhSWNlQ3JlYW0sXG4gICAgICAnZmFzIGZhLWxpZ2h0YnVsYic6IGZhTGlnaHRidWxiLFxuICAgICAgJ2ZhcyBmYS1rZXknOiBmYUtleSxcbiAgICAgICdmYXMgZmEtbGFwdG9wJzogZmFMYXB0b3AsXG4gICAgICAnZmFzIGZhLWxheWVyLWdyb3VwJzogZmFMYXllckdyb3VwLFxuICAgICAgJ2ZhcyBmYS1saXN0LXVsJzogZmFMaXN0VWwsXG4gICAgICAnZmFzIGZhLXZvbHVtZS1kb3duJzogZmFWb2x1bWVEb3duLFxuICAgICAgJ2ZhcyBmYS1tYXAtcGluJzogZmFNYXBQaW4sXG4gICAgICAnZmFzIGZhLWxvY2F0aW9uLWFycm93JzogZmFMb2NhdGlvbkFycm93LFxuICAgICAgJ2ZhcyBmYS1jb21wYXNzJzogZmFDb21wYXNzLFxuICAgICAgJ2ZhcyBmYS1waWxscyc6IGZhUGlsbHMsXG4gICAgICAnZmFzIGZhLW1vYmlsZSc6IGZhTW9iaWxlLFxuICAgICAgJ2ZhcyBmYS1tb2JpbGUtYWx0JzogZmFNb2JpbGVBbHQsXG4gICAgICAnZmFzIGZhLW1vbmV5LWJpbGwnOiBmYU1vbmV5QmlsbCxcbiAgICAgICdmYXMgZmEtbW90b3JjeWNsZSc6IGZhTW90b3JjeWNsZSxcbiAgICAgICdmYXMgZmEtc3RpY2t5LW5vdGUnOiBmYVN0aWNreU5vdGUsXG4gICAgICAnZmFzIGZhLWVsbGlwc2lzLXYnOiBmYUVsbGlwc2lzVixcbiAgICAgICdmYXMgZmEtbHVuZ3MnOiBmYUx1bmdzLFxuICAgICAgJ2ZhcyBmYS1jYXNoLXJlZ2lzdGVyJzogZmFDYXNoUmVnaXN0ZXIsXG4gICAgICAnZmFzIGZhLXBhcGVyLXBsYW5lJzogZmFQYXBlclBsYW5lLFxuICAgICAgJ2ZhcyBmYS1wYXBlcmNsaXAnOiBmYVBhcGVyY2xpcCxcbiAgICAgICdmYXMgZmEtZGVza3RvcCc6IGZhRGVza3RvcCxcbiAgICAgICdmYXMgZmEtcGF1c2UnOiBmYVBhdXNlLFxuICAgICAgJ2ZhcyBmYS1wZXJjZW50JzogZmFQZXJjZW50LFxuICAgICAgJ2ZhcyBmYS1waWdneS1iYW5rJzogZmFQaWdneUJhbmssXG4gICAgICAnZmFzIGZhLXBsYXknOiBmYVBsYXksXG4gICAgICAnZmFzIGZhLW1vdXNlLXBvaW50ZXInOiBmYU1vdXNlUG9pbnRlcixcbiAgICAgICdmYXMgZmEtc3dpbW1pbmctcG9vbCc6IGZhU3dpbW1pbmdQb29sLFxuICAgICAgJ2ZhcyBmYS1iYW4nOiBmYUJhbixcbiAgICAgICdmYXMgZmEtdGFnJzogZmFUYWcsXG4gICAgICAnZmFzIGZhLXNoaWVsZCc6IGZhU2hpZWxkLFxuICAgICAgJ2ZhcyBmYS1xcmNvZGUnOiBmYVFyY29kZSxcbiAgICAgICdmYXMgZmEtcmVjZWlwdCc6IGZhUmVjZWlwdCxcbiAgICAgICdmYXMgZmEtcmVkbyc6IGZhUmVkbyxcbiAgICAgICdmYXMgZmEtcnVsZXInOiBmYVJ1bGVyLFxuICAgICAgJ2ZhcyBmYS11dGVuc2lscyc6IGZhVXRlbnNpbHMsXG4gICAgICAnZmFzIGZhLXRzaGlydCc6IGZhVHNoaXJ0LFxuICAgICAgJ2ZhcyBmYS1zaG9wcGluZy1jYXJ0JzogZmFTaG9wcGluZ0NhcnQsXG4gICAgICAnZmFzIGZhLXNsaWRlcnMtaCc6IGZhU2xpZGVyc0gsXG4gICAgICAnZmFzIGZhLWdsYXNzLXdoaXNrZXknOiBmYUdsYXNzV2hpc2tleSxcbiAgICAgICdmYXMgZmEtc29ydCc6IGZhU29ydCxcbiAgICAgICdmYXMgZmEtdGFjaG9tZXRlci1hbHQnOiBmYVRhY2hvbWV0ZXJBbHQsXG4gICAgICAnZmFzIGZhLXNwb29uJzogZmFTcG9vbixcbiAgICAgICdmYXMgZmEtc3Rhci1oYWxmJzogZmFTdGFySGFsZixcbiAgICAgICdmYXMgZmEtc3RvcCc6IGZhU3RvcCxcbiAgICAgICdmYXMgZmEtc3RvcmUnOiBmYVN0b3JlLFxuICAgICAgJ2ZhcyBmYS10aGVybW9tZXRlci1oYWxmJzogZmFUaGVybW9tZXRlckhhbGYsXG4gICAgICAnZmFzIGZhLXRodW1icy1kb3duJzogZmFUaHVtYnNEb3duLFxuICAgICAgJ2ZhcyBmYS10aHVtYnMtdXAnOiBmYVRodW1ic1VwLFxuICAgICAgJ2ZhcyBmYS1ib2x0JzogZmFCb2x0LFxuICAgICAgJ2ZhcyBmYS10aWNrZXQtYWx0JzogZmFUaWNrZXRBbHQsXG4gICAgICAnZmFzIGZhLXNpdGVtYXAnOiBmYVNpdGVtYXAsXG4gICAgICAnZmFzIGZhLWJhdGgnOiBmYUJhdGgsXG4gICAgICAnZmFzIGZhLXVuZG8nOiBmYVVuZG8sXG4gICAgICAnZmFzIGZhLXVwbG9hZCc6IGZhVXBsb2FkLFxuICAgICAgJ2ZhcyBmYS11c2VyLXBsdXMnOiBmYVVzZXJQbHVzLFxuICAgICAgJ2ZhcyBmYS11c2VyLW1pbnVzJzogZmFVc2VyTWludXMsXG4gICAgICAnZmFzIGZhLXZpZGVvJzogZmFWaWRlbyxcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlJzogZmFFeGNsYW1hdGlvbkNpcmNsZSxcbiAgICAgICdmYXMgZmEtd2lmaSc6IGZhV2lmaSxcbiAgICAgICdmYXMgZmEtdGFibGV0JzogZmFUYWJsZXQsXG4gICAgICAnZmFzIGZhLXRhYmxldC1hbHQnOiBmYVRhYmxldEFsdCxcbiAgICAgICdmYXMgZmEtYW1idWxhbmNlJzogZmFBbWJ1bGFuY2VcbiAgICB9O1xuICAgIFxuICAgIC8vIFNpIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCDDunNhbG9cbiAgICBpZiAobG9jYWxJY29uTWFwW3RoaXMuaWNvbl0pIHtcbiAgICAgIHJldHVybiBsb2NhbEljb25NYXBbdGhpcy5pY29uXTtcbiAgICB9XG4gICAgXG4gICAgLy8gU2kgbm8gZXN0w6EgZW4gZWwgbWFwZW8gbG9jYWwsIGludGVudGEgY29uIGZpbmRJY29uRGVmaW5pdGlvblxuICAgIC8vIEZvcm1hdG86ICdmYXMgZmEtc3Bpbm5lcicgbyAnc3Bpbm5lcicgKGFzdW1lICdmYXMnIHBvciBkZWZlY3RvKVxuICAgIGxldCBpY29uTmFtZSA9IHRoaXMuaWNvbjtcbiAgICBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYXMgZmEtJykpIHtcbiAgICAgIGljb25OYW1lID0gdGhpcy5pY29uLnJlcGxhY2UoJ2ZhcyBmYS0nLCAnJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmljb24uaW5jbHVkZXMoJ2ZhLScpKSB7XG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYS0nLCAnJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGZvdW5kSWNvbiA9IGZpbmRJY29uRGVmaW5pdGlvbih7IHByZWZpeDogJ2ZhcycsIGljb25OYW1lOiBpY29uTmFtZSBhcyBJY29uTmFtZSB9KTtcbiAgICBpZiAoZm91bmRJY29uKSB7XG4gICAgICByZXR1cm4gZm91bmRJY29uO1xuICAgIH1cbiAgICBcbiAgICAvLyBTaSBubyBzZSBlbmN1ZW50cmEsIHJldG9ybmEgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIFNpIGVzdMOhIGRpc2FibGVkIG8gbG9hZGluZywgcHJldmVuaXIgY29tcGxldGFtZW50ZSBlbCBldmVudG9cbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIFNvbG8gZW1pdGlyIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCgpO1xuICB9XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgJ2J0bicsXG4gICAgICBgYnRuLSR7dGhpcy52YXJpYW50fWAsXG4gICAgICB0aGlzLmdldFNpemVDbGFzcygpLFxuICAgICAgdGhpcy5mdWxsV2lkdGggPyAndy0xMDAnIDogJycsXG4gICAgICB0aGlzLmRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnLFxuICAgICAgdGhpcy5sb2FkaW5nID8gJ2xvYWRpbmcnIDogJycsXG4gICAgICB0aGlzLm5vQW5pbWF0ZSA/ICduby1hbmltYXRlJyA6ICcnXG4gICAgXTtcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGlzSW50ZXJhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgLy8gRWwgYm90w7NuIGVzIGludGVyYWN0aXZvIHNvbG8gc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHNob3dTcGlubmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBnZXQgc2hvd0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgLy8gTW9zdHJhciBjb250ZW5pZG8gKHRleHRvICsgaWNvbm8pIHNvbG8gc2kgbm8gZXN0w6EgbG9hZGluZ1xuICAgIHJldHVybiAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaXplQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSAnc20nOlxuICAgICAgICByZXR1cm4gJ2J0bi1zbSc7XG4gICAgICBjYXNlICdtZCc6XG4gICAgICAgIHJldHVybiAnYnRuLW1kJztcbiAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgcmV0dXJuICdidG4tbGcnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdidG4tbWQnOyAvLyBQb3IgZGVmZWN0byB1c2EgZWwgdGFtYcOxbyBtZWRpYW5vXG4gICAgfVxuICB9XG59XG4iLCI8YnV0dG9uXHJcbiAgI2J1dHRvbkVsZW1lbnRcclxuICBbY2xhc3NdPVwiYnV0dG9uQ2xhc3Nlc1wiXHJcbiAgW3R5cGVdPVwidHlwZVwiXHJcbiAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbG9hZGluZyA/ICcnIDogbnVsbFwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmdcIlxyXG4gIFtjbGFzcy5oYXMtdG9vbHRpcF09XCJ0b29sdGlwXCJcclxuICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuPlxyXG4gIDwhLS0gQ29udGVuaWRvIGRlbCBib3TDs24gLS0+XHJcbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250ZW50XCIgW2NsYXNzLmxvYWRpbmctaGlkZGVuXT1cInNob3dTcGlubmVyXCI+XHJcbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIChwb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGljb25Pbmx5KVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgW2NsYXNzLm1lLTFdPVwiIWljb25Pbmx5XCI+PC9mYS1pY29uPlxyXG4gICAgPHNwYW4gI2J1dHRvblRleHQgKm5nSWY9XCIhaWNvbk9ubHlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cclxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgcG9zaXRpb24gPT09ICdyaWdodCcgJiYgIWljb25Pbmx5XCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBjbGFzcz1cIm1zLTFcIj48L2ZhLWljb24+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPCEtLSBTcGlubmVyIHF1ZSBzZSBzdXBlcnBvbmUgY3VhbmRvIGVzdMOhIGxvYWRpbmcgLS0+XHJcbiAgPGRpdiAqbmdJZj1cInNob3dTcGlubmVyXCIgY2xhc3M9XCJzcGlubmVyLW92ZXJsYXlcIj5cclxuICAgIDxmYS1pY29uIFxyXG4gICAgICBbaWNvbl09XCJzcGlubmVySWNvblwiIFxyXG4gICAgICBjbGFzcz1cInNwaW5uZXItaWNvblwiXHJcbiAgICAgIFtjbGFzcy5zcGlubmluZ109XCJsb2FkaW5nXCI+XHJcbiAgICA8L2ZhLWljb24+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPCEtLSBUb29sdGlwIHBlcnNvbmFsaXphZG8gLS0+XHJcbiAgPGRpdiAqbmdJZj1cInRvb2x0aXBcIiBcclxuICAgICAgIGNsYXNzPVwiY3VzdG9tLXRvb2x0aXBcIiBcclxuICAgICAgIFtjbGFzcy50b29sdGlwLXRvcF09XCJ0b29sdGlwUG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgICAgIFtjbGFzcy50b29sdGlwLWJvdHRvbV09XCJ0b29sdGlwUG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgICAgIFtjbGFzcy50b29sdGlwLWxlZnRdPVwidG9vbHRpcFBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgICAgW2NsYXNzLnRvb2x0aXAtcmlnaHRdPVwidG9vbHRpcFBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICAgICAgIFtjbGFzcy5tdWx0aWxpbmVdPVwiaXNMb25nVG9vbHRpcFwiXHJcbiAgICAgICBbYXR0ci5kYXRhLXRvb2x0aXBdPVwidG9vbHRpcFwiPlxyXG4gICAge3sgdG9vbHRpcCB9fVxyXG4gIDwvZGl2PlxyXG48L2J1dHRvbj5cclxuIl19