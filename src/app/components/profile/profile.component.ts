import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigate(path: string): void {
    this.router.navigate([path], { relativeTo: this.activatedRoute });
  }
}
