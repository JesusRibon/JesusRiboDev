import { Component, Input } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
