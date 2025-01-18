import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

export interface CardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  avatar: string;
  link: string;
  alt?: string;
}

@Component({
    selector: 'portfolio-card',
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data: CardData = {
    id: '',
    title: '',
    subtitle: '',
    description: '',
    image: '',
    avatar: '',
    link: '',
    alt: '',
  };

  constructor(private router: Router) {}

  onClick(data: CardData): void {
    this.router.navigate(['portfolio', data.id, 'details']);
  }
}
