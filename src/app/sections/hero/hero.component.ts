import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent, ScrollAnimateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  cvUrl = 'assets/cv/CV - JESUS DAVID RIBON BATISTA (4).pdf';
  linkedinUrl = 'https://linkedin.com/in/jesus-ribon';
  email = 'ribonjesus123@gmail.com';

  highlights = [
    { icon: 'devicon-calendar-plain', textKey: 'hero.highlight1' },
    { icon: 'devicon-javascript-plain colored', textKey: 'hero.highlight2' },
    { icon: 'devicon-microsoftsqlserver-plain colored', textKey: 'hero.highlight3' },
    { icon: 'devicon-trello-plain colored', textKey: 'hero.highlight4' }
  ];
}
