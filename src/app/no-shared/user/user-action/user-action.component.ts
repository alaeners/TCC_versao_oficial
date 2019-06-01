import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {

  focus;
  focus1;
  user = {
    nome: '',
    email: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService, private firestore: AngularFirestore) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('user-action-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('user-action-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  signup() {
    const data = {
      email: this.user.email,
      nome: this.user.nome,
      senha: this.user.password
    };
    
    this.authService.signUp(this.user.email, this.user.password)
      .then((res) => {
        this.firestore.collection('usuarios').add(data);
        this.router.navigate(['no-shared/dashboard']);
      })
      .catch(function (error) { alert(error) });

  }

}
