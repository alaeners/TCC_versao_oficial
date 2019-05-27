import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { LocaisService } from '../../services/locais.service';
import { Local } from '../../models/Local'

@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.scss']
})
export class ListLocalComponent implements OnInit, OnDestroy {

  data: Date = new Date();
  focus;
  focus1;
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;
  tipo: string;
  locais: Local[];
  constructor(private route: ActivatedRoute, private router: Router, private locaisservice: LocaisService) {
  }
  filterBy(size: string|null) {
    this.size$.next(size);
  }
  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('list-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.tipo = this.route.snapshot.paramMap.get('tipo');

    if (this.tipo !== 'todos'){
      this.locaisservice.returnLocalByTipo(this.tipo);
    }
    
    this.locaisservice.getLocais().subscribe(locais => this.locais = locais );

  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('list-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  shopping() {
    this.router.navigate(['shared/list-local', 'shopping']);
  }
  bar() {
    this.router.navigate(['shared/list-local', 'bar']);
  }
  pracas() {
    this.router.navigate(['shared/list-local', 'praca']);
  }

  cultural() {
    this.router.navigate(['shared/list-local', 'cultural']);
  }

  musical() {
    this.router.navigate(['shared/list-local', 'musical']);
  }

  outros() {
    this.router.navigate(['shared/list-local', 'outros']);
  }
}
