import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'app/services/user.service';
import { Usuario } from '../../models/Usuario';
import { StateEnum } from 'app/shared/application-state/state-enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  user = {
    nome: '',
    email: '',
    password: ''
  };
  id: string;
  usuarios: Usuario[];
  config: any;
  collection = [];
  applicationState: any;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private authService: AuthService, private firestore: AngularFirestore) {
 
    this.config = {
      currentPage: 1,
      itemsPerPage: 1
    };

    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);

    for (let i = 1; i <= 100; i++) {
      this.collection.push({ i });
    }
  }

  ngOnInit() {    
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('user-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.userService.getUser().subscribe(usuarios => {
      this.usuarios = usuarios;
    });  
 
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('user-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');    
  }

  pageChange(newPage: number) {
    this.router.navigate(['no-shared/user'], { queryParams: { page: newPage } });
  }

  cadastrar(){
    this.router.navigate(['no-shared/user-action']);    
  }

  reloadPage(){    
    window.location.reload();
  }

  deleteUser(usuarios: Usuario) {
    this.userService.deleteById(usuarios.id)
      .then(() => {
        alert('usuario deletado');
      })
      .catch(() => {
        alert('algo deu errado');
      });
  }

  editUsuario(usuarios: Usuario): void {
    this.applicationState.setState(StateEnum.EDIT);
    this.applicationState.setUserToEdit(usuarios);
    this.applicationState.setPathToBack(this.router.url);
    this.router.navigate(['no-shared/user-action']);
  }
}
