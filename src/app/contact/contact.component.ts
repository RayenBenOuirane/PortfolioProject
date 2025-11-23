import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone:false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contact);
    // You can add your backend call or form reset logic here.
  }

  constructor(private titleService : Title){
    this.titleService.setTitle('Rayen Ben Ouirane - Contact')
  }
}
