import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Lista, ListaItem} from '../../app/clases/index';
import {ListaDeseosService} from "../../app/services/lista-deseos.service";
import {AlertController} from 'ionic-angular';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor(private navController: NavController,
              private navParams: NavParams,
              private listaDeseosService: ListaDeseosService,
              public alertCtrl: AlertController) {

    console.log(this.navParams);

    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");

  }

  ngOnInit() {
  }

  actualizar(item: ListaItem) {

    item.completado = !item.completado;

    let todosMarcados = true;
    for (let item of this.lista.items) {
      if (!item.completado) {
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this.listaDeseosService.actualizarData();
  }


  borrarItem() {
    this.showAlertEliminar();
  }

  showAlertEliminar() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar lista',
      message: '¿Está seguro que desea eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            this.listaDeseosService.eliminarLista(this.idx);
            this.navController.pop();
          }
        }
      ]
    });
    confirm.present();
  }


}
