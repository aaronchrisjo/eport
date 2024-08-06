import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isContactModalVisible = false;

  openContactModal() {
    this.isContactModalVisible = true;
    window.scrollTo({top:0, behavior:'smooth'})
  }
}
