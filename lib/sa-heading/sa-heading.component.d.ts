import * as i0 from "@angular/core";
type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type HeadingWeight = 'bold' | 'regular' | 'light' | 'semibold';
type HeadingMargin = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';
export declare class SaHeadingComponent {
    children: string;
    size: HeadingSize;
    weight: HeadingWeight;
    mt?: HeadingMargin;
    mb?: HeadingMargin;
    mr?: HeadingMargin;
    ml?: HeadingMargin;
    get headingClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaHeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaHeadingComponent, "sa-heading", never, { "children": { "alias": "children"; "required": false; }; "size": { "alias": "size"; "required": false; }; "weight": { "alias": "weight"; "required": false; }; "mt": { "alias": "mt"; "required": false; }; "mb": { "alias": "mb"; "required": false; }; "mr": { "alias": "mr"; "required": false; }; "ml": { "alias": "ml"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
