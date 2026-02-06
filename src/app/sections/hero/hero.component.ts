import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ScrollAnimateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  cvUrl = 'assets/cv/CV - JESUS DAVID RIBON BATISTA (4).pdf';
  linkedinUrl = 'https://linkedin.com/in/jesus-ribon';
  email = 'ribonjesus123@gmail.com';

  highlights = [
    {
      icon: 'devicon-calendar-plain',
      text: '+2 años experiencia'
    },
    {
      icon: 'devicon-javascript-plain colored',
      text: 'MicroFrontends (Single-SPA)'
    },
    {
      icon: 'devicon-microsoftsqlserver-plain colored',
      text: 'SQL Server / ERP Support'
    },
    {
      icon: 'devicon-trello-plain colored',
      text: 'Agile: Scrum / OKR'
    }
  ];
  
}
