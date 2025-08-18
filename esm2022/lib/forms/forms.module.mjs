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
import { SaSwitchComponent } from './sa-switch/sa-switch.component';
import * as i0 from "@angular/core";
export class SannaFormsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaFormsModule, declarations: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaDateComponent,
            SaSwitchComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaIconModule], exports: [SaInputComponent,
            SaSelectComponent,
            SaTextareaComponent,
            SaCheckboxComponent,
            SaRadioComponent,
            SaDateComponent,
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
                        SaDateComponent,
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
                        SaDateComponent,
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
export { SaDateComponent } from './sa-date/sa-date.component';
export { SaSwitchComponent } from './sa-switch/sa-switch.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCw2QkFBNkI7QUFDN0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQTRCcEUsTUFBTSxPQUFPLGdCQUFnQjt3R0FBaEIsZ0JBQWdCO3lHQUFoQixnQkFBZ0IsaUJBeEJ6QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixpQkFBaUIsYUFHakIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZSxhQUdmLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGlCQUFpQjt5R0FHUixnQkFBZ0IsWUFmekIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZTs7NEZBWU4sZ0JBQWdCO2tCQTFCNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGlCQUFpQjtxQkFDbEI7aUJBQ0Y7O0FBR0QsNEVBQTRFO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTYW5uYUljb25Nb2R1bGUgfSBmcm9tICcuLi9zYS1pY29uL2ljb24ubW9kdWxlJztcclxuXHJcbi8vIENvbXBvbmVudGVzIGRlIGZvcm11bGFyaW9zXHJcbmltcG9ydCB7IFNhSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1zZWxlY3Qvc2Etc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3NhLXJhZGlvL3NhLXJhZGlvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vc2EtZGF0ZS9zYS1kYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1zd2l0Y2gvc2Etc3dpdGNoLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2FJbnB1dENvbXBvbmVudCxcclxuICAgIFNhU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU2FUZXh0YXJlYUNvbXBvbmVudCxcclxuICAgIFNhQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICBTYVJhZGlvQ29tcG9uZW50LFxyXG4gICAgU2FEYXRlQ29tcG9uZW50LFxyXG4gICAgU2FTd2l0Y2hDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBTYW5uYUljb25Nb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTYUlucHV0Q29tcG9uZW50LFxyXG4gICAgU2FTZWxlY3RDb21wb25lbnQsXHJcbiAgICBTYVRleHRhcmVhQ29tcG9uZW50LFxyXG4gICAgU2FDaGVja2JveENvbXBvbmVudCxcclxuICAgIFNhUmFkaW9Db21wb25lbnQsXHJcbiAgICBTYURhdGVDb21wb25lbnQsXHJcbiAgICBTYVN3aXRjaENvbXBvbmVudCxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5uYUZvcm1zTW9kdWxlIHsgfVxyXG5cclxuLy8gRXhwb3J0YW1vcyBsb3MgY29tcG9uZW50ZXMgcGFyYSBxdWUgZXN0w6luIGRpc3BvbmlibGVzIGVuIHRvZGEgbGEgbGlicmVyw61hXHJcbmV4cG9ydCB7IFNhSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1zZWxlY3Qvc2Etc2VsZWN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLWNoZWNrYm94L3NhLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3NhLXJhZGlvL3NhLXJhZGlvLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vc2EtZGF0ZS9zYS1kYXRlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFNhU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1zd2l0Y2gvc2Etc3dpdGNoLmNvbXBvbmVudCc7Il19