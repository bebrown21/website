import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  imports: [MatCardModule],
})
export class HomeComponent {
  constructor(private analytics: AngularFireAnalytics) {
    this.analytics.logEvent('page_view', { page_title: 'Home' });
  }
}
