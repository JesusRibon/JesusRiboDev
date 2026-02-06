import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private observer: IntersectionObserver | null = null;

  @Input() appScrollAnimate: AnimationType = 'fade-up';
  @Input() animateDelay = 0;
  @Input() animateThreshold = 0.1;
  @Input() animateOnce = true;

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'animate-initial');
    this.renderer.addClass(this.el.nativeElement, `animate-${this.appScrollAnimate}`);
    if (this.animateDelay > 0) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'animation-delay',
        `${this.animateDelay}ms`
      );
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'animate-visible');
            if (this.animateOnce) {
              this.observer?.unobserve(entry.target);
            }
          } else if (!this.animateOnce) {
            this.renderer.removeClass(entry.target, 'animate-visible');
          }
        });
      },
      {
        threshold: this.animateThreshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
