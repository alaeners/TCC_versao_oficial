import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  // Login normal
  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // Sign up with email/password
  signUp(email, password) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("Cadastro Realizado com sucesso.");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      });
  }

  signOut(email, password) {
    this._firebaseAuth.auth.signOut();
  }

}
