import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { ThemeManager } from 'src/app/services/theme-manager.service';
import { AsyncPipe } from '@angular/common';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  imports: [
    AsyncPipe,
    MatToolbar,
    MatIcon,
    MatButton,
    MatFabButton,
    MatIconButton,
    RouterModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltip,
    ColorPickerComponent,
  ],
})
export class ToolbarComponent {
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme);
  }
}
