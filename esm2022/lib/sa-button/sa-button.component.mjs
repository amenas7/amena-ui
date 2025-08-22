import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faEdit, faSave, faPlus, faMinus, faCheck, faTimes, faEye, faEyeSlash, faLock, faUnlock, faBell, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faInfo, faExclamationTriangle, faQuestion, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faPencil, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, 
// Nuevos iconos agregados
faThLarge, faUsers, faLink, faCopy, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartBar, faChartLine, faAppleAlt, faRobot, faGift, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBicycle, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalculator, faCalendarDay, faCamera, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faFile, faChartPie, faComments, faFlask, faMicroscope, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faCoffee, faComment, faCreditCard, faCrop, faCropAlt, faTruck, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faEquals, faEraser, faFileExcel, faFileDownload, faSignOutAlt, faSmile, faFrown, faMask, faMedal, faBoxOpen, faSeedling, faFilter, faFingerprint, faFire, faTrophy, faFish, faFlag, faForward, faVolumeUp, faExpandArrowsAlt, faGlobe, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faIceCream, faLightbulb, faKey, faLaptop, faLayerGroup, faListUl, faVolumeDown, faMapPin, faPills, faMobile, faMobileAlt, faMoneyBill, faMotorcycle, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faPaperclip, faDesktop, faPause, faPercent, faPiggyBank, faPlay, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faReceipt, faRedo, faRuler, faUtensils, faTshirt, faShoppingCart, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStarHalf, faStop, faStore, faThermometerHalf, faThumbsDown, faThumbsUp, faBolt, faTicketAlt, faSitemap, faBath, faUndo, faUpload, faUserPlus, faUserMinus, faVideo, faExclamationCircle, faWifi, faTable, faTablet, faTabletAlt, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
export class SaButtonComponent {
    cdr;
    isReady = false;
    constructor(cdr) {
        this.cdr = cdr;
    }
    // Propiedades con flexibilidad máxima: soportan attribute y property binding
    label = 'Button'; // Mantener como @Input simple para strings
    ngOnInit() {
        // No hacer nada aquí para evitar FOUC
    }
    ngAfterViewInit() {
        // Hacer visible después del primer ciclo de renderizado completo
        setTimeout(() => {
            this.isReady = true;
            this.cdr.detectChanges();
        }, 0);
    }
    get criticalInlineStyles() {
        // Solo devolver estilos si está listo
        if (!this.isReady) {
            return '';
        }
        const colors = this.getVariantColors();
        const size = this.getSizePadding();
        const fontSize = this.getFontSize();
        return `
      border: none !important;
      border-radius: 0.375rem !important;
      cursor: pointer !important;
      outline: none !important;
      position: relative !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      user-select: none !important;
      vertical-align: middle !important;
      white-space: nowrap !important;
      font-weight: 400 !important;
      line-height: 1 !important;
      padding: ${size} !important;
      font-size: ${fontSize} !important;
      background-color: ${colors.background} !important;
      border: ${colors.border} !important;
      color: ${colors.color} !important;
      font-family: 'Nunito Sans', sans-serif !important;
      transition: all 0.2s ease-in-out !important;
    `.replace(/\s+/g, ' ').trim();
    }
    getVariantColors() {
        if (this.disabled) {
            return {
                background: '#f8f9fa',
                border: '1px solid #858585',
                color: '#858585',
                hoverBackground: '#f8f9fa'
            };
        }
        switch (this.variant) {
            case 'primary':
                return {
                    background: '#36AD55',
                    border: '1px solid #36AD55',
                    color: '#ffffff',
                    hoverBackground: '#239A5C'
                };
            case 'secondary':
                return {
                    background: '#ffffff',
                    border: '1px solid #00ab4a',
                    color: '#00ab4a',
                    hoverBackground: '#effcf5'
                };
            case 'terciary':
                return {
                    background: '#ffffff',
                    border: '1px solid #c7cace',
                    color: '#2e3b60',
                    hoverBackground: '#f4f6f8'
                };
            case 'danger':
                return {
                    background: '#faeded',
                    border: '1px solid #DC3545',
                    color: '#DC3545',
                    hoverBackground: '#fcdcdc'
                };
            case 'danger-light':
                return {
                    background: '#ffffff',
                    border: '1px solid #DC3545',
                    color: '#DC3545',
                    hoverBackground: '#ffffff'
                };
            case 'warning':
                return {
                    background: '#FFF3CD',
                    border: '1px solid #FFC107',
                    color: '#856404',
                    hoverBackground: '#FFEAA7'
                };
            case 'info':
                return {
                    background: '#dae9fc4a',
                    border: '1px solid #007bff',
                    color: '#007bff',
                    hoverBackground: '#98c8ff4a'
                };
            case 'gray':
                return {
                    background: '#777777',
                    border: '1px solid #777777',
                    color: '#ffffff',
                    hoverBackground: '#5C5C5C'
                };
            case 'red':
                return {
                    background: '#DC3545',
                    border: '1px solid #DC3545',
                    color: '#ffffff',
                    hoverBackground: '#C82333'
                };
            case 'success':
                return {
                    background: '#D3F7E3',
                    border: '1px solid #00ab4a',
                    color: '#00ab4a',
                    hoverBackground: '#C0F0D0'
                };
            default:
                return {
                    background: '#36AD55',
                    border: '1px solid #36AD55',
                    color: '#ffffff',
                    hoverBackground: '#239A5C'
                };
        }
    }
    getSizePadding() {
        switch (this.size) {
            case 'sm': return '6px 8px';
            case 'lg': return '12px 24px';
            default: return '8px 12px';
        }
    }
    getFontSize() {
        switch (this.size) {
            case 'sm': return '12px';
            case 'lg': return '16px';
            default: return '13px';
        }
    }
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", tooltip: "tooltip", tooltipPosition: "tooltipPosition", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly", noAnimate: "noAnimate" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth", "style.visibility": "isReady ? \"visible\" : \"hidden\"", "style.opacity": "isReady ? \"1\" : \"0\"" } }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.style]=\"criticalInlineStyles\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;overflow:visible;width:auto;border:none;border-radius:.375rem;cursor:pointer;outline:none;position:relative;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;transition:all .2s ease-in-out;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-overlay fa-icon{display:flex!important;align-items:center!important;justify-content:center!important;width:auto!important;height:auto!important;line-height:1!important}.spinner-overlay fa-icon svg{display:block!important;margin:auto!important}.spinner-icon{animation:spin 1s linear infinite;opacity:1!important;display:flex!important;align-items:center!important;justify-content:center!important}.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}.spinner-icon[class*=fa-]{display:flex!important;align-items:center!important;justify-content:center!important;line-height:1!important}.spinner-icon[class*=fa-] svg{display:block!important;margin:0!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}fa-icon{display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;vertical-align:middle}fa-icon.spinner-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;vertical-align:middle!important}fa-icon svg{fill:currentColor;width:1em;height:1em;vertical-align:middle}.spinner-icon fa-icon svg{display:block!important;margin:0 auto!important}fa-icon.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}fa-icon.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}fa-icon.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}fa-icon.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}fa-icon.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}fa-icon.fa-spin{animation:fa-spin 2s infinite linear}fa-icon.fa-pulse{animation:fa-pulse 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes fa-pulse{0%{opacity:1}50%{opacity:.25}to{opacity:1}}:host fa-icon,:host ::ng-deep fa-icon{display:inline-block!important;font-style:normal!important;font-variant:normal!important;text-rendering:auto!important;line-height:1!important;vertical-align:middle!important}:host fa-icon svg,:host ::ng-deep fa-icon svg{fill:currentColor!important;width:1em!important;height:1em!important;vertical-align:middle!important}:host{display:inline-flex!important;align-items:center!important;justify-content:center!important}:host .spinner-icon,:host ::ng-deep .spinner-icon{animation:fa-spin 1s infinite linear!important}:host .spinner-icon.spinning,:host ::ng-deep .spinner-icon.spinning{animation:fa-spin 1s infinite linear!important}.me-1{margin-right:.25rem!important}.ms-1{margin-left:.25rem!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', encapsulation: ViewEncapsulation.ShadowDom, host: {
                        '[class.full-width]': 'fullWidth',
                        '[style.visibility]': 'isReady ? "visible" : "hidden"',
                        '[style.opacity]': 'isReady ? "1" : "0"'
                    }, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.style]=\"criticalInlineStyles\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;overflow:visible;width:auto;border:none;border-radius:.375rem;cursor:pointer;outline:none;position:relative;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;transition:all .2s ease-in-out;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-overlay fa-icon{display:flex!important;align-items:center!important;justify-content:center!important;width:auto!important;height:auto!important;line-height:1!important}.spinner-overlay fa-icon svg{display:block!important;margin:auto!important}.spinner-icon{animation:spin 1s linear infinite;opacity:1!important;display:flex!important;align-items:center!important;justify-content:center!important}.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}.spinner-icon[class*=fa-]{display:flex!important;align-items:center!important;justify-content:center!important;line-height:1!important}.spinner-icon[class*=fa-] svg{display:block!important;margin:0!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}fa-icon{display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;vertical-align:middle}fa-icon.spinner-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;vertical-align:middle!important}fa-icon svg{fill:currentColor;width:1em;height:1em;vertical-align:middle}.spinner-icon fa-icon svg{display:block!important;margin:0 auto!important}fa-icon.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}fa-icon.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}fa-icon.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}fa-icon.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}fa-icon.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}fa-icon.fa-spin{animation:fa-spin 2s infinite linear}fa-icon.fa-pulse{animation:fa-pulse 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes fa-pulse{0%{opacity:1}50%{opacity:.25}to{opacity:1}}:host fa-icon,:host ::ng-deep fa-icon{display:inline-block!important;font-style:normal!important;font-variant:normal!important;text-rendering:auto!important;line-height:1!important;vertical-align:middle!important}:host fa-icon svg,:host ::ng-deep fa-icon svg{fill:currentColor!important;width:1em!important;height:1em!important;vertical-align:middle!important}:host{display:inline-flex!important;align-items:center!important;justify-content:center!important}:host .spinner-icon,:host ::ng-deep .spinner-icon{animation:fa-spin 1s infinite linear!important}:host .spinner-icon.spinning,:host ::ng-deep .spinner-icon.spinning{animation:fa-spin 1s infinite linear!important}.me-1{margin-right:.25rem!important}.ms-1{margin-left:.25rem!important}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { label: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQzNKLE9BQU8sRUFBa0Isa0JBQWtCLEVBQVksTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxZQUFZLEVBQ1osa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04saUJB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QUFJLEVBQUUsQ0FBQztZQUNsQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLEtBQUssSUFBSTtnQkFDUCxPQUFPLFFBQVEsQ0FBQztZQUNsQjtnQkFDRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLG9DQUFvQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQzt3R0FoNUJVLGlCQUFpQjs0RkFBakIsaUJBQWlCLHFuQkNsTjlCLGdnREFzQ0E7OzRGRDRLYSxpQkFBaUI7a0JBWDdCLFNBQVM7K0JBQ0UsV0FBVyxpQkFHTixpQkFBaUIsQ0FBQyxTQUFTLFFBQ3BDO3dCQUNKLG9CQUFvQixFQUFFLFdBQVc7d0JBQ2pDLG9CQUFvQixFQUFFLGdDQUFnQzt3QkFDdEQsaUJBQWlCLEVBQUUscUJBQXFCO3FCQUN6QztzRkFPUSxLQUFLO3NCQUFiLEtBQUs7Z0JBMktGLE9BQU87c0JBRFYsS0FBSztnQkFTRixlQUFlO3NCQURsQixLQUFLO2dCQWlCRixPQUFPO3NCQURWLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixPQUFPO3NCQURWLEtBQUs7Z0JBU0YsU0FBUztzQkFEWixLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixTQUFTO3NCQURaLEtBQUs7Z0JBU3NDLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFFaEMsT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgZmluZEljb25EZWZpbml0aW9uLCBJY29uTmFtZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBcbiAgZmFTcGlubmVyLCBcbiAgZmFEb3dubG9hZCwgXG4gIGZhVHJhc2gsIFxuICBmYVNoYXJlLCBcbiAgZmFQcmludCwgXG4gIGZhSGVhcnQsXG4gIGZhSG9tZSxcbiAgZmFVc2VyLFxuICBmYUNvZyxcbiAgZmFTZWFyY2gsXG4gIGZhU3RhcixcbiAgZmFFZGl0LFxuICBmYVNhdmUsXG4gIGZhUGx1cyxcbiAgZmFNaW51cyxcbiAgZmFDaGVjayxcbiAgZmFUaW1lcyxcbiAgZmFFeWUsXG4gIGZhRXllU2xhc2gsXG4gIGZhTG9jayxcbiAgZmFVbmxvY2ssXG4gIGZhQmVsbCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFQaG9uZSxcbiAgZmFNYXBNYXJrZXJBbHQsXG4gIGZhQ2FsZW5kYXIsXG4gIGZhQ2xvY2ssXG4gIGZhSW5mbyxcbiAgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICBmYVF1ZXN0aW9uLFxuICBmYUNoZXZyb25Eb3duLFxuICBmYUNoZXZyb25VcCxcbiAgZmFDaGV2cm9uTGVmdCxcbiAgZmFDaGV2cm9uUmlnaHQsXG4gIGZhQXJyb3dMZWZ0LFxuICBmYUFycm93UmlnaHQsXG4gIGZhQXJyb3dVcCxcbiAgZmFBcnJvd0Rvd24sXG4gIGZhUGVuY2lsLFxuICBmYUFuZ2xlRG91YmxlTGVmdCxcbiAgZmFBbmdsZUxlZnQsXG4gIGZhQW5nbGVSaWdodCxcbiAgZmFBbmdsZURvdWJsZVJpZ2h0LFxuICAvLyBOdWV2b3MgaWNvbm9zIGFncmVnYWRvc1xuICBmYVRoTGFyZ2UsXG4gIGZhVXNlcnMsXG4gIGZhTGluayxcbiAgZmFDb3B5LFxuICBmYVVuaXZlcnNhbEFjY2VzcyxcbiAgZmFSdW5uaW5nLFxuICBmYUltYWdlLFxuICBmYUNhbGVuZGFyQWx0LFxuICBmYUNoYXJ0QmFyLFxuICBmYUNoYXJ0TGluZSxcbiAgZmFBcHBsZUFsdCxcbiAgZmFSb2JvdCxcbiAgZmFHaWZ0LFxuICBmYVNob3BwaW5nQmFnLFxuICBmYUJhbGFuY2VTY2FsZSxcbiAgZmFCYXR0ZXJ5VGhyZWVRdWFydGVycyxcbiAgZmFCYXR0ZXJ5SGFsZixcbiAgZmFCYXR0ZXJ5UXVhcnRlcixcbiAgZmFCYXR0ZXJ5RW1wdHksXG4gIGZhQmVsbFNsYXNoLFxuICBmYUJpY3ljbGUsXG4gIGZhQm9va21hcmssXG4gIGZhQm93bEZvb2QsXG4gIGZhQm94LFxuICBmYUJ1cyxcbiAgZmFCaXJ0aGRheUNha2UsXG4gIGZhQ2FsY3VsYXRvcixcbiAgZmFDYWxlbmRhckRheSxcbiAgZmFDYW1lcmEsXG4gIGZhQ2FyZXREb3duLFxuICBmYUNhcmV0TGVmdCxcbiAgZmFDYXJldFJpZ2h0LFxuICBmYUNhcmV0VXAsXG4gIGZhRmlsZSxcbiAgZmFDaGFydFBpZSxcbiAgZmFDb21tZW50cyxcbiAgZmFGbGFzayxcbiAgZmFNaWNyb3Njb3BlLFxuICBmYUNvb2tpZUJpdGUsXG4gIGZhU3ByYXlDYW4sXG4gIGZhU29hcCxcbiAgZmFFeHBhbmQsXG4gIGZhQ2xvdWQsXG4gIGZhQ29mZmVlLFxuICBmYUNvbW1lbnQsXG4gIGZhQ3JlZGl0Q2FyZCxcbiAgZmFDcm9wLFxuICBmYUNyb3BBbHQsXG4gIGZhVHJ1Y2ssXG4gIGZhRmlsZVVwbG9hZCxcbiAgZmFFbGxpcHNpc0gsXG4gIGZhUGxhbmUsXG4gIGZhR3JhZHVhdGlvbkNhcCxcbiAgZmFFcXVhbHMsXG4gIGZhRXJhc2VyLFxuICBmYUZpbGVFeGNlbCxcbiAgZmFGaWxlRG93bmxvYWQsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFTbWlsZSxcbiAgZmFGcm93bixcbiAgZmFNYXNrLFxuICBmYU1lZGFsLFxuICBmYUJveE9wZW4sXG4gIGZhU2VlZGxpbmcsXG4gIGZhRmlsdGVyLFxuICBmYUZpbmdlcnByaW50LFxuICBmYUZpcmUsXG4gIGZhVHJvcGh5LFxuICBmYUZpc2gsXG4gIGZhRmxhZyxcbiAgZmFGb3J3YXJkLFxuICBmYVZvbHVtZVVwLFxuICBmYUV4cGFuZEFycm93c0FsdCxcbiAgZmFHbG9iZSxcbiAgZmFWb2x1bWVNdXRlLFxuICBmYUJhcnMsXG4gIGZhQnJpZWZjYXNlLFxuICBmYU1pY3JvY2hpcCxcbiAgZmFIZWFydGJlYXQsXG4gIGZhSGlzdG9yeSxcbiAgZmFNaWNyb3Bob25lLFxuICBmYUljZUNyZWFtLFxuICBmYUxpZ2h0YnVsYixcbiAgZmFLZXksXG4gIGZhTGFwdG9wLFxuICBmYUxheWVyR3JvdXAsXG4gIGZhTGlzdFVsLFxuICBmYVZvbHVtZURvd24sXG4gIGZhTWFwUGluLFxuICBmYVBpbGxzLFxuICBmYU1vYmlsZSxcbiAgZmFNb2JpbGVBbHQsXG4gIGZhTW9uZXlCaWxsLFxuICBmYU1vdG9yY3ljbGUsXG4gIGZhU3RpY2t5Tm90ZSxcbiAgZmFFbGxpcHNpc1YsXG4gIGZhTHVuZ3MsXG4gIGZhQ2FzaFJlZ2lzdGVyLFxuICBmYVBhcGVyUGxhbmUsXG4gIGZhUGFwZXJjbGlwLFxuICBmYURlc2t0b3AsXG4gIGZhUGF1c2UsXG4gIGZhUGVyY2VudCxcbiAgZmFQaWdneUJhbmssXG4gIGZhUGxheSxcbiAgZmFNb3VzZVBvaW50ZXIsXG4gIGZhU3dpbW1pbmdQb29sLFxuICBmYUJhbixcbiAgZmFUYWcsXG4gIGZhU2hpZWxkLFxuICBmYVFyY29kZSxcbiAgZmFSZWNlaXB0LFxuICBmYVJlZG8sXG4gIGZhUnVsZXIsXG4gIGZhVXRlbnNpbHMsXG4gIGZhVHNoaXJ0LFxuICBmYVNob3BwaW5nQ2FydCxcbiAgZmFTbGlkZXJzSCxcbiAgZmFHbGFzc1doaXNrZXksXG4gIGZhU29ydCxcbiAgZmFUYWNob21ldGVyQWx0LFxuICBmYVNwb29uLFxuICBmYVN0YXJIYWxmLFxuICBmYVN0b3AsXG4gIGZhU3RvcmUsXG4gIGZhVGhlcm1vbWV0ZXJIYWxmLFxuICBmYVRodW1ic0Rvd24sXG4gIGZhVGh1bWJzVXAsXG4gIGZhQm9sdCxcbiAgZmFUaWNrZXRBbHQsXG4gIGZhU2l0ZW1hcCxcbiAgZmFCYXRoLFxuICBmYVVuZG8sXG4gIGZhVXBsb2FkLFxuICBmYVVzZXJQbHVzLFxuICBmYVVzZXJNaW51cyxcbiAgZmFWaWRlbyxcbiAgZmFFeGNsYW1hdGlvbkNpcmNsZSxcbiAgZmFXaWZpLFxuICBmYVRhYmxlLFxuICBmYVRhYmxldCxcbiAgZmFUYWJsZXRBbHQsXG4gIGZhQW1idWxhbmNlXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmltcG9ydCB7IFRvb2x0aXBQb3NpdGlvbiB9IGZyb20gJy4uL3R5cGVzL3Rvb2x0aXAudHlwZXMnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ2RhbmdlcicgfCAnZGFuZ2VyLWxpZ2h0JyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdncmF5JyB8ICdyZWQnIHwgJ3N1Y2Nlc3MnO1xuZXhwb3J0IHR5cGUgQnV0dG9uU2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcbmV4cG9ydCB0eXBlIEJ1dHRvblR5cGUgPSAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2EtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3NhLWJ1dHRvbi5jb21wb25lbnQuc2NzcycsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZnVsbC13aWR0aF0nOiAnZnVsbFdpZHRoJyxcbiAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ2lzUmVhZHkgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCInLFxuICAgICdbc3R5bGUub3BhY2l0eV0nOiAnaXNSZWFkeSA/IFwiMVwiIDogXCIwXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2FCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpc1JlYWR5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuICAvLyBQcm9waWVkYWRlcyBjb24gZmxleGliaWxpZGFkIG3DoXhpbWE6IHNvcG9ydGFuIGF0dHJpYnV0ZSB5IHByb3BlcnR5IGJpbmRpbmdcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdCdXR0b24nOyAvLyBNYW50ZW5lciBjb21vIEBJbnB1dCBzaW1wbGUgcGFyYSBzdHJpbmdzXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gTm8gaGFjZXIgbmFkYSBhcXXDrSBwYXJhIGV2aXRhciBGT1VDXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gSGFjZXIgdmlzaWJsZSBkZXNwdcOpcyBkZWwgcHJpbWVyIGNpY2xvIGRlIHJlbmRlcml6YWRvIGNvbXBsZXRvXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgZ2V0IGNyaXRpY2FsSW5saW5lU3R5bGVzKCk6IHN0cmluZyB7XG4gICAgLy8gU29sbyBkZXZvbHZlciBlc3RpbG9zIHNpIGVzdMOhIGxpc3RvXG4gICAgaWYgKCF0aGlzLmlzUmVhZHkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldFZhcmlhbnRDb2xvcnMoKTtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplUGFkZGluZygpO1xuICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5nZXRGb250U2l6ZSgpO1xuICAgIFxuICAgIHJldHVybiBgXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogJHtzaXplfSAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplfSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmFja2dyb3VuZH0gIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogJHtjb2xvcnMuYm9yZGVyfSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmNvbG9yfSAhaW1wb3J0YW50O1xuICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gICAgYC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYXJpYW50Q29sb3JzKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2Y4ZjlmYScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjODU4NTg1JyxcbiAgICAgICAgY29sb3I6ICcjODU4NTg1JyxcbiAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnI2Y4ZjlmYSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLnZhcmlhbnQpIHtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjMzZBRDU1JyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzM2QUQ1NScsXG4gICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICcjMjM5QTVDJ1xuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2Vjb25kYXJ5JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMwMGFiNGEnLFxuICAgICAgICAgIGNvbG9yOiAnIzAwYWI0YScsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnI2VmZmNmNSdcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3RlcmNpYXJ5JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjN2NhY2UnLFxuICAgICAgICAgIGNvbG9yOiAnIzJlM2I2MCcsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnI2Y0ZjZmOCdcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmYWVkZWQnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREMzNTQ1JyxcbiAgICAgICAgICBjb2xvcjogJyNEQzM1NDUnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyNmY2RjZGMnXG4gICAgICAgIH07XG4gICAgICBjYXNlICdkYW5nZXItbGlnaHQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0RDMzU0NScsXG4gICAgICAgICAgY29sb3I6ICcjREMzNTQ1JyxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICcjZmZmZmZmJ1xuICAgICAgICB9O1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNGRkYzQ0QnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRkZDMTA3JyxcbiAgICAgICAgICBjb2xvcjogJyM4NTY0MDQnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyNGRkVBQTcnXG4gICAgICAgIH07XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2RhZTlmYzRhJyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzAwN2JmZicsXG4gICAgICAgICAgY29sb3I6ICcjMDA3YmZmJyxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICcjOThjOGZmNGEnXG4gICAgICAgIH07XG4gICAgICBjYXNlICdncmF5JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzc3Nzc3NycsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM3Nzc3NzcnLFxuICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnIzVDNUM1QydcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNEQzM1NDUnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREMzNTQ1JyxcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyNDODIzMzMnXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI0QzRjdFMycsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMwMGFiNGEnLFxuICAgICAgICAgIGNvbG9yOiAnIzAwYWI0YScsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnI0MwRjBEMCdcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyMzNkFENTUnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzZBRDU1JyxcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyMyMzlBNUMnXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaXplUGFkZGluZygpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5zaXplKSB7XG4gICAgICBjYXNlICdzbSc6IHJldHVybiAnNnB4IDhweCc7XG4gICAgICBjYXNlICdsZyc6IHJldHVybiAnMTJweCAyNHB4JztcbiAgICAgIGRlZmF1bHQ6IHJldHVybiAnOHB4IDEycHgnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9udFNpemUoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSAnc20nOiByZXR1cm4gJzEycHgnO1xuICAgICAgY2FzZSAnbGcnOiByZXR1cm4gJzE2cHgnO1xuICAgICAgZGVmYXVsdDogcmV0dXJuICcxM3B4JztcbiAgICB9XG4gIH1cbiAgXG4gIC8vIFByb3BpZWRhZGVzIGNvbiBzZXR0ZXJzL2dldHRlcnMgcGFyYSBmbGV4aWJpbGlkYWQgbcOheGltYVxuICBwcml2YXRlIF92YXJpYW50OiBCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknO1xuICBwcml2YXRlIF9zaXplOiBCdXR0b25TaXplID0gJ21kJztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9mdWxsV2lkdGg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdHlwZTogQnV0dG9uVHlwZSA9ICdidXR0b24nO1xuICBwcml2YXRlIF9pY29uPzogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgcHJpdmF0ZSBfaWNvbk9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdG9vbHRpcD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdG9vbHRpcFBvc2l0aW9uOiBUb29sdGlwUG9zaXRpb24gPSAndG9wJztcbiAgcHJpdmF0ZSBfbm9BbmltYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXAodmFsdWU6IHN0cmluZyB8IGFueSkge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG9vbHRpcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXBQb3NpdGlvbih2YWx1ZTogVG9vbHRpcFBvc2l0aW9uIHwgYW55KSB7XG4gICAgdGhpcy5fdG9vbHRpcFBvc2l0aW9uID0gdmFsdWUgfHwgJ3RvcCc7XG4gIH1cbiAgZ2V0IHRvb2x0aXBQb3NpdGlvbigpOiBUb29sdGlwUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwUG9zaXRpb247XG4gIH1cblxuICAvLyBEZXRlcm1pbmFyIHNpIGVsIHRvb2x0aXAgbmVjZXNpdGEgbcO6bHRpcGxlcyBsw61uZWFzXG4gIGdldCBpc0xvbmdUb29sdGlwKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy50b29sdGlwKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQ29uc2lkZXJhciB0ZXh0byBsYXJnbyBzaSB0aWVuZSBtw6FzIGRlIDYwIGNhcmFjdGVyZXMgbyBjb250aWVuZSBzYWx0b3MgZGUgbMOtbmVhXG4gICAgLy8gNjAgY2FyYWN0ZXJlcyBlcyBhcHJveGltYWRhbWVudGUgbG8gcXVlIGNhYmUgZW4gMzUwcHggY29uIGZvbnQtc2l6ZSAxMnB4XG4gICAgcmV0dXJuIHRoaXMudG9vbHRpcC5sZW5ndGggPiA2MCB8fCB0aGlzLnRvb2x0aXAuaW5jbHVkZXMoJ1xcbicpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhcmlhbnQodmFsdWU6IEJ1dHRvblZhcmlhbnQgfCBhbnkpIHtcbiAgICB0aGlzLl92YXJpYW50ID0gdmFsdWUgfHwgJ3ByaW1hcnknO1xuICB9XG4gIGdldCB2YXJpYW50KCk6IEJ1dHRvblZhcmlhbnQge1xuICAgIHJldHVybiB0aGlzLl92YXJpYW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6IEJ1dHRvblNpemUgfCBhbnkpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgfHwgJ21kJztcbiAgfVxuICBnZXQgc2l6ZSgpOiBCdXR0b25TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9mdWxsV2lkdGggPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBmdWxsV2lkdGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBCdXR0b25UeXBlIHwgYW55KSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8ICdidXR0b24nO1xuICB9XG4gIGdldCB0eXBlKCk6IEJ1dHRvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZyB8IGFueSkge1xuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiAnbGVmdCcgfCAncmlnaHQnIHwgYW55KSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZSB8fCAnbGVmdCc7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6ICdsZWZ0JyB8ICdyaWdodCcge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uT25seSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2ljb25Pbmx5ID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgaWNvbk9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25Pbmx5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5vQW5pbWF0ZSh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX25vQW5pbWF0ZSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IG5vQW5pbWF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm9BbmltYXRlO1xuICB9XG5cblxuICBAVmlld0NoaWxkKCdidXR0b25UZXh0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGJ1dHRvblRleHQhOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8vIEljb25vIGRlIHNwaW5uZXIgcGFyYSBlbCBlc3RhZG8gbG9hZGluZ1xuICByZWFkb25seSBzcGlubmVySWNvbiA9IGZhU3Bpbm5lcjtcblxuICAvLyBNw6l0b2RvIHBhcmEgb2J0ZW5lciBlbCBpY29ubyBiYXNhZG8gZW4gZWwgc3RyaW5nXG4gIGdldCBpY29uRGVmaW5pdGlvbigpOiBJY29uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLmljb24pIHJldHVybiB1bmRlZmluZWQ7XG4gICAgXG4gICAgLy8gUHJpbWVybyBpbnRlbnRhIGNvbiBlbCBtYXBlbyBsb2NhbCAobcOhcyByw6FwaWRvKVxuICAgIGNvbnN0IGxvY2FsSWNvbk1hcDogeyBba2V5OiBzdHJpbmddOiBJY29uRGVmaW5pdGlvbiB9ID0ge1xuICAgICAgLy8gSWNvbm9zIGLDoXNpY29zIChzb2xpZCBwb3IgZGVmZWN0bylcbiAgICAgICdzcGlubmVyJzogZmFTcGlubmVyLFxuICAgICAgJ2Rvd25sb2FkJzogZmFEb3dubG9hZCxcbiAgICAgICd0cmFzaCc6IGZhVHJhc2gsXG4gICAgICAnc2hhcmUnOiBmYVNoYXJlLFxuICAgICAgJ3ByaW50JzogZmFQcmludCxcbiAgICAgICdoZWFydCc6IGZhSGVhcnQsXG4gICAgICAnaG9tZSc6IGZhSG9tZSxcbiAgICAgICd1c2VyJzogZmFVc2VyLFxuICAgICAgJ2NvZyc6IGZhQ29nLFxuICAgICAgJ3NlYXJjaCc6IGZhU2VhcmNoLFxuICAgICAgJ3N0YXInOiBmYVN0YXIsXG4gICAgICAnZWRpdCc6IGZhRWRpdCxcbiAgICAgICdzYXZlJzogZmFTYXZlLFxuICAgICAgJ3BsdXMnOiBmYVBsdXMsXG4gICAgICAnbWludXMnOiBmYU1pbnVzLFxuICAgICAgJ2NoZWNrJzogZmFDaGVjayxcbiAgICAgICd0aW1lcyc6IGZhVGltZXMsXG4gICAgICAnZXllJzogZmFFeWUsXG4gICAgICAnZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcbiAgICAgICdsb2NrJzogZmFMb2NrLFxuICAgICAgJ3VubG9jayc6IGZhVW5sb2NrLFxuICAgICAgJ2JlbGwnOiBmYUJlbGwsXG4gICAgICAnZW52ZWxvcGUnOiBmYUVudmVsb3BlLFxuICAgICAgJ3Bob25lJzogZmFQaG9uZSxcbiAgICAgICdtYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ2NhbGVuZGFyJzogZmFDYWxlbmRhcixcbiAgICAgICdjbG9jayc6IGZhQ2xvY2ssXG4gICAgICAnaW5mbyc6IGZhSW5mbyxcbiAgICAgICdleGNsYW1hdGlvbi10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICdxdWVzdGlvbic6IGZhUXVlc3Rpb24sXG4gICAgICAnY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcbiAgICAgICdjaGV2cm9uLXVwJzogZmFDaGV2cm9uVXAsXG4gICAgICAnY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcbiAgICAgICdjaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXG4gICAgICAnYXJyb3ctbGVmdCc6IGZhQXJyb3dMZWZ0LFxuICAgICAgJ2Fycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxuICAgICAgJ2Fycm93LXVwJzogZmFBcnJvd1VwLFxuICAgICAgJ2Fycm93LWRvd24nOiBmYUFycm93RG93bixcbiAgICAgICdwZW5jaWwnOiBmYVBlbmNpbCxcbiAgICAgICdhbmdsZS1kb3VibGUtbGVmdCc6IGZhQW5nbGVEb3VibGVMZWZ0LFxuICAgICAgJ2FuZ2xlLWxlZnQnOiBmYUFuZ2xlTGVmdCxcbiAgICAgICdhbmdsZS1yaWdodCc6IGZhQW5nbGVSaWdodCxcbiAgICAgICdhbmdsZS1kb3VibGUtcmlnaHQnOiBmYUFuZ2xlRG91YmxlUmlnaHQsXG4gICAgICAndGFibGUnOiBmYVRhYmxlLFxuICAgICAgJ3RoLWxhcmdlJzogZmFUaExhcmdlLFxuICAgICAgJ3VzZXJzJzogZmFVc2VycyxcbiAgICAgICd1bml2ZXJzYWwtYWNjZXNzJzogZmFVbml2ZXJzYWxBY2Nlc3MsXG4gICAgICAncnVubmluZyc6IGZhUnVubmluZyxcbiAgICAgICdpbWFnZSc6IGZhSW1hZ2UsXG4gICAgICAnY2FsZW5kYXItYWx0JzogZmFDYWxlbmRhckFsdCxcbiAgICAgICdjaGFydC1saW5lJzogZmFDaGFydExpbmUsXG4gICAgICAnYXBwbGUtYWx0JzogZmFBcHBsZUFsdCxcbiAgICAgICdyb2JvdCc6IGZhUm9ib3QsXG4gICAgICAnc2hvcHBpbmctYmFnJzogZmFTaG9wcGluZ0JhZyxcbiAgICAgICdiYWxhbmNlLXNjYWxlJzogZmFCYWxhbmNlU2NhbGUsXG4gICAgICAnYmF0dGVyeS10aHJlZS1xdWFydGVycyc6IGZhQmF0dGVyeVRocmVlUXVhcnRlcnMsXG4gICAgICAnYmF0dGVyeS1xdWFydGVyJzogZmFCYXR0ZXJ5UXVhcnRlcixcbiAgICAgICdiYXR0ZXJ5LWVtcHR5JzogZmFCYXR0ZXJ5RW1wdHksXG4gICAgICAnYmVsbC1zbGFzaCc6IGZhQmVsbFNsYXNoLFxuICAgICAgJ2Jvb2ttYXJrJzogZmFCb29rbWFyayxcbiAgICAgICdib3dsLWZvb2QnOiBmYUJvd2xGb29kLFxuICAgICAgJ2JveCc6IGZhQm94LFxuICAgICAgJ2J1cyc6IGZhQnVzLFxuICAgICAgJ2JpcnRoZGF5LWNha2UnOiBmYUJpcnRoZGF5Q2FrZSxcbiAgICAgICdjYWxlbmRhci1kYXknOiBmYUNhbGVuZGFyRGF5LFxuICAgICAgJ2ZpbGUnOiBmYUZpbGUsXG4gICAgICAnZmxhc2snOiBmYUZsYXNrLFxuICAgICAgJ2Nvb2tpZS1iaXRlJzogZmFDb29raWVCaXRlLFxuICAgICAgJ3NwcmF5LWNhbic6IGZhU3ByYXlDYW4sXG4gICAgICAnc29hcCc6IGZhU29hcCxcbiAgICAgICdleHBhbmQnOiBmYUV4cGFuZCxcbiAgICAgICdjbG91ZCc6IGZhQ2xvdWQsXG4gICAgICAnY29tbWVudCc6IGZhQ29tbWVudCxcbiAgICAgICdmaWxlLXVwbG9hZCc6IGZhRmlsZVVwbG9hZCxcbiAgICAgICdlbGxpcHNpcy1oJzogZmFFbGxpcHNpc0gsXG4gICAgICAncGxhbmUnOiBmYVBsYW5lLFxuICAgICAgJ2dyYWR1YXRpb24tY2FwJzogZmFHcmFkdWF0aW9uQ2FwLFxuICAgICAgJ2ZpbGUtZXhjZWwnOiBmYUZpbGVFeGNlbCxcbiAgICAgICdzaWduLW91dC1hbHQnOiBmYVNpZ25PdXRBbHQsXG4gICAgICAnc21pbGUnOiBmYVNtaWxlLFxuICAgICAgJ2Zyb3duJzogZmFGcm93bixcbiAgICAgICdtYXNrJzogZmFNYXNrLFxuICAgICAgJ2JveC1vcGVuJzogZmFCb3hPcGVuLFxuICAgICAgJ3NlZWRsaW5nJzogZmFTZWVkbGluZyxcbiAgICAgICd2b2x1bWUtdXAnOiBmYVZvbHVtZVVwLFxuICAgICAgJ2V4cGFuZC1hcnJvd3MtYWx0JzogZmFFeHBhbmRBcnJvd3NBbHQsXG4gICAgICAndm9sdW1lLW11dGUnOiBmYVZvbHVtZU11dGUsXG4gICAgICAnYmFycyc6IGZhQmFycyxcbiAgICAgICdicmllZmNhc2UnOiBmYUJyaWVmY2FzZSxcbiAgICAgICdtaWNyb2NoaXAnOiBmYU1pY3JvY2hpcCxcbiAgICAgICdoZWFydGJlYXQnOiBmYUhlYXJ0YmVhdCxcbiAgICAgICdoaXN0b3J5JzogZmFIaXN0b3J5LFxuICAgICAgJ21pY3JvcGhvbmUnOiBmYU1pY3JvcGhvbmUsXG4gICAgICAnbGlnaHRidWxiJzogZmFMaWdodGJ1bGIsXG4gICAgICAna2V5JzogZmFLZXksXG4gICAgICAnbGF5ZXItZ3JvdXAnOiBmYUxheWVyR3JvdXAsXG4gICAgICAnbGlzdC11bCc6IGZhTGlzdFVsLFxuICAgICAgJ3ZvbHVtZS1kb3duJzogZmFWb2x1bWVEb3duLFxuICAgICAgJ3BpbGxzJzogZmFQaWxscyxcbiAgICAgICdtb2JpbGUnOiBmYU1vYmlsZSxcbiAgICAgICdtb2JpbGUtYWx0JzogZmFNb2JpbGVBbHQsXG4gICAgICAnbW9uZXktYmlsbCc6IGZhTW9uZXlCaWxsLFxuICAgICAgJ3N0aWNreS1ub3RlJzogZmFTdGlja3lOb3RlLFxuICAgICAgJ2VsbGlwc2lzLXYnOiBmYUVsbGlwc2lzVixcbiAgICAgICdsdW5ncyc6IGZhTHVuZ3MsXG4gICAgICAnY2FzaC1yZWdpc3Rlcic6IGZhQ2FzaFJlZ2lzdGVyLFxuICAgICAgJ3BhcGVyLXBsYW5lJzogZmFQYXBlclBsYW5lLFxuICAgICAgJ2Rlc2t0b3AnOiBmYURlc2t0b3AsXG4gICAgICAnY2hhcnQtcGllJzogZmFDaGFydFBpZSxcbiAgICAgICdtb3VzZS1wb2ludGVyJzogZmFNb3VzZVBvaW50ZXIsXG4gICAgICAnc3dpbW1pbmctcG9vbCc6IGZhU3dpbW1pbmdQb29sLFxuICAgICAgJ2Jhbic6IGZhQmFuLFxuICAgICAgJ3RhZyc6IGZhVGFnLFxuICAgICAgJ3NoaWVsZCc6IGZhU2hpZWxkLFxuICAgICAgJ3FyY29kZSc6IGZhUXJjb2RlLFxuICAgICAgJ3JlZG8nOiBmYVJlZG8sXG4gICAgICAncnVsZXInOiBmYVJ1bGVyLFxuICAgICAgJ3V0ZW5zaWxzJzogZmFVdGVuc2lscyxcbiAgICAgICd0c2hpcnQnOiBmYVRzaGlydCxcbiAgICAgICdzbGlkZXJzLWgnOiBmYVNsaWRlcnNILFxuICAgICAgJ2dsYXNzLXdoaXNrZXknOiBmYUdsYXNzV2hpc2tleSxcbiAgICAgICdzb3J0JzogZmFTb3J0LFxuICAgICAgJ3RhY2hvbWV0ZXItYWx0JzogZmFUYWNob21ldGVyQWx0LFxuICAgICAgJ3Nwb29uJzogZmFTcG9vbixcbiAgICAgICdzdG9yZSc6IGZhU3RvcmUsXG4gICAgICAndGFibGV0JzogZmFUYWJsZXQsXG4gICAgICAndGFibGV0LWFsdCc6IGZhVGFibGV0QWx0LFxuICAgICAgJ3RoZXJtb21ldGVyLWhhbGYnOiBmYVRoZXJtb21ldGVySGFsZixcbiAgICAgICdib2x0JzogZmFCb2x0LFxuICAgICAgJ3RpY2tldC1hbHQnOiBmYVRpY2tldEFsdCxcbiAgICAgICdzaXRlbWFwJzogZmFTaXRlbWFwLFxuICAgICAgJ2JhdGgnOiBmYUJhdGgsXG4gICAgICBcbiAgICAgIC8vIE51ZXZvcyBpY29ub3MgYWdyZWdhZG9zXG4gICAgICAnZ3JpZCc6IGZhVGhMYXJnZSxcbiAgICAgICdncm91cCc6IGZhVXNlcnMsXG4gICAgICAnbGluayc6IGZhTGluayxcbiAgICAgICdjb3B5JzogZmFDb3B5LFxuICAgICAgJ2FjY2Vzc2liaWxpdHktYWx0JzogZmFVbml2ZXJzYWxBY2Nlc3MsXG4gICAgICAnYWNjZXNzaWJpbGl0eSc6IGZhVW5pdmVyc2FsQWNjZXNzLFxuICAgICAgJ2FjdGl2aXR5JzogZmFSdW5uaW5nLFxuICAgICAgJ2FkZC1kb2N1bWVudCc6IGZhRmlsZSxcbiAgICAgICdhZGQtaW1hZ2UnOiBmYUltYWdlLFxuXG4gICAgICAnYW5hbHl0aWNzJzogZmFDaGFydEJhcixcbiAgICAgICdhbmFseXRpY3MtcmFpc2UnOiBmYUNoYXJ0TGluZSxcbiAgICAgICdhcHBsZSc6IGZhQXBwbGVBbHQsXG4gICAgICAnYXNzaXN0YW50JzogZmFSb2JvdCxcbiAgICAgICdiYWctb2YtZmxvdXInOiBmYUdpZnQsXG4gICAgICAnYmFnLXdpdGgtZ2lmdCc6IGZhR2lmdCxcbiAgICAgICdiYWdzJzogZmFTaG9wcGluZ0JhZyxcbiAgICAgICdiYWxhbmNlJzogZmFCYWxhbmNlU2NhbGUsXG4gICAgICAnYmF0dGVyeS1hbHQnOiBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxuICAgICAgJ2JhdHRlcnktY2hhcmdpbmlnJzogZmFCYXR0ZXJ5SGFsZixcbiAgICAgICdiYXR0ZXJ5LWZ1bGwnOiBmYUJhdHRlcnlIYWxmLFxuICAgICAgJ2JhdHRlcnktaGFsZic6IGZhQmF0dGVyeUhhbGYsXG4gICAgICAnYmF0dGVyeS1sb3cnOiBmYUJhdHRlcnlRdWFydGVyLFxuICAgICAgJ2JlbGwtbmV3LW1lc3NhZ2UnOiBmYUJlbGwsXG4gICAgICAnYmVsbC1vZmYnOiBmYUJlbGxTbGFzaCxcbiAgICAgICdiaWN5Y2xlJzogZmFCaWN5Y2xlLFxuICAgICAgJ2Jvb2ttYXJrLXNpbXBsZSc6IGZhQm9va21hcmssXG4gICAgICAnYm93bCc6IGZhQm93bEZvb2QsXG5cbiAgICAgICdidXMtZnJvbnQnOiBmYUJ1cyxcbiAgICAgICdidXR0ZXInOiBmYUJpcnRoZGF5Q2FrZSxcbiAgICAgICdjYWtlJzogZmFCaXJ0aGRheUNha2UsXG4gICAgICAnY2FsY3VsYXRvcic6IGZhQ2FsY3VsYXRvcixcbiAgICAgICdjYWxlbmRhci1oaXN0b3J5LWFsdCc6IGZhQ2FsZW5kYXJEYXksXG4gICAgICAnY2FsZW5kYXItaGlzdG9yeSc6IGZhQ2FsZW5kYXJEYXksXG5cbiAgICAgICdjYW1lcmEnOiBmYUNhbWVyYSxcblxuICAgICAgJ2NhbmR5JzogZmFDb29raWVCaXRlLFxuICAgICAgJ2NhcmV0LWRvd24nOiBmYUNhcmV0RG93bixcbiAgICAgICdjYXJldC1sZWZ0JzogZmFDYXJldExlZnQsXG4gICAgICAnY2FyZXQtcmlnaHQnOiBmYUNhcmV0UmlnaHQsXG4gICAgICAnY2FyZXQtdXAnOiBmYUNhcmV0VXAsXG4gICAgICAnY2VsbHMtZG9jdW1lbnQnOiBmYUZpbGUsXG4gICAgICAnY2hhcnQtYmFyJzogZmFDaGFydEJhcixcbiAgICAgICdjaGFydC1waWUtc2xpY2UnOiBmYUNoYXJ0UGllLFxuICAgICAgJ2NoYXQtY2lyY2xlLXRleHQnOiBmYUNvbW1lbnRzLFxuICAgICAgJ2NoZW1pY2FsLWV4cGVyaW1lbnQnOiBmYUZsYXNrLFxuICAgICAgJ2NoZW1pY2FsLXRlc3QnOiBmYU1pY3Jvc2NvcGUsXG4gICAgICAnY2hvY29sYXRlLWJhcic6IGZhQ29va2llQml0ZSxcbiAgICAgICdjbGVhbmVyJzogZmFTcHJheUNhbixcbiAgICAgICdjbGVhbmVyLWRpc3BlbnNlcic6IGZhU29hcCxcbiAgICAgICdjbG9zZS1mdWxsLXNjcmVlbic6IGZhRXhwYW5kLFxuICAgICAgJ2Nsb3VkLW9mZmxpbmUnOiBmYUNsb3VkLFxuICAgICAgJ2Nsb3VkLXByb2JsZW0nOiBmYUNsb3VkLFxuICAgICAgJ2NvZmZlZSc6IGZhQ29mZmVlLFxuICAgICAgJ2NvbW1lbnRzJzogZmFDb21tZW50LFxuICAgICAgJ2Nvb2tpZSc6IGZhQ29va2llQml0ZSxcbiAgICAgICdjcmVkaXQtY2FyZCc6IGZhQ3JlZGl0Q2FyZCxcbiAgICAgICdjcm9wLWFsdCc6IGZhQ3JvcEFsdCxcbiAgICAgICdjcm9wJzogZmFDcm9wLFxuICAgICAgJ2Nyb3AtaGVhbHRoJzogZmFDcm9wLFxuICAgICAgJ2RlbGl2ZXJ5LWd1eSc6IGZhVHJ1Y2ssXG4gICAgICAnZGV0ZXJnZW50JzogZmFTb2FwLFxuICAgICAgJ2RvY3VtZW50LXVwbG9hZCc6IGZhRmlsZVVwbG9hZCxcbiAgICAgICdkb3RzLXRocmVlJzogZmFFbGxpcHNpc0gsXG4gICAgICAnZG93bmxvYWQtYWx0JzogZmFEb3dubG9hZCxcbiAgICAgICdkcm9uJzogZmFQbGFuZSxcbiAgICAgICdlZHVjYXRpb24nOiBmYUdyYWR1YXRpb25DYXAsXG4gICAgICAnZW52ZWxvcGUtbmV3LW1lc3NhZ2UnOiBmYUVudmVsb3BlLFxuICAgICAgJ2VxdWFscyc6IGZhRXF1YWxzLFxuICAgICAgJ2VyYXNlcic6IGZhRXJhc2VyLFxuICAgICAgJ2V4Y2VsJzogZmFGaWxlRXhjZWwsXG4gICAgICAnZXhjZWwtZG93bmxvYWQnOiBmYUZpbGVEb3dubG9hZCxcbiAgICAgICdleGl0JzogZmFTaWduT3V0QWx0LFxuICAgICAgJ2ZhY2Utc2F0aXNmaWVkJzogZmFTbWlsZSxcbiAgICAgICdmYWNlLWRpc3NhdGlzZmllZCc6IGZhRnJvd24sXG4gICAgICAnZmFjZS1tYXNrJzogZmFNYXNrLFxuICAgICAgJ2ZhY2Vib29rJzogZmFTaGFyZSxcbiAgICAgICdmYXN0LXRydWNrJzogZmFUcnVjayxcblxuICAgICAgJ2Zhdm9yaXRlLW1lZGFsJzogZmFNZWRhbCxcbiAgICAgICdmYXZvcml0ZS1wYWNrYWdlJzogZmFCb3hPcGVuLFxuICAgICAgJ2ZlZWRlcic6IGZhU2VlZGxpbmcsXG4gICAgICAnZmlsZS1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxuICAgICAgJ2ZpbHRlcic6IGZhRmlsdGVyLFxuICAgICAgJ2ZpbmdlcnByaW50JzogZmFGaW5nZXJwcmludCxcbiAgICAgICdmaXJlJzogZmFGaXJlLFxuICAgICAgJ2ZpcmV3b3Jrcyc6IGZhRmlyZSxcbiAgICAgICdmaXJzdC1wbGFjZSc6IGZhVHJvcGh5LFxuICAgICAgJ2Zpc2gnOiBmYUZpc2gsXG4gICAgICAnZmxhZyc6IGZhRmxhZyxcbiAgICAgICdmb3J3YXJkJzogZmFGb3J3YXJkLFxuICAgICAgJ2Z1bGwtdm9sdW1lJzogZmFWb2x1bWVVcCxcbiAgICAgICdmdWxsLXNjcmVlbic6IGZhRXhwYW5kQXJyb3dzQWx0LFxuICAgICAgJ2dlYXInOiBmYUNvZyxcbiAgICAgICdnaWZ0JzogZmFHaWZ0LFxuICAgICAgJ2dpZnQtZGVsaXZlcnknOiBmYUdpZnQsXG4gICAgICAnZ2xvYmUnOiBmYUdsb2JlLFxuICAgICAgJ2dyb3VwLWJpZ2dlcic6IGZhVXNlcnMsXG4gICAgICAnaGFsZi12b2x1bWUnOiBmYVZvbHVtZU11dGUsXG4gICAgICAnaGFtYnVyZ2VyJzogZmFCYXJzLFxuICAgICAgJ2hhbmRiYWcnOiBmYUJyaWVmY2FzZSxcbiAgICAgICdoYXBweS1jaGlwJzogZmFNaWNyb2NoaXAsXG4gICAgICAnaGVhbHRoeSc6IGZhSGVhcnRiZWF0LFxuICAgICAgJ2hpc3RvcnktdGltZSc6IGZhSGlzdG9yeSxcbiAgICAgICdoeWRyb3Bob25lJzogZmFNaWNyb3Bob25lLFxuICAgICAgJ2ljZS1jcmVhbSc6IGZhSWNlQ3JlYW0sXG4gICAgICAnaWRlYSc6IGZhTGlnaHRidWxiLFxuXG4gICAgICAnaW5zdGFncmFtJzogZmFTaGFyZSxcbiAgICAgICdpbnRlbGxpZ2VuY2UtYS1pJzogZmFSb2JvdCxcbiAgICAgICdsYXB0b3AnOiBmYUxhcHRvcCxcbiAgICAgICdsYXllcic6IGZhTGF5ZXJHcm91cCxcbiAgICAgICdsaXN0LWJ1bGxldGVkJzogZmFMaXN0VWwsXG4gICAgICAnbG93LXZvbHVtZSc6IGZhVm9sdW1lRG93bixcbiAgICAgICdtYWNoaW5lLWxlYXJuaW5nLW1vZGVsJzogZmFSb2JvdCxcbiAgICAgICdtYWduaWZ5aW5nLWdsYXNzJzogZmFTZWFyY2gsXG4gICAgICAnbWFwJzogZmFNYXBQaW4sXG4gICAgICAnbWFwLXBpbic6IGZhTWFwUGluLFxuICAgICAgJ21lZGFsJzogZmFNZWRhbCxcbiAgICAgICdtZWRpY2luZS1hbGVydCc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICdtZWRpY2luZSc6IGZhUGlsbHMsXG4gICAgICAnbWljcm8tY2hpcC1hbHQnOiBmYU1pY3JvY2hpcCxcbiAgICAgICdtaWNyby1jaGlwJzogZmFNaWNyb2NoaXAsXG4gICAgICAnbWljcm9zY29wZSc6IGZhTWljcm9zY29wZSxcbiAgICAgICdtb2JpbGUtaG9yaXpvbnRhbCc6IGZhTW9iaWxlLFxuICAgICAgJ21vYmlsZS12ZXJ0aWNhbCc6IGZhTW9iaWxlQWx0LFxuICAgICAgJ21vbmV5JzogZmFNb25leUJpbGwsXG4gICAgICAnbW90b3JjeWNsZSc6IGZhTW90b3JjeWNsZSxcbiAgICAgICdub3RlLXBlbmNpbCc6IGZhU3RpY2t5Tm90ZSxcbiAgICAgICdvcGVubG9jayc6IGZhVW5sb2NrLFxuICAgICAgJ292ZXJmbG93LW1lbnUtdmVydGljYWwnOiBmYUVsbGlwc2lzVixcbiAgICAgICdveHlnZW4nOiBmYUx1bmdzLFxuICAgICAgJ3Atby1zJzogZmFDYXNoUmVnaXN0ZXIsXG5cbiAgICAgICdwYXBlci1wbGFuZS1yaWdodCc6IGZhUGFwZXJQbGFuZSxcbiAgICAgICdwYXBlcmNsaXAnOiBmYVBhcGVyY2xpcCxcbiAgICAgICdwYXVzZSc6IGZhUGF1c2UsXG4gICAgICAncGVyY2VudCc6IGZhUGVyY2VudCxcbiAgICAgICdwaWdneS1iYW5rJzogZmFQaWdneUJhbmssXG4gICAgICAncGlsbCc6IGZhUGlsbHMsXG4gICAgICAncGxhY2UtbG9jYXRpb24nOiBmYU1hcE1hcmtlckFsdCxcbiAgICAgICdwbGF5JzogZmFQbGF5LFxuICAgICAgJ3BvaW50ZXInOiBmYU1vdXNlUG9pbnRlcixcbiAgICAgICdwb2ludGVyLWxvY2snOiBmYU1vdXNlUG9pbnRlcixcbiAgICAgICdwb29sLWxhZGRlcic6IGZhU3dpbW1pbmdQb29sLFxuICAgICAgJ3Bvc3QtaGlzdG9yeSc6IGZhSGlzdG9yeSxcbiAgICAgICdwb3N0aXQnOiBmYVN0aWNreU5vdGUsXG4gICAgICAncHJvaGliaXQnOiBmYUJhbixcbiAgICAgICdwcm9tb3Rpb24nOiBmYVRhZyxcbiAgICAgICdwcm90ZWN0aW9uLWNoZWNrZWQnOiBmYVNoaWVsZCxcbiAgICAgICdxcic6IGZhUXJjb2RlLFxuICAgICAgJ3JlY2VpcHQnOiBmYVJlY2VpcHQsXG4gICAgICAncmVjZWlwdC1jaGVja2VkJzogZmFSZWNlaXB0LFxuXG4gICAgICAncmVuZXcnOiBmYVJlZG8sXG4gICAgICAncmVwZWF0JzogZmFSZWRvLFxuICAgICAgJ3JlcGVhdC1wdXJjaGFzZSc6IGZhUmVkbyxcbiAgICAgICdydWMnOiBmYVVzZXIsXG4gICAgICAncnVsZXItYWx0JzogZmFSdWxlcixcbiAgICAgICdzYXVjZSc6IGZhVXRlbnNpbHMsXG4gICAgICAnc2Nhbic6IGZhUXJjb2RlLFxuICAgICAgJ3NlYXJjaC1sYXllcnMnOiBmYVNlYXJjaCxcbiAgICAgICdzZW5zb3InOiBmYU1pY3JvY2hpcCxcbiAgICAgICdzZXR0aW5ncy1hbHQnOiBmYUNvZyxcbiAgICAgICdzaGFyZS1uZXR3b3JrJzogZmFTaGFyZSxcbiAgICAgICdzaGlydCc6IGZhVHNoaXJ0LFxuICAgICAgJ3Nob3BwaW5nLWNhcnQnOiBmYVNob3BwaW5nQ2FydCxcbiAgICAgICdzaHJpbXAnOiBmYUZpc2gsXG4gICAgICAnc2lnbi1vdXQnOiBmYVNpZ25PdXRBbHQsXG4gICAgICAnc2xpZGVycy1ob3Jpem9udGFsJzogZmFTbGlkZXJzSCxcbiAgICAgICdzb2RhJzogZmFHbGFzc1doaXNrZXksXG4gICAgICAnc29ydC1ieSc6IGZhU29ydCxcbiAgICAgICdzb3VwLWRpc3BlbnNlcic6IGZhVXRlbnNpbHMsXG4gICAgICAnc291cC1ub29kbGVzJzogZmFVdGVuc2lscyxcbiAgICAgICdzcGVlZG9tZXRlcic6IGZhVGFjaG9tZXRlckFsdCxcbiAgICAgICdzcG9uZ2UnOiBmYVNwb29uLFxuICAgICAgJ3N0YXItaGFsZic6IGZhU3RhckhhbGYsXG4gICAgICAnc3RvcCc6IGZhU3RvcCxcbiAgICAgICdzdG9yZWZyb250JzogZmFTdG9yZSxcbiAgICAgICdzdHlsaW5nLWNyZWFtJzogZmFTb2FwLFxuICAgICAgJ3N1YnN0cmFjdC12b2x1bWUnOiBmYVZvbHVtZU11dGUsXG4gICAgICAndGVtcGVyYXR1cmUnOiBmYVRoZXJtb21ldGVySGFsZixcbiAgICAgICd0aHVtYnMtZG93bic6IGZhVGh1bWJzRG93bixcbiAgICAgICd0aHVtYnMtdXAnOiBmYVRodW1ic1VwLFxuICAgICAgJ3RodW5kZXInOiBmYUJvbHQsXG4gICAgICAndGlja2V0JzogZmFUaWNrZXRBbHQsXG4gICAgICAndG9vdGhwYXN0ZSc6IGZhU29hcCxcbiAgICAgICd0cmVlLXZpZXcnOiBmYVNpdGVtYXAsXG4gICAgICAndHJlbmQtZG93bic6IGZhQ2hhcnRMaW5lLFxuICAgICAgJ3RyZW5kLXVwJzogZmFDaGFydExpbmUsXG4gICAgICAndHJvcGh5JzogZmFUcm9waHksXG4gICAgICAndHJ1Y2snOiBmYVRydWNrLFxuICAgICAgJ3R1Yic6IGZhQmF0aCxcbiAgICAgICd0d2l0dGVyJzogZmFTaGFyZSxcbiAgICAgICd1bmRvJzogZmFVbmRvLFxuICAgICAgJ3VwbG9hZCc6IGZhVXBsb2FkLFxuICAgICAgJ3VzZXItYXZhdGFyJzogZmFVc2VyLFxuICAgICAgJ3VzZXItYWRkJzogZmFVc2VyUGx1cyxcbiAgICAgICd1c2VyLXBsdXMnOiBmYVVzZXJQbHVzLFxuICAgICAgJ3VzZXItc3Vic3RyYWN0JzogZmFVc2VyTWludXMsXG4gICAgICAndXNlci1taW51cyc6IGZhVXNlck1pbnVzLFxuICAgICAgJ3VzZXItd2l0aC1jYXJ0JzogZmFVc2VyLFxuICAgICAgJ3ZpZGVvJzogZmFWaWRlbyxcbiAgICAgICd2aWRlby1sYXllcic6IGZhVmlkZW8sXG4gICAgICAnZXhjbGFtYXRpb24tY2lyY2xlJzogZmFFeGNsYW1hdGlvbkNpcmNsZSxcbiAgICAgICd3YXJuaW5nLWNpcmNsZSc6IGZhRXhjbGFtYXRpb25DaXJjbGUsXG4gICAgICAnd2FybmluZy10cmlhbmdsZSc6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICAgICd3aGF0c2FwcCc6IGZhU2hhcmUsXG4gICAgICAnd2lmaSc6IGZhV2lmaSxcbiAgICAgICd3aS1maSc6IGZhV2lmaSxcbiAgICAgICd3aS1maS1vZmYnOiBmYVdpZmksXG4gICAgICAneCc6IGZhVGltZXMsXG4gICAgICAnY2xvc2UnOiBmYVRpbWVzLFxuICAgICAgJ3lvdXR1YmUnOiBmYVNoYXJlLFxuICAgICAgXG4gICAgICAvLyBUYW1iacOpbiBzb3BvcnRhIGZvcm1hdG8gZmFzIGZhLVxuICAgICAgJ2ZhcyBmYS1zcGlubmVyJzogZmFTcGlubmVyLFxuICAgICAgJ2ZhcyBmYS1kb3dubG9hZCc6IGZhRG93bmxvYWQsXG4gICAgICAnZmFzIGZhLXRyYXNoJzogZmFUcmFzaCxcbiAgICAgICdmYXMgZmEtc2hhcmUnOiBmYVNoYXJlLFxuICAgICAgJ2ZhcyBmYS1wcmludCc6IGZhUHJpbnQsXG4gICAgICAnZmFzIGZhLWhlYXJ0JzogZmFIZWFydCxcbiAgICAgICdmYXMgZmEtaG9tZSc6IGZhSG9tZSxcbiAgICAgICdmYXMgZmEtdXNlcic6IGZhVXNlcixcbiAgICAgICdmYXMgZmEtY29nJzogZmFDb2csXG4gICAgICAnZmFzIGZhLXNlYXJjaCc6IGZhU2VhcmNoLFxuICAgICAgJ2ZhcyBmYS1zdGFyJzogZmFTdGFyLFxuICAgICAgJ2ZhcyBmYS1lZGl0JzogZmFFZGl0LFxuICAgICAgJ2ZhcyBmYS1zYXZlJzogZmFTYXZlLFxuICAgICAgJ2ZhcyBmYS1wbHVzJzogZmFQbHVzLFxuICAgICAgJ2ZhcyBmYS1taW51cyc6IGZhTWludXMsXG4gICAgICAnZmFzIGZhLWNoZWNrJzogZmFDaGVjayxcbiAgICAgICdmYXMgZmEtdGltZXMnOiBmYVRpbWVzLFxuICAgICAgJ2ZhcyBmYS14JzogZmFUaW1lcyxcbiAgICAgICdmYXMgZmEtY2xvc2UnOiBmYVRpbWVzLFxuICAgICAgJ2ZhcyBmYS1leWUnOiBmYUV5ZSxcbiAgICAgICdmYXMgZmEtZXllLXNsYXNoJzogZmFFeWVTbGFzaCxcbiAgICAgICdmYXMgZmEtbG9jayc6IGZhTG9jayxcbiAgICAgICdmYXMgZmEtdW5sb2NrJzogZmFVbmxvY2ssXG4gICAgICAnZmFzIGZhLWJlbGwnOiBmYUJlbGwsXG4gICAgICAnZmFzIGZhLWVudmVsb3BlJzogZmFFbnZlbG9wZSxcbiAgICAgICdmYXMgZmEtcGhvbmUnOiBmYVBob25lLFxuICAgICAgJ2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc6IGZhTWFwTWFya2VyQWx0LFxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhcic6IGZhQ2FsZW5kYXIsXG4gICAgICAnZmFzIGZhLWNsb2NrJzogZmFDbG9jayxcbiAgICAgICdmYXMgZmEtaW5mbyc6IGZhSW5mbyxcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgICAnZmFzIGZhLXF1ZXN0aW9uJzogZmFRdWVzdGlvbixcbiAgICAgICdmYXMgZmEtY2hldnJvbi1kb3duJzogZmFDaGV2cm9uRG93bixcbiAgICAgICdmYXMgZmEtY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLWxlZnQnOiBmYUNoZXZyb25MZWZ0LFxuICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0JzogZmFDaGV2cm9uUmlnaHQsXG4gICAgICAnZmFzIGZhLWFycm93LWxlZnQnOiBmYUFycm93TGVmdCxcbiAgICAgICdmYXMgZmEtYXJyb3ctcmlnaHQnOiBmYUFycm93UmlnaHQsXG4gICAgICAnZmFzIGZhLWFycm93LXVwJzogZmFBcnJvd1VwLFxuICAgICAgJ2ZhcyBmYS1hcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXG4gICAgICAnZmFzIGZhLXBlbmNpbCc6IGZhUGVuY2lsLFxuICAgICAgJ2ZhcyBmYS1hbmdsZS1kb3VibGUtbGVmdCc6IGZhQW5nbGVEb3VibGVMZWZ0LFxuICAgICAgJ2ZhcyBmYS1hbmdsZS1sZWZ0JzogZmFBbmdsZUxlZnQsXG4gICAgICAnZmFzIGZhLWFuZ2xlLXJpZ2h0JzogZmFBbmdsZVJpZ2h0LFxuICAgICAgJ2ZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHQnOiBmYUFuZ2xlRG91YmxlUmlnaHQsXG4gICAgICAnZmFzIGZhLXRhYmxlJzogZmFUYWJsZSxcbiAgICAgICdmYXMgZmEtdGgtbGFyZ2UnOiBmYVRoTGFyZ2UsXG4gICAgICAnZmFzIGZhLXVzZXJzJzogZmFVc2VycyxcbiAgICAgICdmYXMgZmEtbGluayc6IGZhTGluayxcbiAgICAgICdmYXMgZmEtY29weSc6IGZhQ29weSxcbiAgICAgICdmYXMgZmEtdW5pdmVyc2FsLWFjY2Vzcyc6IGZhVW5pdmVyc2FsQWNjZXNzLFxuICAgICAgJ2ZhcyBmYS1ydW5uaW5nJzogZmFSdW5uaW5nLFxuICAgICAgJ2ZhcyBmYS1pbWFnZSc6IGZhSW1hZ2UsXG4gICAgICAnZmFzIGZhLWNhbGVuZGFyLWFsdCc6IGZhQ2FsZW5kYXJBbHQsXG4gICAgICAnZmFzIGZhLWNoYXJ0LWJhcic6IGZhQ2hhcnRCYXIsXG4gICAgICAnZmFzIGZhLWNoYXJ0LWxpbmUnOiBmYUNoYXJ0TGluZSxcbiAgICAgICdmYXMgZmEtYXBwbGUtYWx0JzogZmFBcHBsZUFsdCxcbiAgICAgICdmYXMgZmEtcm9ib3QnOiBmYVJvYm90LFxuICAgICAgJ2ZhcyBmYS1naWZ0JzogZmFHaWZ0LFxuICAgICAgJ2ZhcyBmYS1zaG9wcGluZy1iYWcnOiBmYVNob3BwaW5nQmFnLFxuICAgICAgJ2ZhcyBmYS1iYWxhbmNlLXNjYWxlJzogZmFCYWxhbmNlU2NhbGUsXG4gICAgICAnZmFzIGZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnMnOiBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LWhhbGYnOiBmYUJhdHRlcnlIYWxmLFxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LXF1YXJ0ZXInOiBmYUJhdHRlcnlRdWFydGVyLFxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LWVtcHR5JzogZmFCYXR0ZXJ5RW1wdHksXG4gICAgICAnZmFzIGZhLWJlbGwtc2xhc2gnOiBmYUJlbGxTbGFzaCxcbiAgICAgICdmYXMgZmEtYmljeWNsZSc6IGZhQmljeWNsZSxcbiAgICAgICdmYXMgZmEtYm9va21hcmsnOiBmYUJvb2ttYXJrLFxuICAgICAgJ2ZhcyBmYS1ib3dsLWZvb2QnOiBmYUJvd2xGb29kLFxuICAgICAgJ2ZhcyBmYS1ib3gnOiBmYUJveCxcbiAgICAgICdmYXMgZmEtYnVzJzogZmFCdXMsXG4gICAgICAnZmFzIGZhLWJpcnRoZGF5LWNha2UnOiBmYUJpcnRoZGF5Q2FrZSxcbiAgICAgICdmYXMgZmEtY2FsY3VsYXRvcic6IGZhQ2FsY3VsYXRvcixcbiAgICAgICdmYXMgZmEtY2FsZW5kYXItZGF5JzogZmFDYWxlbmRhckRheSxcbiAgICAgICdmYXMgZmEtY2FtZXJhJzogZmFDYW1lcmEsXG4gICAgICAnZmFzIGZhLWNhcmV0LWRvd24nOiBmYUNhcmV0RG93bixcbiAgICAgICdmYXMgZmEtY2FyZXQtbGVmdCc6IGZhQ2FyZXRMZWZ0LFxuICAgICAgJ2ZhcyBmYS1jYXJldC1yaWdodCc6IGZhQ2FyZXRSaWdodCxcbiAgICAgICdmYXMgZmEtY2FyZXQtdXAnOiBmYUNhcmV0VXAsXG4gICAgICAnZmFzIGZhLWZpbGUnOiBmYUZpbGUsXG4gICAgICAnZmFzIGZhLWNoYXJ0LXBpZSc6IGZhQ2hhcnRQaWUsXG4gICAgICAnZmFzIGZhLWNvbW1lbnRzJzogZmFDb21tZW50cyxcbiAgICAgICdmYXMgZmEtZmxhc2snOiBmYUZsYXNrLFxuICAgICAgJ2ZhcyBmYS1taWNyb3Njb3BlJzogZmFNaWNyb3Njb3BlLFxuICAgICAgJ2ZhcyBmYS1jb29raWUtYml0ZSc6IGZhQ29va2llQml0ZSxcbiAgICAgICdmYXMgZmEtc3ByYXktY2FuJzogZmFTcHJheUNhbixcbiAgICAgICdmYXMgZmEtc29hcCc6IGZhU29hcCxcbiAgICAgICdmYXMgZmEtZXhwYW5kJzogZmFFeHBhbmQsXG4gICAgICAnZmFzIGZhLWNsb3VkJzogZmFDbG91ZCxcbiAgICAgICdmYXMgZmEtY29mZmVlJzogZmFDb2ZmZWUsXG4gICAgICAnZmFzIGZhLWNvbW1lbnQnOiBmYUNvbW1lbnQsXG4gICAgICAnZmFzIGZhLWNyZWRpdC1jYXJkJzogZmFDcmVkaXRDYXJkLFxuICAgICAgJ2ZhcyBmYS1jcm9wJzogZmFDcm9wLFxuICAgICAgJ2ZhcyBmYS1jcm9wLWFsdCc6IGZhQ3JvcEFsdCxcbiAgICAgICdmYXMgZmEtdHJ1Y2snOiBmYVRydWNrLFxuICAgICAgJ2ZhcyBmYS1maWxlLXVwbG9hZCc6IGZhRmlsZVVwbG9hZCxcbiAgICAgICdmYXMgZmEtZWxsaXBzaXMtaCc6IGZhRWxsaXBzaXNILFxuICAgICAgJ2ZhcyBmYS1wbGFuZSc6IGZhUGxhbmUsXG4gICAgICAnZmFzIGZhLWdyYWR1YXRpb24tY2FwJzogZmFHcmFkdWF0aW9uQ2FwLFxuICAgICAgJ2ZhcyBmYS1lcXVhbHMnOiBmYUVxdWFscyxcbiAgICAgICdmYXMgZmEtZXJhc2VyJzogZmFFcmFzZXIsXG4gICAgICAnZmFzIGZhLWZpbGUtZXhjZWwnOiBmYUZpbGVFeGNlbCxcbiAgICAgICdmYXMgZmEtZmlsZS1kb3dubG9hZCc6IGZhRmlsZURvd25sb2FkLFxuICAgICAgJ2ZhcyBmYS1zaWduLW91dC1hbHQnOiBmYVNpZ25PdXRBbHQsXG4gICAgICAnZmFzIGZhLXNtaWxlJzogZmFTbWlsZSxcbiAgICAgICdmYXMgZmEtZnJvd24nOiBmYUZyb3duLFxuICAgICAgJ2ZhcyBmYS1tYXNrJzogZmFNYXNrLFxuICAgICAgJ2ZhcyBmYS1tZWRhbCc6IGZhTWVkYWwsXG4gICAgICAnZmFzIGZhLWJveC1vcGVuJzogZmFCb3hPcGVuLFxuICAgICAgJ2ZhcyBmYS1zZWVkbGluZyc6IGZhU2VlZGxpbmcsXG4gICAgICAnZmFzIGZhLWZpbHRlcic6IGZhRmlsdGVyLFxuICAgICAgJ2ZhcyBmYS1maW5nZXJwcmludCc6IGZhRmluZ2VycHJpbnQsXG4gICAgICAnZmFzIGZhLWZpcmUnOiBmYUZpcmUsXG4gICAgICAnZmFzIGZhLXRyb3BoeSc6IGZhVHJvcGh5LFxuICAgICAgJ2ZhcyBmYS1maXNoJzogZmFGaXNoLFxuICAgICAgJ2ZhcyBmYS1mbGFnJzogZmFGbGFnLFxuICAgICAgJ2ZhcyBmYS1mb3J3YXJkJzogZmFGb3J3YXJkLFxuICAgICAgJ2ZhcyBmYS12b2x1bWUtdXAnOiBmYVZvbHVtZVVwLFxuICAgICAgJ2ZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdCc6IGZhRXhwYW5kQXJyb3dzQWx0LFxuICAgICAgJ2ZhcyBmYS1nbG9iZSc6IGZhR2xvYmUsXG4gICAgICAnZmFzIGZhLXZvbHVtZS1tdXRlJzogZmFWb2x1bWVNdXRlLFxuICAgICAgJ2ZhcyBmYS1iYXJzJzogZmFCYXJzLFxuICAgICAgJ2ZhcyBmYS1icmllZmNhc2UnOiBmYUJyaWVmY2FzZSxcbiAgICAgICdmYXMgZmEtbWljcm9jaGlwJzogZmFNaWNyb2NoaXAsXG4gICAgICAnZmFzIGZhLWhlYXJ0YmVhdCc6IGZhSGVhcnRiZWF0LFxuICAgICAgJ2ZhcyBmYS1oaXN0b3J5JzogZmFIaXN0b3J5LFxuICAgICAgJ2ZhcyBmYS1taWNyb3Bob25lJzogZmFNaWNyb3Bob25lLFxuICAgICAgJ2ZhcyBmYS1pY2UtY3JlYW0nOiBmYUljZUNyZWFtLFxuICAgICAgJ2ZhcyBmYS1saWdodGJ1bGInOiBmYUxpZ2h0YnVsYixcbiAgICAgICdmYXMgZmEta2V5JzogZmFLZXksXG4gICAgICAnZmFzIGZhLWxhcHRvcCc6IGZhTGFwdG9wLFxuICAgICAgJ2ZhcyBmYS1sYXllci1ncm91cCc6IGZhTGF5ZXJHcm91cCxcbiAgICAgICdmYXMgZmEtbGlzdC11bCc6IGZhTGlzdFVsLFxuICAgICAgJ2ZhcyBmYS12b2x1bWUtZG93bic6IGZhVm9sdW1lRG93bixcbiAgICAgICdmYXMgZmEtbWFwLXBpbic6IGZhTWFwUGluLFxuICAgICAgJ2ZhcyBmYS1waWxscyc6IGZhUGlsbHMsXG4gICAgICAnZmFzIGZhLW1vYmlsZSc6IGZhTW9iaWxlLFxuICAgICAgJ2ZhcyBmYS1tb2JpbGUtYWx0JzogZmFNb2JpbGVBbHQsXG4gICAgICAnZmFzIGZhLW1vbmV5LWJpbGwnOiBmYU1vbmV5QmlsbCxcbiAgICAgICdmYXMgZmEtbW90b3JjeWNsZSc6IGZhTW90b3JjeWNsZSxcbiAgICAgICdmYXMgZmEtc3RpY2t5LW5vdGUnOiBmYVN0aWNreU5vdGUsXG4gICAgICAnZmFzIGZhLWVsbGlwc2lzLXYnOiBmYUVsbGlwc2lzVixcbiAgICAgICdmYXMgZmEtbHVuZ3MnOiBmYUx1bmdzLFxuICAgICAgJ2ZhcyBmYS1jYXNoLXJlZ2lzdGVyJzogZmFDYXNoUmVnaXN0ZXIsXG4gICAgICAnZmFzIGZhLXBhcGVyLXBsYW5lJzogZmFQYXBlclBsYW5lLFxuICAgICAgJ2ZhcyBmYS1wYXBlcmNsaXAnOiBmYVBhcGVyY2xpcCxcbiAgICAgICdmYXMgZmEtZGVza3RvcCc6IGZhRGVza3RvcCxcbiAgICAgICdmYXMgZmEtcGF1c2UnOiBmYVBhdXNlLFxuICAgICAgJ2ZhcyBmYS1wZXJjZW50JzogZmFQZXJjZW50LFxuICAgICAgJ2ZhcyBmYS1waWdneS1iYW5rJzogZmFQaWdneUJhbmssXG4gICAgICAnZmFzIGZhLXBsYXknOiBmYVBsYXksXG4gICAgICAnZmFzIGZhLW1vdXNlLXBvaW50ZXInOiBmYU1vdXNlUG9pbnRlcixcbiAgICAgICdmYXMgZmEtc3dpbW1pbmctcG9vbCc6IGZhU3dpbW1pbmdQb29sLFxuICAgICAgJ2ZhcyBmYS1iYW4nOiBmYUJhbixcbiAgICAgICdmYXMgZmEtdGFnJzogZmFUYWcsXG4gICAgICAnZmFzIGZhLXNoaWVsZCc6IGZhU2hpZWxkLFxuICAgICAgJ2ZhcyBmYS1xcmNvZGUnOiBmYVFyY29kZSxcbiAgICAgICdmYXMgZmEtcmVjZWlwdCc6IGZhUmVjZWlwdCxcbiAgICAgICdmYXMgZmEtcmVkbyc6IGZhUmVkbyxcbiAgICAgICdmYXMgZmEtcnVsZXInOiBmYVJ1bGVyLFxuICAgICAgJ2ZhcyBmYS11dGVuc2lscyc6IGZhVXRlbnNpbHMsXG4gICAgICAnZmFzIGZhLXRzaGlydCc6IGZhVHNoaXJ0LFxuICAgICAgJ2ZhcyBmYS1zaG9wcGluZy1jYXJ0JzogZmFTaG9wcGluZ0NhcnQsXG4gICAgICAnZmFzIGZhLXNsaWRlcnMtaCc6IGZhU2xpZGVyc0gsXG4gICAgICAnZmFzIGZhLWdsYXNzLXdoaXNrZXknOiBmYUdsYXNzV2hpc2tleSxcbiAgICAgICdmYXMgZmEtc29ydCc6IGZhU29ydCxcbiAgICAgICdmYXMgZmEtdGFjaG9tZXRlci1hbHQnOiBmYVRhY2hvbWV0ZXJBbHQsXG4gICAgICAnZmFzIGZhLXNwb29uJzogZmFTcG9vbixcbiAgICAgICdmYXMgZmEtc3Rhci1oYWxmJzogZmFTdGFySGFsZixcbiAgICAgICdmYXMgZmEtc3RvcCc6IGZhU3RvcCxcbiAgICAgICdmYXMgZmEtc3RvcmUnOiBmYVN0b3JlLFxuICAgICAgJ2ZhcyBmYS10aGVybW9tZXRlci1oYWxmJzogZmFUaGVybW9tZXRlckhhbGYsXG4gICAgICAnZmFzIGZhLXRodW1icy1kb3duJzogZmFUaHVtYnNEb3duLFxuICAgICAgJ2ZhcyBmYS10aHVtYnMtdXAnOiBmYVRodW1ic1VwLFxuICAgICAgJ2ZhcyBmYS1ib2x0JzogZmFCb2x0LFxuICAgICAgJ2ZhcyBmYS10aWNrZXQtYWx0JzogZmFUaWNrZXRBbHQsXG4gICAgICAnZmFzIGZhLXNpdGVtYXAnOiBmYVNpdGVtYXAsXG4gICAgICAnZmFzIGZhLWJhdGgnOiBmYUJhdGgsXG4gICAgICAnZmFzIGZhLXVuZG8nOiBmYVVuZG8sXG4gICAgICAnZmFzIGZhLXVwbG9hZCc6IGZhVXBsb2FkLFxuICAgICAgJ2ZhcyBmYS11c2VyLXBsdXMnOiBmYVVzZXJQbHVzLFxuICAgICAgJ2ZhcyBmYS11c2VyLW1pbnVzJzogZmFVc2VyTWludXMsXG4gICAgICAnZmFzIGZhLXZpZGVvJzogZmFWaWRlbyxcbiAgICAgICdmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlJzogZmFFeGNsYW1hdGlvbkNpcmNsZSxcbiAgICAgICdmYXMgZmEtd2lmaSc6IGZhV2lmaSxcbiAgICAgICdmYXMgZmEtdGFibGV0JzogZmFUYWJsZXQsXG4gICAgICAnZmFzIGZhLXRhYmxldC1hbHQnOiBmYVRhYmxldEFsdCxcbiAgICAgICdmYXMgZmEtYW1idWxhbmNlJzogZmFBbWJ1bGFuY2VcbiAgICB9O1xuICAgIFxuICAgIC8vIFNpIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCDDunNhbG9cbiAgICBpZiAobG9jYWxJY29uTWFwW3RoaXMuaWNvbl0pIHtcbiAgICAgIHJldHVybiBsb2NhbEljb25NYXBbdGhpcy5pY29uXTtcbiAgICB9XG4gICAgXG4gICAgLy8gU2kgbm8gZXN0w6EgZW4gZWwgbWFwZW8gbG9jYWwsIGludGVudGEgY29uIGZpbmRJY29uRGVmaW5pdGlvblxuICAgIC8vIEZvcm1hdG86ICdmYXMgZmEtc3Bpbm5lcicgbyAnc3Bpbm5lcicgKGFzdW1lICdmYXMnIHBvciBkZWZlY3RvKVxuICAgIGxldCBpY29uTmFtZSA9IHRoaXMuaWNvbjtcbiAgICBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYXMgZmEtJykpIHtcbiAgICAgIGljb25OYW1lID0gdGhpcy5pY29uLnJlcGxhY2UoJ2ZhcyBmYS0nLCAnJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmljb24uaW5jbHVkZXMoJ2ZhLScpKSB7XG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYS0nLCAnJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGZvdW5kSWNvbiA9IGZpbmRJY29uRGVmaW5pdGlvbih7IHByZWZpeDogJ2ZhcycsIGljb25OYW1lOiBpY29uTmFtZSBhcyBJY29uTmFtZSB9KTtcbiAgICBpZiAoZm91bmRJY29uKSB7XG4gICAgICByZXR1cm4gZm91bmRJY29uO1xuICAgIH1cbiAgICBcbiAgICAvLyBTaSBubyBzZSBlbmN1ZW50cmEsIHJldG9ybmEgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIFNpIGVzdMOhIGRpc2FibGVkIG8gbG9hZGluZywgcHJldmVuaXIgY29tcGxldGFtZW50ZSBlbCBldmVudG9cbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIFNvbG8gZW1pdGlyIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCgpO1xuICB9XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgJ2J0bicsXG4gICAgICBgYnRuLSR7dGhpcy52YXJpYW50fWAsXG4gICAgICB0aGlzLmdldFNpemVDbGFzcygpLFxuICAgICAgdGhpcy5mdWxsV2lkdGggPyAndy0xMDAnIDogJycsXG4gICAgICB0aGlzLmRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnLFxuICAgICAgdGhpcy5sb2FkaW5nID8gJ2xvYWRpbmcnIDogJycsXG4gICAgICB0aGlzLm5vQW5pbWF0ZSA/ICduby1hbmltYXRlJyA6ICcnXG4gICAgXTtcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGlzSW50ZXJhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgLy8gRWwgYm90w7NuIGVzIGludGVyYWN0aXZvIHNvbG8gc2kgbm8gZXN0w6EgZGlzYWJsZWQgbmkgbG9hZGluZ1xuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHNob3dTcGlubmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBnZXQgc2hvd0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgLy8gTW9zdHJhciBjb250ZW5pZG8gKHRleHRvICsgaWNvbm8pIHNvbG8gc2kgbm8gZXN0w6EgbG9hZGluZ1xuICAgIHJldHVybiAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaXplQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSAnc20nOlxuICAgICAgICByZXR1cm4gJ2J0bi1zbSc7XG4gICAgICBjYXNlICdtZCc6XG4gICAgICAgIHJldHVybiAnYnRuLW1kJztcbiAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgcmV0dXJuICdidG4tbGcnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdidG4tbWQnOyAvLyBQb3IgZGVmZWN0byB1c2EgZWwgdGFtYcOxbyBtZWRpYW5vXG4gICAgfVxuICB9XG59XG4iLCI8YnV0dG9uXHJcbiAgI2J1dHRvbkVsZW1lbnRcclxuICBbY2xhc3NdPVwiYnV0dG9uQ2xhc3Nlc1wiXHJcbiAgW3R5cGVdPVwidHlwZVwiXHJcbiAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbG9hZGluZyA/ICcnIDogbnVsbFwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmdcIlxyXG4gIFtjbGFzcy5oYXMtdG9vbHRpcF09XCJ0b29sdGlwXCJcclxuICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuICBbYXR0ci5zdHlsZV09XCJjcml0aWNhbElubGluZVN0eWxlc1wiXHJcbj5cclxuICA8IS0tIENvbnRlbmlkbyBkZWwgYm90w7NuIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGVudFwiIFtjbGFzcy5sb2FkaW5nLWhpZGRlbl09XCJzaG93U3Bpbm5lclwiPlxyXG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiAocG9zaXRpb24gPT09ICdsZWZ0JyB8fCBpY29uT25seSlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIFtjbGFzcy5tZS0xXT1cIiFpY29uT25seVwiPjwvZmEtaWNvbj5cclxuICAgIDxzcGFuICNidXR0b25UZXh0ICpuZ0lmPVwiIWljb25Pbmx5XCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICA8ZmEtaWNvbiAqbmdJZj1cImljb25EZWZpbml0aW9uICYmIHBvc2l0aW9uID09PSAncmlnaHQnICYmICFpY29uT25seVwiIFtpY29uXT1cImljb25EZWZpbml0aW9uXCIgY2xhc3M9XCJtcy0xXCI+PC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwhLS0gU3Bpbm5lciBxdWUgc2Ugc3VwZXJwb25lIGN1YW5kbyBlc3TDoSBsb2FkaW5nIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93U3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1vdmVybGF5XCI+XHJcbiAgICA8ZmEtaWNvbiBcclxuICAgICAgW2ljb25dPVwic3Bpbm5lckljb25cIiBcclxuICAgICAgY2xhc3M9XCJzcGlubmVyLWljb25cIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5pbmddPVwibG9hZGluZ1wiPlxyXG4gICAgPC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwhLS0gVG9vbHRpcCBwZXJzb25hbGl6YWRvIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJ0b29sdGlwXCIgXHJcbiAgICAgICBjbGFzcz1cImN1c3RvbS10b29sdGlwXCIgXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC10b3BdPVwidG9vbHRpcFBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC1ib3R0b21dPVwidG9vbHRpcFBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC1sZWZ0XT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgIFtjbGFzcy50b29sdGlwLXJpZ2h0XT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICBbY2xhc3MubXVsdGlsaW5lXT1cImlzTG9uZ1Rvb2x0aXBcIlxyXG4gICAgICAgW2F0dHIuZGF0YS10b29sdGlwXT1cInRvb2x0aXBcIj5cclxuICAgIHt7IHRvb2x0aXAgfX1cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbiJdfQ==