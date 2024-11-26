import { Component, input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  phoneNumber = input<string>('5585991042325');
  iconUrl = input<string>('svg/whatsapp-icon.svg');
}
