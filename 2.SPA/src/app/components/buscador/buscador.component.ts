import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero, HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Hero[];
  termino: string;

  constructor(private activatedRote: ActivatedRoute, private heroesService: HeroesService, private router: Router ) {
  }

  ngOnInit() {

    this.activatedRote.params.subscribe(params => {
      this.termino = params['termino'];
      // como recibimos un observable nos suscribimos
      this.heroesService.searchHero(params['termino']).subscribe(response => {
        this.heroes = response;
        console.log(this.heroes);
      });
    });

  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
