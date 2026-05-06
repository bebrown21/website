import { Component, Input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

export interface AboutCard {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  link?: string;
}

@Component({
  selector: 'about-card',
  imports: [MatAnchor, MatIcon],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: AboutCard;
}
