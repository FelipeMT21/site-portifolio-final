import { Component, inject, input, output, Renderer2 } from '@angular/core';

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
  render = inject(Renderer2)

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onToggleMenu() {
    this.menuToggle.emit(!this.isMenuOpen());
  }
}