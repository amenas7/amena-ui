import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[saColumnDef]',
  standalone: true
})
export class SaColumnDefDirective {
  @Input('saColumnDef') columnKey!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
