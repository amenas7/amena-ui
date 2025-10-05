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
import { SaRadioGroupComponent } from './sa-radio-group/sa-radio-group.component';
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
            SaRadioGroupComponent,
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
            SaRadioGroupComponent,
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
                        SaRadioGroupComponent,
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
                        SaRadioGroupComponent,
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
export { SaRadioGroupComponent } from './sa-radio-group/sa-radio-group.component';
export { SaCalendarComponent } from './sa-calendar/sa-calendar.component';
export { SaSwitchComponent } from './sa-switch/sa-switch.component';
// Exportamos las directivas de validación
export { LettersOnlyDirective } from './validators/letters-only.directive';
export { NumbersOnlyDirective } from './validators/numbers-only.directive';
export { ValidatorsModule } from './validators/validators.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCw2QkFBNkI7QUFDN0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFcEUsMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQWdDbEUsTUFBTSxPQUFPLGdCQUFnQjt3R0FBaEIsZ0JBQWdCO3lHQUFoQixnQkFBZ0IsaUJBNUJ6QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsaUJBQWlCLGFBR2pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixnQkFBZ0IsYUFHaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixnQkFBZ0I7eUdBR1AsZ0JBQWdCLFlBbEJ6QixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZ0JBQWdCLEVBV2hCLGdCQUFnQjs7NEZBR1AsZ0JBQWdCO2tCQTlCNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixnQkFBZ0I7cUJBQ2pCO2lCQUNGOztBQUdELDRFQUE0RTtBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVwRSwwQ0FBMEM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2FubmFJY29uTW9kdWxlIH0gZnJvbSAnLi4vc2EtaWNvbi9pY29uLm1vZHVsZSc7XHJcblxyXG4vLyBDb21wb25lbnRlcyBkZSBmb3JtdWxhcmlvc1xyXG5pbXBvcnQgeyBTYUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0YXJlYS9zYS10ZXh0YXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1jaGVja2JveC9zYS1jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVJhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NhLXJhZGlvLWdyb3VwL3NhLXJhZGlvLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL3NhLWNhbGVuZGFyL3NhLWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1zd2l0Y2gvc2Etc3dpdGNoLmNvbXBvbmVudCc7XHJcblxyXG4vLyBEaXJlY3RpdmFzIGRlIHZhbGlkYWNpw7NuXHJcbmltcG9ydCB7IFZhbGlkYXRvcnNNb2R1bGUgfSBmcm9tICcuL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNhSW5wdXRDb21wb25lbnQsXHJcbiAgICBTYVNlbGVjdENvbXBvbmVudCxcclxuICAgIFNhVGV4dGFyZWFDb21wb25lbnQsXHJcbiAgICBTYUNoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgU2FSYWRpb0NvbXBvbmVudCxcclxuICAgIFNhUmFkaW9Hcm91cENvbXBvbmVudCxcclxuICAgIFNhQ2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICBTYVN3aXRjaENvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFNhbm5hSWNvbk1vZHVsZSxcclxuICAgIFZhbGlkYXRvcnNNb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTYUlucHV0Q29tcG9uZW50LFxyXG4gICAgU2FTZWxlY3RDb21wb25lbnQsXHJcbiAgICBTYVRleHRhcmVhQ29tcG9uZW50LFxyXG4gICAgU2FDaGVja2JveENvbXBvbmVudCxcclxuICAgIFNhUmFkaW9Db21wb25lbnQsXHJcbiAgICBTYVJhZGlvR3JvdXBDb21wb25lbnQsXHJcbiAgICBTYUNhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgU2FTd2l0Y2hDb21wb25lbnQsXHJcbiAgICBWYWxpZGF0b3JzTW9kdWxlLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbm5hRm9ybXNNb2R1bGUgeyB9XHJcblxyXG4vLyBFeHBvcnRhbW9zIGxvcyBjb21wb25lbnRlcyBwYXJhIHF1ZSBlc3TDqW4gZGlzcG9uaWJsZXMgZW4gdG9kYSBsYSBsaWJyZXLDrWFcclxuZXhwb3J0IHsgU2FJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vc2EtaW5wdXQvc2EtaW5wdXQuY29tcG9uZW50JztcclxuZXhwb3J0IHsgU2FTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NhLXNlbGVjdC9zYS1zZWxlY3QuY29tcG9uZW50JztcclxuZXhwb3J0IHsgU2FUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGV4dGFyZWEvc2EtdGV4dGFyZWEuY29tcG9uZW50JztcclxuZXhwb3J0IHsgU2FDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vc2EtY2hlY2tib3gvc2EtY2hlY2tib3guY29tcG9uZW50JztcclxuZXhwb3J0IHsgU2FSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vc2EtcmFkaW8vc2EtcmFkaW8uY29tcG9uZW50JztcclxuZXhwb3J0IHsgU2FSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1yYWRpby1ncm91cC9zYS1yYWRpby1ncm91cC5jb21wb25lbnQnO1xyXG5leHBvcnQgeyBTYUNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1jYWxlbmRhci9zYS1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5leHBvcnQgeyBTYVN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vc2Etc3dpdGNoL3NhLXN3aXRjaC5jb21wb25lbnQnO1xyXG5cclxuLy8gRXhwb3J0YW1vcyBsYXMgZGlyZWN0aXZhcyBkZSB2YWxpZGFjacOzblxyXG5leHBvcnQgeyBMZXR0ZXJzT25seURpcmVjdGl2ZSB9IGZyb20gJy4vdmFsaWRhdG9ycy9sZXR0ZXJzLW9ubHkuZGlyZWN0aXZlJztcclxuZXhwb3J0IHsgTnVtYmVyc09ubHlEaXJlY3RpdmUgfSBmcm9tICcuL3ZhbGlkYXRvcnMvbnVtYmVycy1vbmx5LmRpcmVjdGl2ZSc7XHJcbmV4cG9ydCB7IFZhbGlkYXRvcnNNb2R1bGUgfSBmcm9tICcuL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy5tb2R1bGUnOyJdfQ==