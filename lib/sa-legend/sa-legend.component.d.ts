import { TooltipPosition } from '../types/tooltip.types';
import * as i0 from "@angular/core";
export declare class SaLegendComponent {
    private _color;
    private _tooltip?;
    private _tooltipPosition;
    class: string;
    set color(value: string | any);
    get color(): string;
    set tooltip(value: string | any);
    get tooltip(): string | undefined;
    set tooltipPosition(value: TooltipPosition | any);
    get tooltipPosition(): TooltipPosition;
    get hostClasses(): string;
    get isLongTooltip(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaLegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaLegendComponent, "sa-legend", never, { "class": { "alias": "class"; "required": false; }; "color": { "alias": "color"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; }, {}, never, never, false, never>;
}
