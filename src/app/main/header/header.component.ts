import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isContactModalVisible = false;
  isMenuOpen = false; 

  openContactModal() {
    this.isContactModalVisible = true;
  }
}
