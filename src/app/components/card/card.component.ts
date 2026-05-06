import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatAnchor, MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

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
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardAvatar,
    MatCardImage,
    MatAnchor,
    MatButton,
    MatIcon,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
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
