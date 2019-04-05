import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ng = 'Angular';
  result = '';

  sendData(st: string): void {
    // this.ng = st; // ngOnChanges
    this.result = "This is the app component. I received a string '" + st + "' from the app-data-change component";
  }

}
