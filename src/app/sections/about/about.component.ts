import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  contributions = [
    'Rendimiento y optimización de aplicaciones',
    'Escalabilidad de sistemas y arquitectura',
    'Experiencia de usuario (UX) excepcional',
    'Trabajo en equipo y colaboración',
    'Ética profesional y compromiso'
  ];
}
