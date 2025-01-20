import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { MatCardModule } from '@angular/material/card';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  imports: [MatCardModule, ParticlesComponent],
})
export class HomeComponent {
  constructor(private analytics: AngularFireAnalytics) {
    this.analytics.logEvent('page_view', { page_title: 'Home' });
  }
}
