import {
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  imports: [MatButtonModule, MatIconModule, RouterModule],
})
export class WindowComponent {
  @Input() title = '';
  @Input() outlet = '';
  @Input() x = 100;
  @Input() y = 100;
  @ViewChild('content', { read: ViewContainerRef, static: true })
  content!: ViewContainerRef;

  @Output() close = new EventEmitter<string>();

  private componentRef?: ComponentRef<any>;

  constructor(private router: Router) {}

  loadComponent(component: any) {
    this.content?.clear();
    this.componentRef = this.content.createComponent(component);
  }

  closeWindow() {
    this.router.navigate([{ outlets: { [this.outlet]: null } }]); // Remove auxiliary route
    this.close.emit(this.outlet);
  }
}
