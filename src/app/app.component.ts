import { Component } from '@angular/core';
import { faUser, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faUser = faUser;
  faArrowUp = faArrowUp;
  title = 'rest-frontend';
}
