import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: 'input[textOnly]'
})
export class TextDirective {

  @Output() valueChange = new EventEmitter()

  constructor(private element: ElementRef) {
  }

  @HostListener('keypress', ['$event']) onInputChange(event: any) {

    return (new RegExp('^[aA-zZ]*$').test(event.key));
  }

}
