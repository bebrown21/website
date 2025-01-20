import { Component, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from '@material/material-color-utilities';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeManager } from 'src/app/services/theme-manager.service';

const FALLBACK_COLOR = '#6750a4';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent {
  color = FALLBACK_COLOR;
  isDark = toSignal(inject(ThemeManager).isDark$);

  constructor() {
    effect(() => {
      this.generateDynamicTheme(this.isDark());
    });
  }

  changeTheme(ev: Event) {
    const inputElement = ev.target as HTMLInputElement;

    this.color = inputElement.value;

    this.generateDynamicTheme(this.isDark());
  }

  generateDynamicTheme(isDark?: boolean) {
    let argb;
    try {
      argb = argbFromHex(this.color);
    } catch (error) {
      // falling to default color if it's invalid color
      argb = argbFromHex(FALLBACK_COLOR);
    }

    const targetElement = document.documentElement;

    // Get the theme from a hex color
    const theme = themeFromSourceColor(argb);

    // Apply theme to root element
    applyTheme(theme, {
      target: targetElement,
      dark: isDark,
      brightnessSuffix: true,
    });
  }
}
