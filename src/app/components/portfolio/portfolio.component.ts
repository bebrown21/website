import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardData } from '../card/card.component';
import { PORTFOLIO } from './data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  cards: CardData[] = [...PORTFOLIO];
}
