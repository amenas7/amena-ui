import * as i0 from "@angular/core";
export type TagType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
export type TagSize = 'small' | 'medium' | 'large';
export declare class SaTagComponent {
    private _text;
    private _type;
    private _size;
    set text(value: string | any);
    get text(): string;
    set type(value: TagType | any);
    get type(): TagType;
    set size(value: TagSize | any);
    get size(): TagSize;
    get tagClasses(): string;
    private getSizeClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaTagComponent, "sa-tag", never, { "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, false, never>;
}
