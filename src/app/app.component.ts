import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group, query } from '@angular/animations';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'rich';
}
