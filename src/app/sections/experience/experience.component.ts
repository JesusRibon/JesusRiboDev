import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
  achievement?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, BadgeComponent, ScrollAnimateDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Zabud Technologies',
      position: 'Desarrollador Junior',
      location: 'Cartagena',
      startDate: '07/02/2023',
      endDate: '05/11/2024',
      responsibilities: [
        'Desarrollo de aplicaciones web con Angular 12+ y MicroFrontends',
        'Implementación de Microservicios con Spring Boot',
        'Arquitectura Single-SPA para aplicaciones modulares',
        'Creación de componentes y directivas reutilizables',
        'Implementación de pruebas unitarias con Jasmine, Karma y Jest',
        'Análisis de código con SonarQube para mantener calidad',
        'Participación activa en metodologías Scrum y OKR'
      ],
      technologies: ['Angular 12+', 'TypeScript', 'Single-SPA', 'Spring Boot', 'Jasmine', 'Karma', 'Jest', 'SonarQube', 'Scrum', 'OKR']
    },
    {
      company: 'General Ledger',
      position: 'Desarrollador Junior',
      location: 'Cartagena',
      startDate: '13/01/2025',
      endDate: '31/08/2025',
      responsibilities: [
        'Soporte técnico de ERP contable e inventario',
        'Análisis y resolución de incidencias en SQL Server 2019',
        'Desarrollo de funcionalidades en módulos de inventario, compras, ventas, cartera y contabilidad',
        'Optimización de consultas y procedimientos almacenados',
        'Mantenimiento y mejoras continuas del sistema'
      ],
      technologies: ['C#', '.NET Framework', '.NET Core', 'SQL Server 2019', 'ERP']
    }
  ];
}
