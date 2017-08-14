import {Component, OnInit} from '@angular/core';
import {Lista, ListaItem} from '../../app/clases/index';
import {AlertController, NavController} from 'ionic-angular';
import {ListaDeseosService} from "../../app/services/lista-deseos.service";

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {

  nombreLisa: string = "";
  nombreItem: string = "";

  items: ListaItem[] = [];


  constructor(public listaDeseosService: ListaDeseosService,
              public alertCtrl: AlertController,
              public nvCtrl: NavController,) {
  }

  ngOnInit() {
  }

  agregar() {

    if (this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push(item);

    this.nombreItem = "";
  }

  eliminarItem(index: number) {
    this.items.splice(index, 1);

  }

  guardarLista() {
    if (this.nombreLisa.length == 0) {
      this.showAlert('Nombre de la lista', 'El nombre de la lista es necesario');
      return;
    }

    let lista = new Lista(this.nombreLisa);
    lista.items = this.items;

    this.listaDeseosService.agregarLista(lista);

    this.nvCtrl.pop();

  }

  showAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
