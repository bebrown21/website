import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFabAnchor } from '@angular/material/button';
import { MatList, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-contact',
  imports: [MatIcon, MatFabAnchor, MatList, MatListItem, MatListItemIcon, MatListItemTitle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private analytics: AngularFireAnalytics) {
    this.analytics.logEvent('page_view', { page_title: 'Contact' });
  }
}
