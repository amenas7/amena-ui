import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.scss'
})
export class MessageboxComponent {
  @Input() message: string = '';
  @Input() isFullWidth: boolean = false;
  @Input() type: 'success' | 'warning' | 'error' | 'info' = 'success';
  @Input() iconName?: string;
  @Input() iconSize?: 'sm' | 'md' | 'lg';
  @Input() iconColor?: string;

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedMessage(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.message);
  }

  get hasIcon(): boolean {
    return !!this.iconName;
  }
}
