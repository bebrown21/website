import { PORTFOLIO } from './../data';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardData } from '../../card/card.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  data: CardData | undefined = {
    id: '',
    title: '',
    subtitle: '',
    description: '',
    image: '',
    avatar: '',
    link: '',
    alt: '',
  };

  get id(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = PORTFOLIO.find((job) => job.id === this.id);
  }
}
