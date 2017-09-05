import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: 'Miguel',
      apellido: 'Solis'
    },
    correo: 'miguel.solis@mail.com',
    // pasatiempos: []
  };

  constructor() {

    console.log(this.usuario);


    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
          Validators.required,
          this.noHerrera
        ]),

      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl(),

    });

    this.forma.controls['password2'].setValidators([
      Validators.required, this.noIgual.bind(this.forma)
    ]);

    // this.forma.setValue(this.usuario);

  }

  ngOnInit() {
  }

  agregarPasatiempo(): void {

    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    );

  }


  noHerrera(control: FormControl): { [s: string]: boolean } {

    if (control.value === 'herrera') {
      return {
        noherrera: true
      };
    }

    return null;

  }

  noIgual(control: FormControl): { [s: string]: boolean } {

    let forma: any = this;

    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    }

    return null;

  }

  guardarCambio(): void {
    console.log(this.forma);
    console.log(this.forma.value);

    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });

    // this.forma.controls['correo'].setValue('correo@mai.com');

  }

}
