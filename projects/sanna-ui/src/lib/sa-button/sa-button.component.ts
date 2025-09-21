import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IconDefinition, findIconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { 
  faSpinner, 
  faDownload, 
  faTrash, 
  faShare, 
  faPrint, 
  faHeart,
  faHome,
  faUser,
  faCog,
  faSearch,
  faStar,
  faEdit,
  faSave,
  faPlus,
  faMinus,
  faCheck,
  faTimes,
  faEye,
  faEyeSlash,
  faLock,
  faUnlock,
  faBell,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCalendar,
  faClock,
  faInfo,
  faExclamationTriangle,
  faQuestion,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faPencil,
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
  // Nuevos iconos agregados
  faThLarge,
  faUsers,
  faLink,
  faCopy,
  faUniversalAccess,
  faRunning,
  faImage,
  faCalendarAlt,
  faChartBar,
  faChartLine,
  faAppleAlt,
  faRobot,
  faGift,
  faShoppingBag,
  faBalanceScale,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faBellSlash,
  faBicycle,
  faBookmark,
  faBowlFood,
  faBox,
  faBus,
  faBirthdayCake,
  faCalculator,
  faCalendarDay,
  faCamera,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faFile,
  faChartPie,
  faComments,
  faFlask,
  faMicroscope,
  faCookieBite,
  faSprayCan,
  faSoap,
  faExpand,
  faCloud,
  faCoffee,
  faComment,
  faCreditCard,
  faCrop,
  faCropAlt,
  faTruck,
  faFileUpload,
  faEllipsisH,
  faPlane,
  faGraduationCap,
  faEquals,
  faEraser,
  faFileExcel,
  faFileDownload,
  faSignOutAlt,
  faSmile,
  faFrown,
  faMask,
  faMedal,
  faBoxOpen,
  faSeedling,
  faFilter,
  faFingerprint,
  faFire,
  faTrophy,
  faFish,
  faFlag,
  faForward,
  faVolumeUp,
  faExpandArrowsAlt,
  faGlobe,
  faVolumeMute,
  faBars,
  faBriefcase,
  faMicrochip,
  faHeartbeat,
  faHistory,
  faMicrophone,
  faIceCream,
  faLightbulb,
  faKey,
  faLaptop,
  faLayerGroup,
  faListUl,
  faVolumeDown,
  faMapPin,
  faLocationArrow,
  faCompass,
  faPills,
  faMobile,
  faMobileAlt,
  faMoneyBill,
  faMotorcycle,
  faStickyNote,
  faEllipsisV,
  faLungs,
  faCashRegister,
  faPaperPlane,
  faPaperclip,
  faDesktop,
  faPause,
  faPercent,
  faPiggyBank,
  faPlay,
  faMousePointer,
  faSwimmingPool,
  faBan,
  faTag,
  faShield,
  faQrcode,
  faReceipt,
  faRedo,
  faRuler,
  faUtensils,
  faTshirt,
  faShoppingCart,
  faSlidersH,
  faGlassWhiskey,
  faSort,
  faTachometerAlt,
  faSpoon,
  faStarHalf,
  faStop,
  faStore,
  faThermometerHalf,
  faThumbsDown,
  faThumbsUp,
  faBolt,
  faTicketAlt,
  faSitemap,
  faBath,
  faUndo,
  faUpload,
  faUserPlus,
  faUserMinus,
  faVideo,
  faExclamationCircle,
  faWifi,
  faTable,
  faTablet,
  faTabletAlt,
  faAmbulance
} from '@fortawesome/free-solid-svg-icons';

import { TooltipPosition } from '../types/tooltip.types';

export type ButtonVariant = 'primary' | 'secondary' | 'terciary' | 'danger' | 'danger-light' | 'warning' | 'warning-light' | 'info' | 'info-light' | 'gray' | 'red' | 'success' | 'success-light';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';


@Component({
  selector: 'sa-button',
  templateUrl: './sa-button.component.html',
  styleUrl: './sa-button.component.scss',
  host: {
    '[class.full-width]': 'fullWidth',
    'style': 'visibility: hidden;',
    '[style.visibility]': '"visible"'
  }
})
export class SaButtonComponent {
  // Propiedades con flexibilidad máxima: soportan attribute y property binding
  @Input() label: string = 'Button'; // Mantener como @Input simple para strings
  
  // Propiedades con setters/getters para flexibilidad máxima
  private _variant: ButtonVariant = 'primary';
  private _size: ButtonSize = 'md';
  private _disabled: boolean = false;
  private _loading: boolean = false;
  private _fullWidth: boolean = false;
  private _type: ButtonType = 'button';
  private _icon?: string;
  private _position: 'left' | 'right' = 'left';
  private _iconOnly: boolean = false;
  private _tooltip?: string;
  private _tooltipPosition: TooltipPosition = 'top';
  private _noAnimate: boolean = false;

  @Input()
  set tooltip(value: string | any) {
    this._tooltip = value;
  }
  get tooltip(): string | undefined {
    return this._tooltip;
  }

  @Input()
  set tooltipPosition(value: TooltipPosition | any) {
    this._tooltipPosition = value || 'top';
  }
  get tooltipPosition(): TooltipPosition {
    return this._tooltipPosition;
  }

  // Determinar si el tooltip necesita múltiples líneas
  get isLongTooltip(): boolean {
    if (!this.tooltip) return false;
    // Considerar texto largo si tiene más de 60 caracteres o contiene saltos de línea
    // 60 caracteres es aproximadamente lo que cabe en 350px con font-size 12px
    return this.tooltip.length > 60 || this.tooltip.includes('\n');
  }

  @Input()
  set variant(value: ButtonVariant | any) {
    this._variant = value || 'primary';
  }
  get variant(): ButtonVariant {
    return this._variant;
  }

  @Input()
  set size(value: ButtonSize | any) {
    this._size = value || 'md';
  }
  get size(): ButtonSize {
    return this._size;
  }

  @Input()
  set disabled(value: boolean | any) {
    this._disabled = value === true || value === 'true';
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set loading(value: boolean | any) {
    this._loading = value === true || value === 'true';
  }
  get loading(): boolean {
    return this._loading;
  }

  @Input()
  set fullWidth(value: boolean | any) {
    this._fullWidth = value === true || value === 'true';
  }
  get fullWidth(): boolean {
    return this._fullWidth;
  }

  @Input()
  set type(value: ButtonType | any) {
    this._type = value || 'button';
  }
  get type(): ButtonType {
    return this._type;
  }

  @Input()
  set icon(value: string | any) {
    this._icon = value;
  }
  get icon(): string | undefined {
    return this._icon;
  }

  @Input()
  set position(value: 'left' | 'right' | any) {
    this._position = value || 'left';
  }
  get position(): 'left' | 'right' {
    return this._position;
  }

  @Input()
  set iconOnly(value: boolean | any) {
    this._iconOnly = value === true || value === 'true';
  }
  get iconOnly(): boolean {
    return this._iconOnly;
  }

  @Input()
  set noAnimate(value: boolean | any) {
    this._noAnimate = value === true || value === 'true';
  }
  get noAnimate(): boolean {
    return this._noAnimate;
  }


  @ViewChild('buttonText', { static: false }) buttonText!: ElementRef;

  @Output() clicked = new EventEmitter<void>();

  // Icono de spinner para el estado loading
  readonly spinnerIcon = faSpinner;

  // Método para obtener el icono basado en el string
  get iconDefinition(): IconDefinition | undefined {
    if (!this.icon) return undefined;
    
    // Primero intenta con el mapeo local (más rápido)
    const localIconMap: { [key: string]: IconDefinition } = {
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
    } else if (this.icon.includes('fa-')) {
      iconName = this.icon.replace('fa-', '');
    }
    
    const foundIcon = findIconDefinition({ prefix: 'fas', iconName: iconName as IconName });
    if (foundIcon) {
      return foundIcon;
    }
    
    // Si no se encuentra, retorna undefined
    return undefined;
  }

  onClick(event?: Event): void {
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

  get buttonClasses(): string {
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

  get isInteractive(): boolean {
    // El botón es interactivo solo si no está disabled ni loading
    return !this.disabled && !this.loading;
  }

  get showSpinner(): boolean {
    return this.loading;
  }

  get showContent(): boolean {
    // Mostrar contenido (texto + icono) solo si no está loading
    return !this.loading;
  }

  private getSizeClass(): string {
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
}
