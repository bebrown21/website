import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { Option, ThemeService } from 'src/app/services/theme.service';
import { CommonModule } from '@angular/common';
import { ThemeManager } from 'src/app/services/theme-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
  ],
})
export class ToolbarComponent implements OnInit {
  public options: Option[] = [
    {
      backgroundColor: '#fff',
      buttonColor: '#ffc107',
      headingColor: '#673ab7',
      label: 'Deep Purple & Amber',
      value: 'deeppurple-amber',
    },
    {
      backgroundColor: '#fff',
      buttonColor: '#ff4081',
      headingColor: '#3f51b5',
      label: 'Indigo & Pink',
      value: 'indigo-pink',
    },
    {
      backgroundColor: '#303030',
      buttonColor: '#607d8b',
      headingColor: '#e91e63',
      label: 'Pink & Blue Grey',
      value: 'pink-bluegrey',
    },
    {
      backgroundColor: '#303030',
      buttonColor: '#4caf50',
      headingColor: '#9c27b0',
      label: 'Purple & Green',
      value: 'purple-green',
    },
  ];

  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme);
  }

  ngOnInit() {
    // this.themeService.setTheme(this.options[0].value);
  }

  constructor(private themeService: ThemeService) {}

  switchTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }
}
