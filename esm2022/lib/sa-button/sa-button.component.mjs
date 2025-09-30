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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFrQixrQkFBa0IsRUFBWSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pHLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sVUFBVSxFQUNWLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLE9BQU8sRUFDUCxNQUFNLEVBQ04scUJBQXFCLEVBQ3JCLFVBQVUsRUFDVixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFlBQVksRUFDWixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLFNBQVMsRUFDVCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsU0FB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RUFBRSxLQUFLLEVBQUU7Z0JBRWhDLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBmaW5kSWNvbkRlZmluaXRpb24sIEljb25OYW1lIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgXHJcbiAgZmFTcGlubmVyLCBcclxuICBmYURvd25sb2FkLCBcclxuICBmYVRyYXNoLCBcclxuICBmYVNoYXJlLCBcclxuICBmYVByaW50LCBcclxuICBmYUhlYXJ0LFxyXG4gIGZhSG9tZSxcclxuICBmYVVzZXIsXHJcbiAgZmFDb2csXHJcbiAgZmFTZWFyY2gsXHJcbiAgZmFTdGFyLFxyXG4gIGZhRWRpdCxcclxuICBmYVNhdmUsXHJcbiAgZmFQbHVzLFxyXG4gIGZhTWludXMsXHJcbiAgZmFDaGVjayxcclxuICBmYVRpbWVzLFxyXG4gIGZhRXllLFxyXG4gIGZhRXllU2xhc2gsXHJcbiAgZmFMb2NrLFxyXG4gIGZhVW5sb2NrLFxyXG4gIGZhQmVsbCxcclxuICBmYUVudmVsb3BlLFxyXG4gIGZhUGhvbmUsXHJcbiAgZmFNYXBNYXJrZXJBbHQsXHJcbiAgZmFDYWxlbmRhcixcclxuICBmYUNsb2NrLFxyXG4gIGZhSW5mbyxcclxuICBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgZmFRdWVzdGlvbixcclxuICBmYUNoZXZyb25Eb3duLFxyXG4gIGZhQ2hldnJvblVwLFxyXG4gIGZhQ2hldnJvbkxlZnQsXHJcbiAgZmFDaGV2cm9uUmlnaHQsXHJcbiAgZmFBcnJvd0xlZnQsXHJcbiAgZmFBcnJvd1JpZ2h0LFxyXG4gIGZhQXJyb3dVcCxcclxuICBmYUFycm93RG93bixcclxuICBmYVBlbmNpbCxcclxuICBmYUFuZ2xlRG91YmxlTGVmdCxcclxuICBmYUFuZ2xlTGVmdCxcclxuICBmYUFuZ2xlUmlnaHQsXHJcbiAgZmFBbmdsZURvdWJsZVJpZ2h0LFxyXG4gIC8vIE51ZXZvcyBpY29ub3MgYWdyZWdhZG9zXHJcbiAgZmFUaExhcmdlLFxyXG4gIGZhVXNlcnMsXHJcbiAgZmFMaW5rLFxyXG4gIGZhQ29weSxcclxuICBmYVVuaXZlcnNhbEFjY2VzcyxcclxuICBmYVJ1bm5pbmcsXHJcbiAgZmFJbWFnZSxcclxuICBmYUNhbGVuZGFyQWx0LFxyXG4gIGZhQ2hhcnRCYXIsXHJcbiAgZmFDaGFydExpbmUsXHJcbiAgZmFBcHBsZUFsdCxcclxuICBmYVJvYm90LFxyXG4gIGZhR2lmdCxcclxuICBmYVNob3BwaW5nQmFnLFxyXG4gIGZhQmFsYW5jZVNjYWxlLFxyXG4gIGZhQmF0dGVyeVRocmVlUXVhcnRlcnMsXHJcbiAgZmFCYXR0ZXJ5SGFsZixcclxuICBmYUJhdHRlcnlRdWFydGVyLFxyXG4gIGZhQmF0dGVyeUVtcHR5LFxyXG4gIGZhQmVsbFNsYXNoLFxyXG4gIGZhQmljeWNsZSxcclxuICBmYUJvb2ttYXJrLFxyXG4gIGZhQm93bEZvb2QsXHJcbiAgZmFCb3gsXHJcbiAgZmFCdXMsXHJcbiAgZmFCaXJ0aGRheUNha2UsXHJcbiAgZmFDYWxjdWxhdG9yLFxyXG4gIGZhQ2FsZW5kYXJEYXksXHJcbiAgZmFDYW1lcmEsXHJcbiAgZmFDYXJldERvd24sXHJcbiAgZmFDYXJldExlZnQsXHJcbiAgZmFDYXJldFJpZ2h0LFxyXG4gIGZhQ2FyZXRVcCxcclxuICBmYUZpbGUsXHJcbiAgZmFDaGFydFBpZSxcclxuICBmYUNvbW1lbnRzLFxyXG4gIGZhRmxhc2ssXHJcbiAgZmFNaWNyb3Njb3BlLFxyXG4gIGZhQ29va2llQml0ZSxcclxuICBmYVNwcmF5Q2FuLFxyXG4gIGZhU29hcCxcclxuICBmYUV4cGFuZCxcclxuICBmYUNsb3VkLFxyXG4gIGZhQ29mZmVlLFxyXG4gIGZhQ29tbWVudCxcclxuICBmYUNyZWRpdENhcmQsXHJcbiAgZmFDcm9wLFxyXG4gIGZhQ3JvcEFsdCxcclxuICBmYVRydWNrLFxyXG4gIGZhRmlsZVVwbG9hZCxcclxuICBmYUVsbGlwc2lzSCxcclxuICBmYVBsYW5lLFxyXG4gIGZhR3JhZHVhdGlvbkNhcCxcclxuICBmYUVxdWFscyxcclxuICBmYUVyYXNlcixcclxuICBmYUZpbGVFeGNlbCxcclxuICBmYUZpbGVEb3dubG9hZCxcclxuICBmYVNpZ25PdXRBbHQsXHJcbiAgZmFTbWlsZSxcclxuICBmYUZyb3duLFxyXG4gIGZhTWFzayxcclxuICBmYU1lZGFsLFxyXG4gIGZhQm94T3BlbixcclxuICBmYVNlZWRsaW5nLFxyXG4gIGZhRmlsdGVyLFxyXG4gIGZhRmluZ2VycHJpbnQsXHJcbiAgZmFGaXJlLFxyXG4gIGZhVHJvcGh5LFxyXG4gIGZhRmlzaCxcclxuICBmYUZsYWcsXHJcbiAgZmFGb3J3YXJkLFxyXG4gIGZhVm9sdW1lVXAsXHJcbiAgZmFFeHBhbmRBcnJvd3NBbHQsXHJcbiAgZmFHbG9iZSxcclxuICBmYVZvbHVtZU11dGUsXHJcbiAgZmFCYXJzLFxyXG4gIGZhQnJpZWZjYXNlLFxyXG4gIGZhTWljcm9jaGlwLFxyXG4gIGZhSGVhcnRiZWF0LFxyXG4gIGZhSGlzdG9yeSxcclxuICBmYU1pY3JvcGhvbmUsXHJcbiAgZmFJY2VDcmVhbSxcclxuICBmYUxpZ2h0YnVsYixcclxuICBmYUtleSxcclxuICBmYUxhcHRvcCxcclxuICBmYUxheWVyR3JvdXAsXHJcbiAgZmFMaXN0VWwsXHJcbiAgZmFWb2x1bWVEb3duLFxyXG4gIGZhTWFwUGluLFxyXG4gIGZhTG9jYXRpb25BcnJvdyxcclxuICBmYUNvbXBhc3MsXHJcbiAgZmFQaWxscyxcclxuICBmYU1vYmlsZSxcclxuICBmYU1vYmlsZUFsdCxcclxuICBmYU1vbmV5QmlsbCxcclxuICBmYU1vdG9yY3ljbGUsXHJcbiAgZmFTdGlja3lOb3RlLFxyXG4gIGZhRWxsaXBzaXNWLFxyXG4gIGZhTHVuZ3MsXHJcbiAgZmFDYXNoUmVnaXN0ZXIsXHJcbiAgZmFQYXBlclBsYW5lLFxyXG4gIGZhUGFwZXJjbGlwLFxyXG4gIGZhRGVza3RvcCxcclxuICBmYVBhdXNlLFxyXG4gIGZhUGVyY2VudCxcclxuICBmYVBpZ2d5QmFuayxcclxuICBmYVBsYXksXHJcbiAgZmFNb3VzZVBvaW50ZXIsXHJcbiAgZmFTd2ltbWluZ1Bvb2wsXHJcbiAgZmFCYW4sXHJcbiAgZmFUYWcsXHJcbiAgZmFTaGllbGQsXHJcbiAgZmFRcmNvZGUsXHJcbiAgZmFSZWNlaXB0LFxyXG4gIGZhUmVkbyxcclxuICBmYVJ1bGVyLFxyXG4gIGZhVXRlbnNpbHMsXHJcbiAgZmFUc2hpcnQsXHJcbiAgZmFTaG9wcGluZ0NhcnQsXHJcbiAgZmFTbGlkZXJzSCxcclxuICBmYUdsYXNzV2hpc2tleSxcclxuICBmYVNvcnQsXHJcbiAgZmFUYWNob21ldGVyQWx0LFxyXG4gIGZhU3Bvb24sXHJcbiAgZmFTdGFySGFsZixcclxuICBmYVN0b3AsXHJcbiAgZmFTdG9yZSxcclxuICBmYVRoZXJtb21ldGVySGFsZixcclxuICBmYVRodW1ic0Rvd24sXHJcbiAgZmFUaHVtYnNVcCxcclxuICBmYUJvbHQsXHJcbiAgZmFUaWNrZXRBbHQsXHJcbiAgZmFTaXRlbWFwLFxyXG4gIGZhQmF0aCxcclxuICBmYVVuZG8sXHJcbiAgZmFVcGxvYWQsXHJcbiAgZmFVc2VyUGx1cyxcclxuICBmYVVzZXJNaW51cyxcclxuICBmYVZpZGVvLFxyXG4gIGZhRXhjbGFtYXRpb25DaXJjbGUsXHJcbiAgZmFXaWZpLFxyXG4gIGZhVGFibGUsXHJcbiAgZmFUYWJsZXQsXHJcbiAgZmFUYWJsZXRBbHQsXHJcbiAgZmFBbWJ1bGFuY2VcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgVG9vbHRpcFBvc2l0aW9uIH0gZnJvbSAnLi4vdHlwZXMvdG9vbHRpcC50eXBlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ2RhbmdlcicgfCAnZGFuZ2VyLWxpZ2h0JyB8ICd3YXJuaW5nJyB8ICd3YXJuaW5nLWxpZ2h0JyB8ICdpbmZvJyB8ICdpbmZvLWxpZ2h0JyB8ICdncmF5JyB8ICdyZWQnIHwgJ3N1Y2Nlc3MnIHwgJ3N1Y2Nlc3MtbGlnaHQnO1xyXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBCdXR0b25UeXBlID0gJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50LnNjc3MnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuZnVsbC13aWR0aF0nOiAnZnVsbFdpZHRoJyxcclxuICAgICdzdHlsZSc6ICd2aXNpYmlsaXR5OiBoaWRkZW47JyxcclxuICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiAnXCJ2aXNpYmxlXCInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FCdXR0b25Db21wb25lbnQge1xyXG4gIC8vIFByb3BpZWRhZGVzIGNvbiBmbGV4aWJpbGlkYWQgbcOheGltYTogc29wb3J0YW4gYXR0cmlidXRlIHkgcHJvcGVydHkgYmluZGluZ1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnQnV0dG9uJzsgLy8gTWFudGVuZXIgY29tbyBASW5wdXQgc2ltcGxlIHBhcmEgc3RyaW5nc1xyXG4gIFxyXG4gIC8vIFByb3BpZWRhZGVzIGNvbiBzZXR0ZXJzL2dldHRlcnMgcGFyYSBmbGV4aWJpbGlkYWQgbcOheGltYVxyXG4gIHByaXZhdGUgX3ZhcmlhbnQ6IEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeSc7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogQnV0dG9uU2l6ZSA9ICdtZCc7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfdHlwZTogQnV0dG9uVHlwZSA9ICdidXR0b24nO1xyXG4gIHByaXZhdGUgX2ljb24/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XHJcbiAgcHJpdmF0ZSBfaWNvbk9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF90b29sdGlwPzogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Rvb2x0aXBQb3NpdGlvbjogVG9vbHRpcFBvc2l0aW9uID0gJ3RvcCc7XHJcbiAgcHJpdmF0ZSBfbm9BbmltYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRvb2x0aXAodmFsdWU6IHN0cmluZyB8IGFueSkge1xyXG4gICAgdGhpcy5fdG9vbHRpcCA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgdG9vbHRpcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0b29sdGlwUG9zaXRpb24odmFsdWU6IFRvb2x0aXBQb3NpdGlvbiB8IGFueSkge1xyXG4gICAgdGhpcy5fdG9vbHRpcFBvc2l0aW9uID0gdmFsdWUgfHwgJ3RvcCc7XHJcbiAgfVxyXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKTogVG9vbHRpcFBvc2l0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICAvLyBEZXRlcm1pbmFyIHNpIGVsIHRvb2x0aXAgbmVjZXNpdGEgbcO6bHRpcGxlcyBsw61uZWFzXHJcbiAgZ2V0IGlzTG9uZ1Rvb2x0aXAoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMudG9vbHRpcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gQ29uc2lkZXJhciB0ZXh0byBsYXJnbyBzaSB0aWVuZSBtw6FzIGRlIDYwIGNhcmFjdGVyZXMgbyBjb250aWVuZSBzYWx0b3MgZGUgbMOtbmVhXHJcbiAgICAvLyA2MCBjYXJhY3RlcmVzIGVzIGFwcm94aW1hZGFtZW50ZSBsbyBxdWUgY2FiZSBlbiAzNTBweCBjb24gZm9udC1zaXplIDEycHhcclxuICAgIHJldHVybiB0aGlzLnRvb2x0aXAubGVuZ3RoID4gNjAgfHwgdGhpcy50b29sdGlwLmluY2x1ZGVzKCdcXG4nKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhcmlhbnQodmFsdWU6IEJ1dHRvblZhcmlhbnQgfCBhbnkpIHtcclxuICAgIHRoaXMuX3ZhcmlhbnQgPSB2YWx1ZSB8fCAncHJpbWFyeSc7XHJcbiAgfVxyXG4gIGdldCB2YXJpYW50KCk6IEJ1dHRvblZhcmlhbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhcmlhbnQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzaXplKHZhbHVlOiBCdXR0b25TaXplIHwgYW55KSB7XHJcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgfHwgJ21kJztcclxuICB9XHJcbiAgZ2V0IHNpemUoKTogQnV0dG9uU2l6ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZnVsbFdpZHRoKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9mdWxsV2lkdGggPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgZnVsbFdpZHRoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHR5cGUodmFsdWU6IEJ1dHRvblR5cGUgfCBhbnkpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCAnYnV0dG9uJztcclxuICB9XHJcbiAgZ2V0IHR5cGUoKTogQnV0dG9uVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZyB8IGFueSkge1xyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwb3NpdGlvbih2YWx1ZTogJ2xlZnQnIHwgJ3JpZ2h0JyB8IGFueSkge1xyXG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZSB8fCAnbGVmdCc7XHJcbiAgfVxyXG4gIGdldCBwb3NpdGlvbigpOiAnbGVmdCcgfCAncmlnaHQnIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGljb25Pbmx5KHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9pY29uT25seSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBpY29uT25seSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uT25seTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5vQW5pbWF0ZSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbm9BbmltYXRlID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IG5vQW5pbWF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ub0FuaW1hdGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uVGV4dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBidXR0b25UZXh0ITogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8vIEljb25vIGRlIHNwaW5uZXIgcGFyYSBlbCBlc3RhZG8gbG9hZGluZ1xyXG4gIHJlYWRvbmx5IHNwaW5uZXJJY29uID0gZmFTcGlubmVyO1xyXG5cclxuICAvLyBNw6l0b2RvIHBhcmEgb2J0ZW5lciBlbCBpY29ubyBiYXNhZG8gZW4gZWwgc3RyaW5nXHJcbiAgZ2V0IGljb25EZWZpbml0aW9uKCk6IEljb25EZWZpbml0aW9uIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5pY29uKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgXHJcbiAgICAvLyBQcmltZXJvIGludGVudGEgY29uIGVsIG1hcGVvIGxvY2FsIChtw6FzIHLDoXBpZG8pXHJcbiAgICBjb25zdCBsb2NhbEljb25NYXA6IHsgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb24gfSA9IHtcclxuICAgICAgLy8gSWNvbm9zIGLDoXNpY29zIChzb2xpZCBwb3IgZGVmZWN0bylcclxuICAgICAgJ3NwaW5uZXInOiBmYVNwaW5uZXIsXHJcbiAgICAgICdkb3dubG9hZCc6IGZhRG93bmxvYWQsXHJcbiAgICAgICd0cmFzaCc6IGZhVHJhc2gsXHJcbiAgICAgICdzaGFyZSc6IGZhU2hhcmUsXHJcbiAgICAgICdwcmludCc6IGZhUHJpbnQsXHJcbiAgICAgICdoZWFydCc6IGZhSGVhcnQsXHJcbiAgICAgICdob21lJzogZmFIb21lLFxyXG4gICAgICAndXNlcic6IGZhVXNlcixcclxuICAgICAgJ2NvZyc6IGZhQ29nLFxyXG4gICAgICAnc2VhcmNoJzogZmFTZWFyY2gsXHJcbiAgICAgICdzdGFyJzogZmFTdGFyLFxyXG4gICAgICAnZWRpdCc6IGZhRWRpdCxcclxuICAgICAgJ3NhdmUnOiBmYVNhdmUsXHJcbiAgICAgICdwbHVzJzogZmFQbHVzLFxyXG4gICAgICAnbWludXMnOiBmYU1pbnVzLFxyXG4gICAgICAnY2hlY2snOiBmYUNoZWNrLFxyXG4gICAgICAndGltZXMnOiBmYVRpbWVzLFxyXG4gICAgICAnZXllJzogZmFFeWUsXHJcbiAgICAgICdleWUtc2xhc2gnOiBmYUV5ZVNsYXNoLFxyXG4gICAgICAnbG9jayc6IGZhTG9jayxcclxuICAgICAgJ3VubG9jayc6IGZhVW5sb2NrLFxyXG4gICAgICAnYmVsbCc6IGZhQmVsbCxcclxuICAgICAgJ2VudmVsb3BlJzogZmFFbnZlbG9wZSxcclxuICAgICAgJ3Bob25lJzogZmFQaG9uZSxcclxuICAgICAgJ21hcC1tYXJrZXItYWx0JzogZmFNYXBNYXJrZXJBbHQsXHJcbiAgICAgICdjYWxlbmRhcic6IGZhQ2FsZW5kYXIsXHJcbiAgICAgICdjbG9jayc6IGZhQ2xvY2ssXHJcbiAgICAgICdpbmZvJzogZmFJbmZvLFxyXG4gICAgICAnZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgICAgICdxdWVzdGlvbic6IGZhUXVlc3Rpb24sXHJcbiAgICAgICdjaGV2cm9uLWRvd24nOiBmYUNoZXZyb25Eb3duLFxyXG4gICAgICAnY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxyXG4gICAgICAnY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcclxuICAgICAgJ2NoZXZyb24tcmlnaHQnOiBmYUNoZXZyb25SaWdodCxcclxuICAgICAgJ2Fycm93LWxlZnQnOiBmYUFycm93TGVmdCxcclxuICAgICAgJ2Fycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxyXG4gICAgICAnYXJyb3ctdXAnOiBmYUFycm93VXAsXHJcbiAgICAgICdhcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXHJcbiAgICAgICdwZW5jaWwnOiBmYVBlbmNpbCxcclxuICAgICAgJ2FuZ2xlLWRvdWJsZS1sZWZ0JzogZmFBbmdsZURvdWJsZUxlZnQsXHJcbiAgICAgICdhbmdsZS1sZWZ0JzogZmFBbmdsZUxlZnQsXHJcbiAgICAgICdhbmdsZS1yaWdodCc6IGZhQW5nbGVSaWdodCxcclxuICAgICAgJ2FuZ2xlLWRvdWJsZS1yaWdodCc6IGZhQW5nbGVEb3VibGVSaWdodCxcclxuICAgICAgJ3RhYmxlJzogZmFUYWJsZSxcclxuICAgICAgJ3RoLWxhcmdlJzogZmFUaExhcmdlLFxyXG4gICAgICAndXNlcnMnOiBmYVVzZXJzLFxyXG4gICAgICAndW5pdmVyc2FsLWFjY2Vzcyc6IGZhVW5pdmVyc2FsQWNjZXNzLFxyXG4gICAgICAncnVubmluZyc6IGZhUnVubmluZyxcclxuICAgICAgJ2ltYWdlJzogZmFJbWFnZSxcclxuICAgICAgJ2NhbGVuZGFyLWFsdCc6IGZhQ2FsZW5kYXJBbHQsXHJcbiAgICAgICdjaGFydC1saW5lJzogZmFDaGFydExpbmUsXHJcbiAgICAgICdhcHBsZS1hbHQnOiBmYUFwcGxlQWx0LFxyXG4gICAgICAncm9ib3QnOiBmYVJvYm90LFxyXG4gICAgICAnc2hvcHBpbmctYmFnJzogZmFTaG9wcGluZ0JhZyxcclxuICAgICAgJ2JhbGFuY2Utc2NhbGUnOiBmYUJhbGFuY2VTY2FsZSxcclxuICAgICAgJ2JhdHRlcnktdGhyZWUtcXVhcnRlcnMnOiBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxyXG4gICAgICAnYmF0dGVyeS1xdWFydGVyJzogZmFCYXR0ZXJ5UXVhcnRlcixcclxuICAgICAgJ2JhdHRlcnktZW1wdHknOiBmYUJhdHRlcnlFbXB0eSxcclxuICAgICAgJ2JlbGwtc2xhc2gnOiBmYUJlbGxTbGFzaCxcclxuICAgICAgJ2Jvb2ttYXJrJzogZmFCb29rbWFyayxcclxuICAgICAgJ2Jvd2wtZm9vZCc6IGZhQm93bEZvb2QsXHJcbiAgICAgICdib3gnOiBmYUJveCxcclxuICAgICAgJ2J1cyc6IGZhQnVzLFxyXG4gICAgICAnYmlydGhkYXktY2FrZSc6IGZhQmlydGhkYXlDYWtlLFxyXG4gICAgICAnY2FsZW5kYXItZGF5JzogZmFDYWxlbmRhckRheSxcclxuICAgICAgJ2ZpbGUnOiBmYUZpbGUsXHJcbiAgICAgICdmbGFzayc6IGZhRmxhc2ssXHJcbiAgICAgICdjb29raWUtYml0ZSc6IGZhQ29va2llQml0ZSxcclxuICAgICAgJ3NwcmF5LWNhbic6IGZhU3ByYXlDYW4sXHJcbiAgICAgICdzb2FwJzogZmFTb2FwLFxyXG4gICAgICAnZXhwYW5kJzogZmFFeHBhbmQsXHJcbiAgICAgICdjbG91ZCc6IGZhQ2xvdWQsXHJcbiAgICAgICdjb21tZW50JzogZmFDb21tZW50LFxyXG4gICAgICAnZmlsZS11cGxvYWQnOiBmYUZpbGVVcGxvYWQsXHJcbiAgICAgICdlbGxpcHNpcy1oJzogZmFFbGxpcHNpc0gsXHJcbiAgICAgICdwbGFuZSc6IGZhUGxhbmUsXHJcbiAgICAgICdncmFkdWF0aW9uLWNhcCc6IGZhR3JhZHVhdGlvbkNhcCxcclxuICAgICAgJ2ZpbGUtZXhjZWwnOiBmYUZpbGVFeGNlbCxcclxuICAgICAgJ3NpZ24tb3V0LWFsdCc6IGZhU2lnbk91dEFsdCxcclxuICAgICAgJ3NtaWxlJzogZmFTbWlsZSxcclxuICAgICAgJ2Zyb3duJzogZmFGcm93bixcclxuICAgICAgJ21hc2snOiBmYU1hc2ssXHJcbiAgICAgICdib3gtb3Blbic6IGZhQm94T3BlbixcclxuICAgICAgJ3NlZWRsaW5nJzogZmFTZWVkbGluZyxcclxuICAgICAgJ3ZvbHVtZS11cCc6IGZhVm9sdW1lVXAsXHJcbiAgICAgICdleHBhbmQtYXJyb3dzLWFsdCc6IGZhRXhwYW5kQXJyb3dzQWx0LFxyXG4gICAgICAndm9sdW1lLW11dGUnOiBmYVZvbHVtZU11dGUsXHJcbiAgICAgICdiYXJzJzogZmFCYXJzLFxyXG4gICAgICAnYnJpZWZjYXNlJzogZmFCcmllZmNhc2UsXHJcbiAgICAgICdtaWNyb2NoaXAnOiBmYU1pY3JvY2hpcCxcclxuICAgICAgJ2hlYXJ0YmVhdCc6IGZhSGVhcnRiZWF0LFxyXG4gICAgICAnaGlzdG9yeSc6IGZhSGlzdG9yeSxcclxuICAgICAgJ21pY3JvcGhvbmUnOiBmYU1pY3JvcGhvbmUsXHJcbiAgICAgICdsaWdodGJ1bGInOiBmYUxpZ2h0YnVsYixcclxuICAgICAgJ2tleSc6IGZhS2V5LFxyXG4gICAgICAnbGF5ZXItZ3JvdXAnOiBmYUxheWVyR3JvdXAsXHJcbiAgICAgICdsaXN0LXVsJzogZmFMaXN0VWwsXHJcbiAgICAgICd2b2x1bWUtZG93bic6IGZhVm9sdW1lRG93bixcclxuICAgICAgJ3BpbGxzJzogZmFQaWxscyxcclxuICAgICAgJ21vYmlsZSc6IGZhTW9iaWxlLFxyXG4gICAgICAnbW9iaWxlLWFsdCc6IGZhTW9iaWxlQWx0LFxyXG4gICAgICAnbW9uZXktYmlsbCc6IGZhTW9uZXlCaWxsLFxyXG4gICAgICAnc3RpY2t5LW5vdGUnOiBmYVN0aWNreU5vdGUsXHJcbiAgICAgICdlbGxpcHNpcy12JzogZmFFbGxpcHNpc1YsXHJcbiAgICAgICdsdW5ncyc6IGZhTHVuZ3MsXHJcbiAgICAgICdjYXNoLXJlZ2lzdGVyJzogZmFDYXNoUmVnaXN0ZXIsXHJcbiAgICAgICdwYXBlci1wbGFuZSc6IGZhUGFwZXJQbGFuZSxcclxuICAgICAgJ2Rlc2t0b3AnOiBmYURlc2t0b3AsXHJcbiAgICAgICdjaGFydC1waWUnOiBmYUNoYXJ0UGllLFxyXG4gICAgICAnbW91c2UtcG9pbnRlcic6IGZhTW91c2VQb2ludGVyLFxyXG4gICAgICAnc3dpbW1pbmctcG9vbCc6IGZhU3dpbW1pbmdQb29sLFxyXG4gICAgICAnYmFuJzogZmFCYW4sXHJcbiAgICAgICd0YWcnOiBmYVRhZyxcclxuICAgICAgJ3NoaWVsZCc6IGZhU2hpZWxkLFxyXG4gICAgICAncXJjb2RlJzogZmFRcmNvZGUsXHJcbiAgICAgICdyZWRvJzogZmFSZWRvLFxyXG4gICAgICAncnVsZXInOiBmYVJ1bGVyLFxyXG4gICAgICAndXRlbnNpbHMnOiBmYVV0ZW5zaWxzLFxyXG4gICAgICAndHNoaXJ0JzogZmFUc2hpcnQsXHJcbiAgICAgICdzbGlkZXJzLWgnOiBmYVNsaWRlcnNILFxyXG4gICAgICAnZ2xhc3Mtd2hpc2tleSc6IGZhR2xhc3NXaGlza2V5LFxyXG4gICAgICAnc29ydCc6IGZhU29ydCxcclxuICAgICAgJ3RhY2hvbWV0ZXItYWx0JzogZmFUYWNob21ldGVyQWx0LFxyXG4gICAgICAnc3Bvb24nOiBmYVNwb29uLFxyXG4gICAgICAnc3RvcmUnOiBmYVN0b3JlLFxyXG4gICAgICAndGFibGV0JzogZmFUYWJsZXQsXHJcbiAgICAgICd0YWJsZXQtYWx0JzogZmFUYWJsZXRBbHQsXHJcbiAgICAgICd0aGVybW9tZXRlci1oYWxmJzogZmFUaGVybW9tZXRlckhhbGYsXHJcbiAgICAgICdib2x0JzogZmFCb2x0LFxyXG4gICAgICAndGlja2V0LWFsdCc6IGZhVGlja2V0QWx0LFxyXG4gICAgICAnc2l0ZW1hcCc6IGZhU2l0ZW1hcCxcclxuICAgICAgJ2JhdGgnOiBmYUJhdGgsXHJcbiAgICAgIFxyXG4gICAgICAvLyBOdWV2b3MgaWNvbm9zIGFncmVnYWRvc1xyXG4gICAgICAnZ3JpZCc6IGZhVGhMYXJnZSxcclxuICAgICAgJ2dyb3VwJzogZmFVc2VycyxcclxuICAgICAgJ2xpbmsnOiBmYUxpbmssXHJcbiAgICAgICdjb3B5JzogZmFDb3B5LFxyXG4gICAgICAnYWNjZXNzaWJpbGl0eS1hbHQnOiBmYVVuaXZlcnNhbEFjY2VzcyxcclxuICAgICAgJ2FjY2Vzc2liaWxpdHknOiBmYVVuaXZlcnNhbEFjY2VzcyxcclxuICAgICAgJ2FjdGl2aXR5JzogZmFSdW5uaW5nLFxyXG4gICAgICAnYWRkLWRvY3VtZW50JzogZmFGaWxlLFxyXG4gICAgICAnYWRkLWltYWdlJzogZmFJbWFnZSxcclxuXHJcbiAgICAgICdhbmFseXRpY3MnOiBmYUNoYXJ0QmFyLFxyXG4gICAgICAnYW5hbHl0aWNzLXJhaXNlJzogZmFDaGFydExpbmUsXHJcbiAgICAgICdhcHBsZSc6IGZhQXBwbGVBbHQsXHJcbiAgICAgICdhc3Npc3RhbnQnOiBmYVJvYm90LFxyXG4gICAgICAnYmFnLW9mLWZsb3VyJzogZmFHaWZ0LFxyXG4gICAgICAnYmFnLXdpdGgtZ2lmdCc6IGZhR2lmdCxcclxuICAgICAgJ2JhZ3MnOiBmYVNob3BwaW5nQmFnLFxyXG4gICAgICAnYmFsYW5jZSc6IGZhQmFsYW5jZVNjYWxlLFxyXG4gICAgICAnYmF0dGVyeS1hbHQnOiBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxyXG4gICAgICAnYmF0dGVyeS1jaGFyZ2luaWcnOiBmYUJhdHRlcnlIYWxmLFxyXG4gICAgICAnYmF0dGVyeS1mdWxsJzogZmFCYXR0ZXJ5SGFsZixcclxuICAgICAgJ2JhdHRlcnktaGFsZic6IGZhQmF0dGVyeUhhbGYsXHJcbiAgICAgICdiYXR0ZXJ5LWxvdyc6IGZhQmF0dGVyeVF1YXJ0ZXIsXHJcbiAgICAgICdiZWxsLW5ldy1tZXNzYWdlJzogZmFCZWxsLFxyXG4gICAgICAnYmVsbC1vZmYnOiBmYUJlbGxTbGFzaCxcclxuICAgICAgJ2JpY3ljbGUnOiBmYUJpY3ljbGUsXHJcbiAgICAgICdib29rbWFyay1zaW1wbGUnOiBmYUJvb2ttYXJrLFxyXG4gICAgICAnYm93bCc6IGZhQm93bEZvb2QsXHJcblxyXG4gICAgICAnYnVzLWZyb250JzogZmFCdXMsXHJcbiAgICAgICdidXR0ZXInOiBmYUJpcnRoZGF5Q2FrZSxcclxuICAgICAgJ2Nha2UnOiBmYUJpcnRoZGF5Q2FrZSxcclxuICAgICAgJ2NhbGN1bGF0b3InOiBmYUNhbGN1bGF0b3IsXHJcbiAgICAgICdjYWxlbmRhci1oaXN0b3J5LWFsdCc6IGZhQ2FsZW5kYXJEYXksXHJcbiAgICAgICdjYWxlbmRhci1oaXN0b3J5JzogZmFDYWxlbmRhckRheSxcclxuXHJcbiAgICAgICdjYW1lcmEnOiBmYUNhbWVyYSxcclxuXHJcbiAgICAgICdjYW5keSc6IGZhQ29va2llQml0ZSxcclxuICAgICAgJ2NhcmV0LWRvd24nOiBmYUNhcmV0RG93bixcclxuICAgICAgJ2NhcmV0LWxlZnQnOiBmYUNhcmV0TGVmdCxcclxuICAgICAgJ2NhcmV0LXJpZ2h0JzogZmFDYXJldFJpZ2h0LFxyXG4gICAgICAnY2FyZXQtdXAnOiBmYUNhcmV0VXAsXHJcbiAgICAgICdjZWxscy1kb2N1bWVudCc6IGZhRmlsZSxcclxuICAgICAgJ2NoYXJ0LWJhcic6IGZhQ2hhcnRCYXIsXHJcbiAgICAgICdjaGFydC1waWUtc2xpY2UnOiBmYUNoYXJ0UGllLFxyXG4gICAgICAnY2hhdC1jaXJjbGUtdGV4dCc6IGZhQ29tbWVudHMsXHJcbiAgICAgICdjaGVtaWNhbC1leHBlcmltZW50JzogZmFGbGFzayxcclxuICAgICAgJ2NoZW1pY2FsLXRlc3QnOiBmYU1pY3Jvc2NvcGUsXHJcbiAgICAgICdjaG9jb2xhdGUtYmFyJzogZmFDb29raWVCaXRlLFxyXG4gICAgICAnY2xlYW5lcic6IGZhU3ByYXlDYW4sXHJcbiAgICAgICdjbGVhbmVyLWRpc3BlbnNlcic6IGZhU29hcCxcclxuICAgICAgJ2Nsb3NlLWZ1bGwtc2NyZWVuJzogZmFFeHBhbmQsXHJcbiAgICAgICdjbG91ZC1vZmZsaW5lJzogZmFDbG91ZCxcclxuICAgICAgJ2Nsb3VkLXByb2JsZW0nOiBmYUNsb3VkLFxyXG4gICAgICAnY29mZmVlJzogZmFDb2ZmZWUsXHJcbiAgICAgICdjb21tZW50cyc6IGZhQ29tbWVudCxcclxuICAgICAgJ2Nvb2tpZSc6IGZhQ29va2llQml0ZSxcclxuICAgICAgJ2NyZWRpdC1jYXJkJzogZmFDcmVkaXRDYXJkLFxyXG4gICAgICAnY3JvcC1hbHQnOiBmYUNyb3BBbHQsXHJcbiAgICAgICdjcm9wJzogZmFDcm9wLFxyXG4gICAgICAnY3JvcC1oZWFsdGgnOiBmYUNyb3AsXHJcbiAgICAgICdkZWxpdmVyeS1ndXknOiBmYVRydWNrLFxyXG4gICAgICAnZGV0ZXJnZW50JzogZmFTb2FwLFxyXG4gICAgICAnZG9jdW1lbnQtdXBsb2FkJzogZmFGaWxlVXBsb2FkLFxyXG4gICAgICAnZG90cy10aHJlZSc6IGZhRWxsaXBzaXNILFxyXG4gICAgICAnZG93bmxvYWQtYWx0JzogZmFEb3dubG9hZCxcclxuICAgICAgJ2Ryb24nOiBmYVBsYW5lLFxyXG4gICAgICAnZWR1Y2F0aW9uJzogZmFHcmFkdWF0aW9uQ2FwLFxyXG4gICAgICAnZW52ZWxvcGUtbmV3LW1lc3NhZ2UnOiBmYUVudmVsb3BlLFxyXG4gICAgICAnZXF1YWxzJzogZmFFcXVhbHMsXHJcbiAgICAgICdlcmFzZXInOiBmYUVyYXNlcixcclxuICAgICAgJ2V4Y2VsJzogZmFGaWxlRXhjZWwsXHJcbiAgICAgICdleGNlbC1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxyXG4gICAgICAnZXhpdCc6IGZhU2lnbk91dEFsdCxcclxuICAgICAgJ2ZhY2Utc2F0aXNmaWVkJzogZmFTbWlsZSxcclxuICAgICAgJ2ZhY2UtZGlzc2F0aXNmaWVkJzogZmFGcm93bixcclxuICAgICAgJ2ZhY2UtbWFzayc6IGZhTWFzayxcclxuICAgICAgJ2ZhY2Vib29rJzogZmFTaGFyZSxcclxuICAgICAgJ2Zhc3QtdHJ1Y2snOiBmYVRydWNrLFxyXG5cclxuICAgICAgJ2Zhdm9yaXRlLW1lZGFsJzogZmFNZWRhbCxcclxuICAgICAgJ2Zhdm9yaXRlLXBhY2thZ2UnOiBmYUJveE9wZW4sXHJcbiAgICAgICdmZWVkZXInOiBmYVNlZWRsaW5nLFxyXG4gICAgICAnZmlsZS1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxyXG4gICAgICAnZmlsdGVyJzogZmFGaWx0ZXIsXHJcbiAgICAgICdmaW5nZXJwcmludCc6IGZhRmluZ2VycHJpbnQsXHJcbiAgICAgICdmaXJlJzogZmFGaXJlLFxyXG4gICAgICAnZmlyZXdvcmtzJzogZmFGaXJlLFxyXG4gICAgICAnZmlyc3QtcGxhY2UnOiBmYVRyb3BoeSxcclxuICAgICAgJ2Zpc2gnOiBmYUZpc2gsXHJcbiAgICAgICdmbGFnJzogZmFGbGFnLFxyXG4gICAgICAnZm9yd2FyZCc6IGZhRm9yd2FyZCxcclxuICAgICAgJ2Z1bGwtdm9sdW1lJzogZmFWb2x1bWVVcCxcclxuICAgICAgJ2Z1bGwtc2NyZWVuJzogZmFFeHBhbmRBcnJvd3NBbHQsXHJcbiAgICAgICdnZWFyJzogZmFDb2csXHJcbiAgICAgICdnaWZ0JzogZmFHaWZ0LFxyXG4gICAgICAnZ2lmdC1kZWxpdmVyeSc6IGZhR2lmdCxcclxuICAgICAgJ2dsb2JlJzogZmFHbG9iZSxcclxuICAgICAgJ2dyb3VwLWJpZ2dlcic6IGZhVXNlcnMsXHJcbiAgICAgICdoYWxmLXZvbHVtZSc6IGZhVm9sdW1lTXV0ZSxcclxuICAgICAgJ2hhbWJ1cmdlcic6IGZhQmFycyxcclxuICAgICAgJ2hhbmRiYWcnOiBmYUJyaWVmY2FzZSxcclxuICAgICAgJ2hhcHB5LWNoaXAnOiBmYU1pY3JvY2hpcCxcclxuICAgICAgJ2hlYWx0aHknOiBmYUhlYXJ0YmVhdCxcclxuICAgICAgJ2hpc3RvcnktdGltZSc6IGZhSGlzdG9yeSxcclxuICAgICAgJ2h5ZHJvcGhvbmUnOiBmYU1pY3JvcGhvbmUsXHJcbiAgICAgICdpY2UtY3JlYW0nOiBmYUljZUNyZWFtLFxyXG4gICAgICAnaWRlYSc6IGZhTGlnaHRidWxiLFxyXG5cclxuICAgICAgJ2luc3RhZ3JhbSc6IGZhU2hhcmUsXHJcbiAgICAgICdpbnRlbGxpZ2VuY2UtYS1pJzogZmFSb2JvdCxcclxuICAgICAgJ2xhcHRvcCc6IGZhTGFwdG9wLFxyXG4gICAgICAnbGF5ZXInOiBmYUxheWVyR3JvdXAsXHJcbiAgICAgICdsaXN0LWJ1bGxldGVkJzogZmFMaXN0VWwsXHJcbiAgICAgICdsb3ctdm9sdW1lJzogZmFWb2x1bWVEb3duLFxyXG4gICAgICAnbWFjaGluZS1sZWFybmluZy1tb2RlbCc6IGZhUm9ib3QsXHJcbiAgICAgICdtYWduaWZ5aW5nLWdsYXNzJzogZmFTZWFyY2gsXHJcbiAgICAgICdtYXAnOiBmYUdsb2JlLFxyXG4gICAgICAnbWFwLXBpbic6IGZhTWFwUGluLFxyXG4gICAgICAnbWFwLW1hcmtlcic6IGZhTWFwTWFya2VyQWx0LFxyXG4gICAgICAnbG9jYXRpb24nOiBmYU1hcE1hcmtlckFsdCxcclxuICAgICAgJ2xvY2F0aW9uLXBpbic6IGZhTWFwUGluLFxyXG4gICAgICAnbG9jYXRpb24tYXJyb3cnOiBmYUxvY2F0aW9uQXJyb3csXHJcbiAgICAgICdjb21wYXNzJzogZmFDb21wYXNzLFxyXG4gICAgICAnbmF2aWdhdGlvbic6IGZhQ29tcGFzcyxcclxuICAgICAgJ21hcHMnOiBmYUdsb2JlLFxyXG4gICAgICAnbWVkYWwnOiBmYU1lZGFsLFxyXG4gICAgICAnbWVkaWNpbmUtYWxlcnQnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgICAgICdtZWRpY2luZSc6IGZhUGlsbHMsXHJcbiAgICAgICdtaWNyby1jaGlwLWFsdCc6IGZhTWljcm9jaGlwLFxyXG4gICAgICAnbWljcm8tY2hpcCc6IGZhTWljcm9jaGlwLFxyXG4gICAgICAnbWljcm9zY29wZSc6IGZhTWljcm9zY29wZSxcclxuICAgICAgJ21vYmlsZS1ob3Jpem9udGFsJzogZmFNb2JpbGUsXHJcbiAgICAgICdtb2JpbGUtdmVydGljYWwnOiBmYU1vYmlsZUFsdCxcclxuICAgICAgJ21vbmV5JzogZmFNb25leUJpbGwsXHJcbiAgICAgICdtb3RvcmN5Y2xlJzogZmFNb3RvcmN5Y2xlLFxyXG4gICAgICAnbm90ZS1wZW5jaWwnOiBmYVN0aWNreU5vdGUsXHJcbiAgICAgICdvcGVubG9jayc6IGZhVW5sb2NrLFxyXG4gICAgICAnb3ZlcmZsb3ctbWVudS12ZXJ0aWNhbCc6IGZhRWxsaXBzaXNWLFxyXG4gICAgICAnb3h5Z2VuJzogZmFMdW5ncyxcclxuICAgICAgJ3Atby1zJzogZmFDYXNoUmVnaXN0ZXIsXHJcblxyXG4gICAgICAncGFwZXItcGxhbmUtcmlnaHQnOiBmYVBhcGVyUGxhbmUsXHJcbiAgICAgICdwYXBlcmNsaXAnOiBmYVBhcGVyY2xpcCxcclxuICAgICAgJ3BhdXNlJzogZmFQYXVzZSxcclxuICAgICAgJ3BlcmNlbnQnOiBmYVBlcmNlbnQsXHJcbiAgICAgICdwaWdneS1iYW5rJzogZmFQaWdneUJhbmssXHJcbiAgICAgICdwaWxsJzogZmFQaWxscyxcclxuICAgICAgJ3BsYWNlLWxvY2F0aW9uJzogZmFNYXBNYXJrZXJBbHQsXHJcbiAgICAgICdwbGF5JzogZmFQbGF5LFxyXG4gICAgICAncG9pbnRlcic6IGZhTW91c2VQb2ludGVyLFxyXG4gICAgICAncG9pbnRlci1sb2NrJzogZmFNb3VzZVBvaW50ZXIsXHJcbiAgICAgICdwb29sLWxhZGRlcic6IGZhU3dpbW1pbmdQb29sLFxyXG4gICAgICAncG9zdC1oaXN0b3J5JzogZmFIaXN0b3J5LFxyXG4gICAgICAncG9zdGl0JzogZmFTdGlja3lOb3RlLFxyXG4gICAgICAncHJvaGliaXQnOiBmYUJhbixcclxuICAgICAgJ3Byb21vdGlvbic6IGZhVGFnLFxyXG4gICAgICAncHJvdGVjdGlvbi1jaGVja2VkJzogZmFTaGllbGQsXHJcbiAgICAgICdxcic6IGZhUXJjb2RlLFxyXG4gICAgICAncmVjZWlwdCc6IGZhUmVjZWlwdCxcclxuICAgICAgJ3JlY2VpcHQtY2hlY2tlZCc6IGZhUmVjZWlwdCxcclxuXHJcbiAgICAgICdyZW5ldyc6IGZhUmVkbyxcclxuICAgICAgJ3JlcGVhdCc6IGZhUmVkbyxcclxuICAgICAgJ3JlcGVhdC1wdXJjaGFzZSc6IGZhUmVkbyxcclxuICAgICAgJ3J1Yyc6IGZhVXNlcixcclxuICAgICAgJ3J1bGVyLWFsdCc6IGZhUnVsZXIsXHJcbiAgICAgICdzYXVjZSc6IGZhVXRlbnNpbHMsXHJcbiAgICAgICdzY2FuJzogZmFRcmNvZGUsXHJcbiAgICAgICdzZWFyY2gtbGF5ZXJzJzogZmFTZWFyY2gsXHJcbiAgICAgICdzZW5zb3InOiBmYU1pY3JvY2hpcCxcclxuICAgICAgJ3NldHRpbmdzLWFsdCc6IGZhQ29nLFxyXG4gICAgICAnc2hhcmUtbmV0d29yayc6IGZhU2hhcmUsXHJcbiAgICAgICdzaGlydCc6IGZhVHNoaXJ0LFxyXG4gICAgICAnc2hvcHBpbmctY2FydCc6IGZhU2hvcHBpbmdDYXJ0LFxyXG4gICAgICAnc2hyaW1wJzogZmFGaXNoLFxyXG4gICAgICAnc2lnbi1vdXQnOiBmYVNpZ25PdXRBbHQsXHJcbiAgICAgICdzbGlkZXJzLWhvcml6b250YWwnOiBmYVNsaWRlcnNILFxyXG4gICAgICAnc29kYSc6IGZhR2xhc3NXaGlza2V5LFxyXG4gICAgICAnc29ydC1ieSc6IGZhU29ydCxcclxuICAgICAgJ3NvdXAtZGlzcGVuc2VyJzogZmFVdGVuc2lscyxcclxuICAgICAgJ3NvdXAtbm9vZGxlcyc6IGZhVXRlbnNpbHMsXHJcbiAgICAgICdzcGVlZG9tZXRlcic6IGZhVGFjaG9tZXRlckFsdCxcclxuICAgICAgJ3Nwb25nZSc6IGZhU3Bvb24sXHJcbiAgICAgICdzdGFyLWhhbGYnOiBmYVN0YXJIYWxmLFxyXG4gICAgICAnc3RvcCc6IGZhU3RvcCxcclxuICAgICAgJ3N0b3JlZnJvbnQnOiBmYVN0b3JlLFxyXG4gICAgICAnc3R5bGluZy1jcmVhbSc6IGZhU29hcCxcclxuICAgICAgJ3N1YnN0cmFjdC12b2x1bWUnOiBmYVZvbHVtZU11dGUsXHJcbiAgICAgICd0ZW1wZXJhdHVyZSc6IGZhVGhlcm1vbWV0ZXJIYWxmLFxyXG4gICAgICAndGh1bWJzLWRvd24nOiBmYVRodW1ic0Rvd24sXHJcbiAgICAgICd0aHVtYnMtdXAnOiBmYVRodW1ic1VwLFxyXG4gICAgICAndGh1bmRlcic6IGZhQm9sdCxcclxuICAgICAgJ3RpY2tldCc6IGZhVGlja2V0QWx0LFxyXG4gICAgICAndG9vdGhwYXN0ZSc6IGZhU29hcCxcclxuICAgICAgJ3RyZWUtdmlldyc6IGZhU2l0ZW1hcCxcclxuICAgICAgJ3RyZW5kLWRvd24nOiBmYUNoYXJ0TGluZSxcclxuICAgICAgJ3RyZW5kLXVwJzogZmFDaGFydExpbmUsXHJcbiAgICAgICd0cm9waHknOiBmYVRyb3BoeSxcclxuICAgICAgJ3RydWNrJzogZmFUcnVjayxcclxuICAgICAgJ3R1Yic6IGZhQmF0aCxcclxuICAgICAgJ3R3aXR0ZXInOiBmYVNoYXJlLFxyXG4gICAgICAndW5kbyc6IGZhVW5kbyxcclxuICAgICAgJ3VwbG9hZCc6IGZhVXBsb2FkLFxyXG4gICAgICAndXNlci1hdmF0YXInOiBmYVVzZXIsXHJcbiAgICAgICd1c2VyLWFkZCc6IGZhVXNlclBsdXMsXHJcbiAgICAgICd1c2VyLXBsdXMnOiBmYVVzZXJQbHVzLFxyXG4gICAgICAndXNlci1zdWJzdHJhY3QnOiBmYVVzZXJNaW51cyxcclxuICAgICAgJ3VzZXItbWludXMnOiBmYVVzZXJNaW51cyxcclxuICAgICAgJ3VzZXItd2l0aC1jYXJ0JzogZmFVc2VyLFxyXG4gICAgICAndmlkZW8nOiBmYVZpZGVvLFxyXG4gICAgICAndmlkZW8tbGF5ZXInOiBmYVZpZGVvLFxyXG4gICAgICAnZXhjbGFtYXRpb24tY2lyY2xlJzogZmFFeGNsYW1hdGlvbkNpcmNsZSxcclxuICAgICAgJ3dhcm5pbmctY2lyY2xlJzogZmFFeGNsYW1hdGlvbkNpcmNsZSxcclxuICAgICAgJ3dhcm5pbmctdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgICAgICd3aGF0c2FwcCc6IGZhU2hhcmUsXHJcbiAgICAgICd3aWZpJzogZmFXaWZpLFxyXG4gICAgICAnd2ktZmknOiBmYVdpZmksXHJcbiAgICAgICd3aS1maS1vZmYnOiBmYVdpZmksXHJcbiAgICAgICd4JzogZmFUaW1lcyxcclxuICAgICAgJ2Nsb3NlJzogZmFUaW1lcyxcclxuICAgICAgJ3lvdXR1YmUnOiBmYVNoYXJlLFxyXG4gICAgICBcclxuICAgICAgLy8gVGFtYmnDqW4gc29wb3J0YSBmb3JtYXRvIGZhcyBmYS1cclxuICAgICAgJ2ZhcyBmYS1zcGlubmVyJzogZmFTcGlubmVyLFxyXG4gICAgICAnZmFzIGZhLWRvd25sb2FkJzogZmFEb3dubG9hZCxcclxuICAgICAgJ2ZhcyBmYS10cmFzaCc6IGZhVHJhc2gsXHJcbiAgICAgICdmYXMgZmEtc2hhcmUnOiBmYVNoYXJlLFxyXG4gICAgICAnZmFzIGZhLXByaW50JzogZmFQcmludCxcclxuICAgICAgJ2ZhcyBmYS1oZWFydCc6IGZhSGVhcnQsXHJcbiAgICAgICdmYXMgZmEtaG9tZSc6IGZhSG9tZSxcclxuICAgICAgJ2ZhcyBmYS11c2VyJzogZmFVc2VyLFxyXG4gICAgICAnZmFzIGZhLWNvZyc6IGZhQ29nLFxyXG4gICAgICAnZmFzIGZhLXNlYXJjaCc6IGZhU2VhcmNoLFxyXG4gICAgICAnZmFzIGZhLXN0YXInOiBmYVN0YXIsXHJcbiAgICAgICdmYXMgZmEtZWRpdCc6IGZhRWRpdCxcclxuICAgICAgJ2ZhcyBmYS1zYXZlJzogZmFTYXZlLFxyXG4gICAgICAnZmFzIGZhLXBsdXMnOiBmYVBsdXMsXHJcbiAgICAgICdmYXMgZmEtbWludXMnOiBmYU1pbnVzLFxyXG4gICAgICAnZmFzIGZhLWNoZWNrJzogZmFDaGVjayxcclxuICAgICAgJ2ZhcyBmYS10aW1lcyc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEteCc6IGZhVGltZXMsXHJcbiAgICAgICdmYXMgZmEtY2xvc2UnOiBmYVRpbWVzLFxyXG4gICAgICAnZmFzIGZhLWV5ZSc6IGZhRXllLFxyXG4gICAgICAnZmFzIGZhLWV5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXHJcbiAgICAgICdmYXMgZmEtbG9jayc6IGZhTG9jayxcclxuICAgICAgJ2ZhcyBmYS11bmxvY2snOiBmYVVubG9jayxcclxuICAgICAgJ2ZhcyBmYS1iZWxsJzogZmFCZWxsLFxyXG4gICAgICAnZmFzIGZhLWVudmVsb3BlJzogZmFFbnZlbG9wZSxcclxuICAgICAgJ2ZhcyBmYS1waG9uZSc6IGZhUGhvbmUsXHJcbiAgICAgICdmYXMgZmEtbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcclxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhcic6IGZhQ2FsZW5kYXIsXHJcbiAgICAgICdmYXMgZmEtY2xvY2snOiBmYUNsb2NrLFxyXG4gICAgICAnZmFzIGZhLWluZm8nOiBmYUluZm8sXHJcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXHJcbiAgICAgICdmYXMgZmEtcXVlc3Rpb24nOiBmYVF1ZXN0aW9uLFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxyXG4gICAgICAnZmFzIGZhLWNoZXZyb24tbGVmdCc6IGZhQ2hldnJvbkxlZnQsXHJcbiAgICAgICdmYXMgZmEtY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxyXG4gICAgICAnZmFzIGZhLWFycm93LWxlZnQnOiBmYUFycm93TGVmdCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy1yaWdodCc6IGZhQXJyb3dSaWdodCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy11cCc6IGZhQXJyb3dVcCxcclxuICAgICAgJ2ZhcyBmYS1hcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXHJcbiAgICAgICdmYXMgZmEtcGVuY2lsJzogZmFQZW5jaWwsXHJcbiAgICAgICdmYXMgZmEtYW5nbGUtZG91YmxlLWxlZnQnOiBmYUFuZ2xlRG91YmxlTGVmdCxcclxuICAgICAgJ2ZhcyBmYS1hbmdsZS1sZWZ0JzogZmFBbmdsZUxlZnQsXHJcbiAgICAgICdmYXMgZmEtYW5nbGUtcmlnaHQnOiBmYUFuZ2xlUmlnaHQsXHJcbiAgICAgICdmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0JzogZmFBbmdsZURvdWJsZVJpZ2h0LFxyXG4gICAgICAnZmFzIGZhLXRhYmxlJzogZmFUYWJsZSxcclxuICAgICAgJ2ZhcyBmYS10aC1sYXJnZSc6IGZhVGhMYXJnZSxcclxuICAgICAgJ2ZhcyBmYS11c2Vycyc6IGZhVXNlcnMsXHJcbiAgICAgICdmYXMgZmEtbGluayc6IGZhTGluayxcclxuICAgICAgJ2ZhcyBmYS1jb3B5JzogZmFDb3B5LFxyXG4gICAgICAnZmFzIGZhLXVuaXZlcnNhbC1hY2Nlc3MnOiBmYVVuaXZlcnNhbEFjY2VzcyxcclxuICAgICAgJ2ZhcyBmYS1ydW5uaW5nJzogZmFSdW5uaW5nLFxyXG4gICAgICAnZmFzIGZhLWltYWdlJzogZmFJbWFnZSxcclxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhci1hbHQnOiBmYUNhbGVuZGFyQWx0LFxyXG4gICAgICAnZmFzIGZhLWNoYXJ0LWJhcic6IGZhQ2hhcnRCYXIsXHJcbiAgICAgICdmYXMgZmEtY2hhcnQtbGluZSc6IGZhQ2hhcnRMaW5lLFxyXG4gICAgICAnZmFzIGZhLWFwcGxlLWFsdCc6IGZhQXBwbGVBbHQsXHJcbiAgICAgICdmYXMgZmEtcm9ib3QnOiBmYVJvYm90LFxyXG4gICAgICAnZmFzIGZhLWdpZnQnOiBmYUdpZnQsXHJcbiAgICAgICdmYXMgZmEtc2hvcHBpbmctYmFnJzogZmFTaG9wcGluZ0JhZyxcclxuICAgICAgJ2ZhcyBmYS1iYWxhbmNlLXNjYWxlJzogZmFCYWxhbmNlU2NhbGUsXHJcbiAgICAgICdmYXMgZmEtYmF0dGVyeS10aHJlZS1xdWFydGVycyc6IGZhQmF0dGVyeVRocmVlUXVhcnRlcnMsXHJcbiAgICAgICdmYXMgZmEtYmF0dGVyeS1oYWxmJzogZmFCYXR0ZXJ5SGFsZixcclxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LXF1YXJ0ZXInOiBmYUJhdHRlcnlRdWFydGVyLFxyXG4gICAgICAnZmFzIGZhLWJhdHRlcnktZW1wdHknOiBmYUJhdHRlcnlFbXB0eSxcclxuICAgICAgJ2ZhcyBmYS1iZWxsLXNsYXNoJzogZmFCZWxsU2xhc2gsXHJcbiAgICAgICdmYXMgZmEtYmljeWNsZSc6IGZhQmljeWNsZSxcclxuICAgICAgJ2ZhcyBmYS1ib29rbWFyayc6IGZhQm9va21hcmssXHJcbiAgICAgICdmYXMgZmEtYm93bC1mb29kJzogZmFCb3dsRm9vZCxcclxuICAgICAgJ2ZhcyBmYS1ib3gnOiBmYUJveCxcclxuICAgICAgJ2ZhcyBmYS1idXMnOiBmYUJ1cyxcclxuICAgICAgJ2ZhcyBmYS1iaXJ0aGRheS1jYWtlJzogZmFCaXJ0aGRheUNha2UsXHJcbiAgICAgICdmYXMgZmEtY2FsY3VsYXRvcic6IGZhQ2FsY3VsYXRvcixcclxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhci1kYXknOiBmYUNhbGVuZGFyRGF5LFxyXG4gICAgICAnZmFzIGZhLWNhbWVyYSc6IGZhQ2FtZXJhLFxyXG4gICAgICAnZmFzIGZhLWNhcmV0LWRvd24nOiBmYUNhcmV0RG93bixcclxuICAgICAgJ2ZhcyBmYS1jYXJldC1sZWZ0JzogZmFDYXJldExlZnQsXHJcbiAgICAgICdmYXMgZmEtY2FyZXQtcmlnaHQnOiBmYUNhcmV0UmlnaHQsXHJcbiAgICAgICdmYXMgZmEtY2FyZXQtdXAnOiBmYUNhcmV0VXAsXHJcbiAgICAgICdmYXMgZmEtZmlsZSc6IGZhRmlsZSxcclxuICAgICAgJ2ZhcyBmYS1jaGFydC1waWUnOiBmYUNoYXJ0UGllLFxyXG4gICAgICAnZmFzIGZhLWNvbW1lbnRzJzogZmFDb21tZW50cyxcclxuICAgICAgJ2ZhcyBmYS1mbGFzayc6IGZhRmxhc2ssXHJcbiAgICAgICdmYXMgZmEtbWljcm9zY29wZSc6IGZhTWljcm9zY29wZSxcclxuICAgICAgJ2ZhcyBmYS1jb29raWUtYml0ZSc6IGZhQ29va2llQml0ZSxcclxuICAgICAgJ2ZhcyBmYS1zcHJheS1jYW4nOiBmYVNwcmF5Q2FuLFxyXG4gICAgICAnZmFzIGZhLXNvYXAnOiBmYVNvYXAsXHJcbiAgICAgICdmYXMgZmEtZXhwYW5kJzogZmFFeHBhbmQsXHJcbiAgICAgICdmYXMgZmEtY2xvdWQnOiBmYUNsb3VkLFxyXG4gICAgICAnZmFzIGZhLWNvZmZlZSc6IGZhQ29mZmVlLFxyXG4gICAgICAnZmFzIGZhLWNvbW1lbnQnOiBmYUNvbW1lbnQsXHJcbiAgICAgICdmYXMgZmEtY3JlZGl0LWNhcmQnOiBmYUNyZWRpdENhcmQsXHJcbiAgICAgICdmYXMgZmEtY3JvcCc6IGZhQ3JvcCxcclxuICAgICAgJ2ZhcyBmYS1jcm9wLWFsdCc6IGZhQ3JvcEFsdCxcclxuICAgICAgJ2ZhcyBmYS10cnVjayc6IGZhVHJ1Y2ssXHJcbiAgICAgICdmYXMgZmEtZmlsZS11cGxvYWQnOiBmYUZpbGVVcGxvYWQsXHJcbiAgICAgICdmYXMgZmEtZWxsaXBzaXMtaCc6IGZhRWxsaXBzaXNILFxyXG4gICAgICAnZmFzIGZhLXBsYW5lJzogZmFQbGFuZSxcclxuICAgICAgJ2ZhcyBmYS1ncmFkdWF0aW9uLWNhcCc6IGZhR3JhZHVhdGlvbkNhcCxcclxuICAgICAgJ2ZhcyBmYS1lcXVhbHMnOiBmYUVxdWFscyxcclxuICAgICAgJ2ZhcyBmYS1lcmFzZXInOiBmYUVyYXNlcixcclxuICAgICAgJ2ZhcyBmYS1maWxlLWV4Y2VsJzogZmFGaWxlRXhjZWwsXHJcbiAgICAgICdmYXMgZmEtZmlsZS1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxyXG4gICAgICAnZmFzIGZhLXNpZ24tb3V0LWFsdCc6IGZhU2lnbk91dEFsdCxcclxuICAgICAgJ2ZhcyBmYS1zbWlsZSc6IGZhU21pbGUsXHJcbiAgICAgICdmYXMgZmEtZnJvd24nOiBmYUZyb3duLFxyXG4gICAgICAnZmFzIGZhLW1hc2snOiBmYU1hc2ssXHJcbiAgICAgICdmYXMgZmEtbWVkYWwnOiBmYU1lZGFsLFxyXG4gICAgICAnZmFzIGZhLWJveC1vcGVuJzogZmFCb3hPcGVuLFxyXG4gICAgICAnZmFzIGZhLXNlZWRsaW5nJzogZmFTZWVkbGluZyxcclxuICAgICAgJ2ZhcyBmYS1maWx0ZXInOiBmYUZpbHRlcixcclxuICAgICAgJ2ZhcyBmYS1maW5nZXJwcmludCc6IGZhRmluZ2VycHJpbnQsXHJcbiAgICAgICdmYXMgZmEtZmlyZSc6IGZhRmlyZSxcclxuICAgICAgJ2ZhcyBmYS10cm9waHknOiBmYVRyb3BoeSxcclxuICAgICAgJ2ZhcyBmYS1maXNoJzogZmFGaXNoLFxyXG4gICAgICAnZmFzIGZhLWZsYWcnOiBmYUZsYWcsXHJcbiAgICAgICdmYXMgZmEtZm9yd2FyZCc6IGZhRm9yd2FyZCxcclxuICAgICAgJ2ZhcyBmYS12b2x1bWUtdXAnOiBmYVZvbHVtZVVwLFxyXG4gICAgICAnZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0JzogZmFFeHBhbmRBcnJvd3NBbHQsXHJcbiAgICAgICdmYXMgZmEtZ2xvYmUnOiBmYUdsb2JlLFxyXG4gICAgICAnZmFzIGZhLXZvbHVtZS1tdXRlJzogZmFWb2x1bWVNdXRlLFxyXG4gICAgICAnZmFzIGZhLWJhcnMnOiBmYUJhcnMsXHJcbiAgICAgICdmYXMgZmEtYnJpZWZjYXNlJzogZmFCcmllZmNhc2UsXHJcbiAgICAgICdmYXMgZmEtbWljcm9jaGlwJzogZmFNaWNyb2NoaXAsXHJcbiAgICAgICdmYXMgZmEtaGVhcnRiZWF0JzogZmFIZWFydGJlYXQsXHJcbiAgICAgICdmYXMgZmEtaGlzdG9yeSc6IGZhSGlzdG9yeSxcclxuICAgICAgJ2ZhcyBmYS1taWNyb3Bob25lJzogZmFNaWNyb3Bob25lLFxyXG4gICAgICAnZmFzIGZhLWljZS1jcmVhbSc6IGZhSWNlQ3JlYW0sXHJcbiAgICAgICdmYXMgZmEtbGlnaHRidWxiJzogZmFMaWdodGJ1bGIsXHJcbiAgICAgICdmYXMgZmEta2V5JzogZmFLZXksXHJcbiAgICAgICdmYXMgZmEtbGFwdG9wJzogZmFMYXB0b3AsXHJcbiAgICAgICdmYXMgZmEtbGF5ZXItZ3JvdXAnOiBmYUxheWVyR3JvdXAsXHJcbiAgICAgICdmYXMgZmEtbGlzdC11bCc6IGZhTGlzdFVsLFxyXG4gICAgICAnZmFzIGZhLXZvbHVtZS1kb3duJzogZmFWb2x1bWVEb3duLFxyXG4gICAgICAnZmFzIGZhLW1hcC1waW4nOiBmYU1hcFBpbixcclxuICAgICAgJ2ZhcyBmYS1sb2NhdGlvbi1hcnJvdyc6IGZhTG9jYXRpb25BcnJvdyxcclxuICAgICAgJ2ZhcyBmYS1jb21wYXNzJzogZmFDb21wYXNzLFxyXG4gICAgICAnZmFzIGZhLXBpbGxzJzogZmFQaWxscyxcclxuICAgICAgJ2ZhcyBmYS1tb2JpbGUnOiBmYU1vYmlsZSxcclxuICAgICAgJ2ZhcyBmYS1tb2JpbGUtYWx0JzogZmFNb2JpbGVBbHQsXHJcbiAgICAgICdmYXMgZmEtbW9uZXktYmlsbCc6IGZhTW9uZXlCaWxsLFxyXG4gICAgICAnZmFzIGZhLW1vdG9yY3ljbGUnOiBmYU1vdG9yY3ljbGUsXHJcbiAgICAgICdmYXMgZmEtc3RpY2t5LW5vdGUnOiBmYVN0aWNreU5vdGUsXHJcbiAgICAgICdmYXMgZmEtZWxsaXBzaXMtdic6IGZhRWxsaXBzaXNWLFxyXG4gICAgICAnZmFzIGZhLWx1bmdzJzogZmFMdW5ncyxcclxuICAgICAgJ2ZhcyBmYS1jYXNoLXJlZ2lzdGVyJzogZmFDYXNoUmVnaXN0ZXIsXHJcbiAgICAgICdmYXMgZmEtcGFwZXItcGxhbmUnOiBmYVBhcGVyUGxhbmUsXHJcbiAgICAgICdmYXMgZmEtcGFwZXJjbGlwJzogZmFQYXBlcmNsaXAsXHJcbiAgICAgICdmYXMgZmEtZGVza3RvcCc6IGZhRGVza3RvcCxcclxuICAgICAgJ2ZhcyBmYS1wYXVzZSc6IGZhUGF1c2UsXHJcbiAgICAgICdmYXMgZmEtcGVyY2VudCc6IGZhUGVyY2VudCxcclxuICAgICAgJ2ZhcyBmYS1waWdneS1iYW5rJzogZmFQaWdneUJhbmssXHJcbiAgICAgICdmYXMgZmEtcGxheSc6IGZhUGxheSxcclxuICAgICAgJ2ZhcyBmYS1tb3VzZS1wb2ludGVyJzogZmFNb3VzZVBvaW50ZXIsXHJcbiAgICAgICdmYXMgZmEtc3dpbW1pbmctcG9vbCc6IGZhU3dpbW1pbmdQb29sLFxyXG4gICAgICAnZmFzIGZhLWJhbic6IGZhQmFuLFxyXG4gICAgICAnZmFzIGZhLXRhZyc6IGZhVGFnLFxyXG4gICAgICAnZmFzIGZhLXNoaWVsZCc6IGZhU2hpZWxkLFxyXG4gICAgICAnZmFzIGZhLXFyY29kZSc6IGZhUXJjb2RlLFxyXG4gICAgICAnZmFzIGZhLXJlY2VpcHQnOiBmYVJlY2VpcHQsXHJcbiAgICAgICdmYXMgZmEtcmVkbyc6IGZhUmVkbyxcclxuICAgICAgJ2ZhcyBmYS1ydWxlcic6IGZhUnVsZXIsXHJcbiAgICAgICdmYXMgZmEtdXRlbnNpbHMnOiBmYVV0ZW5zaWxzLFxyXG4gICAgICAnZmFzIGZhLXRzaGlydCc6IGZhVHNoaXJ0LFxyXG4gICAgICAnZmFzIGZhLXNob3BwaW5nLWNhcnQnOiBmYVNob3BwaW5nQ2FydCxcclxuICAgICAgJ2ZhcyBmYS1zbGlkZXJzLWgnOiBmYVNsaWRlcnNILFxyXG4gICAgICAnZmFzIGZhLWdsYXNzLXdoaXNrZXknOiBmYUdsYXNzV2hpc2tleSxcclxuICAgICAgJ2ZhcyBmYS1zb3J0JzogZmFTb3J0LFxyXG4gICAgICAnZmFzIGZhLXRhY2hvbWV0ZXItYWx0JzogZmFUYWNob21ldGVyQWx0LFxyXG4gICAgICAnZmFzIGZhLXNwb29uJzogZmFTcG9vbixcclxuICAgICAgJ2ZhcyBmYS1zdGFyLWhhbGYnOiBmYVN0YXJIYWxmLFxyXG4gICAgICAnZmFzIGZhLXN0b3AnOiBmYVN0b3AsXHJcbiAgICAgICdmYXMgZmEtc3RvcmUnOiBmYVN0b3JlLFxyXG4gICAgICAnZmFzIGZhLXRoZXJtb21ldGVyLWhhbGYnOiBmYVRoZXJtb21ldGVySGFsZixcclxuICAgICAgJ2ZhcyBmYS10aHVtYnMtZG93bic6IGZhVGh1bWJzRG93bixcclxuICAgICAgJ2ZhcyBmYS10aHVtYnMtdXAnOiBmYVRodW1ic1VwLFxyXG4gICAgICAnZmFzIGZhLWJvbHQnOiBmYUJvbHQsXHJcbiAgICAgICdmYXMgZmEtdGlja2V0LWFsdCc6IGZhVGlja2V0QWx0LFxyXG4gICAgICAnZmFzIGZhLXNpdGVtYXAnOiBmYVNpdGVtYXAsXHJcbiAgICAgICdmYXMgZmEtYmF0aCc6IGZhQmF0aCxcclxuICAgICAgJ2ZhcyBmYS11bmRvJzogZmFVbmRvLFxyXG4gICAgICAnZmFzIGZhLXVwbG9hZCc6IGZhVXBsb2FkLFxyXG4gICAgICAnZmFzIGZhLXVzZXItcGx1cyc6IGZhVXNlclBsdXMsXHJcbiAgICAgICdmYXMgZmEtdXNlci1taW51cyc6IGZhVXNlck1pbnVzLFxyXG4gICAgICAnZmFzIGZhLXZpZGVvJzogZmFWaWRlbyxcclxuICAgICAgJ2ZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUnOiBmYUV4Y2xhbWF0aW9uQ2lyY2xlLFxyXG4gICAgICAnZmFzIGZhLXdpZmknOiBmYVdpZmksXHJcbiAgICAgICdmYXMgZmEtdGFibGV0JzogZmFUYWJsZXQsXHJcbiAgICAgICdmYXMgZmEtdGFibGV0LWFsdCc6IGZhVGFibGV0QWx0LFxyXG4gICAgICAnZmFzIGZhLWFtYnVsYW5jZSc6IGZhQW1idWxhbmNlXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBTaSBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgw7pzYWxvXHJcbiAgICBpZiAobG9jYWxJY29uTWFwW3RoaXMuaWNvbl0pIHtcclxuICAgICAgcmV0dXJuIGxvY2FsSWNvbk1hcFt0aGlzLmljb25dO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTaSBubyBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgaW50ZW50YSBjb24gZmluZEljb25EZWZpbml0aW9uXHJcbiAgICAvLyBGb3JtYXRvOiAnZmFzIGZhLXNwaW5uZXInIG8gJ3NwaW5uZXInIChhc3VtZSAnZmFzJyBwb3IgZGVmZWN0bylcclxuICAgIGxldCBpY29uTmFtZSA9IHRoaXMuaWNvbjtcclxuICAgIGlmICh0aGlzLmljb24uaW5jbHVkZXMoJ2ZhcyBmYS0nKSkge1xyXG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYXMgZmEtJywgJycpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmljb24uaW5jbHVkZXMoJ2ZhLScpKSB7XHJcbiAgICAgIGljb25OYW1lID0gdGhpcy5pY29uLnJlcGxhY2UoJ2ZhLScsICcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZm91bmRJY29uID0gZmluZEljb25EZWZpbml0aW9uKHsgcHJlZml4OiAnZmFzJywgaWNvbk5hbWU6IGljb25OYW1lIGFzIEljb25OYW1lIH0pO1xyXG4gICAgaWYgKGZvdW5kSWNvbikge1xyXG4gICAgICByZXR1cm4gZm91bmRJY29uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTaSBubyBzZSBlbmN1ZW50cmEsIHJldG9ybmEgdW5kZWZpbmVkXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhldmVudD86IEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBTaSBlc3TDoSBkaXNhYmxlZCBvIGxvYWRpbmcsIHByZXZlbmlyIGNvbXBsZXRhbWVudGUgZWwgZXZlbnRvXHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNvbG8gZW1pdGlyIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcclxuICAgIHRoaXMuY2xpY2tlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYnV0dG9uQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgICAgJ2J0bicsXHJcbiAgICAgIGBidG4tJHt0aGlzLnZhcmlhbnR9YCxcclxuICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcclxuICAgICAgdGhpcy5mdWxsV2lkdGggPyAndy0xMDAnIDogJycsXHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXHJcbiAgICAgIHRoaXMubG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnLFxyXG4gICAgICB0aGlzLm5vQW5pbWF0ZSA/ICduby1hbmltYXRlJyA6ICcnXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gRWwgYm90w7NuIGVzIGludGVyYWN0aXZvIHNvbG8gc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1NwaW5uZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dDb250ZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gTW9zdHJhciBjb250ZW5pZG8gKHRleHRvICsgaWNvbm8pIHNvbG8gc2kgbm8gZXN0w6EgbG9hZGluZ1xyXG4gICAgcmV0dXJuICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNpemVDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcclxuICAgICAgY2FzZSAnc20nOlxyXG4gICAgICAgIHJldHVybiAnYnRuLXNtJztcclxuICAgICAgY2FzZSAnbWQnOlxyXG4gICAgICAgIHJldHVybiAnYnRuLW1kJztcclxuICAgICAgY2FzZSAnbGcnOlxyXG4gICAgICAgIHJldHVybiAnYnRuLWxnJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7IC8vIFBvciBkZWZlY3RvIHVzYSBlbCB0YW1hw7FvIG1lZGlhbm9cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICNidXR0b25FbGVtZW50XHJcbiAgW2NsYXNzXT1cImJ1dHRvbkNsYXNzZXNcIlxyXG4gIFt0eXBlXT1cInR5cGVcIlxyXG4gIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmcgPyAnJyA6IG51bGxcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICBbY2xhc3MuaGFzLXRvb2x0aXBdPVwidG9vbHRpcFwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbj5cclxuICA8IS0tIENvbnRlbmlkbyBkZWwgYm90w7NuIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGVudFwiIFtjbGFzcy5sb2FkaW5nLWhpZGRlbl09XCJzaG93U3Bpbm5lclwiPlxyXG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiAocG9zaXRpb24gPT09ICdsZWZ0JyB8fCBpY29uT25seSlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIFtjbGFzcy5tZS0xXT1cIiFpY29uT25seVwiPjwvZmEtaWNvbj5cclxuICAgIDxzcGFuICNidXR0b25UZXh0ICpuZ0lmPVwiIWljb25Pbmx5XCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIHBvc2l0aW9uID09PSAncmlnaHQnICYmICFpY29uT25seVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgY2xhc3M9XCJtcy0xXCI+PC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwhLS0gU3Bpbm5lciBxdWUgc2Ugc3VwZXJwb25lIGN1YW5kbyBlc3TDoSBsb2FkaW5nIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93U3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1vdmVybGF5XCI+XHJcbiAgICA8ZmEtaWNvbiBcclxuICAgICAgW2ljb25dPVwic3Bpbm5lckljb25cIiBcclxuICAgICAgY2xhc3M9XCJzcGlubmVyLWljb25cIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5pbmddPVwibG9hZGluZ1wiPlxyXG4gICAgPC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwhLS0gVG9vbHRpcCBwZXJzb25hbGl6YWRvIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJ0b29sdGlwXCIgXHJcbiAgICAgICBjbGFzcz1cImN1c3RvbS10b29sdGlwXCIgXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC10b3BdPVwidG9vbHRpcFBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC1ib3R0b21dPVwidG9vbHRpcFBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC1sZWZ0XT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgIFtjbGFzcy50b29sdGlwLXJpZ2h0XT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICBbY2xhc3MubXVsdGlsaW5lXT1cImlzTG9uZ1Rvb2x0aXBcIlxyXG4gICAgICAgW2F0dHIuZGF0YS10b29sdGlwXT1cInRvb2x0aXBcIj5cclxuICAgIHt7IHRvb2x0aXAgfX1cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbiJdfQ==