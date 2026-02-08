import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Skill {
  name: string;
  level: 'basic' | 'intermediate' | 'advanced';
  levelKey: string;
  icon: string;
}

interface SkillCategory {
  nameKey: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent, BadgeComponent, ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  activeTab = signal(0);

  categories: SkillCategory[] = [
    {
      nameKey: 'skills.category1',
      skills: [
        { name: 'Angular', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-angularjs-plain colored' },
        { name: 'TypeScript', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-javascript-plain colored' },
        { name: 'C#', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-csharp-plain colored' },
        { name: 'Node.js', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-nodejs-plain colored' },
        { name: 'Spring Boot', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-spring-plain colored' },
        { name: 'Laravel', level: 'basic', levelKey: 'skills.levelBasic', icon: 'devicon-laravel-plain colored' },
        { name: 'HTML', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-html5-plain colored' },
        { name: 'CSS/SCSS', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-css3-plain colored' }
      ]
    },
    {
      nameKey: 'skills.category2',
      skills: [
        { name: 'SQL Server', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'MySQL', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-postgresql-plain colored' }
      ]
    },
    {
      nameKey: 'skills.category3',
      skills: [
        { name: 'Git', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-github-original colored' },
        { name: 'Jira', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-jira-plain colored' },
        { name: 'API REST', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-fastapi-plain colored' },
        { name: 'Single-SPA', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-javascript-plain colored' },
        { name: 'Keycloak', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-keycloak-plain colored' },
        { name: 'Scrum', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-trello-plain colored' },
        { name: 'OKR', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-google-plain colored' },
        { name: 'Bootstrap', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-bootstrap-plain colored' },
        { name: 'Tailwind CSS', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-tailwindcss-plain colored' }
      ]
    }
  ];

  mainStack = [
    { name: 'Angular', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-typescript-plain colored' },
    { name: 'JavaScript', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-javascript-plain colored' },
    { name: 'Single-SPA', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-javascript-plain colored' },
    { name: 'Spring Boot', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-spring-plain colored' },
    { name: '.NET', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'Node.js', level: 'intermediate', levelKey: 'skills.levelIntermediate', icon: 'devicon-nodejs-plain colored' },
    { name: 'SQL Server', level: 'advanced', levelKey: 'skills.levelAdvanced', icon: 'devicon-microsoftsqlserver-plain colored' }
  ];

  getLevelWidth(level: string): string {
    switch (level) {
      case 'advanced': return '90%';
      case 'intermediate': return '70%';
      case 'basic': return '50%';
      default: return '50%';
    }
  }

  getLevelColor(level: string): string {
    switch (level) {
      case 'advanced': return 'bg-primary';
      case 'intermediate': return 'bg-accent';
      case 'basic': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  }

  setActiveTab(index: number) {
    this.activeTab.set(index);
  }
}
