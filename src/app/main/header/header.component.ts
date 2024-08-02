import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isContactModalVisible = false;
  isMenuOpen = false; 

  constructor(private darkModeService: ThemeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  openContactModal() {
    this.isContactModalVisible = true;
  }
}
