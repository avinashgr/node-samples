import { isPlatformServer } from '@angular/common';
import {   
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  PLATFORM_ID,
  Inject
 } from '@angular/core';

@Directive({
  selector: '[intersectionWatcher]',
  standalone: true
})

export class IntersectionWatcherDirective implements OnInit {
  @Input() classOnVisible!:string;
  @Input() threshold = 0.3;
  ngOnInit(): void {
    if (!isPlatformServer(this.platformId)) {
      this.createObserver()
    }    
  }
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}
  createObserver() {
    const options = {
      threshold: this.threshold,
      // rootMargin:"100px"
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries &&
        entries.forEach((entry,order) => {
          if (entry.isIntersecting) {
            // this.renderer.setStyle(this.element.nativeElement, "color", "red")
            this.renderer.addClass(this.element.nativeElement,this.classOnVisible)
            console.log("this is intersecting %s", this.classOnVisible)
            this.renderer.removeStyle(this.element.nativeElement,'--animation-order')
            console.log("print the object %o",this.element.nativeElement)
          }
        });
    };

    const observer: IntersectionObserver = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);
  }


}
