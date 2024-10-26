import {   
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
 } from '@angular/core';

@Directive({
  selector: '[intersectionWatcher]',
  standalone: true
})

export class IntersectionWatcherDirective implements OnInit {
  @Input() classOnVisible!:string;
  @Input() threshold = 0.3;
  ngOnInit(): void {
    this.createObserver()
  }
  constructor(private element: ElementRef,private renderer: Renderer2) {}
  createObserver() {
    const options = {
      threshold: this.threshold,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries &&
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // this.renderer.setStyle(this.element.nativeElement, "color", "red")
            this.renderer.addClass(this.element.nativeElement,this.classOnVisible)
            console.log("this is intersecting %s", this.classOnVisible)
          }
        });
    };

    const observer: IntersectionObserver = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);
  }


}
