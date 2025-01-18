import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardData } from '../card/card.component';
import { PORTFOLIO } from './data';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
    selector: 'app-portfolio',
    imports: [CommonModule, CardComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(private analytics: AngularFireAnalytics) {
    this.analytics.logEvent('page_view', { page_title: 'Portfolio' });
  }

  cards: CardData[] = [...PORTFOLIO];
}
