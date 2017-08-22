import {Routes, RouterModule} from '@angular/router';

import {PreciosComponent} from './precios/precios.component';
import {ProtegidaComponent} from './protegida/protegida.component';
import {HomeComponent} from './home/home.component';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'protegida', component: ProtegidaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const ROUTING = RouterModule.forRoot(ROUTES);

