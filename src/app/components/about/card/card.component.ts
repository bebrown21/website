import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface AboutCard {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  link?: string;
}

@Component({
  selector: 'about-card',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: AboutCard;
}
