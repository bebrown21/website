import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private analytics: AngularFireAnalytics) {
    this.analytics.logEvent('page_view', { page_title: 'Contact' });
  }
}
