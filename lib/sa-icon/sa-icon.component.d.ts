import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as i0 from "@angular/core";
export type IconSize = 'sm' | 'md' | 'lg';
export declare class SaIconComponent {
    name: string;
    color: string;
    size: IconSize;
    get iconDefinition(): IconDefinition | undefined;
    get iconClasses(): string;
    get iconStyles(): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<SaIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaIconComponent, "sa-icon", never, { "name": { "alias": "name"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, false, never>;
}
