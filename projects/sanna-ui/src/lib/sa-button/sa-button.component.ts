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
  faPencil
} from '@fortawesome/free-solid-svg-icons';

export type ButtonVariant = 'primary' | 'secondary' | 'terciary' | 'danger' | 'warning' | 'info' | 'gray' | 'red' | 'success';
export type ButtonSize = 'small' | 'medium' | 'large';
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
  private _size: ButtonSize = 'medium';
  private _disabled: boolean = false;
  private _loading: boolean = false;
  private _fullWidth: boolean = false;
  private _type: ButtonType = 'button';
  private _icon?: string;
  private _position: 'left' | 'right' = 'left';
  private _iconOnly: boolean = false;

  @Input()
  set variant(value: ButtonVariant | any) {
    this._variant = value || 'primary';
  }
  get variant(): ButtonVariant {
    return this._variant;
  }

  @Input()
  set size(value: ButtonSize | any) {
    this._size = value || 'medium';
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


  @ViewChild('buttonText', { static: false }) buttonText!: ElementRef;

  @Output() clicked = new EventEmitter<void>();

  // Icono de spinner para el estado loading
  readonly spinnerIcon = faSpinner;

  // Método para obtener el icono basado en el string
  get iconDefinition(): IconDefinition | undefined {
    if (!this.icon) return undefined;
    
    // Primero intenta con el mapeo local (más rápido)
    const localIconMap: { [key: string]: IconDefinition } = {
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
      this.loading ? 'loading' : ''
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
}
