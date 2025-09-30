import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NumbersOnlyDirective implements OnChanges {
    private el;
    allowDecimals: boolean;
    allowNegative: boolean;
    maxDecimals: number;
    private regex;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    private isProcessing;
    onInput(event: any): void;
    onKeyPress(event: KeyboardEvent): void;
    onPaste(event: ClipboardEvent): void;
    private updateRegex;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumbersOnlyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NumbersOnlyDirective, "[saNumbersOnly]", never, { "allowDecimals": { "alias": "allowDecimals"; "required": false; }; "allowNegative": { "alias": "allowNegative"; "required": false; }; "maxDecimals": { "alias": "maxDecimals"; "required": false; }; }, {}, never, never, true, never>;
}
