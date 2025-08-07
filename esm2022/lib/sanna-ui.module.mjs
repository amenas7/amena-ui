import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SannaUiComponent } from './sanna-ui.component';
import { SannaUiFontAwesomeModule } from './fontawesome.module';
// Componentes
import { SaButtonComponent } from './sa-button/sa-button.component';
import { SaMessageboxComponent } from './sa-messagebox/sa-messagebox.component';
import { SaHeadingComponent } from './sa-heading/sa-heading.component';
import { SaTextComponent } from './sa-text/sa-text.component';
import { SaTableComponent } from './sa-table/sa-table.component';
import { SaColumnDefDirective } from './sa-table/sa-column-def.directive';
// Módulos
import { SannaFormsModule } from './forms/forms.module';
import { SannaIconModule } from './sa-icon/icon.module';
import * as i0 from "@angular/core";
export class SannaUiModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, declarations: [SannaUiComponent,
            SaButtonComponent,
            SaMessageboxComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule,
            SaColumnDefDirective], exports: [SannaUiComponent,
            SaButtonComponent,
            SaMessageboxComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent,
            SaColumnDefDirective,
            SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule, SannaUiFontAwesomeModule,
            SannaFormsModule,
            SannaIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaMessageboxComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SannaUiFontAwesomeModule,
                        SannaFormsModule,
                        SannaIconModule,
                        SaColumnDefDirective
                    ],
                    exports: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaMessageboxComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                        SaColumnDefDirective,
                        SannaUiFontAwesomeModule,
                        SannaFormsModule,
                        SannaIconModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFMUUsVUFBVTtBQUNWLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFpQ3hELE1BQU0sT0FBTyxhQUFhO3dHQUFiLGFBQWE7eUdBQWIsYUFBYSxpQkE3QnRCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZ0JBQWdCLGFBR2hCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLG9CQUFvQixhQUdwQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixlQUFlO3lHQUdOLGFBQWEsWUFyQnRCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZSxFQVdmLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZTs7NEZBR04sYUFBYTtrQkEvQnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3dCQUNoQixlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTYW5uYVVpQ29tcG9uZW50IH0gZnJvbSAnLi9zYW5uYS11aS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYW5uYVVpRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICcuL2ZvbnRhd2Vzb21lLm1vZHVsZSc7XHJcblxyXG4vLyBDb21wb25lbnRlc1xyXG5pbXBvcnQgeyBTYUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc2EtYnV0dG9uL3NhLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYU1lc3NhZ2Vib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLW1lc3NhZ2Vib3gvc2EtbWVzc2FnZWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUhlYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NhLWhlYWRpbmcvc2EtaGVhZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVRleHRDb21wb25lbnQgfSBmcm9tICcuL3NhLXRleHQvc2EtdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10YWJsZS9zYS10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUNvbHVtbkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4vc2EtdGFibGUvc2EtY29sdW1uLWRlZi5kaXJlY3RpdmUnO1xyXG5cclxuLy8gTcOzZHVsb3NcclxuaW1wb3J0IHsgU2FubmFGb3Jtc01vZHVsZSB9IGZyb20gJy4vZm9ybXMvZm9ybXMubW9kdWxlJztcclxuaW1wb3J0IHsgU2FubmFJY29uTW9kdWxlIH0gZnJvbSAnLi9zYS1pY29uL2ljb24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTYW5uYVVpQ29tcG9uZW50LFxyXG4gICAgU2FCdXR0b25Db21wb25lbnQsXHJcbiAgICBTYU1lc3NhZ2Vib3hDb21wb25lbnQsXHJcbiAgICBTYUhlYWRpbmdDb21wb25lbnQsXHJcbiAgICBTYVRleHRDb21wb25lbnQsXHJcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgU2FubmFGb3Jtc01vZHVsZSxcclxuICAgIFNhbm5hSWNvbk1vZHVsZSxcclxuICAgIFNhQ29sdW1uRGVmRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTYW5uYVVpQ29tcG9uZW50LFxyXG4gICAgU2FCdXR0b25Db21wb25lbnQsXHJcbiAgICBTYU1lc3NhZ2Vib3hDb21wb25lbnQsXHJcbiAgICBTYUhlYWRpbmdDb21wb25lbnQsXHJcbiAgICBTYVRleHRDb21wb25lbnQsXHJcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxyXG4gICAgU2FDb2x1bW5EZWZEaXJlY3RpdmUsXHJcbiAgICBTYW5uYVVpRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTYW5uYUZvcm1zTW9kdWxlLFxyXG4gICAgU2FubmFJY29uTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FubmFVaU1vZHVsZSB7IH0iXX0=