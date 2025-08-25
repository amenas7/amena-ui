export type CalendarSize = 'sm' | 'md' | 'lg';
export type CalendarStatus = 'default' | 'success' | 'error';
export type CalendarViewMode = 'day' | 'month' | 'year';
export type WeekStartDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
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
    disabledDays?: number[];
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
export declare const DEFAULT_CALENDAR_LOCALE: CalendarLocale;
export declare const DEFAULT_CALENDAR_COLORS: CalendarColors;
export declare const DEFAULT_CALENDAR_CONFIG: CalendarConfig;
