import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SannaIconModule } from '../sa-icon/icon.module';
// Componentes de formularios
import { SaInputComponent } from './sa-input/sa-input.component';
import { SaSelectComponent } from './sa-select/sa-select.component';
import { SaTextareaComponent } from './sa-textarea/sa-textarea.component';
import { SaCheckboxComponent } from './sa-checkbox/sa-checkbox.component';
import { SaRadioComponent } from './sa-radio/sa-radio.component';
import { SaDateComponent } from './sa-date/sa-date.component';
import * as i0 from "@angular/core";
export class SannaFormsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, declarations: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaDateComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaIconModule], exports: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaDateComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SaInputComponent,
                        SaSelectComponent,
                        SaTextareaComponent,
                        SaCheckboxComponent,
                        SaRadioComponent,
                        SaDateComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SannaIconModule,
                    ],
                    exports: [
                        SaInputComponent,
                        SaSelectComponent,
                        SaTextareaComponent,
                        SaCheckboxComponent,
                        SaRadioComponent,
                        SaDateComponent,
                    ]
                }]
        }] });
// Exportamos los componentes para que estén disponibles en toda la librería
export { SaInputComponent } from './sa-input/sa-input.component';
export { SaSelectComponent } from './sa-select/sa-select.component';
export { SaTextareaComponent } from './sa-textarea/sa-textarea.component';
export { SaCheckboxComponent } from './sa-checkbox/sa-checkbox.component';
export { SaRadioComponent } from './sa-radio/sa-radio.component';
export { SaDateComponent } from './sa-date/sa-date.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCw2QkFBNkI7QUFDN0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQTBCOUQsTUFBTSxPQUFPLGdCQUFnQjt3R0FBaEIsZ0JBQWdCO3lHQUFoQixnQkFBZ0IsaUJBdEJ6QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGVBQWUsYUFHZixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlLGFBR2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixlQUFlO3lHQUdOLGdCQUFnQixZQWR6QixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlOzs0RkFXTixnQkFBZ0I7a0JBeEI1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7aUJBQ0Y7O0FBR0QsNEVBQTRFO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTYW5uYUljb25Nb2R1bGUgfSBmcm9tICcuLi9zYS1pY29uL2ljb24ubW9kdWxlJztcblxuLy8gQ29tcG9uZW50ZXMgZGUgZm9ybXVsYXJpb3NcbmltcG9ydCB7IFNhSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGV4dGFyZWEvc2EtdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFNhQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1kYXRlL3NhLWRhdGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2FJbnB1dENvbXBvbmVudCxcbiAgICBTYVNlbGVjdENvbXBvbmVudCxcbiAgICBTYVRleHRhcmVhQ29tcG9uZW50LFxuICAgIFNhQ2hlY2tib3hDb21wb25lbnQsXG4gICAgU2FSYWRpb0NvbXBvbmVudCxcbiAgICBTYURhdGVDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTYW5uYUljb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTYUlucHV0Q29tcG9uZW50LFxuICAgIFNhU2VsZWN0Q29tcG9uZW50LFxuICAgIFNhVGV4dGFyZWFDb21wb25lbnQsXG4gICAgU2FDaGVja2JveENvbXBvbmVudCxcbiAgICBTYVJhZGlvQ29tcG9uZW50LFxuICAgIFNhRGF0ZUNvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTYW5uYUZvcm1zTW9kdWxlIHsgfVxuXG4vLyBFeHBvcnRhbW9zIGxvcyBjb21wb25lbnRlcyBwYXJhIHF1ZSBlc3TDqW4gZGlzcG9uaWJsZXMgZW4gdG9kYSBsYSBsaWJyZXLDrWFcbmV4cG9ydCB7IFNhSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudCc7XG5leHBvcnQgeyBTYVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQnO1xuZXhwb3J0IHsgU2FUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGV4dGFyZWEvc2EtdGV4dGFyZWEuY29tcG9uZW50JztcbmV4cG9ydCB7IFNhQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudCc7XG5leHBvcnQgeyBTYVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQnO1xuZXhwb3J0IHsgU2FEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1kYXRlL3NhLWRhdGUuY29tcG9uZW50JzsiXX0=