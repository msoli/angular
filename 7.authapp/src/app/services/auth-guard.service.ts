import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log(route);

    if (this.auth.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      return false;
    }
  }


}
