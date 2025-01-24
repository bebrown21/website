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
import { FALLBACK_PRIMARY_COLOR } from 'src/app/const/colors';

@Component({
  selector: 'app-color-picker',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent {
  color = FALLBACK_PRIMARY_COLOR;
  isDark = toSignal(inject(ThemeManager).isDark$);

  constructor(private themeManager: ThemeManager) {
    effect(() => {
      this.generateDynamicTheme(this.isDark());
    });
  }

  changeTheme(ev: Event) {
    const inputElement = ev.target as HTMLInputElement;

    this.color = inputElement.value;
    this.themeManager.selectedColorFromPicker.set(this.color);
    this.generateDynamicTheme(this.isDark());
  }

  generateDynamicTheme(isDark?: boolean) {
    let argb;
    try {
      argb = argbFromHex(this.color);
    } catch (error) {
      // falling to default color if it's invalid color
      argb = argbFromHex(FALLBACK_PRIMARY_COLOR);
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
