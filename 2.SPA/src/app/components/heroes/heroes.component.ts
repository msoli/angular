import {Component, OnInit} from '@angular/core';

import {Hero, HeroesService} from '../../servicios/heroes.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroesService]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroesService) {
  }

  ngOnInit() {
    // this.heroService.getHeroesProm().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesObs().subscribe(heroes => this.heroes = heroes);
    setTimeout(() => console.log(this.heroes), 2000);
  }

}
