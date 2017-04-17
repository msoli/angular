import {Component, OnInit} from '@angular/core';
import {Hero, HeroesService} from '../../../servicios/heroes.service';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();


  constructor(private heroesService: HeroesService) {
  }

  buscarHeroe(buscarTexto: string): void {
    this.searchTerms.next(buscarTexto);
  }


  ngOnInit(): void {

    this.heroes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroesService.searchHero(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });

    this.heroes.subscribe(item => console.log(item));
  }


}
