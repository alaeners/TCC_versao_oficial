import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Local } from '../../models/Local'
import { Question } from 'app/models/Question';

import 'rxjs/add/operator/map';
import { Evaluation } from 'app/models/Evaluation';
import { Usuario } from 'app/models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  LocaisCollection: AngularFirestoreCollection<Local>;
  Locais: Observable<Local[]>
  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) {
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

  AtualizaObservable(){
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
  returnLocalByNome(nome: string) {
    this.Locais = this.afs.collection('locais', ref => ref.where('nome', '==', nome)).snapshotChanges().map(
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

  updateLocal(local: Local): Promise<void> {
    return this.getDocumentById(local.nome).update(local);
  }

  saveEvaluation(local: Local, evaluationQuestions: Array<Question>): Promise<void> {
    let evaluationNote = this.calculateEvaluation(evaluationQuestions);
    return this.createEvaluation(local.nome, evaluationNote)
      .then(() => {
        local.nota = evaluationNote.note;
        return this.updateLocal(local);
      })
      .catch();
  }

  private createEvaluation(id: string, evaluation: Evaluation){
    return this.afs.collection('locais').doc(id).collection('avaliacoes').add(evaluation);
  }

  private calculateEvaluation(evaluationQuestions: Array<Question>): Evaluation {
    let evaluationNote = { note: 0 } as Evaluation;

    evaluationQuestions.forEach(q => {
      if (q.option[0].value) {
        evaluationNote.note++;
      }

      if (q.option[0].value) {
        evaluationNote[q.id] = q.option[0].value;
      } else {
        evaluationNote[q.id] = false;
      }

    });

    return evaluationNote;
  }

  
}


