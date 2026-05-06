import { Component } from '@angular/core';
import { CardComponent, CardData } from '../card/card.component';
import { PORTFOLIO } from './data';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-portfolio',
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(private analytics: AnalyticsService) {
    this.analytics.logEvent('page_view', { page_title: 'Portfolio' });
  }

  cards: CardData[] = [...PORTFOLIO];
}
