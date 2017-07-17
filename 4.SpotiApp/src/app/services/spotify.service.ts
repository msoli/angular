import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = '	https://api.spotify.com/v1/artists/';

  token: string = 'Bearer BQBDfVBjGKd2uZXdVf9WQgzqGPLxphE3HSoGKJEPOrJ_ZID8S1iU-Fq0D8Enwmw5YIf4lkpL5tFFMb4CStuyZg';

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
         // console.log(res.json().tracks);

        return res.json();
        // return this.artistas;
      });
  }
}
