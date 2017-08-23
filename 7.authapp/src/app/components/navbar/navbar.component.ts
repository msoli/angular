import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }


  login(): void {
    this.auth.login();
  }

  salir(): void {
    this.auth.logout();
  }

}
