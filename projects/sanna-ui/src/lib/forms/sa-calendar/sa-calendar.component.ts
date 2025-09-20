import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  forwardRef, 
  OnInit, 
  OnChanges,
  SimpleChanges,
  ViewEncapsulation, 
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
  ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { 
  CalendarSize, 
  CalendarStatus, 
  CalendarViewMode,
  CalendarDay,
  CalendarMonth,
  CalendarYear,
  CalendarEvent,
  CalendarColors,
  CalendarLocale,
  CalendarValidation,
  CalendarConfig,
  CalendarSelectEvent,
  CalendarViewChangeEvent,
  DEFAULT_CALENDAR_LOCALE,
  DEFAULT_CALENDAR_COLORS,
  DEFAULT_CALENDAR_CONFIG
} from '../../types/calendar.types';

@Component({
  selector: 'sa-calendar',
  templateUrl: './sa-calendar.component.html',
  styleUrls: ['./sa-calendar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'sanna-ui-component sanna-ui-calendar',
    '[class.sanna-ui-calendar-size-sm]': 'size === "sm"',
    '[class.sanna-ui-calendar-size-md]': 'size === "md"',
    '[class.sanna-ui-calendar-size-lg]': 'size === "lg"',
    '[class.sanna-ui-calendar-disabled]': 'disabled',
    '[class.sanna-ui-calendar-readonly]': 'readonly',
    '[class.sanna-ui-calendar-inline]': 'inline'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaCalendarComponent),
      multi: true
    }
  ]
})
export class SaCalendarComponent implements ControlValueAccessor, OnInit, OnChanges {
  // Basic inputs
  private _value: Date | Date[] | null = null;
  @Input() size: CalendarSize = 'md';
  @Input() status: CalendarStatus = 'default';
  @Input() label: string = '';
  
  private _noLabel: boolean = false;
  @Input()
  set noLabel(value: boolean | any) {
    this._noLabel = value === true || value === 'true';
  }
  get noLabel(): boolean {
    return this._noLabel;
  }
  @Input() placeholder: string = 'Seleccionar fecha';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() minDate: Date | string | number | null = null;
  @Input() maxDate: Date | string | number | null = null;
  @Input() id: string = '';
  @Input() name: string = '';

  // Calendar specific inputs
  @Input() locale: CalendarLocale = DEFAULT_CALENDAR_LOCALE;
  @Input() colors: CalendarColors = DEFAULT_CALENDAR_COLORS;
  @Input() config: CalendarConfig = DEFAULT_CALENDAR_CONFIG;
  @Input() validation: CalendarValidation = {};
  @Input() events: CalendarEvent[] = [];
  @Input() inline: boolean = false;
  @Input() showInput: boolean = true;

  // Outputs
  @Output() dateSelect = new EventEmitter<CalendarSelectEvent>();
  @Output() viewChange = new EventEmitter<CalendarViewChangeEvent>();
  @Output() monthChange = new EventEmitter<Date>();
  @Output() yearChange = new EventEmitter<number>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  // Internal state
  currentView: CalendarViewMode = 'day';
  currentDate: Date = new Date();
  selectedDates: Date[] = [];
  calendarDays: CalendarDay[][] = [];
  calendarMonths: CalendarMonth[] = [];
  calendarYears: CalendarYear[] = [];
  isOpen: boolean = false;
  isFocused: boolean = false;

  private _generatedId: string;
  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {
    this._generatedId = `sa-calendar-${Math.random().toString(36).substr(2, 9)}`;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClickOutside(event: Event) {
    // SOLUCION TEMPORAL: Usar click en lugar de mousedown con delay
    setTimeout(() => {
      if (!this.inline && this.isOpen) {
        const target = event.target as Element;
        
        // Solo cerrar si el clic fue en SA-CALENDAR (área vacía)
        if (target.tagName === 'SA-CALENDAR') {
          // Verificar que no sea un clic en elementos internos usando coordenadas
          const rect = this.elementRef.nativeElement.getBoundingClientRect();
          const clickX = (event as MouseEvent).clientX;
          const clickY = (event as MouseEvent).clientY;
          
          // Si el clic está en los bordes del componente (no en contenido), cerrar
          const isNearEdge = 
            clickX < rect.left + 20 || clickX > rect.right - 20 ||
            clickY < rect.top + 20 || clickY > rect.bottom - 20;
            
          if (isNearEdge) {
            this.closeCalendar();
          }
        }
      }
    }, 100); // Delay para permitir que otros clics se procesen primero
  }

  ngOnInit() {
    this.initializeCalendar();
    if (this.inline) {
      this.isOpen = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['locale'] || changes['config']) {
      this.initializeCalendar();
    }
  }



  get calendarId(): string {
    return this.id || this._generatedId;
  }

  get mergedColors(): CalendarColors {
    return { ...DEFAULT_CALENDAR_COLORS, ...this.colors };
  }

  get mergedConfig(): CalendarConfig {
    return { ...DEFAULT_CALENDAR_CONFIG, ...this.config };
  }

  get mergedLocale(): CalendarLocale {
    return { ...DEFAULT_CALENDAR_LOCALE, ...this.locale };
  }

  get inputValue(): string {
    if (!this._value) return '';
    
    if (Array.isArray(this._value)) {
      if (this.mergedConfig.allowRangeSelect && this._value.length === 2) {
        return `${this.formatDate(this._value[0])} - ${this.formatDate(this._value[1])}`;
      }
      return this._value.map(date => this.formatDate(date)).join(', ');
    }
    
    return this.formatDate(this._value);
  }

  get inputClasses(): string {
    const sizeMap = {
      'sm': 'form-control-sm',
      'md': '',
      'lg': 'form-control-lg'
    };

    const baseClasses = ['form-control', 'calendar-input'];
    
    if (sizeMap[this.size] && sizeMap[this.size] !== '') {
      baseClasses.push(sizeMap[this.size]);
    }
    
    if (this.status === 'error' || this.errorText) {
      baseClasses.push('is-invalid');
    } else if (this.status === 'success') {
      baseClasses.push('is-valid');
    }

    return baseClasses.join(' ');
  }

  get labelClasses(): string {
    const sizeMap = {
      'sm': 'form-label label-sm',
      'md': 'form-label label-md',
      'lg': 'form-label label-lg'
    };
    
    const baseClasses = sizeMap[this.size] || 'form-label label-md';
    
    // Si es noLabel, agregar clase para label fantasma
    if (this.noLabel) {
      return `${baseClasses} ghost-label`;
    }
    
    return baseClasses;
  }

  get shouldShowLabel(): boolean {
    return !!this.label || this.noLabel;
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this._value = value;
    this.updateSelectedDates();
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  // Calendar initialization
  private initializeCalendar() {
    this.updateSelectedDates();
    this.generateCalendarDays();
    this.generateCalendarMonths();
    this.generateCalendarYears();
    this.cdr.markForCheck();
  }

  private updateSelectedDates() {
    this.selectedDates = [];
    if (this._value) {
      if (Array.isArray(this._value)) {
        this.selectedDates = [...this._value];
      } else {
        this.selectedDates = [this._value];
      }
    }
  }

  // Calendar generation methods
  private generateCalendarDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    alert(`🔥 GENERATE CALENDAR: currentDate=${this.currentDate}, year=${year}, month=${month} (${month === 6 ? 'JULIO' : month === 8 ? 'SEPTIEMBRE' : 'MES ' + month})`);
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    const endDate = new Date(lastDay);

    alert(`🔥 GENERATE CALENDAR: firstDay=${firstDay}, lastDay=${lastDay}`);

    // Adjust start date to show previous month days if needed
    const firstDayOfWeek = this.mergedLocale.firstDayOfWeek;
    const startDayOfWeek = firstDay.getDay();
    const diff = (startDayOfWeek - firstDayOfWeek + 7) % 7;
    startDate.setDate(startDate.getDate() - diff);

    // Adjust end date to show next month days
    const endDayOfWeek = endDate.getDay();
    const endDiff = (6 - endDayOfWeek + firstDayOfWeek) % 7;
    endDate.setDate(endDate.getDate() + endDiff);

    this.calendarDays = [];
    const weeks: CalendarDay[][] = [];
    let week: CalendarDay[] = [];

    const currentDateIter = new Date(startDate);
    while (currentDateIter <= endDate) {
      const calendarDay = this.createCalendarDay(currentDateIter, month);
      week.push(calendarDay);

      if (week.length === 7) {
        weeks.push([...week]);
        week = [];
      }

      currentDateIter.setDate(currentDateIter.getDate() + 1);
    }

    this.calendarDays = weeks;
  }

  private createCalendarDay(date: Date, currentMonth: number): CalendarDay {
    const today = new Date();
    const isToday = this.isSameDay(date, today);
    const isSelected = this.selectedDates.some(selectedDate => this.isSameDay(date, selectedDate));
    const isDisabled = this.isDateDisabled(date);
    const isInCurrentMonth = date.getMonth() === currentMonth;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const hasEvent = this.events.some(event => this.isSameDay(event.date, date));

    const calendarDay = {
      date: new Date(date),
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      isToday,
      isSelected,
      isDisabled,
      isInCurrentMonth,
      isWeekend,
      hasEvent
    };

    // Debug solo para el día 16
    if (date.getDate() === 16) {
      alert(`📅 CREATE DAY 16: date=${date}, currentMonth=${currentMonth}, calendarDay.date=${calendarDay.date}, isInCurrentMonth=${isInCurrentMonth}`);
    }

    return calendarDay;
  }

  private generateCalendarMonths() {
    const currentYear = this.currentDate.getFullYear();
    alert(`📅 GENERATE MONTHS: currentDate=${this.currentDate}, currentYear=${currentYear}`);
    
    this.calendarMonths = this.mergedLocale.monthsShort.map((month, index) => ({
      name: month,
      number: index,
      year: currentYear,
      isSelected: this.selectedDates.some(date => 
        date.getFullYear() === currentYear && date.getMonth() === index
      ),
      isDisabled: this.isMonthDisabled(currentYear, index),
      isCurrent: new Date().getFullYear() === currentYear && new Date().getMonth() === index
    }));
    
    // Debug para julio (mes 6)
    const julioMonth = this.calendarMonths[6];
    alert(`📅 JULIO GENERADO: name=${julioMonth.name}, number=${julioMonth.number}, year=${julioMonth.year}`);
  }

  private generateCalendarYears() {
    const currentYear = this.currentDate.getFullYear();
    const startYear = currentYear - 10;
    const endYear = currentYear + 10;

    this.calendarYears = [];
    for (let year = startYear; year <= endYear; year++) {
      this.calendarYears.push({
        year,
        isSelected: this.selectedDates.some(date => date.getFullYear() === year),
        isDisabled: this.isYearDisabled(year),
        isCurrent: new Date().getFullYear() === year
      });
    }
  }

  // Date validation methods
  private isDateDisabled(date: Date): boolean {
    // Check component-level min/max dates
    const minDate = this.getDateFromInput(this.minDate);
    const maxDate = this.getDateFromInput(this.maxDate);
    
    if (minDate && date < minDate) {
      return true;
    }

    if (maxDate && date > maxDate) {
      return true;
    }

    // Check validation-level min/max dates (legacy support)
    if (this.validation.minDate && date < this.validation.minDate) {
      return true;
    }

    if (this.validation.maxDate && date > this.validation.maxDate) {
      return true;
    }

    if (this.validation.disabledDates?.some(disabledDate => this.isSameDay(date, disabledDate))) {
      return true;
    }

    if (this.validation.disabledDays?.includes(date.getDay())) {
      return true;
    }

    if (this.validation.enabledDates && !this.validation.enabledDates.some(enabledDate => this.isSameDay(date, enabledDate))) {
      return true;
    }

    if (this.validation.customValidator && !this.validation.customValidator(date)) {
      return true;
    }

    return false;
  }

  private isMonthDisabled(year: number, month: number): boolean {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Check if all days in the month are disabled
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(year, month, day);
      if (!this.isDateDisabled(date)) {
        return false;
      }
    }

    return true;
  }

  private isYearDisabled(year: number): boolean {
    // Check if all months in the year are disabled
    for (let month = 0; month < 12; month++) {
      if (!this.isMonthDisabled(year, month)) {
        return false;
      }
    }

    return true;
  }

  // Event handlers
  onInputClick(event?: Event) {
    if (!this.disabled && !this.readonly && !this.inline) {
      // Prevenir que el evento se propague para evitar que se cierre inmediatamente
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      
      // Usar setTimeout para evitar conflictos con el document:mousedown
      setTimeout(() => {
        this.toggleCalendar();
      }, 0);
    }
  }

  onInputFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onInputBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  onDayClick(day: CalendarDay, event?: Event) {
    // MEGA DEBUG - Si no ves esto, hay código duplicado
    alert(`MEGA DEBUG: Seleccionando día ${day.day}, fecha: ${day.date}`);
    
    if (day.isDisabled || this.disabled || this.readonly) {
      return;
    }

    if (event) {
      event.stopPropagation();
    }

    const selectedDate = new Date(day.date);
    alert(`MEGA DEBUG: Fecha final: ${selectedDate}`);
    this.selectDate(selectedDate);
  }

  onMonthClick(month: CalendarMonth, event?: Event) {
    console.log('🔥 *** NUEVA VERSION *** MonthClick - Month:', month.number, 'Year:', month.year);
    
    if (month.isDisabled) {
      return;
    }

    // Prevenir que el evento se propague para evitar que se cierre el calendario
    if (event) {
      event.stopPropagation();
    }

    console.log('🔥 MonthClick - CurrentDate antes:', this.currentDate);
    this.currentDate = new Date(month.year, month.number, 1);
    console.log('🔥 MonthClick - CurrentDate después:', this.currentDate);
    this.setView('day');
    this.monthChange.emit(new Date(this.currentDate));
  }

  onYearClick(year: CalendarYear, event?: Event) {
    console.log('🌟 *** NUEVA VERSION *** YearClick - Year:', year.year, 'CurrentMonth:', this.currentDate.getMonth());
    
    if (year.isDisabled) {
      return;
    }

    // Prevenir que el evento se propague para evitar que se cierre el calendario
    if (event) {
      event.stopPropagation();
    }

    console.log('🌟 YearClick - CurrentDate antes:', this.currentDate);
    this.currentDate = new Date(year.year, this.currentDate.getMonth(), 1);
    console.log('🌟 YearClick - CurrentDate después:', this.currentDate);
    
    // ¡SOLUCION! Regenerar los meses después de cambiar el año
    this.generateCalendarMonths();
    
    this.setView('month');
    this.yearChange.emit(year.year);
  }

  onTodayClick() {
    const today = new Date();
    if (!this.isDateDisabled(today)) {
      this.selectDate(today);
      this.currentDate = new Date(today);
      this.generateCalendarDays();
    }
  }

  onClearClick() {
    this.selectDate(null);
  }

  onClearValue(event: MouseEvent) {
    // Prevenir propagación del evento
    event.preventDefault();
    event.stopPropagation();
    
    if (!this.disabled) {
      this.selectDate(null);
    }
  }

  // Navigation methods
  navigatePrevious(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    switch (this.currentView) {
      case 'day':
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
        this.generateCalendarDays();
        break;
      case 'month':
        this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), 1);
        this.generateCalendarMonths();
        break;
      case 'year':
        this.currentDate = new Date(this.currentDate.getFullYear() - 21, this.currentDate.getMonth(), 1);
        this.generateCalendarYears();
        break;
    }
    this.cdr.markForCheck();
  }

  navigateNext(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    switch (this.currentView) {
      case 'day':
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        this.generateCalendarDays();
        break;
      case 'month':
        this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), 1);
        this.generateCalendarMonths();
        break;
      case 'year':
        this.currentDate = new Date(this.currentDate.getFullYear() + 21, this.currentDate.getMonth(), 1);
        this.generateCalendarYears();
        break;
    }
    this.cdr.markForCheck();
  }

  setView(view: CalendarViewMode) {
    this.currentView = view;
    this.viewChange.emit({
      view,
      date: new Date(this.currentDate),
      month: this.currentDate.getMonth(),
      year: this.currentDate.getFullYear()
    });
    this.cdr.markForCheck();
  }

  toggleCalendar() {
    this.isOpen = !this.isOpen;
    this.cdr.markForCheck();
  }

  closeCalendar() {
    this.isOpen = false;
    this.cdr.markForCheck();
  }

  // Helper methods
  private getDateFromInput(dateInput: Date | string | number | null): Date | null {
    if (!dateInput) return null;
    if (dateInput instanceof Date) return dateInput;
    return new Date(dateInput);
  }

  // Navigation methods
  canNavigateToPreviousMonth(): boolean {
    const minDate = this.getDateFromInput(this.minDate);
    if (!minDate) return true;
    
    const currentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const previousMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    
    return previousMonth >= new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  }

  canNavigateToNextMonth(): boolean {
    const maxDate = this.getDateFromInput(this.maxDate);
    if (!maxDate) return true;
    
    const currentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    
    return nextMonth <= new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
  }

  canNavigateToPreviousYear(): boolean {
    const minDate = this.getDateFromInput(this.minDate);
    if (!minDate) return true;
    
    return this.currentDate.getFullYear() - 1 >= minDate.getFullYear();
  }

  canNavigateToNextYear(): boolean {
    const maxDate = this.getDateFromInput(this.maxDate);
    if (!maxDate) return true;
    
    return this.currentDate.getFullYear() + 1 <= maxDate.getFullYear();
  }

  // Date selection logic
  private selectDate(date: Date | null) {
    alert(`SELECTDATE MEGA DEBUG: Recibió fecha: ${date}`);
    
    if (date === null) {
      this.selectedDates = [];
      this._value = null;
    } else if (this.mergedConfig.allowMultiSelect) {
      this.handleMultiSelect(date);
    } else if (this.mergedConfig.allowRangeSelect) {
      this.handleRangeSelect(date);
    } else {
      this.selectedDates = [date];
      this._value = date;
    }

    alert(`SELECTDATE MEGA DEBUG: _value final: ${this._value}`);
    this.updateValue();
    
    if (this.mergedConfig.closeOnSelect && !this.mergedConfig.allowMultiSelect && !this.mergedConfig.allowRangeSelect) {
      this.closeCalendar();
    }
  }

  private handleMultiSelect(date: Date) {
    const existingIndex = this.selectedDates.findIndex(selectedDate => this.isSameDay(selectedDate, date));
    
    if (existingIndex > -1) {
      this.selectedDates.splice(existingIndex, 1);
    } else {
      this.selectedDates.push(date);
    }

    this._value = [...this.selectedDates];
  }

  private handleRangeSelect(date: Date) {
    if (this.selectedDates.length === 0 || this.selectedDates.length === 2) {
      this.selectedDates = [date];
    } else if (this.selectedDates.length === 1) {
      const startDate = this.selectedDates[0];
      if (date < startDate) {
        this.selectedDates = [date, startDate];
      } else {
        this.selectedDates = [startDate, date];
      }
    }

    this._value = [...this.selectedDates];
  }

  private updateValue() {
    alert(`UPDATEVALUE MEGA DEBUG: selectedDates[0]: ${this.selectedDates[0]}, _value: ${this._value}, inputValue: ${this.inputValue}`);
    
    const selectEvent: CalendarSelectEvent = {
      date: this.selectedDates[0] || new Date(),
      formattedDate: this.inputValue,
      selectedDates: [...this.selectedDates]
    };

    if (this.mergedConfig.allowRangeSelect && this.selectedDates.length === 2) {
      selectEvent.isRange = true;
      selectEvent.startDate = this.selectedDates[0];
      selectEvent.endDate = this.selectedDates[1];
    }

    this.onChange(this._value);
    this.dateSelect.emit(selectEvent);
    this.generateCalendarDays();
    this.cdr.markForCheck();
    
    alert(`UPDATEVALUE MEGA DEBUG: Después de onChange - inputValue: ${this.inputValue}`);
  }

  // Utility methods
  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  private formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear().toString();

    let formattedDate = this.mergedLocale.dateFormat;
    
    // Reemplazar día (con padding de cero para días menores a 10)
    formattedDate = formattedDate.replace('dd', day.toString().padStart(2, '0'));
    
    // Reemplazar mes (verificar si es formato largo o corto)
    if (formattedDate.includes('mmmm')) {
      // Mes completo en español
      formattedDate = formattedDate.replace('mmmm', this.mergedLocale.months[month].toLowerCase());
    } else if (formattedDate.includes('mmm')) {
      // Mes abreviado
      formattedDate = formattedDate.replace('mmm', this.mergedLocale.monthsShort[month]);
    } else if (formattedDate.includes('mm')) {
      // Mes numérico con padding
      formattedDate = formattedDate.replace('mm', (month + 1).toString().padStart(2, '0'));
    } else if (formattedDate.includes('m')) {
      // Mes numérico sin padding
      formattedDate = formattedDate.replace('m', (month + 1).toString());
    }
    
    // Reemplazar año
    formattedDate = formattedDate.replace('yyyy', year);

    return formattedDate;
  }

  getHeaderTitle(): string {
    switch (this.currentView) {
      case 'day':
        return `${this.mergedLocale.months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
      case 'month':
        return this.currentDate.getFullYear().toString();
      case 'year':
        const startYear = this.currentDate.getFullYear() - 10;
        const endYear = this.currentDate.getFullYear() + 10;
        return `${startYear} - ${endYear}`;
      default:
        return '';
    }
  }

  getWeekdays(): string[] {
    const weekdays = [...this.mergedLocale.weekdaysMin];
    const firstDay = this.mergedLocale.firstDayOfWeek;
    
    return [
      ...weekdays.slice(firstDay),
      ...weekdays.slice(0, firstDay)
    ];
  }
}
