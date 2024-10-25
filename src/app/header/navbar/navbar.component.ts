import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = input<boolean>();
  menuToggle = output<boolean>()

  onToggleMenu() {
    this.menuToggle.emit(!this.isMenuOpen());
  }
}