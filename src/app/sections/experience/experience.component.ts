import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Experience {
  companyKey: string;
  positionKey: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilityKeys: string[];
  technologies: string[];
  achievement?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent, BadgeComponent, ScrollAnimateDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      companyKey: 'experience.exp1Company',
      positionKey: 'experience.exp1Position',
      location: 'Cartagena',
      startDate: '07/02/2023',
      endDate: '05/11/2024',
      responsibilityKeys: ['experience.exp1Resp1', 'experience.exp1Resp2', 'experience.exp1Resp3', 'experience.exp1Resp4', 'experience.exp1Resp5', 'experience.exp1Resp6', 'experience.exp1Resp7'],
      technologies: ['Angular 12+', 'TypeScript', 'Single-SPA', 'Spring Boot', 'Jasmine', 'Karma', 'Jest', 'SonarQube', 'Scrum', 'OKR']
    },
    {
      companyKey: 'experience.exp2Company',
      positionKey: 'experience.exp2Position',
      location: 'Cartagena',
      startDate: '13/01/2025',
      endDate: '31/08/2025',
      responsibilityKeys: ['experience.exp2Resp1', 'experience.exp2Resp2', 'experience.exp2Resp3', 'experience.exp2Resp4', 'experience.exp2Resp5'],
      technologies: ['C#', '.NET Framework', '.NET Core', 'SQL Server 2019', 'ERP']
    }
  ];
}
