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
            SaTagComponent], imports: [CommonModule,
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
                        SaColumnDefDirective,
                        SannaUiFontAwesomeModule,
                        SannaFormsModule,
                        SannaIconModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNELFVBQVU7QUFDVixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBbUN4RCxNQUFNLE9BQU8sYUFBYTt3R0FBYixhQUFhO3lHQUFiLGFBQWEsaUJBL0J0QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixjQUFjLGFBR2QsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2Ysb0JBQW9CLGFBR3BCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixlQUFlO3lHQUdOLGFBQWEsWUF0QnRCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZSxFQVlmLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZTs7NEZBR04sYUFBYTtrQkFqQ3pCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcbmltcG9ydCB7IFNhbm5hVWlGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJy4vZm9udGF3ZXNvbWUubW9kdWxlJztcblxuLy8gQ29tcG9uZW50ZXNcbmltcG9ydCB7IFNhQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1idXR0b24vc2EtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYU1lc3NhZ2Vib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLW1lc3NhZ2Vib3gvc2EtbWVzc2FnZWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1oZWFkaW5nL3NhLWhlYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFNhVGV4dENvbXBvbmVudCB9IGZyb20gJy4vc2EtdGV4dC9zYS10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10YWJsZS9zYS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL3NhLXRhYmxlL3NhLWNvbHVtbi1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNhVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10YWcvc2EtdGFnLmNvbXBvbmVudCc7XG5cbi8vIE3Ds2R1bG9zXG5pbXBvcnQgeyBTYW5uYUZvcm1zTW9kdWxlIH0gZnJvbSAnLi9mb3Jtcy9mb3Jtcy5tb2R1bGUnO1xuaW1wb3J0IHsgU2FubmFJY29uTW9kdWxlIH0gZnJvbSAnLi9zYS1pY29uL2ljb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2FubmFVaUNvbXBvbmVudCxcbiAgICBTYUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTYU1lc3NhZ2Vib3hDb21wb25lbnQsXG4gICAgU2FIZWFkaW5nQ29tcG9uZW50LFxuICAgIFNhVGV4dENvbXBvbmVudCxcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxuICAgIFNhVGFnQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFNhbm5hRm9ybXNNb2R1bGUsXG4gICAgU2FubmFJY29uTW9kdWxlLFxuICAgIFNhQ29sdW1uRGVmRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTYW5uYVVpQ29tcG9uZW50LFxuICAgIFNhQnV0dG9uQ29tcG9uZW50LFxuICAgIFNhTWVzc2FnZWJveENvbXBvbmVudCxcbiAgICBTYUhlYWRpbmdDb21wb25lbnQsXG4gICAgU2FUZXh0Q29tcG9uZW50LFxuICAgIFNhVGFibGVDb21wb25lbnQsXG4gICAgU2FUYWdDb21wb25lbnQsXG4gICAgU2FDb2x1bW5EZWZEaXJlY3RpdmUsXG4gICAgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFNhbm5hRm9ybXNNb2R1bGUsXG4gICAgU2FubmFJY29uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2FubmFVaU1vZHVsZSB7IH0iXX0=