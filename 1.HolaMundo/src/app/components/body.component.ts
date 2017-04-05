import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent  {

  mostrar: boolean = true;
  texto: string = "Un gran poder requiete una gran resposabilidad.";
  autor: string = "Ben Parker";

  personajes:string[] = ["Spiderman", "Venon", "Wolverine"];
}
