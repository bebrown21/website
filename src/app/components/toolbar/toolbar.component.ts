import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeManager } from 'src/app/services/theme-manager.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { WindowComponent } from '../window/window.component';
import { filter } from 'rxjs';

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
    NgFor,
    WindowComponent,
  ],
})
export class ToolbarComponent {
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;
  number = 0;
  windows: { title: string; outlet: string; x: number; y: number }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Parse the active outlets from the URL
        const activeOutlets = this.parseOutletsFromUrl(this.router.url);

        // Restore windows based on active outlets
        activeOutlets.forEach((outlet) => {
          this.openWindow(outlet, false); // Reuse openWindow without navigation
        });
      });
  }

  // Function to parse auxiliary outlets from the URL
  private parseOutletsFromUrl(url: string): string[] {
    const outlets: string[] = [];
    const outletPattern = /\(([^)]+)\)/;
    const match = url.match(outletPattern);

    if (match && match[1]) {
      const outletPairs = match[1].split('//');
      outletPairs.forEach((pair) => {
        const [outlet] = pair.split(':');
        outlets.push(outlet);
      });
    }

    return outlets;
  }

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme);
  }

  openWindow(outlet: string, navigate: boolean = true) {
    // Prevent duplicate windows
    if (this.windows.some((win) => win.outlet === outlet)) {
      return;
    }

    this.number += 100;
    const title = outlet.charAt(0).toUpperCase() + outlet.slice(1);
    this.windows.push({ title, outlet, x: this.number, y: this.number });

    if (navigate) {
      this.router.navigate([{ outlets: { [outlet]: 'home' } }]);
    }
  }

  close(outlet: string) {
    console.log('close', outlet);
    this.router.navigate([{ outlets: { [outlet]: null } }], {
      queryParamsHandling: 'preserve',
    });
    this.windows = this.windows.filter((w) => w.outlet !== outlet);
  }
}
