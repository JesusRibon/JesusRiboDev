import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Education {
  institutionKey: string;
  degreeKey: string;
  location: string;
  startDate: string;
  endDate: string;
  statusKey: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent, ScrollAnimateDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = [
    {
      institutionKey: 'education.edu1Institution',
      degreeKey: 'education.edu1Degree',
      location: 'Cartagena',
      startDate: '01/02/2024',
      endDate: 'Finalizada',
      statusKey: 'education.completed'
    },
    {
      institutionKey: 'education.edu2Institution',
      degreeKey: 'education.edu2Degree',
      location: 'Cartagena',
      startDate: '01/02/2021',
      endDate: '01/12/2023',
      statusKey: 'education.completed'
    },
    {
      institutionKey: 'education.edu3Institution',
      degreeKey: 'education.edu3Degree',
      location: 'Cartagena',
      startDate: '01/02/2015',
      endDate: '01/12/2020',
      statusKey: 'education.completed'
    }
  ];

  interests = ['education.interest1', 'education.interest2', 'education.interest3'];
}
