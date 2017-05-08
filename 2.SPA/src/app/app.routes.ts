import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {BuscadorComponent} from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'buscar/:termino', component: BuscadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// puede ser  la clase de de abajo o este codigo para exportar las rutas
// export const APP_ROUTING = RouterModule.forRoot((APP_ROUTES));

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)// use hash para usar el # y ser mas eficiente para el manejo de variables
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

