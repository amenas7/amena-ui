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
import { SaTableServerComponent } from './sa-table-server/sa-table-server.component';
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
            SaTableServerComponent,
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
            SaTableServerComponent,
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
                        SaTableServerComponent,
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
                        SaTableServerComponent,
                        SaTagComponent,
                        SaLegendComponent,
                        SaColumnDefDirective,
                        SannaUiFontAwesomeModule,
                        SannaFormsModule,
                        SannaIconModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLFVBQVU7QUFDVixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBdUN4RCxNQUFNLE9BQU8sYUFBYTt3R0FBYixhQUFhO3lHQUFiLGFBQWEsaUJBbkN0QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFDdEIsY0FBYztZQUNkLGlCQUFpQixhQUdqQixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixvQkFBb0IsYUFHcEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsc0JBQXNCO1lBQ3RCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZTt5R0FHTixhQUFhLFlBeEJ0QixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGVBQWUsRUFjZix3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGVBQWU7OzRGQUdOLGFBQWE7a0JBckN6QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLGNBQWM7d0JBQ2QsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2Ysb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnLi9mb250YXdlc29tZS5tb2R1bGUnO1xyXG5cclxuLy8gQ29tcG9uZW50ZXNcclxuaW1wb3J0IHsgU2FCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FNZXNzYWdlYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1tZXNzYWdlYm94L3NhLW1lc3NhZ2Vib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1oZWFkaW5nL3NhLWhlYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0L3NhLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGFibGUvc2EtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUYWJsZVNlcnZlckNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGFibGUtc2VydmVyL3NhLXRhYmxlLXNlcnZlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUNvbHVtbkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4vc2EtdGFibGUvc2EtY29sdW1uLWRlZi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTYVRhZ0NvbXBvbmVudCB9IGZyb20gJy4vc2EtdGFnL3NhLXRhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYUxlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vc2EtbGVnZW5kL3NhLWxlZ2VuZC5jb21wb25lbnQnO1xyXG5cclxuLy8gTcOzZHVsb3NcclxuaW1wb3J0IHsgU2FubmFGb3Jtc01vZHVsZSB9IGZyb20gJy4vZm9ybXMvZm9ybXMubW9kdWxlJztcclxuaW1wb3J0IHsgU2FubmFJY29uTW9kdWxlIH0gZnJvbSAnLi9zYS1pY29uL2ljb24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTYW5uYVVpQ29tcG9uZW50LFxyXG4gICAgU2FCdXR0b25Db21wb25lbnQsXHJcbiAgICBTYU1lc3NhZ2Vib3hDb21wb25lbnQsXHJcbiAgICBTYUhlYWRpbmdDb21wb25lbnQsXHJcbiAgICBTYVRleHRDb21wb25lbnQsXHJcbiAgICBTYVRhYmxlQ29tcG9uZW50LFxyXG4gICAgU2FUYWJsZVNlcnZlckNvbXBvbmVudCxcclxuICAgIFNhVGFnQ29tcG9uZW50LFxyXG4gICAgU2FMZWdlbmRDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBTYW5uYVVpRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTYW5uYUZvcm1zTW9kdWxlLFxyXG4gICAgU2FubmFJY29uTW9kdWxlLFxyXG4gICAgU2FDb2x1bW5EZWZEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNhbm5hVWlDb21wb25lbnQsXHJcbiAgICBTYUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFNhTWVzc2FnZWJveENvbXBvbmVudCxcclxuICAgIFNhSGVhZGluZ0NvbXBvbmVudCxcclxuICAgIFNhVGV4dENvbXBvbmVudCxcclxuICAgIFNhVGFibGVDb21wb25lbnQsXHJcbiAgICBTYVRhYmxlU2VydmVyQ29tcG9uZW50LFxyXG4gICAgU2FUYWdDb21wb25lbnQsXHJcbiAgICBTYUxlZ2VuZENvbXBvbmVudCxcclxuICAgIFNhQ29sdW1uRGVmRGlyZWN0aXZlLFxyXG4gICAgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgU2FubmFGb3Jtc01vZHVsZSxcclxuICAgIFNhbm5hSWNvbk1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbm5hVWlNb2R1bGUgeyB9Il19