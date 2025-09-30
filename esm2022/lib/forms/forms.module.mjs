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
import { SaCalendarComponent } from './sa-calendar/sa-calendar.component';
import { SaSwitchComponent } from './sa-switch/sa-switch.component';
// Directivas de validación
import { ValidatorsModule } from './validators/validators.module';
import * as i0 from "@angular/core";
export class SannaFormsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, declarations: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaCalendarComponent,
            SaSwitchComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaIconModule,
            ValidatorsModule], exports: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaCalendarComponent,
            SaSwitchComponent,
            ValidatorsModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaIconModule,
            ValidatorsModule, ValidatorsModule] });
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
                        SaCalendarComponent,
                        SaSwitchComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SannaIconModule,
                        ValidatorsModule,
                    ],
                    exports: [
                        SaInputComponent,
                        SaSelectComponent,
                        SaTextareaComponent,
                        SaCheckboxComponent,
                        SaRadioComponent,
                        SaCalendarComponent,
                        SaSwitchComponent,
                        ValidatorsModule,
                    ]
                }]
        }] });
// Exportamos los componentes para que estén disponibles en toda la librería
export { SaInputComponent } from './sa-input/sa-input.component';
export { SaSelectComponent } from './sa-select/sa-select.component';
export { SaTextareaComponent } from './sa-textarea/sa-textarea.component';
export { SaCheckboxComponent } from './sa-checkbox/sa-checkbox.component';
export { SaRadioComponent } from './sa-radio/sa-radio.component';
export { SaCalendarComponent } from './sa-calendar/sa-calendar.component';
export { SaSwitchComponent } from './sa-switch/sa-switch.component';
// Exportamos las directivas de validación
export { LettersOnlyDirective } from './validators/letters-only.directive';
export { NumbersOnlyDirective } from './validators/numbers-only.directive';
export { ValidatorsModule } from './validators/validators.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCw2QkFBNkI7QUFDN0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFcEUsMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQThCbEUsTUFBTSxPQUFPLGdCQUFnQjt3R0FBaEIsZ0JBQWdCO3lHQUFoQixnQkFBZ0IsaUJBMUJ6QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixpQkFBaUIsYUFHakIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdCQUFnQixhQUdoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsZ0JBQWdCO3lHQUdQLGdCQUFnQixZQWpCekIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdCQUFnQixFQVVoQixnQkFBZ0I7OzRGQUdQLGdCQUFnQjtrQkE1QjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixnQkFBZ0I7cUJBQ2pCO2lCQUNGOztBQUdELDRFQUE0RTtBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVwRSwwQ0FBMEM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2FubmFJY29uTW9kdWxlIH0gZnJvbSAnLi4vc2EtaWNvbi9pY29uLm1vZHVsZSc7XHJcblxyXG4vLyBDb21wb25lbnRlcyBkZSBmb3JtdWxhcmlvc1xyXG5pbXBvcnQgeyBTYUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0YXJlYS9zYS10ZXh0YXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1jaGVja2JveC9zYS1jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1jYWxlbmRhci9zYS1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vc2Etc3dpdGNoL3NhLXN3aXRjaC5jb21wb25lbnQnO1xyXG5cclxuLy8gRGlyZWN0aXZhcyBkZSB2YWxpZGFjacOzblxyXG5pbXBvcnQgeyBWYWxpZGF0b3JzTW9kdWxlIH0gZnJvbSAnLi92YWxpZGF0b3JzL3ZhbGlkYXRvcnMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTYUlucHV0Q29tcG9uZW50LFxyXG4gICAgU2FTZWxlY3RDb21wb25lbnQsXHJcbiAgICBTYVRleHRhcmVhQ29tcG9uZW50LFxyXG4gICAgU2FDaGVja2JveENvbXBvbmVudCxcclxuICAgIFNhUmFkaW9Db21wb25lbnQsXHJcbiAgICBTYUNhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgU2FTd2l0Y2hDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBTYW5uYUljb25Nb2R1bGUsXHJcbiAgICBWYWxpZGF0b3JzTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2FJbnB1dENvbXBvbmVudCxcclxuICAgIFNhU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU2FUZXh0YXJlYUNvbXBvbmVudCxcclxuICAgIFNhQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICBTYVJhZGlvQ29tcG9uZW50LFxyXG4gICAgU2FDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIFNhU3dpdGNoQ29tcG9uZW50LFxyXG4gICAgVmFsaWRhdG9yc01vZHVsZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5uYUZvcm1zTW9kdWxlIHsgfVxyXG5cclxuLy8gRXhwb3J0YW1vcyBsb3MgY29tcG9uZW50ZXMgcGFyYSBxdWUgZXN0w6luIGRpc3BvbmlibGVzIGVuIHRvZGEgbGEgbGlicmVyw61hXHJcbmV4cG9ydCB7IFNhSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1zZWxlY3Qvc2Etc2VsZWN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3NhLXJhZGlvL3NhLXJhZGlvLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL3NhLWNhbGVuZGFyL3NhLWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1zd2l0Y2gvc2Etc3dpdGNoLmNvbXBvbmVudCc7XHJcblxyXG4vLyBFeHBvcnRhbW9zIGxhcyBkaXJlY3RpdmFzIGRlIHZhbGlkYWNpw7NuXHJcbmV4cG9ydCB7IExldHRlcnNPbmx5RGlyZWN0aXZlIH0gZnJvbSAnLi92YWxpZGF0b3JzL2xldHRlcnMtb25seS5kaXJlY3RpdmUnO1xyXG5leHBvcnQgeyBOdW1iZXJzT25seURpcmVjdGl2ZSB9IGZyb20gJy4vdmFsaWRhdG9ycy9udW1iZXJzLW9ubHkuZGlyZWN0aXZlJztcclxuZXhwb3J0IHsgVmFsaWRhdG9yc01vZHVsZSB9IGZyb20gJy4vdmFsaWRhdG9ycy92YWxpZGF0b3JzLm1vZHVsZSc7Il19