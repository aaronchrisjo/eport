import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eport';

  constructor(private darkModeService: ThemeService) {}

  ngOnInit() {
    this.darkModeService.initializeDarkMode();
  }

}
