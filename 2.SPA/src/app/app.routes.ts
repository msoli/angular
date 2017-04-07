import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)//usehash para usar el # y ser mas eficiente para el manejo de variables
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

