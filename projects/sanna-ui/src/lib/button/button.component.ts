import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() type: ButtonType = 'button';
  @Input() icon?: IconDefinition;
  @Input() iconPosition: 'left' | 'right' = 'left';

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }

  get buttonClasses(): string {
    const classes = [
      'btn',
      `btn-${this.variant}`,
      this.getSizeClass(),
      this.fullWidth ? 'w-100' : '',
      this.disabled ? 'disabled' : '',
      this.loading ? 'disabled' : ''
    ];
    return classes.filter(Boolean).join(' ');
  }

  private getSizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'btn-sm';
      case 'large':
        return 'btn-lg';
      default:
        return '';
    }
  }
}
