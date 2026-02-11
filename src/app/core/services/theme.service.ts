import { Injectable, signal, computed } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'jesus-ribo-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly theme = signal<Theme>(this.getInitialTheme());

  readonly isDark = computed(() => this.theme() === 'dark');
  readonly isLight = computed(() => this.theme() === 'light');

  constructor() {
    this.applyTheme(this.theme());
  }

  private getInitialTheme(): Theme {
    if (typeof window === 'undefined' || !window.localStorage) return 'dark';
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  getTheme(): Theme {
    return this.theme();
  }
}
