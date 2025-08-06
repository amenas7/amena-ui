import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SannaUiComponent } from './sanna-ui.component';
import { SannaUiFontAwesomeModule } from './fontawesome.module';
// Componentes
import { SaButtonComponent } from './sa-button/sa-button.component';
import { SaIconComponent } from './sa-icon/sa-icon.component';
import { SaMessageboxComponent } from './sa-messagebox/sa-messagebox.component';
import { SaInputComponent } from './forms/sa-input/sa-input.component';
import { SaHeadingComponent } from './sa-heading/sa-heading.component';
import { SaTextComponent } from './sa-text/sa-text.component';
import { SaTableComponent } from './sa-table/sa-table.component';
import * as i0 from "@angular/core";
export class SannaUiModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, declarations: [SannaUiComponent,
            SaButtonComponent,
            SaIconComponent,
            SaMessageboxComponent,
            SaInputComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule], exports: [SannaUiComponent,
            SaButtonComponent,
            SaIconComponent,
            SaMessageboxComponent,
            SaInputComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent,
            SannaUiFontAwesomeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SannaUiFontAwesomeModule, SannaUiFontAwesomeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaIconComponent,
                        SaMessageboxComponent,
                        SaInputComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SannaUiFontAwesomeModule
                    ],
                    exports: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaIconComponent,
                        SaMessageboxComponent,
                        SaInputComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent,
                        SannaUiFontAwesomeModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQWdDakUsTUFBTSxPQUFPLGFBQWE7d0dBQWIsYUFBYTt5R0FBYixhQUFhLGlCQTNCdEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQixhQUdoQixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQix3QkFBd0IsYUFHeEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQix3QkFBd0I7eUdBR2YsYUFBYSxZQWpCdEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsd0JBQXdCLEVBV3hCLHdCQUF3Qjs7NEZBR2YsYUFBYTtrQkE3QnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLHdCQUF3QjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnLi9mb250YXdlc29tZS5tb2R1bGUnO1xyXG5cclxuLy8gQ29tcG9uZW50ZXNcclxuaW1wb3J0IHsgU2FCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1pY29uL3NhLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FNZXNzYWdlYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1tZXNzYWdlYm94L3NhLW1lc3NhZ2Vib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvc2EtaW5wdXQvc2EtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1oZWFkaW5nL3NhLWhlYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0L3NhLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGFibGUvc2EtdGFibGUuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2FubmFVaUNvbXBvbmVudCxcclxuICAgIFNhQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU2FJY29uQ29tcG9uZW50LFxyXG4gICAgU2FNZXNzYWdlYm94Q29tcG9uZW50LFxyXG4gICAgU2FJbnB1dENvbXBvbmVudCxcclxuICAgIFNhSGVhZGluZ0NvbXBvbmVudCxcclxuICAgIFNhVGV4dENvbXBvbmVudCxcclxuICAgIFNhVGFibGVDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBTYW5uYVVpRm9udEF3ZXNvbWVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNhbm5hVWlDb21wb25lbnQsXHJcbiAgICBTYUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFNhSWNvbkNvbXBvbmVudCxcclxuICAgIFNhTWVzc2FnZWJveENvbXBvbmVudCxcclxuICAgIFNhSW5wdXRDb21wb25lbnQsXHJcbiAgICBTYUhlYWRpbmdDb21wb25lbnQsXHJcbiAgICBTYVRleHRDb21wb25lbnQsXHJcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxyXG4gICAgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FubmFVaU1vZHVsZSB7IH1cclxuIl19