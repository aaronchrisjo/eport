import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit(); // Emit close event to notify parent component
  }
}
