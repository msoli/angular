import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Miguel';
  nombre2 = 'Miguel anGel Solis Perez';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;
  otroNumero: number = 123456798.141592653589793;

  a: number = 0.234;

  person = {
    'name': 'John',
    'age': 30,
    'cars': [
      {'name': 'Ford', 'models': ['Fiesta', 'Focus', 'Mustang']},
      {'name': 'BMW', 'models': ['320', 'X3', 'X5']},
      {'name': 'Fiat', 'models': ['500', 'Panda']}
    ]
  };

  valorDePromesa = new Promise((resolve, reject) => {

    setTimeout(() => resolve('Llego la data'), 3500);

  });

  fecha = new Date();
}
