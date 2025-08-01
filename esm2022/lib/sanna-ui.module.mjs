import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEUsY0FBYztBQUNkLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBOEJqRSxNQUFNLE9BQU8sYUFBYTt3R0FBYixhQUFhO3lHQUFiLGFBQWEsaUJBekJ0QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZ0JBQWdCLGFBR2hCLFlBQVk7WUFDWix3QkFBd0IsYUFHeEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQix3QkFBd0I7eUdBR2YsYUFBYSxZQWZ0QixZQUFZO1lBQ1osd0JBQXdCLEVBV3hCLHdCQUF3Qjs7NEZBR2YsYUFBYTtrQkEzQnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcbmltcG9ydCB7IFNhbm5hVWlGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJy4vZm9udGF3ZXNvbWUubW9kdWxlJztcblxuLy8gQ29tcG9uZW50ZXNcbmltcG9ydCB7IFNhQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1idXR0b24vc2EtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYUljb25Db21wb25lbnQgfSBmcm9tICcuL3NhLWljb24vc2EtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FNZXNzYWdlYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1tZXNzYWdlYm94L3NhLW1lc3NhZ2Vib3guY29tcG9uZW50JztcbmltcG9ydCB7IFNhSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYUhlYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NhLWhlYWRpbmcvc2EtaGVhZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0L3NhLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFNhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NhLXRhYmxlL3NhLXRhYmxlLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2FubmFVaUNvbXBvbmVudCxcbiAgICBTYUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTYUljb25Db21wb25lbnQsXG4gICAgU2FNZXNzYWdlYm94Q29tcG9uZW50LFxuICAgIFNhSW5wdXRDb21wb25lbnQsXG4gICAgU2FIZWFkaW5nQ29tcG9uZW50LFxuICAgIFNhVGV4dENvbXBvbmVudCxcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNhbm5hVWlGb250QXdlc29tZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2FubmFVaUNvbXBvbmVudCxcbiAgICBTYUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTYUljb25Db21wb25lbnQsXG4gICAgU2FNZXNzYWdlYm94Q29tcG9uZW50LFxuICAgIFNhSW5wdXRDb21wb25lbnQsXG4gICAgU2FIZWFkaW5nQ29tcG9uZW50LFxuICAgIFNhVGV4dENvbXBvbmVudCxcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxuICAgIFNhbm5hVWlGb250QXdlc29tZU1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhbm5hVWlNb2R1bGUgeyB9XG4iXX0=