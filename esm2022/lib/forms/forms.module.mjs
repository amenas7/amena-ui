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
            SannaIconModule], exports: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaCalendarComponent,
            SaSwitchComponent] });
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
                        SaCalendarComponent,
                        SaSwitchComponent,
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
                        SaCalendarComponent,
                        SaSwitchComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCw2QkFBNkI7QUFDN0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBNEJwRSxNQUFNLE9BQU8sZ0JBQWdCO3dHQUFoQixnQkFBZ0I7eUdBQWhCLGdCQUFnQixpQkF4QnpCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLGlCQUFpQixhQUdqQixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlLGFBR2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsaUJBQWlCO3lHQUdSLGdCQUFnQixZQWZ6QixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlOzs0RkFZTixnQkFBZ0I7a0JBMUI1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3FCQUNsQjtpQkFDRjs7QUFHRCw0RUFBNEU7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2FubmFJY29uTW9kdWxlIH0gZnJvbSAnLi4vc2EtaWNvbi9pY29uLm1vZHVsZSc7XHJcblxyXG4vLyBDb21wb25lbnRlcyBkZSBmb3JtdWxhcmlvc1xyXG5pbXBvcnQgeyBTYUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2Etc2VsZWN0L3NhLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0YXJlYS9zYS10ZXh0YXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1jaGVja2JveC9zYS1jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1yYWRpby9zYS1yYWRpby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1jYWxlbmRhci9zYS1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vc2Etc3dpdGNoL3NhLXN3aXRjaC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNhSW5wdXRDb21wb25lbnQsXHJcbiAgICBTYVNlbGVjdENvbXBvbmVudCxcclxuICAgIFNhVGV4dGFyZWFDb21wb25lbnQsXHJcbiAgICBTYUNoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgU2FSYWRpb0NvbXBvbmVudCxcclxuICAgIFNhQ2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICBTYVN3aXRjaENvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFNhbm5hSWNvbk1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNhSW5wdXRDb21wb25lbnQsXHJcbiAgICBTYVNlbGVjdENvbXBvbmVudCxcclxuICAgIFNhVGV4dGFyZWFDb21wb25lbnQsXHJcbiAgICBTYUNoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgU2FSYWRpb0NvbXBvbmVudCxcclxuICAgIFNhQ2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICBTYVN3aXRjaENvbXBvbmVudCxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5uYUZvcm1zTW9kdWxlIHsgfVxyXG5cclxuLy8gRXhwb3J0YW1vcyBsb3MgY29tcG9uZW50ZXMgcGFyYSBxdWUgZXN0w6luIGRpc3BvbmlibGVzIGVuIHRvZGEgbGEgbGlicmVyw61hXHJcbmV4cG9ydCB7IFNhSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1zZWxlY3Qvc2Etc2VsZWN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3NhLXJhZGlvL3NhLXJhZGlvLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL3NhLWNhbGVuZGFyL3NhLWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1zd2l0Y2gvc2Etc3dpdGNoLmNvbXBvbmVudCc7Il19