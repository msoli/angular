import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = '	https://api.spotify.com/v1/artists/';

  token: string = 'Bearer BQAKFZtEMEK4IwO0bJDuSSxZPrMOKE70ydIaBh-rDzD1PzcYo48i8Cg44SHTMcWsGXxHnEsJW_62H4ho3JCULQ ';

  constructor(private http: Http) {
  }


  getArtistas(termino: string) {
    let headers = new Headers();
    headers.append('authorization', this.token);

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
    headers.append('authorization', this.token);

    let query = `${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
      .map(res => {
        // console.log(res.json());
        return res.json();
        // return this.artistas;
      });
  }

  getTop(id: string) {
    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = `${id}/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
      .map(res => {
        return res.json().tracks;
      });
  }
}
