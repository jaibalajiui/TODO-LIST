import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.className += ' ' + 'active';
    console.log('mouse entered',  this.el.nativeElement.className );
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.className = this.el.nativeElement.className.replace('active', '');
    this.el.nativeElement.className = this.el.nativeElement.className.replace(' ', '');
    console.log('mouse out', typeof this.el.nativeElement.className );
  }
}
