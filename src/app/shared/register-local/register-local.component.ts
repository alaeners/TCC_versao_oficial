import { Component, OnInit, OnDestroy } from '@angular/core';
import { CepService } from '../../services/cep.service';
import { Cep } from '../../cep';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-local',
  templateUrl: './register-local.component.html',
  styleUrls: ['./register-local.component.scss']
})
export class RegisterLocalComponent implements OnInit, OnDestroy {

  data: Date = new Date();
  focus;
  focus1;
  cep = new Cep();

  local = {
    nome: '',
    cnpj: '',
    tipo: '',
    endereco: {
      bairro: '',
      localidade: '',
      logradouro: '',
      numero: '',
      pais: '',
      uf: '',
      cep: ''
    },
    contato: {
      email: '',
      telefone: '',
      website: ''
    }
};

  constructor(private router: Router, private cepService: CepService, private firestore: AngularFirestore) { }

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

  inserirLocal() {
    const data = {
      nome: this.local.nome,
      cnpj: this.local.cnpj,
      tipo: this.local.tipo,
      contato: {
        email: this.local.contato.email,
        telefone: this.local.contato.telefone,
        website: this.local.contato.website
      },
      endereco: {
        bairro: this.cep.bairro,
        cep: this.cep.cep,
        localidade: this.cep.localidade,
        logradouro: this.cep.logradouro,
        numero: this.local.endereco.numero,
        pais: this.local.endereco.pais,
        uf: this.cep.uf
      }
    };
    return this.firestore.collection('locais').doc(this.local.nome).set(data);
  }
}
