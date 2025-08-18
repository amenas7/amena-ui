import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class SaColumnDefDirective {
    templateRef;
    columnKey;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaColumnDefDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SaColumnDefDirective, isStandalone: true, selector: "[saColumnDef]", inputs: { columnKey: ["saColumnDef", "columnKey"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaColumnDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[saColumnDef]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { columnKey: [{
                type: Input,
                args: ['saColumnDef']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtY29sdW1uLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL3NhLXRhYmxlL3NhLWNvbHVtbi1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQU05RCxNQUFNLE9BQU8sb0JBQW9CO0lBR1o7SUFGRyxTQUFTLENBQVU7SUFFekMsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzt3R0FIekMsb0JBQW9COzRGQUFwQixvQkFBb0I7OzRGQUFwQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtnRkFFdUIsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3NhQ29sdW1uRGVmXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FDb2x1bW5EZWZEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgnc2FDb2x1bW5EZWYnKSBjb2x1bW5LZXkhOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cclxufVxyXG4iXX0=