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
import { SaTagComponent } from './sa-tag/sa-tag.component';
import { SaLegendComponent } from './sa-legend/sa-legend.component';
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
            SaTableComponent,
            SaTagComponent,
            SaLegendComponent], imports: [CommonModule,
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
            SaTagComponent,
            SaLegendComponent,
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
                        SaTagComponent,
                        SaLegendComponent,
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
                        SaTagComponent,
                        SaLegendComponent,
                        SaColumnDefDirective,
                        SannaUiFontAwesomeModule,
                        SannaFormsModule,
                        SannaIconModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLFVBQVU7QUFDVixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBcUN4RCxNQUFNLE9BQU8sYUFBYTt3R0FBYixhQUFhO3lHQUFiLGFBQWEsaUJBakN0QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsaUJBQWlCLGFBR2pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLG9CQUFvQixhQUdwQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGVBQWU7eUdBR04sYUFBYSxZQXZCdEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixlQUFlLEVBYWYsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixlQUFlOzs0RkFHTixhQUFhO2tCQW5DekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnLi9mb250YXdlc29tZS5tb2R1bGUnO1xyXG5cclxuLy8gQ29tcG9uZW50ZXNcclxuaW1wb3J0IHsgU2FCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FNZXNzYWdlYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1tZXNzYWdlYm94L3NhLW1lc3NhZ2Vib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1oZWFkaW5nL3NhLWhlYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0L3NhLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGFibGUvc2EtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL3NhLXRhYmxlL3NhLWNvbHVtbi1kZWYuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2FUYWdDb21wb25lbnQgfSBmcm9tICcuL3NhLXRhZy9zYS10YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL3NhLWxlZ2VuZC9zYS1sZWdlbmQuY29tcG9uZW50JztcclxuXHJcbi8vIE3Ds2R1bG9zXHJcbmltcG9ydCB7IFNhbm5hRm9ybXNNb2R1bGUgfSBmcm9tICcuL2Zvcm1zL2Zvcm1zLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNhbm5hSWNvbk1vZHVsZSB9IGZyb20gJy4vc2EtaWNvbi9pY29uLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2FubmFVaUNvbXBvbmVudCxcclxuICAgIFNhQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU2FNZXNzYWdlYm94Q29tcG9uZW50LFxyXG4gICAgU2FIZWFkaW5nQ29tcG9uZW50LFxyXG4gICAgU2FUZXh0Q29tcG9uZW50LFxyXG4gICAgU2FUYWJsZUNvbXBvbmVudCxcclxuICAgIFNhVGFnQ29tcG9uZW50LFxyXG4gICAgU2FMZWdlbmRDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBTYW5uYVVpRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTYW5uYUZvcm1zTW9kdWxlLFxyXG4gICAgU2FubmFJY29uTW9kdWxlLFxyXG4gICAgU2FDb2x1bW5EZWZEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNhbm5hVWlDb21wb25lbnQsXHJcbiAgICBTYUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFNhTWVzc2FnZWJveENvbXBvbmVudCxcclxuICAgIFNhSGVhZGluZ0NvbXBvbmVudCxcclxuICAgIFNhVGV4dENvbXBvbmVudCxcclxuICAgIFNhVGFibGVDb21wb25lbnQsXHJcbiAgICBTYVRhZ0NvbXBvbmVudCxcclxuICAgIFNhTGVnZW5kQ29tcG9uZW50LFxyXG4gICAgU2FDb2x1bW5EZWZEaXJlY3RpdmUsXHJcbiAgICBTYW5uYVVpRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTYW5uYUZvcm1zTW9kdWxlLFxyXG4gICAgU2FubmFJY29uTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FubmFVaU1vZHVsZSB7IH0iXX0=