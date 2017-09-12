import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroes/heroe.component';


export const ROUTES: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'heroes'},
];

export const ROUTING = RouterModule.forRoot(ROUTES);

