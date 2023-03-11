import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
})
export class ToolbarComponent {}
