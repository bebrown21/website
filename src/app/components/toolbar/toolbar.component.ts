import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeManager } from 'src/app/services/theme-manager.service';
import { AsyncPipe } from '@angular/common';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { WindowComponent } from '../window/window.component';

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
    WindowComponent,
  ],
})
export class ToolbarComponent {
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;
  number = 0;
  windows: { title: string; outlet: string; x: number; y: number }[] = [];
  windowCounts: { [key: string]: number } = {};

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Get the active outlets directly from the current URL
    const activeOutlets: string[] = this.parseOutletsFromUrl(
      window.location.pathname
    );

    // Restore only missing windows
    activeOutlets.forEach((outlet: string) => {
      if (!this.windows.some((win) => win.outlet === outlet)) {
        this.openWindow(outlet.split('-')[0], false, outlet.split('-')[1]);
      }
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

  changeTheme(theme: string): void {
    this.themeManager.changeTheme(theme);
  }

  openWindow(
    appName: string,
    navigate: boolean = true,
    id: string | null = null
  ): void {
    this.number += 100; // Change window position (remove later)

    const _id = id ?? crypto.randomUUID().substring(0, 4);
    const outletName = `${appName}-${_id}`; // Generate unique appName name
    const currentRoutes = this.router.config;
    const newOutlet = this.cloneExistingOutlet(currentRoutes, appName);
    const primaryOutletIndex = currentRoutes.findIndex(
      (route) => route.outlet === appName
    );

    // Deep clone to avoid mutating original
    newOutlet.outlet = outletName; // Change appName name dynamically

    if (primaryOutletIndex !== -1) {
      // Insert new route *right after* the route
      currentRoutes.splice(primaryOutletIndex + 1, 0, newOutlet);
    } else {
      // If route isn't found, just append (fallback)
      currentRoutes.push(newOutlet);
    }

    // Update the router configuration dynamically
    this.router.resetConfig(currentRoutes);

    const title = outletName.charAt(0).toUpperCase() + outletName.slice(1);
    this.windows.push({
      title,
      outlet: outletName,
      x: this.number,
      y: this.number,
    });

    // Navigate to the new dynamically added route
    if (navigate) {
      this.router.navigate([{ outlets: { [outletName]: 'home' } }]);
    }
  }

  cloneExistingOutlet(routeConfig: Routes, outlet: string) {
    const outletIndex = routeConfig.findIndex(
      (route) => route.outlet === outlet
    );
    if (outletIndex === -1) {
      console.error(`${outlet} route definition not found!`);
      return;
    }
    return deepCloneRoute(routeConfig[outletIndex]);
  }

  close(outlet: string): void {
    // Remove the outlet from the router config
    const currentRoutes = this.router.config;
    const updatedRoutes = currentRoutes.filter(
      (route) => route.outlet !== outlet
    );

    // Update the router configuration dynamically
    this.router.resetConfig(updatedRoutes);
    this.router.navigate([{ outlets: { [outlet]: null } }], {
      queryParamsHandling: 'preserve',
    });
    this.windows = this.windows.filter((w) => w.outlet !== outlet);
  }
}

function deepCloneRoute(route: Route | Routes): any {
  if (Array.isArray(route)) {
    return route.map(deepCloneRoute) as Routes;
  } else if (typeof route === 'object' && route !== null) {
    const cloned: Route = { ...route }; // Shallow clone the object
    if (route.children) {
      cloned.children = deepCloneRoute(route.children) as Routes; // Recursively clone children
    }
    return cloned;
  }
  return route;
}
