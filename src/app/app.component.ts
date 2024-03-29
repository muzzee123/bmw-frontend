import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmw-frontend';
  currentUser: any;


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
}
