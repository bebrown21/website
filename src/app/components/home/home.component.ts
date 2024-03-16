import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent {
  constructor(private analytics: AngularFireAnalytics) {
    this.analytics.logEvent('page_view', { page_title: 'Home' });
  }
}
