import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Skill {
  name: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, BadgeComponent, ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  activeTab = signal(0);

  categories: SkillCategory[] = [
    {
      name: 'Lenguajes/Frameworks',
      skills: [
        { name: 'Angular', level: 'Avanzado', icon: 'devicon-angularjs-plain colored' },
        { name: 'TypeScript', level: 'Avanzado', icon: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', level: 'Avanzado', icon: 'devicon-javascript-plain colored' },
        { name: 'C#', level: 'Intermedio', icon: 'devicon-csharp-plain colored' },
        { name: 'Node.js', level: 'Intermedio', icon: 'devicon-nodejs-plain colored' },
        { name: 'Spring Boot', level: 'Intermedio', icon: 'devicon-spring-plain colored' },
        { name: 'Laravel', level: 'Básico', icon: 'devicon-laravel-plain colored' },
        { name: 'HTML', level: 'Avanzado', icon: 'devicon-html5-plain colored' },
        { name: 'CSS/SCSS', level: 'Avanzado', icon: 'devicon-css3-plain colored' }
      ]
    },
    {
      name: 'Bases de Datos',
      skills: [
        { name: 'SQL Server', level: 'Avanzado', icon: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'MySQL', level: 'Intermedio', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', level: 'Intermedio', icon: 'devicon-postgresql-plain colored' }
      ]
    },
    {
      name: 'Herramientas/Metodologías',
      skills: [
        { name: 'Git', level: 'Avanzado', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', level: 'Avanzado', icon: 'devicon-github-original colored' },
        { name: 'Jira', level: 'Intermedio', icon: 'devicon-jira-plain colored' },
        { name: 'API REST', level: 'Avanzado', icon: 'devicon-fastapi-plain colored' },
        { name: 'Single-SPA', level: 'Avanzado', icon: 'devicon-javascript-plain colored' },
        { name: 'Keycloak', level: 'Intermedio', icon: 'devicon-keycloak-plain colored' },
        { name: 'Scrum', level: 'Avanzado', icon: 'devicon-trello-plain colored' },
        { name: 'OKR', level: 'Intermedio', icon: 'devicon-google-plain colored' },
        { name: 'Bootstrap', level: 'Avanzado', icon: 'devicon-bootstrap-plain colored' },
        { name: 'Tailwind CSS', level: 'Avanzado', icon: 'devicon-tailwindcss-plain colored' }
      ]
    }
  ];
  

  mainStack = [
    { name: 'Angular', level: 'Avanzado', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', level: 'Avanzado', icon: 'devicon-typescript-plain colored' },
    { name: 'JavaScript', level: 'Avanzado', icon: 'devicon-javascript-plain colored' },
    { name: 'Single-SPA', level: 'Avanzado', icon: 'devicon-javascript-plain colored' },
    { name: 'Spring Boot', level: 'Intermedio', icon: 'devicon-spring-plain colored' },
    { name: '.NET', level: 'Intermedio', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'Node.js', level: 'Intermedio', icon: 'devicon-nodejs-plain colored' },
    { name: 'SQL Server', level: 'Avanzado', icon: 'devicon-microsoftsqlserver-plain colored' }
  ];
  
  getLevelWidth(level: string): string {
    switch (level) {
      case 'Avanzado': return '90%';
      case 'Intermedio': return '70%';
      case 'Básico': return '50%';
      default: return '50%';
    }
  }

  getLevelColor(level: string): string {
    switch (level) {
      case 'Avanzado': return 'bg-primary';
      case 'Intermedio': return 'bg-accent';
      case 'Básico': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  }

  setActiveTab(index: number) {
    this.activeTab.set(index);
  }
}
