import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-liu';

  identity<T>(arg: T): T {
    return arg;
  }

  onClick1(): void {
    const a = this.identity('hello world');
    console.log('a -->F:\\AngularProject\\angular-demo', a);

    const b = this.identity(9527);
    console.log('b -->', b);
  }
}
