import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ParticlesComponent } from '../particles/particles.component';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  imports: [MatCard, ParticlesComponent],
})
export class HomeComponent {
  constructor(private analytics: AnalyticsService) {
    this.analytics.logEvent('page_view', { page_title: 'Home' });
  }
}
