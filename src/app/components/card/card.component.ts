import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

export interface CardData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  avatar: string;
  link: string;
  alt?: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: CardData = {
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
    this.router.navigate([data.link]);
  }
}
