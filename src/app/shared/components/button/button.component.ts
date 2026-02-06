import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() href: string = '';
  @Input() target: string = '_self';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  getButtonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark';
    
    if (this.variant === 'primary') {
      return `${baseClasses} bg-primary text-white hover:bg-primary-dark focus:ring-primary`;
    } else if (this.variant === 'secondary') {
      return `${baseClasses} bg-accent text-white hover:bg-accent-dark focus:ring-accent`;
    } else {
      return `${baseClasses} bg-transparent text-gray-300 border-2 border-gray-600 hover:border-primary hover:text-primary focus:ring-primary`;
    }
  }
}
