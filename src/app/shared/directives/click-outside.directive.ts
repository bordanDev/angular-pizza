import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  listening = false;

  ngAfterViewInit() {
    setTimeout(() => {
      return (this.listening = true);
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    console.log(event.target);
    if (!this.listening) return;

    if (!this.elementRef.nativeElement.contains(event.target)) {
      const outletsName = this.route.outlet;
      this.router.navigate(
        [
          {
            outlets: {
              [outletsName]: null,
            },
          },
        ],
        { relativeTo: this.route.root },
      );
    }
  }
}
