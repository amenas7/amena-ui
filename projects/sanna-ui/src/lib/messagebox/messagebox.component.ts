import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.scss'
})
export class MessageboxComponent {
  @Input() message: string = '';
  @Input() isFullWidth: boolean = false;
  @Input() type: 'success' | 'warning' | 'error' | 'info' = 'success';
}
