import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  @Output() valueChange = new EventEmitter()

  constructor(private element: ElementRef) {
  }

  @HostListener('keypress', ['$event']) onInputChange(event: any) {

    return (new RegExp('^[0-9]*$').test(event.key));
  }

}
