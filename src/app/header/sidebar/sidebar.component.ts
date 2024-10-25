import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isMenuOpen = input<boolean>();
  menuToggle = output<boolean>()

  onToggleMenu() {
    this.menuToggle.emit(!this.isMenuOpen());
  }
}
