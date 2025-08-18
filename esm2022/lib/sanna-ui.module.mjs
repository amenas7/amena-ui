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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLFVBQVU7QUFDVixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBcUN4RCxNQUFNLE9BQU8sYUFBYTt3R0FBYixhQUFhO3lHQUFiLGFBQWEsaUJBakN0QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsaUJBQWlCLGFBR2pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLG9CQUFvQixhQUdwQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGVBQWU7eUdBR04sYUFBYSxZQXZCdEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixlQUFlLEVBYWYsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixlQUFlOzs0RkFHTixhQUFhO2tCQW5DekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcbmltcG9ydCB7IFNhbm5hVWlGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJy4vZm9udGF3ZXNvbWUubW9kdWxlJztcblxuLy8gQ29tcG9uZW50ZXNcbmltcG9ydCB7IFNhQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1idXR0b24vc2EtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYU1lc3NhZ2Vib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLW1lc3NhZ2Vib3gvc2EtbWVzc2FnZWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1oZWFkaW5nL3NhLWhlYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFNhVGV4dENvbXBvbmVudCB9IGZyb20gJy4vc2EtdGV4dC9zYS10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10YWJsZS9zYS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL3NhLXRhYmxlL3NhLWNvbHVtbi1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNhVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9zYS10YWcvc2EtdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYUxlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vc2EtbGVnZW5kL3NhLWxlZ2VuZC5jb21wb25lbnQnO1xuXG4vLyBNw7NkdWxvc1xuaW1wb3J0IHsgU2FubmFGb3Jtc01vZHVsZSB9IGZyb20gJy4vZm9ybXMvZm9ybXMubW9kdWxlJztcbmltcG9ydCB7IFNhbm5hSWNvbk1vZHVsZSB9IGZyb20gJy4vc2EtaWNvbi9pY29uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNhbm5hVWlDb21wb25lbnQsXG4gICAgU2FCdXR0b25Db21wb25lbnQsXG4gICAgU2FNZXNzYWdlYm94Q29tcG9uZW50LFxuICAgIFNhSGVhZGluZ0NvbXBvbmVudCxcbiAgICBTYVRleHRDb21wb25lbnQsXG4gICAgU2FUYWJsZUNvbXBvbmVudCxcbiAgICBTYVRhZ0NvbXBvbmVudCxcbiAgICBTYUxlZ2VuZENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNhbm5hVWlGb250QXdlc29tZU1vZHVsZSxcbiAgICBTYW5uYUZvcm1zTW9kdWxlLFxuICAgIFNhbm5hSWNvbk1vZHVsZSxcbiAgICBTYUNvbHVtbkRlZkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2FubmFVaUNvbXBvbmVudCxcbiAgICBTYUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTYU1lc3NhZ2Vib3hDb21wb25lbnQsXG4gICAgU2FIZWFkaW5nQ29tcG9uZW50LFxuICAgIFNhVGV4dENvbXBvbmVudCxcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxuICAgIFNhVGFnQ29tcG9uZW50LFxuICAgIFNhTGVnZW5kQ29tcG9uZW50LFxuICAgIFNhQ29sdW1uRGVmRGlyZWN0aXZlLFxuICAgIFNhbm5hVWlGb250QXdlc29tZU1vZHVsZSxcbiAgICBTYW5uYUZvcm1zTW9kdWxlLFxuICAgIFNhbm5hSWNvbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhbm5hVWlNb2R1bGUgeyB9Il19