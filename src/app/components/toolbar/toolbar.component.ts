import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeManager } from 'src/app/services/theme-manager.service';
import { AsyncPipe } from '@angular/common';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  imports: [
    AsyncPipe,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
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
