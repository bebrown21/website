import { Injectable } from '@angular/core';
import { StyleManagerService } from './style-manager.service';

export interface Option {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(private styleManager: StyleManagerService) {}

  setTheme(themeToSet: string): void {
    this.styleManager.setStyle(
      'theme',
      `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }
}
