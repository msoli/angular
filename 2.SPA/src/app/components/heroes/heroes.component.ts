import {Component, OnInit} from '@angular/core';

import {Hero, HeroesService} from '../../servicios/heroes.service';
import 'rxjs/add/operator/map';

import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroesService]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {
    // this.heroService.getHeroesProm().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesObs().subscribe(heroes => this.heroes = heroes);
    // setTimeout(() => console.log(this.heroes), 2000);
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
