import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { Local } from '../../../models/Local';
import { LocaisService } from '../../../services/locais.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Star } from 'app/models/Star';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})

export class ListCardComponent implements OnInit, OnDestroy {

  tipo: string;
  locais: Local[];
  config: any;
  collection = [];
  rate = new Array<Star>();

  constructor(private route: ActivatedRoute, private router: Router, private locaisservice: LocaisService) {
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

    for (let i = 0; i < 5; i++) {
      this.rate.push(
        {
          position: i,
          checked: false,
          desc: i + 'Estrelas'
        } as Star
      );
    }

    this.calculateEvaluation(null);
  }

  pageChange(newPage: number) {
    this.router.navigate(['shared/list-local/list-card/:tipo'], { queryParams: { page: newPage } });
  }

  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('list-card-page');

    this.tipo = this.route.snapshot.paramMap.get('tipo');

    if (this.tipo !== 'todos') {
      this.locaisservice.returnLocalByTipo(this.tipo);
    }
    this.locaisservice.getLocais().subscribe(locais => {
      this.locais = locais;
    });
  }

  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('list-card-page');
  }

  deleteLocal(locais: Local) {
    this.locaisservice.deleteById(locais.nome)
      .then(() => {
        alert('local deletado');
      })
      .catch(() => {
        alert('local nao foi deletado deletado');
      });
  }

  calculateEvaluation(local: Local): void {
    const note = 2;

    for (let index = 0; index <= note; index++) {
      this.rate[index].checked = true;
    }
  }

  updateLocal() {
    this.locaisservice.updateLocal('Evando', {} as Local)
      .then(() => {
        alert('local alterado');
      })
      .catch(
        () => {
          alert('local nao foi alterado');
        }
      );
  }
}
