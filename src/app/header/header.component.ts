import { Component, HostListener, OnInit, signal } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NavbarComponent, SidebarComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
    isMenuOpen = signal<boolean>(false);

    ngOnInit(): void {
        this.checkScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.checkScreenSize()
    }

    checkScreenSize() {
        if(window.innerWidth > 768) {
            this.isMenuOpen.set(false);
        }
    }

    handleMenuToggle(isOpen: boolean) {
        this.isMenuOpen.set(isOpen);        
    }
}