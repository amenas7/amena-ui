import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SaMessageboxComponent {
    private sanitizer;
    message: string;
    isFullWidth: boolean;
    type: 'success' | 'warning' | 'error' | 'info';
    iconName?: string;
    iconSize?: 'sm' | 'md' | 'lg';
    iconColor?: string;
    constructor(sanitizer: DomSanitizer);
    get sanitizedMessage(): SafeHtml;
    get hasIcon(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaMessageboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaMessageboxComponent, "sa-messagebox", never, { "message": { "alias": "message"; "required": false; }; "isFullWidth": { "alias": "isFullWidth"; "required": false; }; "type": { "alias": "type"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "iconColor": { "alias": "iconColor"; "required": false; }; }, {}, never, never, false, never>;
}
