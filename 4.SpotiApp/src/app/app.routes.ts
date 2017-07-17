import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';

const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artista/:id', component: ArtistaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});

// @NgModule({
//   imports: [
//     RouterModule.forRoot(ROUTES, {useHash: true})
//   ],
//   exports: [
//     RouterModule
//   ],
// })
// export class RoutingModule {
// }

