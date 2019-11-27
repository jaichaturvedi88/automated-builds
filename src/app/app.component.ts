import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'automated-builds';
  publisherName = 'Jai Chaturvedi!!';
  message = 'This automated deployment will trigger only from master branch.';
}
