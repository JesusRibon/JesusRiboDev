import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'Finalizada' | 'En curso';
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ScrollAnimateDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = [
    {
      institution: 'Fundación Universitaria Tecnológico Comfenalco',
      degree: 'Ingeniería de Sistemas',
      location: 'Cartagena',
      startDate: '01/02/2024',
      endDate: 'Finalizada',
      status: 'Finalizada'
    },
    {
      institution: 'Fundación Universitaria Tecnológico Comfenalco',
      degree: 'Tecnología en Desarrollo de Software',
      location: 'Cartagena',
      startDate: '01/02/2021',
      endDate: '01/12/2023',
      status: 'Finalizada'
    },
    {
      institution: 'Escuelas Profesionales Salesianas',
      degree: 'Bachiller Técnico en Redes y Mantenimiento',
      location: 'Cartagena',
      startDate: '01/02/2015',
      endDate: '01/12/2020',
      status: 'Finalizada'
    }
  ];
}
