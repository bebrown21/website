import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  imports: [MatTabsModule, MatButtonModule, RouterModule],
})
export class SettingsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigate(path: string): void {
    this.router.navigate([path], { relativeTo: this.activatedRoute });
  }
}
