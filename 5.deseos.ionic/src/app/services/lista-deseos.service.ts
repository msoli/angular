import {Injectable} from '@angular/core';
import {ListaItem} from '../clases/lista-item';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
    let lista1 = new Lista('Compras supermercado');
    let lista2 = new Lista('Juegos que deseo');
    let lista3 = new Lista('Cosas de la universidad');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    console.log('Servicio inicializado');
  }
}
