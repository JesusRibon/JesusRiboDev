import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, SectionTitleComponent, ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  contributions = [
    'about.contribution1',
    'about.contribution2',
    'about.contribution3',
    'about.contribution4',
    'about.contribution5'
  ];
}
