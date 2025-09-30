import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LettersOnlyDirective implements OnChanges {
    private el;
    allowSpaces: boolean;
    allowAccents: boolean;
    private regex;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    onInput(event: any): void;
    onKeyPress(event: KeyboardEvent): void;
    onPaste(event: ClipboardEvent): void;
    private updateRegex;
    static ɵfac: i0.ɵɵFactoryDeclaration<LettersOnlyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LettersOnlyDirective, "[saLettersOnly]", never, { "allowSpaces": { "alias": "allowSpaces"; "required": false; }; "allowAccents": { "alias": "allowAccents"; "required": false; }; }, {}, never, never, true, never>;
}
