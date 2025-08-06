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
import { SaColumnDefDirective } from './sa-table/sa-column-def.directive';
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
            SannaUiFontAwesomeModule,
            SaColumnDefDirective], exports: [SannaUiComponent,
            SaButtonComponent,
            SaIconComponent,
            SaMessageboxComponent,
            SaInputComponent,
            SaHeadingComponent,
            SaTextComponent,
            SaTableComponent,
            SaColumnDefDirective,
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
                        SannaUiFontAwesomeModule,
                        SaColumnDefDirective
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
                        SaColumnDefDirective,
                        SannaUiFontAwesomeModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FubmEtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9zYW5uYS11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQWtDMUUsTUFBTSxPQUFPLGFBQWE7d0dBQWIsYUFBYTt5R0FBYixhQUFhLGlCQTdCdEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQixhQUdoQixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsb0JBQW9CLGFBR3BCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLHdCQUF3Qjt5R0FHZixhQUFhLFlBbkJ0QixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQix3QkFBd0IsRUFheEIsd0JBQXdCOzs0RkFHZixhQUFhO2tCQS9CekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLHdCQUF3QjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2FubmFVaUNvbXBvbmVudCB9IGZyb20gJy4vc2FubmEtdWkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FubmFVaUZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnLi9mb250YXdlc29tZS5tb2R1bGUnO1xyXG5cclxuLy8gQ29tcG9uZW50ZXNcclxuaW1wb3J0IHsgU2FCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NhLWJ1dHRvbi9zYS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1pY29uL3NhLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FNZXNzYWdlYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zYS1tZXNzYWdlYm94L3NhLW1lc3NhZ2Vib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvc2EtaW5wdXQvc2EtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zYS1oZWFkaW5nL3NhLWhlYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zYS10ZXh0L3NhLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc2EtdGFibGUvc2EtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL3NhLXRhYmxlL3NhLWNvbHVtbi1kZWYuZGlyZWN0aXZlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2FubmFVaUNvbXBvbmVudCxcclxuICAgIFNhQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU2FJY29uQ29tcG9uZW50LFxyXG4gICAgU2FNZXNzYWdlYm94Q29tcG9uZW50LFxyXG4gICAgU2FJbnB1dENvbXBvbmVudCxcclxuICAgIFNhSGVhZGluZ0NvbXBvbmVudCxcclxuICAgIFNhVGV4dENvbXBvbmVudCxcclxuICAgIFNhVGFibGVDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBTYW5uYVVpRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTYUNvbHVtbkRlZkRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2FubmFVaUNvbXBvbmVudCxcclxuICAgIFNhQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU2FJY29uQ29tcG9uZW50LFxyXG4gICAgU2FNZXNzYWdlYm94Q29tcG9uZW50LFxyXG4gICAgU2FJbnB1dENvbXBvbmVudCxcclxuICAgIFNhSGVhZGluZ0NvbXBvbmVudCxcclxuICAgIFNhVGV4dENvbXBvbmVudCxcclxuICAgIFNhVGFibGVDb21wb25lbnQsXHJcbiAgICBTYUNvbHVtbkRlZkRpcmVjdGl2ZSxcclxuICAgIFNhbm5hVWlGb250QXdlc29tZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbm5hVWlNb2R1bGUgeyB9XHJcbiJdfQ==