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
    // Default to dark mode if no preference is set
    const darkModePreference = localStorage.getItem('dark-mode');
    if (darkModePreference === null || darkModePreference === 'true') {
      document.body.classList.add('dark');
    }
  }
}
