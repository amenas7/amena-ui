export type CalendarSize = 'sm' | 'md' | 'lg';
export type CalendarStatus = 'default' | 'success' | 'error';
export type CalendarViewMode = 'day' | 'month' | 'year';
export type WeekStartDay = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, etc.

export interface CalendarDay {
  date: Date;
  day: number;
  month: number;
  year: number;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isInCurrentMonth: boolean;
  isWeekend: boolean;
  hasEvent?: boolean;
  eventData?: any;
  customClass?: string;
}

export interface CalendarMonth {
  name: string;
  number: number;
  year: number;
  isSelected: boolean;
  isDisabled: boolean;
  isCurrent: boolean;
}

export interface CalendarYear {
  year: number;
  isSelected: boolean;
  isDisabled: boolean;
  isCurrent: boolean;
}

export interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  description?: string;
  color?: string;
  type?: string;
  data?: any;
}

export interface CalendarColors {
  primary?: string;
  secondary?: string;
  success?: string;
  error?: string;
  warning?: string;
  info?: string;
  light?: string;
  dark?: string;
  background?: string;
  surface?: string;
  onPrimary?: string;
  onSurface?: string;
  border?: string;
  disabled?: string;
  hover?: string;
  weekdayHeaderBg?: string;
  weekdayHeaderColor?: string;
}

export interface CalendarLocale {
  months: string[];
  monthsShort: string[];
  weekdays: string[];
  weekdaysShort: string[];
  weekdaysMin: string[];
  today: string;
  clear: string;
  dateFormat: string;
  firstDayOfWeek: WeekStartDay;
}

export interface CalendarValidation {
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  disabledDays?: number[]; // 0-6, where 0 is Sunday
  enabledDates?: Date[];
  customValidator?: (date: Date) => boolean;
}

export interface CalendarConfig {
  locale?: CalendarLocale;
  colors?: CalendarColors;
  validation?: CalendarValidation;
  showWeekNumbers?: boolean;
  showAdjacentMonths?: boolean;
  highlightWeekends?: boolean;
  highlightToday?: boolean;
  allowMultiSelect?: boolean;
  allowRangeSelect?: boolean;
  showClearButton?: boolean;
  showTodayButton?: boolean;
  showHeader?: boolean;
  showNavigation?: boolean;
  animateTransitions?: boolean;
  closeOnSelect?: boolean;
}

export type CalendarOutputEvent = 'select' | 'deselect' | 'change' | 'viewChange' | 'monthChange' | 'yearChange';

export interface CalendarSelectEvent {
  date: Date;
  formattedDate: string;
  isRange?: boolean;
  startDate?: Date;
  endDate?: Date;
  selectedDates?: Date[];
}

export interface CalendarViewChangeEvent {
  view: CalendarViewMode;
  date: Date;
  month: number;
  year: number;
}

// Default locale (Spanish)
export const DEFAULT_CALENDAR_LOCALE: CalendarLocale = {
  months: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
  monthsShort: [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ],
  weekdays: [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ],
  weekdaysShort: [
    'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'
  ],
  weekdaysMin: [
    'D', 'L', 'M', 'M', 'J', 'V', 'S'
  ],
  today: 'Hoy',
  clear: 'Limpiar',
  dateFormat: 'dd/mmm/yyyy',
  firstDayOfWeek: 1 // Monday
};

// Default colors
export const DEFAULT_CALENDAR_COLORS: CalendarColors = {
  primary: '#36AD55',
  secondary: '#6c757d',
  success: '#32A047',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
  light: '#f8f9fa',
  dark: '#212529',
  background: '#ffffff',
  surface: '#f8f9fa',
  onPrimary: '#ffffff',
  onSurface: '#212529',
  border: '#dee2e6',
  disabled: '#e9ecef',
  hover: '#e9ecef',
  weekdayHeaderBg: '#f8f9fa',
  weekdayHeaderColor: '#212529'
};

// Default configuration
export const DEFAULT_CALENDAR_CONFIG: CalendarConfig = {
  showWeekNumbers: false,
  showAdjacentMonths: true,
  highlightWeekends: false,
  highlightToday: true,
  allowMultiSelect: false,
  allowRangeSelect: false,
  showClearButton: false,
  showTodayButton: false,
  showHeader: true,
  showNavigation: true,
  animateTransitions: true,
  closeOnSelect: true
};
