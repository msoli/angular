import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Heroe} from '../../interface/heroe.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  }

  nuevo: boolean = false;
  id: string;

  constructor(private heroeService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        this.heroeService.getHeroe(this.id).subscribe(data => this.heroe = data);
      }

    });
  }

  ngOnInit() {
  }

  guardar(): void {


    console.log(this.heroe);

    if (this.id === 'nuevo') {

      this.heroeService.nuevoHeroe(this.heroe)
        .subscribe(data => {

          this.router.navigate(['/heroe', data.name]);
        }, error => console.log(error));

    } else {

      this.heroeService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {

          console.log(data);
          // this.router.navigate(['/heroe', data.name]);
        }, error => console.log(error));

    }


  }

  agregarNuevo(form: NgForm) {

    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({
      casa: 'Marvel'
    });

  }

}
