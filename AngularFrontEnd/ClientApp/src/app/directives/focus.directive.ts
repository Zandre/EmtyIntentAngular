import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[tmFocus]'
})
export class FocusDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) {
    // focus won't work at construction time - too early
}

  ngOnInit() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
}

}
