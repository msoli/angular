import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    
    
    <p [ngStyle]="{'font-size': '15px'}">
      Hola mundo ... esta es una etiqueta.
    </p>

    <p [style.fontSize]="'40px'">
      Hola mundo ... esta es una etiqueta.
    </p>

    <p [style.fontSize.px]="tamano">
      Hola mundo ... 
    </p>
    
     <button class="btn btn-primary" (click)="tamano = tamano + 5">
       <i class="fa fa-plus"></i>       
     </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
    
    
    
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 30;

  constructor() { }

  ngOnInit() {
  }

}
