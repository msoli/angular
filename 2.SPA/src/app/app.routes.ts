import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// puede ser  la clase de de abajo o este codigo para exportar las rutas
// export const APP_ROUTING = RouterModule.forRoot((APP_ROUTES));

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)// usehash para usar el # y ser mas eficiente para el manejo de variables
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

