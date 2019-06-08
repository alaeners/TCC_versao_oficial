import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { Local } from '../../../models/Local';
import { LocaisService } from '../../../services/local/locais.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Star } from 'app/models/Star';
import { AuthService } from '../../../services/auth/auth.service';
import { ApplicationStateService } from '../../../services/application-state/application-state.service';
import { StateEnum } from '../../../services/application-state/state-enum';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})

export class ListCardComponent implements OnInit, OnDestroy {

  tipo: string;
  nome: string;
  locais: Local[];
  config: any;
  collection = [];
  rate = new Array<Star>();
  public show: boolean = this.authService.authenticated;

  constructor(private route: ActivatedRoute, private router: Router, private locaisservice: LocaisService,
    private authService: AuthService, private applicationState: ApplicationStateService) {
    this.authService.user.subscribe(user => this.show = (user !== null));
    console.log(this.show);

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
  }

  pageChange(newPage: number) {
    this.router.navigate(['shared/list-local/list-card', this.route.snapshot.paramMap.get('tipo')], { queryParams: { page: newPage } });
  }

  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('list-card-page');

    this.tipo = this.route.snapshot.paramMap.get('tipo');
    this.route.queryParamMap
      .map(params => params.get('nome'))
      .subscribe(nome => this.nome = nome);

    if (this.tipo !== 'todos') {
      this.locaisservice.returnLocalByTipo(this.tipo);
    } else if (this.nome !== '') {
      this.locaisservice.returnLocalByNome(this.nome.toUpperCase());
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
        this.router.navigate(['shared/list-local']);
      })
      .catch(() => {
        alert('local nao foi deletado deletado');
        this.router.navigate(['shared/list-local']);
      });
  }

  calculateEvaluation(local: Local): boolean {
    let evaluationNote = 0;
    this.restartStarts();

    if (!isNullOrUndefined(local) && !isNullOrUndefined(local.nota)) {
      if (local.nota === 6) {
        evaluationNote = local.nota - 2;
      } else {
        evaluationNote = local.nota - 1;
      }

      for (let index = 0; index <= evaluationNote; index++) {
        this.rate[index].checked = true;
      }
    } 

    return true;
  }

  restartStarts():void{
    for (let index = 0; index <= 4; index++) {
      this.rate[index].checked = false;
    }
  }

  editLocal(local: Local): void {
    this.applicationState.setState(StateEnum.EDIT);
    this.applicationState.setLocalToEdit(local);
    this.applicationState.setPathToBack(this.router.url);
    this.router.navigate(['/shared/register-local']);
  }

  avaliar(local: Local): void {
    this.router.navigate(['shared/evaluate-screen', local.id]);
  }
}
