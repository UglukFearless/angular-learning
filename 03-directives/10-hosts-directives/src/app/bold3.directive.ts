import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bold3]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldDirective3 {
     
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
    }

    onMouseEnter() {
        this.setFontWeight("bold");
    }
    onMouseLeave() {
        this.setFontWeight("normal");
    }

    private setFontWeight(val: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
    }
}