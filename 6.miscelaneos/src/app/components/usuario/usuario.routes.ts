import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
  {path: 'path', component: NameComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

