import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faDownload, faTrash, faShare, faPrint, faHeart, faHome, faUser, faCog, faSearch, faStar, faEdit, faSave, faPlus, faMinus, faCheck, faTimes, faEye, faEyeSlash, faLock, faUnlock, faBell, faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faClock, faInfo, faExclamationTriangle, faQuestion, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faPencil, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, 
// Nuevos iconos agregados
faThLarge, faUsers, faLink, faCopy, faUniversalAccess, faRunning, faImage, faCalendarAlt, faChartBar, faChartLine, faAppleAlt, faRobot, faGift, faShoppingBag, faBalanceScale, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faBellSlash, faBicycle, faBookmark, faBowlFood, faBox, faBus, faBirthdayCake, faCalculator, faCalendarDay, faCamera, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faFile, faChartPie, faComments, faFlask, faMicroscope, faCookieBite, faSprayCan, faSoap, faExpand, faCloud, faCoffee, faComment, faCreditCard, faCrop, faCropAlt, faTruck, faFileUpload, faEllipsisH, faPlane, faGraduationCap, faEquals, faEraser, faFileExcel, faFileDownload, faSignOutAlt, faSmile, faFrown, faMask, faMedal, faBoxOpen, faSeedling, faFilter, faFingerprint, faFire, faTrophy, faFish, faFlag, faForward, faVolumeUp, faExpandArrowsAlt, faGlobe, faVolumeMute, faBars, faBriefcase, faMicrochip, faHeartbeat, faHistory, faMicrophone, faIceCream, faLightbulb, faKey, faLaptop, faLayerGroup, faListUl, faVolumeDown, faMapPin, faPills, faMobile, faMobileAlt, faMoneyBill, faMotorcycle, faStickyNote, faEllipsisV, faLungs, faCashRegister, faPaperPlane, faPaperclip, faDesktop, faPause, faPercent, faPiggyBank, faPlay, faMousePointer, faSwimmingPool, faBan, faTag, faShield, faQrcode, faReceipt, faRedo, faRuler, faUtensils, faTshirt, faShoppingCart, faSlidersH, faGlassWhiskey, faSort, faTachometerAlt, faSpoon, faStarHalf, faStop, faStore, faThermometerHalf, faThumbsDown, faThumbsUp, faBolt, faTicketAlt, faSitemap, faBath, faUndo, faUpload, faUserPlus, faUserMinus, faVideo, faExclamationCircle, faWifi, faTable, faTablet, faTabletAlt, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
export class SaButtonComponent {
    // Propiedades con flexibilidad máxima: soportan attribute y property binding
    label = 'Button'; // Mantener como @Input simple para strings
    get criticalInlineStyles() {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaButtonComponent, selector: "sa-button", inputs: { label: "label", tooltip: "tooltip", tooltipPosition: "tooltipPosition", variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type", icon: "icon", position: "position", iconOnly: "iconOnly", noAnimate: "noAnimate" }, outputs: { clicked: "clicked" }, host: { properties: { "class.full-width": "fullWidth" } }, viewQueries: [{ propertyName: "buttonText", first: true, predicate: ["buttonText"], descendants: true }], ngImport: i0, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.style]=\"criticalInlineStyles\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;overflow:visible;width:auto;border:none;border-radius:.375rem;cursor:pointer;outline:none;position:relative;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;transition:all .2s ease-in-out;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-overlay fa-icon{display:flex!important;align-items:center!important;justify-content:center!important;width:auto!important;height:auto!important;line-height:1!important}.spinner-overlay fa-icon svg{display:block!important;margin:auto!important}.spinner-icon{animation:spin 1s linear infinite;opacity:1!important;display:flex!important;align-items:center!important;justify-content:center!important}.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}.spinner-icon[class*=fa-]{display:flex!important;align-items:center!important;justify-content:center!important;line-height:1!important}.spinner-icon[class*=fa-] svg{display:block!important;margin:0!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}fa-icon{display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;vertical-align:middle}fa-icon.spinner-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;vertical-align:middle!important}fa-icon svg{fill:currentColor;width:1em;height:1em;vertical-align:middle}.spinner-icon fa-icon svg{display:block!important;margin:0 auto!important}fa-icon.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}fa-icon.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}fa-icon.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}fa-icon.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}fa-icon.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}fa-icon.fa-spin{animation:fa-spin 2s infinite linear}fa-icon.fa-pulse{animation:fa-pulse 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes fa-pulse{0%{opacity:1}50%{opacity:.25}to{opacity:1}}:host fa-icon,:host ::ng-deep fa-icon{display:inline-block!important;font-style:normal!important;font-variant:normal!important;text-rendering:auto!important;line-height:1!important;vertical-align:middle!important}:host fa-icon svg,:host ::ng-deep fa-icon svg{fill:currentColor!important;width:1em!important;height:1em!important;vertical-align:middle!important}:host{display:inline-flex!important;align-items:center!important;justify-content:center!important}:host .spinner-icon,:host ::ng-deep .spinner-icon{animation:fa-spin 1s infinite linear!important}:host .spinner-icon.spinning,:host ::ng-deep .spinner-icon.spinning{animation:fa-spin 1s infinite linear!important}.me-1{margin-right:.25rem!important}.ms-1{margin-left:.25rem!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-button', encapsulation: ViewEncapsulation.ShadowDom, host: {
                        '[class.full-width]': 'fullWidth'
                    }, template: "<button\r\n  #buttonElement\r\n  [class]=\"buttonClasses\"\r\n  [type]=\"type\"\r\n  [attr.disabled]=\"disabled || loading ? '' : null\"\r\n  [disabled]=\"disabled || loading\"\r\n  [class.has-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.style]=\"criticalInlineStyles\"\r\n>\r\n  <!-- Contenido del bot\u00F3n -->\r\n  <div class=\"button-content\" [class.loading-hidden]=\"showSpinner\">\r\n    <fa-icon *ngIf=\"iconDefinition && (position === 'left' || iconOnly)\" [icon]=\"iconDefinition\" [class.me-1]=\"!iconOnly\"></fa-icon>\r\n    <span #buttonText *ngIf=\"!iconOnly\">{{ label }}</span>\r\n    <fa-icon *ngIf=\"iconDefinition && position === 'right' && !iconOnly\" [icon]=\"iconDefinition\" class=\"ms-1\"></fa-icon>\r\n  </div>\r\n  \r\n  <!-- Spinner que se superpone cuando est\u00E1 loading -->\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-overlay\">\r\n    <fa-icon \r\n      [icon]=\"spinnerIcon\" \r\n      class=\"spinner-icon\"\r\n      [class.spinning]=\"loading\">\r\n    </fa-icon>\r\n  </div>\r\n  \r\n  <!-- Tooltip personalizado -->\r\n  <div *ngIf=\"tooltip\" \r\n       class=\"custom-tooltip\" \r\n       [class.tooltip-top]=\"tooltipPosition === 'top'\"\r\n       [class.tooltip-bottom]=\"tooltipPosition === 'bottom'\"\r\n       [class.tooltip-left]=\"tooltipPosition === 'left'\"\r\n       [class.tooltip-right]=\"tooltipPosition === 'right'\"\r\n       [class.multiline]=\"isLongTooltip\"\r\n       [attr.data-tooltip]=\"tooltip\">\r\n    {{ tooltip }}\r\n  </div>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:inline-block;vertical-align:middle;width:auto}:host.full-width{display:block;width:100%}.container :host,.row :host,.col :host,[class*=col-] :host{display:inline-block;vertical-align:middle}.container :host.full-width,.row :host.full-width,.col :host.full-width,[class*=col-] :host.full-width{display:block;width:100%}.btn{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important;overflow:visible;width:auto;border:none;border-radius:.375rem;cursor:pointer;outline:none;position:relative;display:inline-flex;align-items:center;justify-content:center;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;transition:all .2s ease-in-out;line-height:1;min-width:fit-content;font-weight:400!important}.btn.w-100{width:100%!important;display:flex!important}.btn:hover{transform:translateY(-1px);z-index:10000}.btn:active{transform:translateY(1px)}.btn.no-animate:hover{transform:none!important;z-index:10000}.btn.no-animate:active{transform:none!important}.btn.loading{cursor:not-allowed;pointer-events:none}.btn.loading:hover{transform:none!important;z-index:auto!important}.btn.disabled{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;cursor:not-allowed;pointer-events:none;box-shadow:none!important}.btn.disabled:hover{background-color:#f8f9fa!important;border-color:#858585!important;color:#858585!important;transform:none!important;z-index:auto!important}.btn.disabled:active{transform:none!important}.btn.disabled.loading .spinner-overlay{background-color:#f8f9fa!important}.btn.disabled.loading .spinner-icon{color:#858585!important}.spinner-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:inherit;z-index:10;width:100%;height:100%;opacity:1!important}.spinner-overlay fa-icon{display:flex!important;align-items:center!important;justify-content:center!important;width:auto!important;height:auto!important;line-height:1!important}.spinner-overlay fa-icon svg{display:block!important;margin:auto!important}.spinner-icon{animation:spin 1s linear infinite;opacity:1!important;display:flex!important;align-items:center!important;justify-content:center!important}.spinner-icon.spinning{animation:spin 1s linear infinite;opacity:1!important}.spinner-icon[class*=fa-]{display:flex!important;align-items:center!important;justify-content:center!important;line-height:1!important}.spinner-icon[class*=fa-] svg{display:block!important;margin:0!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-overlay fa-icon,.spinner-overlay .fa-icon,.spinner-overlay [class*=fa-]{opacity:1!important}.btn-primary{background-color:#36ad55;border:1px solid #36AD55;color:#fff}.btn-primary:hover{background-color:#239a5c;border:1px solid #239A5C}.btn-primary.loading{background-color:#36ad55!important;color:#fff!important;opacity:1!important}.btn-primary .spinner-icon{color:#fff!important;opacity:1!important}.btn-primary .spinner-overlay{background-color:#36ad55!important;opacity:1!important}.btn-secondary{background-color:#fff;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary:hover{background-color:#effcf5;border:1px solid #00ab4a;color:#00ab4a}.btn-secondary.loading{background-color:#fff!important;color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-secondary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-terciary{background-color:#fff;border:1px solid #c7cace;color:#2e3b60}.btn-terciary:hover{background-color:#f4f6f8}.btn-terciary.loading{background-color:#fff!important;color:#222!important;opacity:1!important}.btn-terciary .spinner-icon{color:#222!important;opacity:1!important}.btn-terciary .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-success{background-color:#d3f7e3;border:1px solid #00ab4a;color:#00ab4a}.btn-success:hover{background-color:#c0f0d0;border-color:#090;color:#090}.btn-success.loading{background-color:#d3f7e3!important;color:#00ab4a!important;opacity:1!important}.btn-success .spinner-icon{color:#00ab4a!important;opacity:1!important}.btn-success .spinner-overlay{background-color:#d3f7e3!important;opacity:1!important}.btn-danger{background-color:#faeded;border:1px solid #DC3545;color:#dc3545}.btn-danger:hover{background-color:#fcdcdc;border-color:#c82333;color:#c82333}.btn-danger.loading{background-color:#ffe7e7!important;color:#dc3545!important;opacity:1!important}.btn-danger .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger .spinner-overlay{background-color:#ffe7e7!important;opacity:1!important}.btn-danger-light{background-color:#fff;border:1px solid #DC3545;color:#dc3545}.btn-danger-light:hover{background-color:#fff;color:#c82333}.btn-danger-light.loading{background-color:#fff!important;color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-icon{color:#dc3545!important;opacity:1!important}.btn-danger-light .spinner-overlay{background-color:#fff!important;opacity:1!important}.btn-warning{background-color:#fff3cd;border:1px solid #FFC107;color:#856404}.btn-warning:hover{background-color:#ffeaa7;border-color:#e0a800;color:#6c5c00}.btn-warning.loading{background-color:#fff3cd!important;color:#856404!important;opacity:1!important}.btn-warning .spinner-icon{color:#856404!important;opacity:1!important}.btn-warning .spinner-overlay{background-color:#fff3cd!important;opacity:1!important}.btn-info{background-color:#dae9fc4a!important;border:1px solid #007bff!important;color:#007bff!important}.btn-info:hover{background-color:#98c8ff4a!important;border-color:#007bff!important;color:#007bff!important}.btn-info.loading{background-color:#b9d5f54a!important;color:#007bff!important;opacity:1!important}.btn-info .spinner-icon{color:#007bff!important;opacity:1!important}.btn-info .spinner-overlay{background-color:#b9d5f54a!important;opacity:1!important}.btn-gray{background-color:#777;border:1px solid #777777;color:#fff}.btn-gray:hover{background-color:#5c5c5c;border-color:#5c5c5c;color:#fff}.btn-gray.loading{background-color:#777!important;color:#fff!important;opacity:1!important}.btn-gray .spinner-icon{color:#fff!important;opacity:1!important}.btn-gray .spinner-overlay{background-color:#777!important;opacity:1!important}.btn-red{background-color:#dc3545;border:1px solid #DC3545;color:#fff}.btn-red:hover{background-color:#c82333;border-color:#c82333;color:#fff}.btn-red.loading{background-color:#dc3545!important;color:#fff!important;opacity:1!important}.btn-red .spinner-icon{color:#fff!important;opacity:1!important}.btn-red .spinner-overlay{background-color:#dc3545!important;opacity:1!important}.btn.btn-sm{padding:6px 8px!important;font-size:12px;border-radius:6px}.btn.btn-md{padding:8px 12px!important;font-size:13px;border-radius:6px}.btn.btn-lg{padding:12px 24px!important;font-size:16px;border-radius:6px}.w-100{width:100%}.custom-tooltip{position:absolute;padding:6px 12px;background-color:#616161;color:#fff;font-size:12px;border-radius:4px;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;pointer-events:none;line-height:1.3;text-align:center;white-space:nowrap;max-width:350px;min-width:max-content;width:max-content}.custom-tooltip.multiline{white-space:normal;max-width:280px;min-width:200px;width:auto;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;line-height:1.4;padding:8px 12px;text-align:left}.custom-tooltip.tooltip-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.custom-tooltip.tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #616161}.custom-tooltip.tooltip-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.custom-tooltip.tooltip-bottom:after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #616161}.custom-tooltip.tooltip-left{top:50%;right:100%;transform:translateY(-50%);margin-right:8px}.custom-tooltip.tooltip-left:after{content:\"\";position:absolute;left:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #616161}.custom-tooltip.tooltip-right{top:50%;left:100%;transform:translateY(-50%);margin-left:8px}.custom-tooltip.tooltip-right:after{content:\"\";position:absolute;right:100%;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #616161}.btn.has-tooltip:hover .custom-tooltip{opacity:1;visibility:visible}.btn.has-tooltip{overflow:visible}.btn.has-tooltip .custom-tooltip{pointer-events:none}.button-content{display:flex;align-items:center;justify-content:center;gap:.25rem}.button-content.loading-hidden{visibility:hidden}.btn:has(.button-content:not(:has(span))){min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-sm{min-width:32px;min-height:32px;padding:6px}.btn:has(.button-content:not(:has(span))).btn-md{min-width:40px;min-height:40px;padding:8px}.btn:has(.button-content:not(:has(span))).btn-lg{min-width:48px;min-height:48px;padding:12px}fa-icon{display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;vertical-align:middle}fa-icon.spinner-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;vertical-align:middle!important}fa-icon svg{fill:currentColor;width:1em;height:1em;vertical-align:middle}.spinner-icon fa-icon svg{display:block!important;margin:0 auto!important}fa-icon.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}fa-icon.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}fa-icon.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}fa-icon.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}fa-icon.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}fa-icon.fa-spin{animation:fa-spin 2s infinite linear}fa-icon.fa-pulse{animation:fa-pulse 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes fa-pulse{0%{opacity:1}50%{opacity:.25}to{opacity:1}}:host fa-icon,:host ::ng-deep fa-icon{display:inline-block!important;font-style:normal!important;font-variant:normal!important;text-rendering:auto!important;line-height:1!important;vertical-align:middle!important}:host fa-icon svg,:host ::ng-deep fa-icon svg{fill:currentColor!important;width:1em!important;height:1em!important;vertical-align:middle!important}:host{display:inline-flex!important;align-items:center!important;justify-content:center!important}:host .spinner-icon,:host ::ng-deep .spinner-icon{animation:fa-spin 1s infinite linear!important}:host .spinner-icon.spinning,:host ::ng-deep .spinner-icon.spinning{animation:fa-spin 1s infinite linear!important}.me-1{margin-right:.25rem!important}.ms-1{margin-left:.25rem!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFrQixrQkFBa0IsRUFBWSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pHLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sVUFBVSxFQUNWLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLE9BQU8sRUFDUCxNQUFNLEVBQ04scUJBQXFCLEVBQ3JCLFVBQVUsRUFDVixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFlBQVksRUFDWixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLFNBQVMsRUFDVCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFB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QUFLO2dCQVNGLGVBQWU7c0JBRGxCLEtBQUs7Z0JBaUJGLE9BQU87c0JBRFYsS0FBSztnQkFTRixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLE9BQU87c0JBRFYsS0FBSztnQkFTRixTQUFTO3NCQURaLEtBQUs7Z0JBU0YsSUFBSTtzQkFEUCxLQUFLO2dCQVNGLElBQUk7c0JBRFAsS0FBSztnQkFTRixRQUFRO3NCQURYLEtBQUs7Z0JBU0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLFNBQVM7c0JBRFosS0FBSztnQkFTc0MsVUFBVTtzQkFBckQsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUVoQyxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBmaW5kSWNvbkRlZmluaXRpb24sIEljb25OYW1lIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IFxuICBmYVNwaW5uZXIsIFxuICBmYURvd25sb2FkLCBcbiAgZmFUcmFzaCwgXG4gIGZhU2hhcmUsIFxuICBmYVByaW50LCBcbiAgZmFIZWFydCxcbiAgZmFIb21lLFxuICBmYVVzZXIsXG4gIGZhQ29nLFxuICBmYVNlYXJjaCxcbiAgZmFTdGFyLFxuICBmYUVkaXQsXG4gIGZhU2F2ZSxcbiAgZmFQbHVzLFxuICBmYU1pbnVzLFxuICBmYUNoZWNrLFxuICBmYVRpbWVzLFxuICBmYUV5ZSxcbiAgZmFFeWVTbGFzaCxcbiAgZmFMb2NrLFxuICBmYVVubG9jayxcbiAgZmFCZWxsLFxuICBmYUVudmVsb3BlLFxuICBmYVBob25lLFxuICBmYU1hcE1hcmtlckFsdCxcbiAgZmFDYWxlbmRhcixcbiAgZmFDbG9jayxcbiAgZmFJbmZvLFxuICBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gIGZhUXVlc3Rpb24sXG4gIGZhQ2hldnJvbkRvd24sXG4gIGZhQ2hldnJvblVwLFxuICBmYUNoZXZyb25MZWZ0LFxuICBmYUNoZXZyb25SaWdodCxcbiAgZmFBcnJvd0xlZnQsXG4gIGZhQXJyb3dSaWdodCxcbiAgZmFBcnJvd1VwLFxuICBmYUFycm93RG93bixcbiAgZmFQZW5jaWwsXG4gIGZhQW5nbGVEb3VibGVMZWZ0LFxuICBmYUFuZ2xlTGVmdCxcbiAgZmFBbmdsZVJpZ2h0LFxuICBmYUFuZ2xlRG91YmxlUmlnaHQsXG4gIC8vIE51ZXZvcyBpY29ub3MgYWdyZWdhZG9zXG4gIGZhVGhMYXJnZSxcbiAgZmFVc2VycyxcbiAgZmFMaW5rLFxuICBmYUNvcHksXG4gIGZhVW5pdmVyc2FsQWNjZXNzLFxuICBmYVJ1bm5pbmcsXG4gIGZhSW1hZ2UsXG4gIGZhQ2FsZW5kYXJBbHQsXG4gIGZhQ2hhcnRCYXIsXG4gIGZhQ2hhcnRMaW5lLFxuICBmYUFwcGxlQWx0LFxuICBmYVJvYm90LFxuICBmYUdpZnQsXG4gIGZhU2hvcHBpbmdCYWcsXG4gIGZhQmFsYW5jZVNjYWxlLFxuICBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxuICBmYUJhdHRlcnlIYWxmLFxuICBmYUJhdHRlcnlRdWFydGVyLFxuICBmYUJhdHRlcnlFbXB0eSxcbiAgZmFCZWxsU2xhc2gsXG4gIGZhQmljeWNsZSxcbiAgZmFCb29rbWFyayxcbiAgZmFCb3dsRm9vZCxcbiAgZmFCb3gsXG4gIGZhQnVzLFxuICBmYUJpcnRoZGF5Q2FrZSxcbiAgZmFDYWxjdWxhdG9yLFxuICBmYUNhbGVuZGFyRGF5LFxuICBmYUNhbWVyYSxcbiAgZmFDYXJldERvd24sXG4gIGZhQ2FyZXRMZWZ0LFxuICBmYUNhcmV0UmlnaHQsXG4gIGZhQ2FyZXRVcCxcbiAgZmFGaWxlLFxuICBmYUNoYXJ0UGllLFxuICBmYUNvbW1lbnRzLFxuICBmYUZsYXNrLFxuICBmYU1pY3Jvc2NvcGUsXG4gIGZhQ29va2llQml0ZSxcbiAgZmFTcHJheUNhbixcbiAgZmFTb2FwLFxuICBmYUV4cGFuZCxcbiAgZmFDbG91ZCxcbiAgZmFDb2ZmZWUsXG4gIGZhQ29tbWVudCxcbiAgZmFDcmVkaXRDYXJkLFxuICBmYUNyb3AsXG4gIGZhQ3JvcEFsdCxcbiAgZmFUcnVjayxcbiAgZmFGaWxlVXBsb2FkLFxuICBmYUVsbGlwc2lzSCxcbiAgZmFQbGFuZSxcbiAgZmFHcmFkdWF0aW9uQ2FwLFxuICBmYUVxdWFscyxcbiAgZmFFcmFzZXIsXG4gIGZhRmlsZUV4Y2VsLFxuICBmYUZpbGVEb3dubG9hZCxcbiAgZmFTaWduT3V0QWx0LFxuICBmYVNtaWxlLFxuICBmYUZyb3duLFxuICBmYU1hc2ssXG4gIGZhTWVkYWwsXG4gIGZhQm94T3BlbixcbiAgZmFTZWVkbGluZyxcbiAgZmFGaWx0ZXIsXG4gIGZhRmluZ2VycHJpbnQsXG4gIGZhRmlyZSxcbiAgZmFUcm9waHksXG4gIGZhRmlzaCxcbiAgZmFGbGFnLFxuICBmYUZvcndhcmQsXG4gIGZhVm9sdW1lVXAsXG4gIGZhRXhwYW5kQXJyb3dzQWx0LFxuICBmYUdsb2JlLFxuICBmYVZvbHVtZU11dGUsXG4gIGZhQmFycyxcbiAgZmFCcmllZmNhc2UsXG4gIGZhTWljcm9jaGlwLFxuICBmYUhlYXJ0YmVhdCxcbiAgZmFIaXN0b3J5LFxuICBmYU1pY3JvcGhvbmUsXG4gIGZhSWNlQ3JlYW0sXG4gIGZhTGlnaHRidWxiLFxuICBmYUtleSxcbiAgZmFMYXB0b3AsXG4gIGZhTGF5ZXJHcm91cCxcbiAgZmFMaXN0VWwsXG4gIGZhVm9sdW1lRG93bixcbiAgZmFNYXBQaW4sXG4gIGZhUGlsbHMsXG4gIGZhTW9iaWxlLFxuICBmYU1vYmlsZUFsdCxcbiAgZmFNb25leUJpbGwsXG4gIGZhTW90b3JjeWNsZSxcbiAgZmFTdGlja3lOb3RlLFxuICBmYUVsbGlwc2lzVixcbiAgZmFMdW5ncyxcbiAgZmFDYXNoUmVnaXN0ZXIsXG4gIGZhUGFwZXJQbGFuZSxcbiAgZmFQYXBlcmNsaXAsXG4gIGZhRGVza3RvcCxcbiAgZmFQYXVzZSxcbiAgZmFQZXJjZW50LFxuICBmYVBpZ2d5QmFuayxcbiAgZmFQbGF5LFxuICBmYU1vdXNlUG9pbnRlcixcbiAgZmFTd2ltbWluZ1Bvb2wsXG4gIGZhQmFuLFxuICBmYVRhZyxcbiAgZmFTaGllbGQsXG4gIGZhUXJjb2RlLFxuICBmYVJlY2VpcHQsXG4gIGZhUmVkbyxcbiAgZmFSdWxlcixcbiAgZmFVdGVuc2lscyxcbiAgZmFUc2hpcnQsXG4gIGZhU2hvcHBpbmdDYXJ0LFxuICBmYVNsaWRlcnNILFxuICBmYUdsYXNzV2hpc2tleSxcbiAgZmFTb3J0LFxuICBmYVRhY2hvbWV0ZXJBbHQsXG4gIGZhU3Bvb24sXG4gIGZhU3RhckhhbGYsXG4gIGZhU3RvcCxcbiAgZmFTdG9yZSxcbiAgZmFUaGVybW9tZXRlckhhbGYsXG4gIGZhVGh1bWJzRG93bixcbiAgZmFUaHVtYnNVcCxcbiAgZmFCb2x0LFxuICBmYVRpY2tldEFsdCxcbiAgZmFTaXRlbWFwLFxuICBmYUJhdGgsXG4gIGZhVW5kbyxcbiAgZmFVcGxvYWQsXG4gIGZhVXNlclBsdXMsXG4gIGZhVXNlck1pbnVzLFxuICBmYVZpZGVvLFxuICBmYUV4Y2xhbWF0aW9uQ2lyY2xlLFxuICBmYVdpZmksXG4gIGZhVGFibGUsXG4gIGZhVGFibGV0LFxuICBmYVRhYmxldEFsdCxcbiAgZmFBbWJ1bGFuY2Vcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuaW1wb3J0IHsgVG9vbHRpcFBvc2l0aW9uIH0gZnJvbSAnLi4vdHlwZXMvdG9vbHRpcC50eXBlcyc7XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJjaWFyeScgfCAnZGFuZ2VyJyB8ICdkYW5nZXItbGlnaHQnIHwgJ3dhcm5pbmcnIHwgJ2luZm8nIHwgJ2dyYXknIHwgJ3JlZCcgfCAnc3VjY2Vzcyc7XG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdidXR0b24nIHwgJ3N1Ym1pdCcgfCAncmVzZXQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2EtYnV0dG9uLmNvbXBvbmVudC5zY3NzJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5mdWxsLXdpZHRoXSc6ICdmdWxsV2lkdGgnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2FCdXR0b25Db21wb25lbnQge1xuICAvLyBQcm9waWVkYWRlcyBjb24gZmxleGliaWxpZGFkIG3DoXhpbWE6IHNvcG9ydGFuIGF0dHJpYnV0ZSB5IHByb3BlcnR5IGJpbmRpbmdcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdCdXR0b24nOyAvLyBNYW50ZW5lciBjb21vIEBJbnB1dCBzaW1wbGUgcGFyYSBzdHJpbmdzXG5cbiAgZ2V0IGNyaXRpY2FsSW5saW5lU3R5bGVzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRWYXJpYW50Q29sb3JzKCk7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZVBhZGRpbmcoKTtcbiAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZ2V0Rm9udFNpemUoKTtcbiAgICBcbiAgICByZXR1cm4gYFxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbSAhaW1wb3J0YW50O1xuICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6ICR7c2l6ZX0gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZX0gIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmJhY2tncm91bmR9ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6ICR7Y29sb3JzLmJvcmRlcn0gIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5jb2xvcn0gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xuICAgIGAucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFyaWFudENvbG9ycygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNmOGY5ZmEnLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzg1ODU4NScsXG4gICAgICAgIGNvbG9yOiAnIzg1ODU4NScsXG4gICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyNmOGY5ZmEnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy52YXJpYW50KSB7XG4gICAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzM2QUQ1NScsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzNkFENTUnLFxuICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnIzIzOUE1QydcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3NlY29uZGFyeSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDBhYjRhJyxcbiAgICAgICAgICBjb2xvcjogJyMwMGFiNGEnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyNlZmZjZjUnXG4gICAgICAgIH07XG4gICAgICBjYXNlICd0ZXJjaWFyeSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjYzdjYWNlJyxcbiAgICAgICAgICBjb2xvcjogJyMyZTNiNjAnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyNmNGY2ZjgnXG4gICAgICAgIH07XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmFlZGVkJyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0RDMzU0NScsXG4gICAgICAgICAgY29sb3I6ICcjREMzNTQ1JyxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICcjZmNkY2RjJ1xuICAgICAgICB9O1xuICAgICAgY2FzZSAnZGFuZ2VyLWxpZ2h0JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEQzM1NDUnLFxuICAgICAgICAgIGNvbG9yOiAnI0RDMzU0NScsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnI2ZmZmZmZidcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjRkZGM0NEJyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0ZGQzEwNycsXG4gICAgICAgICAgY29sb3I6ICcjODU2NDA0JyxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICcjRkZFQUE3J1xuICAgICAgICB9O1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNkYWU5ZmM0YScsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDdiZmYnLFxuICAgICAgICAgIGNvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnIzk4YzhmZjRhJ1xuICAgICAgICB9O1xuICAgICAgY2FzZSAnZ3JheSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyM3Nzc3NzcnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNzc3Nzc3JyxcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyM1QzVDNUMnXG4gICAgICAgIH07XG4gICAgICBjYXNlICdyZWQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjREMzNTQ1JyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0RDMzU0NScsXG4gICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICcjQzgyMzMzJ1xuICAgICAgICB9O1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNEM0Y3RTMnLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDBhYjRhJyxcbiAgICAgICAgICBjb2xvcjogJyMwMGFiNGEnLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJyNDMEYwRDAnXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjMzZBRDU1JyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzM2QUQ1NScsXG4gICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICcjMjM5QTVDJ1xuICAgICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2l6ZVBhZGRpbmcoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSAnc20nOiByZXR1cm4gJzZweCA4cHgnO1xuICAgICAgY2FzZSAnbGcnOiByZXR1cm4gJzEycHggMjRweCc7XG4gICAgICBkZWZhdWx0OiByZXR1cm4gJzhweCAxMnB4JztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEZvbnRTaXplKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgIGNhc2UgJ3NtJzogcmV0dXJuICcxMnB4JztcbiAgICAgIGNhc2UgJ2xnJzogcmV0dXJuICcxNnB4JztcbiAgICAgIGRlZmF1bHQ6IHJldHVybiAnMTNweCc7XG4gICAgfVxuICB9XG4gIFxuICAvLyBQcm9waWVkYWRlcyBjb24gc2V0dGVycy9nZXR0ZXJzIHBhcmEgZmxleGliaWxpZGFkIG3DoXhpbWFcbiAgcHJpdmF0ZSBfdmFyaWFudDogQnV0dG9uVmFyaWFudCA9ICdwcmltYXJ5JztcbiAgcHJpdmF0ZSBfc2l6ZTogQnV0dG9uU2l6ZSA9ICdtZCc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3R5cGU6IEJ1dHRvblR5cGUgPSAnYnV0dG9uJztcbiAgcHJpdmF0ZSBfaWNvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIHByaXZhdGUgX2ljb25Pbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Rvb2x0aXA/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Rvb2x0aXBQb3NpdGlvbjogVG9vbHRpcFBvc2l0aW9uID0gJ3RvcCc7XG4gIHByaXZhdGUgX25vQW5pbWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0b29sdGlwKHZhbHVlOiBzdHJpbmcgfCBhbnkpIHtcbiAgICB0aGlzLl90b29sdGlwID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvb2x0aXAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0b29sdGlwUG9zaXRpb24odmFsdWU6IFRvb2x0aXBQb3NpdGlvbiB8IGFueSkge1xuICAgIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbiA9IHZhbHVlIHx8ICd0b3AnO1xuICB9XG4gIGdldCB0b29sdGlwUG9zaXRpb24oKTogVG9vbHRpcFBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcFBvc2l0aW9uO1xuICB9XG5cbiAgLy8gRGV0ZXJtaW5hciBzaSBlbCB0b29sdGlwIG5lY2VzaXRhIG3Dumx0aXBsZXMgbMOtbmVhc1xuICBnZXQgaXNMb25nVG9vbHRpcCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMudG9vbHRpcCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIENvbnNpZGVyYXIgdGV4dG8gbGFyZ28gc2kgdGllbmUgbcOhcyBkZSA2MCBjYXJhY3RlcmVzIG8gY29udGllbmUgc2FsdG9zIGRlIGzDrW5lYVxuICAgIC8vIDYwIGNhcmFjdGVyZXMgZXMgYXByb3hpbWFkYW1lbnRlIGxvIHF1ZSBjYWJlIGVuIDM1MHB4IGNvbiBmb250LXNpemUgMTJweFxuICAgIHJldHVybiB0aGlzLnRvb2x0aXAubGVuZ3RoID4gNjAgfHwgdGhpcy50b29sdGlwLmluY2x1ZGVzKCdcXG4nKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YXJpYW50KHZhbHVlOiBCdXR0b25WYXJpYW50IHwgYW55KSB7XG4gICAgdGhpcy5fdmFyaWFudCA9IHZhbHVlIHx8ICdwcmltYXJ5JztcbiAgfVxuICBnZXQgdmFyaWFudCgpOiBCdXR0b25WYXJpYW50IHtcbiAgICByZXR1cm4gdGhpcy5fdmFyaWFudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbHVlOiBCdXR0b25TaXplIHwgYW55KSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlIHx8ICdtZCc7XG4gIH1cbiAgZ2V0IHNpemUoKTogQnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnVsbFdpZHRoKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fZnVsbFdpZHRoID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgZnVsbFdpZHRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWx1ZTogQnV0dG9uVHlwZSB8IGFueSkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCAnYnV0dG9uJztcbiAgfVxuICBnZXQgdHlwZSgpOiBCdXR0b25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKHZhbHVlOiBzdHJpbmcgfCBhbnkpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWx1ZTogJ2xlZnQnIHwgJ3JpZ2h0JyB8IGFueSkge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWUgfHwgJ2xlZnQnO1xuICB9XG4gIGdldCBwb3NpdGlvbigpOiAnbGVmdCcgfCAncmlnaHQnIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaWNvbk9ubHkodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9pY29uT25seSA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGljb25Pbmx5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pY29uT25seTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBub0FuaW1hdGUodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9ub0FuaW1hdGUgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBub0FuaW1hdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25vQW5pbWF0ZTtcbiAgfVxuXG5cbiAgQFZpZXdDaGlsZCgnYnV0dG9uVGV4dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBidXR0b25UZXh0ITogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvLyBJY29ubyBkZSBzcGlubmVyIHBhcmEgZWwgZXN0YWRvIGxvYWRpbmdcbiAgcmVhZG9ubHkgc3Bpbm5lckljb24gPSBmYVNwaW5uZXI7XG5cbiAgLy8gTcOpdG9kbyBwYXJhIG9idGVuZXIgZWwgaWNvbm8gYmFzYWRvIGVuIGVsIHN0cmluZ1xuICBnZXQgaWNvbkRlZmluaXRpb24oKTogSWNvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICAgIGlmICghdGhpcy5pY29uKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIFxuICAgIC8vIFByaW1lcm8gaW50ZW50YSBjb24gZWwgbWFwZW8gbG9jYWwgKG3DoXMgcsOhcGlkbylcbiAgICBjb25zdCBsb2NhbEljb25NYXA6IHsgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb24gfSA9IHtcbiAgICAgIC8vIEljb25vcyBiw6FzaWNvcyAoc29saWQgcG9yIGRlZmVjdG8pXG4gICAgICAnc3Bpbm5lcic6IGZhU3Bpbm5lcixcbiAgICAgICdkb3dubG9hZCc6IGZhRG93bmxvYWQsXG4gICAgICAndHJhc2gnOiBmYVRyYXNoLFxuICAgICAgJ3NoYXJlJzogZmFTaGFyZSxcbiAgICAgICdwcmludCc6IGZhUHJpbnQsXG4gICAgICAnaGVhcnQnOiBmYUhlYXJ0LFxuICAgICAgJ2hvbWUnOiBmYUhvbWUsXG4gICAgICAndXNlcic6IGZhVXNlcixcbiAgICAgICdjb2cnOiBmYUNvZyxcbiAgICAgICdzZWFyY2gnOiBmYVNlYXJjaCxcbiAgICAgICdzdGFyJzogZmFTdGFyLFxuICAgICAgJ2VkaXQnOiBmYUVkaXQsXG4gICAgICAnc2F2ZSc6IGZhU2F2ZSxcbiAgICAgICdwbHVzJzogZmFQbHVzLFxuICAgICAgJ21pbnVzJzogZmFNaW51cyxcbiAgICAgICdjaGVjayc6IGZhQ2hlY2ssXG4gICAgICAndGltZXMnOiBmYVRpbWVzLFxuICAgICAgJ2V5ZSc6IGZhRXllLFxuICAgICAgJ2V5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXG4gICAgICAnbG9jayc6IGZhTG9jayxcbiAgICAgICd1bmxvY2snOiBmYVVubG9jayxcbiAgICAgICdiZWxsJzogZmFCZWxsLFxuICAgICAgJ2VudmVsb3BlJzogZmFFbnZlbG9wZSxcbiAgICAgICdwaG9uZSc6IGZhUGhvbmUsXG4gICAgICAnbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcbiAgICAgICdjYWxlbmRhcic6IGZhQ2FsZW5kYXIsXG4gICAgICAnY2xvY2snOiBmYUNsb2NrLFxuICAgICAgJ2luZm8nOiBmYUluZm8sXG4gICAgICAnZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgICAncXVlc3Rpb24nOiBmYVF1ZXN0aW9uLFxuICAgICAgJ2NoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXG4gICAgICAnY2hldnJvbi11cCc6IGZhQ2hldnJvblVwLFxuICAgICAgJ2NoZXZyb24tbGVmdCc6IGZhQ2hldnJvbkxlZnQsXG4gICAgICAnY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxuICAgICAgJ2Fycm93LWxlZnQnOiBmYUFycm93TGVmdCxcbiAgICAgICdhcnJvdy1yaWdodCc6IGZhQXJyb3dSaWdodCxcbiAgICAgICdhcnJvdy11cCc6IGZhQXJyb3dVcCxcbiAgICAgICdhcnJvdy1kb3duJzogZmFBcnJvd0Rvd24sXG4gICAgICAncGVuY2lsJzogZmFQZW5jaWwsXG4gICAgICAnYW5nbGUtZG91YmxlLWxlZnQnOiBmYUFuZ2xlRG91YmxlTGVmdCxcbiAgICAgICdhbmdsZS1sZWZ0JzogZmFBbmdsZUxlZnQsXG4gICAgICAnYW5nbGUtcmlnaHQnOiBmYUFuZ2xlUmlnaHQsXG4gICAgICAnYW5nbGUtZG91YmxlLXJpZ2h0JzogZmFBbmdsZURvdWJsZVJpZ2h0LFxuICAgICAgJ3RhYmxlJzogZmFUYWJsZSxcbiAgICAgICd0aC1sYXJnZSc6IGZhVGhMYXJnZSxcbiAgICAgICd1c2Vycyc6IGZhVXNlcnMsXG4gICAgICAndW5pdmVyc2FsLWFjY2Vzcyc6IGZhVW5pdmVyc2FsQWNjZXNzLFxuICAgICAgJ3J1bm5pbmcnOiBmYVJ1bm5pbmcsXG4gICAgICAnaW1hZ2UnOiBmYUltYWdlLFxuICAgICAgJ2NhbGVuZGFyLWFsdCc6IGZhQ2FsZW5kYXJBbHQsXG4gICAgICAnY2hhcnQtbGluZSc6IGZhQ2hhcnRMaW5lLFxuICAgICAgJ2FwcGxlLWFsdCc6IGZhQXBwbGVBbHQsXG4gICAgICAncm9ib3QnOiBmYVJvYm90LFxuICAgICAgJ3Nob3BwaW5nLWJhZyc6IGZhU2hvcHBpbmdCYWcsXG4gICAgICAnYmFsYW5jZS1zY2FsZSc6IGZhQmFsYW5jZVNjYWxlLFxuICAgICAgJ2JhdHRlcnktdGhyZWUtcXVhcnRlcnMnOiBmYUJhdHRlcnlUaHJlZVF1YXJ0ZXJzLFxuICAgICAgJ2JhdHRlcnktcXVhcnRlcic6IGZhQmF0dGVyeVF1YXJ0ZXIsXG4gICAgICAnYmF0dGVyeS1lbXB0eSc6IGZhQmF0dGVyeUVtcHR5LFxuICAgICAgJ2JlbGwtc2xhc2gnOiBmYUJlbGxTbGFzaCxcbiAgICAgICdib29rbWFyayc6IGZhQm9va21hcmssXG4gICAgICAnYm93bC1mb29kJzogZmFCb3dsRm9vZCxcbiAgICAgICdib3gnOiBmYUJveCxcbiAgICAgICdidXMnOiBmYUJ1cyxcbiAgICAgICdiaXJ0aGRheS1jYWtlJzogZmFCaXJ0aGRheUNha2UsXG4gICAgICAnY2FsZW5kYXItZGF5JzogZmFDYWxlbmRhckRheSxcbiAgICAgICdmaWxlJzogZmFGaWxlLFxuICAgICAgJ2ZsYXNrJzogZmFGbGFzayxcbiAgICAgICdjb29raWUtYml0ZSc6IGZhQ29va2llQml0ZSxcbiAgICAgICdzcHJheS1jYW4nOiBmYVNwcmF5Q2FuLFxuICAgICAgJ3NvYXAnOiBmYVNvYXAsXG4gICAgICAnZXhwYW5kJzogZmFFeHBhbmQsXG4gICAgICAnY2xvdWQnOiBmYUNsb3VkLFxuICAgICAgJ2NvbW1lbnQnOiBmYUNvbW1lbnQsXG4gICAgICAnZmlsZS11cGxvYWQnOiBmYUZpbGVVcGxvYWQsXG4gICAgICAnZWxsaXBzaXMtaCc6IGZhRWxsaXBzaXNILFxuICAgICAgJ3BsYW5lJzogZmFQbGFuZSxcbiAgICAgICdncmFkdWF0aW9uLWNhcCc6IGZhR3JhZHVhdGlvbkNhcCxcbiAgICAgICdmaWxlLWV4Y2VsJzogZmFGaWxlRXhjZWwsXG4gICAgICAnc2lnbi1vdXQtYWx0JzogZmFTaWduT3V0QWx0LFxuICAgICAgJ3NtaWxlJzogZmFTbWlsZSxcbiAgICAgICdmcm93bic6IGZhRnJvd24sXG4gICAgICAnbWFzayc6IGZhTWFzayxcbiAgICAgICdib3gtb3Blbic6IGZhQm94T3BlbixcbiAgICAgICdzZWVkbGluZyc6IGZhU2VlZGxpbmcsXG4gICAgICAndm9sdW1lLXVwJzogZmFWb2x1bWVVcCxcbiAgICAgICdleHBhbmQtYXJyb3dzLWFsdCc6IGZhRXhwYW5kQXJyb3dzQWx0LFxuICAgICAgJ3ZvbHVtZS1tdXRlJzogZmFWb2x1bWVNdXRlLFxuICAgICAgJ2JhcnMnOiBmYUJhcnMsXG4gICAgICAnYnJpZWZjYXNlJzogZmFCcmllZmNhc2UsXG4gICAgICAnbWljcm9jaGlwJzogZmFNaWNyb2NoaXAsXG4gICAgICAnaGVhcnRiZWF0JzogZmFIZWFydGJlYXQsXG4gICAgICAnaGlzdG9yeSc6IGZhSGlzdG9yeSxcbiAgICAgICdtaWNyb3Bob25lJzogZmFNaWNyb3Bob25lLFxuICAgICAgJ2xpZ2h0YnVsYic6IGZhTGlnaHRidWxiLFxuICAgICAgJ2tleSc6IGZhS2V5LFxuICAgICAgJ2xheWVyLWdyb3VwJzogZmFMYXllckdyb3VwLFxuICAgICAgJ2xpc3QtdWwnOiBmYUxpc3RVbCxcbiAgICAgICd2b2x1bWUtZG93bic6IGZhVm9sdW1lRG93bixcbiAgICAgICdwaWxscyc6IGZhUGlsbHMsXG4gICAgICAnbW9iaWxlJzogZmFNb2JpbGUsXG4gICAgICAnbW9iaWxlLWFsdCc6IGZhTW9iaWxlQWx0LFxuICAgICAgJ21vbmV5LWJpbGwnOiBmYU1vbmV5QmlsbCxcbiAgICAgICdzdGlja3ktbm90ZSc6IGZhU3RpY2t5Tm90ZSxcbiAgICAgICdlbGxpcHNpcy12JzogZmFFbGxpcHNpc1YsXG4gICAgICAnbHVuZ3MnOiBmYUx1bmdzLFxuICAgICAgJ2Nhc2gtcmVnaXN0ZXInOiBmYUNhc2hSZWdpc3RlcixcbiAgICAgICdwYXBlci1wbGFuZSc6IGZhUGFwZXJQbGFuZSxcbiAgICAgICdkZXNrdG9wJzogZmFEZXNrdG9wLFxuICAgICAgJ2NoYXJ0LXBpZSc6IGZhQ2hhcnRQaWUsXG4gICAgICAnbW91c2UtcG9pbnRlcic6IGZhTW91c2VQb2ludGVyLFxuICAgICAgJ3N3aW1taW5nLXBvb2wnOiBmYVN3aW1taW5nUG9vbCxcbiAgICAgICdiYW4nOiBmYUJhbixcbiAgICAgICd0YWcnOiBmYVRhZyxcbiAgICAgICdzaGllbGQnOiBmYVNoaWVsZCxcbiAgICAgICdxcmNvZGUnOiBmYVFyY29kZSxcbiAgICAgICdyZWRvJzogZmFSZWRvLFxuICAgICAgJ3J1bGVyJzogZmFSdWxlcixcbiAgICAgICd1dGVuc2lscyc6IGZhVXRlbnNpbHMsXG4gICAgICAndHNoaXJ0JzogZmFUc2hpcnQsXG4gICAgICAnc2xpZGVycy1oJzogZmFTbGlkZXJzSCxcbiAgICAgICdnbGFzcy13aGlza2V5JzogZmFHbGFzc1doaXNrZXksXG4gICAgICAnc29ydCc6IGZhU29ydCxcbiAgICAgICd0YWNob21ldGVyLWFsdCc6IGZhVGFjaG9tZXRlckFsdCxcbiAgICAgICdzcG9vbic6IGZhU3Bvb24sXG4gICAgICAnc3RvcmUnOiBmYVN0b3JlLFxuICAgICAgJ3RhYmxldCc6IGZhVGFibGV0LFxuICAgICAgJ3RhYmxldC1hbHQnOiBmYVRhYmxldEFsdCxcbiAgICAgICd0aGVybW9tZXRlci1oYWxmJzogZmFUaGVybW9tZXRlckhhbGYsXG4gICAgICAnYm9sdCc6IGZhQm9sdCxcbiAgICAgICd0aWNrZXQtYWx0JzogZmFUaWNrZXRBbHQsXG4gICAgICAnc2l0ZW1hcCc6IGZhU2l0ZW1hcCxcbiAgICAgICdiYXRoJzogZmFCYXRoLFxuICAgICAgXG4gICAgICAvLyBOdWV2b3MgaWNvbm9zIGFncmVnYWRvc1xuICAgICAgJ2dyaWQnOiBmYVRoTGFyZ2UsXG4gICAgICAnZ3JvdXAnOiBmYVVzZXJzLFxuICAgICAgJ2xpbmsnOiBmYUxpbmssXG4gICAgICAnY29weSc6IGZhQ29weSxcbiAgICAgICdhY2Nlc3NpYmlsaXR5LWFsdCc6IGZhVW5pdmVyc2FsQWNjZXNzLFxuICAgICAgJ2FjY2Vzc2liaWxpdHknOiBmYVVuaXZlcnNhbEFjY2VzcyxcbiAgICAgICdhY3Rpdml0eSc6IGZhUnVubmluZyxcbiAgICAgICdhZGQtZG9jdW1lbnQnOiBmYUZpbGUsXG4gICAgICAnYWRkLWltYWdlJzogZmFJbWFnZSxcblxuICAgICAgJ2FuYWx5dGljcyc6IGZhQ2hhcnRCYXIsXG4gICAgICAnYW5hbHl0aWNzLXJhaXNlJzogZmFDaGFydExpbmUsXG4gICAgICAnYXBwbGUnOiBmYUFwcGxlQWx0LFxuICAgICAgJ2Fzc2lzdGFudCc6IGZhUm9ib3QsXG4gICAgICAnYmFnLW9mLWZsb3VyJzogZmFHaWZ0LFxuICAgICAgJ2JhZy13aXRoLWdpZnQnOiBmYUdpZnQsXG4gICAgICAnYmFncyc6IGZhU2hvcHBpbmdCYWcsXG4gICAgICAnYmFsYW5jZSc6IGZhQmFsYW5jZVNjYWxlLFxuICAgICAgJ2JhdHRlcnktYWx0JzogZmFCYXR0ZXJ5VGhyZWVRdWFydGVycyxcbiAgICAgICdiYXR0ZXJ5LWNoYXJnaW5pZyc6IGZhQmF0dGVyeUhhbGYsXG4gICAgICAnYmF0dGVyeS1mdWxsJzogZmFCYXR0ZXJ5SGFsZixcbiAgICAgICdiYXR0ZXJ5LWhhbGYnOiBmYUJhdHRlcnlIYWxmLFxuICAgICAgJ2JhdHRlcnktbG93JzogZmFCYXR0ZXJ5UXVhcnRlcixcbiAgICAgICdiZWxsLW5ldy1tZXNzYWdlJzogZmFCZWxsLFxuICAgICAgJ2JlbGwtb2ZmJzogZmFCZWxsU2xhc2gsXG4gICAgICAnYmljeWNsZSc6IGZhQmljeWNsZSxcbiAgICAgICdib29rbWFyay1zaW1wbGUnOiBmYUJvb2ttYXJrLFxuICAgICAgJ2Jvd2wnOiBmYUJvd2xGb29kLFxuXG4gICAgICAnYnVzLWZyb250JzogZmFCdXMsXG4gICAgICAnYnV0dGVyJzogZmFCaXJ0aGRheUNha2UsXG4gICAgICAnY2FrZSc6IGZhQmlydGhkYXlDYWtlLFxuICAgICAgJ2NhbGN1bGF0b3InOiBmYUNhbGN1bGF0b3IsXG4gICAgICAnY2FsZW5kYXItaGlzdG9yeS1hbHQnOiBmYUNhbGVuZGFyRGF5LFxuICAgICAgJ2NhbGVuZGFyLWhpc3RvcnknOiBmYUNhbGVuZGFyRGF5LFxuXG4gICAgICAnY2FtZXJhJzogZmFDYW1lcmEsXG5cbiAgICAgICdjYW5keSc6IGZhQ29va2llQml0ZSxcbiAgICAgICdjYXJldC1kb3duJzogZmFDYXJldERvd24sXG4gICAgICAnY2FyZXQtbGVmdCc6IGZhQ2FyZXRMZWZ0LFxuICAgICAgJ2NhcmV0LXJpZ2h0JzogZmFDYXJldFJpZ2h0LFxuICAgICAgJ2NhcmV0LXVwJzogZmFDYXJldFVwLFxuICAgICAgJ2NlbGxzLWRvY3VtZW50JzogZmFGaWxlLFxuICAgICAgJ2NoYXJ0LWJhcic6IGZhQ2hhcnRCYXIsXG4gICAgICAnY2hhcnQtcGllLXNsaWNlJzogZmFDaGFydFBpZSxcbiAgICAgICdjaGF0LWNpcmNsZS10ZXh0JzogZmFDb21tZW50cyxcbiAgICAgICdjaGVtaWNhbC1leHBlcmltZW50JzogZmFGbGFzayxcbiAgICAgICdjaGVtaWNhbC10ZXN0JzogZmFNaWNyb3Njb3BlLFxuICAgICAgJ2Nob2NvbGF0ZS1iYXInOiBmYUNvb2tpZUJpdGUsXG4gICAgICAnY2xlYW5lcic6IGZhU3ByYXlDYW4sXG4gICAgICAnY2xlYW5lci1kaXNwZW5zZXInOiBmYVNvYXAsXG4gICAgICAnY2xvc2UtZnVsbC1zY3JlZW4nOiBmYUV4cGFuZCxcbiAgICAgICdjbG91ZC1vZmZsaW5lJzogZmFDbG91ZCxcbiAgICAgICdjbG91ZC1wcm9ibGVtJzogZmFDbG91ZCxcbiAgICAgICdjb2ZmZWUnOiBmYUNvZmZlZSxcbiAgICAgICdjb21tZW50cyc6IGZhQ29tbWVudCxcbiAgICAgICdjb29raWUnOiBmYUNvb2tpZUJpdGUsXG4gICAgICAnY3JlZGl0LWNhcmQnOiBmYUNyZWRpdENhcmQsXG4gICAgICAnY3JvcC1hbHQnOiBmYUNyb3BBbHQsXG4gICAgICAnY3JvcCc6IGZhQ3JvcCxcbiAgICAgICdjcm9wLWhlYWx0aCc6IGZhQ3JvcCxcbiAgICAgICdkZWxpdmVyeS1ndXknOiBmYVRydWNrLFxuICAgICAgJ2RldGVyZ2VudCc6IGZhU29hcCxcbiAgICAgICdkb2N1bWVudC11cGxvYWQnOiBmYUZpbGVVcGxvYWQsXG4gICAgICAnZG90cy10aHJlZSc6IGZhRWxsaXBzaXNILFxuICAgICAgJ2Rvd25sb2FkLWFsdCc6IGZhRG93bmxvYWQsXG4gICAgICAnZHJvbic6IGZhUGxhbmUsXG4gICAgICAnZWR1Y2F0aW9uJzogZmFHcmFkdWF0aW9uQ2FwLFxuICAgICAgJ2VudmVsb3BlLW5ldy1tZXNzYWdlJzogZmFFbnZlbG9wZSxcbiAgICAgICdlcXVhbHMnOiBmYUVxdWFscyxcbiAgICAgICdlcmFzZXInOiBmYUVyYXNlcixcbiAgICAgICdleGNlbCc6IGZhRmlsZUV4Y2VsLFxuICAgICAgJ2V4Y2VsLWRvd25sb2FkJzogZmFGaWxlRG93bmxvYWQsXG4gICAgICAnZXhpdCc6IGZhU2lnbk91dEFsdCxcbiAgICAgICdmYWNlLXNhdGlzZmllZCc6IGZhU21pbGUsXG4gICAgICAnZmFjZS1kaXNzYXRpc2ZpZWQnOiBmYUZyb3duLFxuICAgICAgJ2ZhY2UtbWFzayc6IGZhTWFzayxcbiAgICAgICdmYWNlYm9vayc6IGZhU2hhcmUsXG4gICAgICAnZmFzdC10cnVjayc6IGZhVHJ1Y2ssXG5cbiAgICAgICdmYXZvcml0ZS1tZWRhbCc6IGZhTWVkYWwsXG4gICAgICAnZmF2b3JpdGUtcGFja2FnZSc6IGZhQm94T3BlbixcbiAgICAgICdmZWVkZXInOiBmYVNlZWRsaW5nLFxuICAgICAgJ2ZpbGUtZG93bmxvYWQnOiBmYUZpbGVEb3dubG9hZCxcbiAgICAgICdmaWx0ZXInOiBmYUZpbHRlcixcbiAgICAgICdmaW5nZXJwcmludCc6IGZhRmluZ2VycHJpbnQsXG4gICAgICAnZmlyZSc6IGZhRmlyZSxcbiAgICAgICdmaXJld29ya3MnOiBmYUZpcmUsXG4gICAgICAnZmlyc3QtcGxhY2UnOiBmYVRyb3BoeSxcbiAgICAgICdmaXNoJzogZmFGaXNoLFxuICAgICAgJ2ZsYWcnOiBmYUZsYWcsXG4gICAgICAnZm9yd2FyZCc6IGZhRm9yd2FyZCxcbiAgICAgICdmdWxsLXZvbHVtZSc6IGZhVm9sdW1lVXAsXG4gICAgICAnZnVsbC1zY3JlZW4nOiBmYUV4cGFuZEFycm93c0FsdCxcbiAgICAgICdnZWFyJzogZmFDb2csXG4gICAgICAnZ2lmdCc6IGZhR2lmdCxcbiAgICAgICdnaWZ0LWRlbGl2ZXJ5JzogZmFHaWZ0LFxuICAgICAgJ2dsb2JlJzogZmFHbG9iZSxcbiAgICAgICdncm91cC1iaWdnZXInOiBmYVVzZXJzLFxuICAgICAgJ2hhbGYtdm9sdW1lJzogZmFWb2x1bWVNdXRlLFxuICAgICAgJ2hhbWJ1cmdlcic6IGZhQmFycyxcbiAgICAgICdoYW5kYmFnJzogZmFCcmllZmNhc2UsXG4gICAgICAnaGFwcHktY2hpcCc6IGZhTWljcm9jaGlwLFxuICAgICAgJ2hlYWx0aHknOiBmYUhlYXJ0YmVhdCxcbiAgICAgICdoaXN0b3J5LXRpbWUnOiBmYUhpc3RvcnksXG4gICAgICAnaHlkcm9waG9uZSc6IGZhTWljcm9waG9uZSxcbiAgICAgICdpY2UtY3JlYW0nOiBmYUljZUNyZWFtLFxuICAgICAgJ2lkZWEnOiBmYUxpZ2h0YnVsYixcblxuICAgICAgJ2luc3RhZ3JhbSc6IGZhU2hhcmUsXG4gICAgICAnaW50ZWxsaWdlbmNlLWEtaSc6IGZhUm9ib3QsXG4gICAgICAnbGFwdG9wJzogZmFMYXB0b3AsXG4gICAgICAnbGF5ZXInOiBmYUxheWVyR3JvdXAsXG4gICAgICAnbGlzdC1idWxsZXRlZCc6IGZhTGlzdFVsLFxuICAgICAgJ2xvdy12b2x1bWUnOiBmYVZvbHVtZURvd24sXG4gICAgICAnbWFjaGluZS1sZWFybmluZy1tb2RlbCc6IGZhUm9ib3QsXG4gICAgICAnbWFnbmlmeWluZy1nbGFzcyc6IGZhU2VhcmNoLFxuICAgICAgJ21hcCc6IGZhTWFwUGluLFxuICAgICAgJ21hcC1waW4nOiBmYU1hcFBpbixcbiAgICAgICdtZWRhbCc6IGZhTWVkYWwsXG4gICAgICAnbWVkaWNpbmUtYWxlcnQnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgICAnbWVkaWNpbmUnOiBmYVBpbGxzLFxuICAgICAgJ21pY3JvLWNoaXAtYWx0JzogZmFNaWNyb2NoaXAsXG4gICAgICAnbWljcm8tY2hpcCc6IGZhTWljcm9jaGlwLFxuICAgICAgJ21pY3Jvc2NvcGUnOiBmYU1pY3Jvc2NvcGUsXG4gICAgICAnbW9iaWxlLWhvcml6b250YWwnOiBmYU1vYmlsZSxcbiAgICAgICdtb2JpbGUtdmVydGljYWwnOiBmYU1vYmlsZUFsdCxcbiAgICAgICdtb25leSc6IGZhTW9uZXlCaWxsLFxuICAgICAgJ21vdG9yY3ljbGUnOiBmYU1vdG9yY3ljbGUsXG4gICAgICAnbm90ZS1wZW5jaWwnOiBmYVN0aWNreU5vdGUsXG4gICAgICAnb3BlbmxvY2snOiBmYVVubG9jayxcbiAgICAgICdvdmVyZmxvdy1tZW51LXZlcnRpY2FsJzogZmFFbGxpcHNpc1YsXG4gICAgICAnb3h5Z2VuJzogZmFMdW5ncyxcbiAgICAgICdwLW8tcyc6IGZhQ2FzaFJlZ2lzdGVyLFxuXG4gICAgICAncGFwZXItcGxhbmUtcmlnaHQnOiBmYVBhcGVyUGxhbmUsXG4gICAgICAncGFwZXJjbGlwJzogZmFQYXBlcmNsaXAsXG4gICAgICAncGF1c2UnOiBmYVBhdXNlLFxuICAgICAgJ3BlcmNlbnQnOiBmYVBlcmNlbnQsXG4gICAgICAncGlnZ3ktYmFuayc6IGZhUGlnZ3lCYW5rLFxuICAgICAgJ3BpbGwnOiBmYVBpbGxzLFxuICAgICAgJ3BsYWNlLWxvY2F0aW9uJzogZmFNYXBNYXJrZXJBbHQsXG4gICAgICAncGxheSc6IGZhUGxheSxcbiAgICAgICdwb2ludGVyJzogZmFNb3VzZVBvaW50ZXIsXG4gICAgICAncG9pbnRlci1sb2NrJzogZmFNb3VzZVBvaW50ZXIsXG4gICAgICAncG9vbC1sYWRkZXInOiBmYVN3aW1taW5nUG9vbCxcbiAgICAgICdwb3N0LWhpc3RvcnknOiBmYUhpc3RvcnksXG4gICAgICAncG9zdGl0JzogZmFTdGlja3lOb3RlLFxuICAgICAgJ3Byb2hpYml0JzogZmFCYW4sXG4gICAgICAncHJvbW90aW9uJzogZmFUYWcsXG4gICAgICAncHJvdGVjdGlvbi1jaGVja2VkJzogZmFTaGllbGQsXG4gICAgICAncXInOiBmYVFyY29kZSxcbiAgICAgICdyZWNlaXB0JzogZmFSZWNlaXB0LFxuICAgICAgJ3JlY2VpcHQtY2hlY2tlZCc6IGZhUmVjZWlwdCxcblxuICAgICAgJ3JlbmV3JzogZmFSZWRvLFxuICAgICAgJ3JlcGVhdCc6IGZhUmVkbyxcbiAgICAgICdyZXBlYXQtcHVyY2hhc2UnOiBmYVJlZG8sXG4gICAgICAncnVjJzogZmFVc2VyLFxuICAgICAgJ3J1bGVyLWFsdCc6IGZhUnVsZXIsXG4gICAgICAnc2F1Y2UnOiBmYVV0ZW5zaWxzLFxuICAgICAgJ3NjYW4nOiBmYVFyY29kZSxcbiAgICAgICdzZWFyY2gtbGF5ZXJzJzogZmFTZWFyY2gsXG4gICAgICAnc2Vuc29yJzogZmFNaWNyb2NoaXAsXG4gICAgICAnc2V0dGluZ3MtYWx0JzogZmFDb2csXG4gICAgICAnc2hhcmUtbmV0d29yayc6IGZhU2hhcmUsXG4gICAgICAnc2hpcnQnOiBmYVRzaGlydCxcbiAgICAgICdzaG9wcGluZy1jYXJ0JzogZmFTaG9wcGluZ0NhcnQsXG4gICAgICAnc2hyaW1wJzogZmFGaXNoLFxuICAgICAgJ3NpZ24tb3V0JzogZmFTaWduT3V0QWx0LFxuICAgICAgJ3NsaWRlcnMtaG9yaXpvbnRhbCc6IGZhU2xpZGVyc0gsXG4gICAgICAnc29kYSc6IGZhR2xhc3NXaGlza2V5LFxuICAgICAgJ3NvcnQtYnknOiBmYVNvcnQsXG4gICAgICAnc291cC1kaXNwZW5zZXInOiBmYVV0ZW5zaWxzLFxuICAgICAgJ3NvdXAtbm9vZGxlcyc6IGZhVXRlbnNpbHMsXG4gICAgICAnc3BlZWRvbWV0ZXInOiBmYVRhY2hvbWV0ZXJBbHQsXG4gICAgICAnc3BvbmdlJzogZmFTcG9vbixcbiAgICAgICdzdGFyLWhhbGYnOiBmYVN0YXJIYWxmLFxuICAgICAgJ3N0b3AnOiBmYVN0b3AsXG4gICAgICAnc3RvcmVmcm9udCc6IGZhU3RvcmUsXG4gICAgICAnc3R5bGluZy1jcmVhbSc6IGZhU29hcCxcbiAgICAgICdzdWJzdHJhY3Qtdm9sdW1lJzogZmFWb2x1bWVNdXRlLFxuICAgICAgJ3RlbXBlcmF0dXJlJzogZmFUaGVybW9tZXRlckhhbGYsXG4gICAgICAndGh1bWJzLWRvd24nOiBmYVRodW1ic0Rvd24sXG4gICAgICAndGh1bWJzLXVwJzogZmFUaHVtYnNVcCxcbiAgICAgICd0aHVuZGVyJzogZmFCb2x0LFxuICAgICAgJ3RpY2tldCc6IGZhVGlja2V0QWx0LFxuICAgICAgJ3Rvb3RocGFzdGUnOiBmYVNvYXAsXG4gICAgICAndHJlZS12aWV3JzogZmFTaXRlbWFwLFxuICAgICAgJ3RyZW5kLWRvd24nOiBmYUNoYXJ0TGluZSxcbiAgICAgICd0cmVuZC11cCc6IGZhQ2hhcnRMaW5lLFxuICAgICAgJ3Ryb3BoeSc6IGZhVHJvcGh5LFxuICAgICAgJ3RydWNrJzogZmFUcnVjayxcbiAgICAgICd0dWInOiBmYUJhdGgsXG4gICAgICAndHdpdHRlcic6IGZhU2hhcmUsXG4gICAgICAndW5kbyc6IGZhVW5kbyxcbiAgICAgICd1cGxvYWQnOiBmYVVwbG9hZCxcbiAgICAgICd1c2VyLWF2YXRhcic6IGZhVXNlcixcbiAgICAgICd1c2VyLWFkZCc6IGZhVXNlclBsdXMsXG4gICAgICAndXNlci1wbHVzJzogZmFVc2VyUGx1cyxcbiAgICAgICd1c2VyLXN1YnN0cmFjdCc6IGZhVXNlck1pbnVzLFxuICAgICAgJ3VzZXItbWludXMnOiBmYVVzZXJNaW51cyxcbiAgICAgICd1c2VyLXdpdGgtY2FydCc6IGZhVXNlcixcbiAgICAgICd2aWRlbyc6IGZhVmlkZW8sXG4gICAgICAndmlkZW8tbGF5ZXInOiBmYVZpZGVvLFxuICAgICAgJ2V4Y2xhbWF0aW9uLWNpcmNsZSc6IGZhRXhjbGFtYXRpb25DaXJjbGUsXG4gICAgICAnd2FybmluZy1jaXJjbGUnOiBmYUV4Y2xhbWF0aW9uQ2lyY2xlLFxuICAgICAgJ3dhcm5pbmctdHJpYW5nbGUnOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgICAnd2hhdHNhcHAnOiBmYVNoYXJlLFxuICAgICAgJ3dpZmknOiBmYVdpZmksXG4gICAgICAnd2ktZmknOiBmYVdpZmksXG4gICAgICAnd2ktZmktb2ZmJzogZmFXaWZpLFxuICAgICAgJ3gnOiBmYVRpbWVzLFxuICAgICAgJ2Nsb3NlJzogZmFUaW1lcyxcbiAgICAgICd5b3V0dWJlJzogZmFTaGFyZSxcbiAgICAgIFxuICAgICAgLy8gVGFtYmnDqW4gc29wb3J0YSBmb3JtYXRvIGZhcyBmYS1cbiAgICAgICdmYXMgZmEtc3Bpbm5lcic6IGZhU3Bpbm5lcixcbiAgICAgICdmYXMgZmEtZG93bmxvYWQnOiBmYURvd25sb2FkLFxuICAgICAgJ2ZhcyBmYS10cmFzaCc6IGZhVHJhc2gsXG4gICAgICAnZmFzIGZhLXNoYXJlJzogZmFTaGFyZSxcbiAgICAgICdmYXMgZmEtcHJpbnQnOiBmYVByaW50LFxuICAgICAgJ2ZhcyBmYS1oZWFydCc6IGZhSGVhcnQsXG4gICAgICAnZmFzIGZhLWhvbWUnOiBmYUhvbWUsXG4gICAgICAnZmFzIGZhLXVzZXInOiBmYVVzZXIsXG4gICAgICAnZmFzIGZhLWNvZyc6IGZhQ29nLFxuICAgICAgJ2ZhcyBmYS1zZWFyY2gnOiBmYVNlYXJjaCxcbiAgICAgICdmYXMgZmEtc3Rhcic6IGZhU3RhcixcbiAgICAgICdmYXMgZmEtZWRpdCc6IGZhRWRpdCxcbiAgICAgICdmYXMgZmEtc2F2ZSc6IGZhU2F2ZSxcbiAgICAgICdmYXMgZmEtcGx1cyc6IGZhUGx1cyxcbiAgICAgICdmYXMgZmEtbWludXMnOiBmYU1pbnVzLFxuICAgICAgJ2ZhcyBmYS1jaGVjayc6IGZhQ2hlY2ssXG4gICAgICAnZmFzIGZhLXRpbWVzJzogZmFUaW1lcyxcbiAgICAgICdmYXMgZmEteCc6IGZhVGltZXMsXG4gICAgICAnZmFzIGZhLWNsb3NlJzogZmFUaW1lcyxcbiAgICAgICdmYXMgZmEtZXllJzogZmFFeWUsXG4gICAgICAnZmFzIGZhLWV5ZS1zbGFzaCc6IGZhRXllU2xhc2gsXG4gICAgICAnZmFzIGZhLWxvY2snOiBmYUxvY2ssXG4gICAgICAnZmFzIGZhLXVubG9jayc6IGZhVW5sb2NrLFxuICAgICAgJ2ZhcyBmYS1iZWxsJzogZmFCZWxsLFxuICAgICAgJ2ZhcyBmYS1lbnZlbG9wZSc6IGZhRW52ZWxvcGUsXG4gICAgICAnZmFzIGZhLXBob25lJzogZmFQaG9uZSxcbiAgICAgICdmYXMgZmEtbWFwLW1hcmtlci1hbHQnOiBmYU1hcE1hcmtlckFsdCxcbiAgICAgICdmYXMgZmEtY2FsZW5kYXInOiBmYUNhbGVuZGFyLFxuICAgICAgJ2ZhcyBmYS1jbG9jayc6IGZhQ2xvY2ssXG4gICAgICAnZmFzIGZhLWluZm8nOiBmYUluZm8sXG4gICAgICAnZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgICAgJ2ZhcyBmYS1xdWVzdGlvbic6IGZhUXVlc3Rpb24sXG4gICAgICAnZmFzIGZhLWNoZXZyb24tZG93bic6IGZhQ2hldnJvbkRvd24sXG4gICAgICAnZmFzIGZhLWNoZXZyb24tdXAnOiBmYUNoZXZyb25VcCxcbiAgICAgICdmYXMgZmEtY2hldnJvbi1sZWZ0JzogZmFDaGV2cm9uTGVmdCxcbiAgICAgICdmYXMgZmEtY2hldnJvbi1yaWdodCc6IGZhQ2hldnJvblJpZ2h0LFxuICAgICAgJ2ZhcyBmYS1hcnJvdy1sZWZ0JzogZmFBcnJvd0xlZnQsXG4gICAgICAnZmFzIGZhLWFycm93LXJpZ2h0JzogZmFBcnJvd1JpZ2h0LFxuICAgICAgJ2ZhcyBmYS1hcnJvdy11cCc6IGZhQXJyb3dVcCxcbiAgICAgICdmYXMgZmEtYXJyb3ctZG93bic6IGZhQXJyb3dEb3duLFxuICAgICAgJ2ZhcyBmYS1wZW5jaWwnOiBmYVBlbmNpbCxcbiAgICAgICdmYXMgZmEtYW5nbGUtZG91YmxlLWxlZnQnOiBmYUFuZ2xlRG91YmxlTGVmdCxcbiAgICAgICdmYXMgZmEtYW5nbGUtbGVmdCc6IGZhQW5nbGVMZWZ0LFxuICAgICAgJ2ZhcyBmYS1hbmdsZS1yaWdodCc6IGZhQW5nbGVSaWdodCxcbiAgICAgICdmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0JzogZmFBbmdsZURvdWJsZVJpZ2h0LFxuICAgICAgJ2ZhcyBmYS10YWJsZSc6IGZhVGFibGUsXG4gICAgICAnZmFzIGZhLXRoLWxhcmdlJzogZmFUaExhcmdlLFxuICAgICAgJ2ZhcyBmYS11c2Vycyc6IGZhVXNlcnMsXG4gICAgICAnZmFzIGZhLWxpbmsnOiBmYUxpbmssXG4gICAgICAnZmFzIGZhLWNvcHknOiBmYUNvcHksXG4gICAgICAnZmFzIGZhLXVuaXZlcnNhbC1hY2Nlc3MnOiBmYVVuaXZlcnNhbEFjY2VzcyxcbiAgICAgICdmYXMgZmEtcnVubmluZyc6IGZhUnVubmluZyxcbiAgICAgICdmYXMgZmEtaW1hZ2UnOiBmYUltYWdlLFxuICAgICAgJ2ZhcyBmYS1jYWxlbmRhci1hbHQnOiBmYUNhbGVuZGFyQWx0LFxuICAgICAgJ2ZhcyBmYS1jaGFydC1iYXInOiBmYUNoYXJ0QmFyLFxuICAgICAgJ2ZhcyBmYS1jaGFydC1saW5lJzogZmFDaGFydExpbmUsXG4gICAgICAnZmFzIGZhLWFwcGxlLWFsdCc6IGZhQXBwbGVBbHQsXG4gICAgICAnZmFzIGZhLXJvYm90JzogZmFSb2JvdCxcbiAgICAgICdmYXMgZmEtZ2lmdCc6IGZhR2lmdCxcbiAgICAgICdmYXMgZmEtc2hvcHBpbmctYmFnJzogZmFTaG9wcGluZ0JhZyxcbiAgICAgICdmYXMgZmEtYmFsYW5jZS1zY2FsZSc6IGZhQmFsYW5jZVNjYWxlLFxuICAgICAgJ2ZhcyBmYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzJzogZmFCYXR0ZXJ5VGhyZWVRdWFydGVycyxcbiAgICAgICdmYXMgZmEtYmF0dGVyeS1oYWxmJzogZmFCYXR0ZXJ5SGFsZixcbiAgICAgICdmYXMgZmEtYmF0dGVyeS1xdWFydGVyJzogZmFCYXR0ZXJ5UXVhcnRlcixcbiAgICAgICdmYXMgZmEtYmF0dGVyeS1lbXB0eSc6IGZhQmF0dGVyeUVtcHR5LFxuICAgICAgJ2ZhcyBmYS1iZWxsLXNsYXNoJzogZmFCZWxsU2xhc2gsXG4gICAgICAnZmFzIGZhLWJpY3ljbGUnOiBmYUJpY3ljbGUsXG4gICAgICAnZmFzIGZhLWJvb2ttYXJrJzogZmFCb29rbWFyayxcbiAgICAgICdmYXMgZmEtYm93bC1mb29kJzogZmFCb3dsRm9vZCxcbiAgICAgICdmYXMgZmEtYm94JzogZmFCb3gsXG4gICAgICAnZmFzIGZhLWJ1cyc6IGZhQnVzLFxuICAgICAgJ2ZhcyBmYS1iaXJ0aGRheS1jYWtlJzogZmFCaXJ0aGRheUNha2UsXG4gICAgICAnZmFzIGZhLWNhbGN1bGF0b3InOiBmYUNhbGN1bGF0b3IsXG4gICAgICAnZmFzIGZhLWNhbGVuZGFyLWRheSc6IGZhQ2FsZW5kYXJEYXksXG4gICAgICAnZmFzIGZhLWNhbWVyYSc6IGZhQ2FtZXJhLFxuICAgICAgJ2ZhcyBmYS1jYXJldC1kb3duJzogZmFDYXJldERvd24sXG4gICAgICAnZmFzIGZhLWNhcmV0LWxlZnQnOiBmYUNhcmV0TGVmdCxcbiAgICAgICdmYXMgZmEtY2FyZXQtcmlnaHQnOiBmYUNhcmV0UmlnaHQsXG4gICAgICAnZmFzIGZhLWNhcmV0LXVwJzogZmFDYXJldFVwLFxuICAgICAgJ2ZhcyBmYS1maWxlJzogZmFGaWxlLFxuICAgICAgJ2ZhcyBmYS1jaGFydC1waWUnOiBmYUNoYXJ0UGllLFxuICAgICAgJ2ZhcyBmYS1jb21tZW50cyc6IGZhQ29tbWVudHMsXG4gICAgICAnZmFzIGZhLWZsYXNrJzogZmFGbGFzayxcbiAgICAgICdmYXMgZmEtbWljcm9zY29wZSc6IGZhTWljcm9zY29wZSxcbiAgICAgICdmYXMgZmEtY29va2llLWJpdGUnOiBmYUNvb2tpZUJpdGUsXG4gICAgICAnZmFzIGZhLXNwcmF5LWNhbic6IGZhU3ByYXlDYW4sXG4gICAgICAnZmFzIGZhLXNvYXAnOiBmYVNvYXAsXG4gICAgICAnZmFzIGZhLWV4cGFuZCc6IGZhRXhwYW5kLFxuICAgICAgJ2ZhcyBmYS1jbG91ZCc6IGZhQ2xvdWQsXG4gICAgICAnZmFzIGZhLWNvZmZlZSc6IGZhQ29mZmVlLFxuICAgICAgJ2ZhcyBmYS1jb21tZW50JzogZmFDb21tZW50LFxuICAgICAgJ2ZhcyBmYS1jcmVkaXQtY2FyZCc6IGZhQ3JlZGl0Q2FyZCxcbiAgICAgICdmYXMgZmEtY3JvcCc6IGZhQ3JvcCxcbiAgICAgICdmYXMgZmEtY3JvcC1hbHQnOiBmYUNyb3BBbHQsXG4gICAgICAnZmFzIGZhLXRydWNrJzogZmFUcnVjayxcbiAgICAgICdmYXMgZmEtZmlsZS11cGxvYWQnOiBmYUZpbGVVcGxvYWQsXG4gICAgICAnZmFzIGZhLWVsbGlwc2lzLWgnOiBmYUVsbGlwc2lzSCxcbiAgICAgICdmYXMgZmEtcGxhbmUnOiBmYVBsYW5lLFxuICAgICAgJ2ZhcyBmYS1ncmFkdWF0aW9uLWNhcCc6IGZhR3JhZHVhdGlvbkNhcCxcbiAgICAgICdmYXMgZmEtZXF1YWxzJzogZmFFcXVhbHMsXG4gICAgICAnZmFzIGZhLWVyYXNlcic6IGZhRXJhc2VyLFxuICAgICAgJ2ZhcyBmYS1maWxlLWV4Y2VsJzogZmFGaWxlRXhjZWwsXG4gICAgICAnZmFzIGZhLWZpbGUtZG93bmxvYWQnOiBmYUZpbGVEb3dubG9hZCxcbiAgICAgICdmYXMgZmEtc2lnbi1vdXQtYWx0JzogZmFTaWduT3V0QWx0LFxuICAgICAgJ2ZhcyBmYS1zbWlsZSc6IGZhU21pbGUsXG4gICAgICAnZmFzIGZhLWZyb3duJzogZmFGcm93bixcbiAgICAgICdmYXMgZmEtbWFzayc6IGZhTWFzayxcbiAgICAgICdmYXMgZmEtbWVkYWwnOiBmYU1lZGFsLFxuICAgICAgJ2ZhcyBmYS1ib3gtb3Blbic6IGZhQm94T3BlbixcbiAgICAgICdmYXMgZmEtc2VlZGxpbmcnOiBmYVNlZWRsaW5nLFxuICAgICAgJ2ZhcyBmYS1maWx0ZXInOiBmYUZpbHRlcixcbiAgICAgICdmYXMgZmEtZmluZ2VycHJpbnQnOiBmYUZpbmdlcnByaW50LFxuICAgICAgJ2ZhcyBmYS1maXJlJzogZmFGaXJlLFxuICAgICAgJ2ZhcyBmYS10cm9waHknOiBmYVRyb3BoeSxcbiAgICAgICdmYXMgZmEtZmlzaCc6IGZhRmlzaCxcbiAgICAgICdmYXMgZmEtZmxhZyc6IGZhRmxhZyxcbiAgICAgICdmYXMgZmEtZm9yd2FyZCc6IGZhRm9yd2FyZCxcbiAgICAgICdmYXMgZmEtdm9sdW1lLXVwJzogZmFWb2x1bWVVcCxcbiAgICAgICdmYXMgZmEtZXhwYW5kLWFycm93cy1hbHQnOiBmYUV4cGFuZEFycm93c0FsdCxcbiAgICAgICdmYXMgZmEtZ2xvYmUnOiBmYUdsb2JlLFxuICAgICAgJ2ZhcyBmYS12b2x1bWUtbXV0ZSc6IGZhVm9sdW1lTXV0ZSxcbiAgICAgICdmYXMgZmEtYmFycyc6IGZhQmFycyxcbiAgICAgICdmYXMgZmEtYnJpZWZjYXNlJzogZmFCcmllZmNhc2UsXG4gICAgICAnZmFzIGZhLW1pY3JvY2hpcCc6IGZhTWljcm9jaGlwLFxuICAgICAgJ2ZhcyBmYS1oZWFydGJlYXQnOiBmYUhlYXJ0YmVhdCxcbiAgICAgICdmYXMgZmEtaGlzdG9yeSc6IGZhSGlzdG9yeSxcbiAgICAgICdmYXMgZmEtbWljcm9waG9uZSc6IGZhTWljcm9waG9uZSxcbiAgICAgICdmYXMgZmEtaWNlLWNyZWFtJzogZmFJY2VDcmVhbSxcbiAgICAgICdmYXMgZmEtbGlnaHRidWxiJzogZmFMaWdodGJ1bGIsXG4gICAgICAnZmFzIGZhLWtleSc6IGZhS2V5LFxuICAgICAgJ2ZhcyBmYS1sYXB0b3AnOiBmYUxhcHRvcCxcbiAgICAgICdmYXMgZmEtbGF5ZXItZ3JvdXAnOiBmYUxheWVyR3JvdXAsXG4gICAgICAnZmFzIGZhLWxpc3QtdWwnOiBmYUxpc3RVbCxcbiAgICAgICdmYXMgZmEtdm9sdW1lLWRvd24nOiBmYVZvbHVtZURvd24sXG4gICAgICAnZmFzIGZhLW1hcC1waW4nOiBmYU1hcFBpbixcbiAgICAgICdmYXMgZmEtcGlsbHMnOiBmYVBpbGxzLFxuICAgICAgJ2ZhcyBmYS1tb2JpbGUnOiBmYU1vYmlsZSxcbiAgICAgICdmYXMgZmEtbW9iaWxlLWFsdCc6IGZhTW9iaWxlQWx0LFxuICAgICAgJ2ZhcyBmYS1tb25leS1iaWxsJzogZmFNb25leUJpbGwsXG4gICAgICAnZmFzIGZhLW1vdG9yY3ljbGUnOiBmYU1vdG9yY3ljbGUsXG4gICAgICAnZmFzIGZhLXN0aWNreS1ub3RlJzogZmFTdGlja3lOb3RlLFxuICAgICAgJ2ZhcyBmYS1lbGxpcHNpcy12JzogZmFFbGxpcHNpc1YsXG4gICAgICAnZmFzIGZhLWx1bmdzJzogZmFMdW5ncyxcbiAgICAgICdmYXMgZmEtY2FzaC1yZWdpc3Rlcic6IGZhQ2FzaFJlZ2lzdGVyLFxuICAgICAgJ2ZhcyBmYS1wYXBlci1wbGFuZSc6IGZhUGFwZXJQbGFuZSxcbiAgICAgICdmYXMgZmEtcGFwZXJjbGlwJzogZmFQYXBlcmNsaXAsXG4gICAgICAnZmFzIGZhLWRlc2t0b3AnOiBmYURlc2t0b3AsXG4gICAgICAnZmFzIGZhLXBhdXNlJzogZmFQYXVzZSxcbiAgICAgICdmYXMgZmEtcGVyY2VudCc6IGZhUGVyY2VudCxcbiAgICAgICdmYXMgZmEtcGlnZ3ktYmFuayc6IGZhUGlnZ3lCYW5rLFxuICAgICAgJ2ZhcyBmYS1wbGF5JzogZmFQbGF5LFxuICAgICAgJ2ZhcyBmYS1tb3VzZS1wb2ludGVyJzogZmFNb3VzZVBvaW50ZXIsXG4gICAgICAnZmFzIGZhLXN3aW1taW5nLXBvb2wnOiBmYVN3aW1taW5nUG9vbCxcbiAgICAgICdmYXMgZmEtYmFuJzogZmFCYW4sXG4gICAgICAnZmFzIGZhLXRhZyc6IGZhVGFnLFxuICAgICAgJ2ZhcyBmYS1zaGllbGQnOiBmYVNoaWVsZCxcbiAgICAgICdmYXMgZmEtcXJjb2RlJzogZmFRcmNvZGUsXG4gICAgICAnZmFzIGZhLXJlY2VpcHQnOiBmYVJlY2VpcHQsXG4gICAgICAnZmFzIGZhLXJlZG8nOiBmYVJlZG8sXG4gICAgICAnZmFzIGZhLXJ1bGVyJzogZmFSdWxlcixcbiAgICAgICdmYXMgZmEtdXRlbnNpbHMnOiBmYVV0ZW5zaWxzLFxuICAgICAgJ2ZhcyBmYS10c2hpcnQnOiBmYVRzaGlydCxcbiAgICAgICdmYXMgZmEtc2hvcHBpbmctY2FydCc6IGZhU2hvcHBpbmdDYXJ0LFxuICAgICAgJ2ZhcyBmYS1zbGlkZXJzLWgnOiBmYVNsaWRlcnNILFxuICAgICAgJ2ZhcyBmYS1nbGFzcy13aGlza2V5JzogZmFHbGFzc1doaXNrZXksXG4gICAgICAnZmFzIGZhLXNvcnQnOiBmYVNvcnQsXG4gICAgICAnZmFzIGZhLXRhY2hvbWV0ZXItYWx0JzogZmFUYWNob21ldGVyQWx0LFxuICAgICAgJ2ZhcyBmYS1zcG9vbic6IGZhU3Bvb24sXG4gICAgICAnZmFzIGZhLXN0YXItaGFsZic6IGZhU3RhckhhbGYsXG4gICAgICAnZmFzIGZhLXN0b3AnOiBmYVN0b3AsXG4gICAgICAnZmFzIGZhLXN0b3JlJzogZmFTdG9yZSxcbiAgICAgICdmYXMgZmEtdGhlcm1vbWV0ZXItaGFsZic6IGZhVGhlcm1vbWV0ZXJIYWxmLFxuICAgICAgJ2ZhcyBmYS10aHVtYnMtZG93bic6IGZhVGh1bWJzRG93bixcbiAgICAgICdmYXMgZmEtdGh1bWJzLXVwJzogZmFUaHVtYnNVcCxcbiAgICAgICdmYXMgZmEtYm9sdCc6IGZhQm9sdCxcbiAgICAgICdmYXMgZmEtdGlja2V0LWFsdCc6IGZhVGlja2V0QWx0LFxuICAgICAgJ2ZhcyBmYS1zaXRlbWFwJzogZmFTaXRlbWFwLFxuICAgICAgJ2ZhcyBmYS1iYXRoJzogZmFCYXRoLFxuICAgICAgJ2ZhcyBmYS11bmRvJzogZmFVbmRvLFxuICAgICAgJ2ZhcyBmYS11cGxvYWQnOiBmYVVwbG9hZCxcbiAgICAgICdmYXMgZmEtdXNlci1wbHVzJzogZmFVc2VyUGx1cyxcbiAgICAgICdmYXMgZmEtdXNlci1taW51cyc6IGZhVXNlck1pbnVzLFxuICAgICAgJ2ZhcyBmYS12aWRlbyc6IGZhVmlkZW8sXG4gICAgICAnZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc6IGZhRXhjbGFtYXRpb25DaXJjbGUsXG4gICAgICAnZmFzIGZhLXdpZmknOiBmYVdpZmksXG4gICAgICAnZmFzIGZhLXRhYmxldCc6IGZhVGFibGV0LFxuICAgICAgJ2ZhcyBmYS10YWJsZXQtYWx0JzogZmFUYWJsZXRBbHQsXG4gICAgICAnZmFzIGZhLWFtYnVsYW5jZSc6IGZhQW1idWxhbmNlXG4gICAgfTtcbiAgICBcbiAgICAvLyBTaSBlc3TDoSBlbiBlbCBtYXBlbyBsb2NhbCwgw7pzYWxvXG4gICAgaWYgKGxvY2FsSWNvbk1hcFt0aGlzLmljb25dKSB7XG4gICAgICByZXR1cm4gbG9jYWxJY29uTWFwW3RoaXMuaWNvbl07XG4gICAgfVxuICAgIFxuICAgIC8vIFNpIG5vIGVzdMOhIGVuIGVsIG1hcGVvIGxvY2FsLCBpbnRlbnRhIGNvbiBmaW5kSWNvbkRlZmluaXRpb25cbiAgICAvLyBGb3JtYXRvOiAnZmFzIGZhLXNwaW5uZXInIG8gJ3NwaW5uZXInIChhc3VtZSAnZmFzJyBwb3IgZGVmZWN0bylcbiAgICBsZXQgaWNvbk5hbWUgPSB0aGlzLmljb247XG4gICAgaWYgKHRoaXMuaWNvbi5pbmNsdWRlcygnZmFzIGZhLScpKSB7XG4gICAgICBpY29uTmFtZSA9IHRoaXMuaWNvbi5yZXBsYWNlKCdmYXMgZmEtJywgJycpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pY29uLmluY2x1ZGVzKCdmYS0nKSkge1xuICAgICAgaWNvbk5hbWUgPSB0aGlzLmljb24ucmVwbGFjZSgnZmEtJywgJycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBmb3VuZEljb24gPSBmaW5kSWNvbkRlZmluaXRpb24oeyBwcmVmaXg6ICdmYXMnLCBpY29uTmFtZTogaWNvbk5hbWUgYXMgSWNvbk5hbWUgfSk7XG4gICAgaWYgKGZvdW5kSWNvbikge1xuICAgICAgcmV0dXJuIGZvdW5kSWNvbjtcbiAgICB9XG4gICAgXG4gICAgLy8gU2kgbm8gc2UgZW5jdWVudHJhLCByZXRvcm5hIHVuZGVmaW5lZFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBTaSBlc3TDoSBkaXNhYmxlZCBvIGxvYWRpbmcsIHByZXZlbmlyIGNvbXBsZXRhbWVudGUgZWwgZXZlbnRvXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBTb2xvIGVtaXRpciBzaSBubyBlc3TDoSBkaXNhYmxlZCBuaSBsb2FkaW5nXG4gICAgdGhpcy5jbGlja2VkLmVtaXQoKTtcbiAgfVxuXG4gIGdldCBidXR0b25DbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICdidG4nLFxuICAgICAgYGJ0bi0ke3RoaXMudmFyaWFudH1gLFxuICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcbiAgICAgIHRoaXMuZnVsbFdpZHRoID8gJ3ctMTAwJyA6ICcnLFxuICAgICAgdGhpcy5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcbiAgICAgIHRoaXMubG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnLFxuICAgICAgdGhpcy5ub0FuaW1hdGUgPyAnbm8tYW5pbWF0ZScgOiAnJ1xuICAgIF07XG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIC8vIEVsIGJvdMOzbiBlcyBpbnRlcmFjdGl2byBzb2xvIHNpIG5vIGVzdMOhIGRpc2FibGVkIG5pIGxvYWRpbmdcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGdldCBzaG93U3Bpbm5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHNob3dDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIC8vIE1vc3RyYXIgY29udGVuaWRvICh0ZXh0byArIGljb25vKSBzb2xvIHNpIG5vIGVzdMOhIGxvYWRpbmdcbiAgICByZXR1cm4gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2l6ZUNsYXNzKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgcmV0dXJuICdidG4tc20nO1xuICAgICAgY2FzZSAnbWQnOlxuICAgICAgICByZXR1cm4gJ2J0bi1tZCc7XG4gICAgICBjYXNlICdsZyc6XG4gICAgICAgIHJldHVybiAnYnRuLWxnJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnYnRuLW1kJzsgLy8gUG9yIGRlZmVjdG8gdXNhIGVsIHRhbWHDsW8gbWVkaWFub1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvblxyXG4gICNidXR0b25FbGVtZW50XHJcbiAgW2NsYXNzXT1cImJ1dHRvbkNsYXNzZXNcIlxyXG4gIFt0eXBlXT1cInR5cGVcIlxyXG4gIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmcgPyAnJyA6IG51bGxcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICBbY2xhc3MuaGFzLXRvb2x0aXBdPVwidG9vbHRpcFwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgW2F0dHIuc3R5bGVdPVwiY3JpdGljYWxJbmxpbmVTdHlsZXNcIlxyXG4+XHJcbiAgPCEtLSBDb250ZW5pZG8gZGVsIGJvdMOzbiAtLT5cclxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRlbnRcIiBbY2xhc3MubG9hZGluZy1oaWRkZW5dPVwic2hvd1NwaW5uZXJcIj5cclxuICAgIDxmYS1pY29uICpuZ0lmPVwiaWNvbkRlZmluaXRpb24gJiYgKHBvc2l0aW9uID09PSAnbGVmdCcgfHwgaWNvbk9ubHkpXCIgW2ljb25dPVwiaWNvbkRlZmluaXRpb25cIiBbY2xhc3MubWUtMV09XCIhaWNvbk9ubHlcIj48L2ZhLWljb24+XHJcbiAgICA8c3BhbiAjYnV0dG9uVGV4dCAqbmdJZj1cIiFpY29uT25seVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgPGZhLWljb24gKm5nSWY9XCJpY29uRGVmaW5pdGlvbiAmJiBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJiAhaWNvbk9ubHlcIiBbaWNvbl09XCJpY29uRGVmaW5pdGlvblwiIGNsYXNzPVwibXMtMVwiPjwvZmEtaWNvbj5cclxuICA8L2Rpdj5cclxuICBcclxuICA8IS0tIFNwaW5uZXIgcXVlIHNlIHN1cGVycG9uZSBjdWFuZG8gZXN0w6EgbG9hZGluZyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwic2hvd1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItb3ZlcmxheVwiPlxyXG4gICAgPGZhLWljb24gXHJcbiAgICAgIFtpY29uXT1cInNwaW5uZXJJY29uXCIgXHJcbiAgICAgIGNsYXNzPVwic3Bpbm5lci1pY29uXCJcclxuICAgICAgW2NsYXNzLnNwaW5uaW5nXT1cImxvYWRpbmdcIj5cclxuICAgIDwvZmEtaWNvbj5cclxuICA8L2Rpdj5cclxuICBcclxuICA8IS0tIFRvb2x0aXAgcGVyc29uYWxpemFkbyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwidG9vbHRpcFwiIFxyXG4gICAgICAgY2xhc3M9XCJjdXN0b20tdG9vbHRpcFwiIFxyXG4gICAgICAgW2NsYXNzLnRvb2x0aXAtdG9wXT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgICAgW2NsYXNzLnRvb2x0aXAtYm90dG9tXT1cInRvb2x0aXBQb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgICAgW2NsYXNzLnRvb2x0aXAtbGVmdF09XCJ0b29sdGlwUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgICBbY2xhc3MudG9vbHRpcC1yaWdodF09XCJ0b29sdGlwUG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gICAgICAgW2NsYXNzLm11bHRpbGluZV09XCJpc0xvbmdUb29sdGlwXCJcclxuICAgICAgIFthdHRyLmRhdGEtdG9vbHRpcF09XCJ0b29sdGlwXCI+XHJcbiAgICB7eyB0b29sdGlwIH19XHJcbiAgPC9kaXY+XHJcbjwvYnV0dG9uPlxyXG4iXX0=