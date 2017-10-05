import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Mensaje} from '../interface/mensaje.interface';
import {Observable} from 'rxjs/Observable';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;

  usuario: any = null;

  constructor(private af: AngularFireDatabase, public afAuth: AngularFireAuth) {

    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }


  }

  cargarMensajes(): Observable<any[]> {
    this.chats = this.af.list('/chats', {
      query: {
        limitToLast: 20,
        orderByKey: true
      }
    });

    return this.chats;
  }

  agregarMensaje(texto: string) {

    const mensaje: Mensaje = {
      nombre: this.usuario.displayName,
      mensaje: texto,
      uid: this.usuario.uid
    };

    return this.chats.push(mensaje);

  }

  login(proveedor: string) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        console.log(data);
        this.usuario = data.user;
        localStorage.setItem('usuario', JSON.stringify(this.usuario));

      });
  }


  logout() {
    localStorage.removeItem('usuario');
    this.usuario = null;

    this.afAuth.auth.signOut();
  }
}
