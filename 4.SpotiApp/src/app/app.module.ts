import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {APP_ROUTING} from './app.routes';
// import {RoutingModule} from './app.routes';

import {AppComponent} from './app.component';
import {SpotifyService} from './services/spotify.service';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
    // RoutingModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
