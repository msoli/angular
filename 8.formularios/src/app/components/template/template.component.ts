import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`

    .ng-invalid.ng-touched:not(form) {
      /*border: 1px solid red;*/
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: object = {
    nombre: null,
    apellido: null,
    email: null
  };

  constructor() {
  }

  ngOnInit() {
  }

  guardar(forma: NgForm): void {

    console.log('Formulario posteado');
    console.log('NgForm: ', forma);
    console.log('Valor: ', forma.value);
    console.log('Usuario: ', this.usuario);


  }
}
