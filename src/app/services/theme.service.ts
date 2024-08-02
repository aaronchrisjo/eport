import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('dark-mode', isDarkMode.toString());
  }

  initializeDarkMode() {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark');
    }
  }
  
}
