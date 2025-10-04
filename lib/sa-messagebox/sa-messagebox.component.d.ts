import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SaMessageboxComponent {
    private sanitizer;
    message: string;
    private _type;
    private _iconName?;
    private _iconSize?;
    private _iconColor?;
    class: string;
    set type(value: 'success' | 'warning' | 'error' | 'info' | any);
    get type(): 'success' | 'warning' | 'error' | 'info';
    set iconName(value: string | any);
    get iconName(): string | undefined;
    set iconSize(value: 'sm' | 'md' | 'lg' | any);
    get iconSize(): 'sm' | 'md' | 'lg' | undefined;
    set iconColor(value: string | any);
    get iconColor(): string | undefined;
    constructor(sanitizer: DomSanitizer);
    get hostClasses(): string;
    get sanitizedMessage(): SafeHtml;
    get hasIcon(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaMessageboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaMessageboxComponent, "sa-messagebox", never, { "message": { "alias": "message"; "required": false; }; "class": { "alias": "class"; "required": false; }; "type": { "alias": "type"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "iconColor": { "alias": "iconColor"; "required": false; }; }, {}, never, never, false, never>;
}
