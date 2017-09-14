import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Heroe} from '../interface/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {


  fireHeroesUrl: string = 'https://heroesapp-2b574.firebaseio.com/heroes.json';
  fireHeroeUrl: string = 'https://heroesapp-2b574.firebaseio.com/heroes/';

  constructor(private http: Http) {
  }

  nuevoHeroe(heroe: Heroe) {

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });


    return this.http.post(this.fireHeroesUrl, body, {headers: headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.fireHeroeUrl}/${key$}.json`;

    return this.http.put(url, body, {headers: headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getHeroe(key$: string) {

    let url = `${this.fireHeroeUrl}/${key$}.json`;

    return this.http.get(url).map(res => {
      // console.log(res.json());
      return res.json();
    });

  }


  getHeroes() {


    return this.http.get(this.fireHeroesUrl).map(res => {
      return res.json();
    });

  }

}
``
