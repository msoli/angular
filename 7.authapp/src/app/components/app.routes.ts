import {Routes, RouterModule} from '@angular/router';

import {PreciosComponent} from './precios/precios.component';
import {ProtegidaComponent} from './protegida/protegida.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from '../services/auth-guard.service';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: PreciosComponent},
  {
    path: 'protegida', component: ProtegidaComponent,
    canActivate: [AuthGuardService]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const ROUTING = RouterModule.forRoot(ROUTES);

