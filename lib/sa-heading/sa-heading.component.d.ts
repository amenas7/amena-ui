import * as i0 from "@angular/core";
type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type HeadingWeight = 'bold' | 'regular' | 'light' | 'semibold';
type HeadingMargin = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';
export declare class SaHeadingComponent {
    text: string;
    private _size;
    private _weight;
    private _mt?;
    private _mb?;
    private _mr?;
    private _ml?;
    set size(value: HeadingSize | any);
    get size(): HeadingSize;
    set weight(value: HeadingWeight | any);
    get weight(): HeadingWeight;
    set mt(value: HeadingMargin | any);
    get mt(): HeadingMargin | undefined;
    set mb(value: HeadingMargin | any);
    get mb(): HeadingMargin | undefined;
    set mr(value: HeadingMargin | any);
    get mr(): HeadingMargin | undefined;
    set ml(value: HeadingMargin | any);
    get ml(): HeadingMargin | undefined;
    get headingClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaHeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaHeadingComponent, "sa-heading", never, { "text": { "alias": "text"; "required": false; }; "size": { "alias": "size"; "required": false; }; "weight": { "alias": "weight"; "required": false; }; "mt": { "alias": "mt"; "required": false; }; "mb": { "alias": "mb"; "required": false; }; "mr": { "alias": "mr"; "required": false; }; "ml": { "alias": "ml"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
