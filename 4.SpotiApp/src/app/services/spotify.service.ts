import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = '	https://api.spotify.com/v1/artists/';

  constructor(private http: Http) {
  }


  getArtistas(termino: string) {
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBtmGj0GOu6k5vPzhE1BU86kAVqJd0pP-pmrvybWyIv5z2FzWvrPASJ799IobUi9Az9m7rWGFy3P7OdCGrm3A');

    let query = `q=${termino}&type=artist`;
    let url = this.urlBusqueda + '?' + query;

    return this.http.get(url, {headers})
      .map(res => {
        this.artistas = res.json().artists.items;
        // console.log(this.artistas);

        // return this.artistas;
      });
  }

  getArtista(id: string) {
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBtmGj0GOu6k5vPzhE1BU86kAVqJd0pP-pmrvybWyIv5z2FzWvrPASJ799IobUi9Az9m7rWGFy3P7OdCGrm3A');

    let query = `${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json());

        return res.json();
        // return this.artistas;
      });
  }
}
