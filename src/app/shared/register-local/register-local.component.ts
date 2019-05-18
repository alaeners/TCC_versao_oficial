import { Component, OnInit } from '@angular/core';
import { CepService } from '../../services/cep.service';
import { Cep } from '../../cep';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-register-local',
  templateUrl: './register-local.component.html',
  styleUrls: ['./register-local.component.scss']
})
export class RegisterLocalComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;
  cep = new Cep();

  constructor(private cepService: CepService) {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  buscaCep() {
    this.cepService.buscaCep(this.cep.cep)
    .then((cep: Cep) => this.cep = cep);
  }
}
