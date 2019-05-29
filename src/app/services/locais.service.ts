import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Local } from '../models/Local'
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  LocaisCollection: AngularFirestoreCollection<Local>;
  Locais: Observable<Local[]>
  constructor(private afs: AngularFirestore) {
    this.Locais = this.afs.collection('locais').snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Local;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }

  getLocais() {
    return this.Locais;
  }

  returnLocalByTipo(tipo: string) {
    this.Locais = this.afs.collection('locais', ref => ref.where('tipo', '==', tipo)).snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Local;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }

  getDocumentById(id: string): AngularFirestoreDocument<Local> {
    return this.afs.collection('locais').doc(id);
  }

  deleteById(id: string) {
    return this.getDocumentById(id).delete();
  }

  updateLocal(id: string, local: Local) {
    local.id = id;

    // mock - remover, pois o objeto que sera enviado para realizar o update ja é um objeto com todas as alteracoes desejadas
    local = {
      id: id,
      contato: {
        email: 'emailalterado@gmail.com',
        telefone: '23666666666',
        website: 'sitealterado.com'
      },

    } as Local;

    return this.getDocumentById(id).update(local);
  }

}


