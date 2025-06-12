import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from "@angular/router";

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) { }

  listening = false;

  ngAfterViewInit(){
    setTimeout(() => {
      return this.listening = true;
    })
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent){
    if(!this.listening) return;

    if(!this.elementRef.nativeElement.contains(event.target)){
      console.log('click by directive')
      this.router.navigate(['../'])
    }
  }

}
