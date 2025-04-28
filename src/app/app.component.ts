import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [PoFieldModule]
})
export class AppComponent {
  title = 'po-test';
}
