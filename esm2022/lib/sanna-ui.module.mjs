import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SannaUiComponent } from './sanna-ui.component';
import './fontawesome.config';
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
            FontAwesomeModule], exports: [SannaUiComponent,
            SaButtonComponent,
            SaIconComponent,
            SaMessageboxComponent,
            SaInputComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SannaUiModule, imports: [CommonModule,
            FontAwesomeModule] });
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
                        FontAwesomeModule
                    ],
                    exports: [
                        SannaUiComponent,
                        SaButtonComponent,
                        SaIconComponent,
                        SaMessageboxComponent,
                        SaInputComponent,
                        SaHeadingComponent,
                        SaTextComponent,
                        SaTableComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxzQkFBc0IsQ0FBQztBQUU5QixjQUFjO0FBQ2QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUE2QmpFLE1BQU0sT0FBTyxhQUFhO3dHQUFiLGFBQWE7eUdBQWIsYUFBYSxpQkF4QnRCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixnQkFBZ0IsYUFHaEIsWUFBWTtZQUNaLGlCQUFpQixhQUdqQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZ0JBQWdCO3lHQUdQLGFBQWEsWUFkdEIsWUFBWTtZQUNaLGlCQUFpQjs7NEZBYVIsYUFBYTtrQkExQnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjtxQkFDakI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcbmltcG9ydCAnLi9mb250YXdlc29tZS5jb25maWcnO1xuXG4vLyBDb21wb25lbnRlc1xuaW1wb3J0IHsgU2FCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFNhSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vc2EtaWNvbi9zYS1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYU1lc3NhZ2Vib3hDb21wb25lbnQgfSBmcm9tICcuL3NhLW1lc3NhZ2Vib3gvc2EtbWVzc2FnZWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvc2EtaW5wdXQvc2EtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNhSGVhZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vc2EtaGVhZGluZy9zYS1oZWFkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYVRleHRDb21wb25lbnQgfSBmcm9tICcuL3NhLXRleHQvc2EtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGFibGUvc2EtdGFibGUuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTYW5uYVVpQ29tcG9uZW50LFxuICAgIFNhQnV0dG9uQ29tcG9uZW50LFxuICAgIFNhSWNvbkNvbXBvbmVudCxcbiAgICBTYU1lc3NhZ2Vib3hDb21wb25lbnQsXG4gICAgU2FJbnB1dENvbXBvbmVudCxcbiAgICBTYUhlYWRpbmdDb21wb25lbnQsXG4gICAgU2FUZXh0Q29tcG9uZW50LFxuICAgIFNhVGFibGVDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNhbm5hVWlDb21wb25lbnQsXG4gICAgU2FCdXR0b25Db21wb25lbnQsXG4gICAgU2FJY29uQ29tcG9uZW50LFxuICAgIFNhTWVzc2FnZWJveENvbXBvbmVudCxcbiAgICBTYUlucHV0Q29tcG9uZW50LFxuICAgIFNhSGVhZGluZ0NvbXBvbmVudCxcbiAgICBTYVRleHRDb21wb25lbnQsXG4gICAgU2FUYWJsZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhbm5hVWlNb2R1bGUgeyB9XG4iXX0=