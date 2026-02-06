import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionTitleComponent, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    location: 'Cartagena, Colombia',
    phone: '+57 302 3788086',
    email: 'ribonjesus123@gmail.com',
    linkedin: 'https://linkedin.com/in/jesus-ribon'
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar el formulario
    const mailtoLink = `mailto:${this.contactInfo.email}?subject=Contacto desde portafolio&body=Nombre: ${this.formData.name}%0AEmail: ${this.formData.email}%0A%0AMensaje:%0A${this.formData.message}`;
    window.location.href = mailtoLink;
    
    // Reset form
    this.formData = { name: '', email: '', message: '' };
  }
}
