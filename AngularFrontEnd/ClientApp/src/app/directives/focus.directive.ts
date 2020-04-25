import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tmFocus]'
})
export class FocusDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // focus won't work at construction time - too early
}

  ngOnInit() {
    this.renderer.selectRootElement(this.el.nativeElement);

    // ZB: when moving to Renderer2
    // https://stackoverflow.com/questions/43392607/renderer-is-deprecated-as-a-favor-for-renderer2-alternative-for-invokeelementm
    //this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
}

}
